function createMarcup(books, list) {

    let markup = '';

    if (books.length) {
        markup = books.map(({id, img, name, author, price}) =>
        `<li class="item-list js-item" data-id="${id}">
            <img src="${img}" alt="${name}" class="img">
            <p class="name">Книга: ${name}</p>
            <p class="author">Автор: ${author}</p>
            <p class="price">Ціна: ${price} гривень</p>
            <a href="" class="link js-link">Опис книги</a>
            <div class="btn-div">
                <button type="button" class="button js-favorite">Добавити в бажане</button>
                <button type="button" class="button js-basket">Добати в кошик</button>
            </div>
        </li>`).join('');
    } else {
        markup = `<img src="https://previews.123rf.com/images/kjnnt/kjnnt1605/kjnnt160500255/56793535-there-s-nothing-here-typography-vector-illustration.jpg" alt="nothing" width="400px"></img>`;
    }

        return list.insertAdjacentHTML("beforeend", markup);
}

export { createMarcup }