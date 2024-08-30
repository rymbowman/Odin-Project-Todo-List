import "./style.css";
import { renderHeader, renderBody } from "./render-document";

document.addEventListener("DOMContentLoaded", () => {
  renderHeader();
  renderBody();
});

function CreateTask(title, description, dueDate, category, priority, notes) {
  this.title = title;
  this.description = description;
  this.dueDate = dueDate;
  this.category = category;
  this.priority = priority;
  this.notes = notes;
}

function formSubmit(event, form) {
  //prevents default action of form submitting before being able to acquire values of inputs
  event.preventDefault();

  //creates variables for each value from the form item
  let titleValue = document.getElementById("title").value;
  let descriptionValue = document.getElementById("description").value;
  let dueDateValue = document.getElementById("due-date").value;
  let categoryValue = document.getElementById("category").value;
  let priorityValue = document.getElementById("priority").value;
  let notesValue = document.getElementById("notes").value;

  //sets variable 'newTask' equal to the object constructor for creating tasks
  let newTask = new CreateTask(
    titleValue,
    descriptionValue,
    dueDateValue,
    categoryValue,
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
