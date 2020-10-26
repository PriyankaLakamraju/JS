function tipCalculator(bill){
    var per;
    if(bill < 50){per = .2;
    }else if(bill >=50 && bill<200){
        per= .15;
    }else if(bill > 200){
        per= .2;
    }
    return per * bill;
}
var bill = [124, 48, 268];
var tips = [tipCalculator(bill[0]), tipCalculator(bill[1]), tipCalculator(bill[2])];
var finalvalues = [bill[0] + tips[0], bill[1] + tips[1], bill[2] + tips[2]];

console.log(tips, finalvalues);