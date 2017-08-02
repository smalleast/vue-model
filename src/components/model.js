/**
 * Created by dcpai on 2017/8/2.
 */
import Vue from 'vue';

const ModelConstructor = Vue.extend(require('./model.vue'));
let ModelPool = [];


let getAnInstance = () => {
  if (ModelPool.length > 0) {
    let instance = ModelPool[0];
    ModelPool.splice(0, 1);
    return instance;
  }
  return new ModelConstructor({
    el: document.createElement('div')
  });
};

let returnAnInstance = instance => {
  if (instance) {
    ModelPool.push(instance);
  }
};

let removeDom = event => {
  if (event.target.parentNode.parentNode) {
    event.target.parentNode.parentNode.removeChild(event.target.parentNode);
  }
};

ModelConstructor.prototype.close = function () {
  this.visible = false;
  this.$el.addEventListener('transitionend', removeDom);
  this.closed = true;
  returnAnInstance(this);
};

let Model = (options = {}) => {
  let duration = options.duration || 3000;

  let instance = getAnInstance();
  instance.closed = false;
  clearTimeout(instance.timer);
  instance.message = typeof options === 'string' ? options : options.message;
  instance.position = options.position || 'middle';
  instance.className = options.className || '';
  instance.iconClass = options.iconClass || '';

  document.body.appendChild(instance.$el);

  Vue.nextTick(function () {
    instance.visible = true;
    instance.$el.removeEventListener('transitionend', removeDom);
  });
  return instance;
};

export default Model;
