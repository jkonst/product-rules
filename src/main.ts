import {scan} from "./checkout/calculate";

const main = () => {
    let itemIds = [];
    try {
        itemIds = getItemIdsFromCLI();
    } catch (e: unknown) {
        throw e;
    }
    scan(itemIds);
};

const getItemIdsFromCLI = (): string[] => {
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
