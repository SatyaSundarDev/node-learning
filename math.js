function add(a,b){
    return a+b;
}

function sub(a,b){
    return a-b;
}

module.exports = {add, sub};  //first way of exporting



// 2nd way of exporting by anonymous function

// exports.add = (a,b) => a+b;

// exports.sub = (a,b) => a-b;