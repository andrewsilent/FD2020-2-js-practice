"use strict";

//минимальное значение
const showMin = function showMin() {
  if (!isNaN) {
    let min = arguments[0];
    for (let i = 0; i < arguments.length; i++) {
      if (arguments[i] < min) {
        min = arguments[i];
      }
    }
    return min;
  }
  return;
}

// максимальное значение
const showMax = function showMax() {
  if (!isNaN) {
    let max = arguments[0];
    for (let i = 0; i < arguments.length; i++) {
      if (arguments[i] > max) {
        max = arguments[i];
      }
    }
    return max;
  }
  return;
}


// среднее арифметическое
const someArray = [12, 15, 20, 25, 59, 79];
const showMiddleValue = function showMiddleValue(someArray) {
  let result = 0;
  for (let i = 0; i < someArray.length; i++) {
    result += someArray[i];
  }
  return result /= someArray.length;
}


// случайное число от 0 до 100
const randomValue = function randomValue() {
  return Math.ceil(Math.random() * 100);
}
console.log(randomValue());


// массив из 10 случайных чисел
const randomArray = [];
for (let i = 0; i < 10; i++) {
  randomArray.push(randomValue());
}
console.log(randomArray);


// задачи по масивам
// concat
const myArr1 = [1, 2, 3];
const myArr2 = [3, 4, 5];
const myArr3 = myArr1.concat(myArr2);
console.log(myArr3);

// reverse
const myArr4 = [1, 2, 3];
myArr4.reverse();
console.log(myArr4);

// push
const myArr5 = [1, 2, 3];
myArr5.push(4, 5, 6);
console.log(myArr5);
// unshift
const myArr6 = [1, 2, 3];
myArr6.unshift(4, 5, 6);
console.log(myArr6);

// shift
const myArr7 = ['js', 'css', 'jq'];
console.log(myArr7[0]);
myArr7.shift();
// pop
const myArr8 = ['js', 'css', 'jq'];
console.log(myArr8[myArr8.length - 1]);
myArr8.pop();

// slice
const myArr9 = [1, 2, 3, 4, 5];
const myArr10 = myArr9.slice(0, 3);
console.log(myArr10);

const myArr11 = myArr9.slice(-2);
console.log(myArr11);

// splice - в отличии от слайса этот метод мутирует массив
const myArr12 = [1, 2, 3, 4, 5];
const myArr13 = myArr12.splice(1, 2);
console.log(myArr12);

const myArr14 = [1, 2, 3, 4, 5];
const myArr15 = myArr14.splice(1, 3);
console.log(myArr15);

const myArr16 = [1, 2, 3, 4, 5];
myArr16.splice(3, 0, 'a', 'b', 'c');
console.log(myArr16);

const myArr17 = [1, 2, 3, 4, 5];
myArr17.splice(1, 0, 'a', 'b');
myArr17.splice(6, 0, 'c');
myArr17.splice(8, 0, 'e');
// myArr17.splice(1, 0, 'a', 'b').splice(6, 0, 'c').splice(8,0,'e')  - так не работает, а было бы круто (((
// а не работает оно потому что возвращаемое значение - новый массив с вырезанными элементами. если бы возвращался исходный массив, мутированный, то оно бы работало
console.log(myArr17);

// sort
const myArr18 = [3, 4, 1, 2, 7];
myArr18.sort();
console.log(myArr18);

// object.keys
const myObj1 = { js: 'test', jq: 'hello', css: 'world' };
const myArr19 = Object.keys(myObj1);
console.log(myArr19);



// hasElem (array, string)
function hasElem(arr, str) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === str) return true;
  }
}
// если находит совпадения, вернёт true. если не находит - то undefined
const arr1 = ['a', 'b', 'c', 'd', 'e', 'ab', 'bc', 'cd', 'de', 'abc', 'bcd', 'cde'];
console.log(hasElem(arr1, 'cd'));

// благодаря строгому сравнению, мы можем пользоваться функцией hasElem как для строк, так и для чисел
const arr2 = [1, 2, 3, 4, 5, 7, 2, 8, 9];
console.log(hasElem(arr2, 11));



// найти два одинаковых числа подряд
function hasEqualNeighbors(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === arr[i - 1]) return true;
  }
}
// если находит совпадения, вернёт true. если не находит - то undefined
console.log(hasEqualNeighbors(arr2));