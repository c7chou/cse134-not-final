var refData = new Firebase('https://jjb750uy9yj.firebaseio-demo.com/habits/');
var habitSettingList = [];
var habitSettingObject = {};


/* All session turnoff notication*/
function toggleTurnOff(source) {
  var checkboxes = document.getElementsByName('turnoff');
  for(var i=0, n=checkboxes.length;i<n;i++) {
    /*alert(JSON.stringify(checkboxes));*/
    checkboxes[i].checked = source.checked;
    updateDb(checkboxes[i]);
  }
    //alert('tester.');
}

/* All session pause notication*/
function togglePause(source) {
  var checkboxes = document.getElementsByName('pause');
  for(var i=0, n=checkboxes.length;i<n;i++) {
    /*alert(JSON.stringify(checkboxes));*/
    checkboxes[i].checked = source.checked;
    updateDb(checkboxes[i]);
  }
}

/* All session sleep notication*/
function toggleSleep(source) {
  var checkboxes = document.getElementsByName('sleep');
  for(var i=0, n=checkboxes.length;i<n;i++) {
    /*alert(JSON.stringify(checkboxes));*/
    checkboxes[i].checked = source.checked;
    //alert(checkboxes[i].id);
    updateDb(checkboxes[i]);
  }
}

function updateDb(element)
{
    //alert('called');
    var habitData = $(element).prop('id');
    var array = habitData.split('-');
    var statusStateName = array[0];

    var habitDataRef = refData.child('-' + array[2] +'/habitData/settings/');

    var statusStateVal;
    if($(element).prop("checked") == true)
    {
        statusStateVal = '1';
    }
    else
    {
        statusStateVal = '0';    
    }

    if(statusStateName.localeCompare('sleep') == 0)
    {
        habitDataRef.update({sleep: statusStateVal});
    }
    else if (statusStateName.localeCompare('pause') == 0)
    {
        habitDataRef.update({pause: statusStateVal});
    }
    else if (statusStateName === 'turnoff')
    {
        habitDataRef.update({turnoff: statusStateVal});
    }

}
   
function addSettingOptionforHabit(habitKey, name, checked)
{
		//alert('beginning of append!');
		$('#setting-list').append(

		'<li id=\"' + habitKey + '\">' + 
'<ul class=\"setting-info\">' +
				'<li><div class=\"setting-name\">' + name + '</div></li>' +
'</ul>' +
'<ul class=\"notification\">' +
	'<li><div class=\"notification-type\">Turn Off</div><hr></li>' +
	'<li><div class=\"notification-type\">Pause</div><hr></li>' +
	'<li><div class=\"notification-type\">Sleep</div></li>' +
'</ul>' +
'<div class=\"onoff\">' +
	'<span class=\"switches\">' +
		'<div class=\"onoffswitch\">' +
			'<input type=\"checkbox\" class=\"onoffswitch-checkbox\" id=\"turnoff-'+habitKey+'\" name=\"turnoff\" ' + checked['turnoff'] + '" onclick=\"updateHabitState(this)\">' +
			'<label class=\"onoffswitch-label\" for=\"turnoff-' + habitKey + '\"> </label>' +
		'</div>' +
	'</span>' +
	'<span class=\"switches\">' +
		'<div class=\"onoffswitch\">' +
			'<input type=\"checkbox\" class=\"onoffswitch-checkbox\" id=\"pause-'+habitKey+'\" name=\"pause\" ' + checked['pause'] + ' onclick=\"updateHabitState(this)\">' +
			'<label class=\"onoffswitch-label\" for=\"pause-'+habitKey+'\"></label>' +
		'</div>' +
	'</span>' +

	'<span class=\"switches\">' +
		'<div class=\"onoffswitch\" >' +
			'<input type=\"checkbox\" class=\"onoffswitch-checkbox\" id=\"sleep-'+habitKey+'\" name=\"sleep\" ' + checked['sleep'] + ' onclick=\"updateHabitState(this)\">' +
			'<label class=\"onoffswitch-label\" for=\"sleep-'+habitKey+'\"></label>' +
		'</div>' +
	'</span>' +
'</div>' +
'</li>'              
		);   

		//alert('End of append.');
}

function updateHabitState(element)
{
		//alert();
		var habitData = $(element).prop('id');
		var array = habitData.split('-');
		var statusStateName = array[0];

		var habitDataRef = refData.child('-' + array[2] +'/habitData/settings/');

		var statusStateVal;
		if($(element).prop("checked") == true)
		{
				statusStateVal = '1';
		}
		else
		{
				statusStateVal = '0';    
		}

		if(statusStateName.localeCompare('sleep') == 0)
		{
				habitDataRef.update({sleep: statusStateVal});
		}
		else if (statusStateName.localeCompare('pause') == 0)
		{
				habitDataRef.update({pause: statusStateVal});
		}
		else if (statusStateName === 'turnoff')
		{
				habitDataRef.update({turnoff: statusStateVal});
		}    
}

$(document).ready(function() 
{
		//alert('Beginnign of script.');

		refData.on('child_added', function(snapshot){
				//alert('added called.');
				var data = snapshot.val().habitData;
				var habitKey = snapshot.name();

				if(data.hasOwnProperty('name')){
						name = data.name ? data.name : '';
						if(name.trim().length > 0)
								{
										//habitSettingList.push({key: habitKey, name: name});
										habitSettingObject[habitKey] = name;
								}
				}

				var stateChecker = {};
				for(var k in data.settings)
				{
						if(data.settings[k] === '0')
								{
										stateChecker[k] = "";
								}
						else
								{
										stateChecker[k] = "checked";
								}
				}
				//alert(JSON.stringify(stateChecker));

				addSettingOptionforHabit(habitKey, name, stateChecker);
				//alert('Child added.');
		});
});
