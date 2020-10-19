var userInput;
var userName;
userInput = 5;
userInput = 'Max';
// unknown is not the same as any
// Typescript detects the type check. 
if (typeof userInput === 'string') {
    userName = userInput;
}
var generateError = function (message, code) {
    throw { message: message, errorCode: code };
};
var result = generateError('An error has occurred', 500);
console.log(result);
