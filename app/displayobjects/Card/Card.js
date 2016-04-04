import { Tween } from 'tween.js';
import { Sprite, Texture } from 'pixi.js';
// import BUNNY from './bunny.png';

// この書き方でいいのか？
import PICT0001 from './06_Johann_Strauss_I.png';
import PICT0002 from './13_Mussorgsky.png';
import PICT0003 from './20_Puccini.png';
import PICT0004 from './akutagawa_ryunosuke.png';
import PICT0005 from './aprilfool_bikkuribako.png';
import PICT0006 from './aprilfool_boy.png';
import PICT0007 from './aprilfool_woman.png';
import PICT0008 from './beethoven.png';
import PICT0009 from './benkei.png';
import PICT0010 from './buddha_satori_gedatsu_bodaiju.png';
import PICT0011 from './cleopatra.png';
import PICT0012 from './einstein.png';
import PICT0013 from './gandhi.png';
import PICT0014 from './helen_keller.png';
import PICT0015 from './jean_of_arc.png';
import PICT0016 from './juuryoku_newton.png';
import PICT0017 from './marie_antoinette.png';
import PICT0018 from './nigaoe_Dostoevsky.png';
import PICT0019 from './nigaoe_buddha.png';
import PICT0020 from './nigaoe_godaigo_tennou.png';
import PICT0021 from './nigaoe_kikuchi_kan.png';
import PICT0022 from './nigaoe_macarthur.png';
import PICT0023 from './nigaoe_shikoutei.png';
import PICT0024 from './nigaoe_youkihi.png';
import PICT0025 from './nightingale.png';
import PICT0026 from './onono_komachi.png';
import PICT0027 from './syoutoku_taishi.png';
import PICT0028 from './taketsuru_rita.png';
import PICT0029 from './tokugawa_ieyasu.png';
import PICT0030 from './ushiwakamaru_yoshitsune.png';

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
export default class Card extends Sprite {

  constructor() {
    const id = Math.floor(Math.random()*PICT.length);
    console.log(id);
    const texture = Texture.fromImage(PICT[id]);

    super(texture);

    this.tween = new Tween(this);

    this.anchor.x = .5;
    this.anchor.y = 1;

    this.pivot.x = .5;
    this.pivot.y = .5;

    this.interactive = true;
    this.on('mouseover', this.startSpin.bind(this));
  }

  startSpin() {
    this.tween.to({rotation: Math.PI*2}, 1000);
    this.tween.start();
    this.tween.onComplete(() => this.rotation = 0);
  }

}
