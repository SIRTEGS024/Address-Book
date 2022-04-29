function Contact(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.addresses = [];
}

Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}
function Address(loc, street, city, state) {
  this.loc = loc;
  this.street = street;
  this.city = city;
  this.state = state;
}

Address.prototype.fullAddress = function() {
  return this.loc + ": " + this.street + ", " + this.city + ", " + this.state;
}