var isGen = confirm("Do you want me to generate a password for you?");

var btnGen = document.getElementById("btnGen");
var btnCopy = document.getElementById("btnCopy");
var boxMsg = document.getElementById("boxMsg");
var boxMsg2 = document.getElementById("boxMsg2");

var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789~·!@#$%^&*()<>/?.,;:=-+-[]{}\|"//92
var charset0 = "abcdefghijklmnopqrstuvwxyz";//26
var charset1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";//26
var charset2 = "0123456789";//10
var charset3 = "~·!@#$%^&*()<>/?.,;:=-+-[]{}\|";//30

function generatePassword(isLength) {

	this.isLength = isLength;

	var password = "";
	//fix the first four characters in different charsets
	//this is to make sure that we have at least one of each character group
	int0 = Math.floor(Math.random() * 26);
	int1 = Math.floor(Math.random() * 26);
	int2 = Math.floor(Math.random() * 10);
	int3 = Math.floor(Math.random() * 30);
	password = charset0[int0]+charset1[int1]+charset2[int2]+charset3[int3];

	for (var i = 0, n = charset.length; i < isLength-4; ++i) {
		password += charset.charAt(Math.floor(Math.random() * n));
	}
	return password;
}

function passwordCheck(userInput){
	this.userInput = userInput;
	var length = userInput.length;
	var score = 0;
	
	if(length<8 || length>128){
		alert("Sorry! You password does not fit the requirement!");
		return userInput;
	}
	if(userInput.match(/[a-z]+/)){
		score++;	
	}
	if(userInput.match(/[A-Z]+/)){
		score++;	
	}
	if(userInput.match(/[0-9]+/)){
		score++;	
	}
	if(userInput.match(/[^a-zA-Z0-9]+/)){
		score++;	
	}
	
	if(score > 3){
		return userInput;
	}
	else{
		alert("Sorry! You password does not fit the requirement!");
		return userInput;
	}
	
	/*if(length<8 || length>128){
		alert("1Sorry! You password does not fit the requirement!");	
		return userInput;
	}else{
	
	for (var i = 0; i < userInput.lenghth; i++){
		for (var j = 0; j < charset0.lenghth; j++){
			if(userInput[i] === charset0[j]){
				console.log(userInput[i]);
				score++;
				continue;
			}
			else if(userInput[i] === charset1[j]){
				score++;
				continue;
			}
			else if(userInput[i] === charset2[j]){
				score++;
				continue;
			}
			else if(userInput[i] === charset2[j]){
				score++;
				continue;
			}
			else{
				continue;
			}
		}
	}
	}	
	*/
	

}

// function btnGen(isLength){
// 	this.isLength = isLength
// 	boxMsg.classList.add("msgDisplay");
// 	boxMsg.innerHTML = generatePassword(isLength);
// }

/*var isAuto = confirm("Do you want to have a random password or using your own password?");*/

if(isGen){
	var isLength = prompt("Ok let me do this for you: what's the expected length of the password \(from 8 to 128\)?");	
	var password = generatePassword(isLength);
	var Message = document.getElementById("boxMsg");
	Message.classList.add("msgDisplay");
	Message.innerHTML = password;
}
else{
	var isSpecial = confirm("Ok please type in your own password and I will check it for you:");
	if(isSpecial){
		var userInput = prompt("Please type in your password below:");
		var userPassword = passwordCheck(userInput);
		boxMsg.classList.add("msgDisplay");
		boxMsg.innerHTML = userPassword;
	}
	else{
		var isLength = prompt("Ok let me do this for you: what's the expected length of the password \(from 8 to 128\)?");	
		var password = generatePassword(isLength);
		var Message = document.getElementById("boxMsg");
		Message.classList.add("msgDisplay");
		Message.innerHTML = password;
	}
}


btnGen.addEventListener("click", function(e){
	boxMsg.classList.add("msgDisplay");
	boxMsg.innerHTML = generatePassword(isLength);
});

btnCopy.addEventListener("click", function(e){
	boxMsg.select();
	document.execCommand("Copy");
	// console.log(document.execCommand("Copy"));
	boxMsg.classList.add("msgDisplay");
	boxMsg2.classList.add("msg2Display");
	boxMsg2.innerHTML = "<strong>YOU HAVE SUCCESSFULLY COPIED THE PASSWORD TO YOUR COPYBOARD!</strong>";
});


// console.log(isLength);

// console.log(password);