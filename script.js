const age = prompt("Сколько вам лет?", '');
if (age < 18) {
  alert("Доступ запрещен");
} else {
  alert("Доступ разрешен");
}

const evenNumber = prompt("Введите число", '');
if (evenNumber % 2 === 0) {
  console.log("Число четное");
} else {
  console.log("Число нечетное");
}

const firstNumber = prompt("Введите первое число", '');
const secondNumber = prompt("Введите второе число", '');
const operator = prompt("Введите арифметическое действие", '+, -, *, /');
let result;
switch (operator) {
  case '+':
    result = Number(firstNumber) + Number(secondNumber);
    break;
  case '-':
    result = firstNumber - secondNumber;
    break;
  case '*':
    result = firstNumber * secondNumber;
    break;
  case '/':
    result = firstNumber / secondNumber;
    break;
  default:
    alert("Ошибка: неверный оператор");
    result = null;
}
alert(`ваш результат ${result}`);

const str = prompt("Введи любое слово", '');
if (str.length > 10) {
  const firstFive = str.slice(0, 5);
  const remainder = "*".repeat(str.length - 5);
  console.log (firstFive + remainder);
} else {
  console.log (str.toUpperCase());
}

const time = prompt("Какой сейчас час?", 'число от 0 до 23');
if (time >= 0 && time <= 5) {
  alert("Ночь");
} else if (time >= 6 && time <= 11) {
  alert("Утро");
} else if (time >= 12 && time <= 17) {
  alert("День");
} else if (time >= 18 && time <= 23) {
  alert("Вечер");
} else {
  alert("Не могу определить время суток");
}

const mail = prompt("Напишите ваш e-mail", '');
if (mail.includes("@")&&mail.includes(".")) {
  alert("Верный формат");
} else {
  alert("Ошибка!");
}

const word = prompt("Введите слово:");
const normalized = word.toLowerCase();
const reversed = normalized.split('').reverse().join('');
if (normalized === reversed) {
  console.log(true);
} else {
  console.log(false); 
}