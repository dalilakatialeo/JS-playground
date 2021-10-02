let todoTasksText = [];
let todoTasksStatus = [];
let todoList = document.getElementById("todo-list");
updateTodoList();

// todoTasksText.forEach((task, index) => {
    // let newTodoTaskTextElement = document.createElement("p");
    // newTodoTaskTextElement.innerText = task;

    // if (todoTasksStatus[index] == true) {
    //     newTodoTaskTextElement.classList.add("complete");
    // }

    // let newTodoTaskElement = document.createElement("li");
    // newTodoTaskElement.appendChild(newTodoTaskTextElement);
    // let completeButtonElement = document.createElement("input");
    // completeButtonElement.type = "button";
    // completeButtonElement.value = "Completed!";
    // completeButtonElement.onclick = function () {
    //     toggleComplete(index);
    // };
    // newTodoTaskElement.appendChild(completeButtonElement);
    // todoList.appendChild(newTodoTaskElement);
// });

function createNewTodoTaskElement(task, index) {
    let newTodoTaskTextElement = document.createElement("p");
    newTodoTaskTextElement.innerText = task;

    if (todoTasksStatus[index] == true) {
        newTodoTaskTextElement.classList.add("complete");
    }

    let newTodoTaskElement = document.createElement("li");
    newTodoTaskElement.appendChild(newTodoTaskTextElement);
    let completeButtonElement = document.createElement("input");
    completeButtonElement.type = "button";
    completeButtonElement.value = "Completed!";
    completeButtonElement.onclick = function () {
        toggleComplete(index);
    };
    newTodoTaskElement.appendChild(completeButtonElement);
    todoList.appendChild(newTodoTaskElement);
    return newTodoTaskElement;
}

function addTask() {
    let newTask = document.getElementById("new-task-text");
    if (newTask.value) {
        todoTasksText.push(newTask.value);
        todoTasksStatus.push(false);
        newTask.value = "";
        console.log(todoTasksText);
        updateTodoList();
    }
}

function updateTodoList() {
    let todoList = document.getElementById("todo-list");
    todoList.innerHTML = "";
    todoTasksText.forEach((task, index) => {
        let newTodoTaskElement = createNewTodoTaskElement(task, index);
        todoList.appendChild(newTodoTaskElement);
    });
}

function createNewTodoItemElement(todoItem, index) {}

function toggleComplete(index) {
    if (todoTasksStatus[index] == false) {
        todoTasksStatus[index] = true;
    } else {
        todoTasksStatus[index] = false;    
    }
   updateTodoList();
}
