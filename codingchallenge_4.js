var john = {firstName: 'John', 
            lastName:'Smith', 
            mass: 92,
            height: 1.95,
            bmiJohn: function(){
                this.bmi= this.mass/(this.height * this.height);
                return this.bmi;
            }}
var mark = {firstName: 'Mark', 
            lastName:'Steal', 
            mass: 78,
            height: 1.69,
            bmiMark: function(){
                this.bmi= this.mass/(this.height * this.height);
                return this.bmi;}
}

john.bmiJohn();
mark.bmiMark();
console.log(john, mark);


switch(true){
    case john.bmi > mark.bmi: console.log( 'John has' + ' ' + john.bmi);
    break;
    case mark.bmi > john.bmi: console.log( 'Mark has' + ' ' + mark.bmi);
    break;
    default: console.log( 'Both has same' );
}


