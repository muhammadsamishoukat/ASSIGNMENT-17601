function grossSalary(params) {
    var basic, gross, da, hra;


/* Input basic salary of employee */
basic=prompt("Enter basic salary of an employee:");
 var basicNew=parseInt(basic)


/* Calculate D.A and H.R.A according to specified conditions */
if(basicNew <= 10000)
{
    da  = basicNew * 0.8;
    hra = basicNew * 0.2;
}
else if(basicNew <= 20000)
{
    da  = basicNew * 0.9;
    hra = basicNew * 0.25;
}
else
{
    da  = basicNew * 0.95;
    hra = basicNew * 0.3;
}

/* Calculate gross salary */
gross = basicNew+ hra + da;

console.log("GROSS SALARY OF EMPLOYEE = %.2f", gross);

return 0;

}