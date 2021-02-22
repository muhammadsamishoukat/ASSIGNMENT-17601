function multiples() {
    let number=prompt("enter a number")
    var number_2=parseInt(number)
    let sum = 0;
    for (let i = 0; i <number_2; i++) {
  
      if (i % 3 === 0 || i % 5 === 0) {
        sum += i;
      }
      }
      
    
   
    console.log(sum)
  }
  