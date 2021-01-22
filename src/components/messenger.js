import { createElement } from "../react/index";
import { Header } from "../components/header";
import { footer } from ".//footer";

export const messenger = () => {
  // ============================================= Messanger Inbox Section start Here ==========================================================

  const a = [
    {
      para: "Active yesterday",
      UserName: "Kifayat",
      imgsrc:
        "https://instagram.fisb5-1.fna.fbcdn.net/v/t51.2885-19/s150x150/120366833_421455985505503_4946674907762157794_n.jpg?_nc_ht=instagram.fisb5-1.fna.fbcdn.net&_nc_ohc=U1DTQEfrb2EAX_8hC5E&tp=1&oh=41f0362591baafe3f84f96fe600b9452&oe=6026293B",
    },
    {
      para: "Active 18m ago",
      UserName: "Azhar",
      imgsrc:
        "https://instagram.fisb5-1.fna.fbcdn.net/v/t51.2885-19/s150x150/131896099_682865725710974_2490294181980913958_n.jpg?_nc_ht=instagram.fisb5-1.fna.fbcdn.net&_nc_ohc=G_U3XllR6VIAX-02SgD&tp=1&oh=7913de46174b25ee5184819d6ea8e888&oe=6027D9FD",
    },

    {
      para: "You sent a message .7W",
      UserName: "Tajwar",
      imgsrc:
        "https://instagram.fisb5-1.fna.fbcdn.net/v/t51.2885-19/s150x150/120366833_421455985505503_4946674907762157794_n.jpg?_nc_ht=instagram.fisb5-1.fna.fbcdn.net&_nc_ohc=U1DTQEfrb2EAX_8hC5E&tp=1&oh=41f0362591baafe3f84f96fe600b9452&oe=6026293B",
    },
    {
      para: "Active 29m ago",
      UserName: "Salman ",
      imgsrc:
        "https://instagram.fisb5-1.fna.fbcdn.net/v/t51.2885-19/s150x150/120366833_421455985505503_4946674907762157794_n.jpg?_nc_ht=instagram.fisb5-1.fna.fbcdn.net&_nc_ohc=U1DTQEfrb2EAX_8hC5E&tp=1&oh=41f0362591baafe3f84f96fe600b9452&oe=6026293B",
    },
    {
      para: "Active 29m ago",
      UserName: "Salman ",
      imgsrc:
        "https://instagram.fisb5-1.fna.fbcdn.net/v/t51.2885-19/s150x150/120366833_421455985505503_4946674907762157794_n.jpg?_nc_ht=instagram.fisb5-1.fna.fbcdn.net&_nc_ohc=U1DTQEfrb2EAX_8hC5E&tp=1&oh=41f0362591baafe3f84f96fe600b9452&oe=6026293B",
    },
    {
      para: "Active 29m ago",
      UserName: "Salman ",
      imgsrc:
        "https://instagram.fisb5-1.fna.fbcdn.net/v/t51.2885-19/s150x150/120366833_421455985505503_4946674907762157794_n.jpg?_nc_ht=instagram.fisb5-1.fna.fbcdn.net&_nc_ohc=U1DTQEfrb2EAX_8hC5E&tp=1&oh=41f0362591baafe3f84f96fe600b9452&oe=6026293B",
    },
    {
      para: "Active 29m ago",
      UserName: "Salman ",
      imgsrc:
        "https://instagram.fisb5-1.fna.fbcdn.net/v/t51.2885-19/s150x150/120366833_421455985505503_4946674907762157794_n.jpg?_nc_ht=instagram.fisb5-1.fna.fbcdn.net&_nc_ohc=U1DTQEfrb2EAX_8hC5E&tp=1&oh=41f0362591baafe3f84f96fe600b9452&oe=6026293B",
    },
  ];

  let b = [];

  a.forEach((e) => {
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

    const all = createElement(
      "div",
      { class: "side-bar-profle" },
      sideBarImg,
      sideBarName,
      sideBarFullName
    );

    b.push(all);
  });

  const loopdiv = createElement("div", { class: "more" }, b);

  const sendMsg = createElement("div", { class: "send-msg" }, loopdiv);

  const editIcon = createElement("i", { class: "far fa-edit" });
  const editDiv = createElement("div", { class: "editDiv" }, editIcon);

  const inboxDownIcon = createElement("i", { class: "fas fa-chevron-down" });
  const inboxName = createElement("a", { class: "inbox-name" }, "shamstabraiz");
  const inboxNameDiv = createElement(
    "div",
    { class: "inbox-name-div" },
    inboxName,
    inboxDownIcon
  );

  const inboxTop = createElement(
    "div",
    { class: "inbox-top" },
    inboxNameDiv,
    editDiv
  );

  const inBoxDiv = createElement("div", { class: "inbox" }, inboxTop, sendMsg);

  // ============================================= Messenger inbox Section End Here ==========================================================

  // ============================================= Messenger sendMessage Section Start Here ==========================================================

  const msgIcon = createElement("i", { class: "fab fa-telegram-plane" });

  const msgIconDiv = createElement("div", { class: "msg-icon-div" }, msgIcon);

  const msgheading = createElement(
    "h1",
    { class: "msg-heading" },
    "Your Messages"
  );

  const mgsPara = createElement(
    "p",
    { class: "msg-para" },
    "Send private photos and messages to a friend or group."
  );

  const msgBtn = createElement("button", { class: "msg-btn" }, "Send Message");

  const mainMsgDiv = createElement(
    "div",
    { class: "main-msg-div" },
    msgIconDiv,
    msgheading,
    mgsPara,
    msgBtn
  );

  const sendMsgDiv = createElement(
    "div",
    { class: "send-msg-div" },
    mainMsgDiv
  );

  const mainDiv = createElement(
    "div",
    { class: "main-messanger" },
    inBoxDiv,
    sendMsgDiv
  );

  const footerDiv = createElement("div", { class: "all-footer" }, footer());
  return createElement(
    "section",
    { class: "chat" },
    Header(),
    mainDiv,
    footerDiv
  );
};
// return createElement('section', { class: "chat" }, mainDiv, footerDiv)

// ============================================= Messenger SendMessenge Section End Here ==========================================================

// ============================================= Messenger Section end Here ==========================================================
