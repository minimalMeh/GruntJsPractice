/* I'm exausted, anxiety */
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
export class ListItem {
    constructor (title, list) {
        this.title = title;
        this.list = list;
        this.html = render(title);
        
    }
    render = (value) => {
        this.html = null;

        const li = document.createElement("li");
        li.appendChild(document.createTextNode(value));
        this.list.appendChild(li); //adds li to ul
        
        li.addEventListener("click", () => li.classList.toggle("done"));
    
        const btn = document.createElement("button");
        btn.appendChild(document.createTextNode("X"));
        li.appendChild(btn);
        btn.addEventListener("click", () => li.classList.add("delete"));
        
        this.html = li;
    }
}
import { List } from "./List";

var enterButton = document.getElementById("enter");
var input = document.getElementById("userInput");

const list = new List();

onClick = () => {
	if (inputLength() > 0) {
        list.addNewItem(input.value);
        input.value = "";
	}
}

onEnterTap = (event) => {
	if (input.value.length > 0 && event.which === 13) { 
        list.addNewItem(input.value);
        input.value = "";
	} 
}

enterButton.addEventListener("click", onClick);

input.addEventListener("keypress", onEnterTap);