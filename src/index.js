import "./style.css";

document.addEventListener('DOMContentLoaded', ()=>{
    renderForm();
    })
    
    const mainContent = document.querySelector('.content');
    const pageTitle = document.createElement('h1');
    pageTitle.innerHTML = "Todo List";
    mainContent.appendChild(pageTitle);
    
    const pageHeadline = document.createElement('h4');
    pageHeadline.classList.add('page-headline')
    pageHeadline.innerHTML = "Conquer today!";
    mainContent.appendChild(pageHeadline);

    const todoBtn = document.createElement('button')
    todoBtn.classList.add('todo-btn');
    todoBtn.innerHTML = "Add item to list"
    mainContent.appendChild(todoBtn);
    
    function renderForm(){
        todoBtn.addEventListener('click', ()=>{
            //creates form
            const todoForm = document.createElement('form');
            todoForm.classList.add('todo-form');

            //creates input items
            const inputTitleLabel = document.createElement('label');
            const inputTitle = document.createElement('input');
            inputTitleLabel.htmlFor = 'title';
            inputTitleLabel.innerHTML = 'Title: ';
            inputTitle.type = 'text';
            inputTitle.name = 'title';
            inputTitle.placeholder = 'title'

            const inputDescription = document.createElement('input');
            inputDescription.type = 'text';
            inputDescription.name = 'description';
            inputDescription.placeholder = 'description of task';

            const inputDueDate = document.createElement('input');
            inputDueDate.type = 'datetime-local';
            inputDueDate.name = 'due-date';
            inputDueDate.placeholder = 'Due by:';

            const inputCategory = document.createElement('input');
            inputCategory.type = 'text';
            inputCategory.name = 'category';
            inputCategory.placeholder = 'category';

            const inputPriority = document.createElement('input');
            inputPriority.type = 'range';
            inputPriority.name = 'priority';
            inputPriority.placeholder = 'Priority level (1:lowest - 5:highest)';

            const inputNotes = document.createElement('input');
            inputNotes.type = 'text';
            inputNotes.name = 'notes';
            inputNotes.placeholder = 'Notes about task(optional)';
    
            //appends all input items into the todo form
            mainContent.appendChild(todoForm);
            todoForm.appendChild(inputTitleLabel);
            todoForm.appendChild(inputTitle);
            todoForm.appendChild(inputDescription);
            todoForm.appendChild(inputDueDate);
            todoForm.appendChild(inputCategory);
            todoForm.appendChild(inputPriority);
            todoForm.appendChild(inputNotes);
        })
    }

    

