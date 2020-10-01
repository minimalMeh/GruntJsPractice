/*I'mexausted,anxiety*/
import{ListItem}from"./ListItem.js";

exportclassList{
constructor(){
this.html=render();
this.items=[];
render=()=>{
returndocument.querySelector(".list");
}
}

addNewItem=(title)=>{
this.items.push(newListItem(title,this.html));
}
}
exportclassListItem{
constructor(title,list){
this.title=title;
this.list=list;
this.html=render(title);

}
render=(value)=>{
this.html=null;

constli=document.createElement("li");
li.appendChild(document.createTextNode(value));
this.list.appendChild(li);//addslitoul

li.addEventListener("click",()=>li.classList.toggle("done"));

constbtn=document.createElement("button");
btn.appendChild(document.createTextNode("X"));
li.appendChild(btn);
btn.addEventListener("click",()=>li.classList.add("delete"));

this.html=li;
}
}
import{List}from"./List";

varenterButton=document.getElementById("enter");
varinput=document.getElementById("userInput");

constlist=newList();

onClick=()=>{
	if(inputLength()>0){
list.addNewItem(input.value);
input.value="";
	}
}

onEnterTap=(event)=>{
	if(input.value.length>0&&event.which===13){
list.addNewItem(input.value);
input.value="";
	}
}

enterButton.addEventListener("click",onClick);

input.addEventListener("keypress",onEnterTap);