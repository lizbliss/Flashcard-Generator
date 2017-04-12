// constructor function for creating basic flashcard objects
var clozeCard = function(text, cloze) {
    this.text = text;
    this.cloze = cloze;
    //TODO: handle error logic
};

clozeCard.prototype.getpartial = function() {
    var mytext = this.text;
    var partial = mytext.replace(" " + this.cloze, " ...");
};

// exporting our basicCard constructor. 
module.exports = clozeCard;
