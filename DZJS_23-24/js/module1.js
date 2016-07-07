define(
    'module1',
    [
        'jquery'
    ],
    function (data) {
               function Model(data) {
                    var self = this;
                    self.data = data;

                    self.addItem = function (item) {
                        if (item.length === 0) {
                            return;
                        }
                        self.data.push(item);
                        return self.data;
                    };
                    self.removeItem = function (item) {
                        var index = self.data.indexOf(item);
                        if (index === -1) {
                            return;
                        }
                        self.data.splice(index, 1);
                        return self.data;
                    };
                    self.renameItem = function (item, index) {
                        self.data.splice(index, 1, item);
                        if (index >= self.data.length) {
                            return;
                        }
                        return self.data;
                    }
               }
        var firstToDoList = ["learn Gulp", "learn Grunt", "learn BEM", "learn Jasmine", "learn Bootstrap"];
        var model = new Model(firstToDoList);
        return model;
    }

);
