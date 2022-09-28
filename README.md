# vue2-golden-layout
基于vue2.x  实现 GoldenLayout1.5.9版本的 部分功能

## Installation

```sh
npm i -S vue2-golden-layout
```
### 示例

```sh
npm install
npm run dev
```

示例在/examples文件夹

## 使用配置

```javascript
import VueGoldenLayout from 'vue2-golden-layout'
Vue.use(VueGoldenLayout)
```

添加布局基本css及主题，可选light或dark
```javascript
import 'golden-layout/src/css/goldenlayout-base.css'
import 'golden-layout/src/css/goldenlayout-light-theme.css'
```

```html
<vue-golden-layout></vue-golden-layout>
```
默认配置的布局是堆栈

## 布局组件自定义配置
创建布局组件需要配置相应数据，包括布局类型、组件名称等。

### 结构
分别有 row、column、stack三种，行\列\堆栈。

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

### 如需使用其他功能，需使用props 传递相应的标识使用相应功能
 - scroll: 给布局添加滚动条
 - saving: 将布局保存在localStorage中
 - css: 给布局添加背景颜色
 - reorder: 布局重新排序
 - newElement: 添加的新布局配置
 - spread: 切换布局样式
 - mainNode: 布局位置父组件的类名
 - close: 关闭布局组件提示

### 布局组件内容

给布局组件添加DOM作为内容，需要创建存放子组件数据的循环数组

```html
<vue-golden-layout ref="goldenLayout" mainNode="main">
      <div v-for="item in allItems" :key="item.id">
        <span>{{item.address}}</span>
      </div>
</vue-golden-layout>

```

添加新布局组件时，需要配置新布局的组件名及内容，监听add()方法将新的配置项添加至页面。
```javascript

  var newItem = {  //新布局配置
    type: 'component',
    componentName: "componentName",
    componentState: { key: data.id }  //key: 作为匹配循环子组件的id,将子组件放入相应的布局组件内容中
  }
  this.$refs.goldenLayout.add(newItem)

```

自定义关闭布局组件，可用 getCloseItem() 监听自定义事件

```javascript
  getCloseItem(tab, layout) 
  tab: 当前删除的布局组件；
  layout: 整个布局的layout实例化组件；
```


自定义激活指定布局组件项，可用 changeSelectedName() 监听自定义事件。

```javascript
  this.$refs.goldenLayout.changeSelectedName(组件名)
```




 








