// const person: {
//   name: string
//   age: number
// } = {
const person = {
  name: 'Maximilian',
  age: 30,
  hobbies: ['Sports', 'Cooking']
}
let favoriteActivities: string[]
favoriteActivities = ["Football"]
console.log(person.name)

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase())

}