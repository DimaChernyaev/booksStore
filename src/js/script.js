import { books } from '../helper/books';
import { common } from '../helper/common';
import { createMarcup } from '../helper/createMarcup';
import { createModal } from '../helper/createModal';
import { findBook } from '../helper/findBook';
import throttle from 'lodash.throttle';


const favorite = JSON.parse(localStorage.getItem(common.KEY_FAVORITE)) ?? [];
const basket = JSON.parse(localStorage.getItem(common.KEY_BASKET)) ?? [];

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
        const inStorage = favorite.some(({id}) => id === book.id);
        if (inStorage) {
            return
        }
        favorite.push(book);
        localStorage.setItem(common.KEY_FAVORITE, JSON.stringify(favorite))
    }

    if (event.target.classList.contains('js-basket')) {
        const book = findBook((event.target));
        const inStorage = basket.some(({id}) => id === book.id);
        if (inStorage) {
            return
        }
        basket.push(book);
        localStorage.setItem(common.KEY_BASKET, JSON.stringify(basket))
    }
}

// const inputEl = document.querySelector('.js-search')
// inputEl.addEventListener('input', throttle(searchBook, 500))

// function searchBook(event) {
//     const target = event.target.value.toLowerCase();
//     const searchEl = books.find(book => book.name.toLowerCase().includes(target));
// }