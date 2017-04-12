// requiring our basic card module exported from basic.js
var FlashCard = require("./basic_card.js");
var ClozeCard = require("./cloze_card.js");
var basicCardHolder = [];
var clozeCardHolder = [];

var basicQuestions = [{
    front: "Do you like chocolate or candy?",
    back: "chocolate"
}, {
    front: "Do you drink tea or coffee?",
    back: "coffee"
}, {
    front: "Would you like to eat steak or chicken?",
    back: "steak"
}]
for (i = 0; i < basicQuestions.length; i++) {
    var abcflashcard = new FlashCard(basicQuestions[i].front, basicQuestions[i].back);
    basicCardHolder.push(abcflashcard)

    console.log("Question: " + basicCardHolder[i].front);
}

var clozeQuestions = [{
    text: "Tallahassee is Florida's state capital.",
    cloze: "Tallahassee"
}, {
    text: "Florida is also known as The Sunshine State.",
    cloze: "The Sunshine State"
}, {
    text: "Jacksonville is Florida's largest city.",
    cloze: "Jacksonville"
}]
for (i = 0; i < clozeQuestions.length; i++) {
    var abcflashcard = new ClozeCard(clozeQuestions[i].text, clozeQuestions[i].cloze);
    clozeCardHolder.push(abcflashcard)

    console.log("Question: " + clozeCardHolder[i].text);
}


//console.log(JSON.stringify(cardHolder, null, 2));
