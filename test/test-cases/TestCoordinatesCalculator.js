test("Coordinates Calculator - Calculate object center coordinates 1", function() {
  var position = new Coordinates(10, 10);
  var dimensions = new Dimension(10, 20); 
  var centerCoordinates = calculateCenterCoordinates(position, dimensions);
  ok(centerCoordinates.posX == 15, "Incorrect center x-coordinate");
  ok(centerCoordinates.posY == 20, "Incorrect center y-coordinate");
});

test("Coordinates Calculator - Calculate object center coordinates 2", function() {
  var position = new Coordinates(10, 10);
  var dimensions = new Dimension(30, 50); 
  var centerCoordinates = calculateCenterCoordinates(position, dimensions);
  ok(centerCoordinates.posX == 25, "Incorrect center x-coordinate");
  ok(centerCoordinates.posY == 35, "Incorrect center y-coordinate");
});