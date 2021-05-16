const {getTitle} = require ('./view')
const {inputForm} = require('./view')
const {printTable} = require('console-table-printer')

//Impure

async function app(state, update, view){
    while (true){
        const {model, currentView} = state
        const {title, table} = currentView
    // I/O
        console.clear()
        console.log(title)
        printTable(table)
    //FORM (Ask user input)
        const {billAmount, percentage} = await inputForm(model)
        console.log(billAmount, percentage)
        const updatedModel = update(billAmount,percentage,model)
        console.log(updatedModel)
        state = {
            ...state,
            model: updatedModel,
            currentView: view(updatedModel)
        }
    }
}

//lo debería poner en un while

module.exports = {
    app
}