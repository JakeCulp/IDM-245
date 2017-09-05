gameObj.Play = function (game) {
  var txScore;
  var timerSeconds; //current time in seconds
  var timerObj; // time object
  var txTime; // display text time

  var spBackground; // background image

  var sp;
  var road;
  var buildings;
  var character;

  // Jumping
  // items
  var Items = [];
  var image;

  var rndVar;
  var badItem;
  var goodItem;

  // var badItemGroup;
  // var goodItemGroup;
  // var characterGroup;

};

gameObj.Play.prototype = {
  create: function () {
    console.log('State - Play');
    spBackground = this.add.tileSprite(this.world.centerX, this.world.centerY,960,720, 'background');
    spBackground.anchor.setTo(0.5, 0.5);
    buildings = this.add.tileSprite(this.world.centerX, this.world.centerY,960,720, 'buildings');
    buildings.anchor.setTo(0.5, 0.5);
    road = this.add.tileSprite(this.world.centerX, this.world.centerY,960,720, 'road');
    road.anchor.setTo(0.5, 0.5);
    character = this.add.sprite(this.world.centerX-300, this.world.centerY+170, 'character');
    character.anchor.x = 0.5;

    badItem = '';
    goodItem = '';




    //The numbers given in parameters are the indexes of the frames, in this order: OVER, OUT, DOWN
    var btWin = this.add.button(this.world.centerX-110, 50, 'winButton', this.winnerFun, this, 1, 0, 2);
    var btLose = this.add.button(this.world.centerX, 50, 'loseButton', this.loserFun, this, 1, 0, 2);
    var btPoints = this.add.button(this.world.centerX+110, 50, 'pointsButton', this.pointsFun, this, 1, 0, 2);

    gameObj.gScore = 0;
    //Add text
    var scoreStr = '0';
    var timeStr = '2:00';

    txScore = this.add.text(115, 15, scoreStr);
    txTime = this.add.text(this.world.width - 115, 15, timeStr);
    txScore.anchor.x = 0.5;
    txTime.anchor.x = 0.5;

    txScore.fill = '#264E90';
    txScore.font = 'VT323';
    txScore.fontSize = 64;

    txTime.fill = '#264E90';
    txTime.font = 'VT323';
    txTime.fontSize = 64;

    // good items
    Items = [ 'coffeecup', 'textbook', 'charger','student', 'professor', 'car' ];

    // var itemGroup = this.add.group();
    //
    // var coffeecup = this.add.sprite(this.world.centerX+500, this.world.centerY+270, 'coffeecup');
    // itemGroup.add(coffeecup);
    // var textbook = this.add.sprite(this.world.centerX+500, this.world.centerY+270, 'textbook');
    // itemGroup.add(textbook);
    // var charger = this.add.sprite(this.world.centerX+500, this.world.centerY+270, 'charger');
    // itemGroup.add(charger);
    // var student = this.add.sprite(this.world.centerX+500, this.world.centerY+145, 'student');
    // itemGroup.add(student);
    // var professor = this.add.sprite(this.world.centerX+500, this.world.centerY+140, 'professor');
    // itemGroup.add(professor);
    // var car = this.add.sprite(this.world.centerX+500, this.world.centerY=200, 'car');
    // itemGroup.add(car);

    // itemGroup.setAll('anchor.x', 0.5);
    // itemGroup.setAll('anchor.y', 0.5);
    // itemGroup.setAll('outOfBoundsKill', true);
    // itemGroup.enableBody = true;
    // this.game.physics.arcade.enable(itemGroup);
    // console.log(itemGroup);

    // for (var i = 0; i < Items.length, i++) {
    //   var item = Items[i];
    //   item.enableBody = true;
    //   item.body.velocity.x = -1050;
    //   item.body.immovable = true;
    //   item.body.allowGravity = false;
    //   item.body.bounce.setTo(1, 1);
    // }

    //  Set the world (global) gravity and character/road gravity
    this.physics.startSystem(Phaser.Physics.ARCADE);
    this.physics.arcade.gravity.y = 1800;
    this.physics.enable(character, Phaser.Physics.ARCADE);
    character.body.collideWorldBounds = true;
    character.body.bounce.y = .125;
    character.enableBody = true;
    character.immovable = true;


    this.physics.enable(road, Phaser.Physics.ARCADE);
    road.body.bounce.y = 0;
    road.body.allowGravity = false;
    road.body.immovable = true;
    road.body.setSize(960, 100, 0, 700);


    // Timer setup

    timerSeconds = 120;
    //Create timer object
    timerObj = this.game.time.create(false);
    // Set a timer loop
    timerObj.loop(1000, this.updateTimeFun, this);
    // Start timer loop
    timerObj.start();

    // Timed Random Setup
    var number = this.time.events.repeat(Phaser.Timer.SECOND * this.rnd.integerInRange(3,5), 24, this.generateRandom, this);

    // jumping mechanics

    this.JUMP_SPEED = -1100; // pixels/second (negative y is up)

    this.spaceKey = this.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

  },

  generateRandom: function() {
    rndVar = this.rnd.integerInRange(0,5);

    if (rndVar == 3 || rndVar == 4 || rndVar == 5) {
      if (rndVar == 3) {
        badItem = this.add.sprite(this.world.centerX+500,this.world.centerY+145, Items[rndVar]);
      }
      if (rndVar == 4) {
        badItem = this.add.sprite(this.world.centerX+500,this.world.centerY+140, Items[rndVar]);
      }
      if (rndVar == 5) {
        badItem = this.add.sprite(this.world.centerX+500,this.world.centerY+200, Items[rndVar]);
      }
    this.physics.enable(badItem, Phaser.Physics.ARCADE);
    badItem.enableBody = true;
    badItem.body.velocity.x=-1050;
    // badItem.body.immovable = true;
    badItem.body.allowGravity = false;
    badItem.outOfBoundskill = true;
    badItem.body.bounce.setTo(1, 0);
    }

    else {
    goodItem = this.add.sprite(this.world.centerX+500,this.world.centerY+270, Items[rndVar]);
    this.physics.enable(goodItem, Phaser.Physics.ARCADE);
    goodItem.enableBody = true;
    goodItem.body.velocity.x=-1050;
    goodItem.outOfBoundskill = true;
    // goodItem.body.immovable = true;
    goodItem.body.allowGravity = false;
    goodItem.body.bounce.setTo(1, 0);
    }


  },
  winnerFun: function () {
    console.log('win');
    this.state.start('Winner');
  },
  loserFun: function () {
    console.log('lose');
    this.state.start('Loser');
  },
  pointsFun: function () {
    console.log('pointsFun called');
    gameObj.gScore+= 10;
    txScore.text = gameObj.gScore;
  },
  updateTimeFun: function () {
    console.log('updateTimeFun called');
    timerSeconds--;
    if (timerSeconds >= 0 ) {
      // Keep going
      var displayMin = Math.floor(timerSeconds / 60) % 60;
      var displaySec = Math.floor(timerSeconds) % 60;
      if (displaySec < 10 ) {
        displaySec = "0" + displaySec;
      }
      gameObj.gTime = displayMin + ":" + displaySec;
      txTime.text = gameObj.gTime;
    } else {
      // Game over
      if (gameObj.gScore > 100) {
        this.state.start('Winner');
        gameObj.gScore *= 2;
      } else {
        this.state.start('Loser');
        gameObj.gScore *= 0.5;
      }
    }
  },
  update: function () {
    console.log(badItem);
    this.physics.arcade.collide(character, badItem, this.badItemCollision, null, this);
    this.physics.arcade.collide(character, goodItem, this.goodItemCollision, null, this);

    if (buildings.tilePosition.x > -7000) {
      road.tilePosition.x -= 5;
      buildings.tilePosition.x -= 1;
      spBackground.tilePosition.x -= 0.2;

      if (timerObj == 0 && buildings.tilePosition.x > -7000) {
        this.state.start('Loser');
        gameObj.gScore *= 0.5;
      }
    } else {
      buildings.stopScroll();
      timerObj.stop();
      this.state.start('Winner');
      gameObj.gScore *= 2;

    }
    this.physics.arcade.collide(road, character, null, null, this);
    // this.physics.arcade.collide(character, Items, this.goodItemCollision(Items[0], character), null, this);


    var onTheGround = character.body.touching.down;

    if (onTheGround && this.spaceBarInputActive()) {
        // Jump when the player is touching the ground and the up arrow is pressed
        character.body.velocity.y = this.JUMP_SPEED;
    }
  },
  badItemCollision: function (badItem, character ) {
    console.log('bad collision');
    gameObj.gScore-= 10;
    txScore.text = gameObj.gScore;

  },
  goodItemCollision: function (goodItem, character) {
    console.log('good collision');
    gameObj.gScore+= 10;
    txScore.text = gameObj.gScore;

  },

  spaceBarInputActive: function(duration) {
    var isActive = false;

    isActive = this.input.keyboard.downDuration(Phaser.Keyboard.SPACEBAR, duration);
    isActive |= (this.game.input.activePointer.justPressed(duration + 1000/60) &&
        this.game.input.activePointer.x > this.game.width/4 &&
        this.game.input.activePointer.x < this.game.width/2 + this.game.width/4);

    return isActive;
  },

  render: function () {
    this.game.debug.bodyInfo(character,32,32);
    this.game.debug.spriteBounds(character);
  }

};
