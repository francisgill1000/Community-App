(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{1717:function(t,e,o){"use strict";o.r(e);var n=o(538),r=o(2),d={data:function(){return{days:[],options:{series:[{name:"Today Summary",type:"column",data:[]},{name:"Today Presents",type:"column",data:[]},{name:"Today Absent",type:"column",data:[]},{name:"Today Missing",type:"column",data:[]}],chart:Object(r.a)({toolbar:{show:!1},height:350,type:"line",stacked:!1},"toolbar",{show:!1}),dataLabels:{enabled:!1},stroke:{width:[1,1,1]},title:{text:"MONTHLY ATTENDANCE REPORT",align:"left",offsetX:110},xaxis:{categories:[]},tooltip:{fixed:{enabled:!0,position:"topLeft",offsetY:30,offsetX:60}},legend:{horizontalAlign:"left",offsetX:40}}}},mounted:function(){this.getDaysInCurrentMonth;try{new ApexCharts(document.querySelector("#comboChart"),this.options).render()}catch(t){}},computed:{getDaysInCurrentMonth:function(){for(var t=new Date,e=new Date(t.getFullYear(),t.getMonth()+1,0).getDate(),i=1;i<=e;i++);for(var o=1;o<=e;o++)this.options.series[0].data.push(Math.floor(20*Math.random())),this.options.series[1].data.push(Math.floor(20*Math.random())),this.options.series[2].data.push(Math.floor(20*Math.random())),this.options.series[3].data.push(Math.floor(20*Math.random()))}},methods:{}},h=o(60),component=Object(h.a)(d,(function(){var t=this._self._c;return t("div",[t(n.a,[t("div",{staticClass:"p-2",attrs:{id:"comboChart"}})])],1)}),[],!1,null,null,null);e.default=component.exports}}]);