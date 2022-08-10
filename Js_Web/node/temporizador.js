const schedule = require('node-schedule')

const tarefa1 = schedule.scheduleJob(`*/5 * 3 * * 3`, function () {
    console.log('Executando', new Date().getSeconds())
})

setTimeout(function () {
    tarefa1.cancel()
    console.log('Reset')
}, 20000)

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1, 5)]
regra.hour = 3
regra.second =30

const tarefa2 = schedule.scheduleJob(regra, function () {
    console.log('Executando 2', new Date().getSeconds())
})