import { Signup, Signin } from "views/auth";
import Home from "views/home";

const routes = [
  {
    name: "Home",
    path: "home",
    component: <Home />,
    layout: "client",
  },
  {
    name: "Sign In",
    path: "sign-in",
    component: <Signin />,
    layout: "auth",
  },
  {
    name: "Sign Up",
    path: "sign-up",
    component: <Signup />,
    layout: "auth",
  },
];

export default routes;
