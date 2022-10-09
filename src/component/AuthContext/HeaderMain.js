import React from "react";
import { useAuth } from "../../contexts/auth-context";

const HeaderMain = () => {
  const { user, setUser } = useAuth();
  console.log(user);
  return (
    <div className="flex items-center justify-center p-3 bg-white shadow-md">
      {user ? (
        <div className="flex items-center gap-x-2">
          <img
            src={user.avatar}
            alt="information technology"
            className="object-cover w-12 h-12 rounded-full cursor-pointer"
          />
          <span className="text-sm font-medium">
            Dev
            <strong> {user.name}</strong>
          </span>
        </div>
      ) : (
        <span>Login</span>
      )}

      <div className="ml-auto">
        <button
          className="p-2 ml-auto text-black bg-gray-300 rounded-md"
          onClick={() => {
            setUser(null);
          }}
        >
          {user ? "Sign out" : "Log in"}
        </button>
      </div>
    </div>
  );
};

export default HeaderMain;
