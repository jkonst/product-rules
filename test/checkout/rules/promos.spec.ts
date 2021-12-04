import {singleItemPredicate, totalDiscountPredicate} from "@src/checkout/rules/promos";
import {mockItems} from "@src/store/test.store";

describe('promos', () => {

    it('should fail to apply singleItemPredicate on mock items', () => {
        expect(singleItemPredicate(mockItems, item => item.id === '0001', 2)).toBeFalsy();
    });

    it('should succeed to apply totalDiscountPredicate on mock items', () => {
        expect(totalDiscountPredicate(mockItems, 75)).toBeTruthy()
    });

    it('should fail to apply totalDiscountPredicate on mock items', () => {
        expect(totalDiscountPredicate(mockItems, 100)).toBeFalsy()
    });

});
