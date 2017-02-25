var userName = prompt('Your name');
var greet = 'Hello ' + userName;
document.write(greet);

var age = Number(prompt('Enter youre age'));
var nextAge = age + 1;
var msg = '<br>Soon you will be' + nextAge;
document.write(msg);

var a = Number(prompt('Enter number'));
var firstAnswer = a;
var c = Number(prompt('Enter once more'));
var secondAnswer = c;
var d = Number(prompt('Again please'));
var againAnswer = d;

function sum(a, c, d) {
    var result = a + c + d;
    return result;
}

var calcSum = sum(a, c, d);
document.write(calcSum);

var enterNum = Number(prompt('Enter number my friend'));
var getAnswer = enterNum;

var squareRoot = Math.sqrt(enterNum);
document.write(squareRoot);


