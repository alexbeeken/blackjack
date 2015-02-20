var Deck = {
  cards: [],

  init: function() {
    this.cards = [];
    for( var i = 0; i < 52; i++) {
      this.cards.push(i);
    };

  },

  draw: function(number) {
    var output = [];
    var index;

    for (var i = 0; i < number; i++) {
      index = Math.floor(Math.random() * this.cards.length);
      output.push(this.cards.splice(index, 1));
    }
    return output;
  }

};

var Player = {
  name: "",

  cards: [],

  handScore: [],

  init: function() {
    this.cards = [];
    this.handScore = [];
  },

  seeCards: function() {
    return this.cards;
  },

  getCards: function(cardArray) {
    var currentHand = this.cards;
    cardArray.forEach( function(card) {
      currentHand.push(card);
    });
    this.cards = currentHand;
  }

};

var Score = {
  score: function(array) {
    var output = [0, 0];
    array.sort().reverse()
    array.forEach( function(card) {
      if (card > 35) {
        output[0] += 10;
      } else if (card > 3) {
        output[0] += Math.floor(card / 4) + 1;
      } else {
        output[0] += 1;
        output[1] = (output[0] + 10);
      }

    });
    if (output[1] === 0) {
      return [output[0]];
    }
    else {
      return output;
    }

  }
};

var Stringer = {
  cardToString: function(card) {
    if (card > 35) {
      var recheck = Math.floor((card % 36) / 4)
      if (recheck < 4){
        return "J";
      } else if (recheck < 8){
        return "Q";
      } else if (recheck < 12){
        return "K";
      }
    } else if (card > 3) {
      return (Math.floor(card / 4) + 1).toString();
    } else {
      return "A";
    }
  }
};


$(function() {
  var deck = Object.create(Deck);
  deck.init();
  var player1 = Object.create(Player);
  player1.init();
  var score = Object.create(Score);
  var stringer = Object.create(Stringer);
  player1.getCards(deck.draw(2));
  $("#card1").text(stringer.cardToString(player1.seeCards()[0]));
  $("#card2").text(stringer.cardToString(player1.seeCards()[1]));

  var currentScore = score.score(player1.seeCards());

  $("#currentScoreDiv h2").text(currentScore);

  $("#hitMe").click(function() {

    player1.getCards(deck.draw(1));

    if (player1.seeCards().length < 6) {
      if (currentScore < 21) {
        $("#card" + (player1.seeCards().length.toString())).text(stringer.cardToString(player1.seeCards()[player1.seeCards().length-1]));
        $("#currentScoreDiv h2").text(score.score(player1.seeCards()));
        currentScore = score.score(player1.seeCards());
      }

      currentScore.forEach( function(score) {
        if (score === 21) {
          alert("win");
        } else if ((score > 21) && (score === currentScore[1])) {
          alert("lose");
        } else {

        }
      });
    }
  });

});
