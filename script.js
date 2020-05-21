const game = new GameCanvas('game');

function makePaddle () {
  var paddle = {
    x : 100,
    y : 100,
  }
  game.addDrawing(
    function ({ctx}) {
      ctx.beginPath();
      ctx.moveTo(paddle.x,paddle.y);
      ctx.lineTo(paddle.x+100,paddle.y);
      ctx.stroke();
  });
  return paddle;
}

game.addHandler('keypress',
function ({event}) {
    if (event.key=='a') {
      paddle.x += 10
    }
    if (event.key=='d') {
      paddle.x -= 10;
    }
});

const paddle = makePaddle();
game.run();