var menu = document.getElementById('nav__menu');
var button = {
    on: document.getElementById('nav__menu-drop'),
    line1: document.getElementById('line__1'),
    line2: document.getElementById('line__2'),
    open: function() {
        button.on.style.transform = 'rotate(0deg)';
        button.line2.style.transform = 'rotate(0deg)';
        button.line2.style.bottom = '18px';
        button.line1.style.top = '18px';
        },
    close: function() {
        button.on.style.transform = 'rotate(135deg)';
        button.line2.style.transform = 'rotate(-90deg)';
        button.line2.style.bottom = '24px';
        button.line1.style.top = '23px';
    }
};


function getMenu(event) {
    event.preventDefault();
    if (menu.style.display == 'block') {
        menu.style.display = 'none';
        button.open();
    } else {
        menu.style.display = 'block';
        button.close();
    }
    if (window.outerWidth<721) {
        button.close();
    }
}
button.on.addEventListener('click', getMenu);

//function changeScreenWidth(){
//}
//changeScreenWidth();