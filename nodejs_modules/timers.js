/*

MODULE: timers

DESCRIPTION: The timers module provides functions for scheduling the execution of code at specified intervals.

*/


const timeoutId = setTimeout(() => {
    console.log('Timeout expired');
  }, 1000);
  
  const intervalId = setInterval(() => {
    console.log('Interval expired');
  }, 1000);
  
  setTimeout(() => {
    clearInterval(intervalId);
  }, 5000);
  