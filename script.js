document.addEventListener("DOMContentLoaded", () => {
  loadTask();
  document.getElementById("taskList").addEventListener("change", () => {
    if (event.target.tagName === "INPUT" && event.target.type === "checkbox") {
      toggleTask(event.target);
    }
  });

  document.getElementById("taskList").addEventListener("click", () => {
    if (event.target.tagName === "BUTTON") {
      removeTask(event.target);
    }
  });
});

function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task");
    return;
  }
  const taskList = document.getElementById("taskList");
  const newTask = document.createElement("li");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  newTask.appendChild(checkbox);

  const span = document.createElement("span");
  span.textContent = taskText;
  newTask.appendChild(span);

  const removeButton = document.createElement("button");
  removeButton.textContent = "Remove";
  newTask.appendChild(removeButton);

  taskList.appendChild(newTask);
  saveTask();
  taskInput.value = "";
}

// function removeTask(button) {
//   const task = button.parentElement;
//   task.remove();
// }

// function toggleTask(checkbox) {
//   const task = checkbox.parentElement;
//   task.classList.toggle("completed");
//   saveTask();
// }

// function saveTask() {
//   const tasks = [];
//   console.log(document.querySelectorAll("#tasklist li"));
//   document.querySelectorAll("#tasklist li").forEach((task) => {
//     const text = task.querySelector("span").textContent;
//     const completed = task.classList.contains("completed");
//     tasks.push({ text, completed });
//   });

//   localStorage.setItem("tasks", JSON.stringify(tasks));
// }

// function loadTask() {
//   const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

//   const taskList = document.getElementById("taskList");
//   taskList.innerHTML = "";
//   tasks.forEach((task) => {
//     console.log(task);
//     const newTask = document.createElement("li");

//     const checkbox = document.createElement("input");
//     checkbox.type = "checkbox";
//     checkbox.checked = task.completed;
//     newTask.appendChild(checkbox);

//     const span = document.createElement("span");
//     span.textContent = task.text;
//     newTask.appendChild(span);

//     const removeButton = document.createElement("button");
//     removeButton.textContent = "Remove";
//     newTask.appendChild(removeButton);

//     if (task.completed) {
//       newTask.classList.add("completed");
//     }

//     taskList.appendChild(newTask);
//   });
// }
