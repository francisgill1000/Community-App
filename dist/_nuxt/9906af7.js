(window.webpackJsonp=window.webpackJsonp||[]).push([[164,92,104],{1172:function(t,e,r){var content=r(1258);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(21).default)("3787a5e1",content,!0,{sourceMap:!1})},1257:function(t,e,r){"use strict";r(1172)},1258:function(t,e,r){var o=r(20)((function(i){return i[1]}));o.push([t.i,".apexcharts-canvas{width:100%}",""]),o.locals={},t.exports=o},1384:function(t,e,r){"use strict";r.r(e);var o=r(539),n=r(538),h=(r(33),r(17)),d=(r(6),r(9),r(69),{props:["name","height","branch_id"],data:function(){return{loading:!1,display_title:"Last 2 weeks  Attendance",date_from:"",date_to:"",series:[{name:"Present",data:[]},{name:"Absent",data:[]},{name:"Missing",data:[]},{name:"WeekOff",data:[]}],chartOptions:{colors:["#14B012","#FF0000","#FFB600","#2196F3"],chart:{toolbar:{show:!1},type:"bar",width:"98%"},plotOptions:{bar:{horizontal:!1,columnWidth:"25%",endingShape:"rounded"}},dataLabels:{enabled:!1},stroke:{show:!0,width:2,colors:["transparent"]},xaxis:{categories:[]},yaxis:{title:{text:" "}},fill:{opacity:1},tooltip:{y:{formatter:function(t){return t}}}}}},watch:{display_title:function(){var t=this;return Object(h.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getDataFromApi();case 2:case"end":return e.stop()}}),e)})))()},branch_id:function(t){var e=this;return Object(h.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.$store.commit("dashboard/setDashboardData",null),t.next=3,e.getDataFromApi();case 3:case"end":return t.stop()}}),t)})))()}},created:function(){var t=this;return Object(h.a)(regeneratorRuntime.mark((function e(){var r,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=new Date,t.$dateFormat.monthStartEnd(r),(o=new Date(r)).setDate(r.getDate()-15),t.date_to=r.toISOString().split("T")[0],t.date_from=o.toISOString().split("T")[0],e.next=8,t.getDataFromApi();case 8:case"end":return e.stop()}}),e)})))()},methods:{filterAttr:function(data){this.date_from=data.from,this.date_to=data.to,this.filterType="Monthly",this.display_title="Attendance : "+this.date_from+" to "+this.date_to,this.$store.commit("dashboard/setDashboardData",null)},getDataFromApi:function(){var t=this;return Object(h.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading=!0,t.$store.dispatch("dashboard/setDates",{date_from:t.date_from,date_to:t.date_to,branch_id:t.branch_id,system_user_id:t.$auth.user.employee.system_user_id}),e.t0=t,e.next=5,t.$store.dispatch("dashboard/states_for_7_days");case 5:e.t1=e.sent,e.t0.renderChart.call(e.t0,e.t1);case 7:case"end":return e.stop()}}),e)})))()},renderChart:function(data){var t=this;try{this.chartOptions.chart.height=this.height,this.chartOptions.series=this.series;var e=0;this.chartOptions.series=[{name:"Present",data:[]},{name:"Absent",data:[]},{name:"Missing",data:[]},{name:"WeekOff",data:[]}],this.chartOptions.xaxis={categories:[]},data.forEach((function(r){t.chartOptions.series[0].data[e]=parseInt(r.presentCount),t.chartOptions.series[1].data[e]=parseInt(r.absentCount),t.chartOptions.series[2].data[e]=parseInt(r.missingCount),t.chartOptions.series[3].data[e]=parseInt(r.offCount),t.chartOptions.xaxis.categories[e]=t.$dateFormat.format2(r.date),e++})),this.loading=!1;try{new ApexCharts(document.querySelector("#"+this.name),this.chartOptions).render()}catch(t){}}catch(t){}}}}),l=(r(1257),r(60)),component=Object(l.a)(d,(function(){var t=this,e=t._self._c;return e("div",{staticStyle:{width:"100%"}},[e(n.a,[e(o.a,{attrs:{md:"6"}},[e("h4",[t._v(t._s(t.display_title))])]),t._v(" "),e(o.a,{attrs:{md:"6"}},[e("CustomFilter",{staticStyle:{float:"right"},attrs:{default_date_from:t.date_from,default_date_to:t.date_to,defaultFilterType:1,height:"35px "},on:{"filter-attr":t.filterAttr}})],1)],1),t._v(" "),t.loading?e("ComonPreloader",{attrs:{icon:"face-scan"}}):t._e(),t._v(" "),e("div",{key:t.display_title,staticStyle:{width:"100%"},attrs:{id:t.name}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{CustomFilter:r(978).default,ComonPreloader:r(925).default})},925:function(t,e,r){"use strict";r.r(e);var o=r(219),n={props:["icon"]},h=r(60),component=Object(h.a)(n,(function(){var t=this._self._c;return t("div",{staticClass:"text-center",staticStyle:{width:"80px",margin:"25% auto"}},[t(o.a,{attrs:{src:"/preloaders/".concat(this.icon,".gif")}})],1)}),[],!1,null,null,null);e.default=component.exports},978:function(t,e,r){"use strict";r.r(e);r(59),r(31),r(273);var o=r(938),n=(r(937),{components:{DatePicker:o.a},props:["defaultFilterType","height","width","default_date_from","default_date_to"],data:function(){return{time3:null,from_date:"",from_menu:!1,to_date:"",to_menu:!1,loading:!1,showTimePanel:!1,filterType:1,search:""}},watch:{filterType:function(){this.showTimePanel=!0,this.FilterData()}},mounted:function(){5==this.filterType&&document.querySelector(".mx-input").focus();var t=document.getElementsByClassName("mx-input");this.height&&""!=this.height&&(t[0].style.height=this.height),this.width&&""!=this.width&&(t[0].style.width=this.width),this.default_date_from&&this.default_date_to&&(this.from_date=this.default_date_from,this.to_date=this.default_date_to),this.time3=[this.from_date,this.to_date]},created:function(){this.defaultFilterType&&(this.filterType=this.defaultFilterType);var t=new Date;this.default_date_from||(this.from_date=t.toISOString().slice(0,10)),this.default_date_to||(this.to_date=t.toISOString().slice(0,10)),this.default_date_from&&this.default_date_to&&(this.from_date=this.default_date_from,this.to_date=this.default_date_to),this.time3=[this.from_date,this.to_date];var data={from:this.from_date,to:this.to_date,type:1,search:"this.search"};this.$emit("filter-attr",data)},methods:{commonMethod:function(){this.from_date&&this.to_date},CustomFilter:function(){if(this.from_date=this.time3[0],this.to_date=this.time3[1],this.from_date&&this.to_date){var data={from:this.from_date,to:this.to_date,type:this.filterType,search:this.search};this.$emit("filter-attr",data)}},FilterData:function(){this.from_date=this.time3[0],this.to_date=this.time3[1];var t=new Date;if(1==this.filterType)this.from_date=t.toISOString().slice(0,10),this.to_date=t.toISOString().slice(0,10);else if(2==this.filterType){var e=new Date;e.setDate(t.getDate()-1),this.from_date=e.toISOString().slice(0,10),this.to_date=e.toISOString().slice(0,10)}else if(3==this.filterType){var r=new Date(t);r.setDate(t.getDate()-t.getDay());var o=new Date(t);o.setDate(t.getDate()-t.getDay()+6),this.from_date=r.toISOString().slice(0,10),this.to_date=o.toISOString().slice(0,10)}else if(4==this.filterType)this.from_date=this.formatDate(new Date(t.getFullYear(),t.getMonth(),1)),this.to_date=this.formatDate(new Date(t.getFullYear(),t.getMonth()+1,0));else if(5==this.filterType)return void(this.time3=[]);if(this.from_date&&this.to_date){var data={from:this.from_date,to:this.to_date,type:this.filterType,search:this.search};this.$emit("filter-attr",data)}},formatDate:function(t){var e=t.getDate(),r=t.getMonth()+1;return t.getFullYear()+"-"+(r<10?"0":"")+r+"-"+(e<10?"0":"")+e}}}),h=r(60),component=Object(h.a)(n,(function(){var t=this;return(0,t._self._c)("date-picker",{attrs:{label:"Date","value-type":"format",format:"YYYY-MM-DD",type:"date",range:""},on:{change:function(e){return t.CustomFilter()}},model:{value:t.time3,callback:function(e){t.time3=e},expression:"time3"}})}),[],!1,null,null,null);e.default=component.exports}}]);