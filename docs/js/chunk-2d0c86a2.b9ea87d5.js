(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c86a2"],{"557c":function(t,n,e){"use strict";e.r(n);var o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("vue-golden-layout",{ref:"vueGolden",attrs:{config:t.config,close:t.close},on:{closeItem:t.getCloseItem}})},c=[],s={name:"ConditionalClosing",data:function(){return{close:!0,isClosable:!0}},methods:{getCloseItem:function(t,n){var e,o=this;e=n.config.content[0].content.length<=1?n.config.content[0].content[0].componentName:"",e&&this.config.content[0].content.filter((function(n){n.componentName===e?(o.isClosable=!1,o.$emit("lastI",t)):o.isClosable=!0}))}},computed:{config:function(){return{content:[{type:"row",content:[{type:"component",componentName:"testComponent1"},{type:"component",componentName:"testComponent2",componentState:{text:"测试关闭"}},{type:"component",componentName:"testComponent3",componentState:{text:"测试"},isClosable:this.isClosable}]}]}}}},l=s,i=e("2877"),a=Object(i["a"])(l,o,c,!1,null,null,null);n["default"]=a.exports}}]);