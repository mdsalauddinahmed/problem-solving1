function leapYear(year){
    const isLeapYear =year%4;
   if(isLeapYear===0){
    console.log("it is leap year",year)
   }else{
     console.log("this is not lear year baby",year)
   }
}
leapYear(1988);
leapYear(1890);
leapYear(1996);
