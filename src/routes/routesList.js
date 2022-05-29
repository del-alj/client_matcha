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
import { Dashboard } from "../pages/dashboard/index";
import { AdvanceSearch } from "../pages/advanceSearch/index.js";
import { Messages } from "../pages/messages/index";
import { NotificationsPage } from "../pages/notifications/index";
import { Report } from "../pages/report/index";

const publicRoutes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/login",
    component: Login,
    restricted: true,
  },
  {
    path: "/change-password",
    component: ForgotPassword,
    restricted: true,
  },
  {
    path: "/signup",
    component: Signup,
    restricted: true,
  },
  {
    path: "/confirmation/:token",
    component: Confirmation,
  },
  {
    path: "/error",
    component: Report,
  },
];

const privateRoutes = [
  {
    path: "/profile",
    component: UserProfile,
  },
  {
    path: "/profile/edit",
    component: EditProfile,
  },
  {
    path: "/confirmSignup",
    component: ConfirmSignup,
  },
  {
    path: "/reset/:token",
    component: ResetPassword,
  },
  {
    path: "/reset",
    component: ConfirmForgotPassword,
  },
  {
    path: "/dashboard",
    component: Dashboard,
  },
  {
    path: "/advanceSearch",
    component: AdvanceSearch,
  },
  {
    path: "/user/:id",
    component: UserProfile,
  },
  {
    path: "/messages",
    component: Messages,
  },
  {
    path: "/notifications",
    component: NotificationsPage,
  },
];

export { publicRoutes, privateRoutes };
