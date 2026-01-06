export const convertTimestampToTime = (timestamp) => {
    // Create a new Date object using the timestamp
    const date = new Date(timestamp);
  
    // Extract hours and minutes
    let hours = date.getHours();
    let minutes = date.getMinutes();
  
    // Determine AM or PM suffix
    const ampm = hours >= 12 ? 'PM' : 'AM';
  
    // Convert to 12-hour format
    hours = hours % 12 || 12; // Converts 0 hour to 12
  
    // Pad minutes with leading zero if necessary
    minutes = minutes < 10 ? '0' + minutes : minutes;
  
    // Return the time in the desired format
    return `${hours}:${minutes} ${ampm}`;
};

export const saveToLocalStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
};

export const getFromLocalStorage = (key) => {
    return JSON.parse(localStorage.getItem(key)) || [];
}; 