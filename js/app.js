var userAge = 47;
var userSubscribe = false;

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

userAge = ["19", "23", "42", "15", "10", "27"];
userSubscribe = [true, false, true, true, false, false];

var user_length = userAge.length;

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