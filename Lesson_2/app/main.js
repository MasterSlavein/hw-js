// Task 1 
const length = +prompt('Enter the length of the office')
const width = +prompt("Enter the width of the office")
const height = +prompt("Enter the width of the office")


switch(true){
    case length > 1000:
    case width > 1000:
    case height > 1000:{
        alert('Please, enter valid parameter. Value should be a natural number less than 1000')
    break;
    }
    default : {
        alert(`Min quantity of cans should be ${Math.ceil((2*(length * height + width * height) + length*width)  / 16)}`)
    break
    }    

}

//Task 2 
const gold_sand1 = +prompt('Enter the price of first sand')
const gold_sand2 = +prompt('Enter the price of second sand')
const gold_sand3 = +prompt('Enter the price of third sand')
const weight_sand1 = +prompt('Enter quantitty of fist sand')
const weight_sand2 = +prompt('Enter quantitty of fist sand')
const weight_sand3 = +prompt('Enter quantitty of fist sand')

let gold_sand = [gold_sand1, gold_sand2, gold_sand3]
let weight_sand = [weight_sand1, weight_sand2, weight_sand3]
let a = gold_sand.sort(function(a, b) { return a - b; })
let b = weight_sand.sort(function(a, b) { return a - b; })
a = math.matrix(a)
b = math.matrix(b)
let c = math.multiply(a, b)
alert(`Price ${c}`)

// Task 3 

const number = +prompt('Enter your ticket number')
if(number > 0 && number < 10**6){
    const first = Math.floor(number / 1000)
    const second = number % 1000
    const first_sum = first % 10 + Math.floor(first / 10) % 10 + Math.floor(first / 100)
    const second_sum = second % 10 + Math.floor(second / 10) % 10 + Math.floor(second / 100)
    const answ = (first_sum === second_sum) ? 'YES' : 'NO'
    alert(`${answ}`)
} else {
    alert('Enter correct number')
}

//Task 4.1 
const age = +prompt('Enter your age')
const message = (age < 0) ? "Wrong age":
  (age < 12) ? "Child":
  (age < 18 ) ? "Teenager":
  (age < 60) ? "Adult":
  (age < 125) ? "Senior":
  "Super star"

alert(message)

//Task 4.2
const digit = +prompt('Enter your digit')
const message1 = (digit === 1) ? "!":
    (digit === 2) ? "@":
    (digit === 3) ? "#":
    (digit === 4) ? "$":
    (digit === 5) ? "%":
    (digit === 6) ? "^":
    (digit === 7) ? "&":
    (digit === 8) ? "*":
    (digit === 9) ? "(":
    (digit === 0) ? ")":
    "Wrong input"

alert(message1)

//Task 4.3
const three_digits = +prompt('Enter 3-digit number')
const message2 = (three_digits % 10 === Math.floor(three_digits / 10)) ? "Number contains same digits":
    (three_digits % 10 === Math.floor(three_digits / 100)) ? "Number contains same digits":
    (Math.floor(three_digits / 10) === Math.floor(three_digits / 100) ) ? "Number contains same digits":
    "Wrong input or number don't contains same digits"
alert(message2)

//Task 4.4
const year = +prompt('Enter year')
function is_leap_year(year){
    return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)
}
alert(`Year is leap : ${is_leap_year(year)}`)

//Task 4.5
const five_digits = prompt('Enter 5-digit number')
const reversed = five_digits.split("").reverse().join("")
if ((+five_digits) > 9999 && (+five_digits) <1000000 && five_digits === reversed){
    alert("Your number is a poliandrome")
} else {
    alert("Your number is not a poliandrome or Wrong input")
}

// Task 4.6
