// solution of question no. 28

var myMoney = 15000

if(myMoney > 80000){
    console.log('I will buy a mac');
}
else if(myMoney > 60000){
    console.log('I will buy a gaming pc');
}
else if(myMoney > 40000){
    console.log('I will buy a lenovo yoga');
}
else if(myMoney > 20000){
    console.log('I will buy a second-hand laptop');
}
else{
    console.log('I will manage with my current smart-phone');
}



// solution of question no. 29

for(var i = 1; i <= 39; i++){
    console.log(i);
    console.log('Today i am not in sound mood');
}



// solution of question no. 30

for(var i = 58; i <= 98; i++){
    console.log(i);
}



// solution of question no. 31

for(var i = 412; i <= 456; i+=2){
    console.log(i);
}



// solution of question no. 32

for(var i = 581; i <= 623; i+=2){
    console.log(i);
}



// solution of question no. 33

var programmingLearning = ['HTML', 'CSS', 'Git', 'Github', 'VS_Code', 'Bootstrap', 'Tailwind', 'Netlify', 'JavaScript'];

for(var i = 0; i < programmingLearning.length; i++){
    var learningTopic = programmingLearning[i]
    console.log(learningTopic);
}



// solution of question no. 34

var myMobiles = ['Huawei-GR5_2016', 'Symphony-ZV_Pro', 'Symphony-H_100', 'Walton-NX', 'Walton-H_1', 'Symphony-W_68', 'Micromax-A_94', 'Nokia-N_97', 'Nokia-C_1', 'Nokia-5130_c'];

var mobileModelIndex = 0

while( mobileModelIndex < myMobiles.length){
    var mobileModel = myMobiles[mobileModelIndex];
    console.log(mobileModel);
    mobileModelIndex++;
}



// solution of question no. 35

for(var i = 30; i <= 86; i++){
    if(i > 44){
        break;
    }
    console.log(i);
}



// solution of question no. 36

var myBooksPrize = [110, 180, 250, 75, 220, 145, 372, 45, 560, 436, 192, 79, 81, 198, 200, 312, 201, 168, 199, 50];

for(i = 0; i < myBooksPrize.length; i++){
    var bookPrize = myBooksPrize[i];
    if(bookPrize > 200){
        continue;
    }
    console.log(bookPrize)
}
