// DATA TYPES
let id: number = 5
let company: string = "Tez-cyber"
let isPublished: boolean = true
let x: any = "Hello"

//Arrays
let ids: number[] = [1, 2, 3, 4, 5]
let arr: any[] = [1, true, "Hello"]

//Tuple
let person: [number, string, boolean] = [1, "Hello", true]

// Tuple Arrays
let employee: [number, string][]

employee = [
    [1, "Drex"],
    [2, "Mason"],
    [3, "Tez"]
]

//Union ------ accepts multiple datatypes
let pid: string | number
pid = "22"

//Enum
enum Direction1 {
    Up ,
    Down,
    Left,
    Right
}
enum Direction2 {
    Up = "Up",
    Down = "Down",
    Left = "Left",
    Right = "Right"
}

console.log(Direction1.Up)

// Objects 
type User = {
    id: number,
    name: string
}

const user: User = {
    id: 1,
    name: "Ahmad"
}
console.log(user.name)

//Type Assertion 

let cid: any = 1
// const customerId = <number>cid
let customerId = cid as number

//Functions
function addNum(x: number, y: number): number {
    return x + y
}
console.log(addNum(1, 2))

//Void --------------- it doesnt return any value 
function log(message: string | number): void {
    console.log(message)
}
log("Hello")

// Interface
interface UserInterface {
    readonly id: number //cant be reassigned
    name: string
    age?: number // This is an optional property
}
const user1: UserInterface = {
    id: 1,
    name: "John"
}


/*
    Note:
        interface cant be used with Union
*/

//---Interface with functions
interface MathFunc {
    (x: number, y: number): number
}

const add: MathFunc = (x: number, y: number): number => x + y

//------------------------------------Classes
interface PersonInterface {
    id: number
    name: string
    register(): string
}

class Person implements PersonInterface {
    id: number
    name: string
    private age?: number
    protected gender?: string

    constructor(id: number, name: string) {
        this.id = id
        this.name = name
    }
    /*
        This method returns only string as 
        passed from the interface
    */
    register() {
        return `${this.name} is now registered`
    }
}

const ahmad = new Person(1, "Ahmad")

// Extending classes (Subclasses)
class Employee extends Person {
    position: string

    constructor(id: number, name: string, position: string) {
        super(id, name)
        this.position = position
    }
}
const emp = new Employee(3, "Abdullah", "Dev")
console.log(emp.register())



