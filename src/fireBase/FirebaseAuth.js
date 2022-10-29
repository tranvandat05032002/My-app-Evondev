import React from "react";
import {
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";
import { auth, db } from "./firebase-config";
import { addDoc, collection } from "firebase/firestore";

const FirebaseAuth = () => {
  const [userInfo, setUserInfo] = React.useState("");
  const auth = getAuth();
  const [values, setValues] = React.useState({
    email: "",
    password: "",
  });
  React.useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      currentUser ? setUserInfo(currentUser) : setUserInfo("");
    });
  }, []);
  const handleSignOut = () => {
    signOut(auth);
  };
  const handleChangeValues = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };
  const handleCreateUser = async (e) => {
    e.preventDefault();
    try {
      const createDental = await createUserWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );
      await updateProfile(auth.currentUser, {
        displayName: "Tran Van Dat",
      });
      setUserInfo(values);
      const userColRef = collection(db, "Users");
      await addDoc(userColRef, {
        id: createDental.user.uid,
        email: values.email,
        password: values.password,
      });
    } catch (error) {
      console.log(error);
    }
  };

  // Handle Login
  const handleLogin = async (e) => {
    e.preventDefault();
    const createDental = await signInWithEmailAndPassword(
      auth,
      values.email,
      values.password
    );
    setUserInfo(createDental);
  };
  return (
    <React.Fragment>
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
          <div className="flex items-center mt-10 gap-x-5">
            <span>{userInfo.user?.displayName}</span>
            <button
              className="p-3 text-sm font-medium text-white bg-blue-400 rounded-lg"
              onClick={handleSignOut}
            >
              Sign Out
            </button>
          </div>
        </div>
      </div>
      <div className="w-full max-w-[500px] mx-auto bg-white shadow-lg p-5 ">
        <form onSubmit={handleLogin}>
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
            className="w-full p-3 text-sm font-medium text-white bg-purple-400 rounded-lg"
          >
            Login
          </button>
        </form>
      </div>
    </React.Fragment>
  );
};

export default FirebaseAuth;
