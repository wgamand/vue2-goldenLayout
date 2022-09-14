import {uniqId} from './utils';
import installDirectives from './directives';
import { mapState } from 'vuex';
export const createCloneYa = (opts = {}) => {
  const name = opts.name || 'VueClone';

  return {
    name,
    data() {
      return {
          renderData: [],
          renderdataMap: []
      }
    },
    mounted() {
      this.add();
    },
    render: function (h) {
      let _this = this;
      let vNodes = _this.$slots.default;

      if (!vNodes) return;

      const deepCloneInject = function (vnodes, createElement) {
        function cloneVNode(vnode) {
          const clonedChildren = vnode.children && vnode.children.map(vnode => cloneVNode(vnode));
          const cloned = createElement(vnode.tag, vnode.data, clonedChildren);

          cloned.text = vnode.text;
          cloned.isComment = vnode.isComment;
          cloned.componentOptions = vnode.componentOptions;
          cloned.elm = vnode.elm;
          cloned.context = vnode.context;
          cloned.ns = vnode.ns;
          cloned.isStatic = vnode.isStatic;
          cloned.key = vnode.key;

          return cloned;
        } 
        return vnodes.map(vnode =>  cloneVNode(vnode));
      };
      return h('div', {
              class : {
                  'clone-wrapper': true
              }
            },
              this.renderdataMap = this.renderData.map((el, index) => {
              let nodes  = deepCloneInject(vNodes, h);
              return h('div', {
                      key: el._hash,
                      class: {
                          'toClone': true
                      }
                  },
                  [
                      nodes
                  ]
              );
          }),
      )
    },
    methods: {
        add(){
          let temp = {_hash: uniqId()};
          this.renderData.push(temp);
          this.$store.dispatch('changeCloneData',this.renderdataMap)
        }
    },
  }
};

export const install = (Vue, opts) => {
    const Component = createCloneYa(opts);
    Vue.component(Component.name, Component);

    installDirectives(Vue);
};

export default install;