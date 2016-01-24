(function(){

//private static variables
var ANIMATIONS = {
  IDLE : {
    name : 'idle',
    frames: [ 0, 1, 2, 3],
    fps : 5
  }
};

var FACING_FACTOR = {
    LEFT : -1,
    RIGHT : 1
  };

var WALK_SPEED = 400;
var JUMP_HEIGHT = 1230;
var DIVE_SPEED = 400;
var DIVE_DISTANCE = 400;
  var DIVE_JUMP_TIMEOUT = 125; // ms after a dive that counts as a dive is still happening (and can jump again)

function select_sprite_row(player_id){
    return function(frame_id){
      return frame_id + player_id*ToeFu.ASSETS.SPRITESHEET.PLAYER.frames_per_row;
    };
  }

//sprite class constructor
ToeFu.Player = function(game, id, name) {
  this.game = game;
  this.id = id;
  this.name = name? name : 'Player ' + (id+1);
  this.facing; // direction that player is facing

  //super constructor call
  Phaser.Sprite.call(this, game, 0, 0, ToeFu.ASSETS.SPRITESHEET.PLAYER.name);

  // enable physics (adds this.body)
  this.game.physics.enable(this, Phaser.Physics.ARCADE);

  // this.body.bounce.y = 1;
  // this.body.gravity.y = 400;
  this.body.collideWorldBounds = true;


  //set registration point
  this.anchor = { x : 0.5, y : 0.5 };

  //set animations

  this.animations.add( ANIMATIONS.IDLE.name, ANIMATIONS.IDLE.frames.map(select_sprite_row(this.id)));

  //play the inittial animation
  this.animations.play( ANIMATIONS.IDLE.name, ANIMATIONS.IDLE.fps, true);
};

ToeFu.Player.prototype = Object.create(Phaser.Sprite.prototype, {
  constructor: {
    value : ToeFu.Player
  }
});

//public static variable
ToeFu.Player.FACING = {
  LEFT : 'LEFT',
  RIGHT : 'RIGHT'
};

//update is invoked on every frame
ToeFu.Player.prototype.update = function(){
  //update facing
  this.scale.x = FACING_FACTOR[ this.facing ];
};

// player movement
ToeFu.Player.prototype.jump = function(){
  // this.body.velocity.y = -350;
    if( this.body.y === ToeFu.Game.FLOOR_Y ){
      this.body.velocity.y = -JUMP_HEIGHT;
    } else if( this.is_diving ){ // allow jump after dive (in mid air)
      this.body.velocity.y = -JUMP_HEIGHT*(this.body.y/ToeFu.Game.FLOOR_Y);
    }
};

ToeFu.Player.prototype.dive = function(){
  // this.body.velocity.y = 4000;
  if( this.body.y < ToeFu.Game.FLOOR_Y ){
      this.body.velocity.y = DIVE_SPEED;
      this.body.velocity.x = DIVE_DISTANCE * FACING_FACTOR[ this.facing ];
      this.is_diving = true;
    }else{
      this.body.velocity.y = 0;
      this.body.velocity.x = 0;
      this.is_diving = false;
  }
};

ToeFu.Player.prototype.dive_stop = function(){
// reset velocity
    this.body.velocity.x = 0;
    this.body.velocity.y = 0;
    setTimeout(function(){
      this.is_diving = false;
    }.bind(this), DIVE_JUMP_TIMEOUT);

    this.is_diving; // in Player constructor
};

ToeFu.Player.prototype.step_left = function(){
  this.body.velocity.x = -WALK_SPEED;
};

ToeFu.Player.prototype.step_right = function(){
  this.body.velocity.x = WALK_SPEED;
};

ToeFu.Player.prototype.stop = function(){
  this.body.velocity.x = 0;
};

ToeFu.Player.prototype.victory = function(){
    this.is_diving = false;
    console.log('WINNER!!');
    // make animation
};

ToeFu.Player.prototype.defeat = function(){

  // stop all input
  this.alive = false;

};

// ToeFu.Player.prototype.continue = function(){

// };

})();
