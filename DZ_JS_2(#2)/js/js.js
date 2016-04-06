var names = new Array ();

console.log(names);

for (var i=0; i<5; i++) {
    names.push( prompt('Введите имя в массив', '') );
    console.log(names);
}

var newName = prompt('Введите ВАШЕ имя', '');

for (i=0; i<names.length; i++) {
    if (names[i]== newName) {
        alert(newName + ', вы успешно вошли!');
        continue;
    }

    if (i == 4) {
        alert('Ошибка');
        continue;
    }
}

