//todo
var numbers = [34, 54, 1, 23, 678, 72, 9, 10, 5, 89, 900]
var minNum = numbers[0]
var maxNum = numbers[0]
for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < minNum) {
        minNum = numbers[i]
    }
    if (numbers[i] > maxNum) {
        maxNum = numbers[i]
    }
}

console.log('The lowest num is: ', minNum)
console.log('The highest num is: ', maxNum)

//todo

var number = Number(prompt("Введите число для создания таблицы умножения:"))

console.log(`Таблица умножения для числа ${number}:`);

for (let i = 1; i <= 10; i++) {
    var result = number * i;
    console.log(`${i} * ${number} = ${result}`);
}

//todo
function countVowels(str) {
    var countValues = ['а', 'у', 'о', 'ы', ' и', 'э', 'я', ' ю', 'ё', ' е']
    str = str.toLowerCase();
    var count = 0;
    for (let char of str) {
        if (countValues.includes(char)) {
            count++;
        }
    }

    return count;
}

var str = "банан";
var vowelCount = countVowels(str);
console.log(`В строке "${str}" количество гласных: ${vowelCount}`);