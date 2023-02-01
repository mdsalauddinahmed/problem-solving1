// var a= 75.25;
// var b = 65;
// var c =80;
// var d = 35.45;
// var e= 99.50;
// var total =   toFixed((a+b+c+d+e)/5);
// console.log(total);

// var a =" I am going to be";
// var b="an awesome web developer";
// var added = a +" "+ b;
// console.log(added)
// const a = 119;
// const b = 5
// const reminder =a%b;
// console.log(reminder)
const numbers =[1,4,4,5,6,7,7,8,9,9,]
//console.log(numbers[3]);
// var element=numbers[5];
// console.log(element)
// numbers[10]=44;
// numbers[11]=484;
// // console.log(numbers)
// console.log(numbers.indexOf(484));


var artist =['balam','salam ','kalam','apon'];
//artist.push('amir');
//artist.push('rajib');
const pops= numbers.pop();
//artist.unshift('rahim','karim')
//artist.shift('rahim','karim')
// artist.shift('balam',)
// artist.shift( 'salam')
//artist.unshift('hlw','hi','kemon','aso')
//console.log(artist)
//console.log(numbers)
//console.log(pops)
// var iphonePrice =120000;
// var myBudget =12000;
// if(myBudget >= iphonePrice){
//     console.log("finally achived my phone")
// }
// else {
//     console.log(" you are not able to buy this phone .it's your dream")
// }
 

// const a=70;
// const b=104;
// const c =56;
// if(a>b){
//     if(a>c){
//         console.log("a is greater than all")
//     }else{
//         console.log('c is greater than all')
//     }
// }else{
//     if(b>c){
//         console.log('b is greater than all')
//     }else{
//         console.log('c is greater than all')
//     }
// }


// function mak_avr( a, b, c){
//     const number1 =a;
//     const number2 =b;
//     const number3 =c;
//     const average =(number1+number2+number3)/3;
//     return average;
// }
//  const average=mak_avr(6 ,6,6);
//  console.log(average)


//  function foo(){
//     function bar(){
//         console.log("this is bar function")
//     }
//     bar();
//     console.log("it is foo function")
  
//  }
//  foo();

function height(inch){
    const inches =inch;
    const manualInch =12;
    return inch/manualInch;
}
const feet= height(56);
const n=feet.toFixed(2);
console.log(n)

function milesToKm(miles){
    const mile =miles;
    const manualInch =1.60934;
    const km = mile*manualInch
    return  km;
}
 const inputMile =2;
 const measureableKilo=milesToKm(inputMile).toFixed(1);
 console.log(measureableKilo);