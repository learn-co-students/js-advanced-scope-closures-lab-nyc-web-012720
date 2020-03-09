const produceDrivingRange = function (range) {
    return function (start_dist, end_dist) {
        let num_start_dist = parseInt(start_dist);
        let num_end_dist = parseInt(end_dist);
        if (num_end_dist - num_start_dist > range) {
            return `${num_end_dist - num_start_dist - range} blocks out of range`;
        } else {
            return `within range by ${range - (num_end_dist - num_start_dist)}`;
        }
    };
};

const produceTipCalculator = function (tip) {
    return function (fare) {
        return fare * tip;
    };
};

const createDriver = function () {
    let driverId = 0;
    return class {
        constructor(name){
            this.name = name
            this.id = ++driverId;
        };
    };
};