
function checkNumberArray(numberArray) {
    if (numberArray.length === 0) {
        throw new Error('error_empty')
    }
    else if (numberArray.length > 30) {
        throw new Error('error_over')
    } else {
        for (let i = 0; i < numberArray.length; i++) {
            if (isNaN(numberArray[i]))
                throw new Error('error_not_number')
        }
    }
}


export function add(numberArray) {
    checkNumberArray(numberArray);
    let sum = 0;
    for (let i = 0; i < numberArray.length; i++) {
        sum += numberArray[i]
    };

    if (sum > 1000) {
        throw new Error("too big");
    };
    return sum;
}


export function subtract(numberArray) {
    if (checkNumberArray(numberArray)) {
    } else {
        let difference = numberArray[0];
        for (let i = 1; i < numberArray.length; i++) {
            difference -= numberArray[i]
        }
        if (difference < 0) {
            throw new Error("negative number")
        } else {
            return difference;
        }
    }
}

export function multiply(numberArray) {
    if (checkNumberArray(numberArray)) {
    } else {
        let product = 1;
        for (let i = 0; i < numberArray.length; i++) {
            product *= numberArray[i]
        }
        if (product > 1000) {
            throw new Error('big big number')
        } else {
            return product;
        }
    }
}

export const divide = (numberArray) => {
    checkNumberArray(numberArray);

    const quotient = numberArray.reduce((pre, current) =>
        Math.trunc(pre /= current)
    );

    return quotient;
};
