import "./App.css";
import { useRoutes } from "react-router-dom";
import routes from "./routes";
import ThemeContextProvider from "./context/ThemeContext";
import ThemeUpdateContext from "./context/ThemeContext";

function App() {
  let router = useRoutes(routes);

  return (
    <ThemeContextProvider>
      <ThemeUpdateContext>
        <div>{router}</div>
      </ThemeUpdateContext>
    </ThemeContextProvider>
  );
}
export default App;
