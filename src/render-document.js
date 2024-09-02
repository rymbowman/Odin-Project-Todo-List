import { displayForm } from "./form-handler";
import { CreateTask } from "./task";

export function renderHeader() {
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

export function renderBody() {
  const newTaskContent = document.querySelector(".tasks-content");

  const incompletedTasksContainer = document.createElement("div");
  incompletedTasksContainer.classList.add("incompleted-tasks-container");
  const incompletedTasksTitle = document.createElement("h2");
  incompletedTasksTitle.innerHTML = "Tasks";
  const incompletedTasks = document.createElement("div");
  incompletedTasks.setAttribute("id", "incompleted-tasks");
  incompletedTasksContainer.appendChild(incompletedTasksTitle);
  incompletedTasksContainer.appendChild(incompletedTasks);
  newTaskContent.appendChild(incompletedTasksContainer);

  const completedTasksContainer = document.createElement("div");
  completedTasksContainer.classList.add("completed-tasks-container");
  const completedTasksTitle = document.createElement("h2");
  completedTasksTitle.innerHTML = "Complete!";
  const completedTasks = document.createElement("div");
  completedTasks.setAttribute("id", "completed-tasks");
  const clearCompletedTasksBtn = document.createElement("button");
  clearCompletedTasksBtn.setAttribute("id", "clear-completed-tasks-btn");
  clearCompletedTasksBtn.innerHTML = "Clear";
  completedTasksContainer.appendChild(completedTasksTitle);
  completedTasksContainer.appendChild(completedTasks);
  completedTasksContainer.appendChild(clearCompletedTasksBtn);
  newTaskContent.appendChild(completedTasksContainer);
  clearCompletedTasksBtn.addEventListener("click", clearCompletedTasks);
}

export function renderNewTask(newTask) {
  const infoIcon =
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);filter: brightness(150%);transition: filter 0.3s;"><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path><path d="M11 11h2v6h-2zm0-4h2v2h-2z"></path></svg>';
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
  const incompletedTasks = document.querySelector("#incompleted-tasks");
  incompletedTasks.appendChild(newPost);
  const taskInfoBtns = document.querySelectorAll("#info-btn");
  for (let i = 0; i < taskInfoBtns.length; i++) {
    const infoBtn = taskInfoBtns[i];
    infoBtn.addEventListener("click", () => renderTaskDetails(newTask));
  }

  const checkBox = newPost.querySelector(".completion-check");
  const completedTasks = document.querySelector("#completed-tasks");
  checkBox.addEventListener("change", (event) => {
    const taskElement = event.target.closest(".new-post"); // Get the task element
    if (event.target.checked) {
      console.log("Checked");
      incompletedTasks.removeChild(taskElement); // Remove from incomplete section
      completedTasks.appendChild(taskElement); // Add to completed section
    } else {
      console.log("Not checked yet");
    }
  });
}

export function renderTaskDetails(newTask) {
  let taskPopup = document.createElement("div");
  taskPopup.classList.add("task-details-popup");
  taskPopup.innerHTML = `
            <div id="popup-content">
                <div>${newTask.dueDate}</div>
                <div>${newTask.priority}</div>
                <div>${newTask.notes}</div>
                <button type="button" id="close-popup-btn">
                    Close
                </button>
            </div>`;
  document.body.appendChild(taskPopup);
  taskPopup.style.display = "flex";
  const closeTaskInfoBtn = taskPopup.querySelector("#close-popup-btn");
  closeTaskInfoBtn.addEventListener("click", () => {
    console.log("button clicked");
    taskPopup.style.display = "none";
  });
}

export function clearCompletedTasks() {
  const completedTasks = document.querySelector("#completed-tasks");
  completedTasks.innerHTML = "";
}
