export function getCurrentDateTimeString() {
    const currentDate = new Date();

    const year = currentDate.getFullYear();
    const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
    const day = currentDate.getDate().toString().padStart(2, '0');
    const hours = currentDate.getHours().toString().padStart(2, '0');
    const minutes = currentDate.getMinutes().toString().padStart(2, '0');
    const seconds = currentDate.getSeconds().toString().padStart(2, '0');
    const milliseconds = currentDate.getMilliseconds().toString().padStart(3, '0');

    const dateTimeString = `${year}${month}${day}${hours}${minutes}${seconds}${milliseconds}`;
    return dateTimeString;
}

export function getDateMonthYear(inputDateString) {
    if(!inputDateString) return ''
    const year = inputDateString.slice(0, 4);
    const month = parseInt(inputDateString.slice(4, 6), 10) - 1; // Month is zero-based
    const day = inputDateString.slice(6, 8);
  
    const months = [
      'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
      'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];
  
    const formattedDate = new Date(year, month, day);
    const monthName = months[formattedDate.getMonth()];
  
    return `${monthName} ${formattedDate.getDate()}, ${year}`;
}