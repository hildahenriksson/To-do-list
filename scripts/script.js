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

        let changeButton = document.createElement('button');
        changeButton.innerHTML = "Ändra";
        changeButton.classList.add("change-button");

        // Method
        changeButton.addEventListener('click', function(e){
            if(e.target.parentNode.contains(document.getElementById('error-message2'))){
                document.getElementById("error-message2").remove();
            }

            if(e.target.previousElementSibling.value == '') {
                let errorMessage = document.createElement('p');
                errorMessage.innerHTML = "Fyll i fältet för att spara";
                errorMessage.setAttribute("id", "error-message2");
                e.target.parentNode.append(errorMessage);
                
            }

            else {
                if(e.target.innerText == "Ändra"){
                    e.target.previousElementSibling.removeAttribute('readonly');
                    e.target.innerText = "Spara";
                }
                else if(e.target.innerText == "Spara"){
                    e.target.previousElementSibling.setAttribute("readonly", "");
                    e.target.innerText = "Ändra";
                }
            }
            
        })
        
        let doneButton = document.createElement('button');
        doneButton.innerHTML = "Färdig";
        doneButton.classList.add("done-button");

        // Method
        doneButton.addEventListener('click', function(e){
            document.querySelector("#completed-items ul").append(e.target.parentNode);
            e.target.remove();
        })

        let deleteButton = document.createElement('button');
        deleteButton.innerHTML = "Radera";
        deleteButton.classList.add("delete-button");

        // Method
        deleteButton.addEventListener('click', function(e){
            e.target.parentNode.remove();
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