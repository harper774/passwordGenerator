var isGen = confirm("Do you want me to generate a password for you?");

var btnGen = document.getElementById("btnGen");
var btnCopy = document.getElementById("btnCopy");
// var btnSub = document.getElementById("buttonSubmit");

var boxMsg = document.getElementById("boxMsg");
var boxMsg2 = document.getElementById("boxMsg2");

var specialChar = document.getElementById("defaultCheck1");
var numericChar = document.getElementById("defaultCheck2");
var upperChar = document.getElementById("defaultCheck3");
var lowerChar = document.getElementById("defaultCheck4");
var passwordLength = document.getElementById("passwordLength");

var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789~·!@#$%^&*()<>/?.,;:=-+-[]{}\|"//92
var charset0 = "abcdefghijklmnopqrstuvwxyz";//26
var charset1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";//26
var charset2 = "0123456789";//10
var charset3 = "~·!@#$%^&*()<>/?.,;:=-+-[]{}\|";//30

function passwordForCheckBox(){
	var password = "";
	var i = 0;
	var checkLow = 0;
	var checkUpp = 0;
	var checkNum = 0;
	var checkSpe = 0;

	if (lowerChar.checked){
		checkLow++;
		console.log(checkLow);
		i++;
	}
	if (upperChar.checked){
		checkUpp++;
		i++;
	}
	if (numericChar.checked){
		checkNum++;
		i++;
	}
	if (specialChar.checked){
		checkSpe++;
		i++;
	}
	return {
		num:i,
		checkLow: checkLow,
		checkUpp: checkUpp,
		checkNum: checkNum,
		checkSpe: checkSpe
	};
}

function genPassword(number,charsetType){
	this.N = number;
	this.C = charsetType;
	var password = "";

	switch (C){
		case 0: 
		for (var i = 0; i<N; i++){
			password += charset0.charAt(Math.floor(Math.random() * 26));
			console.log(password);
		}
		break;

		case 1:
		for (var i = 0; i<N; i++){
			password += charset1.charAt(Math.floor(Math.random() * 26));
			console.log(password);
		}
		break;

		case 2:
		for (var i = 0; i<N; i++){
			password += charset2.charAt(Math.floor(Math.random() * 10));
			console.log(password);
		}
		break;

		case 3:
		for (var i = 0; i<N; i++){
			password += charset3.charAt(Math.floor(Math.random() * 30));
			console.log(password);
			console.log(typeof(password));
		}
		break;
	}
	console.log(typeof(password));
	return password;

}

function generatePassword(isLength) {
	var password = "";
	var num = passwordForCheckBox().num;

	console.log(num);
	this.L = isLength;
	if(L<8 || L>128 || num<1){
		alert("Sorry! You length does not fit the requirement! Please re-enter another number between 8 and 128!");
	}
	else {
		console.log('hello');
		console.log(passwordForCheckBox().checkLow);
		switch (num){
			case 1:
			if(passwordForCheckBox().checkLow){
				password = genPassword(L,0);
				console.log("password");
			}
			else if(passwordForCheckBox().checkUpp){
				password = genPassword(L,1);
			}
			else if(passwordForCheckBox().checkNum){
				password = genPassword(L,2);
			}
			else{
				password = genPassword(L,3);
			}
			break;

			case 2:
			if(passwordForCheckBox.checkLow){
				if(passwordForCheckBox.checkUpp){

				}
				else if(passwordForCheckBox.checkNum){

				}
				else if(passwordForCheckBox.checkSpe){

				}
			}
			else if (passwordForCheckBox.checkUpp){
				if (passwordForCheckBox.checkNum){

				}
				else if (passwordForCheckBox.checkSpe){

				}
			}
			else if (passwordForCheckBox.checkNum){
				if(passwordForCheckBox.checkSpe){

				}
			}
			break;

			case 3:
			if(!passwordForCheckBox.checkLow){

			}
			else if (!passwordForCheckBox.checkUpp){

			}
			else if (!passwordForCheckBox.checkNum){

			}
			else if (!passwordForCheckBox.checkSpe){

			}
			break;

			case 4:
			

		}
	}
	return password;

			// var password = "";
		// //fix the first four characters in different charsets
		// //this is to make sure that we have at least one of each character group
		// int0 = Math.floor(Math.random() * 26);
		// int1 = Math.floor(Math.random() * 26);
		// int2 = Math.floor(Math.random() * 10);
		// int3 = Math.floor(Math.random() * 30);
		// password = charset0[int0]+charset1[int1]+charset2[int2]+charset3[int3];
		// for (var i = 0, n = charset.length; i < L-num; ++i) {
		// 	password += charset.charAt(Math.floor(Math.random() * n));
		// }
		// return password;
}

function passwordCheck(userInput){
	this.user = userInput;
	var length = user.length;
	var score = 0;
	
	if(length<8 || length>128){
		alert("Sorry! You password does not fit the requirement!");
		return user;
	}
	if(user.match(/[a-z]/)){
		score++;	
	}
	if(user.match(/[A-Z]/)){
		score++;	
	}
	if(user.match(/[0-9]/)){
		score++;	
	}
	if(user.match(/[^a-zA-Z0-9]/)){
		score++;	
	}
	
	if(score > 3){
		return user;
	}
	else{
		alert("Sorry! You password does not fit the requirement!");
		return user;
	}
}

//button for Gen and Copy
//when clicked, they will have different reactions

btnGen.addEventListener("click", function(e){

	boxMsg.classList.add("msgDisplay");
	boxMsg.innerHTML = generatePassword(passwordLength.value);
	console.log(passwordLength.value);
});

btnCopy.addEventListener("click", function(e){
	boxMsg.select();
	document.execCommand("Copy");
	boxMsg.classList.add("msgDisplay");
	boxMsg2.classList.add("msg2Display");
	boxMsg2.innerHTML = "<p>You have successfully copied the password!</p>";
});


//Main process

if(isGen){
	alert('Please fill out the following form and click on "Generate Password" to get your own password');
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
		alert("Ok then see you!");
	}
}


// if(isGen){
// 	isLength = prompt("Ok let me do this for you: what's the expected length of the password \(from 8 to 128\)?");	
// 	console.log(isLength);
// 	if(isLength === null){
// 		alert("Ok then see you!");
// 	}
// 	else{
// 		var password = generatePassword(isLength);
// 		var Message = document.getElementById("boxMsg");
// 		Message.classList.add("msgDisplay");
// 		Message.innerHTML = password;
// 	}
// }
// else{
// 	var isSpecial = confirm("Ok please type in your own password and I will check it for you:");
// 	if(isSpecial){
// 		var userInput = prompt("Please type in your password below:");
// 		var userPassword = passwordCheck(userInput);
// 		boxMsg.classList.add("msgDisplay");
// 		boxMsg.innerHTML = userPassword;
// 	}
// 	else{
// 		alert("Ok then see you!");
// 	}
// }

