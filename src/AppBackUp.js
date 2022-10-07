import { Fragment } from "react";
import "./App.css";
// import ComponentTooltip from "./component/tooltip/ComponentTooltip";
import Game from "./component/tictactoe/Game";
import { ErrorBoundary } from "react-error-boundary";

// import Modal from "./component/modal/Modal";
// import DropDownPortal from "./component/useRef/DropDown/DropDownPortal";
function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
}
function App() {
  // const [showModal, setShowModal] = useState(false);
  return (
    <Fragment>
      {/* <div className="relative z-30">
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

      <DropDownPortal></DropDownPortal> */}
      {/* <ComponentTooltip></ComponentTooltip> */}

      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Game></Game>
      </ErrorBoundary>
    </Fragment>
  );
}

export default App;
