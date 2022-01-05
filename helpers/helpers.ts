
import { ProductInterface } from 'apollo/querys/Product.query';

import { USER_FAVORITE_ITEMS, USER_TOKEN } from './local';

interface shortenStringProps {
    str: string
    word?: boolean
    letter?: boolean,
    count?: number,
    suff?: string,
    safeMax?: number
}

const shortenString = ({
    str = "",
    word,
    letter,
    count = 0,
    suff = '',
    safeMax = 50
}: shortenStringProps): string => {
    let value = '';

    if(letter) {
        value = `${str.substring(0, count)}${suff}`;
    }

    if(word) {
        const base = str.split(' ').slice(0, count).join(' ');
        
        value = `${base}${suff}`;
    }

    if(value.length > safeMax) {
        value = value.substring(0, safeMax);
    }

    return value;
}

interface groupSuggestedProductsProps {
    products: ProductInterface[]
}

// group products by category and order by relevance
const groupSuggestedProducts = ({ products }: groupSuggestedProductsProps): [ProductInterface[], number[]] => {
    let sortedProducts = [...products];

    const {res, parents} = sortedProducts.reduce((acc, curr) => {

        if(! curr.category) return { ...acc, res: [ ...acc.res, curr ] };

        if(! acc.catInRes[curr.category]) {
            acc.parents.push(curr.id);
            acc.res = [...acc.res, ...products.filter(({ category }) => category == curr.category)];
        }

        acc.catInRes[curr.category] = curr.category;
        
        
        return acc;
    }, { res: [], catInRes: {}, parents: [] });

    return [res as ProductInterface[], parents as number[]];
}

interface modifyLocalFavoriteItemsInterface {
    detach: boolean
    item: number | string
}

const modifyLocalFavoriteItems = ({ detach = false, item }: modifyLocalFavoriteItemsInterface): number[] => {
    let localItems = JSON.parse(localStorage.getItem(USER_FAVORITE_ITEMS)) ?? [];
    
    if(detach) {
        localItems = localItems.filter(v => +v !== +item);
        localStorage.setItem(USER_FAVORITE_ITEMS, JSON.stringify(localItems));
    } else {
        localItems.unshift(item);
        localStorage.setItem(USER_FAVORITE_ITEMS, JSON.stringify(localItems));
    }
    
    return localItems;
}

const tokenExists = (): boolean => {
    const token = JSON.parse(localStorage.getItem(USER_TOKEN)) ?? null;
    return !!token;
}

const slug = (value: string): string => {
    return value.toLowerCase().split(' ').join('-');
}

const getInitials = (value: string): string => {
    return value.split(' ').map(sub => sub[0]).join('');
}

const getStarTitle = (value: number): string => {
    return [
        null,
        'NOT RECOMMENDING',
        'BAD',
        'ACCEPTABLE',
        'GOOD',
        'EXCELLENT'
    ][value];
}

const randomColor = (max = 255) => {
    return `rgb(255, ${Math.floor(Math.random() * max)}, ${Math.floor(Math.random() * max)})`
}

export {
    shortenString,
    groupSuggestedProducts,
    modifyLocalFavoriteItems,
    tokenExists,
    slug,
    getInitials,
    getStarTitle,
    randomColor
}