(window.webpackJsonp=window.webpackJsonp||[]).push([[296],{1580:function(t,e,n){"use strict";n.r(e);var r=n(114),o=n(133),l=n(87),c=n(1185),d=n(516),h=n(1571),f=n(350),v=n(147),m=n(515),_=n(893),y=n(873),x=n(349),k=n(214),O=n(96),w=n(856),C=n(852),j=n(81),R=(n(35),n(23)),S=n(3);n(88),n(216),n(55),n(6),n(72),n(33),n(58),n(519),n(12),n(14),n(13),n(17),n(11),n(18);function P(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function F(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?P(Object(source),!0).forEach((function(e){Object(S.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):P(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var D={components:{},data:function(){var t;return t={branchesList:[],isCompany:!0,tableHeight:750,id:"",from_menu_filter:"",from_date_filter:"",showFilters:!1,filters:{},isFilter:!1,changeRequestDialog:!1,totalRowsCount:0,datatable_search_textbox:"",datatable_searchById:"",filter_employeeid:"",snack:!1,snackColor:"",snackText:"",departments:[],Model:"Log",endpoint:"change_request",from_date:null,from_menu:!1,to_date:null,to_menu:!1,payload:{},loading:!0,date:null,menu:!1},Object(S.a)(t,"loading",!1),Object(S.a)(t,"time_menu",!1),Object(S.a)(t,"log_payload",{user_id:41,device_id:"OX-8862021010100",date:null,time:null}),Object(S.a)(t,"headers",[{text:"EID",filterable:!0,field_type:"text",sortable:!1,value:"employee_device_id"},{text:"Request type",filterable:!0,field_type:"text",sortable:!1,value:"request_type"},{text:"From",sortable:!1,value:"from_date"},{text:"To",sortable:!1,value:"to_date"},{text:"Remarks",sortable:!1,value:"remarks"},{key:"status",text:"Status",sortable:!1,filterable:!0,field_type:"dropdown",value:"status"},{text:"Action",value:"action"}]),Object(S.a)(t,"ids",[]),Object(S.a)(t,"data",[]),Object(S.a)(t,"devices",[]),Object(S.a)(t,"total",0),Object(S.a)(t,"pagination",{current:1,total:0,itemsPerPage:1e3}),Object(S.a)(t,"payloadOptions",{}),Object(S.a)(t,"options",{current:1,total:0,itemsPerPage:10}),Object(S.a)(t,"errors",[]),Object(S.a)(t,"snackbar",!1),Object(S.a)(t,"branchesList",[]),Object(S.a)(t,"branch_id",""),Object(S.a)(t,"responseStatusColor",""),Object(S.a)(t,"response",""),t},computed:{},mounted:function(){var t=this;this.tableHeight=window.innerHeight-270,window.addEventListener("resize",(function(){t.tableHeight=window.innerHeight-270}))},created:function(){var t=this;return Object(R.a)(regeneratorRuntime.mark((function e(){var n,r,o,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.loading=!0,!t.$auth.user.branch_id){e.next=5;break}return t.branch_id=t.$auth.user.branch_id,t.isCompany=!1,e.abrupt("return");case 5:return r=[{field_type:"dropdown",text:"Branch",align:"left",sortable:!0,key:"branch_id",value:"employee.branch.branch_name",width:"300px",filterable:!0,filterSpecial:!0}],(n=t.headers).splice.apply(n,[0,0].concat(r)),e.prev=7,e.next=10,t.$axios.get("branches_list",{params:{per_page:100,company_id:t.$auth.user.company_id}});case 10:o=e.sent,data=o.data,t.branchesList=data,e.next=18;break;case 15:e.prev=15,e.t0=e.catch(7),console.error("Error fetching branch list",e.t0);case 18:t.getChangeRequests();case 19:case"end":return e.stop()}}),e,null,[[7,15]])})))()},watch:{options:{handler:function(){this.getChangeRequests()},deep:!0}},methods:{updateStatus:function(t){var e=this;this.$axios.post("update-change-request/"+t.id,t).then((function(t){t.data;e.snackbar=!0,e.responseStatusColor="green",e.response="Request has been updated succussfully.",setTimeout((function(){e.snackbar=!1,e.response="",e.responseStatusColor=""}),2e3)})).catch((function(t){var n=t.response;if(!n)return!1;var r=n.status,data=n.data,o=n.statusText;e.response=422==r?data.message:o,e.responseStatusColor="red"}))},getRelatedColor:function(t){return{P:"purple",R:"red",A:"green"}[t.status]},handleDatesFilter:function(t){t.length>1&&this.getChangeRequests(this.endpoint,"dates",t)},applyFilters:function(t,e){this.getRecords(t,e),this.from_menu_filter=!1,this.to_menu_filter=!1},toggleFilter:function(){this.isFilter=!this.isFilter},clearFilters:function(){this.filters={},this.isFilter=!1,this.getChangeRequests()},caps:function(t){return""==t||null==t?"---":t.toString().replace(/\b\w/g,(function(t){return t.toUpperCase()}))},getDate:function(){var t=new Date,e=t.getFullYear(),n=(t.getMonth()+1).toString().padStart(2,"0"),r=t.getDate().toString().padStart(2,"0");return"".concat(e,"-").concat(n,"-").concat(r)},can:function(t){return this.$pagePermission.can(t,this)},getRecords:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";if(this.filters={},""!=e&&e.length<=2&&"text"==t.field_type)return this.snack=!0,this.snackColor="error",this.snackText="Minimum 3 Characters to filter ",this.loading=!1,!1;this.getChangeRequests(this.endpoint,t.value,e)},getChangeRequests:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.endpoint,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",o=this.options,l=o.sortBy,c=o.sortDesc,d=o.page,h=o.itemsPerPage,f=l?l[0]:"",v=c?c[0]:"";this.payloadOptions={params:F(F({page:d,sortBy:f,sortDesc:v,per_page:h,company_id:this.$auth.user.company_id,branch_id:this.branch_id},this.payload),this.filters)},""!=n&&(this.payloadOptions.params[n]=r),this.loading=!0,this.$axios.get(e,this.payloadOptions).then((function(e){var data=e.data;t.data=data.data,t.total=data.total,t.loading=!1,t.totalRowsCount=data.total}))}}},$=D,A=n(116),component=Object(A.a)($,(function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"text-center ma-2"},[e(y.a,{attrs:{top:"top",color:"purple",elevation:"24"},model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v("\n      "+t._s(t.response)+"\n    ")])],1),t._v(" "),e(m.a,{attrs:{justify:"center"}},[e(f.a,{attrs:{"max-width":"700px"},model:{value:t.changeRequestDialog,callback:function(e){t.changeRequestDialog=e},expression:"changeRequestDialog"}},[e(o.a,[e(l.c,{staticClass:"popup_background",attrs:{dark:""}},[e("span",{attrs:{dense:""}},[t._v(" Change Request ")]),t._v(" "),e(x.a),t._v(" "),e(v.a,{attrs:{outlined:""},on:{click:function(e){t.changeRequestDialog=!1}}},[t._v("\n            mdi mdi-close-circle\n          ")])],1),t._v(" "),e(l.b,[e("ChangeRequest",{on:{reload:function(e){return t.getRecords()},"close-change-request-form":function(){return t.changeRequestDialog=!1}}})],1)],1)],1)],1),t._v(" "),e(m.a,[e(d.a,[e(o.a,{staticClass:"mt-2",attrs:{elevation:"0"}},[e(O.a,{staticClass:"mb-2 white--text",attrs:{color:"white",dense:"",flat:""}},[e(w.b,[e("span",{staticStyle:{color:"black"}},[t._v("\n              Change Requests")])]),t._v(" "),e(r.a,{staticClass:"ma-0 px-0",attrs:{title:"Reload",dense:"","x-small":"",ripple:!1,text:""},on:{click:t.getRecords}},[e(v.a,{staticClass:"ml-2",attrs:{dark:""}},[t._v("mdi mdi-reload")])],1),t._v(" "),e(C.a,{attrs:{top:"",color:"primary"},scopedSlots:t._u([{key:"activator",fn:function(n){n.on,n.attrs;return[e(r.a,{attrs:{title:"Filter","x-small":"",ripple:!1,text:""},on:{click:t.toggleFilter}},[e(v.a,{attrs:{dark:"",white:""}},[t._v("mdi-filter")])],1)]}}])},[t._v(" "),e("span",[t._v("Filter")])]),t._v(" "),e(x.a)],1),t._v(" "),e(y.a,{attrs:{timeout:3e3,color:t.snackColor},scopedSlots:t._u([{key:"action",fn:function(n){var o=n.attrs;return[e(r.a,t._b({attrs:{text:""},on:{click:function(e){t.snack=!1}}},"v-btn",o,!1),[t._v(" Close ")])]}}]),model:{value:t.snack,callback:function(e){t.snack=e},expression:"snack"}},[t._v("\n          "+t._s(t.snackText)+"\n\n          ")]),t._v(" "),e(h.a,{staticClass:"elevation-1",attrs:{dense:"",headers:t.headers,items:t.data,"model-value":"data.id",loading:t.loading,options:t.options,"footer-props":{itemsPerPageOptions:[10,50,100,500,1e3]},"server-items-length":t.totalRowsCount,"fixed-header":"",height:t.tableHeight,"disable-sort":!0},on:{"update:options":function(e){t.options=e}},scopedSlots:t._u([{key:"header",fn:function(n){var r=n.props.headers;return[t.isFilter?e("tr",t._l(r,(function(header){return e("td",{key:header.text},["branch_id"==header.key&&header.filterable&&"dropdown"==header.field_type?e(_.a,{staticClass:"mx-2",staticStyle:{width:"250px"},attrs:{outlined:"",autocomplete:"off",dense:"","hide-details":"",items:[{id:"",branch_name:"Select All"}].concat(Object(j.a)(t.branchesList)),"item-value":"id","item-text":"branch_name"},on:{input:function(e){return t.applyFilters(header,e)}},model:{value:t.branch_id,callback:function(e){t.branch_id=e},expression:"branch_id"}}):t._e(),t._v(" "),header.filterable&&"text"==header.field_type?e(k.a,{staticClass:"ma-2",staticStyle:{width:"250px"},attrs:{outlined:"",clearable:"",autocomplete:"off","hide-details":"",dense:""},on:{input:function(e){return t.applyFilters(header,e)}},model:{value:t.filters[header.value],callback:function(e){t.$set(t.filters,header.value,e)},expression:"filters[header.value]"}}):t._e(),t._v(" "),"status"==header.key&&header.filterable&&"dropdown"==header.field_type?e(_.a,{staticClass:"ma-2",staticStyle:{width:"250px"},attrs:{outlined:"",autocomplete:"off",dense:"","hide-details":"",items:[{text:"Select",value:""},{text:"Pending",value:"P"},{text:"Approved",value:"A"},{text:"Rejected",value:"R"}],"item-text":"text","item-value":"value"},on:{input:function(e){return t.applyFilters(header,e)}},model:{value:t.filters[header.value],callback:function(e){t.$set(t.filters,header.value,e)},expression:"filters[header.value]"}}):t._e()],1)})),0):t._e()]}},{key:"item.remarks",fn:function(n){var r=n.item;return[e("div",{staticStyle:{width:"250px"}},[t._v(t._s(r.remarks))])]}},{key:"item.status",fn:function(n){var r=n.item;return[e("div",{staticStyle:{width:"150px"}},["P"==r.status?e(c.a,{staticClass:"purple",attrs:{dark:"",small:""}},[t._v("New Request\n              ")]):"A"==r.status?e(c.a,{staticClass:"green",attrs:{dark:"",small:""}},[t._v("Approved")]):e(c.a,{staticClass:"red",attrs:{dark:"",small:""}},[t._v("Rejected")])],1)]}},{key:"item.action",fn:function(n){var r=n.item;return[e(_.a,{staticClass:"ma-2",staticStyle:{width:"175px"},attrs:{outlined:"",autocomplete:"off",dense:"","hide-details":"",items:[{text:"New Request",value:"P"},{text:"Approved",value:"A"},{text:"Rejected",value:"R"}],"item-text":"text","item-value":"value"},on:{change:function(e){return t.updateStatus(r)}},model:{value:r.status,callback:function(e){t.$set(r,"status",e)},expression:"item.status"}})]}}])})],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports},856:function(t,e,n){"use strict";n.d(e,"a",(function(){return c})),n.d(e,"b",(function(){return l}));var r=n(96),o=n(1),l=Object(o.k)("v-toolbar__title"),c=Object(o.k)("v-toolbar__items");r.a}}]);