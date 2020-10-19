const add = (n1: number, n2: number) => {
  return n1 + n2
}

const printResult = (num: number) => {
  console.log('Result: ' + num)
}

printResult(add(12, 5))

const addAndHandle = (n1: number, n2: number, cb: (num: number) => void ) => {
  const result = n1 + n2
  cb(result)
}
{

}

let combinedValues: (a: number, b: number) => number

combinedValues = add
// combinedValues = printResult
// combinedValues = 5

console.log(combinedValues(8, 8))

addAndHandle(12, 20, (result)=>{ console.log(result)})