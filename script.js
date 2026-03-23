// let count = 1;
// while (count < 10) {
//     console.log(count);
//     count++;
// }


let count = 1;

while (count < 10) {
    count++;
    if (count === 8) {
        continue; // Пропуск итерации, когда count становится 8
    }
    console.log(count);
}

console.log("Цикл завершен");

// let i = 1;
// do {
//     console.log(i);
//     i++;
//     while (i < 5);
// }

// let number;
// while (true) {
//     number = prompt("Введите число:");
//     if (number == 10) {
//         console.log("Вы ввели 10, цикл будет остановлен.");
//         break; // Выход из цикла, если число равно 10
//     }
// }

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// let i = 0;
// for (; ;) {
//     i++;
//     if (i > 100) {
//         break;
//     }
//     console.log(i);
// }
//6

// let numbers = [1, 2, 3, 4, 5];
// for (let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i]);
// }
// //7

// //while неизвестноеколичество итераций
// let password = "";
// while (password !== "12345") {
//     password = prompt("Введите пароль:");
// }
// // for известноеколичество итераций
// for (let i = 0; i < 5; i++) {
//     console.log(i);
// }

// //8
// for (let i = 0; i < 5; i--) {
//     console.log(i);
// }
// //9

// let number = prompt("Введите число до 10:");

// for (let i = 0; i < number; i++) {
//     if (i % 2 === 0) {
//         console.log(i);
//     }
// }
// //10