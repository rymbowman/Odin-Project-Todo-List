import "./style.css";

document.addEventListener('DOMContentLoaded', ()=>{
    renderForm();
    })
    
    const headerContent = document.querySelector('.header-content');
    const pageTitle = document.createElement('h1');
    const svg = '<svg width="110px" height="110px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M18.2086 9.70558C18.5983 9.31421 18.5969 8.68105 18.2056 8.29137C17.8142 7.90169 17.1811 7.90305 16.7914 8.29442L11.0215 14.0892L7.70214 10.816C7.30888 10.4283 6.67573 10.4327 6.28796 10.8259C5.90018 11.2192 5.90461 11.8524 6.29787 12.2401L10.3258 16.212C10.7177 16.5985 11.3483 16.5956 11.7366 16.2056L18.2086 9.70558Z" fill="#50C878"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M4.5 2C3.11929 2 2 3.11929 2 4.5V19.5C2 20.8807 3.11929 22 4.5 22H19.5C20.8807 22 22 20.8807 22 19.5V4.5C22 3.11929 20.8807 2 19.5 2H4.5ZM4 4.5C4 4.22386 4.22386 4 4.5 4H19.5C19.7761 4 20 4.22386 20 4.5V19.5C20 19.7761 19.7761 20 19.5 20H4.5C4.22386 20 4 19.7761 4 19.5V4.5Z" fill="#50C878"></path> </g></svg>';
    pageTitle.setAttribute('id', 'page-title');
    pageTitle.innerHTML = `${svg}CheckBox`;
    headerContent.appendChild(pageTitle);
    
    const pageHeadline = document.createElement('h4');
    pageHeadline.setAttribute('id', 'page-headline');
    pageHeadline.innerHTML = "Achieve More with Every Checkmark";
    headerContent.appendChild(pageHeadline);

    const todoBtn = document.createElement('button')
    todoBtn.classList.add('todo-btn');
    todoBtn.innerHTML = "Add Task"
    headerContent.appendChild(todoBtn);
    
    const newTaskContent = document.querySelector('.tasks-content');
    
    const incompletedTasks = document.createElement('div');
    incompletedTasks.classList.add('incompleted-tasks-container')
    const incompletedTasksTitle = document.createElement('h2');
    incompletedTasksTitle.innerHTML = 'Incomplete';
    newTaskContent.appendChild(incompletedTasks);
    incompletedTasks.appendChild(incompletedTasksTitle);

    const completedTasks = document.createElement('div');
    completedTasks.classList.add('completed-tasks-container')
    const completedTasksTitle = document.createElement('h2');
    completedTasksTitle.innerHTML = 'Complete';
    newTaskContent.appendChild(completedTasks);
    completedTasks.appendChild(completedTasksTitle);

    let todoTasks = [];
    function renderForm(){
        todoBtn.addEventListener('click', ()=>{
            //creates form
            const todoForm = document.createElement('form');
            todoForm.classList.add('todo-form');
            //creates input items
            const inputTitle = document.createElement('input');
            inputTitle.placeholder = 'Title'
            inputTitle.setAttribute('type', 'text');
            inputTitle.setAttribute('name', 'title');
            inputTitle.setAttribute('id', 'title');
            inputTitle.classList.add('form-inputs');

            const inputDescription = document.createElement('input');
            inputDescription.placeholder = 'Description';
            inputDescription.setAttribute('type', 'text');
            inputDescription.setAttribute('name', 'description');
            inputDescription.setAttribute('id', 'description');
            inputDescription.classList.add('form-inputs');
            
            const inputDueDate = document.createElement('input');
            inputDueDate.setAttribute('type', 'date');
            inputDueDate.setAttribute('name', 'due-date');
            inputDueDate.setAttribute('id', 'due-date');
            inputDueDate.classList.add('form-inputs');

            const inputCategory = document.createElement('input');
            inputCategory.maxLength = 40;
            inputCategory.placeholder = 'Category';
            inputCategory.setAttribute('type', 'text');
            inputCategory.setAttribute('name', 'category');
            inputCategory.setAttribute('id', 'category');
            inputCategory.classList.add('form-inputs');

            const inputPriority = document.createElement('input');
            inputPriority.placeholder = '1(low) - 5(high)'
            inputPriority.setAttribute('type', 'number');
            inputPriority.setAttribute('name', 'priority');
            inputPriority.setAttribute('id', 'priority');
            inputPriority.classList.add('form-inputs');

            const inputNotes = document.createElement('input');
            inputNotes.max = 100;
            inputNotes.placeholder = 'Notes';
            inputNotes.setAttribute('type', 'text');
            inputNotes.setAttribute('name', 'notes');
            inputNotes.setAttribute('id', 'notes');
            inputNotes.classList.add('form-inputs');

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
        newPost.innerHTML = 
           `<div>${newTask.title}</div>
            <div>${newTask.description}</div>
            <div>${newTask.category}</div>
            <div>${newTask.dueDate}</div>
            <div>${newTask.priority}</div>
            <div>${newTask.notes}</div>
            <div>
                <input type="checkbox" class="completion-check">
                <label>Complete</label>
            </div>`
            console.log(newPost)
        incompletedTasks.appendChild(newPost);

        form.reset();
        form.remove();
        const checkBox = newPost.querySelector('.completion-check');
        checkBox.addEventListener('change', checkCompletionStatus);
    }

    function checkCompletionStatus(event) {
        const taskElement = event.target.closest('.new-post'); // Get the task element
        if (event.target.checked) {
            console.log('Checked');
            incompletedTasks.removeChild(taskElement); // Remove from incomplete section
            completedTasks.appendChild(taskElement); // Add to completed section
        } else {
            console.log('Not checked yet');
        }
    }