const jsForm = document.querySelector("#js-form"),
    jsInput = jsForm.querySelector("input"),
    jsHello = document.querySelector(".hello"),
    jsToDoForm = document.querySelector("#js-todo-form"),
    jsToDoInput = jsToDoForm.querySelector("input"),
    jsToDoLists = document.querySelector("#js-todo-lists");

const USER_LS = "currentUser";
const TODOS_LS = "toDos";
var toDoList = [];

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

function saveToDoList() {
    localStorage.setItem(TODOS_LS, JSON.stringify(toDoList));
}

function toDoItem(text, id) {
    this.text = text;
    this.id = id;
}

function handleDelBtnClick(event) {
    const delBtn = event.target;
    const delLi = delBtn.parentNode;
    // Frontend Part
    jsToDoLists.removeChild(delLi);
    // Backend Part
    const cleanToDos = toDoList.filter(toDo => toDo.id !== parseInt(delLi.id));
    toDoList = cleanToDos;
    saveToDoList();
}

function handleEditBtnClick(event) {
    // askForUpdated 띄우기
    const editBtn = event.target;
    const editLi = editBtn.parentNode;
    const jsEditForm = document.createElement("form");
    const jsEditInput = document.createElement("input");
    const jsEditSubmit = document.createElement("button");
    jsEditInput.setAttribute("placeholder", "what is your updated?");
    jsEditSubmit.innerText = "Edited";
    jsEditForm.appendChild(jsEditInput);
    jsEditForm.appendChild(jsEditSubmit);
    jsEditForm.id = editLi.id;
    editLi.after(jsEditForm);
    // 입력 받은 값을 바탕으로 frontend backend 내용 수정
}

function paintToDo(text) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const delBtn = document.createElement("button");
    const editBtn = document.createElement("button");
    const newId = toDoList.length + 1;

    // Delete
    delBtn.innerText = "Delete";
    delBtn.addEventListener("click", handleDelBtnClick);

    // Edit
    editBtn.innerText = "Edit";
    editBtn.addEventListener("click", handleEditBtnClick);

    // Rendering on Screen
    span.innerText = text;
    li.appendChild(span);
    li.appendChild(delBtn);
    li.appendChild(editBtn);
    li.id = newId;
    jsToDoLists.appendChild(li);

    // Working on localStorage
    toDoObj = new toDoItem(text, newId);
    toDoList.push(toDoObj);
    saveToDoList()
}

function handleToDos(event) {
    event.preventDefault();
    const currentValue = jsToDoInput.value;
    jsToDoInput.value = "";
    paintToDo(currentValue);
}

function askForToDos() {
    jsToDoForm.className = "showing";
    jsToDoForm.addEventListener("submit", handleToDos);
}

function loadToDos() {
    var currentToDos = localStorage.getItem(TODOS_LS);
    if (currentToDos) {
        currentToDos = JSON.parse(currentToDos);
        currentToDos.forEach(toDo => {
            paintToDo(toDo.text)
        });
    }
}

function init() {
    // Name Algorithm
    loadName();
    // To Do List Algorithm
    loadToDos();
    askForToDos();
}

init();