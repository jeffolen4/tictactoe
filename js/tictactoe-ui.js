$(document).ready( function () {

  var createBoard = appTicTacToe.createBoard;

  var canvas = document.getElementById("mycanvas");

  function drawBoard ( canvas ) {

    var ctx = canvas.getContext("2d");

    ctx.lineWidth = 7;

    ctx.moveTo(85, 0)
    ctx.lineTo(85, 230)
    ctx.stroke();

    ctx.moveTo(180, 0)
    ctx.lineTo(180, 230)
    ctx.stroke();


    ctx.moveTo(0, 70)
    ctx.lineTo(265, 70)
    ctx.stroke();

    ctx.moveTo(0, 150)
    ctx.lineTo(265, 150)
    ctx.stroke();

  }

  function drawO ( canvas, x, y) {

    var ctx = canvas.getContext("2d");

    ctx.beginPath();
    ctx.lineWidth = 7;

    ctx.arc(x+37, y+30, 30, 0, 2 * Math.PI);
    ctx.stroke();

  }

  function drawX ( canvas, x, y) {
    var ctx = canvas.getContext("2d");

    var x2 = x + 7

    ctx.lineWidth = 1;

    // move to x,y coordinates
    ctx.fillStyle = "blue";
    ctx.moveTo(x2    , y   );
    ctx.lineTo(x2+23 , y+30);
    ctx.lineTo(x2    , y+60);
    ctx.lineTo(x2+7  , y+60);
    ctx.lineTo(x2+27 , y+33);
    ctx.lineTo(x2+46 , y+60);
    ctx.lineTo(x2+53 , y+60);
    ctx.lineTo(x2+32 , y+30);
    ctx.lineTo(x2+53 , y   );
    ctx.lineTo(x2+46 , y   );
    ctx.lineTo(x2+27 , y+25);
    ctx.lineTo(x2+7  , y   );
    ctx.lineTo(x2    , y   );
    ctx.stroke();
    ctx.fill();

  }

  function getCurrentLocation( x, y ) {
  }

  $("#mycanvas").click( function (event) {
  })



  var board = createBoard();
  board.initialize();

  drawBoard( canvas );

  drawO( canvas, board.location[4].upperLeft[0], board.location[4].upperLeft[1]);


  // drawX( canvas, 0  ,0);
  // drawX( canvas, 100,0);
  // drawX( canvas, 200,0);
  //
  // drawY( canvas, 0  ,0);
  // drawY( canvas, 100,0);
  // drawY( canvas, 200,0);
  //
  // drawX( canvas, 0  ,80);
  // drawX( canvas, 100,80);
  // drawX( canvas, 200,80);
  //
  // drawY( canvas, 0  ,80);
  // drawY( canvas, 100,80);
  // drawY( canvas, 200,80);
  //
  // drawX( canvas, 0  ,160);
  // drawX( canvas, 100,160);
  // drawX( canvas, 200,160);
  //
  // drawY( canvas, 0  ,160);
  // drawY( canvas, 100,160);
  // drawY( canvas, 200,160);


})
