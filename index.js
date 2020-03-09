function produceDrivingRange(range){
    return function foo(start, end) {
        let distance = Math.abs(end.match(/\d+/g)[0]-start.match(/\d+/g)[0])
        if (distance > range) {
            return `${distance-range} blocks out of range`
        } else {
            return `within range by ${range-distance}`
        }
    }
}

function produceTipCalculator(percent){
    return function calc(price) {
        return price*percent
    }
}

function createDriver(name){
    let DriverId = 0
    return class{
        constructor(name) {
            this.name = name;
            this.id = ++DriverId;
          }
    }
}