import { createElement } from "../react/index";
import { footer } from './footer';

export const sideBar=()=>{


  //  ==============================================================   SideBar start here ===========================================================================

  const a = [
    {
      buttonName: "Follow",
      para: "Full name",
      UserName: "Kifayat",
      imgsrc:
        "https://instagram.fisb5-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c0.90.720.720a/s640x640/128437404_150735493451800_3342044046146891773_n.jpg?_nc_ht=instagram.fisb5-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=jTOJnYVkEq4AX-U-fKJ&tp=1&oh=4175c47cc07e8b163ded633304366bd1&oe=600388AD",
    },
    {
      buttonName: "Follow",
      para: "Full name",
      UserName: "Azhar",
      imgsrc:
        "https://instagram.fisb5-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c0.135.1080.1080a/s640x640/125428017_1707338729441387_8584104875698393892_n.jpg?_nc_ht=instagram.fisb5-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=YSDZAbnYJr8AX_WECxE&tp=1&oh=10b9ad77e00f21dbfa8b2ab90d62dbe6&oe=602C8504",
    },

    {
      buttonName: "Follow",
      para: "Full name",
      UserName: "Tajwar",
      imgsrc:
        "https://instagram.fisb5-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c0.100.800.800a/s640x640/132593214_237335661113453_7521410946435794261_n.jpg?_nc_ht=instagram.fisb5-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=o_KHR3FlQlIAX-ndom2&tp=1&oh=8977e41aac5d96df4fcd0ea837d94c83&oe=602C4E6D",
    },
    {
      buttonName: "Follow",
      para: "Full name",
      UserName: "Salman ",
      imgsrc:
        "https://instagram.fisb5-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c0.180.1440.1440a/s640x640/124487128_227457412045877_7538632035711752549_n.jpg?_nc_ht=instagram.fisb5-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=OJ8ygJLLUtIAX-bnTpn&tp=1&oh=a2f0004be058473683667b7ac010ee2e&oe=60294C9C",
    },
  ];

  let b = [];

  a.forEach((e) => {
    const switchBtn = createElement(
      "button",
      { class: "switch-btn each" },
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

  const seeAllBtn = createElement(
    "button",
    { class: "see-all-btn" },
    "See All"
  );
  const suggPara = createElement(
    "p",
    { class: "sugg-pra" },
    "Suggestions For You"
  );
  const suggDiv = createElement(
    "div",
    { class: "sugg-div" },
    suggPara,
    seeAllBtn
  );

  const switchBtn = createElement("button", { class: "switch-btn" }, "Switch");

  const sideBarFullName = createElement(
    "p",
    { class: "sidebar-full-Name" },
    "full name"
  );
  const sideBarName = createElement(
    "h4",
    { class: "sidebar-user-name" },
    " Kifayat Kifoo "
  );

  const sideBarImg = createElement("img", {
    src:"https://instagram.flhe7-1.fna.fbcdn.net/v/t51.2885-15/e35/134944844_232419798263042_7386018853170716323_n.jpg?_nc_ht=instagram.flhe7-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=O0YDkyDqpXkAX_PTbJs&tp=1&oh=f293b6eb1726c4b1f94f9665c46bd150&oe=60340AF0"
  });

  const sideBarProfile = createElement(
    "div",
    { class: "side-bar-profle" },
    sideBarImg,
    sideBarName,
    sideBarFullName,
    switchBtn
  );

   const sideBar = createElement(
    "div",
    { class: "side-bar" },
    sideBarProfile,
    suggDiv,
    loopdiv,
    footer()
  );

  return sideBar;

  // =============================================  SideBar Section End here =================================================================
}