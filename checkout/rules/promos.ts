import {Big} from "big.js";
import {Item} from "../../model/model";

export const totalDiscountPredicate = (items: Item[], threshold: number): boolean => {
    const totalPrice = items.reduce((acc, cur) =>
        acc.plus(cur.price), new Big(0));
    return totalPrice.gt(new Big(threshold));
}

export const singleItemPredicate = (items: Item[], fn: any, threshold: number): boolean => {
    return items.filter(fn).length >= threshold;
}
