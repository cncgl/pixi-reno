import ScaledContainer from '../ScaledContainer/ScaledContainer.js';
// import BunnyGroup from '../BunnyGroup/BunnyGroup.js';
import Bunny from '../Bunny/Bunny.js';
import Card from '../Card/Card.js';
import Button from '../Button/Button.js';
import Background from '../Background/Background.js';
import RendererStore from '../../stores/RendererStore.js';
import AnimationStore from '../../stores/AnimationStore';

/**
 * Main App Display Object
 *
 * Adds a background and some bunnies to it's self
 *
 * @exports App
 * @extends ScaledContainer
 */
export default class App extends ScaledContainer {

  constructor(...args) {
    super(...args);

    this.bg = new Background();

    this.addChild(this.bg);

    // this.addBunnies();
    // this.addCard();
    this.addButton();

    this.interactive = true;
    AnimationStore.addChangeListener(() => this.animate());
    // this.animate();
    // requestAnimationFrame(animate);
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

    b.addActionListener(() => this.addCard());

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

    const Xratio = rw / tw;
    const Yratio = rh / th;
    let scaleRatio = rw > rh ? Xratio : Yratio;
    let scale = new PIXI.Point(scaleRatio, scaleRatio);
    let offsetX = (rw / 2) - (tw*scaleRatio / 2);
    let offsetY = (rh / 2) - (th*scaleRatio / 2);

    this.bg.position.x = cx;
    this.bg.position.y = cy;

    this.bg.rotation += 0.01;
    //console.log(tw + "," + th);
    // bgFront.rotation -= 0.01;

    // renderer.render(stage);
    // requestAnimationFrame(this);
  }

}
