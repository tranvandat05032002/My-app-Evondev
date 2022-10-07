import { useState } from "react";
import "./App.css";
import ModalBase from "./component/modal/ModalBase";

function App() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      <button
        className="px-3 py-2 mt-5 ml-5 text-center text-white bg-blue-400 rounded-full"
        onClick={() => setShowModal(true)}
      >
        Show modal
      </button>
      <ModalBase visible={showModal} onClose={() => setShowModal(false)}>
        <div className="bg-white max-w-[350px] w-full p-5 rounded-lg ">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore
          cupiditate, quas modi laborum molestiae, repudiandae voluptates
          molestias, quo sit nostrum eius ex consequatur excepturi nihil quia?
          Modi voluptas a dolor?
        </div>
      </ModalBase>
    </div>
  );
}
export default App;
