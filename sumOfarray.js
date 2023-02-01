function sumOfarray(numbers){
    let sum= 0;
    for(let i=0;i < numbers.length;i++){
        const element =numbers[i];
        const len =numbers.length;
       
     
        sum=sum+element;
        console.log(sum,element,len);
        
    }
    return sum;

    

}
const arr =[2,4,6,8,10,12,14,16]
sumOfarray(arr);
