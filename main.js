//this is to make a password generator that could generate the password as desired by the user
//also it could help check if the user's password match the requirement
//the password requirement could be changed by changing function passwordCheck

//firstly use dom to get the html objects
var isGen = confirm("Do you want me to generate a password for you?");

var btnGen = document.getElementById("btnGen");
var btnCopy = document.getElementById("btnCopy");

var boxMsg = document.getElementById("boxMsg");
var boxMsg2 = document.getElementById("boxMsg2");

var specialChar = document.getElementById("defaultCheck1");
var numericChar = document.getElementById("defaultCheck2");
var upperChar = document.getElementById("defaultCheck3");
var lowerChar = document.getElementById("defaultCheck4");
var passwordLength = document.getElementById("passwordLength");

//define the charset types for password requirement
var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789~·!@#$%^&*()<>/?.,;:=-+-[]{}\|"//92
var charset0 = "abcdefghijklmnopqrstuvwxyz";//26
var charset1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";//26
var charset2 = "0123456789";//10
var charset3 = "~·!@#$%^&*()<>/?.,;:=-+-[]{}\|";//30//how to display special characters?

//the function is to check what the user has selected and the desired password length
function passwordForCheckBox(){
	var i = 0;//i represents how many checkboxes are checked
	var checkLow = 0;//check lowercase letters
	var checkUpp = 0;//check uppercase letters
	var checkNum = 0;//check numeric letters
	var checkSpe = 0;//check specail characters

	//the propoerty of checked could be got from the checkbox
	if (lowerChar.checked){
		checkLow++;
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

//this is to generate password with the length and the characterset
//when charset type is 0 ---- lowercase
//when type is 1 ---- uppercase
//when type is 2 ---- numeric number
//when type is 3 ---- special chaarcters
function genPassword(number,charsetType){
	this.N = number;
	this.C = charsetType;
	var password = "";

	switch (C){
		case 0: 
		for (var i = 0; i<N; i++){
			password += charset0.charAt(Math.floor(Math.random() * 26));
		}
		break;

		case 1:
		for (var i = 0; i<N; i++){
			password += charset1.charAt(Math.floor(Math.random() * 26));
		}
		break;

		case 2:
		for (var i = 0; i<N; i++){
			password += charset2.charAt(Math.floor(Math.random() * 10));
		}
		break;

		case 3:
		for (var i = 0; i<N; i++){
			password += charset3.charAt(Math.floor(Math.random() * 30));
			console.log(password);
		}
		break;
	}
	return password;
}

//this is to random the password array
//because the password from my function generatePassword is in sequence accoding to charset types
function randomPassword(password) {
	this.pw = password;
	var temp = 0;//to store the temporay data
	var j= 0;

    for (var i = pw.length - 1; i >= 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        temp = pw[i];
        pw[i] = pw[j];
        pw[j] = temp;
	}
	console.log(pw);
	return pw;	
}

// function randomPassword(password) {
// 	this.pw = password;
// 	var temp = 0;//to store the temporay data
// 	var j= 0;

//     for (var i = pw.length - 1; i >= 0; i--) {
//         j = Math.floor(Math.random() * (i + 1));
// 		temp = pw.charAt(i);		
// 		pw.valueOf(i) = pw.charAt(j);
//         pw.valueOf(j) = temp;
// 	}
//     return pw;
// }

//this is to delete the commas caused by toString
function commaDelete(password){
	this.pw = password;
	var L = password.length;
	pw = pw.replace(/,/g, "");//g is for global modifier, which is to reaplace all the ',', not just the first one
	return pw;
}

//this is to generat password with length
//also the longest functions in the script
//it also use function passwordForCheckBox to retreive the user data
function generatePassword(isLength) {
	var password = "";
	console.log(password);
	var num = passwordForCheckBox().num;//to acquire the data from the checkbox and the password length
	var t,t2 = 0;//t and t2 is for the digits in each character sets

	this.L = isLength;
	if(L<8 || L>128 || num<1){
		alert("Sorry!Please re-enter another number between 8 and 128 and tick at least one box!");
	}
	else {
		//switch num to determine the following 8 scenarios
		switch (num){
			//when num = 1, there are 4 possibilities
			case 1:
			if(passwordForCheckBox().checkLow){
				password = genPassword(L,0);
				//I could not random the string object for now cause the charAt or valuOf could not overwritten
				//so I choose to change the string to array by using Array.from
				//then use function randomPassword to random the array
				//then use toString to get it back to string
				//then delete the commas in the string to return the password
				password = commaDelete(randomPassword(Array.from(password)).toString());
			}
			else if(passwordForCheckBox().checkUpp){
				password = genPassword(L,1);
				password = commaDelete(randomPassword(Array.from(password)).toString());
			}
			else if(passwordForCheckBox().checkNum){
				password = genPassword(L,2);
				password = commaDelete(randomPassword(Array.from(password)).toString());
			}
			else{
				password = genPassword(L,3);
				password = commaDelete(randomPassword(Array.from(password)).toString());
			}
			break;

			//when num = 2, there are 6=3+2+1 possibilities
			case 2:
			t = Math.round(L/2);//t is to to make each chaset types to be divided into two groups
			console.log(t);
			if(passwordForCheckBox().checkLow){
				if(passwordForCheckBox().checkUpp){
					password = genPassword(t,0);
					console.log(password);
					password += genPassword(L-t,1);
					console.log(password);
					password = commaDelete(randomPassword(Array.from(password)).toString());
				}
				else if(passwordForCheckBox().checkNum){
					password = genPassword(t,0);
					password += genPassword(L-t,2);
					password = commaDelete(randomPassword(Array.from(password)).toString());
				}
				else if(passwordForCheckBox().checkSpe){
					password = genPassword(t,0);
					password += genPassword(L-t,3);
					password = commaDelete(randomPassword(Array.from(password)).toString());
				}
			}
			else if (passwordForCheckBox().checkUpp){
				if (passwordForCheckBox().checkNum){
					password = genPassword(t,1)
					password += genPassword(L-t,2)
					password = commaDelete(randomPassword(Array.from(password)).toString());
				}
				else if (passwordForCheckBox().checkSpe){
					password = genPassword(t,1);
					password += genPassword(L-t,3);
					password = commaDelete(randomPassword(Array.from(password)).toString());
				}
			}
			else if (passwordForCheckBox().checkNum){
				if(passwordForCheckBox().checkSpe){
					password = genPassword(t,2);
					console.log(password);
					password += genPassword(L-t,3);
					console.log(L-t);
					console.log(password);
					password = commaDelete(randomPassword(Array.from(password)).toString());
				}
			}
			break;

			//when num = 3, there are 4 possibilites
			case 3:
			t = Math.round(L/3);//t is to to make each chaset types to be divided into 3 groups
			if(!passwordForCheckBox().checkLow){
				password = genPassword(t,1);
				password += genPassword(t,2);
				password += genPassword(L-2*t,3);
				password = commaDelete(randomPassword(Array.from(password)).toString());
			}
			else if (!passwordForCheckBox().checkUpp){
				password = genPassword(t,0);
				password += genPassword(t,2);
				password += genPassword(L-2*t,3);
				password = commaDelete(randomPassword(Array.from(password)).toString());
			}
			else if (!passwordForCheckBox().checkNum){
				password = genPassword(t,0);
				password += genPassword(t,1);
				password += genPassword(L-2*t,3);
				password = commaDelete(randomPassword(Array.from(password)).toString());
			}
			else if (!passwordForCheckBox().checkSpe){
				password = genPassword(t,0);
				password += genPassword(t,1);
				password += genPassword(L-2*t,2);
				password = commaDelete(randomPassword(Array.from(password)).toString());
			}
			break;

			//when num = 4, there are only one possibility
			case 4:
				t = Math.round(L/4);
				console.log(t);
				password = genPassword(t,0);
				password += genPassword(t,1);
				password += genPassword(t,2);
				password += genPassword(L-3*t,3);
				password = commaDelete(randomPassword(Array.from(password)).toString());
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

//this is to check the if the password that user input fit the requirement or not
function passwordCheck(userInput){
	this.user = userInput;
	var length = user.length;
	var score = 0;//score is how many charset types can be found in the password
	
	//using match to determine whether the password contains each charater set
	//match will return null if there are no matching between the two
	if(length<8 || length>128){
		alert("Sorry! You password length does not fit the requirement!");
		return false;
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
	
	if(score > 0){
		return user;
	}
	else{
		alert("Sorry! You password should be more secure!");
		return false;
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
	boxMsg2.classList.add("msg3Display");
	boxMsg2.innerHTML = "<p>You have successfully copied the password!</p>";
	setTimeout(('boxMsg2.innerHTML = ""'),2000);
});


//Main process

// if(isGen){
// 	alert('Please fill out the following form and click on "Generate Password" to get your own password');
// }
if(!isGen){
	var isSpecial = confirm("Ok please type in your own password and I will check it for you:");
	if(isSpecial){
		var userInput = prompt("Please type in your password below:");
		var userPassword = passwordCheck(userInput);
		console.log(userPassword);
		if(userPassword === false){
			boxMsg.classList.add("msg3Display");
			boxMsg.innerHTML = "Please see the instructions above. (This will disappeat in 5 seconds.)"
			setTimeout(('boxMsg.innerHTML = ""'),5000);
		}
		else{
			boxMsg.classList.add("msgDisplay");
			console.log(userPassword);
			boxMsg.innerHTML = userPassword;
		}
	}
	else{
		alert("Ok then see you! You could still use the form to get your new password!");
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

