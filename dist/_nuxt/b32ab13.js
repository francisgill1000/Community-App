(window.webpackJsonp=window.webpackJsonp||[]).push([[136],{1688:function(t,e,o){"use strict";o.r(e);o(80);var n={props:["items"],data:function(){return{options:{title:{text:"DAILY ATTENDANCE REPORT",align:"left"},colors:["#A24FDD","#6DFCCA","#E78956","#3A95D9"],series:[],chart:{toolbar:{show:!1},type:"donut"},labels:[],dataLabels:{dropShadow:{blur:3,opacity:.8}},responsive:[{breakpoint:480,options:{chart:{toolbar:{show:!1},width:200},legend:{position:"bottom"}}}]}}},created:function(){this.getTitle(),this.getValue()},mounted:function(){new ApexCharts(document.querySelector("#donut"),this.options).render()},methods:{getTitle:function(){this.options.labels=this.items.map((function(t){return t.title}))},getValue:function(){this.options.series=this.items.map((function(t){return t.value}))}}},r=o(116),component=Object(r.a)(n,(function(){return(0,this._self._c)("div",{attrs:{id:"donut"}})}),[],!1,null,null,null);e.default=component.exports}}]);