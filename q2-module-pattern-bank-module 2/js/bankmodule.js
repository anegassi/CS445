/**
 * bankmodule.js
 */
"use strict";

const bankModule = ( function () {
    const accounts = [];

    class Account {
        
        constructor (accountNo, accountName, balance) {
            this.accountNo = accountNo;
            this.accountName = accountName;
            this.balance = balance;
        }

        getBalance() {
            return this.balance;
        }

        toString() {
            return `{ accountNo: ${this.accountNo}, accountName: ${this.accountName}, balance: ${this.balance} }`;
        }

        deposit(amount) {
            this.balance += amount;
        }

        withdraw(amount) {
            this.balance -= amount;
        }
    }

    return {
        getAccounts: function () {
            return accounts;
        },
        addNewAccount: function (accountNo, accountName, balance) {
            const newAccount = new Account(accountNo, accountName, balance);
            accounts.push(newAccount);
        }
    }

} ) ();

bankModule.addNewAccount(10001, "Anna Smith", 450.50);
bankModule.addNewAccount(10002, "Bob Jones", 650.95);
bankModule.addNewAccount(10003, "Carlos Hernandez", 1275.82);

bankModule.getAccounts()
            .forEach(account => console.log(account.toString()));

(bankModule.getAccounts())[0].deposit(100);
console.log((bankModule.getAccounts())[0].toString());