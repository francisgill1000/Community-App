(window.webpackJsonp=window.webpackJsonp||[]).push([[297,191,201],{1060:function(t,e,n){var content=n(1140);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(22).default)("c502ff28",content,!0,{sourceMap:!1})},1139:function(t,e,n){"use strict";n(1060)},1140:function(t,e,n){var o=n(21)((function(i){return i[1]}));o.push([t.i,".employee-pic[data-v-14595700]{border:1px solid #ddd;margin-left:-3px;position:relative;top:0;transition:top 1s ease;width:30px;z-index:7}.employee-pic[data-v-14595700]:hover{border:2px solid #000;border-radius:50%;top:-6px;transition:top 1s ease;width:32px;z-index:9999}",""]),o.locals={},t.exports=o},1196:function(t,e,n){"use strict";n.r(e);var o=n(329),r=n(114),l=n(133),c=n(516),d=n(1571),m=n(147),f=n(212),_=n(326),v=n(204),h=n(60),y=n(863),k=n(515),x=n(873),O=n(349),w=n(96),j=n(856),F=(n(12),n(14),n(13),n(17),n(11),n(18),n(23)),D=n(3);n(519),n(6),n(72),n(55),n(88);function P(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function z(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?P(Object(source),!0).forEach((function(e){Object(D.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):P(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var C={data:function(){var t;return t={disabled:!1,tab:null,totalRowsCount:0,sortBy:"id",sortDesc:!1,loadinglinear:!0,displayErrormsg:!1,loading:!1,color:"background",response:"",options:{},Model:"Tenants",endpoint:"tanent-timezone-mapping",search:"",snackbar:!1,ids:[]},Object(D.a)(t,"loading",!1),Object(D.a)(t,"data",[]),Object(D.a)(t,"headers",[{text:"Full Name",align:"left",sortable:!1,key:"full_name",value:"full_name",filterable:!0,type:"text",width:"200px"},{text:"Member Type",align:"left",sortable:!1,key:"member_type",value:"member_type",filterable:!1,type:"text"},{text:"Floor No",align:"left",sortable:!0,key:"floor_number",value:"floor.floor_number",filterable:!0,type:"text"},{text:"Room No",align:"left",sortable:!0,key:"room_number",value:"room.room_number",filterable:!0,type:"text"},{text:"Category",align:"left",sortable:!0,key:"category",value:"room.room_category.name",filterable:!0,type:"text"},{text:"Details",align:"left",sortable:!1,key:"options",value:"options"}]),t},created:function(){var t=this;return Object(F.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.loading=!1,t.boilerplate=!0,t.getDataFromApi();case 3:case"end":return e.stop()}}),e)})))()},watch:{options:{handler:function(){this.getDataFromApi()},deep:!0}},methods:{generateRandomId:function(){return Math.floor(Math.random()*Math.pow(10,8)).toString().padStart(8,"0")},can:function(t){return this.$pagePermission.can(t,this)},applyFilters:function(){this.getDataFromApi()},toggleFilter:function(){this.isFilter=!this.isFilter},clearFilters:function(){this.filters={},this.isFilter=!1,this.getDataFromApi()},getDataFromApi:function(){var t=this;this.loadinglinear=!0;var e=this.options,n=e.sortBy,o=e.sortDesc,r=e.page,l=e.itemsPerPage,c={params:z({page:r,sortBy:n?n[0]:"",sortDesc:o?o[0]:"",per_page:l,company_id:this.$auth.user.company_id},this.filters)};this.$axios.get(this.endpoint,c).then((function(e){var data=e.data;t.data=data.data,t.totalRowsCount=data.total,0==t.data.length?t.displayErrormsg=!0:t.displayErrormsg=!1,t.loadinglinear=!1}))},close:function(){var t=this;this.dialog=!1,setTimeout((function(){t.editedItem=Object.assign({},t.defaultItem),t.editedIndex=-1}),300)},handleSuccessResponse:function(t){this.snackbar=!0,this.response=t,this.getDataFromApi()}}},S=n(116),component=Object(S.a)(C,(function(){var t=this,e=t._self._c;return t.can("tanent_access")?e("div",[e("div",{staticClass:"text-center ma-2"},[e(x.a,{attrs:{small:"",top:"top",color:t.color},model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v("\n      "+t._s(t.response)+"\n    ")])],1),t._v(" "),!t.loading&&t.can("tanent_view")?e("div",[e(w.a,{attrs:{dense:"",flat:""}},[e(j.b,[e("span",[t._v(t._s(t.Model))])]),t._v(" "),e("span",[e(r.a,{staticClass:"ma-0 px-0",attrs:{dense:"","x-small":"",ripple:!1,text:"",title:"Reload"}},[e(m.a,{staticClass:"ml-2",attrs:{dark:""},on:{click:t.clearFilters}},[t._v("mdi mdi-reload")])],1)],1),t._v(" "),e(O.a),t._v(" "),e("span",[e(m.a,{attrs:{right:"",color:"black"},on:{click:function(){return t.$router.push("/community/access_control/tenant-mapping/new")}}},[t._v("mdi-timetable")])],1)],1),t._v(" "),e(l.a,{attrs:{elevation:"1"}},[e(d.a,{staticClass:"elevation-1",attrs:{dense:"",headers:t.headers,items:t.data,"model-value":"data.id",loading:t.loadinglinear,options:t.options,"footer-props":{itemsPerPageOptions:[100,500,1e3]},"server-items-length":t.totalRowsCount},on:{"update:options":function(e){t.options=e}},scopedSlots:t._u([{key:"item.full_name",fn:function(n){var r,l=n.item;n.index;return[e(k.a,{attrs:{"no-gutters":""}},[e(c.a,{staticClass:"ma-2",attrs:{cols:"3"}},[e(o.a,[e(f.a,{attrs:{src:null!==(r=l.profile_picture)&&void 0!==r?r:"/no-profile-image.jpg"}})],1)],1),t._v(" "),e(c.a,{staticClass:"pt-2"},[e("strong",[t._v(" "+t._s(l.full_name))]),t._v(" "),e("p",[t._v("\n                "+t._s(l.phone_number)),l.phone_number?e("br"):t._e(),t._v(t._s(l.nationality)+"\n              ")])])],1)]}},{key:"item.options",fn:function(n){var o=n.item;return[e(y.a,{attrs:{bottom:"",left:""},scopedSlots:t._u([{key:"activator",fn:function(n){var o=n.on,l=n.attrs;return[e(r.a,t._g(t._b({attrs:{"dark-2":"",icon:""}},"v-btn",l,!1),o),[e(m.a,[t._v("mdi-dots-vertical")])],1)]}}],null,!0)},[t._v(" "),e(_.a,{attrs:{width:"150",dense:""}},[t.can("tanent_edit")?e(v.a,[e(h.c,{staticStyle:{cursor:"pointer"}},[e("TimezoneTanentDeleteMapping",{attrs:{item:o},on:{success:t.handleSuccessResponse}})],1)],1):t._e()],1)],1)]}}],null,!1,852166309)})],1)],1):e("Preloader")],1):t._e()}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{TimezoneTanentDeleteMapping:n(1268).default,Preloader:n(896).default})},1197:function(t,e,n){"use strict";n.r(e);var o=n(114),r=n(133),l=n(516),c=n(876),d=n(1571),m=n(147),f=n(212),_=n(326),v=n(204),h=n(60),y=n(863),k=n(515),x=n(873),O=n(349),w=n(214),j=n(96),F=n(856),D=(n(56),n(37),n(12),n(14),n(13),n(17),n(11),n(18),n(3));n(6),n(72),n(33),n(58),n(35);function P(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function z(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?P(Object(source),!0).forEach((function(e){Object(D.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):P(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var C={components:{Back:n(957).default},data:function(t){var e,n;return{showFilters:!1,filters:{},isFilter:!1,totalRowsCount:10,filter_employeeid:"",snack:!1,snackColor:"",snackText:"",datatable_search_textbox:"",total:0,options:{},data:[],name:"",endpoint:"gettimezonesinfo",Model:"Timezone Mapping List ",response:"",tableData:[],tableColumns:[],loading:!1,snackbar:!1,color:"black",pagination:{current:1,total:0,per_page:10},headers:[(e={text:"#",align:"left",sortable:!1,value:"sno"},Object(D.a)(e,"align","start"),Object(D.a)(e,"key","sno"),Object(D.a)(e,"value","sno"),e),(n={text:"Timezone Name",align:"left",sortable:!0},Object(D.a)(n,"align","start"),Object(D.a)(n,"key","timezoneName"),Object(D.a)(n,"filterable",!0),Object(D.a)(n,"filterSpecial",!1),Object(D.a)(n,"value","timezone.timezone_name"),n),{text:"Devices",align:"left",sortable:!1,value:"devices",filterable:!1,filterSpecial:!1,key:"device",placeHolder:"Type Device Name"},{text:"Employees",align:"left",sortable:!1,value:"employees",filterable:!1,key:"employees",placeHolder:"Type First Name"},{text:"Actions",value:"actions",sortable:!1}],branchesList:[],branch_id:""}},watch:{options:{handler:function(){this.getDataFromApi()},deep:!0}},created:function(){this.loading=!0},mounted:function(){this.getDataFromApi()},methods:{applyFilters:function(){this.getDataFromApi()},toggleFilter:function(){this.isFilter=!this.isFilter},clearFilters:function(){this.filters={},this.isFilter=!1,this.getDataFromApi()},caps:function(t){return""==t||null==t?"---":t.toString().replace(/\b\w/g,(function(t){return t.toUpperCase()}))},displayView:function(t){this.$router.push("/timezonemapping/"+t)},displayEdit:function(t){this.$router.push("/community/access_control/employee-mapping/"+t)},deleteItem:function(t,e){var n=this,o=this.$axios.defaults.baseURL+"/deletetimezone",r={timezone_id:e,id:t,company_id:this.$auth.user.company_id};confirm("Are you sure you want to delete this item?")&&this.$axios.post("".concat(o),r).then((function(t){var data=t.data;n.getDataFromApi(),data.status?(n.errors=[],n.snackbar=!0,n.response=data.message):n.errors=data.errors}))},getDataFromApi:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.endpoint,n=arguments.length>1?arguments[1]:void 0;this.data=[];var o=this.options,r=o.sortBy,l=o.sortDesc,c=o.page,d=o.itemsPerPage,m={params:z({page:c,sortBy:r?r[0]:"",sortDesc:l?l[0]:"",per_page:d,company_id:this.$auth.user.company_id,branch_id:this.branch_id,cols:["id","employee_id","display_name"]},this.filters)};""!=n&&(m.params.additional_params=n),this.loading=!0,this.$axios.get("".concat(e,"?page=").concat(c),m).then((function(e){var data=e.data;t.data=data.data,t.itemsPerPage=t.data.length,t.loading=!1}))},goToCreatePage:function(){this.$router.push("/community/access_control/employee-mapping/new")},can:function(t){return this.$pagePermission.can(t,this)}}},S=C,T=(n(1139),n(116)),component=Object(T.a)(S,(function(){var t=this,e=t._self._c;return t.can("timezone_mapping_access")?e("div",[e("div",{staticClass:"text-center ma-2"},[e(x.a,{attrs:{small:"",top:"top",color:t.color},model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v("\n      "+t._s(t.response)+"\n    ")])],1),t._v(" "),e(k.a,{staticClass:""},[e(l.a,{attrs:{cols:"12"}},[e(r.a,{staticClass:"mb-5 mt-2 rounded-md",attrs:{elevation:"0"}},[e(j.a,{staticClass:"rounded-md",attrs:{dense:"",flat:""}},[e(F.b,[e("span",[t._v(" "+t._s(t.Model)+" ")])]),t._v(" "),e("span",[e(o.a,{staticClass:"ma-0 px-0",attrs:{dense:"","x-small":"",ripple:!1,text:"",title:"Reload"}},[e(m.a,{staticClass:"ml-2",attrs:{dark:""},on:{click:function(e){return t.getDataFromApi()}}},[t._v("mdi mdi-reload")])],1)],1),t._v(" "),e("span",[e(o.a,{attrs:{"x-small":"",ripple:!1,text:"",title:"Filter"},on:{click:function(e){t.attendancFilters=!0}}},[e(m.a,{attrs:{dark:""},on:{click:t.toggleFilter}},[t._v("mdi-filter")])],1)],1),t._v(" "),e(O.a),t._v(" "),t.can("timezone_mapping_create")?e(o.a,{attrs:{color:"primary",title:"Add Timezone"},on:{click:function(e){return t.goToCreatePage()}}},[t._v("\n            Add Mapping\n          ")]):t._e()],1),t._v(" "),e(x.a,{attrs:{timeout:3e3,color:t.snackColor},scopedSlots:t._u([{key:"action",fn:function(n){var r=n.attrs;return[e(o.a,t._b({attrs:{text:""},on:{click:function(e){t.snack=!1}}},"v-btn",r,!1),[t._v(" Close ")])]}}],null,!1,3090489768),model:{value:t.snack,callback:function(e){t.snack=e},expression:"snack"}},[t._v("\n          "+t._s(t.snackText)+"\n\n          ")]),t._v(" "),e(d.a,{staticClass:"elevation-1",attrs:{dense:"",headers:t.headers,items:t.data,loading:t.loading,options:t.options,"footer-props":{itemsPerPageOptions:[100,500,1e3]},"server-items-length":t.totalRowsCount},on:{"update:options":function(e){t.options=e}},scopedSlots:t._u([{key:"header",fn:function(n){var o=n.props.headers;return[t.isFilter?e("tr",t._l(o,(function(header){return e("td",{key:header.text},[e(c.a,[header.filterable&&!header.filterSpecial?e(w.a,{attrs:{clearable:"","hide-details":!0,id:header.key,outlined:"",dense:"",autocomplete:"off",placeholder:header.placeHolder},on:{input:function(e){return t.applyFilters(header.key,e)}},model:{value:t.filters[header.key],callback:function(e){t.$set(t.filters,header.key,e)},expression:"filters[header.key]"}}):t._e()],1)],1)})),0):t._e()]}},{key:"item.sno",fn:function(n){n.item;var o=n.index;return[e("b",[t._v(t._s(++o))])]}},{key:"item.timezone.timezone_name",fn:function(e){var n=e.item;return[t._v("\n            "+t._s(n.timezone&&n.timezone.timezone_name)+"\n          ")]}},{key:"item.devices",fn:function(n){var r=n.item;return[t._l(r.device_id.slice(0,3),(function(n,o){return e("div",{key:o,staticClass:"d-flex flex-row bg-surface-variant"},[t._v("\n              "+t._s(t.caps(n.name))+"\n            ")])})),t._v(" "),r.device_id.length>3?e(o.a,{attrs:{small:"",warning:""},on:{click:function(e){return t.displayView(r.id)}}},[t._v("\n              All Devices\n            ")]):t._e()]}},{key:"item.employees",fn:function(n){var r=n.item;n.index;return[t._l(r.employee_id.slice(0,10),(function(n,o){return e(f.a,{key:"employeeimg"+o,staticClass:"employee-pic",staticStyle:{float:"left","border-radius":"50%",height:"auto"},attrs:{title:t.caps(n.first_name+" "+n.last_name),src:n.profile_picture?n.profile_picture:"/no-profile-image.jpg"}})})),t._v(" "),r.employee_id.length>10?e(o.a,{attrs:{small:"",warning:""},on:{click:function(e){return t.displayView(r.id)}}},[t._v("\n              All Employees\n            ")]):t._e()]}},{key:"item.actions",fn:function(n){var r=n.item;return[e(y.a,{staticStyle:{"background-color":"#fff !important"},attrs:{bottom:"",left:""},scopedSlots:t._u([{key:"activator",fn:function(n){var r=n.on,l=n.attrs;return[e(o.a,t._g(t._b({attrs:{"dark-2":"",icon:""}},"v-btn",l,!1),r),[e(m.a,[t._v("mdi-dots-vertical")])],1)]}}],null,!0)},[t._v(" "),e(_.a,{staticStyle:{"background-color":"#fff !important"},attrs:{width:"120",dense:""}},[e(v.a,{on:{click:function(e){return t.displayEdit(r.id)}}},[e(h.c,{staticStyle:{cursor:"pointer"}},[e(m.a,{attrs:{color:"secondary",small:""}},[t._v(" mdi-pencil ")]),t._v("\n                    Edit\n                  ")],1)],1),t._v(" "),t.can("timezone_mapping_delete")?e(v.a,{on:{click:function(e){return t.deleteItem(r.id,r.timezone_id)}}},[e(h.c,{staticStyle:{cursor:"pointer"}},[e(m.a,{attrs:{color:"error",small:""}},[t._v(" mdi-delete ")]),t._v("\n                    Delete\n                  ")],1)],1):t._e()],1)],1)]}}],null,!1,886083551)})],1)],1)],1)],1):t._e()}),[],!1,null,"14595700",null);e.default=component.exports},1683:function(t,e,n){"use strict";n.r(e);var o=n(853),r=n(855),l=n(854),c=(n(519),n(6),n(72),{data:function(){return{tab:null,companyId:0}},beforeRouteEnter:function(t,e,n){n((function(e){e.tab=parseInt(t.params.id)-1||0}))},created:function(){this.companyId=this.$auth.user.company_id},methods:{generateRandomId:function(){return Math.floor(Math.random()*Math.pow(10,8)).toString().padStart(8,"0")}}}),d=n(116),component=Object(d.a)(c,(function(){var t=this,e=t._self._c;return null!==t.tab?e(l.a,{attrs:{color:"deep-purple accent-4",right:""},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[e(o.a,[t._v("Timezone")]),t._v(" "),e(o.a,[t._v("Tenant Mapping")]),t._v(" "),e(o.a,[t._v("Employee Mapping")]),t._v(" "),e(r.a,[e("Timezone",{key:t.generateRandomId(),attrs:{id:t.companyId}})],1),t._v(" "),e(r.a,[e("TimezoneTanentMapping",{key:t.generateRandomId(),attrs:{id:t.companyId}})],1),t._v(" "),e(r.a,[e("TimezoneEmployeeMapping",{key:t.generateRandomId(),attrs:{id:t.companyId}})],1)],1):t._e()}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Timezone:n(1346).default,TimezoneTanentMapping:n(1196).default,TimezoneEmployeeMapping:n(1197).default})},896:function(t,e,n){"use strict";n.r(e);var o=n(212),r=n(116),component=Object(r.a)({},(function(){var t=this._self._c;return t("div",{staticClass:"text-center",staticStyle:{width:"50px",margin:"25% auto"}},[t(o.a,{attrs:{src:"/preloaders/1.gif"}})],1)}),[],!1,null,null,null);e.default=component.exports},957:function(t,e,n){"use strict";n.r(e);var o={props:["color"],methods:{goBack:function(){window.history.back()}}},r=n(116),component=Object(r.a)(o,(function(){return(0,this._self._c)("div")}),[],!1,null,null,null);e.default=component.exports}}]);