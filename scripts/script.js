var addNewItem = document.getElementById('add-item');
let buttonSpecifics = new ButtonSpecifics();

addNewItem.addEventListener('click', function(e){
    if(document.body.contains(document.getElementById('error-message'))){
        document.getElementById("error-message").remove();
    }

    let newItem = document.createElement('li');
    let newItemValue = document.getElementById('new-item-text');

    if(newItemValue.value.trim() == '') {
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

        let changeButton = buttonSpecifics.createButton("Ändra", "change-button");
        
        changeButton.addEventListener('click', function(e){
            
            if(e.target.parentNode.contains(document.getElementById('error-message2'))){
                buttonSpecifics.removeErrorMessage();
            }

            if(e.target.previousElementSibling.value.trim() == '') {
                buttonSpecifics.createErrorMessage(e);
            }

            else {
                buttonSpecifics.makePossibleToEdit(e, "Ändra", "Spara");
            }
        })

        let doneButton = buttonSpecifics.createButton("Färdig", "done-button");

        doneButton.addEventListener('click', function(e){

            if(e.target.parentNode.contains(document.getElementById('error-message2'))){
                buttonSpecifics.removeErrorMessage();
            }

            if(e.target.parentNode.firstElementChild.value.trim() == '') {
                buttonSpecifics.createErrorMessage(e);
            }

            else{
                buttonSpecifics.moveToDoneList(e);
            }
        })

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

resetLists.addEventListener('click', function(e){
    buttonSpecifics.resetAll(e);
})

