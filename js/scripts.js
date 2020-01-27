//user logic
$(document).ready(function() {
    $("form#contactForm").submit(function() {
        event.preventDefault();
        var newBook = new AddressBook();
        var userFirst = $("input#firstName").val();
        var userLast = $("input#lastName").val();
        var userNumber = $("input#phoneNumber").val();
        var newContact = new Contact(userFirst, userLast, userNumber);
        newBook.contacts.push(newContact);
        console.log(newBook);
        $("#list").append(newContact.firstName + " " + newContact.lastName + " " + newContact.phoneNumber + "<br>");
        $("form")[0].reset();
    });
});




//business logic
function AddressBook() {
    this.contacts = [];
}

AddressBook.prototype.addContact = function() {
    this.contacts.push(contact);
}

AddressBook.prototype.assignId = function() {

}

function Contact(firstName, lastName, phoneNumber) {
    this.firstName = firstName,
    this.lastName = lastName,
    this.phoneNumber = phoneNumber
}

Contact.prototype.fullName = function() {
    return this.firstName + " " + this.lastName;
}