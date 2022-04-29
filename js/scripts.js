function Contact(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.addresses = [];
}
Contact.prototype.fullName = function () {
  return this.firstName + " " + this.lastName;
}

function Address(loc, street, city, state) {
  this.loc = loc;
  this.street = street;
  this.city = city;
  this.state = state;
}
Address.prototype.fullAddress = function () {
  return this.loc + ": " + this.street + ", " + this.city + ", " + this.state;
}

function addFields() {
  $("#new-addresses").append('<div class="new-address">' +
    '<div class="form-group">' +
    '<label for="new-loc">Address Type</label>' +
    '<select class="new-loc" name="new-loc" type="text">' +
    '<option value="Home">Home</option>' +
    '<option value="Work">Work</option>' +
    '</select>' +
    '</div>' +
    '<div class="form-group">' +
    '<label for="new-street">Street</label>' +
    '<input type="text" class="form-control new-street">' +
    '</div>' +
    '<div class="form-group">' +
    '<label for="new-city">City</label>' +
    '<input type="text" class="form-control new-city">' +
    '</div>' +
    '<div class="form-group">' +
    '<label for="new-state">State</label>' +
    '<input type="text" class="form-control new-state">' +
    '</div>' +

    '</div>');
}
function resetFields() {
  $("input#new-first-name").val("");
  $("input#new-last-name").val("");
  $("input.new-loc").val("");
  $("input.new-street").val("");
  $("input.new-city").val("");
  $("input.new-state").val("");
}
function displayContact(newContact) {
  $("#show-contact").show();
  $("#show-contact h2").text(newContact.firstName);
  $(".first-name").text(newContact.firstName);
  $(".last-name").text(newContact.lastName);
  $("ul#addresses").text("");
  newContact.addresses.forEach(function (address) {
    $("ul#addresses").append("<li>" + address.loc + ": " + address.street + ", " + address.city + ", " + address.state + "</li>");
  });
}
function hideContact() {
  $("#show-contact").hide();
}

$(document).ready(function () {
  $("#add-address").click(function () {
    addFields();
  });
  $("form#new-contact").submit(function (event) {
    event.preventDefault();
    let inputtedFirstName = $("input#new-first-name").val();
    let inputtedLastName = $("input#new-last-name").val();
    let newContact = new Contact(inputtedFirstName, inputtedLastName);
    $(".new-address").each(function () {
      let inputtedLoc = $(this).find("select.new-loc").val();
      let inputtedStreet = $(this).find("input.new-street").val();
      let inputtedCity = $(this).find("input.new-city").val();
      let inputtedState = $(this).find("input.new-state").val();
      if (inputtedStreet && inputtedCity && inputtedState) {
        let newAddress = new Address(inputtedLoc, inputtedStreet, inputtedCity, inputtedState);
        newContact.addresses.push(newAddress);
      }
    });
    $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");
    $("ul#contacts").show();
    $(".contact").last().click(function () {
      hideContact();
      displayContact(newContact);
    });
    resetFields();
    $("div.new-address").not("#first").hide();
  });
});