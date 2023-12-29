//   JAVASCRIPT Assignment No # 01

/*                                        Task 1:

Calculate the zakat value, first, create a variable named "zakatPercentage" and
store the value of 2.5% in it (hint: 2.5% means 0.025). Next, create another variable
named "userInput" and take the input from the user using the prompt. Make sure
the input value is of a type number by converting the input string to a number
using a suitable method. Then, create a variable named "result" and assign its value
to the multiplication of the zakat percentage and user input. Finally, use an alert
message to display the calculated zakat value. The message should look like this:
"Your zakat value is xxx".  */

//                     ANSWER: 01
 
var zakatPercentage = 0.025;
var userInput = +prompt("Please Enter the Amount you want to take zakat from");
var result = zakatPercentage * userInput;

alert("Your Zakat Value Is" + " " + result);    


/*                            Task 2:
calculate the fitrah amount, first, ask the user to enter the total number of family
members using the prompt and store the value in a variable called
"familyMembers". Next, ask the user to choose a fitrah method by providing them
options using the prompt, and store the selected method and its price in variables.
Then, use an if-else block to check the user's input and calculate the fitrah amount
by multiplying the selected method's price with the number of family members.
Finally, display the calculated fitrah amount using an alert message.  */


//                                       ANSWER : 02
var familyMembers = +prompt("Please enter the number of your family members");

// now making fitrah method
var options = +prompt(" Please Select The Number Of Fitrah Method: \n 1. Wheat (Gandum) \n 2. Barley (Jou) \n 3. Dates (Khajoor)  \n 4.Raisins (Kishmish) ")


var wheat = 250;
var Barley = 450;
var Dates = 2100;
var Raisins = 2800;

if (options==1){
    var value = wheat * familyMembers;
    alert ("Your Fitrah Value Is " + " " + value);
}

else if (options==2){
    var value = Barley * familyMembers;
    alert ("Your Fitrah Value Is " + " " + value);
}

else if (options==3){
    var value = Dates * familyMembers;
    alert ("Your Fitrah Value Is " + " " + value);
}

else if (options==4){
    var value = Raisins * familyMembers;
    alert ("Your Fitrah Value Is " + " " + value);
}

else {
    alert("Please select the correct option");
}


/*                               Task 3:
Create a program that generates a random number between 1 and 10 and stores it
in a variable called "secretNumber". Then, ask the user to enter a guess for the
secret number using a prompt.
Use an if-else statement to check if the user's guess matches the secret number. If
the guess is correct, display a message using an alert saying "Congratulations! You
guessed the secret number". Otherwise, if the guess is too high or too low, display
an appropriate message informing the user to guess again.  */

//                               ANSWER NO : 03
var secretNumber = 5;
var UserGuess = +prompt("Enter a guess for the Secret number");

if (UserGuess==5){
    alert("Congratulations! You guessed the secret number");
}

else if (UserGuess<5){
    alert("Your Guess is too low, Guess again!");

}

else if (UserGuess>5){
    alert("Your Guess is too high, Guess again!");

}

else{
  alert("Invalid input")
}


/*                                 Task 4:
Create a program that asks the user to enter a name, and then prints out the name
with the first letter capitalized (Make your name in capitalized case).    */

//                                ANSWER NO: 04

var UserName = prompt("Please Enter Your Name");

arr1 = []
arr2 =[]

var start = UserName.slice(0,1);         //slice k through username se pehla word nikala
var s = start.toUpperCase();                 //ab us word ko uppercase kiya
arr1.push(s);                                // us uppercased word ko array mai dhala



//yeh dusra array hai, ismain pura name ha
end =UserName.slice(1);     // pehly index se akhir tak ka naam uthaya
var e = end.toLowerCase();                     // us name ko lowercase krwa diya
arr2.push(e);                               // array mai dhala

alert(arr1+arr2);                          //dono array display krwaye




/*                                   Task 5:
In this task, you will be creating two empty arrays called "contactNumbers" and
"contactNames". Using the prompt, you will ask the user to enter a contact number
and contact name. You will then push these values into their respective arrays
using the push method. After adding all the contacts, you will display the contact
numbers and names in the console. To do this, you will need to use a for loop to
iterate through both arrays and log each element to the console.
Make sure to use descriptive variable names and comment on your code for clarity.  
*/

