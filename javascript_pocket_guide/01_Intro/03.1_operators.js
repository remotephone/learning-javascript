if (1 != 2) {
    console.log("its not equal")
    // It's not true
}   
var myVar = null;
if (! myVar) {
    // It's still not true
    console.log("myVar")
}
else {
    console.log("not ! myVar")
}


function tester(value) {
    if (value == 1){
        console.log('print true')
        return true;
    }
    else {
        console.log('print false')
        return false;
    }
}

true && tester(2)
