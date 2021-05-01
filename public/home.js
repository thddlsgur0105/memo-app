const jsForm = document.querySelector("#js-form"),
    jsInput = jsForm.querySelector("input"),
    jsHello = document.querySelector(".hello"),
    jsToDoForm = document.querySelector("#js-todo-form"),
    jsToDoInput = jsToDoForm.querySelector("input"),
    jsEditForm = document.createElement("form"),
    jsEditInput = document.createElement("input"),
    jsEditedSubmit = document.createElement("button"),
    jsEditBack = document.createElement("button"),
    jsToDoLists = document.querySelector("#js-todo-lists"),
    jsCompleteLists = document.querySelector("#js-complete-lists");

const USER_LS = "currentUser";
const TODOS_LS = "toDos";
const COMPLETE_LS = "complete";

var toDoList = [];
var completeList = [];

function paintGreeting(text) {
    jsHello.className = "showing";
    jsHello.innerHTML = `Hello ${text}`;
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

function saveCompleteList() {
    localStorage.setItem(COMPLETE_LS, JSON.stringify(completeList));
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

function handleEditedSubmit(event) {
    event.preventDefault();

    //Frontend Part -- frontend에서 내용 updated 로 수정해주는 과정
    const editedValue = jsEditInput.value;
    jsEditInput.value = "";
    const targetLi = event.target.parentNode.parentNode;
    const targetId = event.target.parentNode.id;
    const targetText = targetLi.firstChild;
    targetText.innerText = editedValue;

    //Backend Part
    toDoList.forEach(element => {
        if (element.id === parseInt(targetId)) {
            const newEditedObj = {
                text: editedValue,
                id: parseInt(targetId)
            };
            Object.assign(element, newEditedObj);
        }
    });
    saveToDoList();
}

function handleEditBack(event) {
    event.preventDefault();
    const targetBackLi = event.target.parentNode;
    targetBackLi.className = "removing";
}

function handleEditBtnClick(event) {
    const editBtn = event.target;
    const editLi = editBtn.parentNode;
    
    jsEditInput.setAttribute("placeholder", "what is your updated?");
    jsEditForm.appendChild(jsEditInput);
    jsEditForm.id = editLi.id;
    
    jsEditedSubmit.innerText = "Edited";
    jsEditForm.appendChild(jsEditedSubmit);
    jsEditedSubmit.addEventListener("click", handleEditedSubmit);
    
    jsEditBack.innerText = "Back";
    jsEditForm.appendChild(jsEditBack);
    jsEditBack.addEventListener("click", handleEditBack);
    
    editLi.appendChild(jsEditForm);
    jsEditForm.className = "showing";
}

function handleCompleteBtnClick(event) {
    const targetCompleteNode = event.target.parentNode;
    targetCompleteNode.className = "removing"
    jsCompleteLists
}

function paintToDo(text, toPaint) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const delBtn = document.createElement("button");
    const editBtn = document.createElement("button");
    const completeBtn = document.createElement("button");
    const newId = toDoList.length + 1;

    // Delete
    delBtn.innerText = "Delete";
    delBtn.addEventListener("click", handleDelBtnClick);

    // Edit
    editBtn.innerText = "Edit";
    editBtn.addEventListener("click", handleEditBtnClick);

    // Complete Section Rendering
    completeBtn.innerText = "Complete";
    completeBtn.addEventListener("click", handleCompleteBtnClick);

    // Rendering on Screen
    span.innerText = text;
    li.appendChild(span);
    li.appendChild(delBtn);
    li.appendChild(editBtn);
    li.appendChild(completeBtn);
    li.id = newId;

    if (toPaint === "toDo") {
        jsToDoLists.appendChild(li);
    } else if(toPaint === "Completed") {
        jsCompleteLists.appendChild(li);
    }

    // Working on localStorage
    toDoObj = {
        text: text,
        id: newId
    };
    toDoList.push(toDoObj);

    saveToDoList()
}

function handleToDos(event) {
    event.preventDefault();
    const currentValue = jsToDoInput.value;
    jsToDoInput.value = "";
    paintToDo(currentValue, "toDo");
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
            paintToDo(toDo.text, "toDo")
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