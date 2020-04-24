// boolean, number, string, array, tuple, enum, any, null, undefined, void, never - 11
const str: string = "hello"
console.log(str)

const isFetching: boolean = true
const isLoading: boolean = false

const int: number = 43
const float: number = 4.2
const num: number =3e10

const numberArray: number[] = [1, 1, 2, 3, 5, 8, 13]
const numberArray2: Array<number> = [1, 1, 2, 3, 5, 8, 13] // generic

const words: string[] = ['Hello', 'TypeScript']

// Tuple кортеж
const contact: [string, number] = ['Altyn', 777]

// Any - произвольный тип
let variable: any = 43
variable = 'new string'

// =============
function sayName(name: string): void {
    console.log(name)
}
sayName('Kiko')

// Never - отсутствие значения, возвращаемый тип функции
function throwError(message: string): never {
    throw new Error(message)
}

function infinite(): never {
    while (true) {}
}

// Type
type Login = string

const login: Login = 'admin'
// const login2: Login = 2

type ID = string | number
const id1: ID = 777
const id2: ID = '777'
// const id3: ID = true

type SomeType = string | null | undefined