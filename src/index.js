import "./style.css";
import { renderHeader, renderBody, renderTaskDetails } from "./render-document";
import "./form-handler.js";

document.addEventListener("DOMContentLoaded", () => {
  renderHeader();
  renderBody();
});

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
