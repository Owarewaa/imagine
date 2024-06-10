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





















