const figlet = require('figlet')
const chalk = require('chalk')
const inquirer = require('inquirer')

//acá todo tiene que ser funcional

function getTitle(){
    return chalk.magenta(
        figlet.textSync("Tip Calculator App",{
            font: "contessa",
            horizontalLayout: "full"
        })
    )
}

function getTable(model){
    const {billAmount} = model
    const {percentage} = model
    const {tip} = model
    const{total} = model
    return [
        {'Bill Amount':billAmount,'Tip (%)':percentage,'Tip':tip,'Total':total}
    ]
}

function inputForm(model){
    const {billAmount} = model
    const {percentage} = model
    return inquirer.prompt([
        {
            type: 'number',
            name: 'billAmount',
            message: 'Bill Amount?',
            default: billAmount,
            validate: function(value){
                if(isNaN(value) === true ){
                    return 'Please enter a number!'
                } else {
                    return true
                }
            }
        },
        {
            type: 'number',
            name:'tip',
            message: 'Tip(%)?',
            default: percentage,
            validate: function(value){
                if(isNaN(value) === true ){
                    return 'Please enter a number!'
                } else {
                    return true
                }
            }
        },
    ])
}

//Vista Real

function view(model){
    return {
        title: getTitle(),
        table: getTable(model)
    }
}

module.exports = {
    view,
    inputForm
}