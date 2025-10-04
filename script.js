const str = "JavaScript is AWESOME";
console.log(str.toUpperCase());

const date = "2024-07-30";
console.log(`Год: ${date.slice(0, 4)} /Месяц: ${date.slice(5, 7)} /День: ${date.slice(-2)}`);

const like = "Я люблю JavaScript!. Я люблю это дело";
console.log(like.replace("JavaScript", "программирование").replaceAll("люблю", "обожаю"));

const fruit = "яблоки,груши,виноград";
console.log(fruit.toUpperCase().replaceAll(",", "|"));

const mail = "example@mail.com";
console.log(mail.endsWith(".com")&&mail.includes("@"));

const bankCard = "1234567812345678";
const firstCard = bankCard.slice(0, 4);
const ghostCard = bankCard.slice(4, -4).replace(/[0-9]/g, "*");
const endCard = bankCard.slice(-4);
console.log(firstCard + ghostCard + endCard);

const hello = "Hello World!";
console.log(`Длина строки: ${hello.length}, Первый символ: ${hello.charAt(0)}, Последний символ: ${hello.charAt(11)}`);