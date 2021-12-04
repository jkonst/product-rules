import {Big} from "big.js";
import {Item} from "../model/model";

const mockItems: Item[] = [
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

const getMockItemsMap = (): Map<string, Item> => {
    return mockItems.reduce((acc, cur) => {
        acc.set(cur.id, cur);
        return acc;
    }, new Map<string, Item>());
}

const mockItemsMap = getMockItemsMap();

export const constructMockItems = (ids: string[]): Item[] => {
    return ids.reduce((acc, cur) => {
        return [...acc, mockItemsMap.get(cur)]
    }, []);

};
