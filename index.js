// // // Code your solution in this file!
 


// function distanceFromHqInBlocks(blockNumber){

//   if(blockNumber > 42){
//     return blockNumber - 42
// } else{
//     return 42 - blockNumber
// }
// };



// // // return distance

// const feetPerBlock = 264;

// function distanceFromHqInFeet (blockNumber){
// return DistanceInFeet - distanceFromHqInBlocks (blockNumber)
// return  DistanceInFeet = -263 + 264;
// return  DistanceInFeet = 2112;

//   };


  // const feetPerBlock = 264;

  // // Calculate the total distance in feet
  // const totalDistanceInFeet = 4 * 264;

  // return totalDistanceInFeet )};



// console.log(distanceFromHqInBlocks(50=8));
// const distanceFromHqInBlocks = ' returns a distance in blocks:';

// //      ('index.js'),
// //       function () {
// //     return ('distanceFromHqInBlocks(43)',  = 'returns a distance in blocks')};
    


// //     // function() {
// //     //   it('returns a distance in blocks', function() {
// //     //     expect(distanceFromHqInBlocks(43)).to.equal(1);
// //     //   });


//     ///Assigment:

// function distanceFromHqInFeet(pickupStreetNumber) {
//   // Assume Hq (headquarters) is located at 42nd street
//   const hqStreetNumber = 42;

//   // Calculate the absolute difference in street numbers
//   const distanceInBlocks = Math.abs(pickupStreetNumber - hqStreetNumber);

//   // Each block is approximately 264 feet
//   const feetPerBlock = 264;

//   // Calculate the total distance in feet
//   const totalDistanceInFeet = distanceInBlocks * feetPerBlock;

//   return totalDistanceInFeet;
// }

// // Example usage:
// const pickupStreetNumber = 42; 
// const distance = distanceFromHqInFeet(pickupStreetNumber);
// console.log(`Distance from HQ: ${distance} feet`);



// index.js

// // Function to calculate the distance in blocks from Scuber headquarters
// function distanceFromHqInBlocks(pickupLocation) {
//   const hqLocation = 42;
//   return Math.abs(pickupLocation - hqLocation);
// }

// module.exports = {
//   distanceFromHqInBlocks,
  
// };


// Function to calculate the distance in blocks from Scuber headquarters
function distanceFromHqInBlocks(pickupLocation) {
  const hqLocation = 42;
  return Math.abs(pickupLocation - hqLocation);
}

// Function to translate the number of blocks to distance in feet
function distanceFromHqInFeet(pickupLocation) {
  const blocks = distanceFromHqInBlocks(pickupLocation);
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

module.exports = {
  distanceFromHqInBlocks,
  distanceFromHqInFeet,
  distanceTravelledInFeet,
  calculatesFarePrice
};

