import { createElement } from "../react"
export const modelBox = () => {
    // loop
    let a = [
        {
          img:
            "https://instagram.flhe7-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c0.135.1080.1080a/s640x640/136359401_926481617889706_8213824324811968301_n.jpg?_nc_ht=instagram.flhe7-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=YeYG2YKkgAcAX_azmQ5&tp=1&oh=dd05a8df6fcaebab5c97c69b54c3a79b&oe=60312483",
          username: "Salman",
          fullname: "Salman Khan",
        },
        {
          img:
            "https://instagram.flhe7-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c0.133.1064.1064a/s640x640/135327051_456037848891112_6490705346542014666_n.jpg?_nc_ht=instagram.flhe7-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=W6C0uhO378MAX9F2C-9&tp=1&oh=e5be8ac5dab78c4fdb3bed9347347629&oe=60337E19",
          username: "Gulbasti",
          fullname: "Arshad rahim",
        },
        {
          img:
            "https://instagram.flhe7-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c0.103.830.830a/s640x640/131893795_2747004802231478_4543342311195985642_n.jpg?_nc_ht=instagram.flhe7-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=_KIB0BIqSkwAX-UUtE6&tp=1&oh=9cfef9fc3b7f32c01dd316bfc444acc4&oe=60321E10",
          username: "ALi",
          fullname: "Azhar ALi",
        },
        {
          img:
            "https://instagram.flhe7-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c0.19.1080.1080a/s640x640/122734799_412082053139703_3168278925321954175_n.jpg?_nc_ht=instagram.flhe7-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=lcIO54cdo30AX8nI4vW&tp=1&oh=7a569c74361751305fc4dfef6e926aea&oe=6034DE90",
          username: "Sajjad",
          fullname: "Sajjad Ali",
        },
        {
          img:
            "https://instagram.flhe7-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c0.135.1080.1080a/s640x640/91114426_1459361664232620_8287192033603212385_n.jpg?_nc_ht=instagram.flhe7-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=TXUEILTr1E8AX9DoSkc&tp=1&oh=8e899f644bab711593abc0c90647b33d&oe=60310363",
          username: "Sultan",
          fullname: "Tajwar Sultan",
        },
      ];
      let b = [];

      a.forEach((item) => {
        let loopimg = createElement("img", { src: item.img });
        let looph3 = createElement("h3", null, item.username);
        let looph4 = createElement("h4", null, item.fullname);
        let loopbtn = createElement("button",{class:"heart-btn  far fa-heart"});
        let loopDiv = createElement('div', { class: "loop-div" }, loopimg, looph3, looph4, loopbtn)
        b.push(loopDiv)
      });
      const loopMainDiv = createElement("div", { class: "loop-main-div" }, b);
    const closebtn = createElement('button', {
        class: "close-btn",
        onclick: () => {
            let b = document.querySelector('.model-box')
            b.style.display = "none"
        }
    }, "X")
    
    // model comment loop
    const modelCommentDiv = createElement('div',{class:"model-comment-div"},loopMainDiv)
    // model image
    const modelimg = createElement('img', { class: "model-img", src: ""})
    const modelImgDiv = createElement('div', { class: "model-img-div"},modelimg)
    // model main div
    const modelMain = createElement("div",{class:"model-main"},modelImgDiv,modelCommentDiv)
    return createElement('div', { class: "model-box" },closebtn,modelMain )
}