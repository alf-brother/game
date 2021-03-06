/*
 * class Display
 * This class handles the displaying of the world and the player.
 * The class needs the id of the canvas to print in, a player object
 * and a world. If this three things are not providet a exception will
 * be thrown.
 * author: ALF
 * date: 2020-03-20
 */
class Display
{
  constructor (init={canvasid=null, player=null, world=null})
  {
    if (init.canvasid == null) 
      throw DisplayException ("No canvas id defined!");
    this.buffer = document.getElementByID(canvasid).getContext("2d");
    this.context = document.getElementByID(canvasid).getContext("2d");
    if (init.player == null) throw DisplayException ("No player defined!");
    this.player = init.player;
    if (init.world == null) throw DisplayException ("No wolrd defined!"); 
    this.world = init.world;
  }
  /*
   * render ()
   * This function renders the map and the player.
   */
  render ()
  {
    let tilex= Math.floor((this.player.x) / this.world.tile_size);
    let tiley= Math.floor((this.player.y) / this.world.tile_size);
    for (let index = this.wolrd.map.length - 1 ; index > -1 ; -- index)
    {
      this.buffer.fillStyle=this.filds[this.world.map[index]];
      this.buffer.fillRect (
        (index % this.world.columns) * this.world.tile_size,
        Math.floor (index / this.world.columns) * this.world.tile_size,
        this.wolrd.tile_size, this.wolrd.tile_size
        );
    }
    this.buffer.fillStyle = this.player.color;
    this.buffer.fillRect (
      this.player.x,
      this.player.y,
      this.player.width,
      this.player.height
      );
  }
  /*
   * resize (event)
   * This function handles the event if the window would be resized.
   */
  resize (event)
  {
    let client_height = document.documentElement.clientHeight;
    display.context.canvas.width = document.documentElement.clientWidth;
    if (display.context.canvas.width > client_height) {
      display.context.canvas.width = client_height;
    }
    display.context.canvas.height = Math.floor
      (display.context.canvas.width * 0.625);
    display.render();
  }
}

