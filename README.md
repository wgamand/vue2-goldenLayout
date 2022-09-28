# vue2-golden-layout
基于vue2.x  实现 GoldenLayout1.5.9版本的 部分功能

## Installation

```sh
npm i -S vue2-golden-layout
```

### Fast example

```html
<vue-golden-layout mainNode="body"></vue-golden-layout>
```

Note: 默认布局是堆栈

### 示例

```sh
npm install
npm run dev
```

示例在/examples文件夹

## 使用

```javascript
import VueGoldenLayout from 'vue2-golden-layout'
Vue.use(VueGoldenLayout)
```

添加布局基本css及主题，可选light或dark
```javascript
import 'golden-layout/src/css/goldenlayout-base.css'
import 'golden-layout/src/css/goldenlayout-light-theme.css'
```

## 结构
分别有 row、column、stack三种，行\列\堆栈。

### 配置
可以自定义布局

```html
config = {
  content: [  //每个项目（组件除外）都可以有子项，在数组中指定content
    {
      type: "column",
      content: [
        {
          type: "component",
          title: 'example1',  //项目在其选项卡和弹出窗口中显示的标题 （title可不设，默认标题为componentName）
          componentName: "example",  //指定应创建哪个组件。更多关于此的信息
          componentState: { text: "Component 1" }, //可以是任何可序列化的对象，并将传递给组件
        },
        {
          type: "component",
          title: 'example2',
          componentName: "example2",
          componentState: { text: "Component 2" },
        }
      ]
    }
  ]
      }
```

## 利用props 给 <vue-golden-layout></vue-golden-layout> 传递相应的标识使用相应功能
 scroll: 给布局添加滚动条
  saving: 将布局保存在localStorage中
  css: 给布局添加背景颜色
  reorder: 布局重新排序
  newElement: 添加的新布局配置
  spread: 切换布局样式
  mainNode: 布局位置父组件的类名
  close: 关闭布局组件提示





 








