import "../styles/globals.css";
import { StudentsProvider } from "../contexts/StudentsContext.js";

function MyApp({ Component, pageProps }) {
  return (
    <StudentsProvider>
      <Component {...pageProps} />
    </StudentsProvider>
  );
}

export default MyApp;
