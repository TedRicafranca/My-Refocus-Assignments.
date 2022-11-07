const caloriesPerHour = 450;
let numTimesSamRuns = 15;
let runHoursPerDay = 0.5;
let totalHoursRunning = numTimesSamRuns * runHoursPerDay;
let caloriesBurned = caloriesPerHour * totalHoursRunning;
console.log("Great work, Sam! After " + runHoursPerDay + " hours of running every day for a week, you may lose a total of " + caloriesBurned + " calories.");