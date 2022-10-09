import "./App.css";
import { ErrorBoundary } from "react-error-boundary";
import HeaderMain from "./component/AuthContext/HeaderMain";
import { AuthProvider } from "./contexts/auth-context";
import { GalleryProvider } from "./contexts/gallery-context";
import PhotoList from "./component/gallery/PhotoList";
import CartList from "./component/gallery/CartList";
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
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <AuthProvider>
        <GalleryProvider>
          <HeaderMain></HeaderMain>
          <PhotoList></PhotoList>
          <CartList></CartList>
        </GalleryProvider>
      </AuthProvider>
    </ErrorBoundary>
  );
}
export default App;
