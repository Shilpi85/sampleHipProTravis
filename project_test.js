var getactionwords = require('./actionwords');

describe('firstProtractorTest', function () {



  beforeEach(function () {
    this.actionwords = Object.create(getactionwords);
  });

  it('Subtraction', function () {
    // Given I open "https://juliemr.github.io/protractor-demo/"
    this.actionwords.iOpenP1("https://juliemr.github.io/protractor-demo/");
    // When I want to do "5" "-" "2"
    this.actionwords.iWantToDoP1P2P3("5", "-", "2");
    // Then result of operation should equal "3"
    this.actionwords.resultOfOperationShouldEqualP1("3");
  });

  it('newAdditionTest', function () {
    // Given I open "https://juliemr.github.io/protractor-demo/"
    this.actionwords.iOpenP1("https://juliemr.github.io/protractor-demo/");
    // When I want to do "1" "+" "4"
    this.actionwords.iWantToDoP1P2P3("1", "+", "4");
    // Then result of operation should equal "5"
    this.actionwords.resultOfOperationShouldEqualP1("5");
  });
});