import PIXI from 'pixi.js';
import TEXTURE from './BGrotate.jpg';

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
    bg.scale.x = 1;
    bg.scale.y = 1;
    this.addChild(bg);
  }
}
