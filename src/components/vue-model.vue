<template>
  <aside class="vue-model-container" v-on:click="hide()">
    <div class="vue-model"
         :data-visible="visible"
         v-on:transitionend="_onTransitionEnd()"
    >
      <div class="vue-modal-content">
        <slot name="header"></slot>
        <slot name="main"></slot>
        <slot name="footer"></slot>
        <slot></slot>
      </div>

    </div>
    <VueBackdrop :visible="visible" :className="'zIndex'"></VueBackdrop>
  </aside>
</template>
<script>
  import {VueBackdrop} from 'vue-backdrop'
  export default {
    data() {
      return {
        visible: false,
        hidden: true
      };
    },
    props: {},
    created(){
    },
    methods: {
      show(){
        this.visible = !this.visible;
      },
      hide(){
        this.visible = false;
      },
      _onTransitionEnd(){

      }
    },
    components: {VueBackdrop}
  };
</script>
<style rel="stylesheet/scss" lang="scss">

  .hr {
    position: relative;
    &:after {
      content: '';
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      bottom: auto;
      right: auto;
      background-color: #e4e4e4;
      z-index: 2;
    }
    &-x {
      @extend .hr;
      &:after {
        width: 100%;
        height: 1px;
        transform: scaleY(.5);
      }
    }
    &-y {
      @extend .hr;
      &:after {
        width: 1px;
        height: 100%;
        transform: scaleX(.5);
      }
    }
  }

  .vue-model {
    font-family: -apple-system, SF UI Text, Helvetica Neue, Helvetica, Arial, sans-serif;
    width: 80%;
    top: 38.2%;
    left: 50%;
    position: fixed;
    z-index: 2;
    transform: translate(-50%, 0%) scale(1.185);
    transition: transform 0.2s ease-in-out, opacity 0.22s linear;
    user-select: none;
    opacity: 0.01;
    &[hidden] {
      display: none;
    }
    &-content {
      border-radius: 5px;
      overflow: hidden;
    }

    &[data-visible=true] {
      opacity: 1;
      transform: translate(-50%, 0%) scale(1);
    }

    &[data-theme=tranparent] {
    }
    &[data-theme=ios] {
      > * {
        background-color: rgb(255, 255, 255);
      }
      .react-modal-ft {
        @extend .hr-x;
        .react-modal-button {
          &:active {
            background-color: #ddd;
          }
          + .react-modal-button {
            @extend .hr-y;
          }
        }
      }
    }
    &-hd {
      text-align: center;
      padding: 15px 15px 0 15px;
      font-size: 16px;
    }
    &-bd {
      text-align: center;
      padding: 15px;
      font-size: 14px;
    }
    &-ft {
      height: 44px;
      display: flex;
      justify-content: center;
      font-size: 14px;

    }
    &-button {
      width: 100%;
      height: 44px;
      line-height: 44px;
      text-align: center;
      color: #007aff;
      padding: 0 5px;
      white-space: normal;
      overflow: hidden;
      text-overflow: ellipsis;
      box-sizing: border-box;
    }
  }

</style>

