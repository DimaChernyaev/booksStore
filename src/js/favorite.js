import { common } from "../helper/common";
import { createMarcup } from "../helper/createMarcup";
import { createModal } from "../helper/createModal";
import { findBook } from "../helper/findBook";

const fVlist = document.querySelector('.favorite-list');
console.log(fVlist);
const favorite = JSON.parse(localStorage.getItem(common.KEY_FAVORITE)) ?? [];

createMarcup(favorite, fVlist);

fVlist.addEventListener('click', onModal)

function onModal(event) {
    event.preventDefault()
    const book = findBook(event.target);
    createModal(book);
}