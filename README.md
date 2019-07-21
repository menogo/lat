# latt

## Project setup

```
yarn install
```

### 开发

```
# 本地开发模式
yarn run serve

# 起Mock服务
yarn run mock

# 热更新开发模式+Mock服务
yarn run dev
```

### 打包

```
# 打包开发环境代码
yarn run build:dev
yarn run build:development

# 打生产包
yarn run build:prod
yarn run build:production

# 打预发布/内测包（如果有内测环境）
yarn run build:stag
yarn run build:staging
```

### Lints and fixes files

```
yarn run lint
```

### 封装

- 基于 Axios 封装了请求 `src/utils/https.js`
- 引入 weui、weui.js
- 所有 API 地址放在 `src/api/index.js`

```js
module.exports = {
    google: '/users/google',
    ------  ---------------
      key         value

    //  强关联： ${key} 的值对应 value 的最后一级，对应 mock/data/${key}.json
    //  例如：
    // facebook: '/product/facebook',
    // login: '/users/login',
    // abcd: 'eecc/abcd'
}
```

## webpack.config.js file in vue-cli-services

```
<projectRoot>/node_modules/@vue/cli-service/webpack.config.js
```

### CORS

如果后端设置了：`Access-Control-Allow-Origin: *`
axios 设置 `withCredentials: true` 会报跨域出错，但是接口还是可以请求成功的！应该设为 `withCredentials: false`

# Vue Resources

- ![awesome-vue](https://github.com/vuejs/awesome-vue)

# UI Framework

## PC

- ![Ant Design of Vue](https://vue.ant.design/docs/vue/introduce-cn/)
- ![Element UI](https://element.eleme.cn/#/zh-CN)
- [iView](https://www.iviewui.com/)

## Mobile

- ![Vux](https://vux.li/)
- ![Vuetify](https://vuetifyjs.com/zh-Hans/)
- ![Framework7](https://framework7.io/vue/)
- ![weui.js](https://github.com/Tencent/weui.js) **不支持按需部分引入，JS 调用非 UI 组件调用方式**
- ![vue-weui](https://github.com/aidenzou/vue-weui)
- ![weui](https://github.com/Tencent/weui) **纯 CSS 组件**
- ![msui](http://m.sui.taobao.org/) **纯 CSS 组件**

## 小程序

- ![iView mpvue](https://iview-mpvue.gitbook.io/iview-mpvue/)
- ![weui-wxss](https://github.com/Tencent/weui-wxss/)

## VUE UI Resource

https://vuejsexamples.com/

## NProgress.js

http://ricostacruz.com/nprogress/

```
    yarn add nprogress --save
```
