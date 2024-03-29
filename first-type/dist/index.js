"use strict";
// DATA TYPES
let id = 5;
let company = "Tez-cyber";
let isPublished = true;
let x = "Hello";
//Arrays
let ids = [1, 2, 3, 4, 5];
let arr = [1, true, "Hello"];
//Tuple
let person = [1, "Hello", true];
// Tuple Arrays
let employee;
employee = [
    [1, "Drex"],
    [2, "Mason"],
    [3, "Tez"]
];
//Union ------ accepts multiple datatypes
let pid;
pid = "22";
//Enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 0] = "Up";
    Direction1[Direction1["Down"] = 1] = "Down";
    Direction1[Direction1["Left"] = 2] = "Left";
    Direction1[Direction1["Right"] = 3] = "Right";
})(Direction1 || (Direction1 = {}));
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
console.log(Direction1.Up);
const user = {
    id: 1,
    name: "Ahmad"
};
console.log(user.name);
//Type Assertion 
let cid = 1;
// const customerId = <number>cid
let customerId = cid;
//Functions
function addNum(x, y) {
    return x + y;
}
console.log(addNum(1, 2));
//Void --------------- it doesnt return any value 
function log(message) {
    console.log(message);
}
log("Hello");
const user1 = {
    id: 1,
    name: "John"
};
const add = (x, y) => x + y;
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    /*
        This method returns only string as
        passed from the interface
    */
    register() {
        return `${this.name} is now registered`;
    }
}
const ahmad = new Person(1, "Ahmad");
// Extending classes (Subclasses)
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const emp = new Employee(3, "Abdullah", "Dev");
console.log(emp.register());
