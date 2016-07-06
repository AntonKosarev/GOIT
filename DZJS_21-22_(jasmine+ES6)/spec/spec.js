var pow = require('../pow/js/js.js');//Подключаем скрипт для проверки

describe("pow", function() {
    it("metod_1", function() {
        //prepare
        var res;
        //act
        res = pow(3,3);
        //assert
        expect(res).toBe(27);
    });
});

//describe("A suite", function() {
//    it("contains spec with an expectation", function() {
//        console.log('pow');
//        expect(true).toBe(true);
//    });
//});