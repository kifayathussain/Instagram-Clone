import { createElement } from "../react";
import { footer } from "./footer";
import { Header } from "../components/header";
import { notification } from "./notification";
import { modelBox } from "./modelBox";

export const profile = () => {
  const profileSection = createElement(
    "div",
    { class: "profileContainer" },
    createElement(
      "div",
      { class: "profileSection" },
      // profile image section
      createElement(
        "div",
        { class: "imgContainer" },
        createElement("img", {
          class: "proimg",
          src:
            "https://instagram.fisb5-1.fna.fbcdn.net/v/t51.2885-15/e35/134944844_232419798263042_7386018853170716323_n.jpg?_nc_ht=instagram.fisb5-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=oSjcleP4koAAX-y2ymU&tp=1&oh=82e831735b98793b25a787c9559649df&oe=60282D70",
        })
      ),

      // discreption Container
      createElement(
        "div",
        { class: "discreptionContainer" },
        createElement(
          "div",
          null,
          createElement("span", { class: "username" }, "kifayatkifoo136"),
          createElement(
            "span",
            null,
            createElement("button", { class: "editBtn" }, "Edit Profile")
          ),
          createElement("i", { class: "fa fa-cog" })
        ),
        createElement(
          "div",
          null,
          createElement("span", { class: "profilePost" }, "<b> 28 </b> Posts"),
          createElement(
            "span",
            { class: "profilePost" },
            "<b>146 </b> followers"
          ),
          createElement(
            "span",
            { class: "profilePost" },
            "<b>146 </b> following"
          )
        ),

        createElement("p", null, "<b>kifayat kifoo</b>"),
        createElement("p", null, "meer -e- mehfill")
      )
    ),

    createElement("hr", null),
    createElement(
      "div",
      { class: "links" },
      createElement(
        "i",
        { class: "link fa fa-th" },
        ' &nbsp;  <a href="">POSTS</a>'
      ),
      createElement(
        "i",
        { class: "link fa fa-tv" },
        ' &nbsp;  <a href="">IGTV</a>'
      ),
      createElement(
        "i",
        { class: "link far fa-bookmark" },
        ' &nbsp;   <a href="">SAVED</a>'
      ),
      createElement(
        "i",
        { class: "link fa fa-id-badge" },
        ' &nbsp;   <a href="">TAGGED</a>'
      )
    )

    // gallery
  );
  let a = [
    {
      imgsrc:
        "https://instagram.fisb5-1.fna.fbcdn.net/v/t51.2885-15/e35/134944844_232419798263042_7386018853170716323_n.jpg?_nc_ht=instagram.fisb5-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=oSjcleP4koAAX-y2ymU&tp=1&oh=82e831735b98793b25a787c9559649df&oe=60282D70",
    },
    {
      imgsrc:
        "https://instagram.fisb5-1.fna.fbcdn.net/v/t51.2885-15/e35/118712186_411099289860573_1451770521398276991_n.jpg?_nc_ht=instagram.fisb5-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=J23ALa_Op2sAX_jh1T2&tp=1&oh=b3a2666fecbd8fbb60b0b82f0089ac80&oe=602A3E80",
    },
    {
      imgsrc:
        "https://instagram.fisb5-1.fna.fbcdn.net/v/t51.2885-15/e35/116907540_754959191923042_6219581054835634309_n.jpg?_nc_ht=instagram.fisb5-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=t9FBj3AZERYAX9yY43D&tp=1&oh=1f5a43edd262a59f09990ce7f2525076&oe=60285522",
    },
    {
      imgsrc:
        "https://instagram.fisb5-1.fna.fbcdn.net/v/t51.2885-15/e35/106031545_1429499090571507_2182398040872607801_n.jpg?_nc_ht=instagram.fisb5-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=8Erkpur2xlcAX_akiXW&tp=1&oh=4e68514c63b8dd2f097368d413788e2e&oe=6026BF92",
    },
    {
      imgsrc:
        "https://instagram.fisb5-1.fna.fbcdn.net/v/t51.2885-15/e35/101492944_110201593913712_5819216545209008507_n.jpg?_nc_ht=instagram.fisb5-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=HaRKl7lc1t8AX8NDZmL&tp=1&oh=1562f70d2db4b30275b6452ea36c4a02&oe=60294114",
    },
    {
      imgsrc:
        "https://instagram.fisb5-1.fna.fbcdn.net/v/t51.2885-15/e35/82480125_900364083712961_2300730102031587495_n.jpg?_nc_ht=instagram.fisb5-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=Ll7yR3DvqcMAX9q_k1n&tp=1&oh=42db7b8b3d1c7f9679e59f5c26af4e84&oe=6026D801",
    },
    {
      imgsrc:
        "https://instagram.fisb5-1.fna.fbcdn.net/v/t51.2885-15/e35/92927520_637730423453488_2019014272054227554_n.jpg?_nc_ht=instagram.fisb5-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=0mYWbXuRfckAX9UqZHA&tp=1&oh=47ff177e744fa320317c1d2c92e1c9e8&oe=60294D01",
    },
    {
      imgsrc:
        "https://instagram.fisb5-1.fna.fbcdn.net/v/t51.2885-15/e35/82346668_474590323432996_4697610113442128447_n.jpg?_nc_ht=instagram.fisb5-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=wJ0yCi30y3QAX_q4Vwl&tp=1&oh=9ef9a5bf0a0634b043c69101c8a78c6a&oe=60282BEA",
    },
    {
      imgsrc:
        "https://instagram.fisb5-1.fna.fbcdn.net/v/t51.2885-15/e35/125807820_2713747652287193_325291426103969857_n.jpg?_nc_ht=instagram.fisb5-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=iTdaD0R-N0EAX_CTY4F&tp=1&oh=0a32174e7c7c5dbc438216fd1c4d29c3&oe=602A2D01",
    },
  ];
  let b = [];
  a.forEach((e) => {
    const overlayIcon1 = createElement(
      "i",
      { class: "overlay-icon1 fa fa-heart" },
      "  685"
    );
    const overlayIcon2 = createElement(
      "i",
      { class: "overlay-icon2 fa fa-comment" },
      "  55"
    );
    const overlay = createElement(
      "div",
      { class: "overlay" },
      overlayIcon1,
      overlayIcon2
    );

    const img = createElement("img", { src: e.imgsrc, class: "image" });
    const container = createElement(
      "div",
      {
        class: "container",
        onclick: (n) => {
          var i = n.target.parentElement.firstChild.getAttribute("src");
          var modelBox = document.querySelector(".model-box ");
          var c = document.querySelector(".model-box .model-img");
          if (!modelBox.style.display) {
            modelBox.style.display = "block";
            c.setAttribute("src", i);
          } else {
            modelBox.style.display = "";
          }
        },
      },
      img,
      overlay
    );

    b.push(container);
  });

  const galleryContainer = createElement(
    "div",
    { class: "galleryContainer" },
    b,
    modelBox()
  );

  const profileFoter = createElement("div", { class: "all-footer" }, footer());
  return createElement(
    "section",
    null,
    Header(),
    profileSection,
    galleryContainer,
    notification(),
    profileFoter
  );
};
