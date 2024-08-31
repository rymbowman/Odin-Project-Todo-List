import "./style.css";

document.addEventListener("DOMContentLoaded", () => {
  renderHeader();
  renderBody();
});

function renderHeader() {
  const headerContent = document.querySelector(".header-content");
  const pageTitle = document.createElement("h1");
  const svg =
    '<svg width="110px" height="110px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M18.2086 9.70558C18.5983 9.31421 18.5969 8.68105 18.2056 8.29137C17.8142 7.90169 17.1811 7.90305 16.7914 8.29442L11.0215 14.0892L7.70214 10.816C7.30888 10.4283 6.67573 10.4327 6.28796 10.8259C5.90018 11.2192 5.90461 11.8524 6.29787 12.2401L10.3258 16.212C10.7177 16.5985 11.3483 16.5956 11.7366 16.2056L18.2086 9.70558Z" fill="#50C878"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M4.5 2C3.11929 2 2 3.11929 2 4.5V19.5C2 20.8807 3.11929 22 4.5 22H19.5C20.8807 22 22 20.8807 22 19.5V4.5C22 3.11929 20.8807 2 19.5 2H4.5ZM4 4.5C4 4.22386 4.22386 4 4.5 4H19.5C19.7761 4 20 4.22386 20 4.5V19.5C20 19.7761 19.7761 20 19.5 20H4.5C4.22386 20 4 19.7761 4 19.5V4.5Z" fill="#50C878"></path> </g></svg>';
  pageTitle.setAttribute("id", "page-title");
  pageTitle.innerHTML = `${svg}CheckBox`;
  headerContent.appendChild(pageTitle);

  const pageHeadline = document.createElement("h4");
  pageHeadline.setAttribute("id", "page-headline");
  pageHeadline.innerHTML = "Achieve More with Every Checkmark";
  headerContent.appendChild(pageHeadline);

  const addTaskBtn = document.createElement("button");
  addTaskBtn.classList.add("todo-btn");
  addTaskBtn.innerHTML = "Add Task";
  headerContent.appendChild(addTaskBtn);
  addTaskBtn.addEventListener("click", displayForm);
}

function renderBody() {
  const newTaskContent = document.querySelector(".tasks-content");

  const incompletedTasks = document.createElement("div");
  incompletedTasks.classList.add("incompleted-tasks-container");
  const incompletedTasksTitle = document.createElement("h2");
  incompletedTasksTitle.innerHTML = "Incomplete";
  newTaskContent.appendChild(incompletedTasks);
  incompletedTasks.appendChild(incompletedTasksTitle);

  const completedTasks = document.createElement("div");
  completedTasks.classList.add("completed-tasks-container");
  const completedTasksTitle = document.createElement("h2");
  completedTasksTitle.innerHTML = "Complete";
  newTaskContent.appendChild(completedTasks);
  completedTasks.appendChild(completedTasksTitle);
}

function createInput({ type, name, id, placeholder = "", maxLength }) {
  const input = document.createElement("input");
  input.setAttribute("type", type);
  input.setAttribute("name", name);
  input.setAttribute("id", id);
  if (placeholder) input.placeholder = placeholder;
  if (maxLength) input.maxLength = maxLength;
  input.classList.add("form-inputs");
  return input;
}

function displayForm() {
  const headerContent = document.querySelector(".header-content");
  //creates form
  const todoForm = document.createElement("form");
  todoForm.classList.add("todo-form");

  const inputs = [
    {
      type: "text",
      name: "title",
      id: "title-input",
      placeholder: "Title",
      maxLength: 50,
    },
    { type: "date", name: "due-date", id: "date-input" },
    {
      type: "number",
      name: "priority",
      id: "priority-input",
      placeholder: "1(low) - 5(high)",
      maxLength: 1,
    },
    {
      type: "text",
      name: "notes",
      id: "notes-input",
      placeholder: "Notes",
      maxLength: 250,
    },
  ];

  inputs.forEach((inputItem) => {
    const inputElement = createInput(inputItem);
    todoForm.appendChild(inputElement);
  });

  const formSubmitBtn = createInput({
    type: "submit",
    name: "form-submit",
    id: "form-submit-btn",
    placeholder: "Submit",
  });
  todoForm.appendChild(formSubmitBtn);

  todoForm.addEventListener("submit", (event) => {
    console.log("form was submitted");
    formSubmit(event, todoForm);
  });

  headerContent.appendChild(todoForm);
}

function CreateTask(title, dueDate, priority, notes) {
  this.title = title;
  this.dueDate = dueDate;
  this.priority = priority;
  this.notes = notes;
}

function formSubmit(event, form) {
  //prevents default action of form submitting before being able to acquire values of inputs
  event.preventDefault();

  //creates variables for each value from the form item
  let titleValue = document.getElementById("title-input").value;
  let dueDateValue = document.getElementById("date-input").value;
  let priorityValue = document.getElementById("priority-input").value;
  let notesValue = document.getElementById("notes-input").value;

  //sets variable 'newTask' equal to the object constructor for creating tasks
  let newTask = new CreateTask(
    titleValue,
    dueDateValue,
    priorityValue,
    notesValue
  );

  const infoIcon =
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: scaleX(-1);msFilter:progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1);"><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path><path d="M11 11h2v6h-2zm0-4h2v2h-2z"></path></svg>';
  let newPost = document.createElement("div");
  newPost.classList.add("new-post");
  newPost.innerHTML = `<div>${newTask.title}</div>
            <button type="button" id="info-btn">
                ${infoIcon}
            </button>
            <div>
                <input type="checkbox" class="completion-check">
                <label>Complete</label>
            </div>`;
  const incompletedTasks = document.querySelector(
    ".incompleted-tasks-container"
  );
  incompletedTasks.appendChild(newPost);
  form.reset();
  form.remove();
  /*
  const checkBox = newPost.querySelector(".completion-check");
  checkBox.addEventListener("change", checkCompletionStatus);

  const infoBtn = document.querySelector("#info-btn");
  infoBtn.addEventListener("click", renderTaskDetails(newTask));*/
}

//handles the formSubmit function on button click of this form

/*
function checkCompletionStatus(event) {
  const taskElement = event.target.closest(".new-post"); // Get the task element
  if (event.target.checked) {
    console.log("Checked");
    incompletedTasks.removeChild(taskElement); // Remove from incomplete section
    completedTasks.appendChild(taskElement); // Add to completed section
  } else {
    console.log("Not checked yet");
  }
}

function renderTaskDetails(task) {
  let taskModal = document.createElement("div");
  taskModal.classList.add("task-details-popup");
  taskModal.innerHTML = `
            <div id="popup-content">
                <div>${task.description}</div>
                <div>${task.category}</div>
                <div>${task.dueDate}</div>
                <div>${task.priority}</div>
                <div>${task.notes}</div>
                <button type="button" id="close-popup-btn">
                    Close
                </button>
            </div>`;
  document.body.appendChild(taskModal);

  taskModal.style.display = "flex";

  const closeBtn = taskModal.querySelector("#close-popup-btn");
  closeBtn.addEventListener("click", () => {
    taskModal.style.display = "none";
    taskModal.remove();
  });
}*/
