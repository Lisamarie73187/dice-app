const {Button, Canvas, ScrollView, TextView, ImageView, Composite, NavigationView, Page,ui} = require('tabris')

const DicePage = require('./pages/DicePage')
const DicePageTwenty = require('./pages/DicePageTwenty')


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

let animation = false

let clear = function(){
  if(animation === false){
    start.animate({
      transform: {
        translationY: -240,
      }
    }, {
      duration: 1000,
      easing: 'ease-out'
    });
    six.animate({
      transform: {
        translationY: -240,
      }
    }, {
      duration: 1000,
      easing: 'ease-out'
    });
    twenty.animate({
      transform: {
        translationY: -240,
      }
    }, {
      duration: 1000,
      easing: 'ease-out'
    });
    startTwo.animate({
      transform: {
        scaleY: 5.5,
      }
    }, {
      duration: 1000,
      easing: 'ease-out'
    })
    choose.animate({
      transform: {
        translationY: -240,
      }
    }, {
      duration: 1000,
      easing: 'ease-out'
    }).then(() => {
      animation = true
    })
  }if(animation === true){
    start.animate({
      transform: {
        translationY: 18,
      }
    }, {
      duration: 1000,
      easing: 'ease-out'
    });
    startTwo.animate({
      transform: {
        scaleY: 1,
      }
    }, {
      duration: 1000,
      easing: 'ease-out'
    })
    six.animate({
      transform: {
        translationY: 10,
      }
    }, {
      duration: 1000,
      easing: 'ease-out'
    });
    twenty.animate({
      transform: {
        translationY: 10,
      }
    }, {
      duration: 1000,
      easing: 'ease-out'
    });
    choose.animate({
      transform: {
        translationY: 10,
      }
    }, {
      duration: 1000,
      easing: 'ease-out'
    }).then(() => {
      animation = false
    })
  }
}


  let start = new Canvas({
    left: -80, top: 420, right: 0, bottom: 0})
    .on("resize", ({target: canvas, width, height}) => {
    let ctx = canvas.getContext("2d", width, height);
    ctx.moveTo(0, 0);
    ctx.moveTo(300.5, 187.5 - 80.5);
    ctx.bezierCurveTo(300.5 + (0.5522847498307936 * 299.5), 187.5 - 80.5,  300.5 + 299.5, 187.5 - (0.5522847498307936 * 80.5), 300.5 + 299.5, 187.5);
    ctx.bezierCurveTo(300.5 + 299.5, 187.5 + (0.5522847498307936 * 80.5), 300.5 + (0.5522847498307936 * 299.5), 187.5 + 80.5, 300.5, 187.5 + 80.5);
    ctx.bezierCurveTo(300.5 - (0.5522847498307936 * 299.5), 187.5 + 80.5, 300.5 - 299.5, 187.5 + (0.5522847498307936 * 80.5), 300.5 - 299.5, 187.5);
    ctx.bezierCurveTo(300.5 - 299.5, 187.5 - (0.5522847498307936 * 80.5), 300.5 - (0.5522847498307936 * 299.5), 187.5 - 80.5, 300.5, 187.5 - 80.5);
    ctx.rect(-1, 182, 600, 518);
    ctx.fill();
}).on('tap', clear).appendTo(mainPage)


let startTwo = new Canvas({
  left: 0, top: 570, right: 0, bottom: 0
}).on("resize", ({target: canvas, width, height}) => {
  let ctx = canvas.getContext("2d", width, height);
  ctx.moveTo(0, 0);
  ctx.moveTo(300.5, 187.5 - 80.5);
ctx.rect(0, 0, 600, 518);
  ctx.fill();
}).appendTo(mainPage)



let choose = new TextView({
  left: 0, top: 580, right: 0,
  textColor: 'white',
  alignment: 'center',
  text: 'Choose Your Dice',
  font: "25px sans-serif"
}).appendTo(mainPage);




let six = new TextView({
  left: 0, top: 760, right: 40,
  textColor: 'white',
  alignment: 'right',
  text: '6 sided Dice',
  font: "18px sans-serif"
}).on('tap', () => {
    new DicePage().appendTo(navigationView);
  }).appendTo(mainPage);

let twenty = new TextView({
  left: 40, top: 760, right: 0,
  textColor: 'white',
  alignment: 'left',
  text: '20 sided Dice',
  font: "18px sans-serif"
}).on('tap', () => {
  new DicePageTwenty().appendTo(navigationView);
}).appendTo(mainPage);



