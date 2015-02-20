describe('Deck', function() {
  describe('init', function() {
    it('creates a new deck of cards', function() {
    var deck = Object.create(Deck);
    deck.init()
    var card = deck.draw(1)
    expect(card.length).to.equal(1);
    });
  });

  describe('draw', function() {
    it('draws a number of cards from deck', function() {
    var deck = Object.create(Deck);
    deck.init();
    var cards = deck.draw(19);
    expect(cards.length).to.equal(19);
    });
  });
});

describe('Player', function() {
  describe('getCard', function() {
    it('adds a given card to hand', function (){
      var deck = Object.create(Deck);
      var player1 = Object.create(Player);
      player1.init();
      player1.getCards([2,3]);
      expect(player1.seeCards()).to.eql([2,3]);
    });
  });
});


describe('Score', function() {
  describe("score", function() {
    it('will return the score of one card', function() {
      var score1 = Object.create(Score);
      expect(score1.score([4])).to.eql([2]);
      expect(score1.score([8])).to.eql([3]);
      expect(score1.score([12])).to.eql([4]);
      expect(score1.score([32])).to.eql([9]);
      expect(score1.score([36])).to.eql([10]);
      expect(score1.score([48])).to.eql([10]);
      expect(score1.score([51])).to.eql([10]);
      expect(score1.score([2])).to.eql([1, 11]);
      expect(score1.score([2, 5])).to.eql([3, 13]);
    });
  });

});
