import { createAppTitle } from "./title.js";
(function () {
  // import { createAppTitle } from "./title.js";
  // let deals = JSON.parse(localStorage.getItem("take")) || [];
  let dealsToJSON = [];

  // function createAppTitle(name) {
  //   const h1 = document.createElement("h1");
  //   h1.className = "h1";
  //   h1.textContent = name;
  //   return h1;
  // }

  function createTodoItemForm() {
    const con = document.querySelector(".con");
    const ul = document.createElement("ul");
    const form = document.createElement("form");
    const inp = document.createElement("input");
    const btn = document.createElement("button");

    inp.placeholder = "Введите новое дело";

    ul.className = "ul";
    form.className = "form";
    inp.className = "inp";
    btn.className = "waves-effect waves-light blue btn ";

    btn.textContent = "Добавить";

    form.append(inp);
    form.append(btn);
    return {
      form,
      ul,
      inp,
      btn,
    };
  }

  function createTodoList(inp, mass) {
    ul = document.querySelector(".ul");
    const li = document.createElement("li");
    const h2 = document.createElement("h2");
    const buts = document.createElement("div");
    const btn1 = document.createElement("button");
    const btn2 = document.createElement("button");

    li.className = "li";
    h2.className = "h2";
    buts.className = "buts";
    btn1.className = "btn1 waves-effect waves-light btn green";
    btn2.className = "btn2 waves-effect waves-light btn red";

    btn1.textContent = "Готово";
    btn2.textContent = "Удалить";

    h2.textContent = inp.value || mass;

    dealsToJSON.push({ deal: h2.textContent, done: false });
    let kekw = dealsToJSON.length - 1;

    ul.append(li);
    li.append(h2);
    li.append(buts);
    buts.append(btn1);
    buts.append(btn2);

    inp.value = "";
    return {
      kekw,
      li,
      h2,
      btn1,
      btn2,
    };
  }

  function spisok(name, mass, key) {
    let deals = JSON.parse(localStorage.getItem(key)) || [];
    // let con = document.querySelector(`.${cons}`);
    con = document.querySelector(".con");

    const h1 = createAppTitle(name);
    con.append(h1);

    const TodoItemForm = createTodoItemForm();
    con.append(TodoItemForm.form);
    con.append(TodoItemForm.ul);

    inp = TodoItemForm.inp;

    for (let i = 0; i < deals.length; i++) {
      if (!deals[i]) {
        continue;
      }
      mass = deals[i].deal;
      const TodoList = createTodoList(inp, mass);

      if (deals[i].done) {
        TodoList.li.style.backgroundColor = "rgb(70, 233, 97)";
        dealsToJSON[TodoList.kekw].done = true;
      }

      TodoList.btn1.addEventListener("click", () => {
        if (TodoList.li.style.backgroundColor == "") {
          TodoList.li.style.backgroundColor = "rgb(70, 233, 97)";
          dealsToJSON[TodoList.kekw].done = true;
        } else {
          TodoList.li.style.backgroundColor = "";
          dealsToJSON[TodoList.kekw].done = false;
        }
      });

      TodoList.btn2.addEventListener("click", () => {
        if (confirm("Подтвердите действие.")) {
          delete dealsToJSON[TodoList.kekw];
          TodoList.li.remove();
        }
      });
    }

    inp = TodoItemForm.inp;
    TodoItemForm.btn.disabled = true;

    setInterval(() => {
      if (inp.value.trim() == "") {
        TodoItemForm.btn.disabled = true;
      } else {
        TodoItemForm.btn.disabled = false;
      }
    });

    TodoItemForm.form.addEventListener("submit", (e) => {
      e.preventDefault();

      if (inp.value !== "") {
        const TodoList = createTodoList(inp, mass);
        h2 = TodoList.h2;

        TodoList.btn1.addEventListener("click", () => {
          if (TodoList.li.style.backgroundColor == "") {
            TodoList.li.style.backgroundColor = "rgb(70, 233, 97)";
            dealsToJSON[TodoList.kekw].done = true;
          } else {
            TodoList.li.style.backgroundColor = "";
            dealsToJSON[TodoList.kekw].done = false;
          }
        });
        TodoList.btn2.addEventListener("click", () => {
          if (confirm("Подтвердите действие.")) {
            delete dealsToJSON[TodoList.kekw];
            TodoList.li.remove();
          }
        });
      }
    });
    window.addEventListener("beforeunload", () => {
      localStorage.setItem(key, JSON.stringify(dealsToJSON));
    });
  }
  window.spisok = spisok;
})();
// document.addEventListener("DOMContentLoaded", () => {
//   spisok("Список дел мамы", "con1");
//   spisok("Список дел папы", "con2");
//   spisok("Мой список дел", "con3");
// });
