/** Practice:
 * Запрашивать данные у пользователя необходимо с помощью prompt(), а выводить результат с помощью alert().
 *1.​Запросите у пользователя его имя и выведите в ответ: «Привет, его имя!».
 *2. Запросите у пользователя год его рождения, посчитайте, сколько ему лет и выведите результат. Текущий год укажите в коде как константу.
 *3. Запросите у пользователя длину стороны квадрата и выведите периметр такого квадрата.
 *4. Запросите у пользователя радиус окружности и выведите площадь такой окружности.
 *5. Запросите у пользователя расстояние в км между двумя городами и за сколько часов он хочет добраться. Посчитайте скорость, с которой необходимо двигаться, чтобы успеть вовремя.
 *6. Реализуйте конвертор валют. Пользователь вводит доллары, программа переводит в евро. Курс валюты храните в константе.
 *7. Пользователь указывает объем флешки в Гб. Программа должна посчитать сколько файлов размером в 820 Мб помещается на флешку
 *8. Пользователь вводит сумму денег в кошельке и цену одной шоколадки. Программа выводит сколько шоколадок может купить пользователь и сколько сдачи у него останется.
 *9. Запросите у пользователя трехзначное число и выведите его задом наперед. Для решения задачи вам понадобится оператор % (остаток от деления).
*/
// Task_1
const name = prompt('Enter your name')
alert(`Hello, ${name}`)

// Task2
const curr_year = 2020
const birthYear = +prompt('Enter your year of birth')
alert(`Your age ${curr_year - birthYear}`)

// Task3
const side = +prompt('Enter the side of the square')
alert(`Perimeter of the square is ${4 * side}`)

// Task 4 
const radius = +prompt('Enter the radius of the circle' )
alert(`Square of the circle is ${Math.PI * radius ** 2}`)

// Task 5
const dist_km = +prompt('Enter the distance of your trip')
const trip_time = +prompt('Enter the desired travel time')
alert(`Your average speed should be no lees than ${dist_km / trip_time} km/h`)

// Task 6 
const us_eur_ratio = 0.89
const curr_dollars = +prompt('Enter quantity of US dollars')
alert(`You amount is equal to ${us_eur_ratio * curr_dollars} euros`)

// Task 7 
const storage = +prompt('Enter your flash storage capacity in Gigabyte')
alert(`You're capable to download ${Math.floor(storage * 1024 / 820)}`)

// Taks 8 
const pocket = +prompt('Enter your how much money in your pocket. Please use next format dollars.cents')
const price = +prompt('Enter the price of chocolate bar. Please use next format dollars.cents')
alert(`You're capable to buy ${Math.floor(pocket / price )} and your charge is ${pocket % price}`)

// Task 9 
const number = +prompt('Enter 3 digit number')
alert(`Reversed number is ${number % 10}${Math.floor(number / 10) % 10}${Math.floor(number / 100)}`)