import { useState } from "react";
import "./App.css";
import ModalAdvanced from "./component/modal/ModalAdvanced";
import ModalBase from "./component/modal/ModalBase";

function App() {
  const [showModalLorem, setShowModalLorem] = useState(false);
  const [showModalForm, setShowModalForm] = useState(false);
  return (
    <div>
      <div className="flex justify-center mt-5 ml-5">
        <button
          className="px-3 py-2 mr-3 text-center text-white bg-blue-400 rounded-full"
          onClick={() => setShowModalLorem(true)}
        >
          Show modal
        </button>
        <button
          className="px-3 py-2 text-white bg-blue-400 rounded-full"
          onClick={() => {
            setShowModalForm(true);
          }}
        >
          Show modalForm
        </button>
      </div>
      <ModalBase
        visible={showModalLorem}
        onClose={() => setShowModalLorem(false)}
      >
        <div className="bg-white max-w-[350px] w-full p-5 rounded-lg ">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore
          cupiditate, quas modi laborum molestiae, repudiandae voluptates
          molestias, quo sit nostrum eius ex consequatur excepturi nihil quia?
          Modi voluptas a dolor?
        </div>
      </ModalBase>

      <ModalAdvanced
        visible={showModalForm}
        onClose={() => setShowModalForm(false)}
      >
        <div className="relative z-10  w-full max-w-[482px] bg-white rounded-lg p-10 modal-content">
          <h2 className="font-semibold text-[40px] text-center mb-5">
            Welcome Back!
          </h2>
          <div className="flex flex-col gap-3 mb-5">
            <label htmlFor="email" className="cursor-pointer">
              Email address
            </label>
            <input
              type="text"
              placeholder="Enter your email"
              className="p-[14px] w-full rounded-lg leading-normal text-sm bg-[#E7ECF3]"
              name="email"
              id="email"
            />
          </div>
          <div className="flex flex-col gap-3 mb-5">
            <label htmlFor="password" className="cursor-pointer">
              Password
            </label>
            <input
              type="text"
              placeholder="Enter your password"
              className="p-[14px] w-full rounded-lg leading-normal text-sm bg-[#E7ECF3]"
              name="password"
              id="password"
            />
          </div>

          <p className="text-right text-[#5a89ff] font-medium text-[14px] mb-5">
            Forgot your password?
          </p>
          <button className="w-full bg-[#316BFF] text-[#FFFAF7] py-[11px] rounded-lg font-normal">
            Sign in
          </button>
          <span
            className="absolute top-[5px] right-0 cursor-pointer w-[38px] h-[38px] bg-[#FFFFFF] flex items-center justify-center rounded-full p-1 -translate-y-2/4 translate-x-2/4 border border-gray-200"
            onClick={() => setShowModalForm(false)}
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.225 7L13.7375 1.4875C14.0875 1.1375 14.0875 0.6125 13.7375 0.2625C13.3875 -0.0875 12.8625 -0.0875 12.5125 0.2625L7 5.775L1.4875 0.2625C1.1375 -0.0875 0.6125 -0.0875 0.2625 0.2625C-0.0874998 0.6125 -0.0874998 1.1375 0.2625 1.4875L5.775 7L0.2625 12.5125C0.0875002 12.6875 0 12.8625 0 13.125C0 13.65 0.35 14 0.875 14C1.1375 14 1.3125 13.9125 1.4875 13.7375L7 8.225L12.5125 13.7375C12.6875 13.9125 12.8625 14 13.125 14C13.3875 14 13.5625 13.9125 13.7375 13.7375C14.0875 13.3875 14.0875 12.8625 13.7375 12.5125L8.225 7Z"
                fill="#84878B"
              />
            </svg>
          </span>
        </div>
      </ModalAdvanced>
    </div>
  );
}
export default App;
