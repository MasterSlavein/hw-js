// Task 1 
let array_two_dimesional = [[1,2,3,4,5], [5,6,7,8,9],[20,21,34,56,100]];

function sumMin(array){
    let min_array = [];
    for (let element = 0; element < array.length; element++)
    min_array.push(Math.min(...array[element]))

alert(`Min sum of two dimensional array is ${min_array.reduce((a,b) => a+b)}`);
}
sumMin(array_two_dimesional);

//Task 2
let ages_array = [1, 2, 10, 8];

function twoOldestAges(array){
    let min_age = []
    min_age = array.sort((a,b) => a - b)
    min_age = min_age.slice(-2)
alert(`Two oldest ages are ${min_age[0]} and ${min_age[1]} years`)
}

twoOldestAges(ages_array)

//Task 3 
const piece_of_text = "bitcoin take over the world maybe who knows perhaps"

function shortest_Word(text){
    let text_array = text.split(" ")
    text_array = text_array.sort((a,b) => a.length - b.length)
alert(`Minimal length of the word is equal to ${text_array[0]} symbols`)
}

shortest_Word(piece_of_text)