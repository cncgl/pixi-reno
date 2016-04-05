import Card from '../Card/Card.js';
import Button from '../Button/Button.js';
import Background from '../Background/Background.js';
import RendererStore from '../../stores/RendererStore.js';
import AnimationStore from '../../stores/AnimationStore';
import ActionStore from '../../stores/ActionStore';

/**
 * Main App Display Object
 *
 * Adds a background and some bunnies to it's self
 *
 * @exports App
 * @extends ScaledContainer
 */
export default class App extends PIXI.Container {

  constructor(...args) {
    super(...args);

    const cx = RendererStore.get('stageCenter').x;
    const cy = RendererStore.get('stageCenter').y;
    this.bg = new Background();
    this.bg.position.x = cx;
    this.bg.position.y = cy;

    this.addChild(this.bg);

    this.addButton();

    this.interactive = true;
    AnimationStore.addChangeListener(() => this.animate());
    ActionStore.addActionListener(() => this.addCard());
  }

  addBunnies() {
    const cx = RendererStore.get('stageCenter').x;
    const cy = RendererStore.get('stageCenter').y;

    let b1 = new Bunny();

    b1.position.x = cx;
    b1.position.y = cy;

    this.addChild(b1);
  }

  addButton() {
    const cx = RendererStore.get('stageCenter').x;
    const cy = RendererStore.get('stageCenter').y;

    let b = new Button();

    b.position.x = cx;
    b.position.y = cy + (RendererStore.get('stageHeight') * .25);

    this.addChild(b);
  }

  addCard() {
    const cx = RendererStore.get('stageCenter').x;
    const cy = RendererStore.get('stageCenter').y;

    if(this.c1 !== null) {
      this.removeChild(this.c1);
      this.c1 = null;
    }

    this.c1 = new Card();

    this.c1.position.x = cx;
    this.c1.position.y = cy;

    this.addChild(this.c1);
  }

  animate() {
    const rw = RendererStore.get('width');
    const rh = RendererStore.get('height');
    const tw = RendererStore.get('target_width');
    const th = RendererStore.get('target_height');
    const cx = RendererStore.get('stageCenter').x;
    const cy = RendererStore.get('stageCenter').y;

    this.bg.position.x = cx;
    this.bg.position.y = cy;

    this.bg.rotation += 0.01;
  }

}
