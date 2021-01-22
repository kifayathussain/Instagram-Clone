import { createElement } from "../react";
import img1 from "../../public/Insta.png";
import img2 from "../../public/Insta2.png";
import img3 from "../../public/Insta3.png";
import { footer } from "../components/footer";
export const login = () => {
  const form = createElement(
    "div",
    { class: "formContainer" },
    // image division
    createElement(
      "div",
      { class: "loginImgDiv" },
      createElement(
        "div",
        { class: "loginImg" },
        createElement("img", { src: img1 })
      )
    ),

    // form division

    createElement(
      "div",
      { class: "formDiv" },
      createElement(
        "div",
        { class: "uperDiv" },
        createElement("img", {
          class: "logo",
          src:
            "https://1000logos.net/wp-content/uploads/2017/02/Instagram-Logo.png",
        }),

        createElement("input", {
          id: "inputEmail",
          placeholder: "Mobile Number OR Email",
          class: "input",
        }),
        createElement("input", {
          id: "InputPassword",
          placeholder: "Password",
          type: "password",
          class: "input",
        }),
        createElement(
          "a",
          { id: "login-btn", href: "/home", class: "btn" },
          "Log In"
        ),
        createElement("h5", { class: "or" }, "OR"),
        createElement(
          "a",
          { class: "fblink", href: "https://www.facebook.com/" },
          createElement(
            "i",
            { class: "fab fa-facebook" },
            "&nbsp;&nbsp;Log in with facebook"
          )
        ),
        createElement(
          "p",
          { style: "color:#385184;" },
          createElement(
            "a",
            {
              href: "https://www.instagram.com/accounts/password/reset/",
              style: "text-decoration: none;",
            },
            "Forgot Password?"
          )
        )
      ),
      createElement(
        "div",
        { class: "bottomDiv" },
        createElement(
          "p",
          null,
          "Don't have an account? <a href='';>Sign up</a>"
        )
      ),
      createElement(
        "p",
        { style: "text-align:center; margin-left:50px" },
        "Get the app."
      ),
      createElement(
        "div",
        { class: "imglink" },
        createElement("img", {
          src: img2,
          href:
            "https://itunes.apple.com/app/instagram/id389801252?pt=428156&ct=igweb.loginPage.badge&mt=8&vt=lo",
        }),
        createElement("img", {
          src: img3,
          href:
            "https://itunes.apple.com/app/instagram/id389801252?pt=428156&ct=igweb.loginPage.badge&mt=8&vt=lo",
        })
      )
    )
  );

  const footerDiv = createElement("div", { class: "all-footer" }, footer());

  return createElement("section", null, form, footerDiv);
};
