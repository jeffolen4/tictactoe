var appTicTacToe = appTicTacToe || {};

appTicTacToe.nextPlayerId = 0;
appTicTacToe.nextBoardId = 0;

// create player factory function
appTicTacToe.createPlayer = function () {

  var player = function () {
    this.identity = appTicTacToe.nextPlayerId++;
    this.initialize = function ( XorO, playerType ) {
      this.type = playerType
      this.XorO = XorO;
      this.name = "";
    };
  };
  return new player();
}


appTicTacToe.createLocation = function ( x, y ) {

  var location = function() {
    this.lowerRight = [ x+99, y+79 ];
    this.upperLeft = [x,y];
    this.currentState = false;
  };
  return new location();
}


// create board factory
appTicTacToe.createBoard = function () {

  var createLocation = appTicTacToe.createLocation;

  var board = function () {
    this.identity = appTicTacToe.nextBoardId++;
    this.matrix = [];
    this.initialize = function () {
      for (var x=0; x < 9; x++ ) {
        this.matrix.push(false);
      };
      this.location = [];
      this.location.push( createLocation( 0,   0 ) );
      this.location.push( createLocation( 100, 0 ) );
      this.location.push( createLocation( 200, 0 ) );
      this.location.push( createLocation( 0,   80 ) );
      this.location.push( createLocation( 100, 80 ) );
      this.location.push( createLocation( 200, 80 ) );
      this.location.push( createLocation( 0,   160 ) );
      this.location.push( createLocation( 100, 160 ) );
      this.location.push( createLocation( 200, 160 ) );
    };
  };
  return new board();
}
