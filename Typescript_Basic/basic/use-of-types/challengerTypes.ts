// Challenger One

type Employee = {
    supervisors: string[],
    point: (hour: number) => string
}

let employee: Employee = {
    supervisors: ["John", "Will"],
    point: (hour: number): string => (hour <= 8) ? 'Normal' : 'Late'
}

console.log(employee.supervisors, employee.point(1))

// Challenger Two

type BankAccount = {
    balance: number,
    deposit: (value: number) => void
}

let bankAccount: BankAccount = {
    balance: 3456,
    deposit: (value: number): number => bankAccount.balance += value
}
let accountHolder: {name: string, bankAccount: BankAccount, contacts: string[]} = {
    name: 'Anne Soul',
    bankAccount: bankAccount,
    contacts: ['41241431', '87521576']
}

accountHolder.bankAccount.deposit(3000)
console.log(accountHolder)