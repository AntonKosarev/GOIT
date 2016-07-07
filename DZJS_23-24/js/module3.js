define(
    'module3',
    [
        'module1',
        'module2'
    ],
    function (module1, module2) {
        function Controller(model, view) {
                var self = this;

                view.elements.addBtn.on('click', addItem);
                view.elements.listContainer.on('click', '.item-delete', removeItem);
                view.elements.renmBtn.on('click', renameItem);

                function addItem() {
                    var newItem = view.elements.input.val();
                    model.addItem(newItem);
                    view.renderList(model.data);
                    view.elements.input.val('');
                }

                function removeItem() {
                    var item = $(this).attr('data-value');

                    model.removeItem(item);
                    view.renderList(model.data);
                }

                function renameItem() {
                    var reItem = view.elements.inputRenm.val();
                    var index = view.elements.inputRnmIndx.val();
                    model.renameItem(reItem, index);
                    view.renderList(model.data);
                    view.elements.inputRenm.val('');
                    view.elements.renmBtn.val('');
                }

        }
        var controller = new Controller(module1, module2);
        return controller;
    }
);