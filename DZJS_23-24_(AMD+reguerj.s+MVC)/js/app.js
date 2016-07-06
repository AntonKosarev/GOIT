require.config({
   paths: {
       'jquery': 'https://ajax.googleapis.com/ajax/libs/jquery/1.4.4/jquery',
       'template': 'template',
       'module4': 'module4'
   },
    shim: {
        'jquery': {
            exports: 'jQuery'
        },
        template: {
            exports: 'template'
        },
        module4: {
            exports: 'module4'
        }
    }
});
require(
    [
        'module1',
        'module2',
        'module3',
        'jquery',
        'template',
        'module4'
    ],
    function(module1,module2,module3,$,template,module4){
        module1.Model();
        module2.View();
        module3.Controller();
    }
);