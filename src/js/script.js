import { books } from '../helper/books';
import { common, localArray } from '../helper/common';
import { createMarcup } from '../helper/createMarcup';
import { createModal } from '../helper/createModal';
import { findBook } from '../helper/findBook';
import throttle from 'lodash.throttle';



const swichBtn = document.querySelector('.switch-btn');
const list = document.querySelector('.list')
console.log(list);

createMarcup(books, list);

list.addEventListener('click', onclick);

function onclick(event) {
    event.preventDefault();

    if (event.target.classList.contains('js-link')) {
        const book = findBook((event.target));
        createModal(book);
    }

    if (event.target.classList.contains('js-favorite')) {
        const book = findBook((event.target));
        const inStorage = localArray.favorite.some(({id}) => id === book.id);
        if (inStorage) {
            return
        }
        localArray.favorite.push(book);
        localStorage.setItem(common.KEY_FAVORITE, JSON.stringify(localArray.favorite))
    }

    if (event.target.classList.contains('js-basket')) {
        const book = findBook((event.target));
        const inStorage = localArray.basket.some(({id}) => id === book.id);
        if (inStorage) {
            return
        }
        localArray.basket.push(book);
        localStorage.setItem(common.KEY_BASKET, JSON.stringify(localArray.basket))
    }
}

swichBtn.addEventListener('click', switchTheme)

function switchTheme() {
    swichBtn.classList.toggle('switch-on')

    if(swichBtn.classList.contains('switch-on')) {
        list.style.backgroundColor = "gray";
    }

    if(!swichBtn.classList.contains('switch-on')) {
        list.style.backgroundColor = "white";
    }

    // list.style.backgroundColor = "white";
}

//     const inputEl = document.querySelector('.js-search')
//     inputEl.addEventListener('input', searchBook)

// function searchBook(event) {
//     const target = event.target.value.toLowerCase();
//     const searchEl = books.find(book => book.name.toLowerCase().includes(target));
//     if(!target) {
//         return createMarcup(books, list)
//     }
//     return createMarcup(searchEl, list)
// }