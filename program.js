function creditCardNum(params) {
    const creditNum=prompt("enter your credit card number")
    const creditNum2=creditNum.slice(11,15)
    document.write("your credit card Number is this"+ " "+creditNum+ "<br>")
    document.write("Card Hide "+"************"+creditNum2)
}