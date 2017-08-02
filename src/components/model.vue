<template>
  <transition-group name="mint-model-pop">
    <div key="1" class="mint-model mint-model-center" v-show="visible" v-on:click="hide()">
      <div class="mint-model-header">
        <slot name="header"></slot>
      </div>
      <div class="mint-model-body">
        <slot name="body"></slot>
        <slot></slot>
      </div>
      <div class="mint-model-footer">
        <slot name="footer"></slot>
      </div>
    </div>
    <div key="2" v-on:click="hide()">
      <VueBackdrop :visible="visible"></VueBackdrop>
    </div>
  </transition-group>
</template>
<script type="text/babel">
  import VueBackdrop from 'vue-backdrop'
  export default {
    props: {
      className: {
        type: String,
        default: ''
      }
    },
    data() {
      return {
        visible: false
      };
    },
    methods: {
      open(){
        this.visible = true;
      },
      hide(){
        this.visible = false;
      }
    },
    computed: {
    },
    components: {
      VueBackdrop
    }
  };
</script>
<style rel="stylesheet/scss" lang="scss">
  .mint {
    &-model {
      display: block;
      position: fixed;
      border-radius: .1rem;
      background: #fff;
      color: #333;
      box-sizing: border-box;
      text-align: center;
      z-index: 10;
      transition: opacity .3s linear;
      font-size: 0;
      padding: .2rem;

      &-header, &-body, &-footer {
        font-size: .24rem;
        display: block;
        text-align: center;
        line-height: .48rem;
      }
      &-pop-enter, &-pop-leave-active {
        opacity: 0;
      }
      &-center {
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        -webkit-transform: translate(-50%, -50%);
      }
    }
  }
</style>
