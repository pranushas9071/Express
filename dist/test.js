"use strict";
var user = {
    id: 1,
    name: "Pranusha",
};
var User = /** @class */ (function () {
    function User(name, id) {
        (this.name = name), (this.id = id);
    }
    return User;
}());
var user1 = new User("Pranusha", 1);
console.log(user1);
var greet = function (person) {
    return "Good evening all, I am " + person.name + " from " + person.place;
};
var person = {
    name: "Pranusha",
    place: "Coimbatore",
};
var res = greet(person);
console.log(res);
