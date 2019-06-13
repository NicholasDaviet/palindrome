module.exports = Phrase;

String.prototype.reverse = function reverse() {
  return Array.from(this).reverse().join("");
};

function Phrase(content) {
  this.content = content;

  this.processor = function() {
    return this.content.toLowerCase();
  };
  
  this.processedContent = function processedContent() {
    return this.processor(this.content);
  };

  // Returns true if the phrase is a palindrome, false otherwise.
  this.palindrome = function palindrome() {
    return this.processedContent() === this.processedContent().reverse();
  };
}

function TranslatedPhrase(content, translation) {
  this.content = content;
  this.translation = translation;

  // Returns translation processed for palindrome testing.
  this.processedContent = function processedContent() {
    return this.processor(this.translation);
  };
}

TranslatedPhrase.prototype = new Phrase();

String.prototype.blank = function() {
    return !!this.match(/^\s*$/g);
};

Array.prototype.last = function() {
    return this[this.length -1];
};