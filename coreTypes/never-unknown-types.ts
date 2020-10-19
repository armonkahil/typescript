let userInput: unknown
let userName: string
userInput = 5
userInput = 'Max'
// unknown is not the same as any
// Typescript detects the type check. 
if (typeof userInput === 'string') {
  userName = userInput
}


const generateError = (message: string, code: number): never => {
  throw {message: message, errorCode: code}
}

const result = generateError('An error has occurred', 500)
console.log(result)