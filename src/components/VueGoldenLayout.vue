<template>
  <div v-show="false">
    <slot></slot>
  </div>
</template>

<script>
import GoldenLayout from "golden-layout";
export default {
  name: "VueGoldenLayout",
  // 传入数据配置数据、组件名及内部组件
  props: {
    config: {
      required: false,
      default: function () {
        return {
        settings: {
          selectionEnabled: true,
          showMaximiseIcon: false,
          showPopoutIcon: false,
          showCloseIcon: false,
        },
        content: [
          {
            type: 'row',
            isClosable: false,
            content: [
              {
                type: 'component',
                componentName: '文件路径：-',
                isClosable: false,
              },
            ],
          },
        ],
      }
      }
    },
    scroll: {
      required: false,
    },
    saving: {
      required: false,
    },
    css: {
      required: false,
    },
    synced: {
      required: false,
    },
    reorder: {
      required: false,
    },
    newElement: {
      required: false,
    },
    spread: {
      required: false,
    },
    mainNode: {
      required: false,
      default: "el-main"
    },
    handlePopIcon: {
      required: false,
    },
    close: {
      required: false,
    }
  },
  data() {
    return {
      layout: null,
      arrCom: [],
      savedState: null,
      myLayout: "",
      itemContainer: [],
      layoutA: "",
      layoutB: "",
      nodeBody: "",
      closeStackText: "",
      closeTabText: "",
      selectedName: "",
    };
  },
  mounted() {
    if (this.config) {
      this.createLayout(this.config);
      this.saving ? this.savingState() : "";
    }
    this.showScroll();
    this.syncedLayout();
    this.programmaticReorder(this.newElement, this.config);
  },
  methods: {
    // 返回组件名
    arrConfig(config) {
      let minify = (this.minify = GoldenLayout.minifyConfig(config));
      let arrCom = [];
      minify.g[0].g.forEach((e) => {
        if (e.l == "5") {
          arrCom.push(e.h);
        } else {
          e.g.forEach((com) => {
            arrCom.push(com.h);
          });
        }
      });
      this.arrCom = arrCom;
      return arrCom;
    },
    // 插槽传递内部组件
    transferItemCom(container, state) {
      if (this.$slots.default) {
        let slots = this.$slots.default;
        for (let e of slots) {
          if (e.key === state.key) {
            container.getElement().append(e.elm);
          }
        }
      } else {
        container.getElement().append(state.text);
      }
    },
    // 创建布局组件实例
    createComInstance(config) {
      let node = this.mainNode;
      let nodeBody = (this.nodebody = node
        ? document.getElementsByClassName([node])
        : "");
      let layout = nodeBody
        ? new GoldenLayout(config, nodeBody)
        : new GoldenLayout(config);
        this.layout = layout;
      return layout;
    },
    // 创建新布局
    createLayout(config) {
      if (!config) return;

      let layout = this.createComInstance(config);
      let itemContainer = this.itemContainer;
      let arrCom = this.arrConfig(config);
      // 注册组件
      let sameComName = Array.from(new Set(arrCom));
      if (sameComName.length <= 1) {
        layout.registerComponent(sameComName[0], (container, state) => {
          this.transferItemCom(container, state);
          itemContainer.push(container);
        });
      } else {
        for (let ele of arrCom) {
          layout.registerComponent(ele, (container, state) => {
            this.transferItemCom(container, state);
            itemContainer.push(container);
          });
        }
      }
      layout.on("stackCreated", function (stack) {
        stack.header.controlsContainer.prepend(this.handlePopIcon);
      });

      //运行方法
      this.css ? this.configuredCss(layout) : "";
      this.spread ? this.extendingHeader(layout) : "";
      this.close ? this.conditionalClosing(layout) : '';

      let onresize = function () {
        layout.updateSize();
      };
      window.addEventListener("resize", onresize);

      this.layout = layout;
      layout.init();
      return layout;
    },
    // 改变选择项组件
    changeSelectedName(name) {
      this.selectedName = name;
      this.changeItemSelected(name);
    },
    changeItemSelected(name) {
      let com = this.layout.root.contentItems[0];
      let contentItems = com.contentItems;

      for (let i = 0; i < contentItems.length; i++) {
        if (contentItems[i].isComponent) {
          if (contentItems[i].componentName === name) {
            com.setActiveContentItem(contentItems[i]);
          }
        }

        if (
          contentItems[i].isStack &&
          contentItems[i].contentItems.length > 1
        ) {
          let conItem = contentItems[i].contentItems;
          for (let j = 0; j < conItem.length; j++) {
            if (conItem[j].componentName === name) {
              contentItems[i].setActiveContentItem(conItem[j]);
            }
          }
        }
      }
    },
    // 添加golden项目
    addLayout(addLayout, newItem, delName) {
      let newComName = newItem.componentName;
      let differChar = addLayout._components[newComName];

      if (!differChar) {
   
        addLayout.registerComponent(newComName, (container, state) => {
          this.transferItemCom(container, state);
        });
        if(!addLayout.root.contentItems.length) {

        }
        addLayout.root.contentItems[0].addChild(newItem);
      } else {
        addLayout.root.contentItems[0].addChild(newItem);
      }

      if (delName = '文件路径：-') {
        let filterFunction = (item) => item.componentName === delName;
        let stacks = addLayout.root.contentItems[0].getItemsByType("stack");
        if (stacks.length) {
          for (let e of stacks) {
            let item = e.getItemsByFilter(filterFunction);
            if (item.length) {
              e.removeChild(item[0]);
            }
          }
        }else {
          let item = addLayout.root.contentItems[0].getItemsByFilter(filterFunction)
          if(item.length) {
            addLayout.root.contentItems[0].removeChild(item[0])
          }
        }
      }
    },
    add(newItem, delName) {
      this.addLayout(this.layout, newItem, delName);
    },
    // 滚动条
    showScroll() {
      if (!this.scroll) return;
      let lm = document.getElementsByClassName("lm_content");
      for (let i = 0; i < lm.length; i++) {
        lm[i].style.overflow = "scroll";
      }
    },
    // 保存状态
    savingState() {
      let savedState = (this.savedState = JSON.parse(
        localStorage.getItem("savedState")
      ));
      let myLayout = (this.myLayout = this.layout);
      if (savedState !== null) {
        myLayout = this.nodebody
          ? new GoldenLayout(savedState, this.nodebody)
          : new GoldenLayout(savedState);
        this.layout.destroy();
      }

      myLayout.on("stateChanged", () => {
        localStorage.setItem("savedState", JSON.stringify(myLayout.toConfig()));
      });

      for (let ele of this.arrCom) {
        myLayout.registerComponent(ele, (container, state) => {
          this.transferItemCom(container, state);
        });
      }
      myLayout.init();
      this.layout = this.myLayout = myLayout;
    },
    // 配置Css类
    configuredCss(myLayout) {
      myLayout.on("itemCreated", (item) => {
        if (item.config.cssClass) {
          item.element.addClass(item.config.cssClass);
        }
      });
    },
    // 同步布局
    syncedLayout() {
      if (!this.synced) return;

      document.getElementById("layoutB").style.display = "block";
      let layout = this.layout;
      let _this = this;
      let createLayout = function (config, arrCom, con) {
        let syncLayout = new GoldenLayout(config, document.getElementById(con));
        layout.destroy();

        for (let ele of arrCom) {
          syncLayout.registerComponent(ele, (container, state) => {
            _this.transferItemCom(container, state);
          });
        }
        syncLayout.init();
        return syncLayout;
      };

      let arrcom = this.arrCom;
      let layoutA = (this.layoutA = createLayout(
        this.config,
        arrcom,
        "layoutA"
      ));
      let layoutB = (this.layoutB = createLayout(
        this.config,
        arrcom,
        "layoutB"
      ));
      layoutA.on("stateChanged", function () {
        layoutB.destroy();
        layoutB = this.layoutB = createLayout(
          layoutA.toConfig(),
          arrcom,
          "layoutB"
        );
      });
      layoutA.updateSize();
      layoutB.updateSize();
    },
    // 程序化重新排序
    programmaticReorder(element, config) {
      if (!this.reorder) return;

      let reorderLayout = this.layout;

      let toggleRowColumn = function () {
        if (element.content[0]) {
          element.content.forEach((e) => {
            e.content = [];
          });
        }
        let oldElement = reorderLayout.root.contentItems[0];
        let newElement = reorderLayout.createContentItem(element);

        let stacks = oldElement.getItemsByType("stack");
        let rows = newElement.getItemsByType("row");
        reorderLayout.root.replaceChild(oldElement, newElement);

        rows[0].addChild(stacks[0]);
        rows[0].addChild(stacks[1]);
        rows[1].addChild(stacks[2]);
        rows[1].addChild(stacks[3]);
      };

      let restoreRowColumn = function () {
        let oldElement = reorderLayout.root.contentItems[0];
        config.content[0].content = [];
        let newElement = reorderLayout.createContentItem(config);

        let stacks = oldElement.getItemsByType("stack");
        let columns = newElement.getItemsByType("column");

        reorderLayout.root.replaceChild(oldElement, newElement);

        columns[0].addChild(stacks[0]);
        columns[0].addChild(stacks[1]);
        columns[0].addChild(stacks[2]);
        columns[0].addChild(stacks[3]);
      };

      let c = function () {
        return Math.floor(Math.random() * 255).toString(16);
      };

      for (let i = 0; i < this.arrCom.length; i++) {
        if (this.arrCom[i] === this.itemContainer[i].title) {
          this.itemContainer[i].getElement().html("<h2>toggleRowColumn</h2>");
          if (!this.toggle) {
            this.itemContainer[i]
              .getElement()
              .css("background-color", "#" + c() + c() + c());
          }
        }
      }

      this.$bus.$on("proReorder", (type) => {
        if (type === "toggle") {
          toggleRowColumn();
        } else {
          restoreRowColumn();
        }
      });
    },
    // 扩展标题
    extendingHeader(layout) {
      layout.on("stackCreated", (item) => {
        let ul = document.getElementById("chooseUl");
        let li = ul.getElementsByTagName("li");

        let setColor = function (color) {
          let container = item.getActiveContentItem().container;

          container.getElement().css("background-color", color);
          container.extendState({ color: color });
        };
        item.on("activeContentItemChanged", function (contentItem) {
          setColor(contentItem.container.getState().color);
        });

        for (let i = 0; i < li.length; i++) {
          li[i].onclick = () => {
            setColor(li[i].style.background);
          };
        }
      });
    },
    //条件关闭
    conditionalClosing(myLayout) {
      let { closeStackText, closeTabText } = this;
      let _this = this;
      myLayout.on("stackCreated", function (stack) {
        stack.header.controlsContainer
          .find(".lm_close")
          .off("click")
          .click(function () {
            if (confirm(closeStackText ? closeStackText : "确定关闭吗？")) {
              stack.remove();
            }
          });
      });

      myLayout.on("tabCreated", function (tab) {
        tab.closeElement.off("click").click(function () {
          if (
            confirm(
              closeTabText
                ? closeTabText
                : `确定关闭${tab.contentItem.componentName}吗？`
            )
          ) {
            _this.$emit("closeItem", tab, myLayout);
            tab.contentItem.remove();
          }
        });
      });
    },
  },
  destroyed() {
    this.layout.destroy();
    this.myLayout ? this.myLayout.destroy() : "";
    // localStorage.removeItem("savedState");
    if (this.layoutA) {
      this.layoutA.destroy();
      this.layoutB.destroy();
      document.getElementById("layoutB").style.display = "none";
    }
    this.$bus.$off("proReorder");
  },
};

</script>

<style>
</style>

