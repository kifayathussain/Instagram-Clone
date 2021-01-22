import { createElement } from "../react/index";



export const footer = () => {


   let a = [

         {
            name:"About-",
            salman:"/home"
         },
         {
            name:"Help-",
            salman: "/about"
         },
         {
            name:"press-"
         },
         {
            name:"API-"
         },
         {
            name:"Jobs-"
         },
         {
            name:"Privacy-."
         },
         {
            name:"Terms-."
         },
         {
            name:"Top Accounts-"
         },
         {
            name:"Hashtags-"
         },
         {
            name:"Language-"
         },


   ];


   let b = [];
   
   a.forEach((e) => {
      const links = createElement('a',{href:e.salman},e.name)


     b.push(links)


   })
   
   const footerMain = createElement('div', {class:'footer-links'},b)


  const footerPara = createElement(
    "p",
    { class: "footer-para" },
    "© 2021 INSTAGRAM FROM FACEBOOK"
  );
  const foote = createElement(
    "footer",
    null,
    createElement(
      "div",
      { class: "footer-main" },
      // container,
      footerMain,
      footerPara
    )
  );
  return foote;
};
