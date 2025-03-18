function updateClock() {
    const hoursElement = document.getElementById('hours');
    const minutesElement = document.getElementById('minutes');
    const secondsElement = document.getElementById('seconds');
    const dayElement = document.getElementById('day');
    const dateElement = document.getElementById('date');
    const monthElement = document.getElementById('month');
    const yearElement = document.getElementById('year');
    
    const currentDate = new Date();
  
    // Get current time
    let hours = currentDate.getHours();
    let minutes = currentDate.getMinutes();
    let seconds = currentDate.getSeconds();
    
    // Format time with leading zeros if needed
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    
    // Set the time on the clock
    hoursElement.textContent = hours;
    minutesElement.textContent = minutes;
    secondsElement.textContent = seconds;
    
    // Get current day
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const currentDay = days[currentDate.getDay()];
    
    // Get current date (day of the month)
    const currentDateOfMonth = currentDate.getDate();
    
    // Get current month
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const currentMonth = months[currentDate.getMonth()];
  
    // Get current year
    const currentYear = currentDate.getFullYear();
    
    // Set the day, date, month, and year on the clock
    dayElement.textContent = currentDay;
    dateElement.textContent = currentDateOfMonth;
    monthElement.textContent = currentMonth;
    yearElement.textContent = currentYear;
  }
  
  // Update the clock every second
  setInterval(updateClock, 1000);
  
  // Initialize the clock immediately
  updateClock();
  