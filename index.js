const names = ['Guadalupe', 'Ollie', 'Aki'];

function writeCards(){
  let thankyouCards = [];
  let i= 0;
  while (i <names.length){
   thankyouCards.push  (`Thank you, ${names[i]}, for the wonderful surprise gift!`);
    i++;
  }

  return thankyouCards;

}


writeCards(names);

function countDown(){
 let countDown = 0;
 while (countDown < 11) {
  console.log(countDown++);
 }
}