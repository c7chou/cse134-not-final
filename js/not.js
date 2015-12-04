//time to start the check
var hourToCheck = 9;

//1 hour = 3.6e6 & 1 minute = 60000
var interval = 60000;
//var updateInterval = 30000;

//doing the math and if time then send the alert
function timeToNotify(){
	//habitupdateList
	window.location = 'notification.html';

//used to go to the settings/notifications page
function set(){
		window.location = '../src/notification.html';
}

//puts the alert to asleep temporarily
function end(){
		//window.alert("clicked the x");
		var el = document.getElementById("not");
		el.style.display = 'none';
}

function list(key){
	key.remove();
	window.location = '../src/list.html';
}

//setting the interval
setInterval(timeToNotify, interval);
//setInterval(updateInt, updateInterval);



const HR = 3600000;
const MIN = 60000;
var refData = new Firebase('https://jjb750uy9yj.firebaseio-demo.com/habits/');
var habitNotList = [];
var habitNotObject = {};
var habitupdateList = {};
function addNotificationforHabit(habitKey, name, Icon)
{
		$('#notification-list').append(
		'<li id=\"' + habitKey + '\" onclick=\"list(this)\">' +
'<ul class=\"notification-info\" >' +
	//'<li></li>'+
				'<li style=\position: relative;"\"><img height=\"45px\" width=\"45px\" class=\"habit-icon\" src=\"'+Icon+'\" alt=\"habit icon\" style=\"position: relative; top: 3px;left: -15px;\"> <div class=\"notification-name\" style=\"position: relative; top: -15px;\">Please update habit: ' + name + '</div></li>' +
'</ul>' +

'</li>'
		);
}
$(document).ready(function()
{
	refData.on('child_added', function(snapshot){

		/** 
		 notification 
		 timing 
		 */
		var date = new Date();
		var current_time = date.getTime();
		var start_time = snapshot.val().habitData.timestamp;
		var time_diff = (current_time - start_time) / 60000;
		var hour = snapshot.val().habitData.notiTime.notiHour;
		var mins = snapshot.val().habitData.notiTime.notiMins;
		var interval = ((HR * hour) + (MIN * mins)) / 60000;
		var data = snapshot.val().habitData;
		var habitKey = snapshot.name();
		refupdate = new Firebase('https://jjb750uy9yj.firebaseio-demo.com/habits/' +habitKey+'/');
		habitupdate = refupdate.child('habitData');
		habitupdateList[habitKey] = habitupdate;
		var flag = snapshot.val().habitData.flag;
		dataIcon = data.iconId;
		dataName = data.name;
		dataPause = data.settings.pause;
		dataSleep = data.settings.sleep;
		dataTurnoff = data.settings.turnoff;


		if(data.hasOwnProperty('name')){
				name = data.name ? data.name : '';
				if(name.trim().length > 0)
						{
								habitNotList.push({key: habitKey, name: name});
								habitNotObject[habitKey] = name;
						}
		}
		if (((time_diff % interval) < 1) && flag){
			if((dataPause && dataSleep && dataTurnoff) == 0){
				addNotificationforHabit(habitKey, name, dataIcon);
				createNotification(dataName, dataIcon);
			}
		}
	});
});
