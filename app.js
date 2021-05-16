const {getTitle} = require ('./view')
const {inputForm} = require('./view')
const {printTable} = require('console-table-printer')

//Impure

async function app(state, update, view){
    const {model, currentView} = state
    const {title, table} = currentView
    // I/O
    console.clear()
    console.log(title)
    printTable(table)
    //FORM (Ask user input)
    const {billAmount, tip} = await inputForm(model)
    console.log(billAmount, tip)
}


module.exports = {
    app
}