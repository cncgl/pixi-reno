import PIXI from 'pixi.js';
// import TEXTURE from './diagnostic.png';
import TEXTURE from './BGrotate2.jpg';

// default target size
//let tw = 1920;
//let th = 1080;

/**
 * Loads the adds the diagnostic image
 *
 * @exports Background
 * @extends Container
 */
export default class Background extends PIXI.Container {

  constructor() {
    super();

    var bg = PIXI.Sprite.fromImage(TEXTURE);
    bg.interactive = true;
    bg.anchor.x = .5;
    bg.anchor.y = .5;
    bg.pivot.x = .5;
    bg.pivot.y = .5;

    this.addChild(bg);
  }

}
