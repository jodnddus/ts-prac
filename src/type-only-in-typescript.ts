// any Type
let str: any = 'hello';
const result = str.toFixed();

const arr = [];
const arr2: string[] = [];

const arr3 = [];
arr3.push('1');
arr3;
arr3.push(3);
arr3;

const arr4 = [];
arr4[0] = '1';
arr4;
arr4[1] = 3;
arr4;

const arr5 = [];
const arr6 = arr5.concat('123');

fetch('url').then<{data: string}>((response) => {
    return response.json();
}).then((result) => {

})

const result2: { hello: string } = JSON.parse('{"hello": "json"}')

// unknown Type
const a: unknown = 'hello';
const b: unknown = 'world';
a + b;
a.slice();

try {

} catch(e) {
    console.log(e.message);
}

try {
} catch(e) {
    const error = e as Error;
}

// void Type
function noReturn() {}

const func: () => void = () => 3;
const value = func();
const func2 = (): void => 3;
const func3: () => void | undefined = () => 3;

[1, 2, 3].forEach((v) => v);
[1, 2, 3].forEach((v) => console.log(v));

// {}, Object Type
