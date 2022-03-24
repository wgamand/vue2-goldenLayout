import { shallowMount } from '@vue/test-utils'
import { render } from '@vue/server-test-utils'

import InsideComponent from '@/InsideComponent'
import VueGoldenLayout from '@/components/VueGoldenLayout' 
import Assembly from '@/InsideComponent/Assembly'
import Other from '@/InsideComponent/Other'


describe('tab组件传值', () => {
  const wrap = shallowMount(InsideComponent)

  it('输入数据为数组', () => {
    expect(wrap.vm.$data.componentName).toStrictEqual(["Assembly","Other"])
  });


  it('调用golden组件', () => {
    expect(wrap.exists()).toBe(true)
    expect(wrap.findComponent({name: 'VueGoldenLayout'}))
  })

  it('传入内部组件', () => {
    expect(wrap.findComponent(Assembly))
    expect(wrap.findComponent(Other))
  })

})

describe('内部组件传值', () => {
  const wrapper = shallowMount(Assembly)
  expect(wrapper.exists()).toBe(true)

  it('组件框架', () => {
    expect(wrapper.find('h2'))
    expect(wrapper.find('div'))
  })
})



describe('golden项目组件实例', () => {
  
  it('golden内部结构', async () => {
    
    const ren = await render(VueGoldenLayout) 
    expect(ren.html()).toContain('')
   
  })

  it('props传值', async () => {
    const str = await render(VueGoldenLayout, {
      propsData: ['config', 'componentName']
    })
    expect(str).not.toBeNull()
  })

  it('slots', async () => {
    const str = await render(VueGoldenLayout, {
      slots: {
        default: ['Other', 'Assembly']
      }
    })
    expect(str.html()).toContain('Other','Assembly')
  })
})
