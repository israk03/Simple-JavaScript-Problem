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

const person = {
    name: "Rajib",
    testScore: 40,
    schoolGrade: 25, 
    isFFamily: true
}
// let person = "ami";

let result = calculateFinalScore(person);
console.log(result);