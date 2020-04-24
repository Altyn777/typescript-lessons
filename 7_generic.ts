const arrayOfNumbers: Array<number> = [1, 1, 2, 3, 5]
const arrayOfStrings: Array<string> = ['hello', 'Altyn']

function reverse<T>(array: T[]): T[] { // T - разные типы данных, параметр подстраивается динамически
    return array.reverse()
}

reverse(arrayOfNumbers)
reverse(arrayOfStrings)