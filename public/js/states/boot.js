//class constructor
  // preloading assets
  // and switching into the game state

ToeFu.Boot = function (){

};

ToeFu.Boot.prototype.preload = function() {
  // will preload assets
  // want to actually outload
  // ToeFu.game.load.spritesheet('player','assets/wahtever.png',12, 324,12)

  //autoloads assets
  Object.keys(ToeFu.ASSETS).forEach(function(type){
    for( var asset in ToeFu.ASSETS[type]){
      ToeFu.game.load[type.toLowerCase()](
        ToeFu.ASSETS[type][asset].name,
        ToeFu.ASSETS[type][asset].path,
        ToeFu.ASSETS[type][asset].width,
        ToeFu.ASSETS[type][asset].height,
        ToeFu.ASSETS[type][asset].frames
      );
    }
  });
};

ToeFu.Boot.prototype.create = function() {
  // switch to the game state
  this.state.start( ToeFu.STATES.GAME );


};