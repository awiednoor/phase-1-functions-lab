// Code your solution in this file!

//takes in a pickup location for a passenger,
//and returns the number of blocks from Scuber headquarters on 42nd Street
function distanceFromHqInBlocks(pickupLocation) {
  return Math.abs(42 - pickupLocation);
}

//Each block in Manhattan is 264 feet long
function distanceFromHqInFeet(pickupLocation) {
  return distanceFromHqInBlocks(pickupLocation) * 264;
}

function distanceTravelledInFeet(start, destination) {
  return Math.abs(start - destination) * 264;
}

//The first four hundred feet are free. For a distance between 400 and 2000 feet,
//the price is 2 cents per foot (not including 400, which are free!).
//Then Scuber charges a flat fare for a distance over 2000 feet and under 2500 feet.
//Finally, Scuber does not allow any rides over 2500 feet — the function returns
//'cannot travel that far' if a ride over 2500 feet is requested.

function calculatesFarePrice(start, destination) {
  let distance = distanceTravelledInFeet(start, destination);
  console.log(distance);

  if (distance == 400) {
    return "it's free";
  } else if (distance > 400 && distance <= 2000) {
    let cost = distance * 0.00484848;
    return Math.round(cost * 100) / 100;
  } else if (distance > 2000 && distance < 2500) {
    return 25;
  } else if (distance > 2500) {
    return "cannot travel that far";
  } else {
    return 0;
  }
}

// console.log(distanceFromHqInBlocks(43));
// console.log(distanceTravelledInFeet(34, 38));
// console.log(calculatesFarePrice(34, 38));

console.log(calculatesFarePrice(34, 32));
