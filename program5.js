function electricityBill(params) {
    var unit;
var amt, total_amt, sur_charge;
units=prompt("Enter total units consumed: ");
var unitsNew=parseInt(units)
if(unitsNew <= 50)
{
    amt = unitsNew * 0.50;
}
else if(unitsNew <= 150)
{
    amt = 25 + ((unitsNew-50) * 0.75);
}
else if(unitsNew <= 250)
{
    amt = 100 + ((unitsNew-150) * 1.20);
}
else
{
    amt = 220 + ((unitsNew-250) * 1.50);
}
sur_charge = amt * 0.20;
total_amt  = amt + sur_charge;

console.log("Electricity Bill = Rs. %.2f", total_amt);

return 0;
}