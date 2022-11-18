const xhr = new XMLHttpRequest();

xhr.open("GET", "https://restcountries.com/v2/all");
xhr.send();

xhr.onload = function () {
  let data = JSON.parse(xhr.response);
  console.log(data); // output -> An array of all the 250 countries
};

// ------------------------------ Task 1 ----------------------------------
// Get all the countries from the Asia continent /region using the Filter function

const xhr1 = new XMLHttpRequest();

xhr1.open("GET", "https://restcountries.com/v2/all");
xhr1.send();

xhr1.onload = function () {
  let data = JSON.parse(xhr1.response);
  let asianCountries = data.filter((country) => country.region === "Asia");
  console.log(asianCountries); // output -> All 50 Asian countries in an array
};

// output ->
// (50) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
// 0
// :
// {name: 'Afghanistan', topLevelDomain: Array(1), alpha2Code: 'AF', alpha3Code: 'AFG', callingCodes: Array(1), …}
// 1
// :
// {name: 'Armenia', topLevelDomain: Array(1), alpha2Code: 'AM', alpha3Code: 'ARM', callingCodes: Array(1), …}
// 2
// :
// {name: 'Azerbaijan', topLevelDomain: Array(1), alpha2Code: 'AZ', alpha3Code: 'AZE', callingCodes: Array(1), …}
// 3
// :
// {name: 'Bahrain', topLevelDomain: Array(1), alpha2Code: 'BH', alpha3Code: 'BHR', callingCodes: Array(1), …}
// 4
// :
// {name: 'Bangladesh', topLevelDomain: Array(1), alpha2Code: 'BD', alpha3Code: 'BGD', callingCodes: Array(1), …}
// 5
// :
// {name: 'Bhutan', topLevelDomain: Array(1), alpha2Code: 'BT', alpha3Code: 'BTN', callingCodes: Array(1), …}
// 6
// :
// {name: 'Brunei Darussalam', topLevelDomain: Array(1), alpha2Code: 'BN', alpha3Code: 'BRN', callingCodes: Array(1), …}
// 7
// :
// {name: 'Cambodia', topLevelDomain: Array(1), alpha2Code: 'KH', alpha3Code: 'KHM', callingCodes: Array(1), …}
// 8
// :
// {name: 'China', topLevelDomain: Array(1), alpha2Code: 'CN', alpha3Code: 'CHN', callingCodes: Array(1), …}
// 9
// :
// {name: 'Georgia', topLevelDomain: Array(1), alpha2Code: 'GE', alpha3Code: 'GEO', callingCodes: Array(1), …}
// 10
// :
// {name: 'Hong Kong', topLevelDomain: Array(1), alpha2Code: 'HK', alpha3Code: 'HKG', callingCodes: Array(1), …}
// 11
// :
// {name: 'India', topLevelDomain: Array(1), alpha2Code: 'IN', alpha3Code: 'IND', callingCodes: Array(1), …}
// 12
// :
// {name: 'Indonesia', topLevelDomain: Array(1), alpha2Code: 'ID', alpha3Code: 'IDN', callingCodes: Array(1), …}
// 13
// :
// {name: 'Iran (Islamic Republic of)', topLevelDomain: Array(1), alpha2Code: 'IR', alpha3Code: 'IRN', callingCodes: Array(1), …}
// 14
// :
// {name: 'Iraq', topLevelDomain: Array(1), alpha2Code: 'IQ', alpha3Code: 'IRQ', callingCodes: Array(1), …}
// 15
// :
// {name: 'Israel', topLevelDomain: Array(1), alpha2Code: 'IL', alpha3Code: 'ISR', callingCodes: Array(1), …}
// 16
// :
// {name: 'Japan', topLevelDomain: Array(1), alpha2Code: 'JP', alpha3Code: 'JPN', callingCodes: Array(1), …}
// 17
// :
// {name: 'Jordan', topLevelDomain: Array(1), alpha2Code: 'JO', alpha3Code: 'JOR', callingCodes: Array(1), …}
// 18
// :
// {name: 'Kazakhstan', topLevelDomain: Array(2), alpha2Code: 'KZ', alpha3Code: 'KAZ', callingCodes: Array(2), …}
// 19
// :
// {name: 'Kuwait', topLevelDomain: Array(1), alpha2Code: 'KW', alpha3Code: 'KWT', callingCodes: Array(1), …}
// 20
// :
// {name: 'Kyrgyzstan', topLevelDomain: Array(1), alpha2Code: 'KG', alpha3Code: 'KGZ', callingCodes: Array(1), …}
// 21
// :
// {name: "Lao People's Democratic Republic", topLevelDomain: Array(1), alpha2Code: 'LA', alpha3Code: 'LAO', callingCodes: Array(1), …}
// 22
// :
// {name: 'Lebanon', topLevelDomain: Array(1), alpha2Code: 'LB', alpha3Code: 'LBN', callingCodes: Array(1), …}
// 23
// :
// {name: 'Macao', topLevelDomain: Array(1), alpha2Code: 'MO', alpha3Code: 'MAC', callingCodes: Array(1), …}
// 24
// :
// {name: 'Malaysia', topLevelDomain: Array(1), alpha2Code: 'MY', alpha3Code: 'MYS', callingCodes: Array(1), …}
// 25
// :
// {name: 'Maldives', topLevelDomain: Array(1), alpha2Code: 'MV', alpha3Code: 'MDV', callingCodes: Array(1), …}
// 26
// :
// {name: 'Mongolia', topLevelDomain: Array(1), alpha2Code: 'MN', alpha3Code: 'MNG', callingCodes: Array(1), …}
// 27
// :
// {name: 'Myanmar', topLevelDomain: Array(1), alpha2Code: 'MM', alpha3Code: 'MMR', callingCodes: Array(1), …}
// 28
// :
// {name: 'Nepal', topLevelDomain: Array(1), alpha2Code: 'NP', alpha3Code: 'NPL', callingCodes: Array(1), …}
// 29
// :
// {name: "Korea (Democratic People's Republic of)", topLevelDomain: Array(1), alpha2Code: 'KP', alpha3Code: 'PRK', callingCodes: Array(1), …}
// 30
// :
// {name: 'Oman', topLevelDomain: Array(1), alpha2Code: 'OM', alpha3Code: 'OMN', callingCodes: Array(1), …}
// 31
// :
// {name: 'Pakistan', topLevelDomain: Array(1), alpha2Code: 'PK', alpha3Code: 'PAK', callingCodes: Array(1), …}
// 32
// :
// {name: 'Palestine, State of', topLevelDomain: Array(1), alpha2Code: 'PS', alpha3Code: 'PSE', callingCodes: Array(1), …}
// 33
// :
// {name: 'Philippines', topLevelDomain: Array(1), alpha2Code: 'PH', alpha3Code: 'PHL', callingCodes: Array(1), …}
// 34
// :
// {name: 'Qatar', topLevelDomain: Array(1), alpha2Code: 'QA', alpha3Code: 'QAT', callingCodes: Array(1), …}
// 35
// :
// {name: 'Saudi Arabia', topLevelDomain: Array(1), alpha2Code: 'SA', alpha3Code: 'SAU', callingCodes: Array(1), …}
// 36
// :
// {name: 'Singapore', topLevelDomain: Array(1), alpha2Code: 'SG', alpha3Code: 'SGP', callingCodes: Array(1), …}
// 37
// :
// {name: 'Korea (Republic of)', topLevelDomain: Array(1), alpha2Code: 'KR', alpha3Code: 'KOR', callingCodes: Array(1), …}
// 38
// :
// {name: 'Sri Lanka', topLevelDomain: Array(1), alpha2Code: 'LK', alpha3Code: 'LKA', callingCodes: Array(1), …}
// 39
// :
// {name: 'Syrian Arab Republic', topLevelDomain: Array(1), alpha2Code: 'SY', alpha3Code: 'SYR', callingCodes: Array(1), …}
// 40
// :
// {name: 'Taiwan', topLevelDomain: Array(1), alpha2Code: 'TW', alpha3Code: 'TWN', callingCodes: Array(1), …}
// 41
// :
// {name: 'Tajikistan', topLevelDomain: Array(1), alpha2Code: 'TJ', alpha3Code: 'TJK', callingCodes: Array(1), …}
// 42
// :
// {name: 'Thailand', topLevelDomain: Array(1), alpha2Code: 'TH', alpha3Code: 'THA', callingCodes: Array(1), …}
// 43
// :
// {name: 'Timor-Leste', topLevelDomain: Array(1), alpha2Code: 'TL', alpha3Code: 'TLS', callingCodes: Array(1), …}
// 44
// :
// {name: 'Turkey', topLevelDomain: Array(1), alpha2Code: 'TR', alpha3Code: 'TUR', callingCodes: Array(1), …}
// 45
// :
// {name: 'Turkmenistan', topLevelDomain: Array(1), alpha2Code: 'TM', alpha3Code: 'TKM', callingCodes: Array(1), …}
// 46
// :
// {name: 'United Arab Emirates', topLevelDomain: Array(1), alpha2Code: 'AE', alpha3Code: 'ARE', callingCodes: Array(1), …}
// 47
// :
// {name: 'Uzbekistan', topLevelDomain: Array(1), alpha2Code: 'UZ', alpha3Code: 'UZB', callingCodes: Array(1), …}
// 48
// :
// {name: 'Vietnam', topLevelDomain: Array(1), alpha2Code: 'VN', alpha3Code: 'VNM', callingCodes: Array(1), …}
// 49
// :
// {name: 'Yemen', topLevelDomain: Array(1), alpha2Code: 'YE', alpha3Code: 'YEM', callingCodes: Array(1), …}
// length
// :
// 50
// [[Prototype]]
// :
// Array(0)

