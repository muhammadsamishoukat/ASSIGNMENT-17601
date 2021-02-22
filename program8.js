function charCount() 
{
    var string=prompt("enter string")
    var stringCheck=prompt("which character you want to identify")
 var letter_Count = 0;
 for (var position = 0; position < string.length; position++) 
 {
    if (string.charAt(position) == stringCheck) 
      {
      letter_Count += 1;
      }
  }
  
  console.log("apple","p")
  return letter_Count;
}


