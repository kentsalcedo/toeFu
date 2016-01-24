(function(){

  var BIND = {
    PLAYER : [
      // 0
      {
        JUMP : Phaser.KeyCode.W,
        DIVE : Phaser.KeyCode.S,
        LEFT : Phaser.KeyCode.A,
        RIGHT : Phaser.KeyCode.D
      },
      // 1
      {
        JUMP : Phaser.KeyCode.UP,
        DIVE : Phaser.KeyCode.DOWN,
        LEFT : Phaser.KeyCode.LEFT,
        RIGHT : Phaser.KeyCode.RIGHT
      }
    ],
    STATE : {
      CONTINUE : Phaser.KeyCode.ENTER,
      // B : Phaser.KeyCode.B,
      // M : Phaser.KeyCode.M,
      // O : Phaser.KeyCode.O
    }
  };

  ToeFu.GameInput = function( state ){

    this.state = state;

  };

})();