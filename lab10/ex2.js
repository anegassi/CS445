class User {
    constructor(name) {
        this.name = name;
    }
}

class DecoratedUser {
    constructor(user, street, city) {
        this.user = user;
        this.street = street;
        this.city = city;
        this.name = user.name;
    }
    logger() {
        console.log(`${this.name}'s address is ${this.street}, ${this.city}'`);
    };
}

const user = new User("Kelly");

const decorated = new DecoratedUser(user, "Broadway", "New York");
decorated.logger();