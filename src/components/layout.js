import { profile } from "./profile";
import { home } from "./home";
import { explore } from "./explore";
import { messenger } from "./messenger";
import { notification } from "./notification";
import { login } from "./login";
import { Ereror } from "./error";
import { modelBox } from "./modelBox";

export const Layout = () => {
  if (location.pathname === "/") {
    return login();
  } else if (location.pathname === "/home") {
    return home();
  } else if (location.pathname === "/profile") {
    return profile();
  } else if (location.pathname === "/explore") {
    return explore();
  } else if (location.pathname === "/messenger") {
    return messenger();
  } else {
    return Ereror();
  }
};
