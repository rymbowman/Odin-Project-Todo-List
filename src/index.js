import "./style.css";

document.addEventListener('DOMContentLoaded', ()=>{
    renderForm();
    })
    
    const headerContent = document.querySelector('.header-content');
    const pageTitle = document.createElement('h1');
    pageTitle.setAttribute('id', 'page-title');
    pageTitle.innerHTML = "To-do List";
    headerContent.appendChild(pageTitle);
    
    const pageHeadline = document.createElement('h4');
    pageHeadline.setAttribute('id', 'page-headline');
    pageHeadline.innerHTML = "Conquer Today!";
    headerContent.appendChild(pageHeadline);

    const todoBtn = document.createElement('button')
    todoBtn.classList.add('todo-btn');
    todoBtn.innerHTML = "Add Task"
    headerContent.appendChild(todoBtn);
    
    const newTaskContent = document.querySelector('.tasks-content');
    newTaskContent.classList.add('new-tasks-content');

    function renderForm(){
        todoBtn.addEventListener('click', ()=>{
            //creates form
            const todoForm = document.createElement('form');
            todoForm.classList.add('todo-form');
            //creates input items
            const inputTitle = document.createElement('input');
            inputTitle.placeholder = 'title'
            inputTitle.setAttribute('type', 'text');
            inputTitle.setAttribute('name', 'title');
            inputTitle.setAttribute('id', 'title');

            const inputDescription = document.createElement('input');
            inputDescription.placeholder = 'description of task';
            inputDescription.setAttribute('type', 'text');
            inputDescription.setAttribute('name', 'description');
            inputDescription.setAttribute('id', 'description');

            const inputDueDate = document.createElement('input');
            inputDueDate.placeholder = 'Due by:';
            inputDueDate.setAttribute('type', 'date');
            inputDueDate.setAttribute('name', 'due-date');
            inputDueDate.setAttribute('id', 'due-date');

            const inputCategory = document.createElement('input');
            inputCategory.maxLength = 40;
            inputCategory.placeholder = 'category';
            inputCategory.setAttribute('type', 'text');
            inputCategory.setAttribute('name', 'category');
            inputCategory.setAttribute('id', 'category');

            const inputPriority = document.createElement('input');
            inputPriority.placeholder = '1(lowest) - 5(highest)'
            inputPriority.setAttribute('type', 'number');
            inputPriority.setAttribute('name', 'priority');
            inputPriority.setAttribute('id', 'priority');

            const inputNotes = document.createElement('input');
            inputNotes.max = 100;
            inputNotes.placeholder = 'Notes about task(optional)';
            inputNotes.setAttribute('type', 'text');
            inputNotes.setAttribute('name', 'notes');
            inputNotes.setAttribute('id', 'notes');

            const formSubmitBtn = document.createElement('input');
            formSubmitBtn.placeholder = 'Submit';
            formSubmitBtn.setAttribute('type', 'submit');
            formSubmitBtn.setAttribute('id', 'form-submit-btn');

            //appends all input items into the todo form
            todoForm.appendChild(inputTitle);
            todoForm.appendChild(inputDescription);
            todoForm.appendChild(inputDueDate);
            todoForm.appendChild(inputCategory);
            todoForm.appendChild(inputPriority);
            todoForm.appendChild(inputNotes);
            todoForm.appendChild(formSubmitBtn);
            headerContent.appendChild(todoForm);

            //handles the formSubmitFunction on button click of this form
            document.querySelector('#form-submit-btn').addEventListener('click', (event) => handleFormSubmit(event, todoForm));
        })
    }

    function CreateTask(title, description, dueDate, category, priority, notes) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.category = category;
        this.priority = priority;
        this.notes = notes;
    }

    function handleFormSubmit(event, form) {
        //prevents default action of form submitting before being able to acquire values of inputs
        event.preventDefault();

        //creates variables for each value from the form item
        let titleValue = document.getElementById('title').value;
        let descriptionValue = document.getElementById('description').value;
        let dueDateValue = document.getElementById('due-date').value;
        let categoryValue = document.getElementById('category').value;
        let priorityValue = document.getElementById('priority').value;
        let notesValue = document.getElementById('notes').value;

        //sets variable 'newTask' equal to the object constructor for creating tasks into the 
        let newTask = new CreateTask(titleValue, descriptionValue, dueDateValue, categoryValue, priorityValue, notesValue);
        console.log(newTask);
        let newPost = document.createElement('div');
        newPost.classList.add('new-post');
        newPost.innerHTML = `
            <h2>${newTask.title}</h2>
            <p>${newTask.description}</p>
            <p>Category: ${newTask.category}</p>
            <p>Deadline: ${newTask.dueDate}</p>
            <p>Priority Level: ${newTask.priority}</p>
            <p>Notes: ${newTask.notes}</p>
            <input type="checkbox" id="check-complete">
            `
        newTaskContent.appendChild(newPost);

        form.reset();
        form.remove();
    }