class Typescript {
    version: string

    constructor(version: string) {
        this.version = version
    }

    info(name: string) {
        return `[${name}]: TS version is ${this.version}`
    }
}

// class Car {
//     readonly model: string // readonly поле, перезаписать можно только в конструкторе
//     readonly numberOfWheels: number = 4
//
//     constructor(theModel: string) {
//         this.model = theModel
//     }
// }

class Car {
    readonly  numberOfWheels: number = 4
    constructor(readonly model: string) {}
}

// Модификаторы

class Animal {
    protected voice: string = '' // поле доступно в этом классе и его потомках
    public color: string = 'black' // по умолчанию public

    constructor() {
        this.go()
    }

    private go() { // доступно только в этом классе
        console.log('Go')
    }
}

class Cat extends Animal {
    public setVoice(voice: string): void {
        this.voice = voice
    }
}

const cat = new Cat()
cat.setVoice('meow')
console.log(cat.color)

// Абстрактные классы
abstract class Component {
    abstract render(): void
    abstract info(): string
}

class AppComponent extends Component{
    render(): void {
        console.log('Component on render')
    }

    info(): string {
        return 'This is info'
    }
}