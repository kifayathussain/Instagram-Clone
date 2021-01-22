import { createElement } from "../react/index";

export const  homePosts = () =>{


  // ============================================= Posts Section start Here ==========================================================

  const heartIcon = createElement("i", {
    class: "postheart  fa fa-heart",
    onclick: (e) => {
      if (!e.target.style.color) {
        e.target.style.color = "#c53737";
      } else {
        e.target.style.color = "";
      }
    },
  });

  const comenttIcon = createElement("i", { class: "fa fa-comment-o" });
  const telegramIcon = createElement("i", { class: "fab fa-telegram-plane" });

  const bookmark = createElement("i", {
    class: "far fa-bookmark",
    onclick: (e) => {
      if (!e.target.style.color) {
        e.target.style.color = "gray";
      } else {
        e.target.style.color = "";
      }
    },
  });

  const bookmarkDiv = createElement("div", { class: "bookmark-div" }, bookmark);

  const postName = createElement("a", null, "Here is Name");
  const postLikes = createElement(
    "p",
    { class: "posts-like" },
    "Liked by",
    postName
  );

  const postPara = createElement("p", { class: "post-para" }, "1 DAY AGO");

  const postInput = createElement("input", {
    class: "addComment",
    placeholder: "Add a comment...",
  });

  const postBtn = createElement("button", { class: "input-btn" }, "Post");

  const btnDiv = createElement("div", { class: "btn-div" }, postBtn);
  const postInputDiv = createElement(
    "div",
    { class: "post-input-div" },
    postInput,
    btnDiv
  );
  const postDetails = createElement(
    "div",
    { class: "post-details" },
    postLikes,
    postPara
  );

  const postIcons = createElement(
    "div",
    { class: "post-icon" },
    heartIcon,
    comenttIcon,
    telegramIcon,
    bookmarkDiv
  );

  const postImg = createElement("img", {
    src:"https://scontent.flhe7-1.fna.fbcdn.net/v/t1.0-9/50831217_526827834494191_912462434780839936_o.jpg?_nc_cat=106&ccb=2&_nc_sid=19026a&_nc_ohc=WRqM_1hy2eEAX8pDK8U&_nc_ht=scontent.flhe7-1.fna&oh=3b02478f9f53800351a52db735282bd3&oe=602EF0EA"
  });

  const postProfileImg = createElement("img", {
    src:"https://instagram.flhe7-1.fna.fbcdn.net/v/t51.2885-15/e35/134944844_232419798263042_7386018853170716323_n.jpg?_nc_ht=instagram.flhe7-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=O0YDkyDqpXkAX_PTbJs&tp=1&oh=f293b6eb1726c4b1f94f9665c46bd150&oe=60340AF0"
  });

  const profileName = createElement(
    "h6",
    { class: "profile-name" },
    "Salman khan"
  );

  const profileAdress = createElement(
    "p",
    { class: "profile-address" },
    "Uconnect"
  );

  const postProfileDiv = createElement(
    "div",
    { class: "post-profile-div" },
    postProfileImg,
    profileName,
    profileAdress
  );

  const posts = createElement(
    "div",
    { class: "post" },
    postProfileDiv,
    postImg,
    postIcons,
    postDetails,
    postInputDiv
  );

  // ============================================= Posts Section End Here ==========================================================

  return posts;


}