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
