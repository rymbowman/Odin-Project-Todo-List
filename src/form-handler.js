import { CreateTask } from "./task";
import { renderNewTask, renderTaskDetails } from "./render-document";

export function createInput({ type, name, id, placeholder = "", maxLength }) {
  const input = document.createElement("input");
  input.setAttribute("type", type);
  input.setAttribute("name", name);
  input.setAttribute("id", id);
  if (placeholder) input.placeholder = placeholder;
  if (maxLength) input.maxLength = maxLength;
  input.classList.add("form-inputs");
  return input;
}

export function displayForm() {
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

export function formSubmit(event, form) {
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

  renderNewTask(newTask);

  form.reset();
  form.remove();
  /*
    const checkBox = newPost.querySelector(".completion-check");
    checkBox.addEventListener("change", checkCompletionStatus);
  
    const infoBtn = document.querySelector("#info-btn");
    infoBtn.addEventListener("click", renderTaskDetails(newTask));*/
}
