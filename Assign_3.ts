//Exercise -1
let userName: string = "John Doe";
let age: number = 25;
let isStudent: boolean = true;

// userName = 123;  // Error: Type 'number' is not assignable to type 'string'.
// age = "twenty-five"; // Error: Type 'string' is not assignable to type 'number'.
// isStudent = "yes"; // Error: Type 'string' is not assignable to type 'boolean'.

//Exercise -2
function add(x:number,y:number)
{
    return x+y
}
console.log(add(5,4))

//Exercise -3
//Function with Optional Parameters

function greet(name:string,msg:string ="helloo")
{
    return `${msg}, ${name}!`; 
}
console.log(greet("Ganesh","Good morning"))
console.log(greet("Ganesh"))

//Exercise -4
//Union Types
function displayId(id: number | string) {
    console.log(`ID: ${id}`);
}
displayId(101);       
displayId("A123");

//Exercise -5
//Arrays & Tuples
let numbers: number[] = [10, 20, 30];
let person: [string, number] = ["Alice", 30];

console.log(numbers); // Output: [10, 20, 30]
console.log(person);  // Output: ["Alice", 30]
//Exercise -6
//Interface
interface Person {
    name: string;
    age: number;
    email: string;
  }
  
  const user: Person = {
    name: "John",
    age: 25,
    email: "john@example.com",
  };
  
  //Exercise -7
  // Type Aliases
  type Employee = {
    id: number;
    name: string;
    role: "admin" | "manager" | "employee";
  };
  
  const employee: Employee = {
    id: 101,
    name: "Michael",
    role: "manager",
  };
  
  //Exercise -8
  // Enum
  enum Color {
    Red = "Red",
    Green = "Green",
    Blue = "Blue",
  }
  
  let favoriteColor: Color = Color.Green;
  
  // Exercise -9
  //  Readonly & Partial
  interface User {
    id: number;
    name: string;
    email: string;
  }
  
  // Readonly User
  const readonlyUser: Readonly<User> = {
    id: 1,
    name: "Alice",
    email: "alice@example.com",
  };
  
  // Partial User
  let newUser: Partial<User> = { name: "Bob" }; // ✅ Allowed
  
  //Exercise -10
  // Classes in TypeScript
  class Car {
    constructor(
      public brand: string,
      public model: string,
      public year: number
    ) {}
  
    getCarInfo(): string {
      return `${this.brand} ${this.model} (${this.year})`;
    }
  }
  
  const myCar = new Car("Toyota", "Corolla", 2020);
  console.log(myCar.getCarInfo()); // Toyota Corolla (2020)