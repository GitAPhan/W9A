var userAge = 47;
var userSubscribe = false;

if (userAge >= 18 && userSubscribe === true) {
    console.log('the user is 18 or older and is subscribed')
} else if (userAge < 18 && userSubscribe === true) {
    console.log('the user is younger than 18 and is subscribed')
} else if (userAge >= 18 && userSubscribe === false) {
    console.log('the user is 18 or older and not subscribed')
} else {
    console.log('the user is younger than 18 and not subscribed')
}