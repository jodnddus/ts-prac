let strOrNum: string | number = 'hello';
strOrNum = 123;

function returnNumber(value: string | number): number {
    // type narrowing
    if (typeof value === 'number') return value;

    return parseInt(value);
}

returnNumber(1);
returnNumber('1');

function returnString2(value: string | number | boolean): string {
    return value.toString();
}

// available type | before first Type
type Union =
    | string
    | boolean
    | number
    | null;