//                                   ANSWER NO: 05 

contactNames=[];
contactNumbers=[];


for(i=0 ; i<3 ; i++){

    //here i am taking contact names from user
    var variable_name=prompt("Enter Contact Name");
    contactNames.push(variable_name);                 //here i pushed that contact name in the contactname array
    
    //here i am taking contact number from user
    var variable_num=+prompt("Enter Contact Number");
    contactNumbers.push(variable_num);              //here i pushed the contact number in the contatnumber array
}

console.log("Contact Names:   Contact Numbers");            //this line is for heading purpose in console


for(i=0 ; i<3 ; i++){


    //here in console log each contact names and contact numbers will appear in a single line for good ui, i is used here for iteration
    console.log(contactNames[i] + ":                  " + contactNumbers[i]);
    
}


/*                                              Task 6:
Create an Array that contains different products, and get input from the user in which you
ask your user to give the position of that element he/she wants. Now remove that Item
from your array and console the removed item, Also display the remaining items in the
array and total number of items remaining.  
*/

//                                           ANSWER NO : 06


//initail array of item
var products=["cakes","pie","pestry","chocolate","coffee"];

//taking position from user
var userproduct= +prompt("Enter the position of element to remove, There are total 5 items: \n 0. Cakes \n 1. Pie \n 2. Pestery \n 3. Chocolate \n 4. Coffee \n Please note that array strats from 0 so, give your position accordingly")


//removing that item as well as displaying that removed item in console
var RemovedItem = products.splice(userproduct, 1);  //is remove mai removed item hai
console.log("The Removed item is : " + RemovedItem);


//displaying remaining items
console.log("The remaining items are:");
for(i=0 ; i<products.length ; i++){
    console.log(i + ": " + products[i]);
}

//the total number of items remaining
console.log("The total number of items remaining are: " + products.length);


/*                                              Task 7:
Create a program that asks the user for their nationality, gender, and age using the prompt
function. The program should then use nested if-else statements to determine if the
person is eligible to vote.
First, the program should check if the person is Pakistani or Indian. If they are not, the
program should display a message saying they are not eligible to vote.
If they are Pakistani or Indian, the program should then check their gender. If the person is
male and over the age of 18, they are eligible to vote. If the person is female and over the
age of 18, the program should ask if they are married. If they are married, they are eligible
to vote. If they are not married, they are not eligible to vote.
If the person is under 18, the program should display a message saying they are not eligible
to vote.                            
*/

//                                           ANSWER NO : 07 

var nationality = prompt("Enter your Nationality");
var gender = prompt("Enter your Gender: \n 1. Male \n 2. Female");
var your_age = +prompt("Enter your age");

nationality.toLowerCase();
gender.toLowerCase();

if((nationality=='pakistani' || nationality=='indian')){
    if((gender=='male' && your_age>18)){
        alert("You are eligible to vote");
    }
    
    else if(gender=='female' && your_age>18){
        var marriage= prompt("Enter your marrital status: \n 1. Married \n 2. Unmarried");
        marriage.toLowerCase();
        
        if(marriage=='married'){
            alert("You are eligible to vote");
        }
        else{
            alert("Sorry, You are not eligible to vote");
        }
    }
    else{
       alert("Sorry, You are not eligible to vote");
    }
    
}
else{
    alert("Sorry, You are not eligible to vote");
}


    
    /*                                              Task 8:
You have an array of that contains the name of Pakistani Teams Player selected for
WorldCup (15 Players) named as WorldCupSquad. Now tomorrow we have a match with
India, So make an array of final team players (11 Players) that will be playing in tomorrows
match from the WorldCupSquad array.
(Hint : Make sure it should not disturb the array that contains 15 players instead you have
to make a copy of this array)                   */

//                                           ANSWER NO : 08


//total squad
var WorldCupSquad= ["Babar","Rizwan","Saim","shaheen","Shinwari","Fakhar","Shadab","Sarfaraz","Haris","Afridi","Asif","Imad","Naseem","Hafeez","Azam","Hassan"]

//made an empty array
var finalteamplayers=[];

// now i placed the slice of the total squad in empty array
var finalteamplayers=WorldCupSquad.slice(0,11);

//now displayed the array
alert(finalteamplayers);