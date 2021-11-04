"use strict";
class Customer {
    constructor(cuid, frname, laname, preclass) {
        this.customerId = cuid;
        this.firstName = frname;
        this.lastName = laname;
        this.premiumClass = preclass;
    }
    toString() {
        return `Customer Id: ${this.customerId}, FirstName: ${this.firstName},lastName
        : ${this.lastName}, Premium class: ${this.premiumClass}`;
    }
    setcustomerId(value) {
        this.customerId = value;
    }
    setfirstName(value) {
        this.firstName = value;
    }
    setlastName(value) {
        this.lastName = value;
    }
    setpremiumClass(value) {
        this.premiumClass = value;
    }
    getcustomerId() {
        return this.customerId;
    }
    getfirstName() {
        return this.firstName;
    }
    getlastName() {
        return this.lastName;
    }
    getpremiumClass() {
        return this.premiumClass;
    }
}
module.exports = Customer;
