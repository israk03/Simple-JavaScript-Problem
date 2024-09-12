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

console.log(waitingTime(array = [7, 8, 3, 4, 5], serialNumber = "9"));