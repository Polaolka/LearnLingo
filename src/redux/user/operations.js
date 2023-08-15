import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  ref,
  get,
  update,
} from "firebase/database";
import { db } from "../../firebase/firebase";
import { toast } from "react-toastify";

export const getFavTeachers = createAsyncThunk(
  "user/getFavTeachers",
  async (userId, thunkAPI) => {
    const dbRef = ref(db, "/teachers");

    try {
      const snapshot = await get(dbRef);
      const teachersWithCurrentUser = [];
      snapshot.forEach((childSnapshot) => {
        const teacher = childSnapshot.val();
        if (teacher.followers && teacher.followers.includes(userId)) {
          teachersWithCurrentUser.push(teacher.id);
        }
      });
      return teachersWithCurrentUser;
    } catch (error) {
      console.error("Error fetching data:", error);
      return [];
    }
  }
);




export const addToFavTeachers = createAsyncThunk(
  "teachers/addToFavTeachers",
  async (data, thunkAPI) => {
    const teacherRef = ref(db, `/teachers/${data.id}`);
    try {
      const teacherSnapshot = await get(teacherRef);
      const teacherData = teacherSnapshot.val();

      if (teacherData) {

        const newFollowers = [
          ...(teacherData.followers || []),
          data.newFollower,
        ];

        await update(teacherRef, {
          ...teacherData,
          followers: newFollowers,
        });
        return data.id; 
      } else {
        console.error("Teacher not found.");
        toast.error("Teacher not found.");
        return ''; 
      }
    } catch (error) {
      console.error(error);
      toast.error(`${error}`);
      return ''; 
    }
  }
);

export const removeFromFavTeachers = createAsyncThunk(
  "teachers/removeFromFavTeachers",
  async (data, thunkAPI) => {
    const teacherRef = ref(db, `/teachers/${data.id}`);
    try {
      const teacherSnapshot = await get(teacherRef);
      const teacherData = teacherSnapshot.val();
      if (teacherData) {
        const newFollowers = 
          teacherData.followers.filter((follower)=>follower !== data.removedFollower);
        await update(teacherRef, {
          ...teacherData,
          followers: newFollowers,
        });
        return data.id; 
      } else {
        console.error("Teacher not found.");
        toast.error("Teacher not found.");
        return ''; 
      }
    } catch (error) {
      console.error(error);
      toast.error(`${error}`);
      return ''; 
    }
  }
);