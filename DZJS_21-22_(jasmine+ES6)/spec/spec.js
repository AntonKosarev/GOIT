var script = reuire('../DZJS_13-14(21-22)/js/script.js');//Подключаем скрипт для проверки

describe("script", function() {
    it("metod_1", function() {
        //prepare
        var result;
        //act
        result = getModal('test');
        //assert
        expect(result).toBe(undefined);
    });
});