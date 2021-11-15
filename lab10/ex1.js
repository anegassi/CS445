class RegularBulbs {
    constructor(min, max, duration) {
        this.min = min;
        this.max = max;
        this.duration = duration;
    }
}
class EnergySaverBulbs {
    constructor(min, max, duration, color) {
        this.min = min;
        this.max = max;
        this.duration = duration;
        this.color = color;
    }
}

class Factory {
    createBulb(type, color) {
        let bulb;
        if (type === "regular") {
            bulb = new RegularBulbs(50, 100, 1);
        } else if (type === "energy") {
            bulb = new EnergySaverBulbs(5, 40, 10, color);
        }
        return bulb;
    }
}

const bulbs = [];
const factory = new Factory();

bulbs.push(factory.createBulb("regular"));
bulbs.push(factory.createBulb("energy", "red"));


for (let i = 0, len = bulbs.length; i < len; i++) {
    console.log(bulbs[i]);
}