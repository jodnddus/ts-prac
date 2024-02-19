type A = string;
const str: A = 'hello';

const func1: (value: number, unit: string) => string
    = (value, unit) => value + unit;

type ValueWithUnit = (value: number, unit: string) => string;
const func2: ValueWithUnit = (value, unit) => value + unit;

const person1: {
    name: string,
    age: number,
    married: boolean,
} = {
    name: "zero",
    age: 28,
    married: false,
}

type Person = {
    name: string,
    age: number,
    married: boolean,
}

const person2: Person = {
    name: 'zero',
    age: 28,
    married: false,
}