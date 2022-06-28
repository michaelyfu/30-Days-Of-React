const arr = Array()
const elements_6 = [1, 2, 3, 4, 5, 6]
console.log(elements_6.length)
console.log(elements_6[0], elements_6[elements_6.length / 2], elements_6[elements_6.length - 1])
let mixedDataTypes = [1, "hi", ["a", 2.0], true, (2, 3), ""]
console.log(mixedDataTypes.length)
var itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
console.log(itCompanies, itCompanies.length)
for (const company of itCompanies) {
    console.log(company)
}
for(let i = 0; i < itCompanies.length; i++) {
    itCompanies[i] = itCompanies[i].toUpperCase()
}
console.log(itCompanies)
console.log(itCompanies.join(', '), 'are big IT companies.')
if(itCompanies.includes('Apple')){
    console.log('contains Apple')
}
else{
    console.log('DOES NOT contain Apple')
}
for(const company of itCompanies){
    if(company.split('O').length - 1 >= 2){
        console.log(company, 'has more than 1 O')
    }
    else {
        console.log(company, 'has less than 2 Os')
    }
}
// console.log(itCompanies.sort())
console.log(itCompanies.reverse())

// CONDITIONALS
let a = 4
let b = 3
if(a > b) {
    console.log('a is greater than b')
}
else{
    console.log('b is greater than a')
}

a > b
? console.log('a is greater than b')
: console.log('b is greater than a')

// Loops
for(let i = 0; i <= 5; i++) {
    console.log(i)
}
const numbers = [1, 2, 3, 4, 5]
for(const number of numbers) {
    console.log(number)
}

numbers.forEach((number, i) => {
    console.log(number, i)
})

function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return result;
}

console.log(makeid(5));

// a callback function, the function could be any name
const callback = (n) => {
    return n ** 2
  }

  // function take other function as a callback
  function cube(callback, n) {
    return callback(n) * n
  }

  console.log(cube(callback, 3))