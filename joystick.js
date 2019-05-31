var five = require("johnny-five"),
        servo, board, joystick;
var board = new five.Board();

board.on("ready", function() {

  servo = new five.Servo(10);

  // Create a new `joystick` hardware instance.
  var joystick = new five.Joystick({
    //   [ x, y ]
    pins: ["A0", "A1"]
  });

  board.repl.inject({
    joystick: joystick,
    servo: servo
    });


  joystick.on("change", function() {
    console.log("Joystick");
    console.log("  x : ", this.x);
    console.log("  y : ", this.y);
    console.log("--------------------------------------");
  });
  if (this.y < 0){
    servo.sweep();
  }
});
