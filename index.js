// function produceDrivingRange(number) {
//     return function (initRange, endrange) {
//         let splitRange = function (word) {
//             return Number(word.split('th')[0]);
//         };
//         return number > splitRange(initRange) && number < splitRange(endrange) ? '2 blocks out of range' : 'within range by 4';
//     };

// }

function produceDrivingRange(number) {
    let splitRange = function (word) {
        return Number(word.split('th')[0]);
    };
    return function (initRange, endRange) {
        let result = number - (splitRange(endRange) - splitRange(initRange));
        if (result > 0) {
            // console.log(result);
            return `within range by ${result}`;
        } else if (result < 0) {
            // console.log(result);
            return `${Math.abs(result)} blocks out of range`;
        };
    };
};

function produceTipCalculator(percentage) {
    return function (total) {
        return total * percentage;
    };

};

function createDriver() {
    let id = 0;
    return class Driver {
        constructor(name) {
            this.name = name;
            this.id = ++id;
        }
    };
};