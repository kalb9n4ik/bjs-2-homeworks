class AlarmClock {
	constructor() {
		this.alarmCollection = [];
		this.intervalId = null;
	}

	addClock(time, callback) {

		if(arguments.length < 2 || time === null) {
			throw new Error('Отсутствуют обязательные аргументы')
		}

		if(this.alarmCollection.some((n) => { return time === n.time })) {
			console.warn('Уже присутствует звонок на это же время')
		}

		this.alarmCollection.push({callback: callback, time: time, canCall: true})

	}

	removeClock(delTime) {

		const filteredAlarm = this.alarmCollection.filter(function (n) {
			return n.time !== delTime
		})

		this.alarmCollection = filteredAlarm;
	
	}

	getCurrentFormattedTime() {

		let Data = new Date();
		let Hour = Data.getHours();
		let Minutes = Data.getMinutes();

		if(Hour < 10) {
			Hour = "0" + Hour
		}

		if(Minutes < 10) {
			Minutes = "0" + Minutes
		}

		return `${Hour}:${Minutes}`
	}

	start() {

		if(this.intervalId) {
			return;
		}

		this.intervalId = setInterval(() => {

			this.alarmCollection.forEach((alarm) => {
				if(alarm.time === this.getCurrentFormattedTime() && alarm.canCall) {
					alarm.canCall = false
					// вызвать колбэк звонка
					alarm.callback()
				}
			})

			
		}, 1000);

	}

	stop() {
		clearInterval(this.intervalId)
		this.intervalId = null;
	}

	resetAllCalls() {

		this.alarmCollection.forEach((alarm) => {
			alarm.canCall = true;
		})
	}

	clearAlarms() {
		this.stop()
		this.alarmCollection = []
	}

}