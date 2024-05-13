import { createContext } from "react";

const userContext = createContext({
  isLoggedIn: false,
  userInfo: null,
  login: () => {},
});


export default userContext