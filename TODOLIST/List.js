import { ListItem } from "./ListItem.js";

export class List {
    constructor () {
        this.html = render();
        this.items = [];
        render = () => {
            return document.querySelector(".list");
        }
    }

    addNewItem = (title) => {
        this.items.push( new ListItem(title, this.html));
    }
}