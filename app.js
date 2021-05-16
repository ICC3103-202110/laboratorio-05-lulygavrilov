const {getTitle} = require ('./view')

//Impure

function app(state, update, view){
    console.clear()
    console.log(getTitle())
}


module.exports = {
    app
}