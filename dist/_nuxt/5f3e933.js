(window.webpackJsonp=window.webpackJsonp||[]).push([[134,103],{1058:function(t,e,n){var content=n(1132);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(22).default)("4ad33eac",content,!0,{sourceMap:!1})},1106:function(t,e,n){"use strict";n.r(e);var r=n(114),o=n(133),c=n(87),d=n(518),l=n(875),f=n(350),h=n(147),_=n(517),m=n(892),v=n(872),S=n(349),y=(n(35),n(6),n(911),n(45),n(912),n(913),n(914),n(915),n(916),n(917),n(918),n(919),n(920),n(921),n(922),n(923),n(924),n(925),n(926),n(927),n(50),n(56),n(62),n(521),n(72),n(11),n(216),{props:["device_id"],data:function(){return{snackbar:!1,response:"",dialog_time_start:"",dialog_time_end:"",dialogManualInput:!1,seasons:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24],span_time_minutes:30,days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],timeSlots:this.generateTimeSlots(24),selectedCells:new Set,array:[],date_from:"",date_to:"",filterType:"",day_index:""}},mounted:function(){},created:function(){var t=new Date;this.date_from=t.toISOString().slice(0,10),this.date_to=t.toISOString().slice(0,10),this.getDataFromApi()},methods:{manualINputSettings:function(t){this.day_index=t,this.dialogManualInput=!0},filterAttr:function(data){this.date_from=data.from,this.date_to=data.to,this.getDataFromApi()},updateSettings:function(){var t=this;console.log(this.selectedCells);var e=Array.from(this.selectedCells),n=JSON.stringify(e),r={params:{company_id:this.$auth.user.company_id,selected_matrix:n,input_days:this.days,input_time_slots:this.timeSlots,date_from:this.date_from,date_to:this.date_to,span_time_minutes:this.span_time_minutes}};this.$axios.post("/update_devices_active_settings/".concat(this.device_id),r.params).then((function(e){e.data.status?t.$emit("closepopup"):(t.snackbar=!0,t.response="Error Occured")}))},generateTimeSlots:function(t){this.span_time_minutes=30;for(var e=[],n=0;n<t;n++)for(var r=0;r<60;r+=30){var o="".concat(n.toString().padStart(2,"0"),":").concat(r.toString().padStart(2,"0"));e.push(o)}return e},generateTimeSlotsRange:function(t,e){this.span_time_minutes=30;for(var n=[],r=t;r<e;r++)for(var o=0;o<60;o+=30){var c="".concat(r.toString().padStart(2,"0"),":").concat(o.toString().padStart(2,"0"));n.push(c)}return n},getDataFromApi:function(){var t=this;if(this.device_id){var e={params:{per_page:1e3,company_id:this.$auth.user.company_id,input_time_slots:this.timeSlots,date_from:this.date_from,date_to:this.date_to}};this.$axios.get("/get_device_active_settings/".concat(this.device_id),e).then((function(e){e.data.forEach((function(element){console.log(element);var e=element.split("-");t.toggleCellBackground(e[0],e[1])}))}))}},selectTimeRange:function(){var t=this;this.generateTimeSlotsRange(this.dialog_time_start,this.dialog_time_end).forEach((function(element){var e=t.timeSlots.findIndex((function(t){return t==element}));t.toggleCellBackground(t.day_index,e,!0)})),this.dialogManualInput=!1},toggleCellBackground:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r="cell_".concat(t,"_").concat(e),o=document.getElementById(r),c="".concat(t,"-").concat(e);this.selectedCells.has(c)?n||(this.selectedCells.delete(c),o&&(o.classList.add("un-selected"),o.classList.remove("selected"))):(this.selectedCells.add(c),o&&(o.classList.add("selected"),o.classList.remove("un-selected")))},isSelected:function(t,e){return this.selectedCells.has("".concat(t,"-").concat(e))},clearSelection:function(){document.getElementsByClassName("tdcell").forEach((function(element,t,e){element.classList.remove("selected"),element.classList.add("un-selected")})),this.selectedCells=new Set}}}),x=y,w=(n(1131),n(116)),component=Object(w.a)(x,(function(){var t=this,e=t._self._c;return e("div",{staticStyle:{"background-color":"#fff !important"}},[e("div",{staticClass:"text-center ma-2"},[e(v.a,{attrs:{top:"top",color:"secondary",elevation:"24"},model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v("\n      "+t._s(t.response)+"\n    ")])],1),t._v(" "),e(f.a,{attrs:{width:"300px"},model:{value:t.dialogManualInput,callback:function(e){t.dialogManualInput=e},expression:"dialogManualInput"}},[e(o.a,[e(c.d,{staticClass:"popup_background",attrs:{dense:""}},[e("span",[t._v("Select Hour Range")]),t._v(" "),e(S.a),t._v(" "),e(h.a,{attrs:{outlined:""},on:{click:function(e){t.dialogManualInput=!1}}},[t._v("\n          mdi mdi-close-circle\n        ")])],1),t._v(" "),e(c.c,[e(l.a,{staticStyle:{"min-height":"100px"}},[e(_.a,[e(d.a,{attrs:{md:"6"}},[e(m.a,{attrs:{height:"20px",outlined:"",dense:"",items:t.seasons},model:{value:t.dialog_time_start,callback:function(e){t.dialog_time_start=e},expression:"dialog_time_start"}})],1),t._v(" "),e(d.a,{attrs:{md:"6"}},[e(m.a,{attrs:{outlined:"",dense:"",items:t.seasons},model:{value:t.dialog_time_end,callback:function(e){t.dialog_time_end=e},expression:"dialog_time_end"}})],1),t._v(" "),e(S.a),t._v(" "),e(r.a,{attrs:{dark:"",color:"violet",fill:""},on:{click:function(e){return t.selectTimeRange()}}},[t._v("Update")])],1)],1)],1)],1)],1),t._v(" "),e(_.a,{attrs:{"no-gutters":""}},[e(d.a,{attrs:{md:"6"}}),t._v(" "),e(d.a,{staticClass:"mb-3",staticStyle:{float:"right","text-align":"right"},attrs:{md:"6","align-self":"end"}},[e(r.a,{attrs:{dense:"",dark:"",color:"violet",fill:""},on:{click:function(e){return t.clearSelection()}}},[t._v("\n        Cancel\n      ")]),t._v(" "),e(r.a,{staticClass:"ml-3 mr-3",attrs:{dense:"",dark:"",color:"violet",fill:""},on:{click:function(e){return t.updateSettings()}}},[t._v("Update")]),t._v(" "),e("CustomFilter",{staticClass:"mt-2",staticStyle:{float:"right"},attrs:{defaultFilterType:1,height:35},on:{"filter-attr":t.filterAttr}})],1)],1),t._v(" "),e("table",{staticStyle:{width:"100%"}},[e("thead",[e("tr",[e("th"),t._v(" "),t._l(t.timeSlots,(function(slot){return e("th",{key:slot,staticClass:"settings-time"},[t._v("\n          "+t._s(slot)+"\n        ")])}))],2)]),t._v(" "),e("tbody",t._l(t.days,(function(n,r){return e("tr",{key:r},[e("td",[t._v(t._s(n))]),t._v(" "),t._l(t.timeSlots,(function(slot,n){return e("td",{key:slot,class:t.selectedCells.has(r+"-"+n)?"tdcell selected":"tdcell un-selected",attrs:{id:"cell_".concat(r,"_").concat(n)},on:{click:function(e){return t.toggleCellBackground(r,n)}}})})),t._v(" "),e("td",[e("img",{staticStyle:{width:"33px"},attrs:{title:"Manual Input",src:"/../../icons/always_open.png"},on:{click:function(e){return t.manualINputSettings(r)}}})])],2)})),0)])],1)}),[],!1,null,"da381d58",null);e.default=component.exports;installComponents(component,{CustomFilter:n(952).default})},1131:function(t,e,n){"use strict";n(1058)},1132:function(t,e,n){var r=n(21)((function(i){return i[1]}));r.push([t.i,"table[data-v-da381d58]{border-collapse:collapse;overflow:auto;width:100%}th[data-v-da381d58]{font-size:13px;font-weight:300}th[data-v-da381d58]:nth-child(2n){font-weight:700}td[data-v-da381d58],th[data-v-da381d58]{border:1px solid #ddd;text-align:center}th[data-v-da381d58]{background-color:#f2f2f2}.un-selected[data-v-da381d58]{background-color:#ddd;border:1px solid #fff}.selected[data-v-da381d58]{background-color:#60ad60;border:1px solid #fff}.selected-cell[data-v-da381d58]{background-color:green}.settings-time[data-v-da381d58]{font-size:10px}.v-input__control .v-input__slot[data-v-da381d58],.v-input__slot[data-v-da381d58],input[data-v-da381d58]{align-items:center!important;display:flex!important;min-height:auto!important}",""]),r.locals={},t.exports=r},877:function(t,e,n){var r=n(878).has;t.exports=function(t){return r(t),t}},878:function(t,e,n){var r=n(24),o=Set.prototype;t.exports={Set:Set,add:r(o.add),has:r(o.has),remove:r(o.delete),proto:o}},879:function(t,e,n){var r=n(24),o=n(522),c=n(878),d=c.Set,l=c.proto,f=r(l.forEach),h=r(l.keys),_=h(new d).next;t.exports=function(t,e,n){return n?o(h(t),e,_):f(t,e)}},888:function(t,e,n){var r=n(82),o=n(34),c=n(944),d=n(46),l=r("Set");t.exports=function(t){return function(t){return d(t)&&"number"==typeof t.size&&o(t.has)&&o(t.keys)}(t)?t:c(t)?new l(t):t}},889:function(t,e,n){var r=n(90),o=n(39),c=n(38),d=n(120),l=TypeError,f=Math.max,h=function(t,e,n,r){this.set=t,this.size=e,this.has=n,this.keys=r};h.prototype={getIterator:function(){return o(c(this.keys,this.set))},includes:function(t){return c(this.has,this.set,t)}},t.exports=function(t){o(t);var e=+t.size;if(e!=e)throw l("Invalid size");return new h(t,f(d(e),0),r(t.has),r(t.keys))}},891:function(t,e,n){var r=n(525),o=n(878);t.exports=r(o.proto,"size","get")||function(t){return t.size}},902:function(t,e,n){var r=n(878),o=n(879),c=r.Set,d=r.add;t.exports=function(t){var e=new c;return o(t,(function(t){d(e,t)})),e}},911:function(t,e,n){n(943)},912:function(t,e,n){"use strict";var r=n(7),o=n(877),c=n(878).add;r({target:"Set",proto:!0,real:!0,forced:!0},{addAll:function(){for(var t=o(this),e=0,n=arguments.length;e<n;e++)c(t,arguments[e]);return t}})},913:function(t,e,n){"use strict";var r=n(7),o=n(877),c=n(878).remove;r({target:"Set",proto:!0,real:!0,forced:!0},{deleteAll:function(){for(var t,e=o(this),n=!0,r=0,d=arguments.length;r<d;r++)t=c(e,arguments[r]),n=n&&t;return!!n}})},914:function(t,e,n){"use strict";var r=n(7),o=n(38),c=n(888),d=n(945);r({target:"Set",proto:!0,real:!0,forced:!0},{difference:function(t){return o(d,this,c(t))}})},915:function(t,e,n){"use strict";var r=n(7),o=n(66),c=n(877),d=n(879);r({target:"Set",proto:!0,real:!0,forced:!0},{every:function(t){var e=c(this),n=o(t,arguments.length>1?arguments[1]:void 0);return!1!==d(e,(function(t){if(!n(t,t,e))return!1}),!0)}})},916:function(t,e,n){"use strict";var r=n(7),o=n(66),c=n(877),d=n(878),l=n(879),f=d.Set,h=d.add;r({target:"Set",proto:!0,real:!0,forced:!0},{filter:function(t){var e=c(this),n=o(t,arguments.length>1?arguments[1]:void 0),r=new f;return l(e,(function(t){n(t,t,e)&&h(r,t)})),r}})},917:function(t,e,n){"use strict";var r=n(7),o=n(66),c=n(877),d=n(879);r({target:"Set",proto:!0,real:!0,forced:!0},{find:function(t){var e=c(this),n=o(t,arguments.length>1?arguments[1]:void 0),r=d(e,(function(t){if(n(t,t,e))return{value:t}}),!0);return r&&r.value}})},918:function(t,e,n){"use strict";var r=n(7),o=n(38),c=n(888),d=n(946);r({target:"Set",proto:!0,real:!0,forced:!0},{intersection:function(t){return o(d,this,c(t))}})},919:function(t,e,n){"use strict";var r=n(7),o=n(38),c=n(888),d=n(947);r({target:"Set",proto:!0,real:!0,forced:!0},{isDisjointFrom:function(t){return o(d,this,c(t))}})},920:function(t,e,n){"use strict";var r=n(7),o=n(38),c=n(888),d=n(948);r({target:"Set",proto:!0,real:!0,forced:!0},{isSubsetOf:function(t){return o(d,this,c(t))}})},921:function(t,e,n){"use strict";var r=n(7),o=n(38),c=n(888),d=n(949);r({target:"Set",proto:!0,real:!0,forced:!0},{isSupersetOf:function(t){return o(d,this,c(t))}})},922:function(t,e,n){"use strict";var r=n(7),o=n(24),c=n(877),d=n(879),l=n(43),f=o([].join),h=o([].push);r({target:"Set",proto:!0,real:!0,forced:!0},{join:function(t){var e=c(this),n=void 0===t?",":l(t),r=[];return d(e,(function(t){h(r,t)})),f(r,n)}})},923:function(t,e,n){"use strict";var r=n(7),o=n(66),c=n(877),d=n(878),l=n(879),f=d.Set,h=d.add;r({target:"Set",proto:!0,real:!0,forced:!0},{map:function(t){var e=c(this),n=o(t,arguments.length>1?arguments[1]:void 0),r=new f;return l(e,(function(t){h(r,n(t,t,e))})),r}})},924:function(t,e,n){"use strict";var r=n(7),o=n(90),c=n(877),d=n(879),l=TypeError;r({target:"Set",proto:!0,real:!0,forced:!0},{reduce:function(t){var e=c(this),n=arguments.length<2,r=n?void 0:arguments[1];if(o(t),d(e,(function(o){n?(n=!1,r=o):r=t(r,o,o,e)})),n)throw l("Reduce of empty set with no initial value");return r}})},925:function(t,e,n){"use strict";var r=n(7),o=n(66),c=n(877),d=n(879);r({target:"Set",proto:!0,real:!0,forced:!0},{some:function(t){var e=c(this),n=o(t,arguments.length>1?arguments[1]:void 0);return!0===d(e,(function(t){if(n(t,t,e))return!0}),!0)}})},926:function(t,e,n){"use strict";var r=n(7),o=n(38),c=n(888),d=n(950);r({target:"Set",proto:!0,real:!0,forced:!0},{symmetricDifference:function(t){return o(d,this,c(t))}})},927:function(t,e,n){"use strict";var r=n(7),o=n(38),c=n(888),d=n(951);r({target:"Set",proto:!0,real:!0,forced:!0},{union:function(t){return o(d,this,c(t))}})},943:function(t,e,n){"use strict";n(357)("Set",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),n(526))},944:function(t,e,n){var r=n(179),o=n(47),c=n(91),d=n(36),l=n(180),f=d("iterator"),h=Object;t.exports=function(t){if(c(t))return!1;var e=h(t);return void 0!==e[f]||"@@iterator"in e||o(l,r(e))}},945:function(t,e,n){"use strict";var r=n(877),o=n(878),c=n(902),d=n(891),l=n(889),f=n(879),h=n(522),_=o.has,m=o.remove;t.exports=function(t){var e=r(this),n=l(t),o=c(e);return d(e)<=n.size?f(e,(function(t){n.includes(t)&&m(o,t)})):h(n.getIterator(),(function(t){_(e,t)&&m(o,t)})),o}},946:function(t,e,n){"use strict";var r=n(877),o=n(878),c=n(891),d=n(889),l=n(879),f=n(522),h=o.Set,_=o.add,m=o.has;t.exports=function(t){var e=r(this),n=d(t),o=new h;return c(e)>n.size?f(n.getIterator(),(function(t){m(e,t)&&_(o,t)})):l(e,(function(t){n.includes(t)&&_(o,t)})),o}},947:function(t,e,n){"use strict";var r=n(877),o=n(878).has,c=n(891),d=n(889),l=n(879),f=n(522),h=n(352);t.exports=function(t){var e=r(this),n=d(t);if(c(e)<=n.size)return!1!==l(e,(function(t){if(n.includes(t))return!1}),!0);var _=n.getIterator();return!1!==f(_,(function(t){if(o(e,t))return h(_,"normal",!1)}))}},948:function(t,e,n){"use strict";var r=n(877),o=n(891),c=n(879),d=n(889);t.exports=function(t){var e=r(this),n=d(t);return!(o(e)>n.size)&&!1!==c(e,(function(t){if(!n.includes(t))return!1}),!0)}},949:function(t,e,n){"use strict";var r=n(877),o=n(878).has,c=n(891),d=n(889),l=n(522),f=n(352);t.exports=function(t){var e=r(this),n=d(t);if(c(e)<n.size)return!1;var h=n.getIterator();return!1!==l(h,(function(t){if(!o(e,t))return f(h,"normal",!1)}))}},950:function(t,e,n){"use strict";var r=n(877),o=n(878),c=n(902),d=n(889),l=n(522),f=o.add,h=o.has,_=o.remove;t.exports=function(t){var e=r(this),n=d(t).getIterator(),o=c(e);return l(n,(function(t){h(e,t)?_(o,t):f(o,t)})),o}},951:function(t,e,n){"use strict";var r=n(877),o=n(878).add,c=n(902),d=n(889),l=n(522);t.exports=function(t){var e=r(this),n=d(t).getIterator(),f=c(e);return l(n,(function(t){o(f,t)})),f}},952:function(t,e,n){"use strict";n.r(e);n(56),n(33),n(266);var r=n(939),o=(n(937),{components:{DatePicker:r.a},props:["defaultFilterType","height","width","default_date_from","default_date_to"],data:function(){return{time3:null,from_date:"",from_menu:!1,to_date:"",to_menu:!1,loading:!1,showTimePanel:!1,filterType:1,search:""}},watch:{filterType:function(){this.showTimePanel=!0,this.FilterData()}},mounted:function(){5==this.filterType&&document.querySelector(".mx-input").focus();var t=document.getElementsByClassName("mx-input");this.height&&""!=this.height&&(t[0].style.height=this.height),this.width&&""!=this.width&&(t[0].style.width=this.width),this.default_date_from&&this.default_date_to&&(this.from_date=this.default_date_from,this.to_date=this.default_date_to),this.time3=[this.from_date,this.to_date]},created:function(){this.defaultFilterType&&(this.filterType=this.defaultFilterType);var t=new Date;this.default_date_from||(this.from_date=t.toISOString().slice(0,10)),this.default_date_to||(this.to_date=t.toISOString().slice(0,10)),this.default_date_from&&this.default_date_to&&(this.from_date=this.default_date_from,this.to_date=this.default_date_to),this.time3=[this.from_date,this.to_date];var data={from:this.from_date,to:this.to_date,type:1,search:"this.search"};this.$emit("filter-attr",data)},methods:{commonMethod:function(){this.from_date&&this.to_date},CustomFilter:function(){if(this.from_date=this.time3[0],this.to_date=this.time3[1],this.from_date&&this.to_date){var data={from:this.from_date,to:this.to_date,type:this.filterType,search:this.search};this.$emit("filter-attr",data)}},FilterData:function(){this.from_date=this.time3[0],this.to_date=this.time3[1];var t=new Date;if(1==this.filterType)this.from_date=t.toISOString().slice(0,10),this.to_date=t.toISOString().slice(0,10);else if(2==this.filterType){var e=new Date;e.setDate(t.getDate()-1),this.from_date=e.toISOString().slice(0,10),this.to_date=e.toISOString().slice(0,10)}else if(3==this.filterType){var n=new Date(t);n.setDate(t.getDate()-t.getDay());var r=new Date(t);r.setDate(t.getDate()-t.getDay()+6),this.from_date=n.toISOString().slice(0,10),this.to_date=r.toISOString().slice(0,10)}else if(4==this.filterType)this.from_date=this.formatDate(new Date(t.getFullYear(),t.getMonth(),1)),this.to_date=this.formatDate(new Date(t.getFullYear(),t.getMonth()+1,0));else if(5==this.filterType)return void(this.time3=[]);if(this.from_date&&this.to_date){var data={from:this.from_date,to:this.to_date,type:this.filterType,search:this.search};this.$emit("filter-attr",data)}},formatDate:function(t){var e=t.getDate(),n=t.getMonth()+1;return t.getFullYear()+"-"+(n<10?"0":"")+n+"-"+(e<10?"0":"")+e}}}),c=n(116),component=Object(c.a)(o,(function(){var t=this;return(0,t._self._c)("date-picker",{attrs:{label:"Date","value-type":"format",format:"YYYY-MM-DD",type:"date",range:""},on:{change:function(e){return t.CustomFilter()}},model:{value:t.time3,callback:function(e){t.time3=e},expression:"time3"}})}),[],!1,null,null,null);e.default=component.exports}}]);