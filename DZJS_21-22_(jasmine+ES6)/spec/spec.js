var script = reuire('../DZJS_2(#1)(21-22)/js/js.js');//Подключаем скрипт для проверки

describe("script", function() {
    it("metod_1", function() {
        //prepare
        var result;
        //act
        result = pow(3,3);
        //assert
        expect(result).toBe(27);
    });
});