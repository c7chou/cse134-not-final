function onClickSignUp() {
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

function signUpConfirm(){
  onClickSignUp();
  signUpOverlay();
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