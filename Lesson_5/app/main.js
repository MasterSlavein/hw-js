//Task 1
function DNA_stand(dna_codes){
    const dna_rule = {
        "A": "T",
        "T": "A",
        "C": "G",
        "G": "C"

    };
    let dna_response = [];
    dna_codes = dna_codes.split("");
    for (let i = 0; i <= dna_codes.length; i++){
        dna_response.push(dna_rule[dna_codes[i]]);
    };
    console.log(`${dna_response.join("")}`);
};

DNA_stand("ATTGC");
DNA_stand("GTAT");

// Task 2.1 
function number_traslation(number){
    const vocabulary = {
        11: "одинадцать",
        12: "двенадцать",
        13: "тринадцать",
        14: "четырнадцать",
        15: "пятнадцать",
        16: "шестнадцать",
        17: "семнадцать",
        18: "восемнадцать",
        19: "девятнадцать",
        20: "двадцать",
        1: "один",
        2: "два",
        3: "три",
        4: "четыре",
        5: "пять",
        6: "шесть",
        7: "семь",
        8: "восемь",
        9: "девять",
        10: "десять",
        20: "двадцать", 
        30: "тридцать", 
        40: "сорок", 
        50: "пятьдесят",
        60: "шестьдесят", 
        70: "семьдесят", 
        80: "восемьдесят", 
        90: "девяносто"
    };
    if (number >= 10 && number <= 20){
        console.log(`${vocabulary[number]}`);
    } else {
        console.log(`${vocabulary[number - number%10]} ${vocabulary[number % 10]}`);
    };
};
number_traslation(13);
number_traslation(35);
number_traslation(99);

// Task 2.2
function word_info(text){
    let alpha_count = text.split(" ").reduce(((accumulator, value) => accumulator + value.length),0)
    console.log(`Your text contains: ${alpha_count} letters`)
    let digit_count = text.array.forEach(element => {
        
    });
}
