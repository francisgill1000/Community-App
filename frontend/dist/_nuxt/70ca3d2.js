(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{1178:function(t,r,e){var content=e(1254);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(22).default)("2c15df69",content,!0,{sourceMap:!1})},1253:function(t,r,e){"use strict";e(1178)},1254:function(t,r,e){var n=e(21)((function(i){return i[1]}));n.push([t.i,".apexcharts-canvas{width:100%}",""]),n.locals={},t.exports=n},1389:function(t,r,e){"use strict";e.r(r);var n=e(516),o=e(515),c=(e(37),e(23)),h=(e(6),e(11),e(88),{props:["name","height","branch_id"],data:function(){return{series:[{name:"In",data:[]},{name:"Out",data:[]}],chartOptions:{colors:["#14B012","#FF0000","#FFB600"],chart:{toolbar:{show:!1},type:"bar",width:"98%"},plotOptions:{bar:{horizontal:!1,columnWidth:"25%",endingShape:"rounded"}},dataLabels:{enabled:!1},stroke:{show:!0,width:2,colors:["transparent"]},xaxis:{categories:[]},yaxis:{title:{text:" "}},fill:{opacity:1},tooltip:{y:{formatter:function(t){return t}}}}}},watch:{branch_id:function(){try{this.$store.commit("dashboard/every_hour_count",null),this.getDataFromApi()}catch(t){}}},created:function(){this.getDataFromApi()},mounted:function(){this.chartOptions.chart.height=this.height,this.chartOptions.series=this.series},methods:{viewLogs:function(){this.$router.push("/visitor_logs")},getDataFromApi:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function r(){var data;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t.$store.dispatch("dashboard/setDates",{user_type:"contractor"}),r.next=3,t.$store.dispatch("dashboard/contractor_every_hour_count");case 3:data=r.sent,t.renderChart(data);case 5:case"end":return r.stop()}}),r)})))()},renderChart:function(data){var t=this,r=0;data.forEach((function(e){t.chartOptions.series[0].data[r]=parseInt(e.in_count),t.chartOptions.series[1].data[r]=parseInt(e.out_count),t.chartOptions.xaxis.categories[r]=e.hour,r++}));try{new ApexCharts(document.querySelector("#"+this.name),this.chartOptions).render()}catch(t){}}}}),d=(e(1253),e(116)),component=Object(d.a)(h,(function(){var t=this,r=t._self._c;return r("div",{staticStyle:{width:"100%"}},[r(o.a,[r(n.a,{attrs:{md:"10"}},[r("h4",{staticClass:"pl-2"},[t._v("Today Access Logs - Hourly(in/out)")])]),t._v(" "),r(n.a,{staticClass:"menu-icon-right",attrs:{md:"2"}})],1),t._v(" "),r("div",{staticStyle:{width:"100%"},attrs:{id:t.name}})],1)}),[],!1,null,null,null);r.default=component.exports}}]);