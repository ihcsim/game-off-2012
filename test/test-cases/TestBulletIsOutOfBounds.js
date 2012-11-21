var bullet = initBullet();
test("Bullet/Out-of-Bound Test- Bullet hits stage upper edge #1", function() {
  bullet.centerCoordinates.posY = 5;
  ok(bulletIsOutOfBound(bullet), "Bullet should have hit stage upper edge");
});

test("Bullet/Out-of-Bound Test- Bullet hits stage upper edge #2", function() {
  bullet.centerCoordinates.posY = 4;
  ok(bulletIsOutOfBound(bullet), "Bullet should have hit stage upper edge");
});

test("Bullet/Out-of-Bound Test- Bullet hits stage lower edge #1", function() {
  bullet.centerCoordinates.posY = 570;
  ok(bulletIsOutOfBound(bullet), "Bullet should have hit stage lower edge");
});

test("Bullet/Out-of-Bound Test- Bullet hits stage lower edge #2", function() {
  bullet.centerCoordinates.posY = 590;
  ok(bulletIsOutOfBound(bullet), "Bullet should have hit stage lower edge");
});

test("Bullet/Out-of-Bound Test- Bullet hits stage left edge #1", function() {
  bullet.centerCoordinates.posX = 65;
  ok(bulletIsOutOfBound(bullet), "Bullet should have hit stage left edge");
});

test("Bullet/Out-of-Bound Test- Bullet hits stage left edge #2", function() {
  bullet.centerCoordinates.posX = 60;
  ok(bulletIsOutOfBound(bullet), "Bullet should have hit stage left edge");
});

test("Bullet/Out-of-Bound Test- Bullet hits stage right edge #1", function() {
  bullet.centerCoordinates.posX = 750;
  ok(bulletIsOutOfBound(bullet), "Bullet should have hit stage right edge");
});

test("Bullet/Out-of-Bound Test- Bullet hits stage right edge #2", function() {
  bullet.centerCoordinates.posX = 760;
  ok(bulletIsOutOfBound(bullet), "Bullet should have hit stage right edge");
});

test("Bullet/Out-of-Bound Test- Bullet is not out of bound #1", function() {
  bullet.centerCoordinates.posX = 150;
  bullet.centerCoordinates.posY = 450;
  ok(!bulletIsOutOfBound(bullet), "Bullet should not be out-of-bound");
});

test("Bullet/Out-of-Bound Test- Bullet is not out of bound #2", function() {
  bullet.centerCoordinates.posX = 250;
  bullet.centerCoordinates.posY = 250;
  ok(!bulletIsOutOfBound(bullet), "Bullet should not be out-of-bound");
});

test("Bullet/Out-of-Bound Test- Bullet is not out of bound #3", function() {
  bullet.centerCoordinates.posX = 350;
  bullet.centerCoordinates.posY = 100;
  ok(!bulletIsOutOfBound(bullet), "Bullet should not be out-of-bound");
});

test("Bullet/Out-of-Bound Test- Bullet is not out of bound #4", function() {
  bullet.centerCoordinates.posX = 450;
  bullet.centerCoordinates.posY = 355;
  ok(!bulletIsOutOfBound(bullet), "Bullet should not be out-of-bound");
});