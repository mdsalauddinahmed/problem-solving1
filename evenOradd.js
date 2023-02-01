const num =3;
if(num%2==0){
    console.log("it is even number")
} else {
    console.log("it is add number")
}

// using function
function isEven(num1){
    const reminder =num1%2;
    if(reminder==0){
        return true;

    }else
    return false;
}
console.log(isEven(46),isEven(47),isEven(12345));