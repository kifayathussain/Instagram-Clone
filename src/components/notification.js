import { createElement } from "../react/index";
import { Header } from "../components/header";

export const notification = () => {
    const notificationContainer = createElement('h2',null,"this is notification  page")

    return createElement('section',null,Header(),notificationContainer)

}