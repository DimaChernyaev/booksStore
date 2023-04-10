import * as basicLightbox from 'basiclightbox';
import "basiclightbox/dist/basiclightbox.min.css";

function createModal(book) {
    const instance = basicLightbox.create(`
    <div class="modal"> 
        <img src="${book.img}" alt="${book.name}" width="200px">
        <p class="name">Книга: ${book.name}</p>
        <p>Ціна: ${book.price} гривень</p>
        <p>${book.description}</p>
        <div class="btn-div">
            <button type="button" class="button js-favorite">Добавити в бажане</button>
            <button type="button" class="button js-basket">Добати в кошик</button>
        </div>
    </div>`)
    instance.show()
};

export {createModal};