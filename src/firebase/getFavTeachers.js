// import { ref, get, query, orderByChild } from "firebase/database";
// import { db } from "./firebase";

// // Отримання списку id викладачів, які додані в улюблені користувачем
// export const getFavTeachers = async (userId) => {
//   const dbRef = ref(db, "/teachers"); // Замініть на шлях до вашої бази даних
// // Створюємо запит для впорядкування вчителів за полем "followers"
// const queryByFollowers = query(dbRef, orderByChild("followers"));

// // Виконуємо запит до бази даних
// get(queryByFollowers)
//   .then((snapshot) => {
//     const teachersWithCurrentUser = [];
//     snapshot.forEach((childSnapshot) => {
//       const teacher = childSnapshot.val();
//       if (teacher.followers && teacher.followers.includes(userId)) {
//         teachersWithCurrentUser.push(teacher.id);
//       }
//     });

//     console.log(teachersWithCurrentUser);
//     return teachersWithCurrentUser;
//   })
//   .catch((error) => {
//     console.error("Error fetching data:", error);
//     return [];
//   });

// };