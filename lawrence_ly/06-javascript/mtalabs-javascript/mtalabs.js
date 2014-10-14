var stations = {
  n: ["times square", "34th", "28th_n", "23rd", "union square", "8th_n"],
  l: ["8th_l", "6th", "union square", "3rd", "1st"],
  six: ["grand central", "33rd", "28th_6", "23rd", "union square", "astor place"]
}

// var origin_line = stations.n
// var origin_station = stations[line_answer].index(first_line_station)
// var destination_line = stations[second_line_answer]
// var destination_station = stations[second_line_answer].index(second_line_station)
// var start_intersect_index = 0

// if (originLine === destinationLine) {
//     result = Math.abs(originStation - destinationStation);
//     console.log(result)
// }

//##################################

var originLine = function (station) { // the variable originLine has a function w/ one argurment
  for (var line in stations) { //loop all the stations into line
    if (stations[line].indexOf(station) > -1){ // if index
      return line;
    }
  }
};

var stationStops = function (stopA,stopB,line) {
    var distance = Math.abs(stations[line].indexOf(stopA) - stations[line].indexOf(stopB));
    return distance;
};

var distanceBetweenStops = function (stopA, stopB){
  var lineA = originLine(stopA);
  var lineB = originLine(stopB);
  if (lineA === lineB) {
    return stationStops(stopA, stopB, lineA);
    } else {
      var distanceA = stationStops(stopA, 'union square', lineA);
      var distanceB = stationStops('union square', stopB, lineB);
      return (distanceA + distanceB);

  }
};




















