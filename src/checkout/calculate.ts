import {Big} from "big.js";
import {singleItemPredicate, totalDiscountPredicate} from "./rules/promos";
import {compose, singleItemPromotion, totalDiscount} from "./rules/rules";
import {Item} from "../model/model";
import {constructMockItems} from "../store/store";

export const scan = (itemIds: string[]): void => {
    if (itemIds && itemIds.length > 0) {
        const items = constructMockItems(itemIds);
        const hasWaterBottlePromo = singleItemPredicate(items, item => item.id === '0001', 2);
        const promotionRule = singleItemPromotion('0001', hasWaterBottlePromo, 0.0785);
        const hasTotalDiscountPromo = totalDiscountPredicate(items, 75);
        const totalDiscountRule = totalDiscount(hasTotalDiscountPromo, 0.1);
        const applyRules = compose(totalDiscountRule, promotionRule);
        calculateTotal(applyRules(items));
    } else {
        console.log('No item ids were passed...');
    }
}

export const calculateTotal = (items: Item[]): void => {
    const totalPrice = items.reduce((acc, cur) =>
        acc.plus(cur.price), new Big(0));
    console.log('Total Price: £' + totalPrice);
}
