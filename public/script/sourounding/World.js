/*
 * class World
 * This class has the basic infromation about the world of the curent level.
 * author: ALF
 * date:2020-03-20
 */
class World
{
  constructor (init={
    columns=4,
    rows=3,
    tile_size=100,
    level=1,map="        aaaa"
    })
  {
    this.columns = init.columns;
    this.rows = init.rows;
    this.tile_size=init.tile_size;
    this.level=init.level;
    this.map=init.map;
  }
}
