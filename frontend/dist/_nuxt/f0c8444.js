(window.webpackJsonp=window.webpackJsonp||[]).push([[10,33],{905:function(t,e,r){"use strict";r.r(e);var n=r(517),o=(r(56),r(33),r(266),r(952)),c=(r(939),{components:{DatePicker:o.a},props:["defaultFilterType","height","width","default_date_from","default_date_to"],data:function(){return{time3:null,from_date:"",from_menu:!1,to_date:"",to_menu:!1,loading:!1,showTimePanel:!1,filterType:1,search:""}},watch:{filterType:function(){this.showTimePanel=!0,this.FilterData()}},mounted:function(){},created:function(){this.defaultFilterType&&(this.filterType=this.defaultFilterType);var t=new Date;this.from_date=t.toISOString().slice(0,10),this.to_date=t.toISOString().slice(0,10),this.time3=[this.from_date,this.to_date]},methods:{commonMethod:function(){this.from_date&&this.to_date},CustomFilter:function(){if(this.from_date=this.time3[0],this.to_date=this.time3[1],this.from_date&&this.to_date){var data={from:this.from_date,to:this.to_date,type:this.filterType,search:this.search};this.$emit("filter-attr",data)}},FilterData:function(){this.from_date=this.time3[0],this.to_date=this.time3[1];var t=new Date;if(1==this.filterType)this.from_date=t.toISOString().slice(0,10),this.to_date=t.toISOString().slice(0,10);else if(2==this.filterType){var e=new Date;e.setDate(t.getDate()-1),this.from_date=e.toISOString().slice(0,10),this.to_date=e.toISOString().slice(0,10)}else if(3==this.filterType){var r=new Date(t);r.setDate(t.getDate()-t.getDay());var n=new Date(t);n.setDate(t.getDate()-t.getDay()+6),this.from_date=r.toISOString().slice(0,10),this.to_date=n.toISOString().slice(0,10)}else if(4==this.filterType)this.from_date=this.formatDate(new Date(t.getFullYear(),t.getMonth(),1)),this.to_date=this.formatDate(new Date(t.getFullYear(),t.getMonth()+1,0));else if(5==this.filterType)return void(this.time3=[]);if(this.from_date&&this.to_date){var data={from:this.from_date,to:this.to_date,type:this.filterType,search:this.search};this.$emit("filter-attr",data)}},formatDate:function(t){var e=t.getDate(),r=t.getMonth()+1;return t.getFullYear()+"-"+(r<10?"0":"")+r+"-"+(e<10?"0":"")+e}}}),l=(r(950),r(116)),component=Object(l.a)(c,(function(){var t=this,e=t._self._c;return e("div",[e(n.a,[e("date-picker",{staticStyle:{"padding-top":"7px",width:"100%"},attrs:{"value-type":"format",format:"YYYY-MM-DD",type:"date",range:""},on:{change:function(e){return t.CustomFilter()}},model:{value:t.time3,callback:function(e){t.time3=e},expression:"time3"}})],1)],1)}),[],!1,null,null,null);e.default=component.exports},908:function(t,e,r){var content=r(951);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(22).default)("20f2e8f4",content,!0,{sourceMap:!1})},932:function(t,e,r){"use strict";r.r(e);var n=r(114),o=r(133),c=r(87),l=r(518),d=r(875),h=r(1548),f=r(350),m=r(935),_=r(147),v=r(212),y=r(326),D=r(204),O=r(60),x=r(862),j=r(517),k=r(872),w=r(349),I=r(214),S=r(96),F=(r(37),r(12),r(14),r(17),r(11),r(18),r(23)),C=r(3);r(88),r(521),r(35),r(33),r(266),r(56),r(523),r(215),r(80),r(6),r(72),r(58),r(914),r(45),r(915),r(916),r(917),r(918),r(919),r(920),r(921),r(922),r(923),r(924),r(925),r(926),r(927),r(928),r(929),r(930),r(50),r(13),r(55);function $(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function P(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?$(Object(source),!0).forEach((function(e){Object(C.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):$(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var T={props:["visitorIdentificationNumber","visitorFullName"],components:{Calender:r(905).default},data:function(){var t,e,r,n,o;return t={purposeList:[],branchesList:[],hostList:[],cumulativeIndex:1,perPage:10,currentPage:1,renderVisitorDialog:!1,users:[],formData:{max:10,date:(e=new Date,r=e.getFullYear(),n=String(e.getMonth()+1).padStart(2,"0"),o=String(e.getDate()).padStart(2,"0"),"".concat(r,"-").concat(n,"-").concat(o)),company_id:0},attendancFilters:!1,filters:{},isFilter:!1,totalRowsCount:0,datatable_search_textbox:"",datatable_filter_date:"",filter_visitor_id:"",snack:!1,snackColor:"",snackText:"",date:null},Object(C.a)(t,"filter_visitor_id",""),Object(C.a)(t,"generateLogsDialog",!1),Object(C.a)(t,"reportSync",!1),Object(C.a)(t,"isCompany",!0),Object(C.a)(t,"time_table_dialog",!1),Object(C.a)(t,"log_details",!1),Object(C.a)(t,"overtime",!1),Object(C.a)(t,"options",{}),Object(C.a)(t,"date",null),Object(C.a)(t,"menu",!1),Object(C.a)(t,"loading",!1),Object(C.a)(t,"time_menu",!1),Object(C.a)(t,"manual_time_menu",!1),Object(C.a)(t,"Model","Visitor Reports"),Object(C.a)(t,"endpoint","visitor_attendance"),Object(C.a)(t,"search",""),Object(C.a)(t,"snackbar",!1),Object(C.a)(t,"add_manual_log",!1),Object(C.a)(t,"dialog",!1),Object(C.a)(t,"from_date",null),Object(C.a)(t,"from_menu",!1),Object(C.a)(t,"to_date",null),Object(C.a)(t,"to_menu",!1),Object(C.a)(t,"ids",[]),Object(C.a)(t,"visitors",[]),Object(C.a)(t,"DateRange",!0),Object(C.a)(t,"devices",[]),Object(C.a)(t,"valid",!0),Object(C.a)(t,"nameRules",[function(t){return!!t||"reason is required"}]),Object(C.a)(t,"timeRules",[function(t){return!!t||"time is required"}]),Object(C.a)(t,"deviceRules",[function(t){return!!t||"device is required"}]),Object(C.a)(t,"daily_menu",!1),Object(C.a)(t,"daily_date",null),Object(C.a)(t,"dailyDate",!1),Object(C.a)(t,"editItems",{attendance_logs_id:"",UserID:"",device_id:"",user_id:"",reason:"",date:"",time:null}),Object(C.a)(t,"loading",!1),Object(C.a)(t,"total",0),Object(C.a)(t,"log_headers",[{text:"#",align:"left",sortable:!1,filterable:!1,value:"sno"},{text:"Device",align:"left",sortable:!1,filterable:!1,value:"device.name"},{text:"Location",align:"left",sortable:!1,filterable:!1,value:"device.location"},{text:"Time",align:"left",sortable:!1,filterable:!1,value:"time"}]),Object(C.a)(t,"headers",[{text:"#",align:"left",sortable:!1,filterable:!1,value:"sno"},{text:"Date",align:"left",sortable:!1,filterable:!1,filterSpecial:!0,value:"date"},{text:"Host",align:"left",sortable:!1,filterable:!1,filterSpecial:!1,value:"host_id",key:"host_id"},{text:"Purpose",align:"left",sortable:!1,filterable:!0,filterSpecial:!0,value:"purpose_id"},{text:"Check In",align:"left",sortable:!1,filterable:!0,filterSpecial:!1,value:"in"},{text:"Check Out",align:"left",sortable:!1,filterable:!0,filterSpecial:!1,value:"out"},{text:"Duration",align:"left",sortable:!1,filterable:!0,filterSpecial:!1,value:"total_hrs"},{text:"OverStay",align:"left",sortable:!1,filterable:!1,filterSpecial:!0,value:"overstay"},{text:"Options",value:"options",sortable:!1}]),Object(C.a)(t,"frequency","Monthly"),Object(C.a)(t,"payload",{from_date:null,to_date:null,daily_date:null,visitor_id:"",status:"All"}),Object(C.a)(t,"log_payload",{user_id:null,device_id:"",date:null,time:null}),Object(C.a)(t,"log_list",[]),Object(C.a)(t,"snackbar",!1),Object(C.a)(t,"editedIndex",-1),Object(C.a)(t,"editedItem",{name:""}),Object(C.a)(t,"defaultItem",{name:""}),Object(C.a)(t,"response",""),Object(C.a)(t,"data",[]),Object(C.a)(t,"shifts",[]),Object(C.a)(t,"errors",[]),Object(C.a)(t,"custom_options",{}),Object(C.a)(t,"max_date",null),Object(C.a)(t,"item",null),Object(C.a)(t,"viewDialog",!1),Object(C.a)(t,"attendance",[]),t},computed:{formTitle:function(){return-1===this.editedIndex?"New":"Edit"}},watch:{dialog:function(t){t||this.close(),this.errors=[],this.search=""},options:{handler:function(){this.getDataFromApi()},deep:!0}},created:function(){this.loading=!0,this.getVisitors(),this.payload.daily_date=(new Date).toJSON().slice(0,10),this.custom_options={params:{per_page:1e3,company_id:this.$auth.user.company_id}},this.getDeviceList();var dt=new Date,t=dt.getFullYear(),e=dt.getMonth()+1,dd=new Date(dt.getFullYear(),e,0);if(e=e<10?"0"+e:e,this.payload.from_date="".concat(t,"-").concat(e,"-01"),this.payload.to_date="".concat(t,"-").concat(e,"-").concat(dd.getDate()),null==this.$auth.user.branch_id||0==this.$auth.user.branch_id){var r;(r=this.headers).splice.apply(r,[2,0].concat([{text:"Branch",align:"left",sortable:!1,value:"branch_id",filterable:!0,filterName:"branch_id",filterSpecial:!0}]))}},methods:{viewInfo:function(t){this.item=t.visitor,this.attendance=t,this.viewDialog=!0},filterAttr:function(data){this.payload.from_date=data.from,this.payload.to_date=data.to,this.getDataFromApi()},addUser:function(){this.users.push({visitor_id:""})},removeUser:function(t){this.users.splice(t,1)},submitData:function(){var t=this;this.formData.userIds=this.users.map((function(t){return t.visitor_id})),this.formData.company_id=this.$auth.user.company_id,this.$axios.post("/render_daily_report",this.formData).then((function(e){var data=e.data;t.getDataFromApi(),t.snackbar=!0,t.response=data.message,t.dialog=!1})).catch((function(e){var r=e.message;t.snackbar=!0,t.response=r}))},datatable_cancel:function(){this.datatable_search_textbox=""},datatable_open:function(){this.datatable_search_textbox=""},datatable_close:function(){this.loading=!1},processFilterDates:function(){var t=new Date(this.payload.from_date);t.setDate(t.getDate()+("Weekly"==this.frequency?6:30));var e=t.getDate().toString().padStart(2,"0"),r=(t.getMonth()+1).toString().padStart(2,"0"),n=t.getFullYear();"Custom"!==this.frequency&&(this.payload.to_date="".concat(n,"-").concat(r,"-").concat(e)),this.max_date="".concat(n,"-").concat(r,"-").concat(e),this.getDataFromApi()},set_date_save:function(t,e){t.save(e),this.processFilterDates()},changeReportFrequency:function(){this.processFilterDates()},applyFilters:function(t,e){this.getDataFromApi()},toggleFilter:function(){var t=this;return Object(F.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.isFilter=!t.isFilter,t.isFilter&&(t.refresh=!0,t.handleChangeEvent());case 2:case"end":return e.stop()}}),e)})))()},handleChangeEvent:function(){var t=this;return Object(F.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("fetchDropDowns",{key:"branchList",endpoint:"branch-list"});case 2:return t.branchesList=e.sent,e.next=5,t.$store.dispatch("fetchDropDowns",{key:"hostList",endpoint:"host_list"});case 5:return t.hostList=e.sent,e.next=8,t.$store.dispatch("fetchDropDowns",{key:"purposeList",endpoint:"purpose_list"});case 8:t.purposeList=e.sent;case 9:case"end":return e.stop()}}),e)})))()},clearFilters:function(){this.filters={},this.isFilter=!1,this.getDataFromApi()},getDeviceList:function(){var t=this,e={params:{company_id:this.$auth.user.company_id}};this.$axios.get("/device_list",e).then((function(e){var data=e.data;t.devices=data}))},store_schedule:function(){var t=this,e=this.log_payload,r={UserID:e.user_id,LogTime:e.date+" "+e.time,DeviceID:e.device_id,company_id:this.$auth.user.company_id};this.loading=!0,this.$axios.post("/generate_log",r).then((function(e){e.data;t.getDataFromApi(),t.add_manual_log=!1,t.loading=!1})).catch((function(e){var r=e.message;t.snackbar=!0,t.response=r}))},setVisitorId:function(t){this.$store.commit("visitor_id",t)},getVisitors:function(){var t=this;return Object(F.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={params:{company_id:t.$auth.user.company_id}},e.next=3,t.$axios.get("/visitors_with_type",r).then((function(e){var data=e.data;t.visitors=data,t.visitors.unshift({system_user_id:"",name_with_user_id:"Select All"})}));case 3:case"end":return e.stop()}}),e)})))()},caps:function(t){return t.replace(/_/g," ").replace(/\b\w/g,(function(t){return t.toUpperCase()}))},can:function(t){return this.$pagePermission.can(t,this)},getDataFromApi:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.endpoint,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";this.loading=!0;var o=this.options,c=o.sortBy,l=o.sortDesc,d=o.page,h=o.itemsPerPage,f=c?c[0]:"",m=l?l[0]:"";if("Custom"==this.frequency){if(null==this.payload.from_date)return!1;if(null==this.payload.to_date)return!1}var _={params:P(P(P({page:d,sortBy:f,sortDesc:m,per_page:h,company_id:this.$auth.user.company_id},this.payload),{},{frequency:this.frequency},this.filters),{},{visitorIdentificationNumber:this.visitorIdentificationNumber})};this.currentPage=d,""!=r&&(_.params[r]=n),this.$axios.get(e,_).then(function(){var e=Object(F.a)(regeneratorRuntime.mark((function e(n){var data,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(data=n.data,""==r||0!=data.data.length){e.next=7;break}return t.snack=!0,t.snackColor="error",t.snackText="No Results Found",t.loading=!1,e.abrupt("return",!1);case 7:return t.data=data.data,o=new Set,e.next=11,data.data.filter((function(t){var e=t.visitor_id;return!o.has(e)&&(o.add(e),!0)}));case 11:t.users=e.sent,t.total=data.total,t.loading=!1,t.totalRowsCount=data.total;case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},editItem:function(t){this.dialog=!0,this.editItems.UserID=t.visitor_id,this.editItems.date=t.edit_date},update:function(){var t=this;if(this.$refs.form.validate()){var e={UserID:this.editItems.UserID,LogTime:this.editItems.date+" "+this.editItems.time,DeviceID:this.editItems.device_id,user_id:this.editItems.UserID,company_id:this.$auth.user.company_id,reason:this.editItems.reason};this.$axios.post("/generate_manual_log",e).then((function(e){var data=e.data;t.loading=!1,data.status?(t.snackbar=!0,t.response=data.message,t.close()):t.errors=data.errors})).catch((function(t){return console.log(t)}))}},renderByType:function(t){var e=this,r=this.editItems.UserID,n=this.editItems.date;if(r&&n){var o={params:{date:this.editItems.date,UserID:this.editItems.UserID,updated_by:this.$auth.user.id,company_id:this.$auth.user.company_id,manual_entry:!0,reason:this.editItems.reason}};this.$axios.get("/"+t,o).then((function(t){var data=t.data;e.loading=!1,e.snackbar=!0,e.response=data.message,e.getDataFromApi()})).catch((function(t){return console.log(t)}))}else alert("System User Id and Date field is required")},viewItem:function(t){var e=this;this.log_list=[];var r={params:{per_page:500,UserID:t.system_user_id,LogTime:t.edit_date,company_id:this.$auth.user.company_id}};this.log_details=!0,this.$axios.get("visitor_log_list",r).then((function(t){var data=t.data;e.log_list=data.data}))},close:function(){var t=this;this.dialog=!1,setTimeout((function(){t.editedItem=Object.assign({},t.defaultItem),t.editedIndex=-1}),300)},process_file:function(t){if(this.data.length){var e=this.payload,r=e.visitor_id,n=e.daily_date,o=e.from_date,c=e.to_date,l=e.status,d=this.frequency,h=this.$auth.user.company_id,f=(this.options.itemsPerPage,"");f+="".concat("http://192.168.88.30:8000/api/visitor_attendance_report"),f+="?company_id=".concat(h),f+="&status=".concat(l),f+="&visitor_id=".concat(r),f+="&frequency=".concat(d),f+="&action=".concat(t),f+="&per_page=".concat(20),f+="Daily"==d?"&daily_date=".concat(n):"&from_date=".concat(o,"&to_date=").concat(c);var m=document.createElement("a");m.setAttribute("href",f),m.setAttribute("target","_blank"),m.click(),this.getDataFromApi()}else alert("No record found")}}},L=T,R=r(116),component=Object(R.a)(L,(function(){var t=this,e=t._self._c;return e("div",[e(k.a,{attrs:{top:"top",color:"secondary",elevation:"24"},model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v("\n    "+t._s(t.response)+"\n  ")]),t._v(" "),e(k.a,{attrs:{timeout:3e3,color:t.snackColor},scopedSlots:t._u([{key:"action",fn:function(r){var o=r.attrs;return[e(n.a,t._b({attrs:{text:""},on:{click:function(e){t.snack=!1}}},"v-btn",o,!1),[t._v(" Close ")])]}}]),model:{value:t.snack,callback:function(e){t.snack=e},expression:"snack"}},[t._v("\n    "+t._s(t.snackText)+"\n    ")]),t._v(" "),e(j.a,[e(l.a,{staticStyle:{padding:"0px"}},[e(o.a,{staticClass:"mb-5 pa-0",staticStyle:{padding:"0px"},attrs:{elevation:"0"}},[e(h.a,{staticClass:"elevation-1",attrs:{"hide-default-footer":"",dense:"",headers:t.headers,items:t.data,loading:t.loading,options:t.options,"footer-props":{itemsPerPageOptions:[10,50,100,500,1e3]},"model-value":"data.id","server-items-length":t.totalRowsCount},on:{"update:options":function(e){t.options=e}},scopedSlots:t._u([{key:"item.sno",fn:function(e){var r=e.item;e.index;return[t._v("\n            "+t._s(t.currentPage?(t.currentPage-1)*t.perPage+(t.cumulativeIndex+t.data.indexOf(r)):"")+"\n          ")]}},{key:"item.visitor_first_name",fn:function(r){var n=r.item;return[e(j.a,{attrs:{"no-gutters":""}},[e(l.a,{staticStyle:{padding:"5px","padding-left":"0px","max-width":"50px"}},[e(v.a,{staticStyle:{"border-radius":"10%",height:"auto",width:"50px","max-width":"50px"},attrs:{src:n.visitor&&n.visitor.logo?n.visitor.logo:"/no-profile-image.jpg"}})],1),t._v(" "),e(l.a,{staticStyle:{padding:"10px"}},[e("strong",[t._v("\n                  "+t._s(n.visitor?n.visitor.first_name:"---")+"\n                  "+t._s(n.visitor?n.visitor.last_name:"---"))]),t._v(" "),e("div",{staticClass:"secondary-value"},[t._v("\n                  "+t._s(n.visitor?n.visitor.phone_number:"---")+"\n                ")]),t._v(" "),e("div",{staticClass:"secondary-value"},[t._v("\n                  "+t._s(n.visitor?n.visitor.email:"---")+"\n                ")])])],1)]}},{key:"item.branch_id",fn:function(e){var r=e.item;return[t._v("\n            "+t._s(r.branch&&r.branch.branch_name)+"\n          ")]}},{key:"item.purpose_id",fn:function(e){var r,n=e.item;return[t._v("\n            "+t._s(n.visitor&&(null===(r=n.visitor.purpose)||void 0===r?void 0:r.name))+"\n          ")]}},{key:"item.in",fn:function(r){var n=r.item;r.index;return[e("div",[t._v("\n              "+t._s(n.in?n.in:"---")+"\n              "),e("div",{staticClass:"secondary-value"},[t._v("\n                "+t._s(n.device_in_name?n.device_in_name.name:"---")+"\n              ")])])]}},{key:"item.out",fn:function(r){var n=r.item;r.index;return[e("div",[t._v("\n              "+t._s(n.out?n.out:"---")+"\n              "),e("div",{staticClass:"secondary-value"},[t._v("\n                "+t._s(n.device_out_name?n.device_out_name.name:"---")+"\n              ")])])]}},{key:"item.overstay",fn:function(r){var n=r.item;r.index;return[e("div",{style:n.over_stay?"color:red":" ;"},[t._v("\n              "+t._s(n.over_stay?n.over_stay:"---")+"\n            ")])]}},{key:"item.host_id",fn:function(r){var n,o,c,l=r.item;r.index;return[e("div",[t._v("\n              "+t._s(l.visitor.host?null===(n=l.visitor.host.employee)||void 0===n?void 0:n.first_name:"---")+"\n              "+t._s(l.visitor.host?null===(o=l.visitor.host.employee)||void 0===o?void 0:o.last_name:"---")+"\n            ")]),t._v(" "),e("div",{staticClass:"secondary-value"},[t._v("\n              "+t._s(l.visitor.host?null===(c=l.visitor.host.employee)||void 0===c?void 0:c.phone_number:"---")+"\n            ")])]}},{key:"item.options",fn:function(r){var o=r.item;return[e(x.a,{attrs:{bottom:"",left:""},scopedSlots:t._u([{key:"activator",fn:function(r){var o=r.on,c=r.attrs;return[e(n.a,t._g(t._b({attrs:{"dark-2":"",icon:""}},"v-btn",c,!1),o),[e(_.a,[t._v("mdi-dots-vertical")])],1)]}}],null,!0)},[t._v(" "),e(y.a,{attrs:{width:"150",dense:""}},[e(D.a,{on:{click:function(e){return t.viewItem(o)}}},[e(O.c,[e(_.a,{attrs:{small:""}},[t._v(" mdi-history ")]),t._v("\n                    Device Logs\n                  ")],1)],1)],1)],1)]}}])})],1)],1)],1),t._v(" "),e(j.a,{attrs:{justify:"center"}},[e(f.a,{attrs:{persistent:"","max-width":"600px"},model:{value:t.log_details,callback:function(e){t.log_details=e},expression:"log_details"}},[e(o.a,{staticClass:"darken-1"},[e(S.a,{staticClass:"popup_background",attrs:{dense:"",flat:""}},[e("span",{staticClass:"text-h5 pa-2"},[t._v("Log Details")]),t._v(" "),e(w.a),t._v(" "),e(w.a),t._v(" "),e(_.a,{on:{click:function(e){t.log_details=!1}}},[t._v("mdi-close-circle-outline")])],1),t._v(" "),e(c.b,[e("div",{staticClass:"pt-5"},[e(h.a,{staticClass:"elevation-1",attrs:{headers:t.log_headers,items:t.log_list,"hide-default-footer":""},scopedSlots:t._u([{key:"item.sno",fn:function(e){e.item;var r=e.index;return[t._v("\n                "+t._s(++r)+"\n              ")]}}])})],1)])],1)],1),t._v(" "),e(f.a,{attrs:{persistent:"","max-width":"500px"},model:{value:t.renderVisitorDialog,callback:function(e){t.renderVisitorDialog=e},expression:"renderVisitorDialog"}},[e(o.a,[e(c.c,{staticClass:"popup_background"},[e("span",{staticClass:"headline"},[t._v("Submit Data")]),t._v(" "),e(w.a),t._v(" "),e(n.a,{attrs:{"x-small":"",ripple:!1,text:"",title:"Add user"},on:{click:t.addUser}},[e(_.a,{attrs:{dark:""}},[t._v("mdi-plus-circle")])],1)],1),t._v(" "),e(c.b,[e(m.a,{on:{submit:function(e){return e.preventDefault(),t.submitData.apply(null,arguments)}}},[e(d.a,[e(j.a,[e(l.a,{attrs:{cols:"12"}},[e(I.a,{attrs:{label:"Date",required:""},model:{value:t.formData.date,callback:function(e){t.$set(t.formData,"date",e)},expression:"formData.date"}})],1),t._v(" "),e(l.a,{attrs:{cols:"12"}},t._l(t.users,(function(r,i){return e(j.a,{key:i},[e(l.a,{attrs:{cols:"10"}},[e(I.a,{attrs:{label:"User Id",required:""},model:{value:r.visitor_id,callback:function(e){t.$set(r,"visitor_id",e)},expression:"user.visitor_id"}})],1),t._v(" "),e(l.a,{attrs:{cols:"2"}},[e(_.a,{attrs:{color:"error"},on:{click:function(e){return t.removeUser(i)}}},[t._v("mdi-delete")])],1)],1)})),1)],1)],1)],1)],1),t._v(" "),e(c.a,[e(w.a),t._v(" "),e(n.a,{attrs:{small:"",color:"primary"},on:{click:t.submitData}},[t._v("Submit")]),t._v(" "),e(n.a,{attrs:{small:"",color:"gray"},on:{click:function(e){t.renderVisitorDialog=!1}}},[t._v("Cancel")])],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports},950:function(t,e,r){"use strict";r(908)},951:function(t,e,r){var n=r(21)((function(i){return i[1]}));n.push([t.i,".mx-input{border:1px solid #9e9e9e!important;color:#000!important}.mx-datepicker{width:200px}.mx-table-date td,.mx-table-date th{text-align:center!important}",""]),n.locals={},t.exports=n}}]);