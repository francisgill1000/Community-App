(window.webpackJsonp=window.webpackJsonp||[]).push([[129],{1197:function(t,e,o){var content=o(1276);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(21).default)("5b10a272",content,!0,{sourceMap:!1})},1275:function(t,e,o){"use strict";o(1197)},1276:function(t,e,o){var n=o(20)((function(i){return i[1]}));n.push([t.i,"#pie .apexcharts-legend-series[data-v-9b630e72]{margin:0 50px 2px 0!important}",""]),n.locals={},t.exports=n},1401:function(t,e,o){"use strict";o.r(e);o(57);var n={props:["items"],data:function(){return{totalCount:0,options:{noData:{text:"There's no data",align:"center",verticalAlign:"middle",offsetX:0,offsetY:0},title:{text:"Delivery Man",align:"left",margin:0},colors:["#033F9B","#02B64B","#ffb600","#ff0000","#808080",""],series:[],chart:{toolbar:{show:!1},width:"100%",type:"donut",height:250},customTotalValue:0,plotOptions:{pie:{donut:{labels:{show:!0,name:{show:!0,fontSize:"22px",fontFamily:"Rubik",color:"#dfsda",offsetY:-10},value:{show:!0,fontSize:"16px",fontFamily:"Helvetica, Arial, sans-serif",color:void 0,offsetY:16,formatter:function(t){return t}},total:{show:!0,label:"Total Expecting",color:"#373d3f",formatter:function(t){return t.config.customTotalValue}}}}}},labels:[],dataLabels:{enabled:!0,style:{fontSize:"10px"}},legend:{show:!0,fontSize:"10px"},responsive:[{breakpoint:480,options:{chart:{toolbar:{show:!1}},legend:{position:"bottom"}}}]}}},mounted:function(){var t=this;this.options.labels[0]="Expecting",this.options.series[0]=this.items.ExpectingCount,this.options.labels[1]="Checked-in",this.options.series[1]=this.items.CheckedInCount,this.options.labels[2]="Checked-out",this.options.series[2]=this.items.CheckedOutCount,this.options.labels[3]="Over Stay",this.options.series[3]=this.items.overStayCount,this.options.customTotalValue=this.items.ExpectingCount,setTimeout((function(){try{new ApexCharts(document.querySelector("#visitors"),t.options).render()}catch(t){}}),1e3)},methods:{},created:function(){}},l=(o(1275),o(60)),component=Object(l.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticStyle:{padding:"0px",width:"100%"}},[e("div",{attrs:{id:"visitors",name:"visitors",height:"250",width:"250"}}),t._v(" "),0==t.totalCount?e("div",{staticStyle:{padding:"0px",margin:"auto","text-align":"center","vertical-align":"middle",height:"250px","padding-top":"36%"}},[t._v("\n    No Data available\n  ")]):t._e()])}),[],!1,null,"9b630e72",null);e.default=component.exports}}]);