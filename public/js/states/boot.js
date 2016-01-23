//class constructor
  // preloading assets
  // and switching into the game state

ToeFu.Boot = function (){

};

ToeFu.Boot.prototype.preload = function() {
  // will preload assets
};

ToeFu.Boot.prototype.create = function() {
  // switch to the game state
  this.state.start( ToeFu.STATES.GAME );


};