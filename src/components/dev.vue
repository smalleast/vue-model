<template>
  <aside class="dev">
    <button class="button" v-on:click="_click()">show backdrop</button>
    <VueModel ref="vnp" >
      <div slot="main">
        这是测试的数据
        这是测试的数据
        这是测试的数据
        这是测试的数据
        这是测试的数据
        这是测试的数据
        这是测试的数据
      </div>
    </VueModel>
  </aside>
</template>
<script>
  import VueModel from './vue-model.vue'
  export default {
    data() {
      return {
        visible: false
      };
    },
    props: {},
    created(){
    },
    methods: {
      _click(){
        this.$refs.vnp.show();
      }
    },
    components: {VueModel}
  };
</script>
<style rel="stylesheet/scss" lang="scss">
  .dev {
    text-align: center;
  }

  .button {
    width: 90%;
    height: 50px;
    line-height: 50px;
    background: #af6430;
    text-align: center;
    border-radius: 5px;
    border: 1px solid #fff;
    margin: 10px auto;
    font-size: 18px;
    color: #fff;
  }
</style>

