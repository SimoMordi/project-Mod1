// const noteForm = document.querySelector("#note-dropdown")
// const categorySelect = document.querySelector("#inputOptions")
// const typeSelect = document.querySelector("#inputOptions2")
// const textArea = document.querySelector("#input-text")
// const notesContainer = document.querySelector(".My-notes-container")


// noteForm.addEventListener("submit", (e) => {
//     e.preventDefault()
//     console.log("submit");

//     // Fetch the values directly
//     const categoryValue = categorySelect.value; //Get the value from 'categorySelect'
//     const typeValue = typeSelect.value; //Get the value from 'typeSelect'
//     const textValue = textArea.value; //Get the text value from 'textArea'

//     //Create a new unordered list element 'noteItem'
//     const noteItem = document.createElement("li");
//     //Create a header for the category and set its text to the selected category value
//     const category = document.createElement("h3");
//     category.textContent = categoryValue;
//     //Create a header for the type and set its text to the selected type value.
//     const type = document.createElement("h3");
//     type.textContent = typeValue;
//     //Create a paragraph for the note text and set its text to the text from 'textArea'
//     const Text = document.createElement("p");
//     Text.textContent = textValue
//     const button = document.createElement("button");
//     button.textContent = "Edit Note";
    
//     // Append elements to the note item:
//     //Attach the category, type, and text to 'noteItem'
//     noteItem.appendChild(category);
//     noteItem.appendChild(type);
//     noteItem.appendChild(button)
//     noteItem.appendChild(Text);
//     const input = document.createElement('input')
//     // Append the note item to the notes container:
//     //Add the new 'noteItem' to 'notesContainer' (show it on the page)
//     notesContainer.appendChild(noteItem);
//     const edit = (e) => {
//         //remove the pTag
//         noteItem.removeChild(Text)
//         // noteItem.removeChild(button)
//         //Add input with the text as a value
   
//         input.type = 'text'
//         input.value = Text.textContent

//         noteItem.appendChild(input)
        
//         input.addEventListener('keydown', (e) => {
//             if (e.code === 'Enter') {
//                 e.preventDefault()
//                 // HERE REMOVE INPUT AND PUT THE P TAG
                
//                 Text.textContent = input.value
//                 noteItem.removeChild(input)
                
                
//                 noteItem.appendChild(Text)
//                 // noteItem.appendChild(button)
//             }

//         })

//     }
//     button.addEventListener('click', edit)

//     //Clear all inputs in the 'noteForm' for the next entry
//     noteForm.reset();
// })





const form1 = document.querySelector('#to-do-form')
const todoInput = document.querySelector('#todoInput'); // input has an ID of 'todoInput'
const todoContainer = document.querySelector('#todo-container'); // main container (like a ul) with ID 'todoList'

form1.addEventListener('submit', (e) => {
    e.preventDefault();

    let valueFromInput = todoInput.value;
    console.log(valueFromInput);

    // Create a new div container for the todo item
    const divContainer = document.createElement('div');
    divContainer.classList = "single-todo";

    // Create a checkbox for the todo item
    const myInput = document.createElement('input');
    myInput.type = "checkbox";
    divContainer.appendChild(myInput);

    // Create a paragraph tag for the todo text
    const pTag = document.createElement('p');
    pTag.textContent = valueFromInput;
    divContainer.appendChild(pTag);

    // Create a close button for the todo item
    const closeButton = document.createElement('div');
    closeButton.classList = "close";
    closeButton.textContent = "X";
    closeButton.addEventListener('click', () => {
        todoContainer.removeChild(newTodoElement);
    });
    divContainer.appendChild(closeButton);

    // Create a new li element for the todo item
    const newTodoElement = document.createElement('li');
    newTodoElement.appendChild(divContainer);

    // Append the todo item to the main todo list
    todoContainer.appendChild(newTodoElement);

    // Clear the input after adding the todo
    todoInput.value = "";
});




const handleSubmit = (input) => {
    let value = input.value;

    let newTodoElement = document.createElement('div');
    newTodoElement.classList.add("todo");

    // make checkbox
    let todoInput = document.createElement('input');
    todoInput.type = "checkbox";
    todoInput.classList.add('todo-checkbox')
    newTodoElement.appendChild(todoInput)

    // Make TEXT ELEMENT (input) 
    let todoTextElement = document.createElement('input');
    todoTextElement.classList.add("todo-text")
    todoTextElement.value = value;
    todoTextElement.disabled = true
    newTodoElement.appendChild(todoTextElement);


    // make buttons container
    let buttonsContainer = document.createElement('div');
    buttonsContainer.classList.add('buttons');

    // make edit button
    let editButton = document.createElement('button');
    editButton.classList.add("edit");
    editButton.addEventListener('click', handleEdit)
    editButton.textContent = "EDIT"

    // make delete button
    let deleteButton = document.createElement('button');
    deleteButton.classList.add("delete");
    deleteButton.addEventListener('click', handleDelete)
    deleteButton.textContent = "DELETE"

    // add buttons to container
    buttonsContainer.appendChild(editButton)
    buttonsContainer.appendChild(deleteButton)

    newTodoElement.appendChild(buttonsContainer);




    todoBox.appendChild(newTodoElement);

    input.value = ""
}


formBox.addEventListener('submit', (e) => {
    e.preventDefault();
    let input = document.querySelector("#input-container input");

    if (input.value.length > 0) {
        handleSubmit(input);
    }
});