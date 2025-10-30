//1
let age = prompt("Enter your age:");
age = parseInt(age);

if (age >= 18) {
    console.log("You are old enough to drive.");
} else {
    let yearsLeft = 18 - age;
    console.log(`You are left with ${yearsLeft} years to drive.`);
}

//2
let myAge = 25;
let yourAge = prompt("Enter your age:");
yourAge = parseInt(yourAge);

if (yourAge > myAge) {
    console.log(`You are ${yourAge - myAge} years older than me.`);
} else if (yourAge < myAge) {
    console.log(`I am ${myAge - yourAge} years older than you.`);
} else {
    console.log("We are the same age.");
}

//3
let a = 4;
let b = 3;

if (a > b) {
    console.log(`${a} is greater than ${b}`);
} else {
    console.log(`${a} is less than ${b}`);
}

console.log(a > b ? `${a} is greater than ${b}` : `${a} is less than ${b}`);

//4
let number = prompt("Enter a number:");
number = parseInt(number);

if (number % 2 === 0) {
    console.log(`${number} is an even number`);
} else {
    console.log(`${number} is an odd number`);
}

//Level 2
//1
let score = prompt("Enter student's score:");
score = parseInt(score);

if (score >= 80 && score <= 100) {
    console.log("Grade: A");
} else if (score >= 70 && score <= 79) {
    console.log("Grade: B");
} else if (score >= 60 && score <= 69) {
    console.log("Grade: C");
} else if (score >= 50 && score <= 59) {
    console.log("Grade: D");
} else if (score >= 0 && score <= 49) {
    console.log("Grade: F");
} else {
    console.log("Invalid score");
}

//2
let month = prompt("Enter a month:").trim().toLowerCase();

if (["september", "october", "november"].includes(month)) {
    console.log("The season is Autumn.");
} else if (["december", "january", "february"].includes(month)) {
    console.log("The season is Winter.");
} else if (["march", "april", "may"].includes(month)) {
    console.log("The season is Spring.");
} else if (["june", "july", "august"].includes(month)) {
    console.log("The season is Summer.");
} else {
    console.log("Invalid month");
}

//3
let day = prompt("What is the day today?").trim().toLowerCase();

if (day === "saturday" || day === "sunday") {
    console.log(`${day.charAt(0).toUpperCase() + day.slice(1)} is a weekend.`);
} else if (["monday", "tuesday", "wednesday", "thursday", "friday"].includes(day)) {
    console.log(`${day.charAt(0).toUpperCase() + day.slice(1)} is a working day.`);
} else {
    console.log("Invalid day");
}

//Level 3
//1 (без високосного года)
let monthh = prompt("Enter a month:").trim().toLowerCase();

switch (monthh) {
    case "january":
    case "march":
    case "may":
    case "july":
    case "august":
    case "october":
    case "december":
        console.log(`${monthh.charAt(0).toUpperCase() + monthh.slice(1)} has 31 days.`);
        break;
    case "april":
    case "june":
    case "september":
    case "november":
        console.log(`${monthh.charAt(0).toUpperCase() + monthh.slice(1)} has 30 days.`);
        break;
    case "february":
        console.log(`${monthh.charAt(0).toUpperCase() + monthh.slice(1)} has 28 days.`);
        break;
    default:
        console.log("Invalid month");
}

//2 (с учётом високосного года)
let month2 = prompt("Enter a month:").trim().toLowerCase();
let year = parseInt(prompt("Enter a year:"));

let daysInMonth;

switch (month2) {
    case "january":
    case "march":
    case "may":
    case "july":
    case "august":
    case "october":
    case "december":
        daysInMonth = 31;
        break;
    case "april":
    case "june":
    case "september":
    case "november":
        daysInMonth = 30;
        break;
    case "february":
        // Проверка на високосный год
        if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
            daysInMonth = 29;
        } else {
            daysInMonth = 28;
        }
        break;
    default:
        console.log("Invalid month");
        break;
}

if (daysInMonth !== undefined) {
    console.log(`${month2.charAt(0).toUpperCase() + month2.slice(1)} has ${daysInMonth} days.`);
}