const common = {
    KEY_FAVORITE:'favorite',
    KEY_BASKET: 'basket',
};

const localArray = {
    favorite: JSON.parse(localStorage.getItem(common.KEY_FAVORITE)) ?? [],
    basket: JSON.parse(localStorage.getItem(common.KEY_BASKET)) ?? [],
}

export {common, localArray};