
const {Button, Page, NavigationPage, ImageView, ui, Composite, device, Picker, TextView, } = require('tabris');

module.exports = class DicePage extends Page {
constructor() {
 super({title: 'Roll the Dice'});

 const diceArray = [
   'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Dice-1-b.svg/2000px-Dice-1-b.svg.png',
   'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Dice-2-b.svg/1024px-Dice-2-b.svg.png',
   'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Dice-3-b.svg/600px-Dice-3-b.svg.png',
   'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Dice-5-b.svg/2000px-Dice-5-b.svg.png',
   'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Dice-6a-b.svg/768px-Dice-6a-b.svg.png',
 ]
 
 
 let rollDice = new Button({
   centerX: 0, centerY: 300,
   text: 'Roll the Dice'
 }).appendTo(this);
 
 
 let diceOne = new ImageView({
     left: 100, top: 100, width: 200, height: 200,
     background: 'white',
     image: diceArray[Math.floor((Math.random() * Math.floor(4)))],
     scaleMode: 'fill'
   }).appendTo(this)
 
 let diceTwo = new ImageView({
   left: 100, top: 'prev() 10', width: 200, height: 200,
   background: 'white',
   image: diceArray[Math.floor((Math.random() * Math.floor(4)))],
   scaleMode: 'fill'
 }).appendTo(this)
 
 
 rollDice.on('select', ({target}) =>  {
   var arr = [500,600,700,800,900,1000,1100,1200,1300,1500,1700,1900,2100,2400,2800,3200]
   for(let i=0; i< arr.length; i++){
     console.log(arr[i])
       setTimeout(() => {
     rollTheDice(target)
   }, arr[i])
 }}).appendTo(this);
 
 
 let rollTheDice = (target) => {
     diceOne.image = diceArray[Math.floor((Math.random() * Math.floor(4)))];
     diceTwo.image = diceArray[Math.floor((Math.random() * Math.floor(4)))];
 }
 
 

}} 

