"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Customer = require("../model/customer");
let customers = [
    new Customer(1001, "Anna", "smith", true),
    new Customer(1002, "Bernardt", "Langer", false),
    new Customer(1003, "Charles", "Hennesey", true),
];
module.exports = customers;
