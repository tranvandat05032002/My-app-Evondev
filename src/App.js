import { Fragment, useState } from "react";
import "./App.css";

import Modal from "./component/modal/Modal";
import DropDownPortal from "./component/useRef/DropDown/DropDownPortal";
function App() {
  const [showModal, setShowModal] = useState(false);
  return (
    <Fragment>
      <div className="relative z-30">
        <div>
          <Modal
            open={showModal}
            handleClose={() => setShowModal(false)}
          ></Modal>
        </div>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </div>
      <button
        className="px-4 py-2 text-white bg-blue-400 rounded-lg "
        onClick={() => setShowModal(true)}
      >
        Show modal
      </button>

      <DropDownPortal></DropDownPortal>
    </Fragment>
  );
}

export default App;
