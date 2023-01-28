var picnicSpot = ['Coxsbazar', 'Saintmartin', 'Sonargaon', 'Kuakata'];
console.log(picnicSpot);
console.log(picnicSpot.length);

console.log(picnicSpot[2]);
console.log(picnicSpot.indexOf('Saintmartin'));

picnicSpot[3] = 'Sajek';
console.log(picnicSpot);

picnicSpot.push('Kuakata');
picnicSpot.unshift('Mithamain');
console.log(picnicSpot);

picnicSpot.pop();
console.log(picnicSpot);

picnicSpot.shift();
console.log(picnicSpot);


var isGraduated = true;
var hasHome = true;
var salary = 35000;

if(isGraduated == true && salary > 40000){
    console.log('ok1');
}
else if(hasHome == true || salary > 40000){
    console.log('ok2')
}
else{
    console.log('not ok');
}


var isGraduated = true;
var hasHome = true;
var salary = 25000;
var bike = 0;

if(hasHome == true && salary > 30000){
    console.log('এসো বিয়ে করে ফেলি');
}
else if(isGraduated == true || bike >= 1){
    console.log('চলো বিয়ে করে ফেলি');
}
else{
    console.log('চলো এখন প্রেম করি');
}


var myMoney = 30;
var dansihPrice = 45;
var butterBread = 35;
var toastBiscuit = 20;

if(dansihPrice < myMoney){
    console.log('dainish khabo!');
}
else if(butterBread < myMoney){
    console.log('butter bun khabo!');
}
else if(toastBiscuit < myMoney){
    console.log('toast biscuit khabo!');
}
else{
    console.log('khali chai khabo!');
}


var roastGiven = 0;
while(roastGiven < 7){
    console.log('Roast Den, Please!!');
    roastGiven += 1;
}

var num = 1;
while(num <= 10){
    console.log(num);
    num +=2;
}

for(var roastGiven = 0; roastGiven < 7; roastGiven ++){
    console.log('Roast Den Please!');
}

var numbers = [45, 87, 89, 56, 32, 51, 25, 188, 41];

for(var i = 0; i < numbers.length; i++){
    var number = numbers[i];
    console.log(number);
}
