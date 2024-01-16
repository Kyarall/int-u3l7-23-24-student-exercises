// CODE ALONG, PART 1
// 1. Take a look at the CSS - notice how parts of the story have been hidden.

// 2. Take look at the HMTL. When the user clicks the "option-one" button, we want the "option-one-screen" div to show. 
//  - First, store those elements as variables. Can someone take me through the steps to do that?
let optionOneScreen = document.querySelector(".option-one-screen");
let optionOne = document.querySelector(".option-one");

// CODE SOLO, PART 1
// 3. Declare a variable to save the button with the class "option-two"
// 4. Declare a variable to save the div with the class "option-two-screen"
let optionTwoScreen = document.querySelector(".option-two-screen");
let optionTwo = document. querySelector(".option-two");


// CODE ALONG, PART 2
// 5. Let's use the console to check our variables saved correctly. 
//  - Watch as I use console.log() to check the contents of our option-one variables.
 console.log(optionOneScreen);

// CODE SOLO, PART 2
// 6. Now use console.log() to check the contents of the option-two variables you created. 
//  - Did they save correctly? If not, fix them!
console.log(optionTwo);



// LAST PART
// 7. Plug in the variables we created to make it so that parts of the story show up when the user clicks the button! 
//  - Uncomment the code, try it out on the webpage, and see what happens!

 

   optionOne.addEventListener("click", function(){
      optionOneScreen.style.display="block";
});

   optionTwo .addEventListener("click", function(){
      optionTwoScreen.style.display="block";
}); 
