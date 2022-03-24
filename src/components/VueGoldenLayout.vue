<template>
  <div>
    <div class="top">
      <p class="topP">ESSENTIALS&nbsp;::&nbsp;&nbsp;{{ essentials }}</p>

      <div class="btnorp">
        <button v-if="addItem" @click="add()">add Item</button>
        <div v-else-if="reorder">
          <button id="reorder" :disabled="toggle" style="margin-right: 10px">toggleButton</button>
          <button id="restore" :disabled="restore">restore</button>
        </div>
      </div>

      <div class="chooseColor" v-if="extend">
        <div
          id="selectedColor"
          style="display: none; width: 10px; height: 10px; background: pink; float: left; margin: 5px 5px 0 0 "
        ></div>
        <ul id="chooseUl">
          <li style="background: #014FA1"></li>
          <li style="background: #1D84BD"></li>
          <li style="background: #EEEEEE"></li>
          <li style="background: #dba37c"></li>
          <li style="background: #cf4d84"></li>
        </ul>
      </div>
    </div>

    <div class="main" v-show="false">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import GoldenLayout from "golden-layout";
export default {
  // 传入数据配置数据、组件名及内部组件
  props: [
    "config",
    "newItemConfig",
    "addItem",
    "scroll",
    "saving",
    "css",
    "synced",
    "reorder",
    "newElement",
    "extend",
    "close"
  ],
  data() {
    return {
      layout: null,
      oldContent: '',
      arrCom: [],
      arrCount: [],
      savedState: null,
      myLayout: '',
      itemContainer: [],
      toggle: false,
      restore: true,
      essentials: '',
      layoutA: '',
      layoutB: '',
    }
  },
  mounted() {
    this.essentials = this.$route.path.substring(1)
    if (this.config) {
      let layout = this.createLayout(this.config)
      layout.init()
      this.saving ? this.savingState() : ''
    }
    this.showScroll()
    this.syncedLayout()
    this.programmaticReorder(this.newElement, this.config)
  },
  methods: {
    arrConfig(config) {
      let minify = this.minify = GoldenLayout.minifyConfig(config)
      let arrCom = []
      minify.g[0].g.forEach(e => {
        if (e.l == '5') {
          arrCom.push(e.h)
        } else {
          e.g.forEach(com => {
            arrCom.push(com.h)
          })
        }
      })
      this.arrCom = arrCom
      return arrCom
    },
    // 初始化
    createLayout(config) {
      if (!config) return

      let layout = new GoldenLayout(config, document.getElementsByClassName('el-main'));
      let arrCount = []
      let itemContainer = this.itemContainer
      let arrCom = this.arrConfig(config)
 
      //注册    
      arrCom.forEach(element => {
        layout.registerComponent(element, (container, state) => {
          this.$bus.$emit('transmit', container, state)
          itemContainer.push(container)
          return container
        })
      });

      //运行方法
      this.css ? this.configuredCss(layout) : ''
      this.extend ? this.extendingHeader(layout) : ''
      this.close ? this.conditionalClosing(layout) : ''

      this.arrCount = arrCount
      this.layout = layout
      return layout
    },
    // 添加golden项目
    addLayout(myLayout) {
      let newComName = this.newItemConfig.componentName
      let differChar = myLayout._components[newComName]
      let ComFunction = (container, state) => {
        this.$bus.$emit('transmit', container, state)
      }

      if (!differChar) {
        myLayout.registerComponent(newComName, ComFunction);
        myLayout.root.contentItems[0].addChild(this.newItemConfig)
      } else {
        myLayout.root.contentItems[0].addChild(this.newItemConfig)
      }
    },
    add() {
      this.addLayout(this.layout)
    },
    // 滚动条
    showScroll() {
      if (this.scroll) {
        let lm = document.getElementsByClassName('lm_content')
        for (let i = 0; i < lm.length; i++) {
          lm[i].style.overflow = "scroll"
        }
      }
    },
    // 保存状态
    savingState() {
      let savedState = this.savedState = JSON.parse(localStorage.getItem('savedState'))
      let myLayout = this.myLayout = this.layout
      if (savedState !== null) {
        myLayout = new GoldenLayout(savedState, document.getElementsByClassName('el-main'))
        this.layout.destroy()
      }
      
      myLayout.on('stateChanged', () => {
        localStorage.setItem('savedState', JSON.stringify(myLayout.toConfig()))
      })
      
      this.arrCom.forEach(element => {
        myLayout.registerComponent(element, (container, state) => {
          this.$bus.$emit('transmit', container, state)
        })
      })
      myLayout.init()
      this.layout = this.myLayout = myLayout
    },
    // 配置Css类
    configuredCss(myLayout) {
      myLayout.on('itemCreated', (item) => {
        if (item.config.cssClass) {
          item.element.addClass(item.config.cssClass)
        }
      })
    },
    // 同步布局
    syncedLayout() {
      if (!this.synced) return

      document.getElementById('layoutB').style.display = 'block'
      let layout = this.layout
      let _this = this
      let createLayout = function (config, arrCom, con) {
        let syncLayout = new GoldenLayout(config, document.getElementById(con))
        layout.destroy()
         
        let insetFunction = function (container, state,) {
          _this.$nextTick(() => {
            _this.$bus.$emit('transmit', container, state)
          })
        }
        arrCom.forEach(com => {
          syncLayout.registerComponent(com, insetFunction)
        })
        syncLayout.init()
        return syncLayout
      }

      let arrcom = this.arrCom
      let layoutA = this.layoutA = createLayout(this.config, arrcom, 'layoutA')
      let layoutB = this.layoutB = createLayout(this.config, arrcom, 'layoutB')
      layoutA.on('stateChanged', function () {
        layoutB.destroy()
        layoutB = this.layoutB = createLayout(layoutA.toConfig(), arrcom, 'layoutB')
      })
      layoutA.updateSize()
      layoutB.updateSize()
    },
    // 程序化重新排序
    programmaticReorder(element, config) {
      if (!this.reorder) return

      let reorderLayout = this.layout

      let toggleRowColumn = function () {
        if (element.content[0]) {
          element.content.forEach(e => {
            e.content = []
          });
        }
        let oldElement = reorderLayout.root.contentItems[0]
        let newElement = reorderLayout.createContentItem(element)

        let stacks = oldElement.getItemsByType('stack')
        let rows = newElement.getItemsByType('row')
        reorderLayout.root.replaceChild(oldElement, newElement)

        rows[0].addChild(stacks[0])
        rows[0].addChild(stacks[1])
        rows[1].addChild(stacks[2])
        rows[1].addChild(stacks[3])
      }

      let restoreRowColumn = function () {
        let oldElement = reorderLayout.root.contentItems[0]
        config.content[0].content = []
        let newElement = reorderLayout.createContentItem(config)

        let stacks = oldElement.getItemsByType('stack')
        let columns = newElement.getItemsByType('column')

        reorderLayout.root.replaceChild(oldElement, newElement)

        columns[0].addChild(stacks[0])
        columns[0].addChild(stacks[1])
        columns[0].addChild(stacks[2])
        columns[0].addChild(stacks[3])
      }

      let c = function () { return Math.floor(Math.random() * 255).toString(16) }

      for (let i = 0; i < this.arrCom.length; i++) {
        if (this.arrCom[i] === this.itemContainer[i].title) {
          this.itemContainer[i].getElement().html('<h2>toggleRowColumn</h2>')
          if (!this.toggle) {
            this.itemContainer[i].getElement().css('background-color', '#' + c() + c() + c())
          }
        }
      }

      document.getElementById('reorder').onclick = () => {
        toggleRowColumn()
        this.toggle = true
        this.restore = false
      }

      document.getElementById('restore').onclick = () => {
        restoreRowColumn()
        this.restore = true
        this.toggle = false
      }
    },
    // 扩展标题
    extendingHeader(layout) {
      layout.on('stackCreated', (item) => {
        let ul = document.getElementById('chooseUl')
        let li = ul.getElementsByTagName('li')

        let setColor = function (color) {
          let container = item.getActiveContentItem().container

          container.getElement().css('background-color', color)
          container.extendState({ color: color })
        }
        item.on('activeContentItemChanged', function (contentItem) {
          setColor(contentItem.container.getState().color)
        })

        for (let i = 0; i < li.length; i++) {
          li[i].onclick = () => {
            setColor(li[i].style.background)
          }
        }
      })
    },
    //条件关闭
    conditionalClosing(myLayout) {
      if (!this.close) return

      myLayout.on('stackCreated', function (stack) {
        stack.header
          .controlsContainer
          .find('.lm_close')
          .off('click')
          .click(function () {
            if (confirm('really close this?')) {
              stack.remove()
            }
          })
      })

      myLayout.on('tabCreated', function (tab) {
        tab.closeElement
          .off('click')
          .click(function () {
            if (confirm('really close this?')) {
              tab.contentItem.remove()
            }
          })
      })
    }
  },
  destroyed() {
    this.layout.destroy()
    this.myLayout ? this.myLayout.destroy() : ''
    if (this.layoutA) {
      this.layoutA.destroy()
      this.layoutB.destroy()
      document.getElementById('layoutB').style.display = 'none'
    }
  }
};
</script>

<style>
.topP {
  position: absolute;
  top: 0;
  left: 310px;
}

.btnorp,
.chooseColor {
  position: absolute;
  top: 10px;
  left: 678px;
  line-height: 30px;
}

.chooseColor {
  width: 100px;
  padding-top: 10px;
  cursor: pointer;
}

.chooseColor .selectedColor {
  width: 20px;
  height: 20px;
}

.chooseColor ul {
  box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.7);
  display: flex;
}

.chooseColor ul,
.chooseColor ul li {
  margin: 0;
  padding: 0;
  list-style-type: none;
}

.chooseColor ul li {
  width: 20px;
  height: 20px;
  cursor: pointer;
}

.chooseColor ul li:hover {
  border: 1px solid orange;
  width: 18px;
  height: 18px;
}
</style>
