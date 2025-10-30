//1
let firstName = "Egor";
let lastName = "Dushenkov";
let country = "Russia";
let city = "Omsk";
let age = 16;
let isMarried = false;
let year = 2025;

console.log(typeof firstName);
console.log(typeof lastName);
console.log(typeof country);
console.log(typeof city);
console.log(typeof age);
console.log(typeof isMarried);
console.log(typeof year);
//2
console.log(typeof '10' === 10);
//3
console.log(parseInt('9.8') === 10);
//4
console.log(5 > 3);
console.log("hello".length > 0);
console.log(true && !false);

console.log(5 < 3);
console.log("" === " ");
console.log(false || false);
//5
// i. 4 > 3 → true
// ii. 4 >= 3 → true
// iii. 4 < 3 → false
// iv. 4 <= 3 → false
// v. 4 == 4 → true
// vi. 4 === 4 → true
// vii. 4 != 4 → false
// viii. 4 !== 4 → false
// ix. 4 != '4' → false
// x. 4 == '4' → true
// xi. 4 === '4' → false
// xii. Длина "python" = 6, "jargon" = 6 → 6 === 6 → true, но нужно ложное сравнение: → 6 !== 6 → false
console.log(4 > 3);
console.log(4 >= 3);
console.log(4 < 3);
console.log(4 <= 3);
console.log(4 == 4);
console.log(4 === 4);
console.log(4 != 4);
console.log(4 !== 4);
console.log(4 != '4');
console.log(4 == '4');
console.log(4 === '4');
console.log("python".length !== "jargon".length);

//6
// i. 4 > 3 && 10 < 12 → true
// ii. 4 > 3 && 10 > 12 → false
// iii. 4 > 3 || 10 < 12 → true
// iv. 4 > 3 || 10 > 12 → true
// v. !(4 > 3) → false
// vi. !(4 < 3) → true
// vii. !(false) → true
// viii. !(4 > 3 && 10 < 12) → false
// ix. !(4 > 3 && 10 > 12) → true
// x. !(4 === '4') → true
// xi. !("dragon".includes('on') && "python".includes('on')) → false
console.log(4 > 3 && 10 < 12);
console.log(4 > 3 && 10 > 12);
console.log(4 > 3 || 10 < 12);
console.log(4 > 3 || 10 > 12);
console.log(!(4 > 3));
console.log(!(4 < 3));
console.log(!(false));
console.log(!(4 > 3 && 10 < 12));
console.log(!(4 > 3 && 10 > 12));
console.log(!(4 === '4'));
console.log(!("dragon".includes('on') && "python".includes('on')));

//7
let now = new Date();
console.log(now.getFullYear());
console.log(now.getMonth());
console.log(now.getDate());
console.log(now.getDate());
console.log(now.getHours());
console.log(now.getMinutes());
console.log(Math.floor(now.getTime() / 1000));

//Level 2
//1
let base = parseFloat(prompt("Enter base:"));
let height = parseFloat(prompt("Enter height:"));
let area = 0.5 * base * height;
alert(`The area of the triangle is ${area}`);