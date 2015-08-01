import './css/style.css';
import _ from 'lodash';
import Menu from './lib/menu.js'

var menu = new Menu({
    title: "Сладости",
    template: _.template(document.getElementById('menu-template').innerHTML),
    listTemplate: _.template(document.getElementById('menu-list-template').innerHTML),
    items: [
        "Торт",
        "Пончик",
        "Пирожное",
        "Шоколадка",
        "Мороженое"
    ]
});


document.body.appendChild(menu.getElem());

document.body.addEventListener('menu-select', function(event) {
    alert(event.detail);
});