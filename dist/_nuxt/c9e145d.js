(window.webpackJsonp=window.webpackJsonp||[]).push([[209],{1050:function(e,l,t){"use strict";t.r(l);var n=t(520),d={props:["label","default_value"],auth:!1,layout:"login",data:function(){return{selectedDays:["Mon"],week_days:[{label:"Mon",value:"Mon"},{label:"Tue",value:"Tue"},{label:"Wed",value:"Wed"},{label:"Thu",value:"Thu"},{label:"Fri",value:"Fri"},{label:"Sat",value:"Sat"},{label:"Sun",value:"Sun"}]}},created:function(){this.selectedDays=this.default_value},methods:{setWeekdays:function(){this.$emit("selectedDays",this.selectedDays)}}},c=t(116),component=Object(c.a)(d,(function(){var e=this,l=e._self._c;return l("div",[l("div",[e._v(e._s(e.label))]),e._v(" "),e._l(e.week_days,(function(t,d){return l(n.a,{key:d,staticClass:"mr-5",staticStyle:{float:"left"},attrs:{dense:"",label:t.label,value:t.value,"hide-details":""},on:{click:e.setWeekdays},model:{value:e.selectedDays,callback:function(l){e.selectedDays=l},expression:"selectedDays"}})}))],2)}),[],!1,null,null,null);l.default=component.exports}}]);