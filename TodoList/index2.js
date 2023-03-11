document.querySelector(".date").innerText = new Date().toLocaleDateString();

const reloadCount = () => {
  let count = document.querySelectorAll(".todo-item:not(.done)").length;
  document.querySelector(".count").innerText = count;
};
reloadCount();

const delTodo = (el) => {
  el.parentElement.remove();
  reloadCount();
};

const todoDone = (el) => {
  el.parentElement.classList.toggle("done");
  reloadCount();
};

const addTodo = () => {
  let text = document.querySelector("#textbox").value;
  if (!text) {
    alert("빈칸입니다");
  } else {
    let todo = document.createElement("div");
    todo.classList.add("todo-item");

    let checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("onclick", "todoDone(this)");

    let button = document.createElement("input");
    button.setAttribute("type", "button");
    button.setAttribute("onclick", "delTodo(this)");
    button.setAttribute("value", "❌");

    todo.append(checkbox, text, button);

    let todoContent = document.querySelector(".todo-content");
    todoContent.append(todo);

    reloadCount();
  }
};
