// sum of even numbers
function sumOfarray(numbers){
    let sum= 0;
    for(let i=0;i < numbers.length;i++){
        const element =numbers[i];
        const len =numbers.length;
       
     
        sum=sum+element;
       
        
    }
    return sum;

    

}


function evenOdd(number){
    let err=[];
    let array =[];
    for(let i=0;i<number.length;i++){
        const element =number[i];
        if(element%2===0){
             
            err.push(element)
            
        }
        // else if(element%2 !==0){
        //     array.push(element)
        // }
         
    }
    return (err);

}
const arr =[ 34,76,89,31,57,67,81];
const evenNumbers =evenOdd(arr);
 const sumEven=sumOfarray(evenNumbers)

console.log( evenNumbers,sumEven)