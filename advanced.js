// Difference b/w var let const
// - var old js me tha
///- var function scoped hota hai
/// - var function scoped hota hai => var apne parent fnc mein kahi bhi use ho sakta hai 
///- var adds itself to the window object
function abcd(){
  for(var i = 1; i<12; i++){
    console.log(i);
  }
  console.log(i);
}

// - let const new js me hai
// let braces scopedd hota hai
// let const doesn't adds 

// let braces scoped hota hai 
// let braces scopred hota hau .
// let braces scoped hota hai.


// js language me kuch cheezen nahi hai jo hum use kar sakte haiu aur wo cheeje hume 
// js se nhi balki browser se milti hai, aise saare features jo js ka part nahi hai but
// fir bhi use kar sakte hai unhe hum dhoondh sakte hai ek particular object me jiska naam hai window.  

// or js main kai saare features hai pr kuch features jo hum use karte hai , wo features wo nahi hai
// par fir bhi use kar paate hai kyuki wo features js language use kar leti hai window self, 
// aur window hai ek box of features given by browser to use with js

