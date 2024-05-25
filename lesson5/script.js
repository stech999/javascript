// const arr = {
//     name: 'ser',
//     surname: 'eee'
// };
// console.log(arr.surname);
// arr.name = 350;

// 1. Создайте объект с ключами от 1 до 7, в качестве
// значений содержащий имена дней недели.Выведите на
// экран “Вторник”
// let week = {
//     mon: 'Понедельник',
//     tue: 'Вторник',
//     wed: 'Среда',
//     thu4: 'Четверг',
//     fri: 'Пятница',
//     sut: 'Суббота',
//     sun: 'Воскресенье',
// }
// console.log(week.tue);
// 2. Создайте объект user с ключами 'name', 'surname', ‘age’.
// Выведите на экран фамилию, имя и возраст через дефис.
// let user = {
//     name: ' name',
//     surname: ' surname',
//     age: ' age'
// };
// console.log(user.age);
// 3. Добавьте в объект user свойство отчество, которое
// пользователь должен ввести
// let patronymic = prompt('Введите Отчество: ')
// let user = {
//     name: ' name',
//     surname: ' surname',
//     patr: patronymic
// };
// console.log(`Ваше Отчество: ${user.patr}`);

// const myObject = {
//     1: "Понедельник",
//     2: "Вторник",
//     3: "Среда",
//     4: "Четверг",
//     5: "Пятница",
//     6: "Суббота",
//     7: "Воскресение",
// }

// console.log(myObject["2"]);

// const user = {
//     name: "Alexander",
//     surname: "Sergeev",
//     age: 35
// }

// const { name: userName, surname, age } = user;
// console.log("%s - %s - %s", userName, surname, age);

// user.patroname = prompt("Введите Ваше отчество");
// console.table(user);

// delete user.surname;
// console.table(user);

// 1. Даны два массива: первый с названиями дней недели, а второй - с
// их порядковыми номерами:
// const arr1 = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
// const arr2 = [1, 2, 3, 4, 5, 6, 7];
// С помощью цикла создайте объект, ключами которого будут
// названия дней, а значениями - их номера.

// const arr1 = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
// const arr2 = [1, 2, 3, 4, 5, 6, 7];
// const day = {};

// for (let i = 0; i < arr1.length; i++) {
//     console.log(`${arr1[i]}: ${arr2[i]}`);
// }


// 2. const obj = { x: 1, y: 2, z: 3 };
// Переберите этот объект циклом и возведите каждый элемент
// этого объекта в квадрат.
// const obj = { x: 1, y: 2, z: 3 };
// for (const k in obj) {
//     let summ = obj[k] ** 2;
//     console.log(summ);
// }

//3 задача
// let pr = +prompt('Коэффициент: ')
// const price = { x: 1, y: 2, z: 3 };
// for (const t in price) {
//     let summ = obj[t] * pr;
//     console.log(summ);
// }

// const arr1 = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
// const arr2 = [1, 2, 3, 4, 5, 6, 7];

// const days = {};


// for (let i = 0; i < arr1.length; i++) {
//     days[arr1[i]] = arr2[i]; // days['пн'] = 1
// }
// console.log(days);
//---


// const obj = { x: 1, y: 2, z: 3 };

// for (const key in obj) {
//     obj[key] **= 2;
// }
// console.log(obj);


// Задание 3(тайминг 15 минут)
// const obj = {
//     key1: {
//         key1: 1,
//         key2: 2,
//         key3: 3,
//     },
//     key2: {
//         key1: 4,
//         key2: 5,
//         key3: 6,
//     },
//     key3: {
//         key1: 7,
//         key2: 8,
//         key3: 9,
//     },
// }
// Найдите сумму элементов приведенного объекта.

// const object = {
//     key1: {
//         key1: 1,
//         key2: 2,
//         key3: 3,
//     },
//     key2: {
//         key1: 4,
//         key2: 5,
//         key3: 6,
//     },
//     key3: {
//         key1: 7,
//         key2: 8,
//         key3: 9,
//     },
// } // 45
// function ObjSum(obj) {
//     let sum = 0;
//     for (const key in obj) {
//         sum += (obj[key]);
//     }
//     return sum;
// }
// let allSum = 0;
// for (const key in object) {
//     let res = ObjSum(object[key]);
//     allSum += res;
// }
// console.log(allSum);
// function ObjSum2(obj) {
//     let result = Object.values(obj).reduce((acc, element) => {
//         return acc + element
//     }, 0);
//     return result;
// }

// let object1 = Object.values(object);
// let sum = object1.reduce((acc, element) => {
//     return acc + ObjSum2(element)
// }, 0);
// console.log(sum);

// Задание 4(тайминг 30 минут)
// 1. Создайте объект riddles
// 2. Добавьте свойства question, answer
// 3. создайте метод askQuestion который спрашивает у пользователя
// вопрос question и сравнивает ответ с answer
// 4. Если ответил неверно, то в консоль выводится текст: “вы
// проиграли”
// 5. * По желанию, создать 2 подсказки, если пользователь ответил
// неверно
// const riddles = {
//     question: "Что можно увидеть с закрытыми глазами?",
//     answer: "Сон",
//     hints: ["Это происходит каждую ночь", "Обычно это приятное состояние"],

//     askQuestion() {
//         let userAnswer = prompt(this.question);

//         if (userAnswer.toLowerCase() === this.answer.toLowerCase()) {
//             console.log("Поздравляю, вы правильно ответили!");
//         } else {
//             console.log("Вы проиграли...");

//             let hintChoice = prompt("Хотите подсказку? (да/нет)");
//             if (hintChoice.toLowerCase() === "да") {
//                 // let randomHintIndex = Math.floor(Math.random() * this.hints.length);
//                 let randomHintIndex = this.hints.pop();
//                 //   console.log("Подсказка: " + this.hints[randomHintIndex]);
//                 console.log("Подсказка: " + randomHintIndex);
//             }
//         }
//     },
// };

// riddles.askQuestion();

// второй вариант
// const riddles = {
//     question: "Зимой и летом одним цветом",
//     answer: "елка",
//     count: 0,
//     askQuestion: function (num) {
//         const result = prompt(this.question);
//         if (result === this.answer) {
//             console.log("Вы угадали");
//         } else if (this.count < num) {
//             console.log(`Первая буква - ${this.answer[this.count++]}`);
//             this.askQuestion();
//         } else {
//             console.log("Проиграли");
//         }
//     }
// }

// riddles.askQuestion(2);

// а вот можно задать количество попыток

// еще вариант 
// const riddles = {
//     question: "Мягкие лапки, в лапках цапцарапки",
//     answer: "кошка",
//     assists: 0,
//     askQuestion: function () {
//         let userAnswer = prompt(this.question);
//         if (this.answer === userAnswer) {
//             console.log("Вы угадали");
//         } else {
//             if (this.assists === 0) {
//                 this.assists += 1;
//                 alert("Это животное");
//                 riddles.askQuestion();
//             } else if (this.assists === 1) {
//                 this.assists += 1;
//                 alert("Это домашнее животное, мимимишное");
//                 riddles.askQuestion();
//             }
//             else {
//                 console.log("Вы проиграли");
//             }
//         }
//     }
// };

// console.log(riddles.askQuestion())