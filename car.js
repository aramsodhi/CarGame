"use strict";

class Car {
  constructor(src, start_x, start_y, width, height) {
    this.sx = start_x;
    this.sy = start_y;
    this.s_width = width;
    this.s_height = height;
    this.scale = 1;

    
    this.width = this.s_width * this.scale;
    this.height = this.s_height * this.scale;
    
    this.img = new Image(this.width, this.height);
    this.img.src = src;
    
    this.position = {
      x: 500,
      y: 400
    };
    
    this.speed = 0;
    this.x_vel = 0;
    this.y_vel = 0;
    
    this.turning_speed = 0;
    this.angle = 0;
  
  }
  
  render(ctx) {
    ctx.imageSmoothingEnabled = false;
    ctx.save();
    ctx.translate(this.position.x + (this.width / 2), this.position.y + (this.height / 2));
    ctx.rotate(this.angle * Math.PI / 180);
    ctx.translate(-(this.position.x + (this.width / 2)), -(this.position.y + (this.height / 2)));
    ctx.drawImage(this.img, this.sx, this.sy, this.s_width, this.s_height, this.position.x, this.position.y, this.width, this.height);
    ctx.restore();
  }
  
  update() {
    const angle = (90 - this.angle) * Math.PI / 180;
    this.x_vel = Math.cos(angle) * this.speed;
    this.y_vel = Math.sin(angle) * this.speed * -1;
  
    this.position.x += this.x_vel;
    this.position.y += this.y_vel;
        
    if (this.speed > 5) {
      this.speed = 5;
    } else if (this.speed < -3) {
      this.speed = -3;
    }
  }
}