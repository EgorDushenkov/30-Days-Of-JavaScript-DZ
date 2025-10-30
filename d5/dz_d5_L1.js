//1
let emptyArray = [];

//2
let arrayWithMoreThan5 = [1, 2, 3, 4, 5, 6];

//3
console.log("Length of arrayWithMoreThan5:", arrayWithMoreThan5.length);

//4
let firstItem = arrayWithMoreThan5[0];
let middleItem = arrayWithMoreThan5[Math.floor(arrayWithMoreThan5.length / 2)];
let lastItem = arrayWithMoreThan5[arrayWithMoreThan5.length - 1];

console.log("First item:", firstItem);
console.log("Middle item:", middleItem);
console.log("Last item:", lastItem);

//5
let mixedDataTypes = [1, "hello", true, null, undefined, {name: "John"}, [1,2]];
console.log("Length of mixedDataTypes:", mixedDataTypes.length);

//6
let itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];

//7
console.log(itCompanies);

//8
console.log("Number of companies:", itCompanies.length);

//9
let firstCompany = itCompanies[0];
let middleCompany = itCompanies[Math.floor(itCompanies.length / 2)];
let lastCompany = itCompanies[itCompanies.length - 1];

console.log("First company:", firstCompany);
console.log("Middle company:", middleCompany);
console.log("Last company:", lastCompany);

//10
console.log("Each company:");
itCompanies.forEach(company => console.log(company));

//11
console.log("Each company in uppercase:");
itCompanies.forEach(company => console.log(company.toUpperCase()));

//12
console.log(`${itCompanies.join(", ")} are big IT companies.`);

//13
let searchCompany = "Google";
let index = itCompanies.indexOf(searchCompany);
if (index !== -1) {
    console.log(searchCompany);
} else {
    console.log("A company is not found");
}

//14
console.log("Companies with more than one 'o':");
for (let i = 0; i < itCompanies.length; i++) {
    if ((itCompanies[i].match(/o/g) || []).length > 1) {
        console.log(itCompanies[i]);
    }
}

//15
itCompanies.sort();
console.log("Sorted array:", itCompanies);

//16
itCompanies.reverse();
console.log("Reversed array:", itCompanies);

//17
let firstThree = itCompanies.slice(0, 3);
console.log("First 3 companies:", firstThree);

//18
let lastThree = itCompanies.slice(-3);
console.log("Last 3 companies:", lastThree);

//19
let middleIndex = Math.floor(itCompanies.length / 2);
let middleCompanySlice = itCompanies.slice(middleIndex, middleIndex + 1);
console.log("Middle company:", middleCompanySlice);

//20
itCompanies.shift();
console.log("After removing first company:", itCompanies);

//21
let middleIndex2 = Math.floor(itCompanies.length / 2);
itCompanies.splice(middleIndex2, 1);
console.log("After removing middle company:", itCompanies);

//22
itCompanies.pop();
console.log("After removing last company:", itCompanies);

//23
itCompanies = [];
console.log("All IT companies removed:", itCompanies);