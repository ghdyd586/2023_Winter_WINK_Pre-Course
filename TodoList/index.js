let date = document.querySelector(".date").innerText = new Date().toLocaleDateString();
const reloadCount = () => {
  let count = document.querySelectorAll(".todo-item").length;
  let done = document.querySelectorAll(".done").length;
  document.querySelector(".count").innerText = count-done;
};
reloadCount(); // 첫 화면 로딩 시 바로 개수 업데이트를 위해서 함수 실행

const delTodo = (el) => {
  // 투두 삭제 후 개수 업데이트 필요
  el.parentElement.remove();
  reloadCount();
};

const todoDone = (el) => {
  // 투두 완료 후 개수 업데이트 필요
  el.parentElement.classList.toggle("done");
  reloadCount();
};

const addTodo = () => {
  // 투두 추가 후 개수 업데이트 필요, 텍스트박스가 빈칸이면 알림 띄우기
  let text = document.querySelector("#textbox").value;
  if(!text){
    alert('빈 칸입니다!');
  }
  else{
    let todo = document.createElement("div");
    todo.classList.add("todo-item");

    let checkbox = document.createElement("input");
    checkbox.setAttribute("type","checkbox");
    checkbox.setAttribute("onclick","todoDone(this)");
    
    let button = document.createElement("input");
    button.setAttribute("type","button");
    button.setAttribute("onclick","delTodo(this)");
    button.setAttribute("value","❌");

    todo.append(checkbox,text,button);
    
    let todoContent = document.querySelector(".todo-content");
    todoContent.append(todo);
    reloadCount();

    // let div = document.createElement("div");
    // div.classList.add("todo-item");
    // let input1 = document.createElement("input");
    // input1.setAttribute("type","checkbox");
    // input1.setAttribute("onClick","todoDone(this)");
    // let input2 = document.createElement("input");
    // input2.setAttribute("type","button");
    // input2.setAttribute("onClick","delTodo(this)");
    // input2.setAttribute("values","❌");
    // div.append(input1);
    // div.append(input2);
    // let addcon = document.querySelector(".todo-content");
    // addcon.append(div);

  }
};
