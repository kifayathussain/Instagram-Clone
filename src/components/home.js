import { createElement } from "../react/index";
import { Header } from "../components/header";
import { stories } from '../components/stories';
import { homePosts } from '../components/homeposts';
import { sideBar } from '../components/sidebar'

export const home = () => {
        //   AllPosts Section 
    const storiesDiv = createElement('div',{class:'stories'},stories());
    const posts1 = createElement('div',{class:'posts'}, homePosts());
    const posts2 = createElement('div',{class:'posts'}, homePosts());
    const posts3 = createElement('div',{class:'posts'}, homePosts());
    const posts4 = createElement('div',{class:'posts'}, homePosts());
    const posts5 = createElement('div',{class:'posts'}, homePosts());
    const allposts = createElement('div',{class:'allposts'},storiesDiv,posts1,posts2,posts3,posts4,posts5);


       //    SiderBar Section 
    const userinfo = createElement('div',{class:'userinfo'},sideBar());
    // const userlist = createElement('div',{class:'userlist'},'USERLIST');
    const sidebarContainer = createElement('div',{class:'sidebarContainer'},userinfo);



    //      Append All Childs into main Container  

    const homeContainer = createElement('div',{class:'homeContainer'},allposts,sidebarContainer);
    return createElement('section',null,Header(),homeContainer)

}