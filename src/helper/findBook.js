import { books } from "./books";

function findBook(elem) {
    const bookId = Number(elem.closest('.js-item').dataset.id);
    return books.find(({ id }) => id === bookId);
}

export {findBook}