
//modelo me trae el input del usuario

function tipNew(bill, percent){
    return (bill*percent/100)
}

function totalNew(bill, percent){
    return (bill + tipNew(bill,percent))
}

function update(bill, percent, model){
    //actual:
    const {tip} = model
    const {total} = model
    return {
        ...model,
        billAmount: bill,
        percentage: percent,
        tip: tipNew(bill,percent),
        total: totalNew(bill,percent)
    } 
}

module.exports = {
    update
}