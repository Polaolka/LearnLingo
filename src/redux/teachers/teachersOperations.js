import { createAsyncThunk } from "@reduxjs/toolkit";
import { ref, child, get, update } from "firebase/database";
import { db } from "../../firebase/firebase";
import { toast } from "react-toastify";

export const getAllTeachers = createAsyncThunk(
  "teachers/getAllTeachers",
  async (_, thunkAPI) => {
    const dbRef = ref(db);

    try {
      const snapshot = await get(child(dbRef, "/teachers"));

      if (snapshot.exists()) {
        const data = snapshot.val();

        const allTeachers = Object.values(data);

        return allTeachers;
      } else {
        toast.warn("No data available");
      }
    } catch (error) {
      console.error(error);
      toast.error(`${error}`);
    }
  }
);

export const d = createAsyncThunk(
  "teachers/removeFromFavTeachers",
  async (data, thunkAPI) => {
    const dbRef = ref(db);

    try {
      const followersRef = child(dbRef, `/teachers/${data.id}/followers`);
      const followersSnapshot = await get(followersRef);

      const teacherFollowers = followersSnapshot.val();

      if (teacherFollowers) {
        const renovatedTeacherFollowers = teacherFollowers.filter(
          (value) => value !== data.userId
        );
        await update(ref(db, data.id), {
          followers: renovatedTeacherFollowers,
        });
        return teacherFollowers;
      } else {
        toast.warn("No data available");
        return [];
      }
    } catch (error) {
      console.error(error);
      toast.error(`${error}`);
    }
  }
);

////////////////////////////////////////////////////////////////////
// цей код було використано для додавання викладачів з заданим id //
////////////////////////////////////////////////////////////////////

// export const addTeachers = createAsyncThunk(
//   "teachers/addTeachers",
//   async (data, thunkAPI) => {
//     jsonData.forEach((teacherData) => {
//       set(ref(db, "teachers/" + teacherData.id), {
//         ...teacherData,
//       });
//     });

//     console.log("Дані завантажено успішно!");
//   }
// );
