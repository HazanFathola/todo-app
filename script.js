//Zuerst Daten lesen

const todoList = [];

function addContent() {
  const todoCard = {
    id: "",
    content: "",
    done: false,
    createdAt: "",
  };
  const inputContent = document.getElementById("todo-input");
  if (inputContent.value.trim() !== "") {
    const timestamp = Date.now();
    todoCard.id = timestamp;
    todoCard.createdAt = timestamp;
    todoCard.content = inputContent.value;
    inputContent.value = "";
    todoList.push(todoCard);
    renderTodo();
  }
}

function createTodoCard(todoCard) {
  const todoDiv = document.createElement("div");
  const todoText = document.createTextNode(todoCard.content);
  todoDiv.appendChild(todoText);
  return todoDiv;
}

function renderTodo() {
  const container = document.getElementById("content");
  container.innerHTML = "";
  for (let todoCard of todoList) {
    const todoDiv = createTodoCard(todoCard);
    container.appendChild(todoDiv);
  }
}
