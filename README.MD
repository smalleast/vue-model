#vue-model
> model for vue.

## props:

```
 props: {
      visible: {
        type: Boolean
      },
      className: {
        type: String
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
import VueModel from 'vue-model';

new Vue({
  el: '#app',
  components: {VueModel},
  methods: {
    _click1(){
      console.log('button');
    }
  },
  render: function (createElement) {
    return createElement('div',[
      createElement(VueModel),
    ])
  }
});

```

+template
```
<template>
  <aside class="dev">
     <button class="button" v-on:click="_click()">show backdrop</button>
     <VueModel ref="vnp" :direction="'bottom'">
       这是测试的数据
       这是测试的数据
       这是测试的数据
       这是测试的数据
       这是测试的数据
       这是测试的数据
       这是测试的数据
     </VueModel>
   </aside>
</template>
```

## resource:
+ http://www.cnblogs.com/Kummy/p/4966937.html
+ https://github.com/steven5538/vue-button
+ https://yarnpkg.com/en/docs/install
