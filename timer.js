document.addEventListener('DOMContentLoaded', () => {
  const getTimeRemaining = (endtime) => {
    let t = Date.parse(endtime) - Date.parse(new Date());
    let seconds = Math.floor((t / 1000) % 60);
    let minutes = Math.floor((t / 1000 / 60) % 60);
    let hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    let days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
      'total': t,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  }

  const initializeClock = (endtime) => {
    const days = document.getElementById('days');
    const hours = document.getElementById('hours');
    const minutes = document.getElementById('minutes');
    const seconds = document.getElementById('seconds');
  
    const updateClock = () => {
      let t = getTimeRemaining(endtime);
      
      days.innerText = ('0' + t.days).slice(-2) + 'days';
      hours.innerText = ('0' + t.hours).slice(-2) + 'h';
      minutes.innerText = ('0' + t.minutes).slice(-2) + 'm';
      seconds.innerText = ('0' + t.seconds).slice(-2) + 's';
  
      if (t.total <= 0) {
        clearInterval(timeinterval);
        hours.innerText = '';
        minutes.innerText = '';
        seconds.innerText = 'Time ended!';
      }
    }
  
    updateClock();
    let timeinterval = setInterval(updateClock, 1000);
}

initializeClock('January 30 2018 23:59:59 GMT+02:00');
});
