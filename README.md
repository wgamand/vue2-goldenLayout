# golden-vue

## Project setup
```
npm install 
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Execution coverage test rate
```
npm run test:coverage
```


基于vue 与 原生js 实现 GoldenLayout 部分功能

使用：引入assets中的文件, 注册插件后直接使用<vue-golden-layout>标签，传入相应标识与配置项即可实现相关功能。

      需要传容器内组件，需在配置项的componentState的text写入相应组件名称, <vue-golden-layout>并写入内</vue-golden-layout>。
      内部组件注册需：需要事件总线 transmit 添加组件
      mounted() {
        this.transmit()
      },
      methods: {
        transmit() {
          this.$bus.$on('transmit', (container, state) => {
            if(!this.$refs.组件的根元素标签 || state.text !== '组件名') return
  
            let copyNode = this.$refs.组件的根元素标签.cloneNode(true)
            container.getElement().append(copyNode)
            container.getElement().append(this.$refs.组件的根元素标签)
          })
        }
      }

      配置项： 
      config: {
        content : [
          {
            type: '项目的类型',
            content: [
              {
                type: 'component',
                title: '显示在其选项卡和弹出窗口上的项目标题',
                componentName: '组件名称',   注：如果类型是" component "，则为必填项
                componentState: { text: '传入的内部组件名称'}  注：一个可序列化的对象
              }
            ]
          }
        ]
      }

示例: 可依照examples内的文件查看编写


    config: {                  配置项【必传】 具体要求可看http://golden-layout.com官网
      required: true,
    },
    newItemConfig: {           添加新项的配置
      required: false,
    },
    addItem: {                 添加项标识
      required: false,
    },
    scroll: {                  滚动效果标识
      required: false,
    },
    saving: {                  保存状态标识
      required: false,
    },
    css: {                     配置Css类标识
      required: false,
    },
    synced: {                  同步布局标识
      required: false,
    },
    reorder: {                 程序化重新排序标识
      required: false,
    },
    newElement: {              程序化重新排序配置
      required: false,
    },
    extend: {                  扩展标题标识
      required: false,
    },
    close: {                   条件关闭标识
      required: false,
    },
    mainNode: {                创建布局时的挂载点
      required: false,
    },
    showTop: {                 顶部按钮与路由名
      required: false,
    },
  },