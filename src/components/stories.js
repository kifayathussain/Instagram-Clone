import { createElement } from "../react/index";

export const stories = () => {


               // ============================================= Stories Section start Here ==========================================================
  let array = [
    {
      imgSrc:
        "https://instagram.fisb5-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c0.169.1349.1349a/s640x640/131041905_304756604207377_2450034571956747487_n.jpg?_nc_ht=instagram.fisb5-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=ZcdaAcGIpTwAX-VsDy0&tp=1&oh=b8da2871bd179ab7e754f4ef2569bd1d&oe=602AB7F9",

        para:" kifayat"
    },
    {
      imgSrc:
        "https://instagram.fisb5-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c0.100.800.800a/s640x640/132593214_237335661113453_7521410946435794261_n.jpg?_nc_ht=instagram.fisb5-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=o_KHR3FlQlIAX-ndom2&tp=1&oh=8977e41aac5d96df4fcd0ea837d94c83&oe=602C4E6D",

        para:" azhar"
    },
    {
      imgSrc:
        "https://instagram.fisb5-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c0.90.720.720a/s640x640/135327050_146324470622883_7723676209950624770_n.jpg?_nc_ht=instagram.fisb5-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=6FG6uJGO-5sAX9_vuFM&tp=1&oh=90e55fc37e802a5063784d26e9776d13&oe=6003EF51",

        para:" tajwar"

    },
    {
      imgSrc:
        "https://instagram.fisb5-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c0.165.1440.1440a/s640x640/137272866_1128673057590342_5340558090897147375_n.jpg?_nc_ht=instagram.fisb5-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=7JJGH2uttxYAX_Ygevq&tp=1&oh=091b2df8b2fa3cccaef0f59564c9e20e&oe=6029BF3A",

        para:"khan"


    },
    {
      imgSrc:
        "https://instagram.fisb5-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c0.135.1079.1079a/s640x640/137563198_3861949867188643_7169653622087330223_n.jpg?_nc_ht=instagram.fisb5-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=H6LD59mwLNQAX9tezLF&tp=1&oh=b8995f4316cc26d9baa47512bf9c973e&oe=602AFB6D",
        para:"ali_"

    
    },
    {
      imgSrc:
        "https://instagram.fisb5-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c0.90.720.720a/s640x640/128437404_150735493451800_3342044046146891773_n.jpg?_nc_ht=instagram.fisb5-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=jTOJnYVkEq4AX-U-fKJ&tp=1&oh=4175c47cc07e8b163ded633304366bd1&oe=600388AD",

        para:" ayyaz"

    },
    {
        imgSrc:
          "https://instagram.fisb5-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c0.135.1080.1080a/s640x640/125428017_1707338729441387_8584104875698393892_n.jpg?_nc_ht=instagram.fisb5-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=YSDZAbnYJr8AX_WECxE&tp=1&oh=10b9ad77e00f21dbfa8b2ab90d62dbe6&oe=602C8504",

          para:"arshad-"
  
      },
    {
        imgSrc:
          "https://instagram.fisb5-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c0.180.1440.1440a/s640x640/124487128_227457412045877_7538632035711752549_n.jpg?_nc_ht=instagram.fisb5-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=OJ8ygJLLUtIAX-bnTpn&tp=1&oh=a2f0004be058473683667b7ac010ee2e&oe=60294C9C",

          para:"arshad-"
  
      }
  ];

  let emptyArray = [];

  array.forEach((e) => {
    const storiesImgs = createElement("img", { src: e.imgSrc,
     }, e.name);


    const imageName = createElement('p',{class:"name-para"},e.para)




    const storyDiv = createElement('div', { class: "story-div",   }, storiesImgs)
    const stories = createElement("div", { class: "all-stories" },storyDiv,imageName);

    emptyArray.push(stories);
  });

  const null1 = createElement("div", null);
  const null2 = createElement("div", null);
  const stry = createElement("div", { class: "new" }, emptyArray);
  return createElement("div", { class: "stories" }, null1, stry, null2);
};
  // ============================================= Stories Section End Here ==========================================================