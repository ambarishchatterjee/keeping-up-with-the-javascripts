/*
Details:
Create a function called "timeAdder" that can add two time values together. For example, it should be able to add 25 hours and 3 days together. 
The function should accept 4 parameters:
value1, label1, value2, label2
- value1 and value2 should accept positive integers  
- label1 and label2 should accept any of the following strings: "seconds", "minutes", "hours", "days", "second", "minute", "hour", "day"
For example your function may be called in any of the following ways:
timeAdder(1,"minute",3,"minutes")
timeAdder(5,"days",25,"hours")
timeAdder(1,"minute",240,"seconds")

Requirements:
1. Your function should include at least one switch
2. Your function must accept any possible combination of inputs 
3. If the inputs are valid, it should return an array with 2 variables inside of it: value3, and  label3. For example:
return [5,"minutes"]; 
The exact label you choose to return for label3 ("minutes" for example) is up to you.
4. If the inputs are invalid or impossible, it should return false. Here are examples of impossible and invalid inputs:
timeAdder(5,"hour",5,"minutes") // This is impossible because "hour" is singular and 5 is plural
timeAdder(false,false,5,"minutes") // This is invalid because the first 2 arguments are not the correct types
timeAdder({},"days",5,"minutes") // This is invalid because the first argument is the wrong type

Extra Credit:
Rather than returning an arbitrary label for label3, return the largest label that can be used with an integer value
For example if someone calls:
timeAdder(20,"hours",4,"hours")
You could return: [1,"day"] rather than [24,"hours"]
But if they called
timeAdder(20,"hours",5,"hours")
You would return [25,"hours"] because you could not use "days" with an integer value to represent 25 hours.
*/
// Add two time values together
function timeAdder(value1, label1, value2, label2) {


  const dayInSeconds = 86400;   
  const hourInSeconds = 3600;   
  const minuteInSeconds = 60;   

  // validate if value is an integer and if is greater than 0
  const isTypeValid = (value) => Number.isInteger(value) && value > 0;

  // validate label "seconds", "minutes", "hours", "days", "second", "minute", "hour", "day"
  const isLabelValid = (label) => {

    let valid = false;

    switch (label) {
      case "seconds":
      case "minutes":
      case "hours":
      case "days":
      case "second":
      case "minute":
      case "hour":
      case "day":
        valid = true;
        break;
      default:
        valid = false;
        break;
    }

    return valid;
  };

  // label singular or plural check
  const isPlural = (label) => label.slice(-1) === "s";

  // singular plural check
  const validateSingularPlural = (value, label) => {

    let valid = false;

    if (isTypeValid(value) && isLabelValid(label)) {
      if (value === 1 && !isPlural(label)) {
        valid = true;
      } else if (value > 1 && isPlural(label)) {
        valid = true;
      }
    }
    return valid;
  };

  // Convert value to seconds
  const toSeconds = (value, label) => {

    switch (label) {
      case "minute":
      case "minutes":
        value = value * minuteInSeconds;
        break;
      case "hour":
      case "hours":
        value = value * hourInSeconds;
        break;
      case "day":
      case "days":
        value = value * dayInSeconds;
        break;
      default:
        break;
    }
    return value;
  };

  // get the largest value/label possible.
  const getLargestLabel = (seconds) => {
    let label = "seconds";
    let value = 0;
    // 
    if (seconds % dayInSeconds === 0) {
      value = seconds / dayInSeconds;
      label = (value === 1) ? "day" : "days";
    } else if (seconds % hourInSeconds === 0) {
      value = seconds / hourInSeconds;
      label = (value === 1) ? "hour" : "hours";
    } else if (seconds % minuteInSeconds === 0) {
      value = seconds / minuteInSeconds;
      label = (value === 1) ? "minute" : "minutes";
    } else {
      value = seconds;
      label = (value === 1) ? "second" : "seconds";
    }
    return [value, label];
  };
  // get the largest value 
  if (validateSingularPlural(value1, label1) && validateSingularPlural(value2, label2)) {
    let seconds = toSeconds(value1, label1) + toSeconds(value2, label2);
    return getLargestLabel(seconds);
  }
  return false;
}
console.log(timeAdder(20, "hours", 4, "hours"))