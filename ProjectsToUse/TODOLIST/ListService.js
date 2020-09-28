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