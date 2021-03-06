gameObj.Winner = function (game) {};

gameObj.Winner.prototype = {
  create: function () {
    console.log('State - Winner');
    //Add background image
    var spBackground = this.add.sprite(this.world.centerX, this.world.centerY, 'losescreen');
    spBackground.anchor.setTo(0.5, 0.5);

    var characterWin = this.add.sprite(this.world.centerX-250, this.world.centerY-130, 'character_win');
    spBackground.anchor.setTo(0.5, 0.5);

    playAgain = this.add.button(this.world.centerX, 550, 'playagainsprite', this.replayFun, this, 1, 0, 2);
    playAgain.anchor.x=0.5;

    exitBtn = this.add.button((this.world.centerX+380), 75, 'exitbutton', this.exitFun, this, 1, 0, 2);
    exitBtn.anchor.x=0.5;


    var styleLoseText = { font: "128px VT323", fill: "#264E90", align: "center" };
    var styleScoreText = { font: "96px VT323", fill: "#417505", align: "center" };
    var styleScore = { font: "96px VT323", fill: "#264E90", align: "center" };
    var styleTime = { font: "72px VT323", fill: "#264E90", align: "center" };
    var winText = this.add.text(480,100, "YOU MADE IT!", styleLoseText);
    var scoreText = this.add.text(630,250, "SCORE:", styleScoreText);
    var score = this.add.text(615,350, gameObj.gScore, styleScore);
    var timeRemaining = this.add.text(480,450, "Time Remaining: "+ gameObj.gTime, styleTime);
    winText.anchor.x = 0.5;
    scoreText.anchor.x = 0.5;
    score.anchor.x = 0.5;
    timeRemaining.anchor.x = 0.5;
  },
  replayFun: function () {
    console.log('replayFun clicked');
    this.state.start('Play');
  },

  exitFun: function () {
    console.log("exitFun clicked");
    this.state.start('Main');
  }
};
