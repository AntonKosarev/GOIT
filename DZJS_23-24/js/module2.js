define(
    'module2',
    [
        'module1',
        'jquery',
        'template'
    ],
    function (module1) {
            function View(model) {
                    var self = this;

                    function init() {
                        var wrapper = tmpl($('#wrapper-template').html());

                        $('body').append(wrapper);
                        self.elements = {
                            input: $('.item-value'),
                            addBtn: $('.item-add'),
                            inputRenm: $('.item-value-rename'),
                            inputRnmIndx: $('.item-index'),
                            renmBtn: $('.item-rename'),
                            listContainer: $('.item-list')
                        };
                        self.renderList(model.data);
                    }

                    self.renderList = function(data) {
                        var list = tmpl($('#list-template').html(), {data: data});
                        self.elements.listContainer.html(list);
                    };

                    init();
            }
        var view = new View(module1);
        return view;

    }
);