var Employee = /** @class */ (function () {
    function Employee(x, y, z, salary, saRec) {
        this.employeeId = x;
        this.firstName = y;
        this.lastName = z;
        this.salary = salary;
        this.salesRecorded = saRec;
    }
    Employee.prototype.toString = function () {
        return "Employee Id: " + this.employeeId + ", FirstName: " + this.firstName + ",lastName\n        : " + this.lastName + ", Salary: " + this.salary;
    };
    Employee.prototype.getTotalSalesRecord = function () {
        var sum = 0;
        for (var _i = 0, _a = this.salesRecorded; _i < _a.length; _i++) {
            var x = _a[_i];
            sum += x;
        }
        return sum;
    };
    return Employee;
}());
var emp = new Employee("000-01-101", "Anna", "Smith", 25500.50, [15, 10, 13]);
console.log(emp.toString());
console.log(emp.getTotalSalesRecord());
