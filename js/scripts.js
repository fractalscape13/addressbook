//user logic
$(document).ready(function() {
    $(button).submit(function() {
        event.preventDefault();

    });
});




//business logic
var addressBook = [];

function Contact(firstName, lastName, phoneNumber) {
    this.firstName = firstName,
    this.lastName = lastName,
    this.phoneNumber = phoneNumber
}

Contact.prototype.fullName = function() {
    return this.firstName + " " + this.lastName;
}