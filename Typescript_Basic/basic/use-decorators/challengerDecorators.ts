const loggedUser = {
    name: 'Guilherme Filho',
    email: 'guigui@gmail.com',
    admin: true
}

function profileAdmin<T extends Constructor>(constructor: T): void | T {
    return class extends constructor {
        constructor(...args: any[]){
            super(...args)
            if(!loggedUser || !loggedUser.admin) throw new Error('ERROR Found!')
        }
    }
}

type Constructor = { new(...args: any[]): {} }

@profileAdmin
class AdminChange {
    critical() {
        console.log('Critical change!')
    }
}
 
new AdminChange().critical()