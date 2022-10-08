import "./App.css";
import { ErrorBoundary } from "react-error-boundary";
import { CounterProvider, useCount } from "./contexts/countContext";
function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
}

const CountDisplay = () => {
  const [counter] = useCount();
  console.log(counter);
  return <div className="text-purple-500">Increment: {counter}</div>;
};
const Counter = () => {
  const [, setCounter] = useCount();
  const increment = () => {
    setCounter((c) => c + 1);
  };
  return (
    <button
      className="px-3 py-2 ml-6 text-white bg-blue-400 rounded-lg"
      onClick={increment}
    >
      Increment
    </button>
  );
};

function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <div className="flex items-center justify-center h-screen">
        <CounterProvider>
          <CountDisplay></CountDisplay>
          <Counter></Counter>
        </CounterProvider>
      </div>
    </ErrorBoundary>
  );
}
export default App;
