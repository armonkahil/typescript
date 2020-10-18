// const person: {
//   name: string
//   age: number
// // } = {
// const person: {
//   // string
//   name: string
//   // number
//   age: number
//   // array
//   hobbies: string[]
//   // tuple
//   role: [number, string]
const ADMIN = 0
const READ_ONLY = 1
const AUTHOR = 2

// ENUMS ARE USED FOR more readable identifiers
// enum Role { ADMIN, READ_ONLY, AUTHOR }
enum Role { ADMIN = "ADMIN", READ_ONLY = 100, AUTHOR='AUTHOR' }


const person = {
  name: 'Maximilian',
  age: 30,
  hobbies: ['Sports', 'Cooking'],
  role: Role.ADMIN
}

let favoriteActivities: string[]
favoriteActivities = ["Football"]
console.log(person.name)

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase())
}

if (person.role === Role.ADMIN) {
  console.log('is admin')
}