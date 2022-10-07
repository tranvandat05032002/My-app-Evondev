import React, { useState } from "react";
import ModalAdvanced from "./component/modal/ModalAdvanced";
import ModalBase from "./component/modal/ModalBase";
import TooltipAdvanced from "./component/tooltip/TooltipAdvanced";

const Chapter8 = () => {
  const [showModalLorem, setShowModalLorem] = useState(false);
  const [showModalForm, setShowModalForm] = useState(false);
  return (
    <div className="flex items-center justify-center h-screen">
      <div>
        <button
          className="px-3 py-2 mr-3 text-center text-white bg-blue-400 rounded-full"
          onClick={() => setShowModalLorem(true)}
        >
          Show modal
        </button>
        <button
          className="px-3 py-2 mr-40 text-white bg-blue-400 rounded-full"
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
          <TooltipAdvanced text="Tooltip 2">
            This is tooltip two
          </TooltipAdvanced>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore
          cupiditate, quas modi laborum molestiae, repudiandae voluptates
          molestias, quo sit nostrum eius ex consequatur excepturi nihil quia?
          Modi voluptas a dolor?
        </div>
      </ModalBase>

      <ModalAdvanced
        visible={showModalForm}
        onClose={() => setShowModalForm(false)}
        bodyClassName="w-full max-w-[420px] bg-white p-10 rounded-lg"
        heading="Welcome Back !"
      >
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
      </ModalAdvanced>

      <TooltipAdvanced text="Hover Me">This is TooltipAdvanced</TooltipAdvanced>
    </div>
  );
};

export default Chapter8;
