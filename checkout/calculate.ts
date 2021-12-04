import {Big} from "big.js";
import {Item} from "../model/model";

export const calculateTotal = (items: Item[]): void => {
    const totalPrice = items.reduce((acc, cur) =>
        acc.plus(cur.price), new Big(0));
    console.log('Total Price: £' + totalPrice);
}
