import {constructMockItems} from "./store/store";
import {calculateTotal} from "./checkout/calculate";
import {compose, singleItemPromotion, totalDiscount} from "./checkout/rules/rules";
import {singleItemPredicate, totalDiscountPredicate} from "./checkout/rules/promos";

const main = () => {
    let itemIds = [];
    try {
        itemIds = getItemIds();
    } catch (e: unknown) {
        throw e;
    }
    calculate(itemIds);
};

const calculate = (itemIds: string[]): void => {
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

const getItemIds = (): string[] => {
    if (process.argv.length < 3) {
        throw new Error('No item ids were given...');
    }
    if (process.argv[2]
        && process.argv[2].split('=')
        && process.argv[2].split('=').length === 2) {
        return process.argv[2].split('=')[1].split(',').filter(el => el !== '');
    } else {
        throw new Error('Invalid argument. Use the appropriate command E.g. `npm start -- --items=0001,0001,0002,0003`');
    }
}

main();
