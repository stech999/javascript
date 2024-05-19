// Написать функцию, которой передаем, имя, фамилия и возраст, и получаем строку "Привет Иван Петров с возрастом 17"(только здесь данные, которые были переданы в функцию)
// Создайте функцию которая возводит переданное число в квадрат
// Сделайте функцию, которая параметром принимает число и проверяет, положительное это число или отрицательное.В первом случае пусть функция выводит в консоль текст '+++', а во втором '---'.
// let name = prompt('Введите имя: ');
// let lastname = prompt('Введите Фамилию: ');
// let old = prompt('Введите возвраст: ');
// console.log(`Привет ${name} ${lastname} с возрастом ${old}`);

// let number = Number(prompt('Введите ваше число'));
// let square = number * number;
// console.log(square);

// let number2 = Number(prompt('Введите число: '));
// if (number2 >= 0) {
//     console.log('+++');
// }
// else {
//     console.log('---');
// }
// ----
// function helloMan(firstName, lastName, age) {
//     console.log(`Привет, ${firstName} ${lastName}, c возрастом ${age}!`);
// }

// let firstName = prompt('Введите ваше имя');
// let lastName = prompt('Введите вашу фамилию');
// let age = prompt('Введите ваш возраст');
// helloMan(firstName, lastName, age);
// const power = (num) => num ** 2;
// console.log(power(5));
// const checkNum = (number) => (number >= 0) ? '+++' : '---';

// console.log(checkNum(-2));
// console.log(checkNum(9));


// -------------------------

// 1. Сделайте функцию, которая параметрами принимает 3 числа и выводит в консоль сумму этих чисел.

// 2. С помощью созданной вами функции выведите в консоль сумму значений этих переменных.
// let param1 = ‘1’;
// let param2 = 2;
// let param3 = 3;

// 3. Дана функция
// function func(num = 5) {
//     console.log(num * num);
// }
// Расскажите, каким будет результат каждого из вызовов функции.
//     func(2);
// func(3);
// func();
// Задание 2 (тайминг 15 минут)
// 1. Сделайте функцию, которая параметрами принимает 3 числа и
// выводит в консоль сумму этих чисел.

// function summThreeNums(num1, num2, num3) {
//     return num1 + num2 + num3;
// }
// console.log(summThreeNums(100, 200, 300));

// const summofThreeNums = (num1, num2, num3) => +num1 + +num2 + +num3;
// console.log(summofThreeNums(20, 20, 40));

// // 2. С помощью созданной вами функции выведите в консоль сумму
// // значений этих переменных.
// let param1 = '1';
// let param2 = 2;
// let param3 = 3;
// console.log(summofThreeNums(param1, param2, param3));

// // 1. Дана фукнция
// function func(num = 5) {
//     console.log(num * num);
// }
// // Расскажите, каким будет результат каждого из вызовов функции.
// func(2);
// func(3);
// func();

//------------

// 1. Сделайте функцию (Math.sqrt(x)), которая параметром принимает число, а возвращает квадратный корень из этого числа. С помощью этой функции найдите корень числа 3, затем найдите корень числа 4. Просуммируйте полученные результаты и выведите их в консоль (используя функцию суммы). (3.732050807568877)
// 2. Создайте функцию, которая находит минимальное число из 2х передаваемых аргументов функции
// const sqrt = (num) => Math.sqrt(num)

// const root3 = sqrt(3)
// console.log(root3)
// const root4 = sqrt(4)
// console.log(root4)

// const sum = (a, b) => a + b
// console.log(sum(root3, root4))

// const sumOfSquareRoots = (num1, num2) => {
//     const sqrt = (num) => Math.sqrt(num)

//     const root1 = sqrt(num1)
//     const root2 = sqrt(num2)
//     const sum = root1 + root2

//     console.log(`Квадратный корень из ${num1} равен: ${root1}`)
//     console.log(`Квадратный корень из ${num2} равен: ${root2}`)
//     console.log(`Сумма квадратных корней из ${num1} и ${num2} равна: ${sum}`)
// }


// sumOfSquareRoots(3, 4);


// const minNum = (a, b) => a < b ? a : b
// console.log(minNum(1, 2))

// function minNum(a, b) {

//     if (a < b) {
//         console.log(a)
//     } else {
//         console.log(b)
//     }
// }

