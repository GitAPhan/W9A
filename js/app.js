// This is the defined the two variables W9A
var userAge = 47;
var userSubscribe = false;

// Conditional block that prints out information about our 'user' their account
if (userAge >= 18 && userSubscribe === true) {
    console.log('the user is 18 or older and is subscribed')
} else if (userAge < 18 && userSubscribe === true) {
    console.log('the user is younger than 18 and is subscribed')
} else if (userAge >= 18 && userSubscribe === false) {
    console.log('the user is 18 or older and not subscribed')
} else if (userAge < 18 && userSubscribe === false) {
    console.log('the user is younger than 18 and not subscribed')
} else {
    console.log('an error has occured!')
};

// changing the variables to an array
userAge = ["19", "23", "42", "15", "10", "27"];
userSubscribe = [true, false, true, true, false, false];

// this is to determine how many 'users' there are
var user_length = userAge.length;


// this is a loop that contains a conditional block tha prints out the 'users" information
for(var count = 0; count < user_length; count++) {
    if (userAge[count] >= 18 && userSubscribe[count] === true) {
        console.log('the user is 18 or older and is subscribed')
    } else if (userAge[count] < 18 && userSubscribe[count] === true) {
        console.log('the user is younger than 18 and is subscribed')
    } else if (userAge[count] >= 18 && userSubscribe[count] === false) {
        console.log('the user is 18 or older and not subscribed')
    } else if (userAge[count] < 18 && userSubscribe[count] === false) {
        console.log('the user is younger than 18 and not subscribed')
    } else {
        console.log('an error has occured!')
    };
}