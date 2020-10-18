// const person: {
//   name: string
//   age: number
// } = {
const person: {
  // string
  name: string
  // number
  age: number
  // array
  hobbies: string[]
  // tuple
  role: [number, string]
} = {
  name: 'Maximilian',
  age: 30,
  hobbies: ['Sports', 'Cooking'],
  role: [2,'author']
}

// pushing is allowed here because its an exception
person.role.push('admin')

// not allowed
// person.role[1] = 10

person.role = [1,'hello']
let favoriteActivities: string[]
favoriteActivities = ["Football"]
console.log(person.name)

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase())

}