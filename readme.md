This is a sample NPM module by Nicholas Daviet

The module can be used as follows:

$ npm install --global ndaviet-palindrome
$ vim test.js
let Phrase = require("ndaviet-palindrome");
let napoleonsLament = new Phrase("Able was I, ere I saw Elba.");
console.log(napoleonsLament.palindrome());
$ node test.js
true