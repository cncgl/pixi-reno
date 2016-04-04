import PIXI from 'pixi.js';
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

    //const cx = RendererStore.get('stageCenter').x;
    //const cy = RendererStore.get('stageCenter').y;

    bg.interactive = true;
    bg.anchor.x = .5;
    bg.anchor.y = .5;
    bg.scale.x = 1;
    bg.scale.y = 1;
    //bg.position.x = cx;
    //bg.position.y = cy;
    // bg.pivot.x = .5;
    // bg.pivot.y = .5;

    this.addChild(bg);
  }

}
