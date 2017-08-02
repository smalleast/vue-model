/**
 * Created by dcpai on 2017/8/2.
 */
import 'resolution';
import Vue from 'vue'
import Model from '../components/model'
Vue.$model = Vue.prototype.$model = Model;

module.exports = {
  Model
};
