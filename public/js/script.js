const btn = document.getElementById('btn');
btn.onclick = function () {
    const name = prompt('Enter your full name.');
    document.getElementById('name').innerText = name; 
}

// Variables
const pi = 3.142;
let username ='akosuaowarewaa';
let age = 98;
let present = false;

// Objects
const person = {
    username: 'akosuaowarewaa',
    age: 98,
    present: false,
    child:{
        name:'Kobi',
        friend:{
            name:'Biggie',
        }
    }
}

console.log(person.username);
person.age = 109;
console.log(person);


// Arrays
const bottle1 = {
    size:'large',
    color:'blue',
  }
  
  const bottle2 = {
    size:'small',
    color:'red',
  }
  
  
  const bottles = [bottle1, bottle2];
  bottles.push(bottle1);
  bottles.push(bottle2);
  bottles;
  bottles[2].size;
  
  const date = new Date();
  date.getDay();
  
  // ifelse
//   const age = 18;
  if (age>=18) { 
     'You are true';
  } else {
    'You are false';  
  }
  
  // For loop
  for (let i = 0; i<= 5; i++) {
   console.log ('We did it', i);
  }
  

//Functions
// Defining a function
function login(username, password) {
  // Validate username and password
  if (!username || !password) {
    return 'username or password not provided';
  }
  // Verify username and password
 if (username == 'akosuaowarewaa' && password == '1234') {
    return 'User is logged in';
 }else{
   return 'invalid username or password'
 }
   
}

// Invoking a function
login('akosuaowarewaa');





// Basic arithmetic operations
11+12;
1+0.5;
43-12;
45/7;
5*8;
14%3;
2*3+4-5 / 2;

Math.floor(45/7);
Math.round(45/24);
Math.random() *1000;
Math.max(34,32,37);

// Strings in JavaScript
// concatenation
const firstname = 'Akosua';
const lastname  ='Owarewaa';
firstname + ' ' + lastname;
// Template Literal
`${firstname} ${lastname}`;

// String Methods
let fullname = "akosua owarewaa"
fullname.length
fullname.toUpperCase()
fullname.toLowerCase()
fullname.charAt(8)
fullname.slice(5)
fullname.split("")
fullname.replace("akosua", "boateng")

// String conversion
Number('3.243')
parseInt('3.243')
parseFloat('3.243')
let amount = 1600
amount. toString()
console.log(`GHS${1600}`)


// // Write a function that will add a participant to our Google Classroom

// function addParticipant(email, username, DOB) {
//   if (email == 'MestAfrica.com' && username == 'Fellow' && DOB == 2000) { return 'Participant added succesfully';
    
//   }else{
//     return 'Could not log in participant';
//   }
// }

// addParticipant('MestAfrica.com', 'Fellow', '2000');


// Or

const participants = [];
function addParticipant(email) {
  // Check if email was provided
  if(email === undefined || email ===null) {
    return
  }
  // Add email to participants
 participants.push(email);
  return 'Participant added succesfully';
}
addParticipant('akosuaowarewaa360@gmail.com');
participants;



// Arrays in JavaScript
const users = [
  {
    username: 'akosuaowarewaa',
    password: '1234',
    email: 'akosuaowarewaa360@gmail.com'
  },
  {
    username: 'elviskobi',
    password: '5678',
    email: 'elviskobi@gmail.com'
  }
];


// Write a function that will take a user with firstname,lastname and return full name
function fullname(user){
  return {
    ...user,
    fullName: `${user.firstname} ${user.lastname}` 
 };
  }

const user = {
  firstname: 'Akosua',
  lastname: 'Owarewaa'
}


fullname(user);




// Array map
const users = [
  {firstname: 'Akosua', lastname:'Owarewaa'},
  {firstname: 'Rafida', lastname:'Zakaria'},
  {firstname: 'Angela', lastname:'Woode'},
  {firstname: 'Elvis', lastname:'Boateng'},
  {firstname: 'Adeline', lastname:'Ackun'}, 
]
// users.map(fullname);

// Square of numbers
function square (number){
  return number** 2
}

square(6);
const  numbers = [9, 8, 7, 6];
numbers.map(square);


// Array filter
function isEven (number){
  return number % 2 === 0;
}

isEven(6)
isEven(5)

// Write a function that will allow a user to reset their password

const user = {
  email: "akosuaowarewaa@gmail.com",
  password: "1234",
};

function resetPassword(email, newPassword) {
  // Check if  email and new password was provided
  if (!email || !newPassword) {
    return "Email or password not provided";
  }

  // Check if provided email is correct
  if (email !== user.email) {
    return "Incorrect email";
  }

  // Update password with new one
  user.password = newPassword;
  return "password reset successful ";
}

user;
resetPassword("akosuaowarewaa@gmail.com", "0987");

// You have been given an array of students wuth some of them marked as absent and others marked as present
// Write a function that returns the total number of students present
const students = [
  {id: 1, present: true},
  {id: 2, present: true},
  {id: 3, present: false},
  {id: 4, present: true},
  {id: 5, present: false},
  ]
  
  function studentsPresent(students){
    let totalNumber = 0
    for(let i = 0;i < students.length; i++){
      if(students[i].present) totalNumber++ 
    }
    return totalNumber;  
  }
  
  studentsPresent(students);
  
  // Classes in JavaScript
  class Laptop {
    constructor(brand, color) {
      this.brand = brand;
      this.color = color;
    }
  }
  const laptop1 = new Laptop ('Dell' , 'black')
  const laptop2 = new Laptop ('HP' , 'blue')
  laptop1.brand;
  laptop2.brand;
  laptop1.color;
  laptop2.color;
  
  





















