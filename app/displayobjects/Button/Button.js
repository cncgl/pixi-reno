/**
 * Created by shigeru on 16/04/04.
 */
import { Tween } from 'tween.js';
import { Sprite, Texture } from 'pixi.js';
import BUTTON from './button.png';
import BUTTON_OVER from './buttonOver.png';
import BUTTON_DOWN from './buttonDown.png';

/**
 * A bunny which spins on it's feet when moused over
 *
 * @exports Bunny
 * @extends Sprite
 */
export default class Button extends Sprite {

  constructor() {
    const texture = Texture.fromImage(BUTTON);
    super(texture);

    this.textureButton     = texture;
    this.textureButtonOver = Texture.fromImage(BUTTON_OVER);
    this.textureButtonDown = Texture.fromImage(BUTTON_DOWN);


    this.tween = new Tween(this);

    this.anchor.x = .5;
    this.anchor.y = 1;

    this.pivot.x = .5;
    this.pivot.y = .5;

    this.interactive = true;
    this.on('mouseup',   this.onButtonUp.bind(this));
    this.on('mousedown', this.onButtonDown.bind(this));
    this.on('mouseover', this.onButtonOver.bind(this));
    this.on('mouseout',  this.onButtonOut.bind(this));
  }

  onButtonUp() {
    this.isdown = false;
    if (this.isOver) {
      this.texture = this.textureButtonOver;
    } else {
      this.texture = this.textureButton;
    }
  }
  onButtonDown() {
    this.isdown = true;
    this.texture = this.textureButtonDown;
    this.alpha = 1;
    if(this.listener !== undefined) {
      // console.log(this.listener)
      this.listener();
    }
  }
  onButtonOver() {
    this.isOver = true;
    if (this.isdown) return;
    this.texture = this.textureButtonOver;
  }
  onButtonOut() {
    this.isOver = false;
    if (this.isdown) return;
    this.texture = this.textureButton;
  }
  addActionListener(l) {
    this.listener = l
  }
  removeActionListener(l) {
    this.listener = undefined;
  }
}
