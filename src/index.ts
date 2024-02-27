export {};

// Type 'unknown' is not assignable to type in TypeScript

// EXAMPLE 1 - Use a type assertion to solve the error

const a: unknown = 'Bobby Hadz';

const b: string = a as string;
console.log(b);

// ---------------------------------------------------

// // EXAMPLE 2 - Use a type guard to solve the error

// const a: unknown = 'Bobby Hadz';

// let b = '';

// if (typeof a === 'string') {
//   b = a;
// }

// console.log(b); // 👉️ "Bobby Hadz"

// ---------------------------------------------------

// // EXAMPLE 3 - Using a type guard to check for an object

// const person: unknown = {
//   name: 'Bobby Hadz',
//   country: 'Chile',
// };

// type Person = {
//   name: string;
//   country: string;
// };

// // 👇️ checks if obj has properties of Person
// function isPerson(obj: any): obj is Person {
//   return (
//     typeof obj === 'object' && obj !== null && 'name' in obj && 'country' in obj
//   );
// }

// let bobby: Person;

// if (isPerson(person)) {
//   // 👉️ person has a type of Person here
//   bobby = person;
// } else {
//   bobby = { name: '', country: '' };
// }

// console.log(bobby); // 👉️ {name: 'Bobby Hadz', country: 'Chile'}

// ---------------------------------------------------

// // EXAMPLE 4 - Using a type guard to check for an array

// const data: unknown = [
//   {
//     name: 'Bobby Hadz',
//     country: 'Chile',
//   },
//   {
//     name: 'Alice',
//     country: 'Germany',
//   },
// ];

// type Person = {
//   name: string;
//   country: string;
// };

// let people: Person[] = [];

// if (Array.isArray(data)) {
//   people = data as Person[];
// }

// // [
// //   { name: 'Bobby Hadz', country: 'Chile' },
// //   { name: 'Alice', country: 'Germany' }
// // ]
// console.log(people);

// ---------------------------------------------------

// // Argument type 'unknown' is not assignable parameter of type

// // EXAMPLE 5 - Using a type assertion to solve the error

// function getMessage(message: string) {
//   return message;
// }

// const message: unknown = 'Hello world';

// getMessage(message as string); // 👈️ type assertion

// ---------------------------------------------------

// // EXAMPLE 6 - Turning off type checking with the `any` type

// function getMessage(message: string) {
//   return message;
// }

// const message: unknown = 'Hello world';

// getMessage(message as any); // 👈️ type assertion

// ---------------------------------------------------

// // EXAMPLE 7 - Using a type guard to solve the error

// function getMessage(message: string) {
//   return message;
// }

// const message: unknown = 'Hello world';

// if (typeof message === 'string') {
//   const result = getMessage(message);
//   console.log(result); // 👉️ "Hello world"
// }

// ---------------------------------------------------

// // EXAMPLE 8 - Using a type guard when checking for objects

// interface Employee {
//   id: number;
//   name: string;
//   salary: number;
// }

// // 👇️ Check if the passed-in object has the properties of Employee
// function isAnEmployee(obj: any): obj is Employee {
//   return (
//     typeof obj === 'object' &&
//     obj !== null &&
//     'id' in obj &&
//     'name' in obj &&
//     'salary' in obj
//   );
// }

// const obj: unknown = {
//   id: 1,
//   name: 'Bobby Hadz',
//   salary: 500,
// };

// function getEmployee(emp: Employee) {
//   return emp;
// }

// if (isAnEmployee(obj)) {
//   // 👉️ obj is type Employee here
//   const result = getEmployee(obj);
//   console.log(result); // 👉️ {id: 1, name: 'Bobby Hadz', salary: 500}
// }

// ---------------------------------------------------

// // EXAMPLE 9 - Using a type guard when checking for arrays

// type Employee = {
//   id: number;
//   name: string;
//   salary: number;
// };

// const emps: unknown = [
//   { id: 1, name: 'Alice', salary: 100 },
//   { id: 2, name: 'Bobby Hadz', salary: 200 },
//   { id: 3, name: 'Carl', salary: 300 },
// ];

// function getEmployees(emps: Employee[]) {
//   return emps;
// }

// if (Array.isArray(emps)) {
//   getEmployees(emps as Employee[]);
// }
