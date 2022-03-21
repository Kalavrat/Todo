let con = document.querySelector(".con");
let h1 = document.createElement("h1");
h1.className = "h1";
let form = document.createElement("form");
form.className = "form";
let ul = document.createElement("ul");
ul.className = "ul";

con.append(h1);
con.append(form);
con.append(ul);

function createAppTitle() {
  h1.textContent = "Список дел";
}
createAppTitle();

function createTodoItemForm() {
  let inp = document.createElement("input");
  let btn = document.createElement("button");

  inp.placeholder = "Введите новое дело";

  inp.className = "inp";
  btn.className = "waves-effect waves-light blue btn ";
  btn.setAttribute("type", "button");

  btn.textContent = "Добавить";

  form.append(inp);
  form.append(btn);
}
createTodoItemForm();

function createTodoList(ev) {
  inp = document.querySelector(".inp");

  if (inp.value !== "") {
    let li = document.createElement("li");
    let h2 = document.createElement("h2");
    let buts = document.createElement("div");
    let btn1 = document.createElement("button");
    let btn2 = document.createElement("button");
    inp = document.querySelector(".inp");

    li.className = "li";
    h2.className = "h2";
    buts.className = "buts";
    btn1.className = "btn1 waves-effect waves-light btn green";
    btn2.className = "btn2 waves-effect waves-light btn red";

    btn1.textContent = "Готово";
    btn2.textContent = "Удалить";
    h2.textContent = inp.value;

    ul.append(li);
    li.append(h2);
    li.append(buts);
    buts.append(btn1);
    buts.append(btn2);

    btn1.addEventListener("click", () => {
      if (li.style.backgroundColor == "") {
        li.style.backgroundColor = "rgb(70, 233, 97)";
      } else {
        li.style.backgroundColor = "";
      }
    });

    btn2.addEventListener("click", () => {
      li.remove();
    });
  } else {
    alert("Нельзя ввести пустую строку!");
  }
  inp.value = "";
}

btn = document.querySelector(".btn");
btn.addEventListener("click", createTodoList);
