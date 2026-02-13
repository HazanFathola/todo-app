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

    const date = new Date(timestamp);

    const formattedDate = date.toLocaleDateString("de-DE", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });

    const formattedTime = date.toLocaleTimeString("de-DE", {
      hour: "2-digit",
      minute: "2-digit",
    });

    todoCard.createdAt = `${formattedDate} ${formattedTime}`;
    todoCard.content = inputContent.value;

    inputContent.value = "";
    todoList.push(todoCard);

    renderTodo();
  }
}

function createTodoCard(todoCard) {
  const todoDiv = document.createElement("div");
  const todoText = document.createTextNode(todoCard.content);
  const textParagraph = document.createElement("p");
  const timeSpan = document.createElement("span");
  const todocreatedtime = document.createTextNode(todoCard.createdAt);

  todoDiv.id = todoCard.id;
  textParagraph.appendChild(todoText);
  todoDiv.appendChild(textParagraph);
  timeSpan.appendChild(todocreatedtime);
  todoDiv.appendChild(timeSpan);
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
