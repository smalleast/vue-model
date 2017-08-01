<template>
  <aside class="vue-model-container" :data-hidden="hasHidden" v-on:click="hide()">
    <div class="vue-model"
         :data-visible="visible"
         v-on:transitionend="_onTransitionEnd()"
    >
      <div class="vue-model-content">
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
        hasHidden: true
      };
    },
    props: {},
    created(){
    },
    methods: {
      show(){
        this.hasHidden = false;
        setTimeout(() => {
          this.visible = !this.visible;
        }, 100);
      },
      hide(){
        this.visible = false;
        setTimeout(() => {
          this.hasHidden = true;
        }, 100);
      },
      _onTransitionEnd(){

      }
    },
    components: {VueBackdrop}
  };
</script>
<style rel="stylesheet/scss" lang="scss">



  .vue-model {
    font-family: -apple-system, SF UI Text, Helvetica Neue, Helvetica, Arial, sans-serif;
    width: 100%;
    top: 38.2%;
    left: 50%;
    position: fixed;
    z-index: 2;
    transform: translate(-50%, 0%) scale(1.185);
    transition: transform 0.2s ease-in-out, opacity 0.22s linear;
    user-select: none;
    opacity: 0.01;
    &-container {
      .vue-model {
        left: 50%;
      }
      &[data-hidden=true] {
        .vue-model {
          left: -50%;
        }
      }
    }
    &[hidden] {
      display: none;
    }
    &-content {
      border-radius: 5px;
      overflow: hidden;
      text-align: center;
    }

    &[data-visible=true] {
      opacity: 1;
      transform: translate(-50%, 0%) scale(1);
    }
  }

</style>

