export function displayForm() {
  const headerContent = document.querySelector(".header-content");
  //creates form
  const todoForm = document.createElement("form");
  todoForm.classList.add("todo-form");
  //creates input items
  const inputTitle = document.createElement("input");
  inputTitle.placeholder = "Title";
  inputTitle.setAttribute("type", "text");
  inputTitle.setAttribute("name", "title");
  inputTitle.setAttribute("id", "title");
  inputTitle.classList.add("form-inputs");

  const inputDescription = document.createElement("input");
  inputDescription.placeholder = "Description";
  inputDescription.setAttribute("type", "text");
  inputDescription.setAttribute("name", "description");
  inputDescription.setAttribute("id", "description");
  inputDescription.classList.add("form-inputs");

  const inputDueDate = document.createElement("input");
  inputDueDate.setAttribute("type", "date");
  inputDueDate.setAttribute("name", "due-date");
  inputDueDate.setAttribute("id", "due-date");
  inputDueDate.classList.add("form-inputs");

  const inputCategory = document.createElement("input");
  inputCategory.maxLength = 40;
  inputCategory.placeholder = "Category";
  inputCategory.setAttribute("type", "text");
  inputCategory.setAttribute("name", "category");
  inputCategory.setAttribute("id", "category");
  inputCategory.classList.add("form-inputs");

  const inputPriority = document.createElement("input");
  inputPriority.placeholder = "1(low) - 5(high)";
  inputPriority.setAttribute("type", "number");
  inputPriority.setAttribute("name", "priority");
  inputPriority.setAttribute("id", "priority");
  inputPriority.classList.add("form-inputs");

  const inputNotes = document.createElement("input");
  inputNotes.max = 100;
  inputNotes.placeholder = "Notes";
  inputNotes.setAttribute("type", "text");
  inputNotes.setAttribute("name", "notes");
  inputNotes.setAttribute("id", "notes");
  inputNotes.classList.add("form-inputs");

  const formSubmitBtn = document.createElement("input");
  formSubmitBtn.placeholder = "Submit";
  formSubmitBtn.setAttribute("type", "submit");
  formSubmitBtn.setAttribute("id", "form-submit-btn");

  //appends all input items into the todo form
  todoForm.appendChild(inputTitle);
  todoForm.appendChild(inputDescription);
  todoForm.appendChild(inputDueDate);
  todoForm.appendChild(inputCategory);
  todoForm.appendChild(inputPriority);
  todoForm.appendChild(inputNotes);
  todoForm.appendChild(formSubmitBtn);
  headerContent.appendChild(todoForm);

  formSubmitBtn.addEventListener("click", () => {
    console.log("form submit btn clicked");
  });
}
