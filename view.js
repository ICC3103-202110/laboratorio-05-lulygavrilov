const figlet = require('figlet')
const chalk = require('chalk')
const inquirer = requite('inquirer')

//acá todo tiene que ser funcional

function getTitle(){
    return chalk.magenta(
        figlet.textSync("Tip Calculator App",{
            font: "contessa",
            horizontalLayout: "full"
        })
    )
}

function getTable(number){
    const {billAmount} = model
    const {percentage} = model
    const {tip} = model
    const{total} = model
    return [
        {'Bill Amount':billAmount,'Tip (%)':percentage,'Tip':tip,'Total':total}
    ]
}

function valueInput(input){
    const {billAmount} = model
    const {percentage} = model
    return inquirer.prompt([
        {
            type: 'number',
            name: 'bill amount',
            message: 'Bill Amount?',
        },
        {
            type: 'number',
            name:'tip',
            message: 'Tip(%)?',
        },
    ])
}


module.exports = {
    getTitle
}