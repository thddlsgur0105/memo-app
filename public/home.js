const jsForm = document.querySelector("#js-form"),
    jsInput = jsForm.querySelector("input"),
    jsHello = document.querySelector(".hello"),
    jsToDoForm = document.querySelector("#js-todo-form"),
    jsToDoInput = jsToDoForm.querySelector("input"),
    jsToDoLists = document.querySelector("#js-todo-lists");

const USER_LS = "currentUser";
const TODOS_LS = "toDos";
var TODOS_LIST = [];

function paintGreeting(text) {
    jsHello.className = "showing";
    jsHello.innerHTML = `Hello ${text}!`;
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = jsInput.value;
    jsInput.value = "";
    paintGreeting(currentValue);
    jsForm.className = "removing";
    localStorage.setItem(USER_LS, currentValue);
}

function askForName() {
    jsForm.className ="showing";
    jsForm.addEventListener("submit", handleSubmit);
}

function loadName() {
    const currentUser = localStorage.getItem(USER_LS);
    if (currentUser) {
        paintGreeting(currentUser);
    } else {
        askForName();
    }
}

function toDoItem(content, id) {
    this.content = content;
    this.id = id;
}

function paintToDo(toDo) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = toDo.content;
    li.appendChild(span);
    jsToDoLists.appendChild(li);
}

function handleToDos(event) {
    event.preventDefault();
    const currentValue = jsToDoInput.value;
    jsToDoInput.value = "";
    newToDoItem = new toDoItem(currentValue, TODOS_LIST.length + 1);
    paintToDo(newToDoItem);
    TODOS_LIST.push(newToDoItem);
    localStorage.setItem(TODOS_LS, JSON.stringify(TODOS_LIST));
}

function askForToDos() {
    jsToDoForm.className = "showing";
    jsToDoForm.addEventListener("submit", handleToDos);
}

function init() {
    loadName();
    // Making To Do List Algorithm
    var currentToDos = localStorage.getItem(TODOS_LS);
    if (currentToDos) {
        currentToDos = JSON.parse(currentToDos);
        currentToDos.forEach(element => {
            paintToDo(element)
        });
    }
    askForToDos();
}

init();