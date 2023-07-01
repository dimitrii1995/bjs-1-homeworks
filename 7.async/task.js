class AlarmClock {
	constructor() {
	  this.alarmCollection = [];
	  this.intervalId = null;
	}
  
	addClock(time, callback) {
	  if (!time || !callback) {
		throw new Error('Отсутствуют обязательные аргументы');
	  }
  
	  if (this.alarmCollection.some(alarm => alarm.time === time)) {
		console.warn('Уже присутствует звонок на это же время');
	  }
  
	  this.alarmCollection.push({
		time: time,
		callback: callback,
		canCall: true,
	  });
	}
  
	removeClock(time) {
		this.alarmCollection = this.alarmCollection.filter(alarm => alarm.time !== time);
	  }
  
	getCurrentFormattedTime() {
	  const checkDate = new Date();
	  const hours = String(checkDate.getHours()).padStart(2, '0');
	  const minutes = String(checkDate.getMinutes()).padStart(2, '0');
	  return `${hours}:${minutes}`;
	}
  
	start() {
	  if (this.intervalId) {
		return;
	  }
  
	  this.intervalId = setInterval(() => {
		const checkTime = this.getCurrentFormattedTime();
  
		this.alarmCollection.forEach((alarm) => {
		  if (alarm.time === checkTime && alarm.canCall) {
			alarm.canCall = false;
			alarm.callback();
		  }
		});
	  }, 1000);
	}
  
	stop() {
	  clearInterval(this.intervalId);
	  this.intervalId = null;
	}
  
	resetAllCalls() {
		this.alarmCollection.forEach(alarm => {
		  alarm.canCall = true;
		});
	  }
  
	clearAlarms() {
	  this.stop();
	  this.alarmCollection = [];
	}
  }