/*function happybirthday(username,bday){
    console.log("happy birthday to you!");
    console.log("happy birthday to you!");
    console.log(`happy birthday to ${username} !`);
    console.log("happy birthday to you!");
    console.log(`You are  ${bday} years old`);
}
happybirthday("Emir",20);*/

/*function add(x,y){
    let result=x+y;
    return result;
}
function sub(x,y){
    let result=x-y;
    return result;
}
function add(x,y){
    let result=x*y;
    return result;
}
console.log(add(2,5));*/

/*let testscore=93;
let lettergrade;

switch(true){
    case testscore>=90:
    lettergrade="A";
    break;
    case testscore>=80:
    lettergrade="B";
    break;
    case testscore>=70:
    lettergrade="C";
    break;
    case testscore>=60:
    lettergrade="D";
    break;
    default:
        lettergrade="F";
}
console.log(lettergrade);*/

/*let username="emir";
console.log(username.charAt("2"));
console.log(username.indexOf("e"));
console.log(username.lastIndexOf("e"));
console.log(username.lenght);
console.log(username.trim());
let result=username.startsWith("e");
console.log(result);*/

/*
const fullname="Emir gasi";
let firstname=fullname.slice(3.4);
let lastname=fullname.slice(5.9);
console.log(firstname);*/

const minnum=1;
const maxnum=100;
const answer=Math.floor(Math.random()*(maxnum-minnum+1));

let attempts=0;
let guess;
let running=true;

while(running){
    guess=window.prompt(`Guess a number between ${minnum}-${maxnum}`);
    guess=Number(guess);

    if(isNaN(guess)){
        window.alert("Please enter a number");
    }
    else if(guess<minnum || guess>maxnum){
        window.alert("Please enter a number");
    }
    else{
        attempts++;
        if(guess<answer){
            window.alert("TOO LOW");
        }
        else if (guess>answer){
            window.alert("TOO HIGH");
        }

        else{
            window.alert(`Correct the answer was ${answer}`)
            running=false;
        }
    }
}