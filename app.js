// const person: {
//   name: string
//   age: number
// } = {
var person = {
    name: 'Maximilian',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: [2, 'author']
};
// pushing is allowed here because its an exception
person.role.push('admin');
// person.role[1] = 10
var favoriteActivities;
favoriteActivities = ["Football"];
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
