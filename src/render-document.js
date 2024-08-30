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

  const todoBtn = document.createElement("button");
  todoBtn.classList.add("todo-btn");
  todoBtn.innerHTML = "Add Task";
  headerContent.appendChild(todoBtn);
}

export function renderBody() {
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
