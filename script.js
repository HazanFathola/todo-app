let todoList = [];

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

    todoCard.id = String(timestamp);

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
    saveToLocalStorage();
  }
}

function createTodoCard(todoCard) {
  const todoDiv = document.createElement("div");
  todoDiv.id = todoCard.id;
  const todoText = document.createTextNode(todoCard.content);
  const textParagraph = document.createElement("p");

  const timeSpan = document.createElement("span");
  const todoCreatedTime = document.createTextNode(todoCard.createdAt);

  const deleteBtn = document.createElement("button");
  const deleteText = document.createTextNode("Todo löschen");
  deleteBtn.addEventListener("click", () => deleteTodo(todoCard.id));

  const updateTodoBtn = document.createElement("button");
  updateTodoBtn.addEventListener("click", () => updateTodo(todoCard.id));

  if (todoCard.done) {
    todoDiv.classList.add("done");
    const updateUndoneText = document.createTextNode("Rückgängig");
    updateTodoBtn.appendChild(updateUndoneText);
  } else {
    const updateDoneText = document.createTextNode("Erledigt");
    updateTodoBtn.appendChild(updateDoneText);
  }

  textParagraph.appendChild(todoText);
  todoDiv.appendChild(textParagraph);

  timeSpan.appendChild(todoCreatedTime);
  todoDiv.appendChild(timeSpan);

  deleteBtn.appendChild(deleteText);
  todoDiv.appendChild(deleteBtn);

  todoDiv.appendChild(updateTodoBtn);

  return todoDiv;
}

function renderTodo() {
  const container = document.getElementById("content");
  container.innerHTML = "";
  sortTodoCards();
  for (let todoCard of todoList) {
    const todoDiv = createTodoCard(todoCard);
    container.appendChild(todoDiv);
  }
}
function deleteTodo(id) {
  todoList = todoList.filter((todo) => todo.id !== id);
  renderTodo();
}

function updateTodo(id) {
  const foundTodo = todoList.find((todo) => todo.id === id);
  if (!foundTodo) return;
  foundTodo.done = !foundTodo.done;
  renderTodo();
}

function sortTodoCards() {
  todoList.sort((a, b) => {
    if (a.done !== b.done) {
      if (a.done === false) {
        return -1;
      } else {
        return 1;
      }
    }
    if (Number(a.id) < Number(b.id)) {
      return 1;
    } else {
      return -1;
    }
  });
}
function saveToLocalStorage() {
  localStorage.setItem("todoList", JSON.stringify(todoList));
}
function loadFromLocalStorage() {
  const todoListLocalStorage = JSON.parse(localStorage.getItem("todoList"));
  if (todoListLocalStorage !== null) {
    todoList = todoListLocalStorage;
  }
}
