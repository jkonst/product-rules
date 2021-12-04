import {compose, singleItemPromotion, totalDiscount} from "@src/checkout/rules/rules";
import {
    mockItems,
    mockItemsWithTotalDiscount10pc,
    mockItemsWithWaterAndTotalDiscount10pc,
    mockItemsWithWaterDiscount10pc
} from "@src/store/test.store";

describe('rules', () => {

    it('should return mockItemsWithTotalDiscount10pc for discount 10%', () => {
        const totalDiscountRule = totalDiscount(true, 0.1);
        expect(totalDiscountRule(mockItems)).toEqual(mockItemsWithTotalDiscount10pc);
    });

    it('should return mockItemsWithWaterDiscount10pc for discount 10%', () => {
        const singleItemPromotionRule = singleItemPromotion('0001', true, 0.1);
        expect(singleItemPromotionRule(mockItems)).toEqual(mockItemsWithWaterDiscount10pc);
    });

    it('should return mockItemsWithWaterAndTotalDiscount10pc for total and water discount 10%', () => {
        const singleItemPromotionRule = singleItemPromotion('0001', true, 0.1);
        const totalDiscountRule = totalDiscount(true, 0.1);
        const combo = compose(totalDiscountRule, singleItemPromotionRule);
        expect(combo(mockItems)).toEqual(mockItemsWithWaterAndTotalDiscount10pc);
    });

    it('should return mockItems for total discount 10% when it is not valid', () => {
        const totalDiscountRule = totalDiscount(false, 0.1);
        expect(totalDiscountRule(mockItems)).toEqual(mockItems);
    });

    it('should return mockItems for water discount 10% when it is not valid', () => {
        const singleItemPromotionRule = singleItemPromotion('0001', false, 0.1);
        expect(singleItemPromotionRule(mockItems)).toEqual(mockItems);
    });

});
