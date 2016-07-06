var x = 3;//prompt("base?", '');
var n = 3;//prompt("exponent?", '');


/*Возвращает x в степени n, только для натуральных n*/
var pow = function(a,b) {
    var result = 1;
    var otrResult;
    if (b >= 0) {
        for (var i = 0; i < b; i++) {
            result *= a;
        }
        return result;
    }

    for (var k = 0; k > n; k--) {
        result *= a;
    }
    otrResult = 1 / result;
    return otrResult;
};

console.log( pow(x,n) );

module.exports = pow;