test("Coordinates Calculator - Calculate object center coordinates #1", function() {
  var position = new Coordinates(10, 10);
  var dimensions = new Dimension(10, 20); 
  var centerCoordinates = calculateCenterCoordinates(position, dimensions);
  ok(centerCoordinates.posX == 15, "Incorrect center x-coordinate");
  ok(centerCoordinates.posY == 20, "Incorrect center y-coordinate");
});

test("Coordinates Calculator - Calculate object center coordinates #2", function() {
  var position = new Coordinates(10, 10);
  var dimensions = new Dimension(30, 50); 
  var centerCoordinates = calculateCenterCoordinates(position, dimensions);
  ok(centerCoordinates.posX == 25, "Incorrect center x-coordinate");
  ok(centerCoordinates.posY == 35, "Incorrect center y-coordinate");
});

test("Coordinates Calculator - Calculate rectangle top-left x-coordinate", function() {
  var position = new Coordinates(10, 20);
  var dimensions = new Dimension(10, 30); 
  var rectCoord = calculateRectCoordinates(position, dimensions);
  var topLeftCoord = rectCoord.topLeft;
  ok(topLeftCoord.posX == 10, "Incorrect center x-coordinate");
});

test("Coordinates Calculator - Calculate rectangle top-left y-coordinate", function() {
  var position = new Coordinates(10, 20);
  var dimensions = new Dimension(10, 30); 
  var rectCoord = calculateRectCoordinates(position, dimensions);
  var topLeftCoord = rectCoord.topLeft;
  ok(topLeftCoord.posY == 20, "Incorrect center x-coordinate");
});

test("Coordinates Calculator - Calculate rectangle top-right x-coordinate", function() {
  var position = new Coordinates(10, 20);
  var dimensions = new Dimension(10, 30); 
  var rectCoord = calculateRectCoordinates(position, dimensions);
  var topLeftCoord = rectCoord.topRight;
  ok(topLeftCoord.posX == 20, "Incorrect center x-coordinate");
});

test("Coordinates Calculator - Calculate rectangle top-right y-coordinate", function() {
  var position = new Coordinates(10, 20);
  var dimensions = new Dimension(10, 30); 
  var rectCoord = calculateRectCoordinates(position, dimensions);
  var topLeftCoord = rectCoord.topRight;
  ok(topLeftCoord.posY == 20, "Incorrect center x-coordinate");
});

test("Coordinates Calculator - Calculate rectangle bottom-left x-coordinate", function() {
  var position = new Coordinates(10, 20);
  var dimensions = new Dimension(10, 30); 
  var rectCoord = calculateRectCoordinates(position, dimensions);
  var topLeftCoord = rectCoord.bottomLeft;
  ok(topLeftCoord.posX == 10, "Incorrect center x-coordinate");
});

test("Coordinates Calculator - Calculate rectangle bottom-left y-coordinate", function() {
  var position = new Coordinates(10, 20);
  var dimensions = new Dimension(10, 30); 
  var rectCoord = calculateRectCoordinates(position, dimensions);
  var topLeftCoord = rectCoord.bottomLeft;
  ok(topLeftCoord.posY == 50, "Incorrect center x-coordinate");
});

test("Coordinates Calculator - Calculate rectangle bottom-right x-coordinate", function() {
  var position = new Coordinates(10, 20);
  var dimensions = new Dimension(10, 30); 
  var rectCoord = calculateRectCoordinates(position, dimensions);
  var topLeftCoord = rectCoord.bottomRight;
  ok(topLeftCoord.posX == 20, "Incorrect center x-coordinate");
});

test("Coordinates Calculator - Calculate rectangle bottom-right y-coordinate", function() {
  var position = new Coordinates(10, 20);
  var dimensions = new Dimension(10, 30); 
  var rectCoord = calculateRectCoordinates(position, dimensions);
  var topLeftCoord = rectCoord.bottomRight;
  ok(topLeftCoord.posY == 50, "Incorrect center x-coordinate");
});

test("Coordinates Calculator - Calculate midpoint x-coordinate #1", function() {
  var coord1 = new Coordinates(20, 20);
  var coord2 = new Coordinates(20, 40);
  var midpointCoord  = calculateMidPointCoordinates(coord1, coord2); 
  ok(midpointCoord.posX == 20, "Incorrect midpoint x-coordinate");
});

test("Coordinates Calculator - Calculate midpoint y-coordinate #2", function() {
  var coord1 = new Coordinates(20, 20);
  var coord2 = new Coordinates(20, 40);
  var midpointCoord  = calculateMidPointCoordinates(coord1, coord2); 
  ok(midpointCoord.posY == 30, "Incorrect midpoint y-coordinate");
});

test("Coordinates Calculator - Calculate midpoint x-coordinate #3", function() {
  var coord1 = new Coordinates(0, 0);
  var coord2 = new Coordinates(20, 40);
  var midpointCoord  = calculateMidPointCoordinates(coord1, coord2); 
  ok(midpointCoord.posX == 10, "Incorrect midpoint x-coordinate");
});

test("Coordinates Calculator - Calculate midpoint y-coordinate #4", function() {
  var coord1 = new Coordinates(0, 00);
  var coord2 = new Coordinates(20, 40);
  var midpointCoord  = calculateMidPointCoordinates(coord1, coord2); 
  ok(midpointCoord.posY == 20, "Incorrect midpoint y-coordinate");
});