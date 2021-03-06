// aliases
type Combinable = number | string 
type ConversionDescriptor = 'as-number' | 'as-text'
  
const combine = (input1: Combinable, input2: Combinable, resultConversion: ConversionDescriptor) => {
  let result
  if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
    // +input is shorthand for parseFloat()
    result = +input1 + +input2
  } else {
    result = input1.toString() + " and " + input2.toString()
  }
  return result
  // if (resultConversion === 'as-number') {
  //   // +result is shorthand for parseFloat()
  //   return +result
  // } else {
  //   return result.toString()
  // }
}

const combinedAges = combine(30, 26, 'as-number')
console.log('combinedAges:', combinedAges)

const combinedStringAges = combine('30', '26', 'as-number')
console.log('combinedStringAges:', combinedStringAges)

const combinedNames = combine('Armon', 'Amy', 'as-text')
console.log('combinedNames:', combinedNames)