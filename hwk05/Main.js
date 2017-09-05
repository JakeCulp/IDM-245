gameObj.Main = function (game) {};

gameObj.Main.prototype = {
  create: function () {
    console.log('State - Main');
    //Add background image
    var spBackground = this.add.sprite(this.world.centerX, this.world.centerY, 'startscreen');
    spBackground.anchor.setTo(0.5, 0.5);

    //Add button
    //The numbers given in parameters are the indexes of the frames, in this order: OVER, OUT, DOWN
    btPlay = this.add.button(this.world.centerX, 350, 'startbutton', this.actionOnClick, this, 1, 0, 2);
    btPlay.anchor.setTo(0.5, 0.5);

    btHowTo = this.add.button(this.world.centerX, 450, 'howtoplay', this.actionOnClickHowTo, this, 1, 0, 2);
    btHowTo.anchor.setTo(0.5, 0.5);

  },
  actionOnClick: function () {
        console.log('actionOnClick called');
        this.state.start('Play');
  },
  actionOnClickHowTo: function () {
        console.log('actionOnClickHowTo called');
        this.state.start('howtoplay');
  }

};
