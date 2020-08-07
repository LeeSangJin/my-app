var first = /** @class */ (function () {
    function first() {
        this.sum = 0;
    }
    first.prototype.result = function (num) {
        var strNumber = num.toString();
        var first = parseInt(strNumber.charAt(0));
        var second = parseInt(strNumber.charAt(1));
        var third = parseInt(strNumber.charAt(2));
        console.log("strNumber: " + strNumber);
        console.log("first : " + first);
        console.log("second : " + second);
        console.log("third : " + third);
        console.log("num : " + num % 10);
        console.log("sum: " + this.sum);
        while (num > 10) {
            this.sum += num % 10;
            num = num / 10;
        }
        return this.sum;
    };
    return first;
}());
var sumResult = new first().result(234);
console.log("Result : " + sumResult);
