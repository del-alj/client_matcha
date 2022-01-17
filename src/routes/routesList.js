import { Login } from "../pages/login/index.js";
import { ForgotPassword } from "../pages/login/forgotPassword";
import { Signup } from "../pages/signup/index.js";
import { Home } from "../pages/home/index.js";
import { UserProfile } from "../pages/userProfile/index.js";
import { ConfirmSignup } from "../pages/signup/confirmSignup";
import { Confirmation } from "../pages/login/confirmation";

const routes = [
  {
    path: "/home",
    component: Home,
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/change-password",
    component: ForgotPassword,
  },
  {
    path: "/signup",
    component: Signup,
  },
  {
    path: "/profile",
    component: UserProfile,
  },
  {
    path: "/confirmSignup",
    component: ConfirmSignup,
  },
  {
    path: "/confirmation/:token",
    component: Confirmation,
  },
];

export { routes };
