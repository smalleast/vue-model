<template>
  <transition-group name="mint-model-pop">
    <div key="1" class="mint-model mint-model-center" v-show="visible" v-on:click="hide()">
      <span class="mint-model-text">{{ message }}</span>
    </div>
      <VueBackdrop :visible="visible" :className="'zIndex'" key="2"></VueBackdrop>
  </transition-group>
</template>
<script type="text/babel">
  import VueBackdrop from 'vue-backdrop'
  export default {
    props: {
      message: String,
      className: {
        type: String,
        default: ''
      },
      position: {
        type: String,
        default: 'middle'
      },
      iconClass: {
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
      hide(){
        this.close();
      }
    },
    computed: {
      customClass() {
        let classes = [];
        switch (this.position) {
          case 'top':
            classes.push('placetop');
            break;
          case 'bottom':
            classes.push('placebottom');
            break;
          default:
            classes.push('placemiddle');
        }
        classes.push(this.className);

        return classes.join(' ');
      }
    },
    components: {
      VueBackdrop
    }
  };
</script>
<style rel="stylesheet/scss" lang="scss">
  .mint {
    &-model {
      padding: 50px;
      display: block;
      position: fixed;
      max-width: 80%;
      border-radius: .1rem;
      background: rgba(0, 0, 0, 0.7);
      color: #fff;
      box-sizing: border-box;
      text-align: center;
      z-index: 10;
      transition: opacity .3s linear;
      font-size: 0;
      &-icon {
        text-align: center;
      }

      &-text {
        font-size: .24rem;
        display: block;
        text-align: center;
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
