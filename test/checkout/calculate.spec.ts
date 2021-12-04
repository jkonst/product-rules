import * as calculate from "@src/checkout/calculate";
import {mockItems} from "@src/store/test.store";

describe('calculate', () => {
    it('should log `No item ids were passed...` given empty item ids', () => {
        console.log = jest.fn();
        calculate.scan([]);
        expect(console.log).toHaveBeenCalledWith('No item ids were passed...');
    });

    it('should log `Total Price: £93.94`', () => {
        console.log = jest.fn();
        calculate.calculateTotal(mockItems);
        expect(console.log).toHaveBeenCalledWith('Total Price: £93.94');
    });

    it('', () => {
        const spyCalculateTotal = jest.spyOn(calculate, 'calculateTotal');
        calculate.scan(['0001', '0001', '0002', '0003']);
        expect(spyCalculateTotal).toHaveBeenCalled();
    });

});