// ------------------------------ Task 2 ----------------------------------
// Get all the countries with a population of less than 2 lakhs using Filter function

const xhr2 = new XMLHttpRequest();

xhr2.open("GET", "https://restcountries.com/v2/all");
xhr2.send();

xhr2.onload = function () {
  let data = JSON.parse(xhr2.response);
  let lessThanTwoLakhPopulation = data.filter(
    (country) => country.population < 200000
  );
  console.log(lessThanTwoLakhPopulation); // output -> All the 62 countries with population less than 2 lakh
};

// output ->
// (62) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
// 0
// :
// {name: 'Åland Islands', topLevelDomain: Array(1), alpha2Code: 'AX', alpha3Code: 'ALA', callingCodes: Array(1), …}
// 1
// :
// {name: 'American Samoa', topLevelDomain: Array(1), alpha2Code: 'AS', alpha3Code: 'ASM', callingCodes: Array(1), …}
// 2
// :
// {name: 'Andorra', topLevelDomain: Array(1), alpha2Code: 'AD', alpha3Code: 'AND', callingCodes: Array(1), …}
// 3
// :
// {name: 'Anguilla', topLevelDomain: Array(1), alpha2Code: 'AI', alpha3Code: 'AIA', callingCodes: Array(1), …}
// 4
// :
// {name: 'Antarctica', topLevelDomain: Array(1), alpha2Code: 'AQ', alpha3Code: 'ATA', callingCodes: Array(1), …}
// 5
// :
// {name: 'Antigua and Barbuda', topLevelDomain: Array(1), alpha2Code: 'AG', alpha3Code: 'ATG', callingCodes: Array(1), …}
// 6
// :
// {name: 'Aruba', topLevelDomain: Array(1), alpha2Code: 'AW', alpha3Code: 'ABW', callingCodes: Array(1), …}
// 7
// :
// {name: 'Bermuda', topLevelDomain: Array(1), alpha2Code: 'BM', alpha3Code: 'BMU', callingCodes: Array(1), …}
// 8
// :
// {name: 'Bonaire, Sint Eustatius and Saba', topLevelDomain: Array(2), alpha2Code: 'BQ', alpha3Code: 'BES', callingCodes: Array(1), …}
// 9
// :
// {name: 'Bouvet Island', topLevelDomain: Array(1), alpha2Code: 'BV', alpha3Code: 'BVT', callingCodes: Array(1), …}
// 10
// :
// {name: 'British Indian Ocean Territory', topLevelDomain: Array(1), alpha2Code: 'IO', alpha3Code: 'IOT', callingCodes: Array(1), …}
// 11
// :
// {name: 'United States Minor Outlying Islands', topLevelDomain: Array(1), alpha2Code: 'UM', alpha3Code: 'UMI', callingCodes: Array(1), …}
// 12
// :
// {name: 'Virgin Islands (British)', topLevelDomain: Array(1), alpha2Code: 'VG', alpha3Code: 'VGB', callingCodes: Array(1), …}
// 13
// :
// {name: 'Virgin Islands (U.S.)', topLevelDomain: Array(1), alpha2Code: 'VI', alpha3Code: 'VIR', callingCodes: Array(1), …}
// 14
// :
// {name: 'Cayman Islands', topLevelDomain: Array(1), alpha2Code: 'KY', alpha3Code: 'CYM', callingCodes: Array(1), …}
// 15
// :
// {name: 'Christmas Island', topLevelDomain: Array(1), alpha2Code: 'CX', alpha3Code: 'CXR', callingCodes: Array(1), …}
// 16
// :
// {name: 'Cocos (Keeling) Islands', topLevelDomain: Array(1), alpha2Code: 'CC', alpha3Code: 'CCK', callingCodes: Array(1), …}
// 17
// :
// {name: 'Cook Islands', topLevelDomain: Array(1), alpha2Code: 'CK', alpha3Code: 'COK', callingCodes: Array(1), …}
// 18
// :
// {name: 'Curaçao', topLevelDomain: Array(1), alpha2Code: 'CW', alpha3Code: 'CUW', callingCodes: Array(1), …}
// 19
// :
// {name: 'Dominica', topLevelDomain: Array(1), alpha2Code: 'DM', alpha3Code: 'DMA', callingCodes: Array(1), …}
// 20
// :
// {name: 'Falkland Islands (Malvinas)', topLevelDomain: Array(1), alpha2Code: 'FK', alpha3Code: 'FLK', callingCodes: Array(1), …}
// 21
// :
// {name: 'Faroe Islands', topLevelDomain: Array(1), alpha2Code: 'FO', alpha3Code: 'FRO', callingCodes: Array(1), …}
// 22
// :
// {name: 'French Southern Territories', topLevelDomain: Array(1), alpha2Code: 'TF', alpha3Code: 'ATF', callingCodes: Array(1), …}
// 23
// :
// {name: 'Gibraltar', topLevelDomain: Array(1), alpha2Code: 'GI', alpha3Code: 'GIB', callingCodes: Array(1), …}
// 24
// :
// {name: 'Greenland', topLevelDomain: Array(1), alpha2Code: 'GL', alpha3Code: 'GRL', callingCodes: Array(1), …}
// 25
// :
// {name: 'Grenada', topLevelDomain: Array(1), alpha2Code: 'GD', alpha3Code: 'GRD', callingCodes: Array(1), …}
// 26
// :
// {name: 'Guam', topLevelDomain: Array(1), alpha2Code: 'GU', alpha3Code: 'GUM', callingCodes: Array(1), …}
// 27
// :
// {name: 'Guernsey', topLevelDomain: Array(1), alpha2Code: 'GG', alpha3Code: 'GGY', callingCodes: Array(1), …}
// 28
// :
// {name: 'Heard Island and McDonald Islands', topLevelDomain: Array(2), alpha2Code: 'HM', alpha3Code: 'HMD', callingCodes: Array(1), …}
// 29
// :
// {name: 'Vatican City', topLevelDomain: Array(1), alpha2Code: 'VA', alpha3Code: 'VAT', callingCodes: Array(1), …}
// 30
// :
// {name: 'Isle of Man', topLevelDomain: Array(1), alpha2Code: 'IM', alpha3Code: 'IMN', callingCodes: Array(1), …}
// 31
// :
// {name: 'Jersey', topLevelDomain: Array(1), alpha2Code: 'JE', alpha3Code: 'JEY', callingCodes: Array(1), …}
// 32
// :
// {name: 'Kiribati', topLevelDomain: Array(1), alpha2Code: 'KI', alpha3Code: 'KIR', callingCodes: Array(1), …}
// 33
// :
// {name: 'Liechtenstein', topLevelDomain: Array(1), alpha2Code: 'LI', alpha3Code: 'LIE', callingCodes: Array(1), …}
// 34
// :
// {name: 'Marshall Islands', topLevelDomain: Array(1), alpha2Code: 'MH', alpha3Code: 'MHL', callingCodes: Array(1), …}
// 35
// :
// {name: 'Micronesia (Federated States of)', topLevelDomain: Array(1), alpha2Code: 'FM', alpha3Code: 'FSM', callingCodes: Array(1), …}
// 36
// :
// {name: 'Monaco', topLevelDomain: Array(1), alpha2Code: 'MC', alpha3Code: 'MCO', callingCodes: Array(1), …}
// 37
// :
// {name: 'Montserrat', topLevelDomain: Array(1), alpha2Code: 'MS', alpha3Code: 'MSR', callingCodes: Array(1), …}
// 38
// :
// {name: 'Nauru', topLevelDomain: Array(1), alpha2Code: 'NR', alpha3Code: 'NRU', callingCodes: Array(1), …}
// 39
// :
// {name: 'Niue', topLevelDomain: Array(1), alpha2Code: 'NU', alpha3Code: 'NIU', callingCodes: Array(1), …}
// 40
// :
// {name: 'Norfolk Island', topLevelDomain: Array(1), alpha2Code: 'NF', alpha3Code: 'NFK', callingCodes: Array(1), …}
// 41
// :
// {name: 'Northern Mariana Islands', topLevelDomain: Array(1), alpha2Code: 'MP', alpha3Code: 'MNP', callingCodes: Array(1), …}
// 42
// :
// {name: 'Palau', topLevelDomain: Array(1), alpha2Code: 'PW', alpha3Code: 'PLW', callingCodes: Array(1), …}
// 43
// :
// {name: 'Pitcairn', topLevelDomain: Array(1), alpha2Code: 'PN', alpha3Code: 'PCN', callingCodes: Array(1), …}
// 44
// :
// {name: 'Saint Barthélemy', topLevelDomain: Array(1), alpha2Code: 'BL', alpha3Code: 'BLM', callingCodes: Array(1), …}
// 45
// :
// {name: 'Saint Helena, Ascension and Tristan da Cunha', topLevelDomain: Array(1), alpha2Code: 'SH', alpha3Code: 'SHN', callingCodes: Array(1), …}
// 46
// :
// {name: 'Saint Kitts and Nevis', topLevelDomain: Array(1), alpha2Code: 'KN', alpha3Code: 'KNA', callingCodes: Array(1), …}
// 47
// :
// {name: 'Saint Lucia', topLevelDomain: Array(1), alpha2Code: 'LC', alpha3Code: 'LCA', callingCodes: Array(1), …}
// 48
// :
// {name: 'Saint Martin (French part)', topLevelDomain: Array(3), alpha2Code: 'MF', alpha3Code: 'MAF', callingCodes: Array(1), …}
// 49
// :
// {name: 'Saint Pierre and Miquelon', topLevelDomain: Array(1), alpha2Code: 'PM', alpha3Code: 'SPM', callingCodes: Array(1), …}
// 50
// :
// {name: 'Saint Vincent and the Grenadines', topLevelDomain: Array(1), alpha2Code: 'VC', alpha3Code: 'VCT', callingCodes: Array(1), …}
// 51
// :
// {name: 'Samoa', topLevelDomain: Array(1), alpha2Code: 'WS', alpha3Code: 'WSM', callingCodes: Array(1), …}
// 52
// :
// {name: 'San Marino', topLevelDomain: Array(1), alpha2Code: 'SM', alpha3Code: 'SMR', callingCodes: Array(1), …}
// 53
// :
// {name: 'Seychelles', topLevelDomain: Array(1), alpha2Code: 'SC', alpha3Code: 'SYC', callingCodes: Array(1), …}
// 54
// :
// {name: 'Sint Maarten (Dutch part)', topLevelDomain: Array(1), alpha2Code: 'SX', alpha3Code: 'SXM', callingCodes: Array(1), …}
// 55
// :
// {name: 'South Georgia and the South Sandwich Islands', topLevelDomain: Array(1), alpha2Code: 'GS', alpha3Code: 'SGS', callingCodes: Array(1), …}
// 56
// :
// {name: 'Svalbard and Jan Mayen', topLevelDomain: Array(1), alpha2Code: 'SJ', alpha3Code: 'SJM', callingCodes: Array(1), …}
// 57
// :
// {name: 'Tokelau', topLevelDomain: Array(1), alpha2Code: 'TK', alpha3Code: 'TKL', callingCodes: Array(1), …}
// 58
// :
// {name: 'Tonga', topLevelDomain: Array(1), alpha2Code: 'TO', alpha3Code: 'TON', callingCodes: Array(1), …}
// 59
// :
// {name: 'Turks and Caicos Islands', topLevelDomain: Array(1), alpha2Code: 'TC', alpha3Code: 'TCA', callingCodes: Array(1), …}
// 60
// :
// {name: 'Tuvalu', topLevelDomain: Array(1), alpha2Code: 'TV', alpha3Code: 'TUV', callingCodes: Array(1), …}
// 61
// :
// {name: 'Wallis and Futuna', topLevelDomain: Array(1), alpha2Code: 'WF', alpha3Code: 'WLF', callingCodes: Array(1), …}
// length
// :
// 62
// [[Prototype]]
// :
// Array(0)

