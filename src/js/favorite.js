import { common, localArray } from "../helper/common";
// import { createMarcup } from "../helper/createMarcup";
import { createMarcupFavorite } from "../helper/createMarcupFavorite";
import { createModal } from "../helper/createModal";
import { findBook } from "../helper/findBook";

const fVlist = document.querySelector('.favorite-list');

createMarcupFavorite(localArray.favorite, fVlist);

fVlist.addEventListener('click', deleteBook)

function deleteBook(event) {
    event.preventDefault()
    const book = findBook(event.target);
    

    if(event.target.classList.contains('js-link')) {
        createModal(book);
    }

    if(event.target.classList.contains('js-delete')) {
        localStorage.removeItem(common.KEY_FAVORITE);
        const removeBook = localArray.favorite.findIndex(item => item.name === book.name);
        localArray.favorite.splice(removeBook, 1);
        console.log(localArray.favorite);
        localStorage.setItem(common.KEY_FAVORITE, JSON.stringify(localArray.favorite));
        createMarcupFavorite(localArray.favorite, fVlist);
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