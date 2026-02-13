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
    createTodoCard(todoCard);
  }
}

function createTodoCard(todoCard) {
  const container = document.getElementById("content");
  const todoDiv = document.createElement("div");
  const todoText = document.createTextNode(todoCard.content);

  todoDiv.appendChild(todoText);
  container.appendChild(todoDiv);
}
