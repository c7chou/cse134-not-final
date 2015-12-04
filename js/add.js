  /***Global Variables***/
  var myDataRef = new Firebase('https://jjb750uy9yj.firebaseio-demo.com/habits/');
	var uploadImageFlag = 0;

  function selectImage(name) {
    //Clear all the other effects
    document.getElementById('icon1').style.border = "none";
    document.getElementById('icon2').style.border = "none";
    document.getElementById('icon3').style.border = "none";
		document.getElementById('icon4').style.border = "none";
		uploadImageFlag = 0;
    var image = document.getElementById(name);
    image.style.border = "5px solid #42A5F5";

    var srcArray = image.src.split('/');
    var src = srcArray[srcArray.length - 1]

    //save current selected icon
    selectedIcon = src;
  }

    function uploadImage()
    {
        $('#file-upload').trigger('click');
		uploadImageFlag = 1;
		
        //document.getElementById("icon4").src = e.target.result;
        //alert("wokred");
    }

    
  $('#save').click(function(event) {

    //Get element information
    var name = $('#title').val();
    var text = $('#others').val();

    /*
     * Title Check
     */
    if (name == ''){
      title_ex.style.display = 'block';
      title_text.style.color = 'red';
      return;   
    }
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    var daysOfWeek = {};
    var checkedValues = document.getElementsByName('dayOfTheWeek');
    var times = 0;
    for(var i=0, n=checkedValues.length; i<n ; i++)
    {
      if(checkedValues[i].checked)
      {
        daysOfWeek[days[i]] = 'yes';
        times++;
      }
      else
      {
        daysOfWeek[days[i]] = 'no';
      }
    }

    /*
     * Week Check
     */

    if (times == 0){
        weekly_ex.style.display = 'block';
        weekly_freq.style.color = 'red';
        return;
    }
    var frequencyPerDay = document.getElementById('others').value;

    var habitNameInput = document.getElementById('title').value;
    //var habitOtherInput = document.getElementById('others').value;      
    //habitOtherInput = Number(habitOtherInput);
	  
	if(uploadImageFlag)
		{
			selectedIcon = document.getElementById('icon4').src;
		}
	  else
	  {
		  selectedIcon = '../img/' + selectedIcon;
	  }
      
    /* notification variable */ 

    var notiHour = document.getElementById("notificationHours").value;
    var notiMin = document.getElementById("notificationMins").value;



      
    /*************************/

    /*
     * Notification check
     */
    if (notiHour == ''){
        hour_min_ex.style.display = 'block';
        hour_min_ex.style.color = 'red';
        hour_val.style.color = 'red';
        return;
    }
        
    if (notiMin == ''){
        hour_min_ex.style.display = 'block';
        hour_min_ex.style.color = 'red';
        min_val.style.color = 'red';
        return; 
    }
        
      

    /*
     * Daily Check
     */

    if ((frequencyPerDay == undefined)||(isNaN(frequencyPerDay))||(frequencyPerDay<0)){
      daily_ex.style.display = 'block';
      daily_freq.style.color = 'red';
      return;
    }
 
    var currentTime = Date.now();
    if (!Date.now) {
      Date.now = function() { return new Date().getTime(); }
    }

    if(/[^a-zA-Z0-9_\-\ /]/.test( frequencyPerDay ))
    {
      alert('Input must be alphanumeric. Please remove non-alphanumeric symbols to continue.');
    }
    else if(/[^a-zA-Z0-9\-\ /]/.test( habitNameInput ))
    {
      alert('Input must be alphanumeric. Please remove non-alphanumeric symbols to continue.');
    }
    else
    {
      //make firebase object and push it to DB
      myDataRef.push({
        habitData: {
          name: name, 
          text: text, 
          'iconId': selectedIcon,
          daysOfWeek: daysOfWeek,
          frequencyPerDay: frequencyPerDay,
          'settings': {
            'turnoff': '0', 
            'sleep':'0',
            'pause':'0'
          },
          'habitProgress':{	
            'counter': '0', 
            'maxRecord':'1'
          }, 
          'timestamp': currentTime,
          'notiTime':{
            notiHour: notiHour,
            notiMins: notiMin
          }
        }
      });

      document.location='list.html';
    } 
  }); 

  $(document).ready(function() {
      //event.preventDefault(); //prevent submit: for testing purposes
      //alert("End.");
  });



/***********************************************************************************************
*
*  Timing constraint in nofication interval input
*
***********************************************************************************************/


function isNumberInHour(input){
		if( input.value < 0) input.value = 0;
		if( input.value > 23) input.value = 23;
}

function isNumberInMin(input){
		if( input.value < 0) input.value = 0;
		if( input.value > 59) input.value = 59;
} 






/***********************************************************************************************
*
*  pushing notification
*
***********************************************************************************************/



var isPushEnabled = false;



function notifyMe() {
	//check if notification is supported by broswer
	if (!("Notification" in window)) {
		alert("This browser does not support system notifications");
	}

	// Let's check whether notification permissions have already been granted
	else if (Notification.permission === "granted") {
		// If it's okay let's create a notification
		//var notification = new Notification("Hi there!");
		//document.getElementById("notificationIntervalBar").style.visibility = "visible";
		//document.getElementById("noti-button").style.visibility = "hidden";
		//createNotification();
	}

	// Otherwise, we need to ask the user for permission
	else if (Notification.permission !== 'denied') {
		Notification.requestPermission(function (permission) {
			// If the user accepts, let's create a notification
			if (permission === "granted") {
					//var notification = new Notification("Hi there!");
					//createNotification();
			}
		});
	}
}


// create new notification
function createNotification(strTitle, sIcon){
	var strBody = "Time to " + strTitle;
	var note = {
			body: strBody,
			icon: sIcon
	}
	var n = new Notification(strTitle, note);
	n.onclick = function(){
			// should be modify to go to notification page instead
			document.location='list.html';
	}
	setTimeout(n.close.bind(n), 1000);
}

				
