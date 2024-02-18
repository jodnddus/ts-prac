// array[3] is undefined
const array = [123, 4, 56];
array[3].toFixed();

const tuple: [number, boolean, string] = [1, false, 'hi'];
tuple[0] = 3;
tuple[0] = 'three';
tuple[2] = 5;
tuple[3] = 'hi';
tuple.push('yes');

const tuple2: readonly [number, boolean, string] = [1, false, 'hi'];
tuple2.push('no');

const array2: [number, number, number] = [123, 4, 56];
array2[3].toFixed();

// spread
const strNumBools: [string, number, ...boolean[]]
    = ['hi', 123, false, true, false];
const strNumBool: [string, ...number[], boolean]
    = ['hi', 123, 4, 56, false];
const strsNumBool: [...string[], number, boolean]
    = ['hi', 'hello', 'wow', 123, false];

const arr1 = ['hi', true];
const arr = [46, ...arr1];

const [a, ...rest1] = ['h1', 1, 23, 456];
const [b, ...rest2]: [string, ...number[]] = ['hi', 1, 23, 456];

let tuple3: [number, boolean?, string?] = [1, false, 'hi'];
tuple3 = [3, true];
tuple3 = [5];
tuple3 = [7, 'no'];