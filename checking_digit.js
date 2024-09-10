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

const max = "ISRAK15";

const res = checkDigitsInName(max);

console.log(res);