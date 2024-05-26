import "./App.css";
import { useRoutes } from "react-router-dom";
import routes from "./routes";
import ThemeContextProvider from "./context/ThemeContext";
import ThemeUpdateContext from "./context/ThemeContext";
import { useTheme } from "./context/ThemeContext";

function App() {
  let router = useRoutes(routes);
  const isDarkTheme = useTheme();

  return (
    <ThemeContextProvider>
      <ThemeUpdateContext>
        <div className={isDarkTheme ? "dark" : "light"}>{router}</div>
      </ThemeUpdateContext>
    </ThemeContextProvider>
  );
}
export default App;
