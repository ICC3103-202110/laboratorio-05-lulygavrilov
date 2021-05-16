const {initModel} = require('./model')
const {app} = require('./app')

const state = {
    model: initModel,
    //view(initModel)
}

app(state, true, true)