function getCurrentDayAndTime() {
    // Array to store day names
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  
    // Get current date and time
    const currentDate = new Date();
    const dayName = days[currentDate.getDay()];
    let hours = currentDate.getHours();
    const ampm = hours >= 12 ? 'PM' : 'AM';
  
    // Convert hours to 12-hour format
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
  
    // Get minutes and seconds
    const minutes = currentDate.getMinutes();
    const seconds = currentDate.getSeconds();
  
    // Display the result
    console.log(`Today is: ${dayName}`);
    console.log(`Current time is: ${hours} ${ampm} : ${minutes} : ${seconds}`);
  }
  
  // Call the function
  getCurrentDayAndTime();
