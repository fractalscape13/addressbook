//user logic
var newBook = new AddressBook();

// function displayContactDetails(addressBookToDisplay) {
//     var contactsList = $("ul#contacts");
//     var htmlForContactInfo = "";
//     addressBookToDisplay.contacts.forEach(function(contact){
//         htmlForContactInfo += "li id=" + contact.id + 
//     });
// }

$(document).ready(function() {
    $("form#contactForm").submit(function() {
        event.preventDefault();
        var userFirst = $("input#firstName").val();
        var userLast = $("input#lastName").val();
        var userNumber = $("input#phoneNumber").val();
        var newContact = new Contact(userFirst, userLast, userNumber);
        newBook.addContact(newContact);
        console.log(newBook);
        console.log(newBook.currentId);
        $("#contacts").append(newContact.firstName + " " + newContact.lastName + " " + newContact.phoneNumber + "<br>");
        $("form")[0].reset();
    });
});




//business logic
function AddressBook() {
    this.contacts = [];
    this.currentId = 0
}

AddressBook.prototype.addContact = function(contact) {
    contact.id = this.assignId();
    this.contacts.push(contact);
}

AddressBook.prototype.assignId = function() {
    this.currentId += 1;
    return this.currentId;
}

AddressBook.prototype.findContact = function(id) {
    for (var i=0; i< this.contacts.length; i++) {
      if (this.contacts[i]) {
        if (this.contacts[i].id == id) {
          return this.contacts[i];
        }
      }
    };
    return false;
  }
  
  AddressBook.prototype.deleteContact = function(id) {
    for (var i=0; i< this.contacts.length; i++) {
      if (this.contacts[i]) {
        if (this.contacts[i].id == id) {
          delete this.contacts[i];
          return true;
        }
      }
    };
    return false;
  }

function Contact(firstName, lastName, phoneNumber) {
    this.firstName = firstName,
    this.lastName = lastName,
    this.phoneNumber = phoneNumber
}

Contact.prototype.fullName = function() {
    return this.firstName + " " + this.lastName;
}