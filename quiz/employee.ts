
class Employee{
    private employeeId: string;
     private firstName: string;
    private lastName: string;
    private salary:number;
    private salesRecorded:Array<number>

    constructor(x:string,y:string,z:string,salary, saRec){
        this.employeeId=x;
        this.firstName=y;
        this.lastName=z;
        this.salary=salary;
        this.salesRecorded=saRec;
    }
    toString():string{
        return `Employee Id: ${this.employeeId}, FirstName: ${this.firstName},lastName
        : ${this.lastName}, Salary: ${this.salary}`
    }

     getTotalSalesRecord():number{
         let sum=0;
         for(let x of this.salesRecorded){
             sum+=x;
         }
         return sum;
     }

}
let emp=new Employee("000-01-101","Anna","Smith",25500.50,[15,10,13])
console.log(emp.toString());
console.log(emp.getTotalSalesRecord());