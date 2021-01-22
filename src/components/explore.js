import { createElement } from "../react";
import { footer } from "../components/footer";
import { Header } from "../components/header";

export const explore = () => {
  let a = [
    {
      imgsrc:
        "https://instagram.fisb5-1.fna.fbcdn.net/v/t51.2885-15/e35/134944844_232419798263042_7386018853170716323_n.jpg?_nc_ht=instagram.fisb5-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=oSjcleP4koAAX-y2ymU&tp=1&oh=82e831735b98793b25a787c9559649df&oe=60282D70",
    },
    {
      imgsrc:
        "https://instagram.fisb5-1.fna.fbcdn.net/v/t51.2885-15/e35/120929122_799697230842031_673843017707682555_n.jpg?_nc_ht=instagram.fisb5-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=8FoCeLkM8_QAX8pYMz8&tp=1&oh=5f57afc5852981a73fb4613965c586d8&oe=60296648",
    },
    {
      imgsrc:
        "https://instagram.fisb5-1.fna.fbcdn.net/v/t51.2885-15/e35/101492944_110201593913712_5819216545209008507_n.jpg?_nc_ht=instagram.fisb5-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=HaRKl7lc1t8AX9Ez0rx&tp=1&oh=5d222ac4aa97ebfc91dfa6de002ca219&oe=60294114",
    },
    {
      imgsrc:
        "https://instagram.fisb5-1.fna.fbcdn.net/v/t51.2885-15/e35/120929122_799697230842031_673843017707682555_n.jpg?_nc_ht=instagram.fisb5-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=8FoCeLkM8_QAX8pYMz8&tp=1&oh=5f57afc5852981a73fb4613965c586d8&oe=60296648",
    },
    {
      imgsrc:
        "https://scontent.fisb5-1.fna.fbcdn.net/v/t1.0-9/74525989_2551884118414919_4918503290754301952_o.jpg?_nc_cat=100&ccb=2&_nc_sid=09cbfe&_nc_ohc=PqlF0btZlVkAX_mJq4q&_nc_ht=scontent.fisb5-1.fna&oh=1f4a41ca367aa98ca61d450aef9dae7b&oe=6025F7DF",
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
    const overlayIcon1 = createElement('i',{class:"overlay-icon1 fa fa-heart"},'  685')
    const overlayIcon2 = createElement('i',{class:"overlay-icon2 fa fa-comment"},'  55')
    const overlay = createElement("div",{class:"overlay"},overlayIcon1,overlayIcon2)

    const img =createElement("img",{src:e.imgsrc,class:"image"})
    const container = createElement('div',{class:"container"},img,overlay)

    b.push(container);
  });

  const galleryContainer = createElement(
    "div",
    { class: "galleryContainer" },
    b
  );

  const footerDiv = createElement("div", { class: "all-footer" }, footer());
  return createElement("section", null, Header(), galleryContainer, footerDiv);
};
