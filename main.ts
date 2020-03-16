// Section 14 - Your First TypeScript Program
function log(message) {
    console.log(message);
}

var message = "Hell World";

log(message);

// Section 15 - Declaring Variables
var number = 1;
let count = 2;

function doSomething() {
    // var is scoped to function
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
    console.log('Finally: ' + i);

    // let is scoped like C# 
    // BUT TSC will still compile valid JS code even though error is generated 
    for (let j = 0; j < 5; j++) {
        console.log(j);
    }
    console.log('Finally: ' + j);
}

doSomething();

// Section 16:  Types in TypeScript

let count2 = 5;
count2 = 'a';

let unkown;
unkown = 1;
unkown = true;
unkown = 'a';

let unkown2: number;
unkown2 = 1;
unkown2 = true;
unkown2 = 'a';

let b: boolean;
let c: string;
let d: any;
let e: number[] = [1, 2, 3];
let f: any[] = [1, true, 'a'];

// Enum
const ColorRed = 0;
const ColorGreen = 1;
const ColorBlue = 2;

enum Color { ColorRed, ColorGreen, ColorBlue }
// Automatically gets 0, 1, 2 so we don't have to explicity set but its better practice to do it
enum Color2 { ColorRed = 0, ColorGreen = 1, ColorBlue = 2 }
let backgroundColor = Color.ColorGreen // Invokes Intellisense

// Section 17:  Type Assertions
let message1 = 'abc';
let endsWithC = message1.endsWith('c'); // Invokes Intellisense

let message2;
message2 = 'abc';
let endsWithC2 = message2.endsWtih('c'); // No Invokes Intellisense
let endsWithC3 = (<string>message).endsWith('c') // Type Assertation 1 - Invokes Intelisennse
let endsWithC4 = (message as string).endsWith('c') // Type Assertation 2 - Invokes Intelisennse
// Purely a way to tell TSC what type it is to access Intellisense
// This does not change the variable at runtime to a string from any

// Section 18: Arrow Functions

let log1 = function (message) {
    console.log(message);
}

let doLog = (message) => console.log(message);

let doLog2 = (message) => {
    console.log(message);
}

let doLog3 = () => console.log(); // Can do with or without '()' when no parameters

// Section 19: Interfaces

let drawPoint = (point: { x: number, y: number }) => { // Inline annotations
    //...
}
let drawPoint2 = (point) => { // Inline annotations
    //...
}

// Before declaring Inline annotations this was valid TS Code.
drawPoint2({
    name: 'Mosh' 
})

interface Point{
    x: number,
    y: number
}

let drawPoint1 = (point: Point) => { // Inline annotations
    //...
}

// Section 20: Classes

