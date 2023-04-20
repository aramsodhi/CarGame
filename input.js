let keys_pressed = {
  gas: false,
  brake: false,
  steer_left: false,
  steer_right: false 
}

addEventListener("keydown", (event) => {
  if (event.key === "w" || event.key === "ArrowUp") {
    keys_pressed.gas = true;
  }
  
  if (event.key === "s" || event.key === "ArrowDown") {
    keys_pressed.brake = true;
  }
  
  if (event.key === "a" || event.key === "ArrowLeft") {
    keys_pressed.steer_left = true;
  }
  
  if (event.key === "d" || event.key === "ArrowRight") {
    keys_pressed.steer_right = true;
  }
});

addEventListener("keyup", (event) => {
  if (event.key === "w" || event.key === "ArrowUp") {
    keys_pressed.gas = false;
  }
  
  if (event.key === "s" || event.key === "ArrowDown") {
    keys_pressed.brake = false;
  }
  
  if (event.key === "a" || event.key === "ArrowLeft") {
    keys_pressed.steer_left = false;
  }
  
  if (event.key === "d" || event.key === "ArrowRight") {
    keys_pressed.steer_right = false;
  }
});



function check_inputs() {
  car.turning_speed = 0.75 * car.speed;

  if (keys_pressed.gas) {
    car.speed += 0.04;
  }
  
  if (keys_pressed.brake) {
    car.speed -= 0.08;
  }
  
  if (keys_pressed.steer_left) {
    if (Math.abs(car.turning_speed) > 0.2) {
      car.angle -= car.turning_speed;  
    }
  }
  
  if (keys_pressed.steer_right) {
     if (Math.abs(car.turning_speed) > 0.2) {
      car.angle += car.turning_speed;  
    }
  }
  
  if (!(keys_pressed.gas || keys_pressed.brake || keys_pressed.steer_left || keys_pressed.steer_right)) {
    if (car.speed > 0) {
      car.speed -= 0.03;
    } else if (car.speed < 0) {
      car.speed += 0.03;
    }
  }
}