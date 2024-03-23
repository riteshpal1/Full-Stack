// word vs keyword

// harsh word
//  for keyword   

//examples of work and keyword


//#keywords  
//for, is, if, else

//#variables&constants

//variable is that where we staore the Data 
//constants are that which are never changes

//#hoisting
// variables= and fuctions are hoisted which means there declaration is moved on the top of code.

//#types in JS
//They are two types
//reference = {} [] () 
 
//aisi koi bhi value jisko copy karne pr real copy nahi hota, 
//balki us main value ka reference pass hojaata hai, 
//use hum refrence value kehte hai, aur jisko copy karne par 
//real copy  ho jaaye wo value primitive type value hoti hai

var a = [12,13]
var b = a;


//#conditionals 
// if-else,else-if
if(11>12){

}
else if(12>13){

}
else if(14>16){

}
else{

}

//#loops - means-repeat
//example 3 time print name
console.log("aman");
console.log("aman");
console.log("aman");

// for(Start;end;change){

//}

for(var i = 0; i<11; i++){
  console.log(i);
}


//#functions
// 1 jab aapka code aap turant chalaana nhi chahte future me chalana chahte ho.
// 2 jab aap code reuse krna chahte ho
// 3 jab aap code chalana chahte ho har baar with different data

function abcd(){
    //function statements
}

function helobolo(){
  console.log("hello");
}
helobolo();

function abc(a,b,c) {
  console.log(a,b,c);
}
abc(12,13,14);

//argument = real value jo hum dete hai fun chalate waqt
//parameter = variables jinme value store hoti hai arguments waali


// #arrays = hum ek variable me ek value store kar paae hai par jab 
//hamein ek se jyada value store karni ho tab fir use hota hai array ka, 
//matlab ki array aapko freedom deta hai ek se jyada value use karne ki

// array = group of values  

// var arr = [1,2,3,4,5] values start from 0 index 

// push pop shift unshift

//arr.slice(2,1)


// #objects - ek se jyada bande ki baat ki to hua array, ek bande ke baare me saari baat ki to hua object 

// object hai ek bande ki detail ko hold karna, in a key value pair

// 1) blank object
var a= {}

// 2) filled object
var a = {
  age: 24,
  name: "Harsh",
  email: "www.anything@gmail.com", 
  linkedin: "mohit",
  contact: "t55778u213t612u3u"
};