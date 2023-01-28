// Solution of Practice problem 1
var fruits = ['Apple', 'Banana' ,'Orange']
console.log(fruits.indexOf('Banana'));

fruits[1] = 'Mango';
console.log(fruits);

fruits.pop('Orange');
fruits.push('Watermelon');
console.log(fruits);




// Solution of Practice problem 2
var myScore = 85;
var Tom = 66;
var Jane = 95;
var Peter = 56;
var John = 40;

if(myScore >= 80){
    console.log('A Grade');
}
else if(myScore >= 60){
    console.log('B Grade');
}
else if(myScore >= 50){
    console.log('C Grade');
}
else if(myScore >= 40){
    console.log('D Grade');
}
else if(myScore <= 39){
    console.log('F Grade');
}
else(console.log('Result not published yet'))

if(Tom >= 80){
    console.log('A Grade');
}
else if(Tom >= 60){
    console.log('B Grade');
}
else if(Tom >= 50){
    console.log('C Grade');
}
else if(Tom >= 40){
    console.log('D Grade');
}
else if(Tom <= 39){
    console.log('F Grade');
}
else(console.log('Result not published yet'))

if(Jane >= 80){
    console.log('A Grade');
}
else if(Jane >= 60){
    console.log('B Grade');
}
else if(Jane >= 50){
    console.log('C Grade');
}
else if(Jane >= 40){
    console.log('D Grade');
}
else if(Jane <= 39){
    console.log('F Grade');
}
else(console.log('Result not published yet'))

if(Peter >= 80){
    console.log('A Grade');
}
else if(Peter >= 60){
    console.log('B Grade');
}
else if(Peter >= 50){
    console.log('C Grade');
}
else if(Peter >= 40){
    console.log('D Grade');
}
else if(Peter <= 39){
    console.log('F Grade');
}
else(console.log('Result not published yet'))

if(John >= 80){
    console.log('A Grade');
}
else if(John >= 60){
    console.log('B Grade');
}
else if(John >= 50){
    console.log('C Grade');
}
else if(John >= 40){
    console.log('D Grade');
}
else if(John <= 39){
    console.log('F Grade');
}
else(console.log('Result not published yet'))




// Solution of Practice problem 3

// using if conditional
var number1 = 13;
var number2 = 79;
var number3 = 45;

if(number1 > number2){
    if(number1 > number3){
        console.log(number1);
    }
    else{
        console.log(number3);
    }
}
else{
    if(number2 > number3){
        console.log(number2);
    }
    else{
        console.log(number3);
    }
}

// using max math formula
console.log(Math.max(number1, number2, number3));




// Solution of Practice problem 4
var triangleSide1 = 9;
var triangleSide2 = 8;
var triangleSide3 = 9;


if(triangleSide1 == triangleSide2 || triangleSide1 == triangleSide3 || triangleSide2 == triangleSide3){
    console.log('This is an Isosceles Triangle');
}
else(console.log('This is not an Isosceles Triangle'))
