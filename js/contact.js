class Message {
    constructor(name, email, message) {
        this.name = name;
        this.email = email;
        this.message = message;
    }
} 
//UI DISPLAY
class UI {
    //DISPLAY OBJECTS IN TO SCREENS
    static displayMessages () {
        const messages = Store.getMessages();
        messages.forEach((message) => UI.addMessageToList(message));				
    }
     
    //ADD MESSAGE TO ADDMESSAGETOLIST
    static addMessageToList(message) {
        const list = document.querySelector("#message-list");
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${message.name}</td>
            <td>${message.email}</td>
            <td>${message.message}</td>    
            <td><a href="#" class="btn btn-danger btn-sm 
            delete">X</a></td> 
        `;
        list.appendChild(row);

    }
    //DELETE ELEMENT
    static deleteMessage(el) {     
       if(el.classList.contains('delete')) {
           el.parentElement.parentElement.remove();
       }
    }

    static showAlert(message, className) {
        const div = document.createElement("div");
        div.className = `alert alert-${className}`;
        div.appendChild(document.createTextNode(message));
        const container = document.querySelector('.row-form');
        const form = document.querySelector("#message-form");
        container.insertBefore(div, form);

        //Vanish in 3 seconds
        setTimeout(() => document.querySelector('.alert').remove(), 
        3000);
    }

    //CLEAR ALL THE FIELDS
    static clearFields() {
        document.querySelector("#name").value="";
        document.querySelector("#email").value="";
        document.querySelector("#message").value="";
    }
}

//Store class: Handle Storage
class Store{
    static getMessages() {
        let messages;
        if(localStorage.getItem('message') === null) {
            messages = [];
        } else {
           messages = JSON.parse(localStorage.getItem('messages'));
        }
        return messages;
    }

    static addMessage(message) {
       const messages = Store.getMessages();

       messages.push(message);
       localStorage.setItem('messages', JSON.stringify(messages));
    }
    
    static removeMessage(message) {
        const messages = Store.getMessages();
        messages.forEach((message, index) => {
            if(message.message === message) {
                messages.splice(index, 1);
            }
        });
        localStorage.setItem('messages', JSON.stringify(messages));
    }
}

//LOAD UI WHEN DOM LOADEDS
document.addEventListener('DOMContentLoaded', UI.displayMessages);
//SUBMIT INPUT TO FORM | ADD a BOOK
document.querySelector("#message-form").addEventListener('submit', (e) => {
   // Prevent actual submit
    e.preventDefault();

     //Get Form Values
    const name = document.querySelector("#name").value;	 
    const email = document.querySelector("#email").value;
    const message = document.querySelector("#message").value;

    //VALIDATE 
    if(name === '' || email === '' || message === '') {
        UI.showAlert('Please fill in all fields', 'danger');
    }else {
        // Instatiate book
    const mymessage = new Message(name, email, message);
        // ADD MESSAGE TO UI
    UI.addMessageToList(mymessage);

    Store.addMessage(message);

    UI.showAlert('Message Added', 'Success');
        //CLEAR FIELDS
    UI.clearFields();
    }
})

//EVENT: REMOVE A BOOK
document.querySelector("#message-list").addEventListener("click", (e) => {
    //Remove from the UI
    UI.deleteMessage(e.target)

    //Remove message from store
    Store.removeMessage
    (e.target.parentElement.previousElementSibling.textContent);
    
    //Show success message
    UI.showAlert('Message Deleted', 'Success');
})
	

const Person = function(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;

    //never to this
    // this.calcAge = function() {
    //     console.log(2037 - this.birthYear);
    // }
}

const Jonas = new Person('Jonas', 1991);
console.log(Jonas);

//1. New {} is created
//2. function is called, this = {}
//3. {} linked to prototype
//4. function automatically return {} 

const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);
console.log(matilda, jack);

console.log(Jonas instanceof Person);

console.log(Person.prototype);

Person.prototype.calcAge = function () {
    console.log(2037 - this.birthYear);
}

Jonas.calcAge();
matilda.calcAge();
jack.calcAge();

console.log(Jonas.__proto__ === Person.prototype);









