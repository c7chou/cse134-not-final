function invalidPassword() {
  document.getElementById("signInMessage").innerHTML = "Password cannot be empty";
  var signUpText = document.getElementById("signInMessage");
  signUpText.style.display = "block";
}

function invalidEmail() {
  document.getElementById("signInMessage").innerHTML = "Enter valid Email";
    var signUpText = document.getElementById("signInMessage");
  signUpText.style.display = "block";
}

function onClickForgot() {
  var resendText = document.getElementById("resendMessage");
  resendText.style.display = "block";
}

function onWrongPassword(){
  var checkPassword = document.getElementById("checkPassword")
  checkPassword.style.display = "block";
}

function isPasswordMatch(){
  var password = document.getElementById("newPassword").value;
  var confirmPassword = document.getElementById("retypeNewPassword").value;
  
  if (password != confirmPassword){
   onWrongPassword();
  }
  else{
   signUpConfirm();
  }
  
}

function validateEmail() {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	var email = document.getElementById("usermail").value;
	if (re.test(email))
		validatePassword();
	else
		invalidEmail();
}

function validatePassword(){
	var pass = document.getElementById("password").value;
	if (pass === "")
	{
		invalidPassword();
	}
	else
		document.location.href = 'list.html';
}

function signUpConfirm(){
//  onClickSignUp();
  signUpOverlay();
  document.location.href = 'welcome.html';
}

function forgotConfirm(){
  onClickForgot();
  forgotOverlay();
}

function signUpOverlay() {
	var el = document.getElementById("signUpOverlay");
  var la = document.getElementById("overlay");
	la.style.visibility = (la.style.visibility == "visible") ? "hidden" : "visible";
	el.style.visibility = (el.style.visibility == "visible") ? "hidden" : "visible";
}

function forgotOverlay(){
  var el = document.getElementById("forgotOverlay");
	var la = document.getElementById("overlay");
	la.style.visibility = (la.style.visibility == "visible") ? "hidden" : "visible";
  el.style.visibility = (el.style.visibility == "visible") ? "hidden" : "visible";
}