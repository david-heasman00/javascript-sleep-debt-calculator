// Task 1 - The first problem to solve is determining how many hours of sleep you get each night of the week. You can create a function that returns any given night’s number of hours of rest. Instead of writing seven different functions (one for each day of the week), let’s write one function with a parameter for the day. Create a function named getSleepHours with a single parameter named day.

//const getSleepHours = day => {};

//Task 2 - The function should accept a day as an argument and return the number of hours you slept that night. For instance, if you got 8 hours of sleep on Monday night, calling getSleepHours('monday') should return 8. Use an if/else or switch statement to implement this.

const getSleepHours = day => {
  switch(day) {
    case 'monday':
      return 6;
      break;
    case 'tuesday':
      return 7.5;
      break;
    case 'wednesday':
      return 6;
      break;
    case 'thursday':
      return 8;
      break;
    case 'friday':
      return 10;
      break;
    case 'saturday':
      return 9;
      break;
    case 'sunday':
      return 9;
      break;
  }
};

//Task 3 - Test the function
//console.log(getSleepHours('monday'));
//console.log(getSleepHours('tuesday'));
//console.log(getSleepHours('saturday'));

//Task 4 - Now that you’ve written a function to get the sleep hours for each night, we need to do three things: Get the total sleep hours that you actually slept; Get the ideal sleep hours that you prefer; Calculate the sleep debt, if any. To get the total sleep hours that you actually slept, create a new function named getActualSleepHours that takes no parameters.

//const getActualSleepHours = () => {}

//Task 5 - Inside the getActualSleepHours() function, call the getSleepHours() function for each day of the week. Add the results together and return the sum using an implicit return.

const getActualSleepHours = () =>
  getSleepHours('monday') +
  getSleepHours('tuesday') +
  getSleepHours('wednesday') +
  getSleepHours('thursday') +
  getSleepHours('friday') +
  getSleepHours('saturday') +
  getSleepHours('sunday');

//Task 6 To get the ideal sleep hours that you prefer, create a function named getIdealSleepHours with no parameters. Inside the function, declare a variable named idealHours and set its value to your ideal hours per night. Then return the idealHours multiplied by 7. You’ll want to multiply by 7 to get the total hours you prefer per week.

const getIdealSleepHours = () => {
  idealHours = 8;
  return idealHours * 7;
}

//Task 7 Test your two new functions by calling them and printing the results to the console. You can remove the tests when you know your functions work.

//console.log(getActualSleepHours());
//console.log(getIdealSleepHours());

//Task 8 - Now that you can get the actual sleep hours and the ideal sleep hours, it’s time to calculate sleep debt. Create a function named calculateSleepDebt with no parameters. Inside of its block, create a variable named actualSleepHours set equal to the getActualSleepHours() function call. Then, create another variable named idealSleepHours, set equal to the getIdealSleepHours() function call.

//const calculateSleepDebt = () => {
  //actualSleepHours = getActualSleepHours();
  //idealSleepHours = getIdealSleepHours();
//}

//Task 9 - Now that you have actualSleepHours and idealSleepHours, you can write a few if/else statements to output the result to the console. The function should fulfill this logic: If actual sleep equals ideal sleep, log to the console that the user got the perfect amount of sleep; If the actual sleep is greater than the ideal sleep, log to the console that the user got more sleep than needed; If the actual sleep is less than the ideal sleep, log to the console that the user should get some rest.

/*
const calculateSleepDebt = () => {
  actualSleepHours = getActualSleepHours();
  idealSleepHours = getIdealSleepHours();
  if actualSleepHours === idealSleepHours {
    console.log('User got the perfect amount of sleep.');
  }
  else if actualSleepHours > idealSleepHours {
    console.log('User got more sleep than needed.');
  }
  else if actualSleepHours < idealSleepHours {
    console.log('User should get some rest.');
  }
}
*/

//Task 10 - To make this calculator more helpful, add the hours the user is over or under their ideal sleep time in each log statement in calculateSleepDebt().

const calculateSleepDebt = () => {
  actualSleepHours = getActualSleepHours();
  idealSleepHours = getIdealSleepHours();
  if (actualSleepHours === idealSleepHours) {
    console.log('User got the perfect amount of sleep.');
  }
  else if (actualSleepHours > idealSleepHours) {
    sleepSurplus = actualSleepHours - idealSleepHours;
    console.log(`User got more ${sleepSurplus} hours more sleep than needed.`);
  }
  else if (actualSleepHours < idealSleepHours) {
    sleepDebt = idealSleepHours - actualSleepHours;
    console.log(`User has a sleep debt of ${sleepDebt} hours. User should get some rest.`);
  }
}

calculateSleepDebt();
