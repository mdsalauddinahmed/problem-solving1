function multiplication(number){
  let result = 1;
  for(let i =1;i<=number;i++){
         result=result*i;

  }
  return result;
   

}
const result= multiplication(9);
console.log(result)


// factorial -zone

function facto(num){
    let result =1;
    for(let i=num;i>=1;i--){
        result=result*i;
         
    }
    return result;
     
}
const factoria=facto(3)
console.log(factoria);

function fa(number){
    let i =number;
    let result = 1;
    while(i>=1){
        result=result*i;
        i--;
    }
    return result;
}
const whileFactorial= fa(9);
console.log(whileFactorial);
   
// hour to minutes convert
function minutes(hour){
    let result=60;
    for(let i=1;i<=hour;i++){
        result =result*i;
    }
    return result;
}
const minute=minutes(2)
console.log(minute)
// 
function ftcl(val){
    var ft = val;
    var cel =(ft-32)/1.8;
    console.log(cel)

}
ftcl(50)