// ------------------------------ Task 3 ----------------------------------
// Print the following details name, capital, flag using forEach function

const xhr3 = new XMLHttpRequest();

xhr3.open("GET", "https://restcountries.com/v2/all");
xhr3.send();

xhr3.onload = function () {
  let data = JSON.parse(xhr3.response);
  let array = [];
  data.forEach((country) => {
    let obj = {
      name: country.name,
      capital: country.capital,
      flag: country.flag,
    };
    array.push(obj);
  });
  console.log(array); // output -> An array of all the 250 countries with name, capital and flag
};

// output ->
// (250) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, …]
// [0 … 99]
// 0
// :
// {name: 'Afghanistan', capital: 'Kabul', flag: 'https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_the_Taliban.svg'}
// 1
// :
// {name: 'Åland Islands', capital: 'Mariehamn', flag: 'https://flagcdn.com/ax.svg'}
// 2
// :
// {name: 'Albania', capital: 'Tirana', flag: 'https://flagcdn.com/al.svg'}
// 3
// :
// {name: 'Algeria', capital: 'Algiers', flag: 'https://flagcdn.com/dz.svg'}
// 4
// :
// {name: 'American Samoa', capital: 'Pago Pago', flag: 'https://flagcdn.com/as.svg'}
// 5
// :
// {name: 'Andorra', capital: 'Andorra la Vella', flag: 'https://flagcdn.com/ad.svg'}
// 6
// :
// {name: 'Angola', capital: 'Luanda', flag: 'https://flagcdn.com/ao.svg'}
// 7
// :
// {name: 'Anguilla', capital: 'The Valley', flag: 'https://flagcdn.com/ai.svg'}
// 8
// :
// {name: 'Antarctica', capital: undefined, flag: 'https://flagcdn.com/aq.svg'}
// 9
// :
// {name: 'Antigua and Barbuda', capital: "Saint John's", flag: 'https://flagcdn.com/ag.svg'}
// 10
// :
// {name: 'Argentina', capital: 'Buenos Aires', flag: 'https://flagcdn.com/ar.svg'}
// 11
// :
// {name: 'Armenia', capital: 'Yerevan', flag: 'https://flagcdn.com/am.svg'}
// 12
// :
// {name: 'Aruba', capital: 'Oranjestad', flag: 'https://flagcdn.com/aw.svg'}
// 13
// :
// {name: 'Australia', capital: 'Canberra', flag: 'https://flagcdn.com/au.svg'}
// 14
// :
// {name: 'Austria', capital: 'Vienna', flag: 'https://flagcdn.com/at.svg'}
// 15
// :
// {name: 'Azerbaijan', capital: 'Baku', flag: 'https://flagcdn.com/az.svg'}
// 16
// :
// {name: 'Bahamas', capital: 'Nassau', flag: 'https://flagcdn.com/bs.svg'}
// 17
// :
// {name: 'Bahrain', capital: 'Manama', flag: 'https://flagcdn.com/bh.svg'}
// 18
// :
// {name: 'Bangladesh', capital: 'Dhaka', flag: 'https://flagcdn.com/bd.svg'}
// 19
// :
// {name: 'Barbados', capital: 'Bridgetown', flag: 'https://flagcdn.com/bb.svg'}
// 20
// :
// {name: 'Belarus', capital: 'Minsk', flag: 'https://flagcdn.com/by.svg'}
// 21
// :
// {name: 'Belgium', capital: 'Brussels', flag: 'https://flagcdn.com/be.svg'}
// 22
// :
// {name: 'Belize', capital: 'Belmopan', flag: 'https://flagcdn.com/bz.svg'}
// 23
// :
// {name: 'Benin', capital: 'Porto-Novo', flag: 'https://flagcdn.com/bj.svg'}
// 24
// :
// {name: 'Bermuda', capital: 'Hamilton', flag: 'https://flagcdn.com/bm.svg'}
// 25
// :
// {name: 'Bhutan', capital: 'Thimphu', flag: 'https://flagcdn.com/bt.svg'}
// 26
// :
// {name: 'Bolivia (Plurinational State of)', capital: 'Sucre', flag: 'https://flagcdn.com/bo.svg'}
// 27
// :
// {name: 'Bonaire, Sint Eustatius and Saba', capital: 'Kralendijk', flag: 'https://flagcdn.com/bq.svg'}
// 28
// :
// {name: 'Bosnia and Herzegovina', capital: 'Sarajevo', flag: 'https://flagcdn.com/ba.svg'}
// 29
// :
// {name: 'Botswana', capital: 'Gaborone', flag: 'https://flagcdn.com/bw.svg'}
// 30
// :
// {name: 'Bouvet Island', capital: undefined, flag: 'https://flagcdn.com/bv.svg'}
// 31
// :
// {name: 'Brazil', capital: 'Brasília', flag: 'https://flagcdn.com/br.svg'}
// 32
// :
// {name: 'British Indian Ocean Territory', capital: 'Diego Garcia', flag: 'https://flagcdn.com/io.svg'}
// 33
// :
// {name: 'United States Minor Outlying Islands', capital: undefined, flag: 'https://flagcdn.com/um.svg'}
// 34
// :
// {name: 'Virgin Islands (British)', capital: 'Road Town', flag: 'https://flagcdn.com/vg.svg'}
// 35
// :
// {name: 'Virgin Islands (U.S.)', capital: 'Charlotte Amalie', flag: 'https://flagcdn.com/vi.svg'}
// 36
// :
// {name: 'Brunei Darussalam', capital: 'Bandar Seri Begawan', flag: 'https://flagcdn.com/bn.svg'}
// 37
// :
// {name: 'Bulgaria', capital: 'Sofia', flag: 'https://flagcdn.com/bg.svg'}
// 38
// :
// {name: 'Burkina Faso', capital: 'Ouagadougou', flag: 'https://flagcdn.com/bf.svg'}
// 39
// :
// {name: 'Burundi', capital: 'Gitega', flag: 'https://flagcdn.com/bi.svg'}
// 40
// :
// {name: 'Cambodia', capital: 'Phnom Penh', flag: 'https://flagcdn.com/kh.svg'}
// 41
// :
// {name: 'Cameroon', capital: 'Yaoundé', flag: 'https://flagcdn.com/cm.svg'}
// 42
// :
// {name: 'Canada', capital: 'Ottawa', flag: 'https://flagcdn.com/ca.svg'}
// 43
// :
// {name: 'Cabo Verde', capital: 'Praia', flag: 'https://flagcdn.com/cv.svg'}
// 44
// :
// {name: 'Cayman Islands', capital: 'George Town', flag: 'https://flagcdn.com/ky.svg'}
// 45
// :
// {name: 'Central African Republic', capital: 'Bangui', flag: 'https://flagcdn.com/cf.svg'}
// 46
// :
// {name: 'Chad', capital: "N'Djamena", flag: 'https://flagcdn.com/td.svg'}
// 47
// :
// {name: 'Chile', capital: 'Santiago', flag: 'https://flagcdn.com/cl.svg'}
// 48
// :
// {name: 'China', capital: 'Beijing', flag: 'https://flagcdn.com/cn.svg'}
// 49
// :
// {name: 'Christmas Island', capital: 'Flying Fish Cove', flag: 'https://flagcdn.com/cx.svg'}
// 50
// :
// {name: 'Cocos (Keeling) Islands', capital: 'West Island', flag: 'https://flagcdn.com/cc.svg'}
// 51
// :
// {name: 'Colombia', capital: 'Bogotá', flag: 'https://flagcdn.com/co.svg'}
// 52
// :
// {name: 'Comoros', capital: 'Moroni', flag: 'https://flagcdn.com/km.svg'}
// 53
// :
// {name: 'Congo', capital: 'Brazzaville', flag: 'https://flagcdn.com/cg.svg'}
// 54
// :
// {name: 'Congo (Democratic Republic of the)', capital: 'Kinshasa', flag: 'https://flagcdn.com/cd.svg'}
// 55
// :
// {name: 'Cook Islands', capital: 'Avarua', flag: 'https://flagcdn.com/ck.svg'}
// 56
// :
// {name: 'Costa Rica', capital: 'San José', flag: 'https://flagcdn.com/cr.svg'}
// 57
// :
// {name: 'Croatia', capital: 'Zagreb', flag: 'https://flagcdn.com/hr.svg'}
// 58
// :
// {name: 'Cuba', capital: 'Havana', flag: 'https://flagcdn.com/cu.svg'}
// 59
// :
// {name: 'Curaçao', capital: 'Willemstad', flag: 'https://flagcdn.com/cw.svg'}
// 60
// :
// {name: 'Cyprus', capital: 'Nicosia', flag: 'https://flagcdn.com/cy.svg'}
// 61
// :
// {name: 'Czech Republic', capital: 'Prague', flag: 'https://flagcdn.com/cz.svg'}
// 62
// :
// {name: 'Denmark', capital: 'Copenhagen', flag: 'https://flagcdn.com/dk.svg'}
// 63
// :
// {name: 'Djibouti', capital: 'Djibouti', flag: 'https://flagcdn.com/dj.svg'}
// 64
// :
// {name: 'Dominica', capital: 'Roseau', flag: 'https://flagcdn.com/dm.svg'}
// 65
// :
// {name: 'Dominican Republic', capital: 'Santo Domingo', flag: 'https://flagcdn.com/do.svg'}
// 66
// :
// {name: 'Ecuador', capital: 'Quito', flag: 'https://flagcdn.com/ec.svg'}
// 67
// :
// {name: 'Egypt', capital: 'Cairo', flag: 'https://flagcdn.com/eg.svg'}
// 68
// :
// {name: 'El Salvador', capital: 'San Salvador', flag: 'https://flagcdn.com/sv.svg'}
// 69
// :
// {name: 'Equatorial Guinea', capital: 'Malabo', flag: 'https://flagcdn.com/gq.svg'}
// 70
// :
// {name: 'Eritrea', capital: 'Asmara', flag: 'https://flagcdn.com/er.svg'}
// 71
// :
// {name: 'Estonia', capital: 'Tallinn', flag: 'https://flagcdn.com/ee.svg'}
// 72
// :
// {name: 'Ethiopia', capital: 'Addis Ababa', flag: 'https://flagcdn.com/et.svg'}
// 73
// :
// {name: 'Falkland Islands (Malvinas)', capital: 'Stanley', flag: 'https://flagcdn.com/fk.svg'}
// 74
// :
// {name: 'Faroe Islands', capital: 'Tórshavn', flag: 'https://flagcdn.com/fo.svg'}
// 75
// :
// {name: 'Fiji', capital: 'Suva', flag: 'https://flagcdn.com/fj.svg'}
// 76
// :
// {name: 'Finland', capital: 'Helsinki', flag: 'https://flagcdn.com/fi.svg'}
// 77
// :
// {name: 'France', capital: 'Paris', flag: 'https://flagcdn.com/fr.svg'}
// 78
// :
// {name: 'French Guiana', capital: 'Cayenne', flag: 'https://flagcdn.com/gf.svg'}
// 79
// :
// {name: 'French Polynesia', capital: 'Papeetē', flag: 'https://flagcdn.com/pf.svg'}
// 80
// :
// {name: 'French Southern Territories', capital: 'Port-aux-Français', flag: 'https://flagcdn.com/tf.svg'}
// 81
// :
// {name: 'Gabon', capital: 'Libreville', flag: 'https://flagcdn.com/ga.svg'}
// 82
// :
// {name: 'Gambia', capital: 'Banjul', flag: 'https://flagcdn.com/gm.svg'}
// 83
// :
// {name: 'Georgia', capital: 'Tbilisi', flag: 'https://flagcdn.com/ge.svg'}
// 84
// :
// {name: 'Germany', capital: 'Berlin', flag: 'https://flagcdn.com/de.svg'}
// 85
// :
// {name: 'Ghana', capital: 'Accra', flag: 'https://flagcdn.com/gh.svg'}
// 86
// :
// {name: 'Gibraltar', capital: 'Gibraltar', flag: 'https://flagcdn.com/gi.svg'}
// 87
// :
// {name: 'Greece', capital: 'Athens', flag: 'https://flagcdn.com/gr.svg'}
// 88
// :
// {name: 'Greenland', capital: 'Nuuk', flag: 'https://flagcdn.com/gl.svg'}
// 89
// :
// {name: 'Grenada', capital: "St. George's", flag: 'https://flagcdn.com/gd.svg'}
// 90
// :
// {name: 'Guadeloupe', capital: 'Basse-Terre', flag: 'https://flagcdn.com/gp.svg'}
// 91
// :
// {name: 'Guam', capital: 'Hagåtña', flag: 'https://flagcdn.com/gu.svg'}
// 92
// :
// {name: 'Guatemala', capital: 'Guatemala City', flag: 'https://flagcdn.com/gt.svg'}
// 93
// :
// {name: 'Guernsey', capital: 'St. Peter Port', flag: 'https://flagcdn.com/gg.svg'}
// 94
// :
// {name: 'Guinea', capital: 'Conakry', flag: 'https://flagcdn.com/gn.svg'}
// 95
// :
// {name: 'Guinea-Bissau', capital: 'Bissau', flag: 'https://flagcdn.com/gw.svg'}
// 96
// :
// {name: 'Guyana', capital: 'Georgetown', flag: 'https://flagcdn.com/gy.svg'}
// 97
// :
// {name: 'Haiti', capital: 'Port-au-Prince', flag: 'https://flagcdn.com/ht.svg'}
// 98
// :
// {name: 'Heard Island and McDonald Islands', capital: undefined, flag: 'https://flagcdn.com/hm.svg'}
// 99
// :
// {name: 'Vatican City', capital: 'Vatican City', flag: 'https://flagcdn.com/va.svg'}
// [100 … 199]
// [200 … 249]
// length
// :
// 250
// [[Prototype]]
// :
// Array(0)

