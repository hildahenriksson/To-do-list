class ButtonSpecifics {

    createButton = function(name, className) {
        let button = document.createElement('button');
        button.innerHTML = name;
        button.classList.add(className);
        return button;
    }
    
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

    deleteParent = function(e) {
        e.target.parentNode.remove();
    }

    resetAll = function(e) {
        this.removeAllListElements(e);
    
        this.removeInputValue(e);
    
        this.removeAllErrorMessages(e);
    }
    
    removeAllListElements = function(e) {
        while(e.target.parentNode.nextElementSibling.lastElementChild.firstElementChild)
        e.target.parentNode.nextElementSibling.lastElementChild.lastElementChild.remove();
        
        while(e.target.parentNode.parentNode.lastElementChild.lastElementChild.lastElementChild)
        e.target.parentNode.parentNode.lastElementChild.lastElementChild.lastElementChild.remove();
    }
    
    removeInputValue = function(e) {
        e.target.parentNode.children[1].value = null;
    }
    
    removeAllErrorMessages = function(e) {
        if(document.body.contains(document.getElementById('error-message'))){
            document.getElementById("error-message").remove();
        }
    }
}

