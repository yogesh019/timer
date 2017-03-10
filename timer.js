var Timer=(function(){

	var el,interval_id, isTimerOn=false;
	var seconds=0,minutes=0,hours=0,milliseconds=0;
	function countDown(){
		milliseconds++;
		if(milliseconds>=1000){
			milliseconds=0;
			seconds++;
			if(seconds>60){
				seconds=0;
				minutes++;
				if(minutes>=60){
					minutes=0;
					hours++;
				}
			}
		}
	 el.value = (hours ? (hours > 9 ? hours : "0" + hours) : "00") + 
	 		 ":" + (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + 
			 ":" + (seconds ? (seconds > 9 ? seconds : "0" + seconds) : "00")+
	 		 ":" + (milliseconds>99?milliseconds:(milliseconds>9?"0"+milliseconds:"00"+milliseconds));
	}

	function resetMe(e){
		e.preventDefault();
		isTimerOn=false;
		clearInterval(interval_id);
		el.value="00:00:00:000";
		el.style.background="transparent";
	}

	function stopMe(e){
		isTimerOn=false;
		e.preventDefault();
		clearInterval(interval_id);
	}

	function startMe(e){

		e.preventDefault();
		if(isTimerOn===false){
			interval_id=setInterval(countDown,1);

		}
		isTimerOn=true;
	}

	function init(config){

			document.getElementById(config.start).addEventListener("click",startMe);
			document.getElementById(config.stop).addEventListener("click",stopMe);
			document.getElementById(config.reset).addEventListener("click",resetMe);
			el=document.getElementById("box");
			el.value="00:00:00:000";
	}
	
	return{
		init:init
	}	

})();