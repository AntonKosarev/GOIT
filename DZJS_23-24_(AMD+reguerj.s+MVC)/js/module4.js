 $(function () {
     var firstToDoList = ['learn javascript', 'learn html', 'make coffe'];
     var model = new Model(firstToDoList);
     var view = new View(model);
     var controller = new Controller(model, view);
 });