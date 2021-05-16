const figlet = require('figlet')
const chalk = require('chalk')

//acá todo tiene que ser funcional

function getTitle(){
    return chalk.magenta(
        figlet.textSync("Tip Calculator App",{
            font: "contessa",
            horizontalLayout: "full"
        })
    )
}

module.exports = {
    getTitle
}