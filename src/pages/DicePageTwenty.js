
const {Button, Page, NavigationPage, ImageView, ui, Composite, device, Picker, TextView, } = require('tabris');

module.exports = class DicePageTwenty extends Page {
constructor() {
 super({title: 'D20'});

 const diceArrayTwenty = [
  'https://s3-us-west-1.amazonaws.com/rollthedice/side9.png','https://s3-us-west-1.amazonaws.com/rollthedice/side1.png',
  'https://s3-us-west-1.amazonaws.com/rollthedice/side2.png',
  'https://s3-us-west-1.amazonaws.com/rollthedice/SIDE3.png',
  'https://s3-us-west-1.amazonaws.com/rollthedice/side4.png',
  'https://s3-us-west-1.amazonaws.com/rollthedice/side5.png',
  'https://s3-us-west-1.amazonaws.com/rollthedice/side6.png',
  'https://s3-us-west-1.amazonaws.com/rollthedice/side7.png',
  'https://s3-us-west-1.amazonaws.com/rollthedice/side8.png',
  'https://s3-us-west-1.amazonaws.com/rollthedice/side9.png',
  'https://s3-us-west-1.amazonaws.com/rollthedice/SIDE10.png',
  'https://s3-us-west-1.amazonaws.com/rollthedice/side11.png',
  'https://s3-us-west-1.amazonaws.com/rollthedice/side12.png',
  'https://s3-us-west-1.amazonaws.com/rollthedice/side13.png',
  'https://s3-us-west-1.amazonaws.com/rollthedice/side14.png',
  'https://s3-us-west-1.amazonaws.com/rollthedice/side15.png',
  'https://s3-us-west-1.amazonaws.com/rollthedice/side16.png',
  'https://s3-us-west-1.amazonaws.com/rollthedice/SIDE17.png',
  'https://s3-us-west-1.amazonaws.com/rollthedice/side18.png',
  'https://s3-us-west-1.amazonaws.com/rollthedice/side19.png',
  'https://s3-us-west-1.amazonaws.com/rollthedice/side20.png'
  ]

  new ImageView({
    left: -100, top: 0, height: 900, bottom: 0,
    image: 'https://s3-us-west-1.amazonaws.com/rollthedice/IMG_0808.jpg',
    scaleMode: 'stretch'
  }).appendTo(this)
 
 let rollDice = new Button({
   centerX: 0, centerY: 300,
   text: 'Roll the Dice'
 }).appendTo(this);
 
 
 let diceOne = new ImageView({
     left: 55, top: 100, width: 300, height: 300,
     image: diceArrayTwenty[Math.floor((Math.random() * 20))],
     scaleMode: 'fill'
   }).appendTo(this)
 
 rollDice.on('select', ({target}) =>  {
   var arr = [500, 1000,1300,1500,1700,1900,2100,2400,2800,3200,3600]
   for(let i=0; i< arr.length; i++){
     console.log(arr[i])
       setTimeout(() => {
     rollTheDice(target)
   }, arr[i])
 }}).appendTo(this);
 
 
 let rollTheDice = (target) => {
   console.log(diceArrayTwenty[Math.floor((Math.random() * 20))])
     diceOne.image = diceArrayTwenty[Math.floor((Math.random() * 21))];
 }
 
 

}} 

