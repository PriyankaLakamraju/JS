var john1,john2,john3,mark1,mark2,mark3;
john1 = 89;
john2 = 120;
john3 = 103;
mark1 = 116;
mark2 = 94;
mark3 = 123;
mary1 = 97;
mary2 = 14;
mary3 = 15;
var johnavg = (john1 + john2 + john3) /3;
console.log(johnavg);
var markavg = (mark1 + mark2 + mark3) /3;
console.log(markavg);
var maryavg = (mary1 + mary2 + mary3) /3;
console.log(maryavg);
if (johnavg > markavg && johnavg > maryavg){
    console.log('john teams wins in average')
}
else if(markavg > johnavg && markavg > maryavg)
{console.log('mark teams wins in average')}
else if(maryavg > johnavg && maryavg > markavg)
{console.log('mary teams wins in average')}