// ------------------------------ Task 4 ----------------------------------
// Print the total population of countries using reduce function

const xhr4 = new XMLHttpRequest();

xhr4.open("GET", "https://restcountries.com/v2/all");
xhr4.send();

xhr4.onload = function () {
  let data = JSON.parse(xhr4.response);
  let populationData = data.map((country) => country.population);
  let totalPopulation = populationData.reduce((acc, next) => acc + next);
  console.log(totalPopulation); // output -> 7759438109 which is the total world population
};

// output ->
// 7759438109

// ------------------------------ Task 5 ----------------------------------
// Print the country which uses US Dollars as currency.

const xhr5 = new XMLHttpRequest();

xhr5.open("GET", "https://restcountries.com/v2/all");
xhr5.send();

xhr5.onload = function () {
  let data = JSON.parse(xhr5.response);
  let usCurrencies = data.filter((country) => {
    if (country.currencies !== undefined) {
      for (let i = 0; i < country.currencies.length; i++) {
        if (country.currencies[i].name === "United States dollar") {
          return true;
        }
      }
    } else {
      return false;
    }
  });
  usCurrencies.map((country) => console.log(country.name)); // output -> All 16 countries which uses US Dollars as currency
};

// output ->
// Bonaire, Sint Eustatius and Saba
// British Indian Ocean Territory
// Virgin Islands (British)
// Virgin Islands (U.S.)
// Cambodia
// Ecuador
// El Salvador
// Guam
// Marshall Islands
// Micronesia (Federated States of)
// Northern Mariana Islands
// Palau
// Panama
// Puerto Rico
// Turks and Caicos Islands
// United States of America
