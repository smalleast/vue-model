#vue-model
> model for vue.

## props:

```
 props: {
      className: {
             type: String,
             default: ''
           }
    },
```

## usage:
+ install:
```bash
npm install smalleast/vue-model --save


```

+ code:
```javascript
  import Model from '../components/model.vue'
  export default {
    data() {
      return {};
    },
    props: {},
    created(){
    },
    methods: {
      _click1(){
        this.$refs.model1.open();
      }
    },
    components: {Model}
  };

```

+template
```
<template>
  <aside class="dev">
    <button class="button" v-on:click="_click1()">model middle</button>
    <Model ref="model1">
      <div slot="header">this is title</div>
      <table id="tml" class="table">
        <tr>
          <td>111111</td>
          <td>222222</td>
        </tr>
        <tr>
          <td>111111</td>
          <td>222222</td>
        </tr>
        <tr>
          <td>111111</td>
          <td>222222</td>
        </tr>
      </table>
      <div slot="footer">this is footer</div>
    </Model>

  </aside>
</template>
```

## resource:
+ http://www.cnblogs.com/Kummy/p/4966937.html
+ https://github.com/steven5538/vue-button
+ https://yarnpkg.com/en/docs/install