// minNum(2, 3)
// let day = prompt("Введите цифру недели: ")
// let monday = 'Понедельник';
// let tuesday = 'Вторник';
// let wednesday = 'Среда';
// let thursday = 'Четверг';
// let friday = 'Пятница';
// let saturday = 'Суббота';
// let sunday = 'Воскресенье';
// if (day == 1) {
//     console.log(monday);
// }
// else if (day == 1) {
//     console.log(monday);
// } else if (day == 2) {
//     console.log(tuesday);
// } else if (day == 3) {
//     console.log(tuesday);
// } else if (day == 4) {
//     console.log(wednesday);
// } else if (day == 5) {
//     console.log(friday);
// } else if (day == 6) {
//     console.log(saturday);
// } else if (day == 7) {
//     console.log(sunday);
// }
// let nowDate = new Date();
// console.log(nowDate);

// -------------------------

// function getDayOfWeek(number) {
//     switch (number) {
//         case 1:
//             return "Понедельник";
//         case 2:
//             return "Вторник";
//         case 3:
//             return "Среда";
//         case 4:
//             return "Четверг";
//         case 5:
//             return "Пятница";
//         case 6:
//             return "Суббота";
//         case 7:
//             return "Воскресенье";
//         default:
//             return "Некорректное значение";
//     }
// }

// let day = +prompt('Введите любое число от 1 до 7');
// console.log("День недели: ", getDayOfWeek(day));

// function greetUser(name, time) {
//     let greeting;

//     if (time >= 0 && time < 6) {
//         greeting = "Доброй ночи, " + name;
//     } else if (time >= 6 && time < 12) {
//         greeting = "Доброе утро, " + name;
//     } else if (time >= 12 && time < 18) {
//         greeting = "Добрый день, " + name;
//     } else {
//         greeting = "Добрый вечер, " + name;
//     }

//     return greeting;
// }

// let userName = prompt('Введите ваше имя');
// // let currentTime = +prompt('Который час?');
// const currentTime = new Date().getHours();

// const greetingMessage = greetUser(userName, currentTime);
// console.log(greetingMessage);


//--------------------

// Написать функцию, в которую передаем 2 аргумента, первое это вопрос на любую загадку, второе это ответ на данную загадку, необходимо сравнить ответ пользователя на загадку и вернуть, true или false значение
// Добавить подсказку, если пользователь ответил неверно

function zagadka(a, b) {
    let un = prompt(`отгадай загадку: \n${a}`);
    console.log(un);
    if (un == b) {
        console.log('Вы отгадали');
    } else {
        let un = prompt(`Подсказка: Обычно наряжают зимой`);
        if (un == b) {
            console.log('Угадал');
        } else {
            console.log('Не угадали');
        }
    }
}

let question = 'Зимой и летом одним цветом?';
let unswer = 'елка';
console.log(zagadka(question, unswer));

// const quessing = (question, answer) => {
//     const flag = false;
//     let count = 0;
//     while (flag === false && (count < answer.length)) {
//         let result = prompt(question);
//         if (result === answer) {
//             flag === true;
//             console.log('OK')
//             return
//         } else {
//             result = prompt(`Неверно, ${count + 1} буква - ${answer[count]}`);
//             count++;
//         }
//     };
// };

// quessing("Зимой и летом", 'елка');

//------------------

// let question = 'Зимой и летом одним цветом. Что это?';
// let answer = prompt(question);
// function puzzle(question, answer) {
//     if (answer === 'елка'.toLowerCase()) {
//         return true;
//     } else {
//         let question2 = 'Она с иголками';
//         let answer2 = prompt(question2);
//         if (answer2 === 'елка'.toLowerCase()) {
//             return true;
//         } else {
//             return false;
//         }
//     }
// }
// console.log(puzzle(question, answer));

// function riddles(textRiddles, hint, response) {
//     let ridd = prompt(textRiddles).toLowerCase();
//     if (ridd === response) {
//         console.log('Угадал');
//     } else {
//         ridd = prompt(hint);
//         if (ridd === response) {
//             console.log('Угадал');
//         } else {
//             console.log('неправильно');
//         }
//     }
// }

// riddles('зимой и летом одним цветом', 'зеленая', 'елка');