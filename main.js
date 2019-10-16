var isGen = confirm("Do you want me to generate a password for you?");
/*var isAuto = confirm("Do you want to have a random password or using your own password?");*/

if(isGen){
	var isLength = prompt("Ok let me do this for you: what's the expected length of the password \(from 8 to 128\)?");	
	var password = generatePassword(isLength);
	var Message = document.getElementById("boxMsg");
	Message.classList.add("msgDiplay");
	Message.innerHTML = password;
}
else{
	var isSpecial = prompt("Ok please type in your own password and I will check it for you.");
}

function generatePassword(isLength) {
		this.isLength = isLength;
        var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        var retVal = "";
    for (var i = 0, n = charset.length; i < isLength; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
}

console.log(isLength);

console.log(password);