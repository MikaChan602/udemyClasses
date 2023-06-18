// Closure

function makeGreeting(language) {

    return function(firstname,lastname) {
        if(language === 'en') {
            console.log('Hello ' + firstname + ' ' + lastname);
        }

        if(language === 'es') {
            console.log('Hola ' + firstname + ' ' + lastname);
        }
    }
}

let greetEnglish = makeGreeting('en');
let greetSpanish = makeGreeting('es');

greetEnglish('John','Doe');
greetSpanish('John','Doe');
greetEnglish('Anne','White')


// 已經用過Closure的例子

function sayHiLater() {
    var greeting = 'Hi';

    setTimeout(function() {
        console.log(greeting);
    },3000);
}

sayHiLater();

// jQuery uses function expressions and first-class functions!
// $("button").click(function() {});