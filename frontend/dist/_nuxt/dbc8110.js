(window.webpackJsonp=window.webpackJsonp||[]).push([[348,100],{1290:function(t,e,r){var content=r(1477);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(22).default)("a667dfce",content,!0,{sourceMap:!1})},1476:function(t,e,r){"use strict";r(1290)},1477:function(t,e,r){var n=r(21)((function(i){return i[1]}));n.push([t.i,"table[data-v-6db5e5a8]{border-collapse:collapse;overflow:auto;width:100%}th[data-v-6db5e5a8]{font-size:13px;font-weight:300}th[data-v-6db5e5a8]:nth-child(2n){font-weight:700}td[data-v-6db5e5a8],th[data-v-6db5e5a8]{border:1px solid #ddd;text-align:center}th[data-v-6db5e5a8]{background-color:#f2f2f2}.un-selected[data-v-6db5e5a8]{background-color:red;border-right:1px solid #ec6060}.selected[data-v-6db5e5a8]{border-right:1px solid green}.selected[data-v-6db5e5a8],.selected-cell[data-v-6db5e5a8]{background-color:green}",""]),n.locals={},t.exports=n},1652:function(t,e,r){"use strict";r.r(e);var n=r(114),o=r(133),c=r(87),d=r(518),l=r(875),f=r(350),h=r(147),_=r(517),m=r(892),v=r(349),S=(r(35),r(6),r(914),r(45),r(915),r(916),r(917),r(918),r(919),r(920),r(921),r(922),r(923),r(924),r(925),r(926),r(927),r(928),r(929),r(930),r(50),r(56),r(62),r(521),r(72),r(11),r(216),{data:function(){return{dialog_time_start:"",dialog_time_end:"",dialogManualInput:!1,seasons:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24],span_time_minutes:30,days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],timeSlots:this.generateTimeSlots(24),selectedCells:new Set,array:[],date_from:"",date_to:"",filterType:"",day_index:""}},mounted:function(){},created:function(){var t=new Date;this.date_from=t.toISOString().slice(0,10),this.date_to=t.toISOString().slice(0,10),this.getDataFromApi()},methods:{manualINputSettings:function(t){this.day_index=t,this.dialogManualInput=!0},filterAttr:function(data){this.date_from=data.from,this.date_to=data.to,this.getDataFromApi()},updateSettings:function(){var t=Array.from(this.selectedCells),e=JSON.stringify(t),r=this.$route.params.id,n={params:{per_page:1e3,company_id:this.$auth.user.company_id,selected_matrix:e,input_days:this.days,input_time_slots:this.timeSlots,date_from:this.date_from,date_to:this.date_to,span_time_minutes:this.span_time_minutes}};this.$axios.post("/devices_active_settings/".concat(r),n.params).then((function(t){t.data}))},updateSettings1:function(){var t=[];t.push({day:"Monday",schedule:[{time_open:"10:00",time_close:"10:30"},{time_open:"10:30",time_close:"11:30"},{time_open:"11:20",time_close:"12:30"}]}),console.log(t);this.$auth.user.company_id},generateTimeSlots:function(t){this.span_time_minutes=30;for(var e=[],r=0;r<t;r++)for(var n=0;n<60;n+=30){var o="".concat(r.toString().padStart(2,"0"),":").concat(n.toString().padStart(2,"0"));e.push(o)}return e},generateTimeSlotsRange:function(t,e){this.span_time_minutes=30;for(var r=[],n=t;n<e;n++)for(var o=0;o<60;o+=30){var c="".concat(n.toString().padStart(2,"0"),":").concat(o.toString().padStart(2,"0"));r.push(c)}return r},getDataFromApi:function(){var t=this,e=this.$route.params.id,r={params:{per_page:1e3,company_id:this.$auth.user.company_id,input_time_slots:this.timeSlots,date_from:this.date_from,date_to:this.date_to}};this.$axios.get("/get_device_active_settings/".concat(e),r).then((function(e){e.data.forEach((function(element){console.log(element);var e=element.split("-");t.toggleCellBackground(e[0],e[1])})),console.log(t.selectedCells)}))},updateTimeRange:function(){var t=this,e=this.generateTimeSlotsRange(this.dialog_time_start,this.dialog_time_end+1);e.forEach((function(element){var e=t.timeSlots.findIndex((function(t){return t==element}));t.toggleCellBackground(t.day_index,e,!0)})),console.log(e)},toggleCellBackground:function(t,e){var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n="cell_".concat(t,"_").concat(e),o=document.getElementById(n),c="".concat(t,"-").concat(e);if(this.selectedCells.has(c))r||(this.selectedCells.delete(c),o&&(o.style.backgroundColor="red"));else{this.selectedCells.add(c);Math.floor(16777215*Math.random()).toString(16);o&&(o.style.backgroundColor="green")}console.log(this.selectedCells)},isSelected:function(t,e){return this.selectedCells.has("".concat(t,"-").concat(e))}}}),y=S,x=(r(1476),r(116)),component=Object(x.a)(y,(function(){var t=this,e=t._self._c;return e("div",[e(f.a,{attrs:{width:"300px"},model:{value:t.dialogManualInput,callback:function(e){t.dialogManualInput=e},expression:"dialogManualInput"}},[e(o.a,[e(c.c,{staticClass:"popup_background",attrs:{dense:""}},[e("span",[t._v("Select Hour Range")]),t._v(" "),e(v.a),t._v(" "),e(h.a,{attrs:{outlined:""},on:{click:function(e){t.dialogManualInput=!1}}},[t._v("\n          mdi mdi-close-circle\n        ")])],1),t._v(" "),e(c.b,[e(l.a,{staticStyle:{"min-height":"100px"}},[e(_.a,[e(d.a,{attrs:{md:"6"}},[e(m.a,{attrs:{outlined:"",dense:"",items:t.seasons},model:{value:t.dialog_time_start,callback:function(e){t.dialog_time_start=e},expression:"dialog_time_start"}})],1),t._v(" "),e(d.a,{attrs:{md:"6"}},[e(m.a,{attrs:{outlined:"",dense:"",items:t.seasons},model:{value:t.dialog_time_end,callback:function(e){t.dialog_time_end=e},expression:"dialog_time_end"}})],1),t._v(" "),e(v.a),t._v(" "),e(n.a,{attrs:{dark:"",color:"violet",fill:""},on:{click:function(e){return t.updateTimeRange()}}},[t._v("Update")])],1)],1)],1)],1)],1),t._v(" "),e(_.a,{attrs:{"no-gutters":""}},[e(d.a,{attrs:{md:"6"}}),t._v(" "),e(d.a,{staticStyle:{float:"right"},attrs:{md:"6","align-self":"end"}},[e("CustomFilter",{staticStyle:{float:"right"},attrs:{defaultFilterType:1},on:{"filter-attr":t.filterAttr}})],1)],1),t._v(" "),e("table",{staticStyle:{width:"50%"}},[e("thead",[e("tr",[e("th"),t._v(" "),t._l(t.timeSlots,(function(slot){return e("th",{key:slot},[t._v(t._s(slot))])}))],2)]),t._v(" "),e("tbody",t._l(t.days,(function(r,n){return e("tr",{key:n},[e("td",[t._v(t._s(r))]),t._v(" "),t._l(t.timeSlots,(function(slot,r){return e("td",{key:slot,style:{backgroundColor:t.selectedCells.has(n+"-"+r)?"green":"red"},attrs:{id:"cell_".concat(n,"_").concat(r)},on:{click:function(e){return t.toggleCellBackground(n,r)}}})})),t._v(" "),e("td",[e("img",{staticStyle:{width:"33px"},attrs:{title:"Manual Input",src:"/../../icons/always_open.png"},on:{click:function(e){return t.manualINputSettings(n)}}})])],2)})),0)]),t._v(" "),e(_.a,[e(d.a,{staticClass:"text-end",attrs:{md:"12"}},[e(n.a,{on:{click:function(e){return t.updateSettings()}}},[t._v("Update")])],1)],1)],1)}),[],!1,null,"6db5e5a8",null);e.default=component.exports;installComponents(component,{CustomFilter:r(955).default})},877:function(t,e,r){var n=r(878).has;t.exports=function(t){return n(t),t}},878:function(t,e,r){var n=r(24),o=Set.prototype;t.exports={Set:Set,add:n(o.add),has:n(o.has),remove:n(o.delete),proto:o}},879:function(t,e,r){var n=r(24),o=r(522),c=r(878),d=c.Set,l=c.proto,f=n(l.forEach),h=n(l.keys),_=h(new d).next;t.exports=function(t,e,r){return r?o(h(t),e,_):f(t,e)}},888:function(t,e,r){var n=r(82),o=r(34),c=r(942),d=r(46),l=n("Set");t.exports=function(t){return function(t){return d(t)&&"number"==typeof t.size&&o(t.has)&&o(t.keys)}(t)?t:c(t)?new l(t):t}},889:function(t,e,r){var n=r(90),o=r(39),c=r(38),d=r(120),l=TypeError,f=Math.max,h=function(t,e,r,n){this.set=t,this.size=e,this.has=r,this.keys=n};h.prototype={getIterator:function(){return o(c(this.keys,this.set))},includes:function(t){return c(this.has,this.set,t)}},t.exports=function(t){o(t);var e=+t.size;if(e!=e)throw l("Invalid size");return new h(t,f(d(e),0),n(t.has),n(t.keys))}},891:function(t,e,r){var n=r(525),o=r(878);t.exports=n(o.proto,"size","get")||function(t){return t.size}},901:function(t,e,r){var n=r(878),o=r(879),c=n.Set,d=n.add;t.exports=function(t){var e=new c;return o(t,(function(t){d(e,t)})),e}},914:function(t,e,r){r(941)},915:function(t,e,r){"use strict";var n=r(7),o=r(877),c=r(878).add;n({target:"Set",proto:!0,real:!0,forced:!0},{addAll:function(){for(var t=o(this),e=0,r=arguments.length;e<r;e++)c(t,arguments[e]);return t}})},916:function(t,e,r){"use strict";var n=r(7),o=r(877),c=r(878).remove;n({target:"Set",proto:!0,real:!0,forced:!0},{deleteAll:function(){for(var t,e=o(this),r=!0,n=0,d=arguments.length;n<d;n++)t=c(e,arguments[n]),r=r&&t;return!!r}})},917:function(t,e,r){"use strict";var n=r(7),o=r(38),c=r(888),d=r(943);n({target:"Set",proto:!0,real:!0,forced:!0},{difference:function(t){return o(d,this,c(t))}})},918:function(t,e,r){"use strict";var n=r(7),o=r(66),c=r(877),d=r(879);n({target:"Set",proto:!0,real:!0,forced:!0},{every:function(t){var e=c(this),r=o(t,arguments.length>1?arguments[1]:void 0);return!1!==d(e,(function(t){if(!r(t,t,e))return!1}),!0)}})},919:function(t,e,r){"use strict";var n=r(7),o=r(66),c=r(877),d=r(878),l=r(879),f=d.Set,h=d.add;n({target:"Set",proto:!0,real:!0,forced:!0},{filter:function(t){var e=c(this),r=o(t,arguments.length>1?arguments[1]:void 0),n=new f;return l(e,(function(t){r(t,t,e)&&h(n,t)})),n}})},920:function(t,e,r){"use strict";var n=r(7),o=r(66),c=r(877),d=r(879);n({target:"Set",proto:!0,real:!0,forced:!0},{find:function(t){var e=c(this),r=o(t,arguments.length>1?arguments[1]:void 0),n=d(e,(function(t){if(r(t,t,e))return{value:t}}),!0);return n&&n.value}})},921:function(t,e,r){"use strict";var n=r(7),o=r(38),c=r(888),d=r(944);n({target:"Set",proto:!0,real:!0,forced:!0},{intersection:function(t){return o(d,this,c(t))}})},922:function(t,e,r){"use strict";var n=r(7),o=r(38),c=r(888),d=r(945);n({target:"Set",proto:!0,real:!0,forced:!0},{isDisjointFrom:function(t){return o(d,this,c(t))}})},923:function(t,e,r){"use strict";var n=r(7),o=r(38),c=r(888),d=r(946);n({target:"Set",proto:!0,real:!0,forced:!0},{isSubsetOf:function(t){return o(d,this,c(t))}})},924:function(t,e,r){"use strict";var n=r(7),o=r(38),c=r(888),d=r(947);n({target:"Set",proto:!0,real:!0,forced:!0},{isSupersetOf:function(t){return o(d,this,c(t))}})},925:function(t,e,r){"use strict";var n=r(7),o=r(24),c=r(877),d=r(879),l=r(43),f=o([].join),h=o([].push);n({target:"Set",proto:!0,real:!0,forced:!0},{join:function(t){var e=c(this),r=void 0===t?",":l(t),n=[];return d(e,(function(t){h(n,t)})),f(n,r)}})},926:function(t,e,r){"use strict";var n=r(7),o=r(66),c=r(877),d=r(878),l=r(879),f=d.Set,h=d.add;n({target:"Set",proto:!0,real:!0,forced:!0},{map:function(t){var e=c(this),r=o(t,arguments.length>1?arguments[1]:void 0),n=new f;return l(e,(function(t){h(n,r(t,t,e))})),n}})},927:function(t,e,r){"use strict";var n=r(7),o=r(90),c=r(877),d=r(879),l=TypeError;n({target:"Set",proto:!0,real:!0,forced:!0},{reduce:function(t){var e=c(this),r=arguments.length<2,n=r?void 0:arguments[1];if(o(t),d(e,(function(o){r?(r=!1,n=o):n=t(n,o,o,e)})),r)throw l("Reduce of empty set with no initial value");return n}})},928:function(t,e,r){"use strict";var n=r(7),o=r(66),c=r(877),d=r(879);n({target:"Set",proto:!0,real:!0,forced:!0},{some:function(t){var e=c(this),r=o(t,arguments.length>1?arguments[1]:void 0);return!0===d(e,(function(t){if(r(t,t,e))return!0}),!0)}})},929:function(t,e,r){"use strict";var n=r(7),o=r(38),c=r(888),d=r(948);n({target:"Set",proto:!0,real:!0,forced:!0},{symmetricDifference:function(t){return o(d,this,c(t))}})},930:function(t,e,r){"use strict";var n=r(7),o=r(38),c=r(888),d=r(949);n({target:"Set",proto:!0,real:!0,forced:!0},{union:function(t){return o(d,this,c(t))}})},941:function(t,e,r){"use strict";r(357)("Set",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),r(526))},942:function(t,e,r){var n=r(179),o=r(47),c=r(91),d=r(36),l=r(180),f=d("iterator"),h=Object;t.exports=function(t){if(c(t))return!1;var e=h(t);return void 0!==e[f]||"@@iterator"in e||o(l,n(e))}},943:function(t,e,r){"use strict";var n=r(877),o=r(878),c=r(901),d=r(891),l=r(889),f=r(879),h=r(522),_=o.has,m=o.remove;t.exports=function(t){var e=n(this),r=l(t),o=c(e);return d(e)<=r.size?f(e,(function(t){r.includes(t)&&m(o,t)})):h(r.getIterator(),(function(t){_(e,t)&&m(o,t)})),o}},944:function(t,e,r){"use strict";var n=r(877),o=r(878),c=r(891),d=r(889),l=r(879),f=r(522),h=o.Set,_=o.add,m=o.has;t.exports=function(t){var e=n(this),r=d(t),o=new h;return c(e)>r.size?f(r.getIterator(),(function(t){m(e,t)&&_(o,t)})):l(e,(function(t){r.includes(t)&&_(o,t)})),o}},945:function(t,e,r){"use strict";var n=r(877),o=r(878).has,c=r(891),d=r(889),l=r(879),f=r(522),h=r(353);t.exports=function(t){var e=n(this),r=d(t);if(c(e)<=r.size)return!1!==l(e,(function(t){if(r.includes(t))return!1}),!0);var _=r.getIterator();return!1!==f(_,(function(t){if(o(e,t))return h(_,"normal",!1)}))}},946:function(t,e,r){"use strict";var n=r(877),o=r(891),c=r(879),d=r(889);t.exports=function(t){var e=n(this),r=d(t);return!(o(e)>r.size)&&!1!==c(e,(function(t){if(!r.includes(t))return!1}),!0)}},947:function(t,e,r){"use strict";var n=r(877),o=r(878).has,c=r(891),d=r(889),l=r(522),f=r(353);t.exports=function(t){var e=n(this),r=d(t);if(c(e)<r.size)return!1;var h=r.getIterator();return!1!==l(h,(function(t){if(!o(e,t))return f(h,"normal",!1)}))}},948:function(t,e,r){"use strict";var n=r(877),o=r(878),c=r(901),d=r(889),l=r(522),f=o.add,h=o.has,_=o.remove;t.exports=function(t){var e=n(this),r=d(t).getIterator(),o=c(e);return l(r,(function(t){h(e,t)?_(o,t):f(o,t)})),o}},949:function(t,e,r){"use strict";var n=r(877),o=r(878).add,c=r(901),d=r(889),l=r(522);t.exports=function(t){var e=n(this),r=d(t).getIterator(),f=c(e);return l(r,(function(t){o(f,t)})),f}},955:function(t,e,r){"use strict";r.r(e);r(56),r(33),r(266);var n=r(952),o=(r(939),{components:{DatePicker:n.a},props:["defaultFilterType","height","width","default_date_from","default_date_to"],data:function(){return{time3:null,from_date:"",from_menu:!1,to_date:"",to_menu:!1,loading:!1,showTimePanel:!1,filterType:1,search:""}},watch:{filterType:function(){this.showTimePanel=!0,this.FilterData()}},mounted:function(){5==this.filterType&&document.querySelector(".mx-input").focus();var t=document.getElementsByClassName("mx-input");this.height&&""!=this.height&&(t[0].style.height=this.height),this.width&&""!=this.width&&(t[0].style.width=this.width),this.default_date_from&&this.default_date_to&&(this.from_date=this.default_date_from,this.to_date=this.default_date_to),this.time3=[this.from_date,this.to_date]},created:function(){this.defaultFilterType&&(this.filterType=this.defaultFilterType);var t=new Date;this.default_date_from||(this.from_date=t.toISOString().slice(0,10)),this.default_date_to||(this.to_date=t.toISOString().slice(0,10)),this.default_date_from&&this.default_date_to&&(this.from_date=this.default_date_from,this.to_date=this.default_date_to),this.time3=[this.from_date,this.to_date];var data={from:this.from_date,to:this.to_date,type:1,search:"this.search"};this.$emit("filter-attr",data)},methods:{commonMethod:function(){this.from_date&&this.to_date},CustomFilter:function(){if(this.from_date=this.time3[0],this.to_date=this.time3[1],this.from_date&&this.to_date){var data={from:this.from_date,to:this.to_date,type:this.filterType,search:this.search};this.$emit("filter-attr",data)}},FilterData:function(){this.from_date=this.time3[0],this.to_date=this.time3[1];var t=new Date;if(1==this.filterType)this.from_date=t.toISOString().slice(0,10),this.to_date=t.toISOString().slice(0,10);else if(2==this.filterType){var e=new Date;e.setDate(t.getDate()-1),this.from_date=e.toISOString().slice(0,10),this.to_date=e.toISOString().slice(0,10)}else if(3==this.filterType){var r=new Date(t);r.setDate(t.getDate()-t.getDay());var n=new Date(t);n.setDate(t.getDate()-t.getDay()+6),this.from_date=r.toISOString().slice(0,10),this.to_date=n.toISOString().slice(0,10)}else if(4==this.filterType)this.from_date=this.formatDate(new Date(t.getFullYear(),t.getMonth(),1)),this.to_date=this.formatDate(new Date(t.getFullYear(),t.getMonth()+1,0));else if(5==this.filterType)return void(this.time3=[]);if(this.from_date&&this.to_date){var data={from:this.from_date,to:this.to_date,type:this.filterType,search:this.search};this.$emit("filter-attr",data)}},formatDate:function(t){var e=t.getDate(),r=t.getMonth()+1;return t.getFullYear()+"-"+(r<10?"0":"")+r+"-"+(e<10?"0":"")+e}}}),c=r(116),component=Object(c.a)(o,(function(){var t=this;return(0,t._self._c)("date-picker",{attrs:{label:"Date","value-type":"format",format:"YYYY-MM-DD",type:"date",range:""},on:{change:function(e){return t.CustomFilter()}},model:{value:t.time3,callback:function(e){t.time3=e},expression:"time3"}})}),[],!1,null,null,null);e.default=component.exports}}]);