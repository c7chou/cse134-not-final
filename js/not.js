//time to start the check
        var hourToCheck = 9;
        
        //1 hour = 3.6e6 & 1 minute = 60000
        var interval = 10000;
        var updateInterval = 30000;
        
        //doing the math and if time then send the alert
        function timeToNotify(){
            var date = Date();
            var hour = date.slice(16,18);
            var el = document.getElementById("not");
            if (Number(hour) >= hourToCheck)
                el.style.display = 'block';                
        }
    
        //used to reset the interval
        function updateInt() {
            var date = Date();
            var hour = date.slice(16,18);
            if ((Number(hour) >= 0) && (Number(hour) < 20)){                                   inter = 				setInterval(timeToNotify, interval);
                window.alert("reseting the timer");
            }
            clearInterval(outInt);
            outInt = null;
        }
        
        //ends the alerts for the day
        function updated(){
            end();
            window.alert("killed the timer");
            clearInterval(inter);
            inter = null;
            outInt = setInterval(updateInt, updateInterval);
        }
        
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
        
        //setting the interval
        var inter = setInterval(timeToNotify, interval);
        //setInterval(updateInt, updateInterval);