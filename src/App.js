import "./App.css";
import { useRoutes } from "react-router-dom";
import routes from "./routes";
import UserContext from "./context/userContext";
import { useState } from "react";

function App() {

  const [isLoggedIn , setIsLoggedIn] = useState(false);
  const [userInfo , setUserInfo] = useState(false);
  let router = useRoutes(routes);

  return <UserContext.Provider value={
    {isLoggedIn ,userInfo , login: () => {}}
  }>{router}</UserContext.Provider>;
}
export default App;
