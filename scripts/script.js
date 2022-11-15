var addNewItem = document.getElementById('add-item');


addNewItem.addEventListener('click', function(e){
    if(document.body.contains(document.getElementById('error-message'))){
        document.getElementById("error-message").remove();
    }

    let newItem = document.createElement('li');
    let newItemValue = document.getElementById('new-item-text');

    if(newItemValue.value == '') {
        let errorMessage = document.createElement('p');
        errorMessage.innerHTML = "Fyll i fältet med din syssla";
        errorMessage.setAttribute("id", "error-message");
        document.querySelector("#create-item").append(errorMessage);
    }

    else {
        let newInputBox = document.createElement('input');

        newInputBox.setAttribute("type", "text");
        newInputBox.setAttribute("name", "item");
        newInputBox.setAttribute("value", newItemValue.value);
        newInputBox.setAttribute("readonly", "");

        let buttonSpecifics = new ButtonSpecifics();
        
        // CHANGE-BUTTON

        let changeButton = buttonSpecifics.createButton("Ändra", "change-button");
        
        // Method
        changeButton.addEventListener('click', function(e){
            
            if(e.target.parentNode.contains(document.getElementById('error-message2'))){
                buttonSpecifics.removeErrorMessage();
            }

            if(e.target.previousElementSibling.value == '') {
                buttonSpecifics.createErrorMessage(e);
            }

            else {
                buttonSpecifics.makePossibleToEdit(e, "Ändra", "Spara");
            }
            
        })
        
        // DONE-BUTTON

        let doneButton = buttonSpecifics.createButton("Färdig", "done-button");

        doneButton.addEventListener('click', function(e){
            buttonSpecifics.moveToDoneList(e);
        })

        // DELETE_BUTTON

        let deleteButton = buttonSpecifics.createButton("Radera", "delete-button");
    
        deleteButton.addEventListener('click', function(e){
            buttonSpecifics.deleteParent(e);
        })

        newItem.append(newInputBox, changeButton, doneButton, deleteButton);
        document.querySelector("#to-do-list ul").append(newItem);
        }

    newItemValue.value = null;
    
})

var resetLists = document.getElementById('reset');

// Method
resetLists.addEventListener('click', function(e){
    while(e.target.parentNode.nextElementSibling.lastElementChild.firstElementChild)
    e.target.parentNode.nextElementSibling.lastElementChild.lastElementChild.remove();
    
    while(e.target.parentNode.parentNode.lastElementChild.lastElementChild.lastElementChild)
    e.target.parentNode.parentNode.lastElementChild.lastElementChild.lastElementChild.remove();

    e.target.parentNode.children[1].value = null;
    if(document.body.contains(document.getElementById('error-message'))){
        document.getElementById("error-message").remove();
    }
})


// CLASSES

class ButtonSpecifics {


    removeErrorMessage = function() {
        document.getElementById("error-message2").remove();
    }

    createErrorMessage = function(e) {
        let errorMessage = document.createElement('p');
        errorMessage.innerHTML = "Fyll i fältet för att spara";
        errorMessage.setAttribute("id", "error-message2");
        e.target.parentNode.append(errorMessage);
    }

    makePossibleToEdit = function(e, firstText, secondText) {
        if(e.target.innerText == firstText){
            e.target.previousElementSibling.removeAttribute('readonly');
            e.target.innerText = secondText;
        }
        else if(e.target.innerText == secondText){
            e.target.previousElementSibling.setAttribute("readonly", "");
            e.target.innerText = firstText;
        }
    }

    moveToDoneList = function(e) {
        document.querySelector("#completed-items ul").append(e.target.parentNode);
        e.target.remove();
    }

    createButton = function(name, className) {
        let button = document.createElement('button');
        button.innerHTML = name;
        button.classList.add(className);
        return button;
    }

    deleteParent = function(e) {
        e.target.parentNode.remove();
    }

   

}