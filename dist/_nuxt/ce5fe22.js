(window.webpackJsonp=window.webpackJsonp||[]).push([[237],{1071:function(e,n,t){"use strict";t.r(n);var d=t(920),l={props:["label","default_value"],auth:!1,layout:"login",data:function(){return{weekend:0,items:[{id:0,name:"Not Applicable"},{id:1,name:"1 Day"},{id:2,name:"2 Days"},{id:3,name:"3 days"},{id:4,name:"4 days"},{id:5,name:"5 days"},{id:6,name:"6 days"},{id:7,name:"7 days"},{id:8,name:"8 days"},{id:9,name:"9 days"},{id:10,name:"10 days"}]}},created:function(){this.weekend=parseInt(this.default_value)},methods:{setMonthlyHolidays:function(){this.$emit("selectedMonthlyHolidays",this.weekend)}}},o=t(60),component=Object(o.a)(l,(function(){var e=this;return(0,e._self._c)(d.a,{attrs:{label:e.label,items:e.items,"item-value":"id","item-text":"name",dense:"",outlined:"","hide-details":!0},on:{change:e.setMonthlyHolidays},model:{value:e.weekend,callback:function(n){e.weekend=n},expression:"weekend"}})}),[],!1,null,null,null);n.default=component.exports}}]);