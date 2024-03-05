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
