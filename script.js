// Array to store todo list
let listArray = [];

function toAdd(){
    const todoInput = document.getElementById('input');
    const todoText =  todoInput.value.trim();

    if(todoText !== ""){
        listArray.push(todoText);
        displayTodos();
        todoInput.value = "";
    }
}

// Display Function
function displayTodos() {
    // Get List where to put list-items
    const todoList = document.getElementById('todoList');
    todoList.innerHTML = "";

    listArray.forEach((todo, index) => {
        const todoContainer = document.createElement("div");
        todoContainer.style.display ="flex";
        todoContainer.style.gap ="10px";
        todoContainer.style.justifyContent ="space-around";
        todoContainer.style.borderTop ="1px solid black";
        todoContainer.style.paddingTop ="5px";
        todoContainer.className="field-container";


        // Add new todo-list element
        let input = document.createElement("input");
        input.value = todo;
        input.style.border='none'
        input.className="field";
        todoContainer.appendChild(input);

        // check box 
        const checkBox = document.createElement("input");
        checkBox.type="checkbox";
        todoContainer.insertBefore(checkBox,input);


        // save button with todo-list 
        const saveButton = document.createElement("button");
        saveButton.textContent = "Save";
        saveButton.className="save"
        todoContainer.appendChild(saveButton);
        saveButton.addEventListener("click", () => {
            listArray[index] = input.value;
            displayTodos();
        });
      
        // Delete button 
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Remove";
        deleteButton.className="remove"
        todoContainer.appendChild(deleteButton);
        deleteButton.addEventListener("click", () => {
            listArray.splice(index, 1);
            displayTodos();
        });

        todoList.appendChild(todoContainer);
    });
}
