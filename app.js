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
var ADMIN = 0;
var READ_ONLY = 1;
var AUTHOR = 2;
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
var person = {
    name: 'Maximilian',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN
};
var favoriteActivities;
favoriteActivities = ["Football"];
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
if (person.role === Role.ADMIN) {
    console.log('is admin');
}
