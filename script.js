"use strict";

//минимальное значение
const showMin = function showMin() {
  if(!isNaN){
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
  if(!isNaN){
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
const randomValue = function randomValue(){
  return Math.ceil(Math.random()*100);
}
console.log(randomValue());


// массив из 10 случайных чисел
const randomArray = [];
for (let i=0; i<10; i++) {
  randomArray.push(randomValue());
}
console.log(randomArray);


// задачи по масивам
const myArr1 = [1, 2, 3];
const myArr2 = [3, 4, 5];
const myArr3 = myArr1.concat(myArr2);
console.log(myArr3);

const myArr4 = [1, 2, 3];
myArr4.reverse();
console.log(myArr4);

const myArr5 = [1, 2, 3];
myArr5.push(4, 5, 6);
console.log(myArr5);
const myArr6 = [1, 2, 3];
myArr6.unshift(4, 5, 6);
console.log(myArr6);

const myArr7 =  ['js', 'css', 'jq'];
console.log(myArr7[0]);
myArr7.shift();
const myArr8 =  ['js', 'css', 'jq'];
console.log(myArr8[myArr8.length-1]);
myArr8.pop();