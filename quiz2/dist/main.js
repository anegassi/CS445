"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const customerService = require('./service/customerservice');
const customers = require("./datasource/crmdata");
const Customer = require("./model/customer");
for (let c of customers) {
    console.log(c.toString());
}
customers.forEach(customer => console.log(customer.toString()));
customerService.getCustomerByid(1001)
    .then((customer) => console.log(customer.toString()))
    .catch((error) => console.log(error.message));
function findCustomId(id) {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield customerService.getCustomerByid(id);
        console.log(result.toString());
    });
}
findCustomId(1001).catch(error => console.log(error.message));
