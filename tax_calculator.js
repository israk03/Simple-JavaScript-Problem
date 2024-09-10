function calculateTax(income, expense){
    if(typeof income !== "number" || typeof expense !== "number" || expense > income || expense < 0 || income < 0){
        return "Invalid Input";
    }

    let monthlyCost = income - expense;
    
    let reminder = monthlyCost * 0.2;

    return reminder;
}

let inc = 6000;
let exp = -1500;

let res = calculateTax(inc, exp);
console.log(res);
