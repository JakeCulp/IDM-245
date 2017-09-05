gameObj.howtoplay = function (game) {};

gameObj.howtoplay.prototype = {
  create: function () {
    console.log("State - How To Play");

    var spBackground = this.add.sprite(this.world.centerX, this.world.centerY, 'losescreen');
    spBackground.anchor.setTo(0.5, 0.5);

    exitBtn = this.add.button((this.world.centerX+380), 75, 'exitbutton', this.exitFun, this, 1, 0, 2);
    exitBtn.anchor.x=0.5;

    spacebutton = this.add.sprite(250,340, 'spacebutton');
    spacebutton.anchor.x=0.5;

    var gainText = 'GAIN POINTS BY COLLECTING BOOKS, CHARGERS, AND COFFEE CUPS';
    var loseText = 'LOSE POINTS BY HITTING CARS, STUDENTS, AND PROFESSORS';
    var controlsText = 'CONTROLS';
    var jumpText = 'TO JUMP';
    var goalText = 'MAKE IT TO WESTPHAL BEFORE THE TIMER RUNS OUT!';

    var textGain = this.add.text(665, 345, gainText);
    var textLose = this.add.text(675, 495, loseText);
    var textControls = this.add.text(250, 220, controlsText);
    var textJump = this.add.text(250, 420, jumpText);
    var textGoal = this.add.text(665, 150, goalText);

    textGain.anchor.x=0.5;
    textLose.anchor.x=0.5;
    textControls.anchor.x=0.5;
    textJump.anchor.x=0.5;
    textGoal.anchor.x=0.5;

    textGain.font = 'VT323';
    textLose.font = 'VT323';
    textControls.font = 'VT323';
    textJump.font = 'VT323';
    textGoal.font = 'VT323';


    textGain.fill = '#417505';
    textLose.fill = '#D0011B';
    textControls.fill = '#0B0B0B';
    textJump.fill = '#0B0B0B';
    textGoal.fill = '#264E90';

    textGain.fontSize = '40px';
    textLose.fontSize = '40px';
    textControls.fontSize = '96px';
    textJump.fontSize = '84px';
    textGoal.fontSize = '56px';


    textGain.wordWrap = true;
    textGain.wordWrapWidth = 500;

    textLose.wordWrap = true;
    textLose.wordWrapWidth = 500;

    textGoal.wordWrap = true;
    textGoal.wordWrapWidth = 450;

    textGain.align = 'left';
    textLose.align = 'left';
    textGoal.align = 'center';


  },
  exitFun: function () {
    this.state.start('Main');
  }
};
