import PIXI from 'pixi.js';
import { Tween } from 'tween.js';
import { Sprite, Texture } from 'pixi.js';

// この書き方でいいのか？
import FRAME0001 from './frame0001.png';
import PICT0001 from './06_Johann_Strauss_I.png';
import PICT0002 from './13_Mussorgsky.png';
import PICT0003 from './20_Puccini.png';
import PICT0004 from './akutagawa_ryunosuke.png';
import PICT0005 from './aprilfool_bikkuribako.png';
import PICT0006 from './aprilfool_boy.png';
import PICT0007 from './aprilfool_woman.png';
import PICT0008 from './beethoven.png';
import PICT0009 from './benkei.png';
import PICT0010 from './cleopatra.png';
import PICT0011 from './gandhi.png';
import PICT0012 from './helen_keller.png';
import PICT0013 from './nigaoe_Dostoevsky.png';
import PICT0014 from './nigaoe_godaigo_tennou.png';
import PICT0015 from './nigaoe_kikuchi_kan.png';
import PICT0016 from './nigaoe_macarthur.png';
import PICT0017 from './nigaoe_shikoutei.png';
import PICT0018 from './nigaoe_youkihi.png';
import PICT0019 from './syoutoku_taishi.png';
import PICT0020 from './taketsuru_rita.png';
import PICT0021 from './einstein.png';
import PICT0022 from './tokugawa_ieyasu.png';
import PICT0023 from './onono_komachi.png';
import PICT0024 from './juuryoku_newton.png';
import PICT0025 from './ushiwakamaru_yoshitsune.png';
import PICT0026 from './nightingale.png';
import PICT0027 from './marie_antoinette.png';
import PICT0028 from './nigaoe_buddha.png';
import PICT0029 from './jean_of_arc.png';
import PICT0030 from './buddha_satori_gedatsu_bodaiju.png';

const PICT = [
  PICT0001, PICT0002, PICT0003, PICT0004, PICT0005,
  PICT0006, PICT0007, PICT0008, PICT0009, PICT0010,
  PICT0011, PICT0012, PICT0013, PICT0014, PICT0015,
  PICT0016, PICT0017, PICT0018, PICT0019, PICT0020,
  PICT0021, PICT0022, PICT0023, PICT0024, PICT0025,
  PICT0026, PICT0027, PICT0028, PICT0029, PICT0030
];

/**
 * A bunny which spins on it's feet when moused over
 *
 * @exports Bunny
 * @extends Sprite
 */
export default class Card extends /* Sprite */ PIXI.Container {

  constructor() {
    super();

    const textureFrame = Texture.fromImage(FRAME0001);
    let spriteFrame = new Sprite(textureFrame);
    spriteFrame.anchor.x = .5;
    spriteFrame.anchor.y = 1;

    spriteFrame.pivot.x = .5;
    spriteFrame.pivot.y = .5;

    spriteFrame.interactive = true;
    this.addChild(spriteFrame);

    // const id = Math.floor(Math.random()*PICT.length);
    const weights = [
      100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
      100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
      100, 100, 100, 100,  50,  50,  50,  50,  50,   1
    ];
    const id = Card.getRandomIndex(weights);
    const texture = Texture.fromImage(PICT[id]);
    let sprite = new Sprite(texture);
    // super(texture);

    sprite.tween = new Tween(this);
    sprite.position.y = -20;
    sprite.anchor.x = .5;
    sprite.anchor.y = 1;
    sprite.pivot.x = .5;
    sprite.pivot.y = .5;
    sprite.interactive = true;
    this.addChild(sprite);

    let rare = '';
    if(id === 29) {
      rare = 'SSR';
    } else if(id >= 24) {
      rare = 'SR';
    } else {
      rare = 'R';
    }
    let rarerityText = new PIXI.Text(rare,
      { font: 'bold italic 60px Arial', fill: '#3e1707', align: 'right', stroke: '#a4410e', strokeThickness: 7 });
    rarerityText.position.x = 20;
    rarerityText.position.y = -80;
    //rarerityText.anchor.x = .5;
    this.addChild(rarerityText);
  }

  static getRandomIndex(weightTable) {
    let totalWeight = 0;
    for(let i=0; i<weightTable.length; i++) {
      totalWeight += weightTable[i];
    }
    let value = Math.floor(Math.random()*totalWeight);
    let result = -1;
    for(let i=0; i<weightTable.length; i++) {
      if(weightTable[i] >= value) {
        result = i;
        break;
      }
      value -= weightTable[i];
    }
    return result;
  }

  startSpin() {
    this.tween.to({rotation: Math.PI*2}, 1000);
    this.tween.start();
    this.tween.onComplete(() => this.rotation = 0);
  }

}
