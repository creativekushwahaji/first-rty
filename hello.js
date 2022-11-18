var cowsay = require("cowsay");

const Quote = require("inspirational-quotes");

const cowtext = Quote.getQuote();

console.log(
  cowsay.say({
    text: cowtext.text,
    e: "👓",
    T: "U ",
  })
);
