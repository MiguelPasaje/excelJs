// app/models/user.js
class User {
    constructor(name, lastname, email, cell, address) {
      this.name = name;
      this.lastname = lastname;
      this.email = email;
      this.cell = cell;
      this.address = address;
    }
  }
  
  module.exports = User;
  