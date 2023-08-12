const names = ["Charlie", "Samip", "Ali"];

function writeCards(names) {
  const thankYouMessages = [];


  for (let i = 0; i < names.length; i++) {
    const message = `Thank you, ${names[i]}, for the wonderful birthday gift!`;
    thankYouMessages.push(message);
  
  
  }

  return thankYouMessages;
}

const messages = writeCards(names);
console.log(messages);