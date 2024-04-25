// -------------------------------------------------------------------
// Variables
let isValid: boolean = true;
let isNull: null = null;
let isString: string = "Fulano";
let isInteger: number = 22;
let isDecimal: number = 82.5;
let isAny: any = "AA";

// -------------------------------------------------------------------
// Special Types
// null
// undefined
// -------------------------------------------------------------------
// Others
// any
// void
// -------------------------------------------------------------------
//Arrays
let isArrayOne: string[] = ["FULANO", "BELTRANO", "CICLANO"];
let isArrayTwo: Array<string> = ["FULANO", "BELTRANO", "CICLANO"];
//MultipleTypes and Tuples
let arrayMultipleTypes: (number | string)[] = [1, "FULANO", 2, "BELTRANO", 3, "CICLANO"];
let isTuple: [[number, string], [number, string], [number, string]] = [
    [1, "FULANO"],
    [2, "BELTRANO"],
    [3, "CICLANO"],
];
// -------------------------------------------------------------------
// Date
let today: Date = new Date("2024-04-25 03:00:00.000Z");
const currentDate: Date = new Date();
const formattedDateTime: string = currentDate.toLocaleDateString() + " " + currentDate.toLocaleTimeString();
// -------------------------------------------------------------------
// Objects

// Not recommended // Without Visibility
let myObject: object = {
    isInteger: 1,
    isString: "No name",
    isValid: false,
};
// Like a Struct!
type Product = {
    id: number;
    productName: string;
};

let myProduct: Product = {
    id: 1,
    productName: "Test"
};

// Interfaces (works with classes)
interface isInterface {
    id: number;
    name: string;
    readonly interfaceType: boolean; // cannot modify
}

const isInterfaceStruct: isInterface = {
    id: 1,
    name: "Test Interface",
    interfaceType: true,
};
// -------------------------------------------------------------------
// Fucntions
function sayMyName(name: string): string {
    return (`Hello ${name}!`);
}

function returnStringOrNumber(message: string | number) {
    return message;
}

//Promise
async function waitFor(): Promise<string> {
    return "ABC";
}
// -------------------------------------------------------------------
// Classes
class MyOwnClass implements isInterface{
    id: number;
    name: string;
    interfaceType: boolean;

    constructor(id : number, name: string, isInterface: boolean) {
    this.id= id;
    this.name = name;
    this.interfaceType = isInterface;
    }
}
const myClassInstance = new MyOwnClass(1,"NEW VALUE", true);

class MyCommonClass{
    private id: number;
    private name: string;

    constructor(id : number, name: string) {
        this.id = id;
        this.name = name;
    }

    sout():void{
        console.log(`${this.id} : ${this.name}`)
    }
}
const myCommonClass = new MyCommonClass(1,"MyCommonClass");

// -------------------------------------------------------------------
// Prints
console.log(isValid);
console.log(isNull);
console.log(isString);
console.log(isInteger);
console.log(isDecimal);
console.log(isAny);
console.log(isArrayOne);
console.log(isArrayTwo);
console.log(arrayMultipleTypes);
console.log(isTuple);
console.log(today);
console.log(formattedDateTime);
console.log(sayMyName(isString));
console.log(returnStringOrNumber("ABC"));
console.log(returnStringOrNumber(12.34));
console.log(waitFor());
console.log(isInterfaceStruct);
isInterfaceStruct.id = 2;
isInterfaceStruct.name = "Changed";
console.log(isInterfaceStruct);
console.log(myClassInstance);
myCommonClass.sout();

// -------------------------------------------------------------------
