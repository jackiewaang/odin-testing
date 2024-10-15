const checkArgs = (a,b) => {
    if(typeof a !== 'number' || typeof b !== 'number'){
        throw new Error('Arguments non-valid!');
    } else{
        return true;
    }
}

const add = (a,b) => {
    if(checkArgs(a,b)){
        return a + b;
    } 
}

const subtract = (a,b) => {
    if(checkArgs(a,b)){
        return a - b;
    }
}

const divide = (a,b) => {
    if(checkArgs(a,b)){
        return a / b;
    }
}

const multiply = (a,b) => {
    if(checkArgs(a,b)){
        return a * b;
    }
}

export const calculator = {
    add,
    subtract,
    divide,
    multiply,
}