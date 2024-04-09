// // // // Code your solution in this file!
 
// Function to calculate the distance in blocks from Scuber headquarters
function distanceFromHqInBlocks(Location) {
  const hqLocation = 42;
  return Math.abs(Location - hqLocation);
}

// Function to translate the number of blocks to distance in feet
function distanceFromHqInFeet(aLocation) {
  const blocks = distanceFromHqInBlocks(aLocation);
  const feet = blocks * 264;
  return feet;
}

// Function to calculate the distance travelled in feet
function distanceTravelledInFeet(startBlock, endBlock) {
  const blocksTravelled = Math.abs(endBlock - startBlock);
  const feetTravelled = blocksTravelled * 264;
  return feetTravelled;
}

// // Example usage:
// console.log(distanceFromHqInBlocks(50)); // Output: 8
// console.log(distanceFromHqInFeet(50)); // Output: 2112 (8 blocks * 264 feet/block)
// console.log(distanceTravelledInFeet(34, 38)); // Output: 1056 ((38-34)*264)

// index.js


// Function to calculate the fare price for a ride
function calculatesFarePrice(startBlock, endBlock) {
  const distance = distanceTravelledInFeet(startBlock, endBlock);

  // Calculate fare based on distance
  if (distance <= 400) {
      return 0;
  } else if (distance > 400 && distance <= 2000) {
      return (distance - 400) * 0.02;
  } else if (distance > 2000 && distance < 2500) {
      return 25;
  } else {
      return 'cannot travel that far';
  }
}







