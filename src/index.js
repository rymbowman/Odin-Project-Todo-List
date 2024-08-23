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
            
            //creates input items
            const inputName = document.createElement('input');
            inputName.type = 'text';
            inputName.name = 'name';
            inputName.placeholder = 'name'
    
            mainContent.appendChild(todoForm);
            todoForm.appendChild(inputName)
        })
    }

