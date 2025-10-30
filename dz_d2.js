//1
let s = "30 Days of JavaScript";
//2
console.log(s);
//3
console.log(s.length);
//4
console.log(s.toUpperCase());
//5
console.log(s.toLowerCase());
//6
console.log(s.substring(0, 2)); 
//7
console.log(s.substring(0,3));
//8
console.log(s.includes("Script"));
//9
console.log(s.split()); 
//10
console.log(s.split(" "));
//11
let companies = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
console.log(companies.split(", "));
//12
console.log(s.replace("JavaScript", "Python"));
//13
console.log(s.charAt(15)); 
//14
console.log(s.charCodeAt(s.indexOf("J")));
//15
console.log(s.indexOf("a"));
//16
console.log(s.lastIndexOf("a"));
//17
let sentence = "You cannot end a sentence with because because because is a conjunction";
console.log(sentence.indexOf("because")); 
//18
console.log(sentence.lastIndexOf("because"));
//19
console.log(sentence.search("because")); 
//20
let withSpaces = " 30 Days Of JavaScript ";
console.log(withSpaces.trim());
// 21
console.log(s.startsWith("30"));
// 22
console.log(s.endsWith("Script"));
//23
console.log(s.match(/a/g));
//24
let part1 = "30 Days of";
let part2 = "JavaScript";
console.log(part1.concat(" ", part2));
//25
console.log(s.repeat(2));

//Level 2
//1
console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.");
//2
console.log("\"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.\"");
//3
console.log(typeof '10' === 10);
let num = Number('10');
console.log(typeof num === 'number' && num === 10);
//4
console.log(parseFloat('9.8') == 10);
console.log(Math.round(parseFloat('9.8')) == 10);
//5
let word1 = "python";
let word2 = "jargon";
console.log(word1.includes('on'));
console.log(word2.includes('on'));
//7
console.log(Math.floor(Math.random() * 101))
//8
console.log(Math.floor(Math.random() * 51) + 50)
//9
console.log(Math.floor(Math.random() * 256))
//10
let str = "JavaScript";
let randI = Math.floor(Math.random() * str.length);
console.log(str[randI]);
//11
console.log("1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125");

//Level 3
//1
const sentence1 = 'Love is the best thing in this world. Some found their love and some are still looking for their love.';
let countLove = sentence1.match(/love/gi) ? sentence1.match(/love/gi).length : 0;
console.log(countLove);
//2
const sentence2 = 'You cannot end a sentence with because because because is a conjunction';
let countBecause = sentence2.match(/because/g) ? sentence2.match(/because/g).length : 0;
console.log(countBecause);
//4
const sentence3 = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching';
let cleaned = sentence3.replace(/[^a-zA-Z\s']/g, ' ');
let words = cleaned.toLowerCase().split(/\s+/).filter(word => word.length > 0);

let wordCount = {};
words.forEach(word => {
    wordCount[word] = (wordCount[word] || 0) + 1;
});


let mostFrequentWord = '';
let maxCount = 0;

for (let word in wordCount) {
    if (wordCount[word] > maxCount) {
        maxCount = wordCount[word];
        mostFrequentWord = word;
    }
}

console.log(cleaned);
console.log(mostFrequentWord," — ",maxCount);
//4
const incomeText = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.';
let numbers = incomeText.match(/\d+/g).map(Number);
console.log(numbers[0] * 12) + numbers[1] + (numbers[2] * 12);
