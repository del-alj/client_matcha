import { Login } from "../pages/login/index.js";
import { ForgotPassword } from "../pages/login/forgotPassword";
import { Signup } from "../pages/signup/index.js";
import { Home } from "../pages/home/index.js";
import { UserProfile } from "../pages/userProfile/index.js";
import { ConfirmSignup } from "../pages/signup/confirmSignup";
import { Confirmation } from "../pages/login/confirmation";
import { ResetPassword } from "../pages/login/resetPassword";
import { ConfirmForgotPassword } from "../pages/login/confirmForgotPassword";
import { EditProfile } from "../pages/editProfile/index";
const routes = [
  {
    path: "/",
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
    path: "/EditProfile",
    component: EditProfile,
  },
  {
    path: "/confirmSignup",
    component: ConfirmSignup,
  },
  {
    path: "/confirmation/:token",
    component: Confirmation,
  },
  {
    path: "/reset/:token",
    component: ResetPassword,
  },
  {
    path: "/reset",
    component: ConfirmForgotPassword,
  },
];

export { routes };
