(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{1056:function(t,e,r){var content=r(1104);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(21).default)("a1329736",content,!0,{sourceMap:!1})},1103:function(t,e,r){"use strict";r(1056)},1104:function(t,e,r){var n=r(20)((function(i){return i[1]}));n.push([t.i,".apexcharts-canvas{width:100%}",""]),n.locals={},t.exports=n},1125:function(t,e,r){"use strict";r.r(e);var n=r(117),o=r(539),c=r(116),h=r(336),d=r(211),l=r(10),f=r(888),v=r(538),m=(r(33),r(17)),w=(r(6),r(9),r(69),{props:["name","height","branch_id"],data:function(){return{series:[{name:"Log count",data:[]}],chartOptions:{colors:["#6fd226","#FF0000","#FFB600"],chart:{toolbar:{show:!1},type:"bar",width:"98%"},plotOptions:{bar:{horizontal:!1,columnWidth:"25%",endingShape:"rounded"}},dataLabels:{enabled:!1},stroke:{show:!0,width:2,colors:["transparent"]},xaxis:{categories:[]},yaxis:{title:{text:" "}},fill:{opacity:1},tooltip:{y:{formatter:function(t){return t}}}}}},watch:{branch_id:function(){try{this.$store.commit("dashboard/every_hour_count",null),this.getDataFromApi()}catch(t){}}},created:function(){this.getDataFromApi()},mounted:function(){this.chartOptions.chart.height=this.height,this.chartOptions.series=this.series},methods:{viewLogs:function(){this.$router.push("/attendance_report")},getDataFromApi:function(){var t=this;return Object(m.a)(regeneratorRuntime.mark((function e(){var data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("dashboard/every_hour_count");case 2:data=e.sent,t.renderChart(data);case 4:case"end":return e.stop()}}),e)})))()},renderChart:function(data){var t=this,e=0;data.forEach((function(r){t.chartOptions.series[0].data[e]=parseInt(r.count),t.chartOptions.xaxis.categories[e]=r.hour,e++}));try{new ApexCharts(document.querySelector("#"+this.name),this.chartOptions).render()}catch(t){}}}}),_=(r(1103),r(60)),component=Object(_.a)(w,(function(){var t=this,e=t._self._c;return e("div",{staticStyle:{width:"100%"}},[e(v.a,[e(o.a,{attrs:{md:"10"}},[e("h4",{staticClass:"pl-2"},[t._v("Today Device Logs (in/out)")])]),t._v(" "),e(o.a,{staticClass:"menu-icon-right",attrs:{md:"2"}},[e(f.a,{attrs:{bottom:"",left:""},scopedSlots:t._u([{key:"activator",fn:function(r){var o=r.on,h=r.attrs;return[e(n.a,t._g(t._b({attrs:{"dark-2":"",icon:""}},"v-btn",h,!1),o),[e(c.a,[t._v("mdi-dots-vertical")])],1)]}}])},[t._v(" "),e(h.a,{attrs:{width:"120",dense:""}},[e(d.a,{on:{click:function(e){return t.viewLogs()}}},[e(l.c,{staticStyle:{cursor:"pointer"}},[t._v("\n              View Logs\n            ")])],1)],1)],1)],1)],1),t._v(" "),e("div",{staticStyle:{width:"100%"},attrs:{id:t.name}})],1)}),[],!1,null,null,null);e.default=component.exports}}]);