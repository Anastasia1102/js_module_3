// Ось кілька задач для практики з ітерацією по масиву за допомогою циклу for для початківців:

// Задача 1 (легка)

// Напишіть функцію printArray, яка приймає масив arr і виводить кожен елемент масиву у консолі. Використайте цикл for.

function printArray(arr) {
  for (let index = 0; index < arr.length; index++) {
    console.log(arr[index]);
  }
}

printArray([1, 2, 3, 4, 5]);
// Вивід:
// 1
// 2
// 3
// 4
// 5
console.log("\n");

// Задача 2 (легка)

// Створіть функцію sumArray, яка приймає масив чисел arr і повертає суму всіх чисел у масиві. Використайте цикл for.

function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

console.log(sumArray([1, 2, 3, 4])); // 10
console.log(sumArray([10, -5, 5])); // 10

console.log("\n");

// Задача 3 (середня)

// Напишіть функцію findMax, яка приймає масив чисел arr і повертає найбільше число в масиві. Використайте цикл for.

function findMax(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

console.log(findMax([1, 2, 3, 4, 5])); // 5
console.log(findMax([10, -5, 20, 3])); // 20
console.log(findMax([-1, -5, -10])); // -1

console.log("\n");

// Задача 4 (середня)

// Створіть функцію filterPositive, яка приймає масив чисел arr і повертає новий масив, що містить тільки позитивні числа з arr. Використайте цикл for.

function filterPositive(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

console.log(filterPositive([1, -2, 3, -4, 5])); // [1, 3, 5]
console.log(filterPositive([-10, -5, 0, 5, 10])); // [5, 10]

console.log("\n");

// Задача 5 (складна)

// Напишіть функцію reverseArray, яка приймає масив arr і повертає новий масив з елементами в зворотному порядку. Використайте цикл for для побудови нового масиву.

function reverseArray(arr) {
  let newArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    newArr.push(arr[i]);
  }
  return newArr;
}

console.log(reverseArray([1, 2, 3, 4, 5])); // [5, 4, 3, 2, 1]
console.log(reverseArray(["a", "b", "c"])); // ["c", "b", "a"]

console.log("\n");

// Задача 6 (складна)

// Створіть функцію countOccurrences, яка приймає масив arr і значення item. Функція повинна повернути кількість разів, коли item з’являється в arr. Використайте цикл for.

function countOccurrences(arr, item) {
  let count = 0;
  for (let index = 0; index < arr.length; index++) {
    if (arr[index] === item) {
      count++;
    }
  }
  return count;
}

console.log(countOccurrences([1, 2, 3, 2, 4, 2], 2)); // 3
console.log(countOccurrences(["apple", "banana", "apple"], "apple")); // 2
console.log(countOccurrences([true, false, true], true)); // 2

console.log("\n");
console.log("\n");
console.log("\n");

// Ці задачі допоможуть вам освоїти ітерацію по масиву за допомогою циклу for, а також навчитися виконувати різні операції з елементами масиву.
