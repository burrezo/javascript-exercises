const sumAll = function(numA, numB) {
    let sum = 0;
    let intStart = 0;
    let intEnd = 0;

    if (numA < 0 || numB <0) {
        return 'ERROR';
    }
    else if ((typeof numA !== 'number') || (typeof numB !== 'number')) {
        return 'ERROR';
    }
    else if (numA > numB) {
        intStart = numB;
        intEnd = numA;
    }
    else {
        intStart = numA;
        intEnd = numB;
    }

    console.log ("numA: " + numA)

    for (let i = intStart; i <= intEnd; i++) {
       sum += i; 
    }

    return sum;

};

// Do not edit below this line
module.exports = sumAll;
