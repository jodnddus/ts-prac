let str: 'hello' = 'hello';
str = 123;

const str2 = 'hello';

const obj: { name: 'zero' } = { name: 'zero' };
const arr: [1, 3, 'five'] = [1, 3, 'five'];
const func: (amount: number, unit: string) => string
    = (amount, unit) => amount + unit;

const obj2 = { name: 'zero' };
const arr2 = [1, 3, 'five'];

const obj3 = { name: 'zero' } as const;
obj3.name = 'one';

const arr3 = [1, 3, 'five'] as const;
arr3[0] = 2;
arr3.push(3);