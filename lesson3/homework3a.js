var calcAverage = function (a) {
    var sum = 0;
    for (var i = 0; i < a.length; i++) {
        sum += a[i];
    }
    return ("The Average of [" + a + "] is " + (sum / a.length).toFixed(2));
};
var a = [17, 9, 4, 82, 15, 36];
var b = [9, 4, 1, 7, 2, 3, 5, 8, 10, 6];
console.log(calcAverage(a));
console.log(calcAverage(b));
var FICA = 10, STATE = 5, MEDICARE = 12;
var taxRates;
(function (taxRates) {
    taxRates[taxRates["FICA"] = 10] = "FICA";
    taxRates[taxRates["STATE"] = 5] = "STATE";
    taxRates[taxRates["MEDICARE"] = 12] = "MEDICARE";
})(taxRates || (taxRates = {}));
;
