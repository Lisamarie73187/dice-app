const {Button, Canvas, TextView, ImageView, Composite, NavigationView, Page,ui} = require('tabris')

const DicePage = require('./pages/DicePage')


let navigationView = new NavigationView({
  left: 0, top: 0, right: 0, bottom: 0,
  toolbarColor: 'black',
  titleTextColor: 'white'
}).appendTo(ui.contentView)

let mainPage = new Page({
  title: 'BEST DICE ROLLING APP EVER',
}).appendTo(navigationView)

new ImageView({
  left: -100, top: 0, height: 900, bottom: 100,
  image: 'https://s3-us-west-1.amazonaws.com/rollthedice/shutterstock_114760342.jpg',
  scaleMode: 'stretch'
}).appendTo(mainPage)


const start = new Canvas({
  left: -80, top: 380, right: 0, bottom: 0
}).on("resize", ({target: canvas, width, height}) => {
  let ctx = canvas.getContext("2d", width, height);
  ctx.moveTo(0, 0);
  ctx.moveTo(297.5, 262 - 119);
  ctx.bezierCurveTo(297.5 + (0.5522847498307936 * 296.5), 262 - 119,  297.5 + 296.5, 262 - (0.5522847498307936 * 119), 297.5 + 296.5, 262);
  ctx.bezierCurveTo(297.5 + 296.5, 262 + (0.5522847498307936 * 119), 297.5 + (0.5522847498307936 * 296.5), 262 + 119, 297.5, 262 + 119);
  ctx.bezierCurveTo(297.5 - (0.5522847498307936 * 296.5), 262 + 119, 297.5 - 296.5, 262 + (0.5522847498307936 * 119), 297.5 - 296.5, 262);
  ctx.bezierCurveTo(297.5 - 296.5, 262 - (0.5522847498307936 * 119), 297.5 - (0.5522847498307936 * 296.5), 262 - 119, 297.5, 262 - 119);
  ctx.fill();
}).appendTo(mainPage);

// new Button({
//   centerX: 0, bottom: 100,
//   text: 'Start',
//   background: 'none'
// })
start.on('tap', () => {
  new DicePage().appendTo(navigationView);
}).appendTo(mainPage)



