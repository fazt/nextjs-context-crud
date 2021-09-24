import "../styles/globals.css";
// import 'tailwindcss/tailwind.css'
import { TasksProvider } from "../context/TasksContext";

function MyApp({ Component, pageProps }) {
  return (
    <TasksProvider>
      <Component {...pageProps} />
    </TasksProvider>
  );
}

export default MyApp;
