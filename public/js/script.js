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
  

