var massMark, massJohn, heightMark, heightJohn;
massMark = 65;
massJohn = 70;
heightMark = 2.5;
heightJohn = 3;
var bmiMark = massMark / heightMark^2;
var bmiJohn = massJohn / heightJohn^2;
console.log(bmiMark , bmiJohn);
var higherbmi = bmiMark > bmiJohn;
console.log(higherbmi);
console.log('Is Marks bmi greater that johns bmi' + ' ' + higherbmi);