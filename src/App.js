import "./App.css";
import { useRoutes } from "react-router-dom";
import routes from "./routes";
import ThemeContextProvider from "./context/ThemeContext";
import { useTheme } from "./context/ThemeContext";
import MainContextProvider from "./context/MainContext";

function App() {
  let router = useRoutes(routes);
  const { theme } = useTheme();

  return (
    <MainContextProvider>
      <ThemeContextProvider>
        <div className={theme}>{router}</div>
      </ThemeContextProvider>
    </MainContextProvider>

  );
}
export default App;
