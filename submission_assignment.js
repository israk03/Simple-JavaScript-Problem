// 1st problem
function calculateTax(income, expense){
    if(typeof income !== "number" || typeof expense !== "number" || expense > income || expense < 0 || income < 0){
        return "Invalid Input";
    }

    let monthlyCost = income - expense;
    
    let reminder = monthlyCost * 0.2;

    return reminder;
}


// 2nd problem
function sendNotification(email){

    if(email.indexOf('@') === -1){
        return "Invalid Email"
    }

    const splitEmail = email.split('@');
    const userName = splitEmail[0];
    const domainName = splitEmail[1];

    const notification = userName + ' sent you an email from ' + domainName;
    return notification;

}


// 3rd problem
function checkDigitsInName(name){

    if(typeof name !== "string"){
        return "Invalid Input";
    }

    for(let i = 0; i < name.length; i++){
        if(name[i] === '0' || name[i] === '1' || name[i] === '2' || name[i] === '3' || name[i] === '4' || name[i] === '5' || name[i] === '6' || name[i] === '7' || name[i] === '8' || name[i] === '9'){
            return true;
        }
    }

    return false;
}


// 4th problem
function calculateFinalScore(info){

    if(typeof info !== "object"){
        return "Invalid Input";
    }

    let finalScore = info.testScore + info.schoolGrade;

    if(info.isFFamily){
        finalScore += 20;
    }

    if(finalScore >= 80){
        return true
    }

    return false
    
}


// 5th problem
function  waitingTime(waitingTimes, serialNumber){
    
    if( !Array.isArray(waitingTimes) || typeof serialNumber !== 'number'){
        return "Invalid Input";
    }

    let sum = 0;
    for(let i = 0; i < waitingTimes.length; i++){
        sum = sum + waitingTimes[i];
    }
    
    const average = Math.round(sum / waitingTimes.length);

    const serialRemaining = serialNumber - waitingTimes.length - 1;
    const reaminingTime = average * serialRemaining;

    return reaminingTime;

}