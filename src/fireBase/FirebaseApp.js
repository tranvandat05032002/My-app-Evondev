import React, { useEffect } from "react";
import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
  onSnapshot,
  serverTimestamp,
  updateDoc,
  getDoc,
} from "firebase/firestore";
import { db } from "./firebase-config";
import { useState } from "react";
const FirebaseApp = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [postID, setPostID] = useState("");
  const [posts, setPosts] = useState([]);
  const [updateTitle, setUpdateTitle] = useState("");
  const [updateAuthor, setUpdateAuthor] = useState("");
  const colRef = collection(db, "posts");
  useEffect(() => {
    // 1.
    // getDocs(colRef)
    //   .then((snapshot) => {
    //     let post = [];
    //     snapshot.docs.forEach((doc) => {
    //       post.push({
    //         id: doc.id,
    //         ...doc.data(),
    //       });
    //     });
    //     setPosts(post);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    // 2. get document in realtime method snapshot of fireStore
    onSnapshot(colRef, (snapShot) => {
      let post = [];
      snapShot.docs.forEach((doc) => {
        post.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      setPosts(post);
    });

    const docRefSingle = doc(db, "posts", "Iwj5eEiCj6HTrSuVpg7B");
    // getDoc haven't realtime
    getDoc(docRefSingle).then((doc) => {
      console.log(doc.id, doc.data());
    });
    // getDoc with realtime
    onSnapshot(docRefSingle, (doc) => {
      console.log("RealTime: ", doc.id, doc.data());
    });
  }, []);

  const handleAddPost = async (e) => {
    e.preventDefault();
    await addDoc(colRef, {
      title,
      author,
      createdAt: serverTimestamp(),
    });
    //   .then((success) => {
    //     console.log("SuccessFully");
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  };
  const handleRemovePost = async (e) => {
    e.preventDefault();
    const colRefRemove = doc(db, "posts", postID);
    await deleteDoc(colRefRemove);
    console.log("Success remove");
  };
  const handleUpdatePost = async (e) => {
    e.preventDefault();
    const colRefUpdate = doc(db, "posts", postID);
    await updateDoc(colRefUpdate, {
      title: updateTitle,
      author: updateAuthor,
    });
    console.log("Update success");
  };
  return (
    <div className="p-10">
      <div className="w-full max-w-[500px] mx-auto bg-white shadow-lg p-5">
        <form onSubmit={handleAddPost}>
          <input
            type="text"
            placeholder="Enter your title"
            className="w-full p-3 mb-5 border border-gray-200 rounded outline-none focus:border-blue-200"
            name="title"
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter your author"
            className="w-full p-3 mb-5 border border-gray-200 rounded outline-none focus:border-blue-200"
            name="author"
            onChange={(e) => setAuthor(e.target.value)}
          />
          <button
            type="submit"
            className="w-full p-3 text-sm font-medium text-white bg-blue-400 rounded-lg"
          >
            Add post
          </button>
        </form>
      </div>
      <div className="w-full max-w-[500px] mx-auto bg-white shadow-lg p-5 mt-10">
        <form onSubmit={handleRemovePost}>
          <input
            type="text"
            placeholder="Enter your ID"
            className="w-full p-3 mb-5 border border-gray-200 rounded outline-none focus:border-blue-200"
            name="postID"
            onChange={(e) => setPostID(e.target.value)}
          />
          <button
            type="submit"
            className="w-full p-3 text-sm font-medium text-white bg-red-400 rounded-lg"
          >
            Remove post
          </button>
        </form>
      </div>
      <div className="w-full max-w-[500px] mx-auto bg-white shadow-lg p-5">
        <form onSubmit={handleUpdatePost}>
          <input
            type="text"
            placeholder="Enter your title update"
            className="w-full p-3 mb-5 border border-gray-200 rounded outline-none focus:border-blue-200"
            name="title"
            onChange={(e) => setUpdateTitle(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter your new author"
            className="w-full p-3 mb-5 border border-gray-200 rounded outline-none focus:border-blue-200"
            name="author"
            onChange={(e) => setUpdateAuthor(e.target.value)}
          />
          <button
            type="submit"
            className="w-full p-3 text-sm font-medium text-white bg-orange-400 rounded-lg"
          >
            Update post
          </button>
        </form>
      </div>
      <div className="w-full max-w-[500px] mx-auto bg-white shadow-lg p-5 mt-10">
        {posts.length > 0 &&
          posts.map((post) => (
            <div className="" key={post.id}>
              <span className="text-red-300">{post.author}: </span>
              <span>{post.title}</span>
            </div>
          ))}
      </div>
    </div>
  );
};

export default FirebaseApp;
