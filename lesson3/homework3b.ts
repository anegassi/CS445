class University {
    private name:string;
    private dept:string;
    constructor(name:string, dept:string) {
        this.name = name;
        this.dept = dept;
    }
    graduation(year):void {
        console.log(`Graduating ${this.dept} ${year} students`);
    }
}

let miu = new University("MIU", "MSD");
miu.graduation(2021);

/*********** Number 2 */
interface bank {
    money:number;
    deposit(value:number): void;
}
interface user{
    name:string;
    hobbies:Array<string>
    bankAccount: typeof bankAccount;

}
let bankAccount:bank = { 
    money: 2000, 
    deposit(value) { 
        this.money += value; 
    } 
}; 


let myself:user = { 
    name: "John", 
    bankAccount: bankAccount, 
    hobbies: ["Violin", "Cooking"] 
}; 

myself.bankAccount.deposit(3000); 
console.log(myself);

/*********** Number 3 */

class Car {
    name:string;
    acceleration:number;
    constructor(name) {
        this.name = name;
        this.acceleration = 0;
    }
    honk():void {
        console.log(` ${this.name} is saying: Toooooooooot!`);
    }
    accelerate(speed):void {
        this.acceleration = this.acceleration + speed;
    }
}

let car = new Car("BMW");
car.honk(); // BMW is saying: Toooooooooot!
console.log(car.acceleration); // 0
car.accelerate(60);
console.log(car.acceleration); // 60

/*********** Number 4 */
interface base{
    width:number;
    length:number;
}
let baseObject:base= { 
    width: 0, 
    length: 0 
}; 
let rectangle = Object.create(baseObject); 

rectangle.width = 5; 
rectangle.length = 2; 

rectangle.calcSize = function() { 
    return this.width * this.length; 
}; 

console.log(rectangle.calcSize()); // 10