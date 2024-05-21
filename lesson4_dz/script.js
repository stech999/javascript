console.log('Урок 8. Семинар.Циклы и массивы',
    '\nЗадание 1',
    '\nНеобходимо с помощью цикла for вывести следующие 11 строк в консоль: ',
    '\n0 – это ноль',
    '\n1 – нечетное число',
    '\n2 – четное число',
    '\n3 – нечетное число',
    '\n10 – четное число');
console.log('Решение:');
for (let i = 0; i <= 11; i++) {
    if (i % 2) {
        console.log(`${i} - нечетное число`);
    } else {
        console.log(`${i} - четное число`);
    }
}

console.log('-------------------');
console.log('Задание 2\n',
    'Дан массив[1, 2, 3, 4, 5, 6, 7]\n',
    'Сделайте из этого массива следующий[1, 2, 3, 6, 7]');
console.log('Решение:');

let mainmassive = [1, 2, 3, 4, 5, 6, 7],
    removeindex = [3, 4];
for (let j = removeindex.length - 1; j >= 0; j--) {
    mainmassive.splice(removeindex[j], 1);
}
console.log(mainmassive);

console.log('-------------------');
console.log('Задание 3\n',
    'Используя Math.random() вам необходимо генерировать цифры от 0 до 9, и создать массив состоящий из 5 таких элементов\n',
    '1. Рассчитать сумму элементов этого массива\n',
    '2. Найти минимальное число\n',
    '3. Найти есть ли в этом массиве число 3');
console.log('Решение:');

const arr = [];
for (let i = 0; i < 5; i++) {
    arr.push(Math.floor(Math.random() * (9 - 0) + 1));
}
console.log(`Рандомные цифры: ${arr}`);
let summArr = 0;
arr.forEach(el => {
    summArr += el;
    let countNumber = 0;
    if (el == 3) {
        countNumber++;
        console.log(`В этом массиве имеется цифра ${el} повторяется раз: ${countNumber}`);
    }
});
console.log(`Сумма элемнтов: ${summArr}`);

console.log('-------------------');
console.log('    * Необязательное задание. *\n',
    'Необходимо вывести горку в консоль(используя цикл for)\n',
    'как показано на рисунке, только у вашей горки должно быть 20 рядов, а не 5:\n',
    'x\n',
    'xx\n',
    'xxx\n',
    'xxxx\n',
    'xxxxx');
console.log('Решение:');
for (let k = 0; k < 5; k++) {
    console.log('\n');
    for (let l = 0; l <= k; l++) {
        console.log('x');
    }
}