import React, { useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase-config";
const FirebaseApp = () => {
  useEffect(() => {
    const colRef = collection(db, "posts");
    getDocs(colRef).then((snapshot) => {
      let post = [];
      snapshot.docs.forEach((doc) => {
        post.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      console.log(post);
    });
  });
  return <div></div>;
};

export default FirebaseApp;
