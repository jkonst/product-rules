import {Item} from "@src/model/model";
import {Big} from "big.js";

export const mockItems: Item[] = [
    {
        id: '0001',
        name: 'Water Bottle',
        price: new Big(24.95)
    },
    {
        id: '0002',
        name: 'Hoodie',
        price: new Big(65.00)
    },
    {
        id: '0003',
        name: 'Sticker Set',
        price: new Big(3.99)
    }
];

export const mockItemsWithWaterDiscount10pc: Item[] = [
    {
        id: '0001',
        name: 'Water Bottle',
        price: new Big(24.95).mul(new Big(0.9)).round(2)
    },
    {
        id: '0002',
        name: 'Hoodie',
        price: new Big(65.00)
    },
    {
        id: '0003',
        name: 'Sticker Set',
        price: new Big(3.99)
    }
];

export const mockItemsWithWaterAndTotalDiscount10pc: Item[] = [
    {
        id: '0001',
        name: 'Water Bottle',
        price: mockItems[0].price.mul(new Big(0.9)).mul(new Big(0.9)).round(2)
    },
    {
        id: '0002',
        name: 'Hoodie',
        price: mockItems[1].price.mul(new Big(0.9)).round(2)
    },
    {
        id: '0003',
        name: 'Sticker Set',
        price: mockItems[2].price.mul(new Big(0.9)).round(2)
    }
];

export const mockItemsWithTotalDiscount10pc: Item[] = [
    {
        id: '0001',
        name: 'Water Bottle',
        price: mockItems[0].price.mul(new Big(0.9)).round(2)
    },
    {
        id: '0002',
        name: 'Hoodie',
        price: mockItems[1].price.mul(new Big(0.9)).round(2)
    },
    {
        id: '0003',
        name: 'Sticker Set',
        price: mockItems[2].price.mul(new Big(0.9)).round(2)
    }
];

