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
const result = sendNotification('sadia8icloud.com');
console.log(result);
