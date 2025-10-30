const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

const countries = [
  'Afghanistan',
  'Albania',
  'Algeria',
  'Andorra',
  'Angola',
  'Antigua and Barbuda',
  'Argentina',
  'Armenia',
  'Australia',
  'Austria',
  'Azerbaijan',
  'Bahamas',
  'Bahrain',
  'Bangladesh',
  'Barbados',
  'Belarus',
  'Belgium',
  'Belize',
  'Benin',
  'Bhutan',
  'Bolivia',
  'Bosnia and Herzegovina',
  'Botswana',
  'Brazil',
  'Brunei',
  'Bulgaria',
  'Burkina Faso',
  'Burundi',
  'Cambodia',
  'Cameroon',
  'Canada',
  'Cape Verde',
  'Central African Republic',
  'Chad',
  'Chile',
  'China',
  'Colombi',
  'Comoros',
  'Congo (Brazzaville)',
  'Congo',
  'Costa Rica',
  "Cote d'Ivoire",
  'Croatia',
  'Cuba',
  'Cyprus',
  'Czech Republic',
  'Denmark',
  'Djibouti',
  'Dominica',
  'Dominican Republic',
  'East Timor (Timor Timur)',
  'Ecuador',
  'Egypt',
  'El Salvador',
  'Equatorial Guinea',
  'Eritrea',
  'Estonia',
  'Ethiopia',
  'Fiji',
  'Finland',
  'France',
  'Gabon',
  'Gambia, The',
  'Georgia',
  'Germany',
  'Ghana',
  'Greece',
  'Grenada',
  'Guatemala',
  'Guinea',
  'Guinea-Bissau',
  'Guyana',
  'Haiti',
  'Honduras',
  'Hungary',
  'Iceland',
  'India',
  'Indonesia',
  'Iran',
  'Iraq',
  'Ireland',
  'Israel',
  'Italy',
  'Jamaica',
  'Japan',
  'Jordan',
  'Kazakhstan',
  'Kenya',
  'Kiribati',
  'Korea, North',
  'Korea, South',
  'Kuwait',
  'Kyrgyzstan',
  'Laos',
  'Latvia',
  'Lebanon',
  'Lesotho',
  'Liberia',
  'Libya',
  'Liechtenstein',
  'Lithuania',
  'Luxembourg',
  'Macedonia',
  'Madagascar',
  'Malawi',
  'Malaysia',
  'Maldives',
  'Mali',
  'Malta',
  'Marshall Islands',
  'Mauritania',
  'Mauritius',
  'Mexico',
  'Micronesia',
  'Moldova',
  'Monaco',
  'Mongolia',
  'Morocco',
  'Mozambique',
  'Myanmar',
  'Namibia',
  'Nauru',
  'Nepal',
  'Netherlands',
  'New Zealand',
  'Nicaragua',
  'Niger',
  'Nigeria',
  'Norway',
  'Oman',
  'Pakistan',
  'Palau',
  'Panama',
  'Papua New Guinea',
  'Paraguay',
  'Peru',
  'Philippines',
  'Poland',
  'Portugal',
  'Qatar',
  'Romania',
  'Russia',
  'Rwanda',
  'Saint Kitts and Nevis',
  'Saint Lucia',
  'Saint Vincent',
  'Samoa',
  'San Marino',
  'Sao Tome and Principe',
  'Saudi Arabia',
  'Senegal',
  'Serbia and Montenegro',
  'Seychelles',
  'Sierra Leone',
  'Singapore',
  'Slovakia',
  'Slovenia',
  'Solomon Islands',
  'Somalia',
  'South Africa',
  'Spain',
  'Sri Lanka',
  'Sudan',
  'Suriname',
  'Swaziland',
  'Sweden',
  'Switzerland',
  'Syria',
  'Taiwan',
  'Tajikistan',
  'Tanzania',
  'Thailand',
  'Togo',
  'Tonga',
  'Trinidad and Tobago',
  'Tunisia',
  'Turkey',
  'Turkmenistan',
  'Tuvalu',
  'Uganda',
  'Ukraine',
  'United Arab Emirates',
  'United Kingdom',
  'United States',
  'Uruguay',
  'Uzbekistan',
  'Vanuatu',
  'Vatican City',
  'Venezuela',
  'Vietnam',
  'Yemen',
  'Zambia',
  'Zimbabwe'
]

// 1
ages.sort((a, b) => a - b);
console.log("Sorted ages:", ages);

const minAge = ages[0];
const maxAge = ages[ages.length - 1];
console.log("Min age:", minAge);
console.log("Max age:", maxAge);

// 2
let medianAge;
const len = ages.length;
if (len % 2 === 0) {
    medianAge = (ages[len / 2 - 1] + ages[len / 2]) / 2;
} else {
    medianAge = ages[Math.floor(len / 2)];
}
console.log("Median age:", medianAge);

// 3
const sum = ages.reduce((acc, age) => acc + age, 0);
const averageAge = sum / ages.length;
console.log("Average age:", averageAge);

// 4
const range = maxAge - minAge;
console.log("Range of ages:", range);

// 5
const diffMinAvg = Math.abs(minAge - averageAge);
const diffMaxAvg = Math.abs(maxAge - averageAge);
console.log("|min - average|:", diffMinAvg);
console.log("|max - average|:", diffMaxAvg);

// 6
const firstTenCountries = countries.slice(0, 10);
console.log("First 10 countries:", firstTenCountries);

// 7
const midIndex = Math.floor(countries.length / 2);
let middleCountries;
if (countries.length % 2 === 0) {
    middleCountries = [countries[midIndex - 1], countries[midIndex]];
} else {
    middleCountries = [countries[midIndex]];
}
console.log("Middle country(ies):", middleCountries);

// 8
let firstHalf, secondHalf;
if (countries.length % 2 === 0) {
    firstHalf = countries.slice(0, countries.length / 2);
    secondHalf = countries.slice(countries.length / 2);
} else {
    firstHalf = countries.slice(0, Math.ceil(countries.length / 2));
    secondHalf = countries.slice(Math.ceil(countries.length / 2));
}
console.log("First half:", firstHalf);
console.log("Second half:", secondHalf);