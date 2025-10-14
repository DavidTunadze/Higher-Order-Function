//პროექტი 19 - Pitent Calculator - საღებავის კალკულატორი

//Incoming input
let roomLength = prompt ("Enter the length of the room. Specify the unit of measurement as feet or meters F or M.");
let match = roomLength.match ((/^([\d.]+)([a-zA-Z]*)$/));

if ((match.length -1) === 2) {
    let length = match.length / 2;
    let metersFeet = length * 3.28; // Meters converted to feet
    console.log (metersFeet);
}

/*
console.log (match); // "123F", "123", "F" or "M"
console.log (match.length -1); // index 2 "F" or "M"
console.log (match[Math.floor(match.length / 2)]); // "123" 
*/