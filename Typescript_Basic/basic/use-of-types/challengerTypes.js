"use strict";
// Challenger One
let employee = {
    supervisors: ["John", "Will"],
    point: (hour) => (hour <= 8) ? 'Normal' : 'Late'
};
console.log(employee.supervisors, employee.point(1));
let bankAccount = {
    balance: 3456,
    deposit: (value) => bankAccount.balance += value
};
let accountHolder = {
    name: 'Anne Soul',
    bankAccount: bankAccount,
    contacts: ['41241431', '87521576']
};
accountHolder.bankAccount.deposit(3000);
console.log(accountHolder);
