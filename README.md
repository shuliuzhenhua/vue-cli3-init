# shop

## 插件

- vw 手机端自适应
- .prettierrc 文件 eslint格式化
- .editorconfig 文件 编辑器编码规范
- stylus 自动引入

## axios 

- 注意 .env.* 的配置 这是 axios 请求的地址
- axios 文件地址 /src/utils/http.js 这个文件需要认真看下哦。
- 使用了 mockjs 拦截模拟了接口数据

 
```
├── README.md
├── babel.config.js 配置了 vant 的按需引入
├── package.json
├── postcss.config.js
├── public
│   ├── favicon.ico
│   └── index.html
├── src
│   ├── App.vue
│   ├── assets
│   │   └── styles 样式
│   ├── main.js 示例中导入了 mock js 记得处理下
│   ├── mock 模拟数据
│   │   ├── detail.js
│   │   ├── index.js mock 入口
│   │   ├── login.js
│   │   ├── mall.js
│   │   └── url.js BaseUrl 配置
│   ├── plugin 简单编写的插件
│   │   ├── demo.vue 
│   │   └── index.js
│   ├── router.js
│   ├── store.js
│   ├── utils
│   │   └── http.js axios 重要！
│   └── views
│       ├── Demo.vue axios 示例
│       └── Home.vue
├── vue.config.js
└── yarn.lock

```
