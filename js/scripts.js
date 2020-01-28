//user logic
var newBook = new AddressBook();

function displayContactDetails(addressBookToDisplay) {
    var contactsList = $("ul#contacts");
    var htmlForContactInfo = "";
    addressBookToDisplay.contacts.forEach(function(contact){
        htmlForContactInfo += "<li id=" + contact.id + ">" + contact.firstName + " " + contact.lastName + "</li>";
    });
    contactsList.html(htmlForContactInfo);
};

function showContact(contactId) {
    var contact = newBook.findContact(contactId);
    $("#showContact").show();
    $(".firstName").html(contact.firstName);
    $(".lastName").html(contact.lastName);
    $(".phoneNumber").html(contact.phoneNumber);
    var buttons = $("#buttons");
    buttons.empty();
    buttons.append("<button class='deleteBtn' id=" + contact.id + ">Delete</button>");
};

function attachContactListeners() {
    $("ul#contacts").on("click", "li", function() {
        showContact(this.id);
        console.log("Zee id of this li is " + this.id + "!");
    });
    $("#buttons").on("click", ".deleteBtn", function() {
        newBook.deleteContact(this.id);
        $("#showContact").hide();
        displayContactDetails(newBook);
    });
};

$(document).ready(function() {
    attachContactListeners();
    $("form#contactForm").submit(function() {
        event.preventDefault();
        var userFirst = $("input#firstName").val();
        var userLast = $("input#lastName").val();
        var userNumber = $("input#phoneNumber").val();
        var newContact = new Contact(userFirst, userLast, userNumber);
        newBook.addContact(newContact);
        displayContactDetails(newBook);
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