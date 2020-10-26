var john = {
    bills: [124, 48, 268, 180, 42],
    tipscal: function(){
        this.tips = [];
        this.finalValue = [];
        for(var i = 0; i < this.bills.length; i++)
        {
            var percentage;
            var bill = this.bills[i]
            if (bill < 50){
                percentage = .2;
            }else if (bill > 50 && bill < 200){
                percentage = .15;
            }else {
                percentage = .1;
            }
            this.tips[i] = bill * percentage;
            this.finalValue[i] = this.tips[i]    + bill;
        }
    }
}



var mark = {
    bills : [77, 375, 110,45],
    tipscal: function(){
        this.tips = [];
        this.finalValue = [];
        for(var i = 0; i < this.bills.length; i++)
        {
            var percentage;
            var bill = this.bills[i]
            if (bill < 100){
                percentage = .2;
            }else if (bill > 100 && bill < 300){
                percentage = .1;
            }else {
                percentage = .25;
            }
            this.tips[i] = bill * percentage;
            this.finalValue[i] = this.tips[i]    + bill;
        }
    }
}
john.tipscal();
mark.tipscal();
console.log(john);
console.log(mark);
avgJohn = function()