import { createElement } from "../react";
import { Header } from "../components/header";
export const notification = () => {
  // Nitification Bar start here

  const a = [
    {
      buttonName: "Follow",
      para: "started following you",
      UserName: "Kifayat kifo",
      imgsrc:
        "https://instagram.fisb5-1.fna.fbcdn.net/v/t51.2885-19/s150x150/120366833_421455985505503_4946674907762157794_n.jpg?_nc_ht=instagram.fisb5-1.fna.fbcdn.net&_nc_ohc=U1DTQEfrb2EAX_8hC5E&tp=1&oh=41f0362591baafe3f84f96fe600b9452&oe=6026293B",
    },
    {
      buttonName: "Follow",
      para: "started following you",
      UserName: "Azhar Ali",
      imgsrc:
        "https://instagram.fisb5-1.fna.fbcdn.net/v/t51.2885-19/s150x150/131896099_682865725710974_2490294181980913958_n.jpg?_nc_ht=instagram.fisb5-1.fna.fbcdn.net&_nc_ohc=G_U3XllR6VIAX-02SgD&tp=1&oh=7913de46174b25ee5184819d6ea8e888&oe=6027D9FD",
    },

    {
      buttonName: "Follow",
      para: "started following you",
      UserName: "Tajwar Sultan",
      imgsrc:
        "https://instagram.fisb5-1.fna.fbcdn.net/v/t51.2885-19/s150x150/120366833_421455985505503_4946674907762157794_n.jpg?_nc_ht=instagram.fisb5-1.fna.fbcdn.net&_nc_ohc=U1DTQEfrb2EAX_8hC5E&tp=1&oh=41f0362591baafe3f84f96fe600b9452&oe=6026293B",
    },
    {
      buttonName: "Follow",
      para: "started following you",
      UserName: "Salman khan",
      imgsrc:
        "https://instagram.fisb5-1.fna.fbcdn.net/v/t51.2885-19/s150x150/120366833_421455985505503_4946674907762157794_n.jpg?_nc_ht=instagram.fisb5-1.fna.fbcdn.net&_nc_ohc=U1DTQEfrb2EAX_8hC5E&tp=1&oh=41f0362591baafe3f84f96fe600b9452&oe=6026293B",
    },

    {
      buttonName: "Follow",
      para: "started following you",
      UserName: "Tajwar Sultan",
      imgsrc:
        "https://instagram.fisb5-1.fna.fbcdn.net/v/t51.2885-19/s150x150/120366833_421455985505503_4946674907762157794_n.jpg?_nc_ht=instagram.fisb5-1.fna.fbcdn.net&_nc_ohc=U1DTQEfrb2EAX_8hC5E&tp=1&oh=41f0362591baafe3f84f96fe600b9452&oe=6026293B",
    },
    {
      buttonName: "Follow",
      para: "started following you",
      UserName: "Salman khan",
      imgsrc:
        "https://instagram.fisb5-1.fna.fbcdn.net/v/t51.2885-19/s150x150/120366833_421455985505503_4946674907762157794_n.jpg?_nc_ht=instagram.fisb5-1.fna.fbcdn.net&_nc_ohc=U1DTQEfrb2EAX_8hC5E&tp=1&oh=41f0362591baafe3f84f96fe600b9452&oe=6026293B",
    },

    {
      buttonName: "Follow",
      para: "started following you",
      UserName: "Tajwar Sultan",
      imgsrc:
        "https://instagram.fisb5-1.fna.fbcdn.net/v/t51.2885-19/s150x150/120366833_421455985505503_4946674907762157794_n.jpg?_nc_ht=instagram.fisb5-1.fna.fbcdn.net&_nc_ohc=U1DTQEfrb2EAX_8hC5E&tp=1&oh=41f0362591baafe3f84f96fe600b9452&oe=6026293B",
    },
    {
      buttonName: "Follow",
      para: "started following you",
      UserName: "Salman khan",
      imgsrc:
        "https://instagram.fisb5-1.fna.fbcdn.net/v/t51.2885-19/s150x150/120366833_421455985505503_4946674907762157794_n.jpg?_nc_ht=instagram.fisb5-1.fna.fbcdn.net&_nc_ohc=U1DTQEfrb2EAX_8hC5E&tp=1&oh=41f0362591baafe3f84f96fe600b9452&oe=6026293B",
    },
  ];

  let b = [];

  a.forEach((e) => {
    const switchBtn = createElement(
      "button",
      { class: "switch-btn followBtn" },
      e.buttonName
    );
    const sideBarFullName = createElement(
      "p",
      { class: "sidebar-full-Name each" },
      e.para
    );
    const sideBarName = createElement(
      "h4",
      { class: "sidebar-user-name each" },
      e.UserName
    );

    const sideBarImg = createElement("img", {
      class: "foreachImg",
      src: e.imgsrc,
    });

    const sideBarProfile = createElement(
      "div",
      { class: "side-bar-profle" },
      sideBarImg,
      sideBarName,
      sideBarFullName,
      switchBtn
    );

    b.push(sideBarProfile);
  });

  const loopdiv = createElement("div", { class: "more" }, b);

  const notificationContainer = createElement(
    "div",
    { class: "notificationContainer" },
    createElement("div", { class: "side-bar notificationBar" }, loopdiv)
  );

  return createElement("section", null, Header(), notificationContainer);
};
