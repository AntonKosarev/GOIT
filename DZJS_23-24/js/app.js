require.config({
    baseUrl: 'js',
    paths: {
       'jquery': 'jquery-1.12.3',
       'temlate': 'template'
    },
    shim: {
        'jquery': {
            exports: 'jQuery'
        },
        'temlate': {
            exports: 'template'
        }
    }
});
require(
    [
        'module1',
        'jquery',
        'template',
        'module2',
        'module3'
    ],
    function(module1, jquery, template, module2, module3){
    }
);