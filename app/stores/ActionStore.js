import EventEmitter from 'events';
import { ACTION } from '../constants/AppConstants';

/**
 * Action Store
 *
 * Manages a few aspects of the animation loop and provides callbacks
 * for things such as Tween.js
 *
 * @data
 * 	tick : number of times render has been called
 * 	startTime : float ms of animation time start
 * 	currentTime : current float ms
 */
class ActionStore extends EventEmitter {

  constructor(...args) {
    super(...args);

    this.data = {
      tick: 0,
      startTime: 0,
      currentTime: 0
    };

    this.data.startTime = window.performance.now();
    this.data.currentTime = window.performance.now();

    this.setMaxListeners(1000); // a lot of objects might need updating
  }

  get(key) {
    return this.data[key];
  }

  set(key, value) {
    return this.data[key] = value;
  }

  emitChange() {
    this.data.tick++;
    this.data.currentTime = window.performance.now();
    this.emit(ACTION, this.data);
  }

  addActionListener(callback) {
    this.on(ACTION, callback, this.data);
  }
}

export default new ActionStore();
