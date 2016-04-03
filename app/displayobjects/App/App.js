import ScaledContainer from '../ScaledContainer/ScaledContainer.js';
import BunnyGroup from '../BunnyGroup/BunnyGroup.js';
import Bunny from '../Bunny/Bunny.js';
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

    this.addBunnies();

    this.interactive = true;
    AnimationStore.addChangeListener(() => this.animate());
    // this.animate();
    // requestAnimationFrame(animate);
  }

  addBunnies() {
    const cx = RendererStore.get('stageCenter').x;
    const cy = RendererStore.get('stageCenter').y;

    let group1 = new BunnyGroup();
    let b1 = new Bunny();

    b1.position.x = cx;
    b1.position.y = cy;

    group1.position.x = cx;
    group1.position.y = cy + (RendererStore.get('stageHeight') * .25);

    this.addChild(b1);
    this.addChild(group1);
  }

  animate() {
    const rw = RendererStore.get('width');
    const rh = RendererStore.get('height');
    const tw = RendererStore.get('target_width');
    const th = RendererStore.get('target_height');

    const Xratio = rw / tw;
    const Yratio = rh / th;
    let scaleRatio = rw > rh ? Xratio : Yratio;
    let scale = new PIXI.Point(scaleRatio, scaleRatio);
    let offsetX = (rw / 2) - (tw*scaleRatio / 2);
    let offsetY = (rh / 2) - (th*scaleRatio / 2);

    // const cx = RendererStore.get('stageCenter').x;
    // const cy = RendererStore.get('stageCenter').y;

    // this.bg.anchor.set(0.5, 0.5);
    // this.bg.pivot.y = 50;

    this.bg.position.x = rw/2;
    this.bg.position.y = rh/2;

    this.bg.rotation += 0.01;
    //console.log(tw + "," + th);
    // bgFront.rotation -= 0.01;

    // renderer.render(stage);
    // requestAnimationFrame(this);
  }

}
