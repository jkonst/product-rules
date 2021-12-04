import {Big} from "big.js";
import {Item} from "../../model/model";

export const compose = (...fns) => val => fns.reduceRight((prev, fn) => fn(prev), val);

export const totalDiscount = (isValid: boolean, discount: number): Function => {
    return function (items: Item[]): Item[] {
        if (isValid) {
            return items.map(item => ({...item,
                price: item.price.mul(new Big(1 - discount)).round(2)
            }));
        }
        return items;
    };
}

export const singleItemPromotion = (id: string, isValid: boolean, discount: number): Function => {
    return function (items: Item[]): Item[] {
        if (isValid) {
            return items.map(item => {
                return item.id === id
                    ? {...item, price: new Big(1 - discount).mul(item.price).round(2)}
                    : {...item};
            });
        }
        return items;
    }
}
