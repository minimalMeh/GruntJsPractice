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