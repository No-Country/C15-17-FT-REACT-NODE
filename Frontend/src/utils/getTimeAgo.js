export function getTimeAgo(timestamp) {
    const currentDate = new Date();
    const providedDate = new Date(timestamp);
    
    const timeDifference = currentDate - providedDate;
    const seconds = Math.floor(timeDifference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const weeks = Math.floor(days / 7);
    const months = Math.floor(days / 30);
    const years = Math.floor(days / 365);
  
    if (seconds < 60) {
      return "Ahora";
    } else if (minutes === 1) {
      return "1 m";
    } else if (minutes < 60) {
      return `${minutes} m`;
    } else if (hours === 1) {
      return "1 h";
    } else if (hours < 24) {
      return `${hours} h`;
    } else if (days === 1) {
      return "1 d";
    } else if (days < 7) {
      return `${days} d`;
    } else if (weeks === 1) {
      return "1 s";
    } else if (weeks < 4) {
      return `${weeks} s`;
    } else if (months === 1) {
      return "1 m";
    } else if (months < 12) {
      return `${months} m`;
    } else if (years === 1) {
      return "1 a";
    } else {
      return `${years} a`;
    }
  }
  
