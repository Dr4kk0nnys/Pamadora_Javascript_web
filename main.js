class Timer {
    constructor() {
        this.mainTimer = document.getElementById('timer')

        this.startTimer()
    }

    startTimer() {
        let minutes = 24
        let seconds = 59

        const timer = setInterval(() => {
            this.mainTimer.innerText = `${this.formatTime(minutes)}:${this.formatTime(seconds)}`

            const time = this.handleTime(minutes, seconds)
            minutes = time.minutes
            seconds = time.seconds

            // if the timer is over
            if (time == true) {
                clearInterval(timer)
                this.playSound()
                this.startRest()
            }
        }, 1000)
    }

    startRest() {
        let minutes = 4
        let seconds = 59

        const rest = setInterval(() => {
            this.mainTimer.innerText = `${this.formatTime(minutes)}:${this.formatTime(seconds)}\``

            const time = this.handleTime(minutes, seconds)
            minutes = time.minutes
            seconds = time.seconds

            // if the timer is over
            if (time == true) {
                clearInterval(rest)
                this.playSound()
                this.startTimer()
            }
        }, 1000)
    }

    handleTime(minutes, seconds) {
        // handle minutes and seconds
        seconds--
        if (seconds == 0) {
            seconds = 59
            minutes--
        }

        // if timer is over
        if (minutes == -1) {
            return true
        }

        return {
            minutes,
            seconds
        }
    }

    // if time = 4, returns 04
    formatTime(time = 10) {
        if (String(time).length == 1) {
            return '0' + time
        }

        return time
    }

    playSound() {
        const sound = new Audio('./sounds/sound.mp3')
        sound.play()
    }
}

new Timer()