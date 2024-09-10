// 1st problem
function calculateTax(income, expense){
    if(typeof income !== "number" || typeof expense !== "number" || expense > income || expense < 0 || income < 0){
        return "Invalid Input";
    }

    let monthlyCost = income - expense;
    
    let reminder = monthlyCost * 0.2;

    return reminder;
}