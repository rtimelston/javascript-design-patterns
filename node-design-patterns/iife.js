// Immediately Invoked Function Expression (IIFE)
// https://blog.logrocket.com/design-patterns-in-node-js/

(function() {
  const x = 20
  const y = 20
  console.log(`answer ${x + y}`)
})()


// IIFE use case: Simulate static counter
const autoIncrement = (function() {
  let number = 0
  return function() {
    return ++number
  }
})

console.log(`increment number: ${autoIncrement.number}`) // cannot access

const autoIncrementInst = autoIncrement()

console.log(`increment number: ${autoIncrementInst.number}`) // cannot access

console.log(`increment: ${autoIncrementInst()}`) // access incremented through function
console.log(`increment: ${autoIncrementInst()}`) // access incremented through function
console.log(`increment: ${autoIncrementInst()}`) // access incremented through function

console.log(`increment: ${autoIncrement()()}`) // creates a new incrementer so starts at one again



const autoIncrementer = (function() {
  let valueVar = 0 // note not accessible directly from the outside
  return {
    incr() {
      valueVar++
    },

    get value() {
      return valueVar
    }
  }
})()

autoIncrementer.incr()
console.log(`autoIncrement value: ${autoIncrementer.value}`) // note .value instead of .valueVar because of 'get value'
autoIncrementer.incr()
console.log(`autoIncrement value: ${autoIncrementer.value}`)
