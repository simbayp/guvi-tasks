const jsonData =
  '{"name":"Vivek", "age":22, "education":"Engineering", "bootcamp":"Guvi", "address": "xyz flat, abc colony, pqr city", "country":"India"}';

const objData = JSON.parse(jsonData);

// Iterate using "for" loop
for (let i = 0; i < Object.keys(objData).length; i++) {
  console.log(`${Object.keys(objData)[i]} => ${Object.values(objData)[i]}`);
}

// Iterate using "for-in" loop
for (let key in objData) {
  console.log(`${key} => ${objData[key]}`);
}

// Iterate using "for-of" loop
for (let index of Object.keys(objData)) {
  console.log(`${index} => ${objData[index]}`);
}

// Iterate using "forEach" function
Object.keys(objData).forEach(function (index) {
  console.log(`${index} => ${objData[index]}`);
});

// ----------------------------- Resume -----------------------------------

let resume =
  '{"firstName": "Vivek", "lastName": "Kus", "skill": "Developer", "contact": {"email": "vivek@gmail.com", "phone": "9999955555"}, "description": "Self-taught, enthusiastic and highly motivated individual dedicated for writing clear, concise, robust code that works. I like creating products that either have fun and nifty features or solve genuine problem for people.", "education": ["B.Tech Electronics and Communication, IIIT-D", "Higher Secondary Certificate, Kendriya Vidyalaya", "Secondary School Certificate, Kendriya Vidyalaya"], "technologiesAndLanguages": {"languages": ["JavaScript", "Python", "C++"], "technologies": ["ReactJs", "Redux", "NodeJS", "MongoDB"], "others": ["Git", "GitHub", "HTML/CSS", "Bootstrap"]}, "projects": ["Portfolio", "PokeDesk", "Quotes Generator"], "certifications": ["Python Programming, University of Michigan", "Python Data Structures, University of Michigan"], "otherSections": {"volunteerWork": "Helping online students with their day to day programming problems.", "community": ["GitHub", "StackOverflow", "Udemy", "Twitter Community", "Discord"], "languages": ["English", "Hindi"]}}';

console.log(JSON.parse(resume));
