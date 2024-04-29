import Landing from "./pages/landing/Landing";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";

let routes = [
  { path: "/" , element: <Landing/>},
  { path: "/login", element: <Login/> },
  { path: "/signup", element: <Signup /> },
];

export default routes