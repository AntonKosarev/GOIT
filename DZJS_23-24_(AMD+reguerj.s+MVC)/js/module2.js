define(
    'module2',
    [
        'jquery',
        'template'
    ],
    function () {
        return {
            View: function View(model) {
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
        }
    }
);