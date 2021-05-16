const {initModel} = require('./model')
const {app} = require('./app')
const {view} = require('./view')

const state = {
    model: initModel,
    currentView: view(initModel)
    //view(initModel)
}

app(state, true, view)