var createPlayer = appTicTacToe.createPlayer;
var createBoard  = appTicTacToe.createBoard;

describe('tictactoe', function() {
  it("should create a player", function () {
    var player = createPlayer();
    expect(player).to.not.equal(undefined);
  });

  it("should allow the player type to be set", function () {
    var player = createPlayer();
    player.initialize( "x", "person");
    expect(player.type).to.equal("person");
    expect(player.XorO).to.equal("x");
  });

  it("should create a board", function () {
    var board = createBoard();
    expect(board).to.not.equal(undefined);
  });

  it("should initialize the board", function () {
    var board = createBoard();
    board.initialize();
    expect(board.matrix[0]).to.deep.equal([false,false,false]);
    expect(board.matrix[1]).to.deep.equal([false,false,false]);
    expect(board.matrix[2]).to.deep.equal([false,false,false]);
    expect(board.matrix.length).to.equal(3);
    expect(board.matrix[0].length).to.equal(3);
  });

})
