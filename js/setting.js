
/* All session turnoff notication*/
function toggleTurnOff(source) {
  var checkboxes = document.getElementsByName('turnoff');
  for(var i=0, n=checkboxes.length;i<n;i++) {
    /*alert(JSON.stringify(checkboxes));*/
    checkboxes[i].checked = source.checked;
  }
}

/* All session pause notication*/
function togglePause(source) {
  var checkboxes = document.getElementsByName('pause');
  for(var i=0, n=checkboxes.length;i<n;i++) {
    /*alert(JSON.stringify(checkboxes));*/
    checkboxes[i].checked = source.checked;
  }
}

/* All session sleep notication*/
function toggleSleep(source) {
  var checkboxes = document.getElementsByName('sleep');
  for(var i=0, n=checkboxes.length;i<n;i++) {
    /*alert(JSON.stringify(checkboxes));*/
    checkboxes[i].checked = source.checked;
  }
}

