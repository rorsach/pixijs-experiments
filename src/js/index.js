import * as PIXI from 'pixi.js';

const TOTAL_CIRCLES = 36
const RADIUS = 50
const  w = 400
const  h = 400
const  app = new PIXI.Application(w, h, {
    antialias: true,
    backgroundColor: 0x333333
});
document.body.appendChild(app.view);
const  graphics = new PIXI.Graphics();


for (let i = 0; i < TOTAL_CIRCLES; i++) {
    graphics.lineStyle(4, 0xffcc00, 1);
    graphics.beginFill(0xFFFF99, 0.0);
    graphics.drawCircle(w/2 + RADIUS * Math.cos(2 * Math.PI * i / TOTAL_CIRCLES ), h/2 + RADIUS * Math.sin(2 * Math.PI * i / TOTAL_CIRCLES ), 60)
    graphics.endFill();
}


app.stage.addChild(graphics);


// let app = new PIXI.Application(800, 600, {antialias: true})
// document.body.appendChild(app.view)
// let graphics = new PIXI.Graphics()

// graphics.lineStyle(4, 0xff0000, 1);

// graphics.lineStyle(4, 0xff0000, 1);
// graphics.beginFill(0xFFFF0B, 1.0);
// graphics.drawCircle(11, 11, 6)
// graphics.endFill();

// graphics.lineStyle(0);
// graphics.beginFill(0xFFFF0B, 0.5);
// graphics.drawCircle(470, 90,60);
// graphics.endFill();

// for (let i = 0; i < 360; i++) {
//     graphics.lineStyle(4, 0xff0000, 1);
//     graphics.beginFill(0xFFFF0B, 0.0);
//     graphics.drawCicle(0 * Math.cos(Math.PI * i / 180 ), 100 * Math.sin(Math.PI * i / 180 ), 60)
//     graphics.endFill();
// }

// app.stage.addChild(graphics);
