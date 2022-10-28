import React from "react";
import {
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword,
  getAuth,
} from "firebase/auth";
import { auth, db } from "./firebase-config";

const FirebaseAuth = () => {
  const auth = getAuth();
  const [values, setValues] = React.useState({
    email: "",
    password: "",
  });
  const [userInfo, setUserInfo] = React.useState("");
  const handleChangeValues = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };
  const handleCreateUser = async (e) => {
    e.preventDefault();
    const user = await createUserWithEmailAndPassword(
      auth,
      values.email,
      values.password
    );
    if (user) setUserInfo(user);
    console.log("handleCreateUser", user);
    console.log("Create user success fully");
  };
  return (
    <div className="p-10">
      <div className="w-full max-w-[500px] mx-auto bg-white shadow-lg p-5">
        <form onSubmit={handleCreateUser}>
          <input
            onChange={handleChangeValues}
            type="text"
            placeholder="Enter your email"
            className="w-full p-3 mb-5 border border-gray-200 rounded outline-none focus:border-blue-200"
            name="email"
          />
          <input
            onChange={handleChangeValues}
            type="text"
            placeholder="Enter your password"
            className="w-full p-3 mb-5 border border-gray-200 rounded outline-none focus:border-blue-200"
            name="password"
          />
          <button
            type="submit"
            className="w-full p-3 text-sm font-medium text-white bg-blue-400 rounded-lg"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default FirebaseAuth;
