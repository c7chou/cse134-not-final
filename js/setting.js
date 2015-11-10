
/* All session turnoff notication*/
function toggleTurnOff(source) {
  var check = document.getElementsByName('turnoff');
  for(var i=0, n=check.length;i<n;i++) {
    /*alert(JSON.stringify(checkboxes));*/
    check[i].checked = source.checked;
  }
}

/* All session pause notication*/
function togglePause(source) {
  var check = document.getElementsByName('pause');
  for(var i=0, n=check.length;i<n;i++) {
    /*alert(JSON.stringify(checkboxes));*/
    check[i].checked = source.checked;
  }
}

/* All session sleep notication*/
function toggleSleep(source) {
  var check = document.getElementsByName('sleep');
  for(var i=0, n=check.length;i<n;i++) {
    /*alert(JSON.stringify(checkboxes));*/
    check[i].checked = source.checked;
  }
}

function checkAllTurnOff(){
	var turnoffBox = document.getElementsByName('turnoff');
	var turnoffAll = document.getElementById('turnOffAll');
	
	var checked = 0;
	var unchecked = 0;
	
	for(var i=0, n=turnoffBox.length;i<n;i++){
		if(turnoffBox[i].checked){
			checked++;
		}	
		else{ 
			unchecked++;
		}
	}
	
	if(turnoffBox.length == checked){
		turnoffAll.checked = true;
	}else{
		turnoffAll.checked = false;
	}
}


/*check number of pause*/
function checkAllPause(){
	var pauseBox = document.getElementsByName('pause');
	var pauseAll = document.getElementById('pauseAll');
	
	var checked = 0;
	var unchecked = 0;
	
	for(var i=0, n=pauseBox.length;i<n;i++){
		if(pauseBox[i].checked){
			checked++;
		}	
		else{ 
			unchecked++;
		}
	}
	
	if(pauseBox.length == checked){
		pauseAll.checked = true;
	}else{
		pauseAll.checked = false;
	}
}

/* check number of sleep*/
function checkAllSleep(){
	var sleepBox = document.getElementsByName('sleep');
	var sleepAll = document.getElementById('sleepAll');
	
	var checked = 0;
	var unchecked = 0;
	
	for(var i=0, n=sleepBox.length;i<n;i++){
		if(sleepBox[i].checked){
			checked++;
		}	
		else{ 
			unchecked++;
		}
	}
	
	if(sleepBox.length == checked){
		sleepAll.checked = true;
	}else{
		sleepAll.checked = false;
	}
}


