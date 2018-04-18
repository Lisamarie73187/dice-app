// const {Button, RefreshComposite, ImageView, ui, Composite, device, Picker, TextView, } = require('tabris');

const diceArray = [
  'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Dice-1-b.svg/2000px-Dice-1-b.svg.png',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Dice-2-b.svg/1024px-Dice-2-b.svg.png',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Dice-3-b.svg/600px-Dice-3-b.svg.png',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Dice-5-b.svg/2000px-Dice-5-b.svg.png',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Dice-6a-b.svg/768px-Dice-6a-b.svg.png',
]


// // let rollDiceOne = new Button({
// //   centerX: 0, centerY: -300,
// //   text: 'Tap here'
// // }).appendTo(ui.contentView);

// // onRoll = false

// // let setDice = () => {
// //   onRoll = true
// //   console.log(onRoll)
// //   if (onRoll === true){
// //     rollDice()
// //     rollDiceTwo()
// //   }else{
// //     new ImageView({
// //       left: 100, top: 'prev() 10', width: 200, height: 200,
// //       background: 'white',
// //       image: diceArray[Math.floor((Math.random() * Math.floor(4)))],
// //       scaleMode: 'fill'
// //     }).appendTo(ui.contentView)
// //   }
// // }


// // let rollDice = () => {
// //   new ImageView({
// //     left: 100, top: 'prev() 10', width: 200, height: 200,
// //     background: 'white',
// //     image: diceArray[Math.floor((Math.random() * Math.floor(4)))],
// //     scaleMode: 'fill'
// //   }).appendTo(ui.contentView)
// // }

// // let rollDiceTwo = () => {
// //   new ImageView({
// //     left: 100, top: 'prev() 10', width: 200, height: 200,
// //     background: 'white',
// //     image: diceArray[Math.floor((Math.random() * Math.floor(4)))],
// //     scaleMode: 'fill'
// //   }).appendTo(ui.contentView)
// // }

// // rollDiceOne.on("select", setDice);


// // Create composites and append children to them

// let composite1 = new Composite({
//   left: 0, top: '50%', bottom: 0, right: 0,
//   background: '#f3f3f3'
// }).appendTo(ui.contentView);

// new ImageView({
//     left: 100, top: 'prev() 10', width: 200, height: 200,
//     background: 'white',
//     image: diceArray[Math.floor((Math.random() * Math.floor(4)))],
//     scaleMode: 'fill'
//     }).appendTo(composite1)

// let composite2 = new Composite({
//   left: 0, top: 0, bottom: '50%', right: 0,
//   background: '#f3f3f3'
// }).appendTo(ui.contentView);

// new ImageView({
//   left: 100, top: 'prev() 10', width: 200, height: 200,
//   background: 'white',
//   image: diceArray[Math.floor((Math.random() * Math.floor(4)))],
//   scaleMode: 'fill'
//   }).appendTo(composite2)

  const {RefreshComposite, ImageView, CheckBox, ScrollView, TextView, ui} = require('tabris');

let refreshComposite = new RefreshComposite({
  left: 0, right: 0, top: 0, bottom: 0,
}).on('refresh', ({target}) => setTimeout(() => {
  target.refreshIndicator = false;
  imageView.image = diceArray[Math.floor((Math.random() * Math.floor(4)))];
  imageViewTwo.image = diceArray[Math.floor((Math.random() * Math.floor(4)))];
}, 1000)).appendTo(ui.contentView);

let scrollView = new ScrollView({
  left: 0, right: 0, top: 0, bottom: 0,
}).appendTo(refreshComposite);

// new ImageView({
//   left: 100, top: 'prev() 10', width: 200, height: 200,
//   background: 'white',
//   image: diceArray[Math.floor((Math.random() * Math.floor(4)))],
//   scaleMode: 'fill'
//   }).appendTo(scrollView)

  const imageView = 
  new ImageView({
    left: 100, top: 'prev() 10', width: 200, height: 200,
    background: 'white',
    image: diceArray[Math.floor((Math.random() * Math.floor(4)))],
    scaleMode: 'fill'
    }).appendTo(scrollView)

    const imageViewTwo = 
    new ImageView({
      left: 100, top: 'prev() 10', width: 200, height: 200,
      background: 'white',
      image: diceArray[Math.floor((Math.random() * Math.floor(4)))],
      scaleMode: 'fill'
      }).appendTo(scrollView)

// new TextView({
//   left: 0, right: 0, top: 32,
//   alignment: 'center',
//   font: 'black 24px',
//   text: 'pull to refresh'
// }).appendTo(scrollView);

// const textView = new TextView({
//   left: 0, right: 0, top: 'prev() 32',
//   alignment: 'center',
//   lineSpacing: 1.4,
// }).appendTo(scrollView);

new CheckBox({
  left: 16, right: 16, bottom: 16,
  text: 'Enable pull to refresh',
  checked: true
}).on('checkedChanged', ({value: checked}) => refreshComposite.refreshEnabled = checked)
  .appendTo(ui.contentView);


//   let rollDiceOne = new Button({
//   centerX: 0, centerY: -300,
//   text: 'Tap here'
// }).appendTo(ui.contentView);

// onRoll = false

// let setDice = () => {
//   onRoll = true
//   console.log(onRoll)
//   if (onRoll === true){
//     rollDice()
//     // rollDiceTwo()
//   }else{
//     new ImageView({
//       left: 100, top: 'prev() 10', width: 200, height: 200,
//       background: 'white',
//       image: diceArray[Math.floor((Math.random() * Math.floor(4)))],
//       scaleMode: 'fill'
//     }).appendTo(ui.contentView)
//   }
// }


// let rollDice = () => {
//   dicer.image = diceArray[Math.floor((Math.random() * Math.floor(4)))]
// }

// let rollDiceTwo = () => {
//   new ImageView({
//     left: 100, top: 'prev() 10', width: 200, height: 200,
//     background: 'white',
//     image: diceArray[Math.floor((Math.random() * Math.floor(4)))],
//     scaleMode: 'fill'
//   }).appendTo(ui.contentView)
// }

// rollDiceOne.on("select", setDice);