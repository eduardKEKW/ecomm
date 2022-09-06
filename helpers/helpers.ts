import { ListInterface } from 'components/helpers/Resource';
import DefaultProductImage from '/public/default.webp';

import { USER_FAVORITE_ITEMS, USER_TOKEN } from './local';
import { SkeletonSuggestionInterface } from 'components/Layouts/Header/Search';
import { ID } from 'hooks/useProduct';

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

const groupSuggestedProducts = ({ products }: { products: SkeletonSuggestionInterface[] }): [SkeletonSuggestionInterface[], ID[]] => { // group products by category and order by relevance
    let sortedProducts: SkeletonSuggestionInterface[] = [...products];

    const {res, parents} = sortedProducts.reduce((acc, curr) => {
        const category = curr.categories?.length && curr.categories[0].name;

        if(! category) return { ...acc, res: [ ...acc.res, curr ] };

        if(! acc.catInRes[category]) {
            acc.parents.push(curr.productFlat.id);
            acc.res = [...acc.res, ...products.filter(({ categories }) => categories[0]?.name == category)];
        }

        acc.catInRes[category] = category;
        
        return acc;
    }, { res: [], catInRes: {}, parents: [] });

    return [res as SkeletonSuggestionInterface[], parents as ID[]];
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

interface ChangeSelectedValueProps { 
    list: ListInterface[],
    value: any,
    cb?: (newFilters: ListInterface[]) => void
}

const changeSelectedValue = ({
    list = [],
    value,
    cb
}: ChangeSelectedValueProps): ListInterface[] => {
    for(let i = 0; i < list.length; i++) {
        list[i].selected = list[i].value == value;
    }

    if(!! cb) {
        cb(list)
    }

    return list;
}

const toggleArrayValue = <T>({
    arr,
    key,
    value,
    create
}: {
    arr: T[]
    key: keyof T
    value: T[keyof T]
    create: T
}): T[] => {
    
    if(!! arr.find(obj => obj[key] == value)) {
        arr = arr.filter(obj => obj[key] !== value);
    } else {
        arr = [
            ...arr,
            {
                ...create,
                [key]: value 
            }
        ]
    }

    return [...arr];
}

const getProductThumbnail = ({
    path,
}: { path: string }): string | StaticImageData => {
    return !! path 
    ?
        `${process.env.NEXT_PUBLIC_BAGISTO_ENDPOINT}/cache/small/${path}`
    :
        DefaultProductImage;
}

const getApiImage = ({ url }: { url: string }) => { 
    return `${process.env.NEXT_PUBLIC_BAGISTO_ENDPOINT}/cache/medium/${url}`;
}

const setUrlParams = ({ key, value }: { key: string, value: string }) => {
    const queryParams = new URLSearchParams(window.location.search);

    if(!! value) {
        queryParams.set(key, value);
    } else {
        queryParams.delete(key);
    }

    window.history.replaceState({}, "", decodeURIComponent(`${window.location.pathname}?${queryParams}`));
}

interface IObject {
    [key: string]: any;
}
  
const isObject = (item: any): boolean => {
    return (item === Object(item) && !Array.isArray(item));
};

const deepMerge = (target: IObject, ...sources: Array<IObject>): IObject => {
    if (!sources.length) {
        return target;
    }
    // console.log('MERGE',{
    //     target,
    //     sources
    // })
    const result: IObject = target;

    if (isObject(result)) {
        const len: number = sources.length;

        for (let i = 0; i < len; i += 1) {
            const elm: any = sources[i];

            if (isObject(elm)) {
                for (const key in elm) {

                    if (elm.hasOwnProperty(key)) {
                        if (isObject(elm[key])) {
                            if (!result[key] || !isObject(result[key])) {
                                result[key] = {};
                            }
                            deepMerge(result[key], elm[key]);
                        } else {
                            if (Array.isArray(result[key]) && Array.isArray(elm[key])) {
                                result[key] = Array.from(new Set(result[key].concat(elm[key])));
                                // console.log('DEEP');
                                // console.log(result[key], elm[key]);
                            } else {
                                result[key] = elm[key];
                            }
                        }
                    }

                }
            }
        }
    }

    return result;
};

export {
    shortenString,
    groupSuggestedProducts,
    modifyLocalFavoriteItems,
    tokenExists,
    slug,
    getInitials,
    getStarTitle,
    randomColor,
    changeSelectedValue,
    toggleArrayValue,
    getProductThumbnail,
    getApiImage,
    setUrlParams,
    deepMerge
}