(window.webpackJsonp=window.webpackJsonp||[]).push([[369,186,233,234,236],{1009:function(e,t,n){"use strict";n.r(t);var o=n(221),r={props:["header","column"],date:function(){return{text:""}},methods:{handleChange:function(){this.$emit("entered-value",this.header)}}},l=n(60),component=Object(l.a)(r,(function(){var e=this,t=e._self._c;return e.header.key==e.column||"text"==e.header.type?t(o.a,{attrs:{placeholder:e.header.text,clearable:"","hide-details":!0,outlined:"",dense:"",autocomplete:"off"},on:{input:e.handleChange},model:{value:e.header.search_value,callback:function(t){e.$set(e.header,"search_value",t)},expression:"header.search_value"}}):e._e()}),[],!1,null,null,null);t.default=component.exports},1010:function(e,t,n){"use strict";n.r(t);var o=n(920),r=n(86),l=(n(37),{props:["header","column","items","disabled"],methods:{handleChange:function(){this.$emit("entered-value",this.header)}}}),c=n(60),component=Object(c.a)(l,(function(){var e=this,t=e._self._c;return t("div",[e.header.key==e.column||"dropdown"==e.header.type?t(o.a,{attrs:{placeholder:e.header.text,"hide-details":!0,outlined:"",dense:"","item-text":"name","item-value":"id",items:[{id:"",name:"All"}].concat(Object(r.a)(e.items)),solo:"",flat:"",disabled:e.disabled},on:{change:e.handleChange},model:{value:e.header.search_value,callback:function(t){e.$set(e.header,"search_value",t)},expression:"header.search_value"}}):e._e()],1)}),[],!1,null,null,null);t.default=component.exports},1077:function(e,t,n){"use strict";n.r(t);var o=n(117),r=n(138),l=n(1584),c=n(888),d=n(221),m=(n(59),n(120),n(366),new Date(Date.now()-6e4*(new Date).getTimezoneOffset())),h=new Date(m);h.setMonth(h.getMonth()+1);var f=m.toISOString().slice(0,10),v=h.toISOString().slice(0,10),_={props:["header","column","disabled"],data:function(){return{menu:!1,menu2:!1,showPicker:!0,startDates:[f],endDates:[v],finalDates:[],min:v}},computed:{datesLabel:function(){return this.finalDates.join(" ~ ")}},methods:{firstPicker:function(){this.startDates.sort((function(a,b){return a.localeCompare(b)})),this.endDates=[],this.finalDates=this.startDates,this.$emit("selected-dates",this.finalDates)},secondPicker:function(){this.endDates.sort((function(a,b){return a.localeCompare(b)}));var e=this.endDates.length?this.endDates[this.endDates.length-1]:this.startDates[this.startDates.length-1];this.finalDates=[this.startDates[0],e],this.startDates=this.finalDates,this.endDates=this.finalDates,this.$emit("selected-dates",this.finalDates),this.min=this.startDates[0]},clearDates:function(){this.clearStartDates(),this.clearEndDates()},clearStartDates:function(){this.finalDates=[],this.startDates=[]},clearEndDates:function(){this.finalDates=[],this.endDates=[]}}},y=n(60),component=Object(y.a)(_,(function(){var e=this,t=e._self._c;return e.header.key==e.column||"date_range_picker"==e.header.type?t(c.a,{ref:"menu",attrs:{"close-on-content-click":!1,transition:"scale-transition","offset-y":"","min-width":"auto",disabled:e.disabled},scopedSlots:e._u([{key:"activator",fn:function(n){var o=n.on;return[t(d.a,e._g({attrs:{"hide-details":!0,outlined:"",dense:"",readonly:"",placeholder:e.header.text},model:{value:e.datesLabel,callback:function(t){e.datesLabel=t},expression:"datesLabel"}},o))]}}],null,!1,3443285459),model:{value:e.menu,callback:function(t){e.menu=t},expression:"menu"}},[e._v(" "),t("div",{staticClass:"text-center",staticStyle:{padding:"0"}},[t(l.a,{attrs:{persistant:"","no-title":"",color:"primary",range:"",scrollable:""},on:{input:e.firstPicker},model:{value:e.startDates,callback:function(t){e.startDates=t},expression:"startDates"}}),e._v(" "),t(l.a,{attrs:{"no-title":"",color:"primary",range:"",min:e.min},on:{input:e.secondPicker},model:{value:e.endDates,callback:function(t){e.endDates=t},expression:"endDates"}}),e._v(" "),t(r.a,{staticClass:"text-right pa-2"},[t(o.a,{attrs:{dark:"",color:"background","x-small":""},on:{click:e.clearDates}},[e._v("\n        clear\n      ")]),e._v(" "),t(o.a,{attrs:{dark:"",color:"background","x-small":""},on:{click:function(t){e.menu=!1}}},[e._v("\n        close\n      ")]),e._v(" "),t(o.a,{attrs:{dark:"",color:"background","x-small":""},on:{click:function(t){return e.$refs.menu.save(e.secondPicker)}}},[e._v("\n        OK\n      ")])],1)],1)]):e._e()}),[],!1,null,null,null);t.default=component.exports},1641:function(e,t,n){"use strict";n.r(t);var o=n(921),r=n(117),l=n(138),c=n(79),d=n(541),m=n(539),h=n(903),f=n(1583),v=n(1584),_=n(361),y=n(889),I=n(116),x=n(336),D=n(211),k=n(338),S=n(10),O=n(888),C=n(538),j=n(920),$=n(900),w=n(360),A=n(221),P=n(99),E=n(886),F=n(276),T=(n(33),n(14),n(73),n(12),n(11),n(6),n(18),n(9),n(19),n(2)),L=(n(543),n(37),n(70),n(31),n(273),n(57),n(1077)),M=n(1009),z=n(1010),V=n(373);function B(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function N(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?B(Object(source),!0).forEach((function(t){Object(T.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):B(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var R={components:{DateRangePicker:L.default,TextField:M.default,DropDown:z.default,TiptapVuetify:V.p},data:function(){var e;return e={extensions:[V.g,V.a,V.r,V.o,V.j,V.l,V.c,V.m,[V.f,{options:{levels:[1,2,3]}}],V.b,V.n],items:[{text:"Real-Time",icon:"mdi-clock"},{text:"Audience",icon:"mdi-account"},{text:"Conversions",icon:"mdi-flag"}],branchesList:[],categories:[],totalRowsCount:0,from_menu_filter:"",from_date_filter:"",to_date_filter:"",to_menu_filter:"",showFilters:!1,filters:{},isFilter:!1,options:{},dialogEmployees:!1,idsEmployeeList:[],datatable_search_textbox:"",filter_employeeid:"",snack:!1,snackColor:"",snackText:"",scrollInvoked:0,start_menu:!1,end_menu:!1,title:"",des:"",desDate:"",dept:""},Object(T.a)(e,"options",{}),Object(T.a)(e,"Model","Announcement"),Object(T.a)(e,"endpoint","announcement"),Object(T.a)(e,"search",""),Object(T.a)(e,"snackbar",!1),Object(T.a)(e,"dialog",!1),Object(T.a)(e,"ids",[]),Object(T.a)(e,"departments",[]),Object(T.a)(e,"loading",!1),Object(T.a)(e,"total",0),Object(T.a)(e,"headers_Dialog",[{text:"Name",align:"left",sortable:!0,value:"first_name"},{text:"Employee Id",align:"left",sortable:!1,value:"employee_id"}]),Object(T.a)(e,"headers",[{text:"Title",align:"left",sortable:!0,key:"title",value:"title",fieldType:"text"}]),Object(T.a)(e,"editedIndex",-1),Object(T.a)(e,"editedItem",{title:"",description:"",departments:[],employees:[],start_date:null,end_date:null,category_id:null,branch_id:""}),Object(T.a)(e,"defaultItem",{title:"",description:"",departments:[],employees:[],start_date:null,end_date:null,category_id:null,branch_id:""}),Object(T.a)(e,"response",""),Object(T.a)(e,"headerText",""),Object(T.a)(e,"data",[]),Object(T.a)(e,"errors",[]),Object(T.a)(e,"options_dialog",{}),Object(T.a)(e,"employees_dialog",[]),Object(T.a)(e,"selectAllDepartment",!1),Object(T.a)(e,"selectAllEmployee",!1),Object(T.a)(e,"DialogEmployeesData",{}),Object(T.a)(e,"employees",[]),Object(T.a)(e,"active_el",""),Object(T.a)(e,"selectedItem",null),e},computed:{formTitle:function(){return-1===this.editedIndex?"New":"Edit"},getCurrentDate:function(){var e=new Date,t=e.getFullYear(),n=String(e.getMonth()+1).padStart(2,"0"),o=String(e.getDate()).padStart(2,"0");return"".concat(t,"-").concat(n,"-").concat(o)},isIndeterminateDepartment:function(){return this.editedItem.departments.length>0&&this.editedItem.departments.length<this.departments.length},isIndeterminateEmployee:function(){return this.editedItem.employees.length>0&&this.editedItem.employees.length<this.employees_dialog.length}},watch:{selectAllDepartment:function(e){e?(this.editedItem.departments=this.departments.map((function(e){return e.id})),this.employeesByDepartment()):(this.editedItem.departments=[],this.getEmployees())},selectAllEmployee:function(e){this.editedItem.employees=e?this.employees_dialog.map((function(e){return e.id})):[]},dialog:function(e){e||this.close(),this.errors=[],this.search=""},options:{handler:function(){this.getDataFromApi()},deep:!0}},created:function(){this.loading=!0,this.getDataFromApi()},methods:{showContent:function(e){this.active_el=e.id,this.selectedItem=e},getPriorityColor:function(e){return null==e?"":"Urgent"==e.name?"color:#F44336":"Informational"==e.name?"color:#3F51B5":"Meeting"==e.name?"color:#FF5722":"Priority"==e.name?"color:#4CAF50":"Low Priority"==e.name?"color:#000000":void 0},getbranchesList:function(){var e=this;this.payloadOptions={params:{company_id:this.$auth.user.company_id}},this.$axios.get("branches_list",this.payloadOptions).then((function(t){var data=t.data;e.branchesList=data,e.$auth.user.branch_id?e.branch_id=e.$auth.user.branch_id:(e.branch_id="",e.getDepartments())}))},handleFilter:function(e){var t=e.key,n=e.search_value;this.getDataFromApi(this.endpoint,t,n)},handleDatesFilter:function(e){e.length>1&&this.getDataFromApi(this.endpoint,"dates",e)},gotoDialogPage:function(e){this.DialogEmployeesData=e.employees,this.dialogEmployees=!0},datatable_save:function(){},datatable_cancel:function(){this.datatable_search_textbox=""},datatable_open:function(){this.datatable_search_textbox=""},datatable_close:function(){this.loading=!1},toggleDepartmentSelection:function(){this.selectAllDepartment=!this.selectAllDepartment},toggleEmployeeSelection:function(){this.selectAllEmployee=!this.selectAllEmployee},can:function(e){return this.$pagePermission.can(e,this)},onScroll:function(){this.scrollInvoked++},getDepartments:function(){var e=this;this.getCategories();var t={params:{per_page:1e3,company_id:this.$auth.user.company_id,branch_id:this.editedItem.branch_id}};this.$axios.get("departments",t).then((function(t){var data=t.data;e.departments=data.data,e.editItemId>-1?e.employeesByDepartment():e.toggleDepartmentSelection()}))},employeesByDepartment:function(){var e=this;this.loading_dialog=!0;var t=this.options_dialog,n=t.page,o=t.itemsPerPage,r={params:{department_ids:this.editedItem.departments,per_page:o,page:n,company_id:this.$auth.user.company_id}};this.employees_dialog=[],this.editedItem.departments.length?this.$axios.get("employeesByDepartmentForAnnoucements",r).then((function(t){var data=t.data;e.employees_dialog=data.data,e.loading_dialog=!1,e.toggleEmployeeSelection()})):this.getEmployees()},toggleFilter:function(){this.isFilter=!this.isFilter},clearFilters:function(){this.filters={},this.isFilter=!1,this.getDataFromApi()},getDataFromApi:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.endpoint,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";""==t&&(t=this.endpoint),this.loading=!0;var r=this.options,l=r.sortBy,c=r.sortDesc,d=r.page,m=r.itemsPerPage,h={params:N({page:d,sortBy:l?l[0]:"",sortDesc:c?c[0]:"",per_page:m,company_id:this.$auth.user.company_id},this.filters)};""!=n&&(h.params[n]=o),this.$axios.get("employee-announcements/".concat(this.$auth.user.employee.id),h).then((function(t){var data=t.data;data.data[0]&&e.showContent(data.data[0]),e.totalRowsCount=e.total=data.total,e.data=data.data,e.loading=!1}))},searchIt:function(e){0==e.length?this.getDataFromApi():e.length>2&&this.getDataFromApi("".concat(this.endpoint,"/search/").concat(e))},editItem:function(){var e=this.selectedItem;this.editedIndex=this.data.indexOf(e),this.editedItem=Object.assign({},e),this.dialog=!0,this.editedItem.departments=e.departments.map((function(e){return e.id})),this.editedItem.employees=e.employees.map((function(e){return e.id})),this.getbranchesList()},delteteSelectedRecords:function(){var e=this;confirm("Are you sure you wish to delete selected records , to mitigate any inconvenience in future.")&&this.$axios.post("".concat(this.endpoint,"/delete/selected"),{ids:this.ids.map((function(e){return e.id}))}).then((function(t){var data=t.data;data.status?(e.snackbar=data.status,e.ids=[],e.response="Selected records has been deleted"):e.errors=data.errors,e.getDataFromApi()})).catch((function(e){return console.log(e)}))},deleteItem:function(e){var t=this;confirm("Are you sure you wish to delete , to mitigate any inconvenience in future.")&&this.$axios.delete(this.endpoint+"/"+e.id).then((function(e){var data=e.data;data.status?(t.getDataFromApi(),t.snackbar=data.status,t.response=data.message):t.errors=data.errors})).catch((function(e){return console.log(e)}))},close:function(){var e=this;this.dialog=!1,setTimeout((function(){e.editedItem=Object.assign({},e.defaultItem),e.editedIndex=-1}),300)},getCategories:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"announcements_category";this.categories=[],this.loading=!0;var n=this.options,o={params:{page:n.page,per_page:n.itemsPerPage,company_id:this.$auth.user.company_id}};this.$axios.get(t,o).then((function(t){var data=t.data;e.categories=data.data,e.loading=!1}))},getUserDetails:function(e){return null==e?"---":e.user&&"company"==e.user.user_type?e.user.name:e.user&&"employee"==e.user.user_type?e.user.employee.first_name+" "+e.user.employee.last_name:void 0},getEmployees:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"employee";this.loading=!0;var n=this.options,o={params:{page:n.page,per_page:n.itemsPerPage,company_id:this.$auth.user.company_id}};this.$axios.get(t,o).then((function(t){var data=t.data;e.employees_dialog=data.data,e.loading=!1}))},save:function(){var e=this;this.editedItem.company_id=this.$auth.user.company_id,this.editedItem.user_id=this.$auth.user.id,this.editedIndex>-1?this.$axios.put(this.endpoint+"/"+this.editedItem.id,this.editedItem).then((function(t){var data=t.data;data.status?(e.getDataFromApi(),e.snackbar=data.status,e.response=data.message,e.close()):e.errors=data.errors})).catch((function(e){return console.log(e)})):this.$axios.post(this.endpoint,this.editedItem).then((function(t){var data=t.data;data.status?(e.getDataFromApi(),e.snackbar=data.status,e.response=data.message,e.close(),e.errors=[],e.search=""):e.errors=data.errors})).catch((function(e){return console.log(e)}))}}},K=R,U=n(60),component=Object(U.a)(K,(function(){var e=this,t=e._self._c;return e.can("announcement_access")?t("div",[t("div",{staticClass:"text-center ma-2"},[t($.a,{attrs:{top:"top",color:"secondary",elevation:"24"},model:{value:e.snackbar,callback:function(t){e.snackbar=t},expression:"snackbar"}},[e._v("\n      "+e._s(e.response)+"\n    ")])],1),e._v(" "),t(_.a,{key:e.editedIndex,attrs:{persistent:"","max-width":"60%"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[t(l.a,[t(c.d,{staticClass:"popup_background",attrs:{dense:""}},[e._v("\n        "+e._s(e.formTitle)+" "+e._s(e.Model)+"\n        "),t(w.a),e._v(" "),t(I.a,{attrs:{outlined:"",dark:""},on:{click:function(t){e.dialog=!1}}},[e._v("\n          mdi mdi-close-circle\n        ")])],1),e._v(" "),t(c.c,[t(h.a,[t(C.a,[t(m.a,{attrs:{cols:"4"}},[t("label",{attrs:{for:""}},[e._v("Title")]),e._v(" "),t(A.a,{attrs:{dense:"",outlined:"",placeholder:"Title","error-messages":e.errors&&e.errors.title?e.errors.title[0]:""},model:{value:e.editedItem.title,callback:function(t){e.$set(e.editedItem,"title",t)},expression:"editedItem.title"}})],1),e._v(" "),t(m.a,{attrs:{cols:"4"}},[t("label",{attrs:{for:""}},[e._v("Branch")]),e._v(" "),t(j.a,{attrs:{items:e.branchesList,dense:"",placeholder:"Branch",outlined:"","item-value":"id","item-text":"branch_name",error:e.errors.branch_id,"error-messages":e.errors&&e.errors.branch_id?e.errors.branch_id[0]:""},on:{change:function(t){return e.getDepartments()}},model:{value:e.editedItem.branch_id,callback:function(t){e.$set(e.editedItem,"branch_id",t)},expression:"editedItem.branch_id"}})],1),e._v(" "),t(m.a,{attrs:{cols:"4"}},[t("label",{attrs:{for:""}},[e._v("Department")]),e._v(" "),t(o.a,{staticClass:"announcement-dropdown1",attrs:{outlined:"",dense:"",items:e.departments,multiple:"","item-text":"name","item-value":"id",placeholder:"Departments","error-messages":e.errors&&e.errors.departments?e.errors.departments[0]:""},on:{change:e.employeesByDepartment},scopedSlots:e._u([e.departments.length?{key:"prepend-item",fn:function(){return[t(D.a,{on:{click:e.toggleDepartmentSelection}},[t(k.a,[t(d.a,{attrs:{indeterminate:e.isIndeterminateDepartment,"true-value":!0,"false-value":!1},on:{click:e.toggleDepartmentSelection},model:{value:e.selectAllDepartment,callback:function(t){e.selectAllDepartment=t},expression:"selectAllDepartment"}})],1),e._v(" "),t(S.a,[t(S.c,[e._v("\n                        "+e._s(e.selectAllDepartment?"Unselect All":"Select All")+"\n                      ")])],1)],1)]},proxy:!0}:null,{key:"selection",fn:function(n){var o=n.item,r=n.index;return[0===r&&1==e.editedItem.departments.length?t("span",[e._v(e._s(o.name))]):1===r&&e.editedItem.departments.length==e.departments.length?t("span",{staticClass:""},[e._v("\n                    All Selected\n                  ")]):1===r?t("span",{staticClass:""},[e._v("\n                    Selected "+e._s(e.editedItem.departments.length)+" Department(s)\n                  ")]):e._e()]}}],null,!0),model:{value:e.editedItem.departments,callback:function(t){e.$set(e.editedItem,"departments",t)},expression:"editedItem.departments"}})],1),e._v(" "),t(m.a,{attrs:{cols:"4"}},[t("label",{attrs:{for:""}},[e._v("Employee")]),e._v(" "),t(o.a,{staticClass:"announcement-dropdown1",attrs:{outlined:"",dense:"",items:e.employees_dialog,multiple:"","item-text":"name_with_user_id","item-value":"id",placeholder:"Employees","error-messages":e.errors&&e.errors.employees?e.errors.employees[0]:"",color:"background"},scopedSlots:e._u([e.employees_dialog.length?{key:"prepend-item",fn:function(){return[t(D.a,{on:{click:e.toggleEmployeeSelection}},[t(k.a,[t(d.a,{attrs:{indeterminate:e.isIndeterminateEmployee,"true-value":!0,"false-value":!1},on:{click:e.toggleEmployeeSelection},model:{value:e.selectAllEmployee,callback:function(t){e.selectAllEmployee=t},expression:"selectAllEmployee"}})],1),e._v(" "),t(S.a,[t(S.c,[e._v("\n                        "+e._s(e.selectAllEmployee?"Unselect All":"Select All")+"\n                      ")])],1)],1)]},proxy:!0}:null,{key:"selection",fn:function(n){var o=n.item,r=n.index;return[0===r&&1==e.editedItem.employees.length?t("span",[e._v(e._s(o.first_name)+" "+e._s(o.last_name))]):1===r&&e.editedItem.employees.length==e.employees_dialog.length?t("span",{staticClass:""},[e._v("\n                    All Selected\n                  ")]):1===r?t("span",{staticClass:""},[e._v("\n                    Selected "+e._s(e.editedItem.employees.length)+" Employee(s)\n                  ")]):e._e()]}}],null,!0),model:{value:e.editedItem.employees,callback:function(t){e.$set(e.editedItem,"employees",t)},expression:"editedItem.employees"}})],1),e._v(" "),t(m.a,{attrs:{cols:"4"}},[t(O.a,{ref:"from_menu",attrs:{"close-on-content-click":!1,"return-value":e.editedItem.start_date,transition:"scale-transition","offset-y":"","min-width":"auto"},on:{"update:returnValue":function(t){return e.$set(e.editedItem,"start_date",t)},"update:return-value":function(t){return e.$set(e.editedItem,"start_date",t)}},scopedSlots:e._u([{key:"activator",fn:function(n){var o=n.on,r=n.attrs;return[t("div",{staticClass:"mb-1"},[e._v("Start Date")]),e._v(" "),t(A.a,e._g(e._b({attrs:{outlined:"",dense:"",readonly:"","error-messages":e.errors&&e.errors.start_date?e.errors.start_date[0]:""},model:{value:e.editedItem.start_date,callback:function(t){e.$set(e.editedItem,"start_date",t)},expression:"editedItem.start_date"}},"v-text-field",r,!1),o))]}}],null,!1,1178926747),model:{value:e.start_menu,callback:function(t){e.start_menu=t},expression:"start_menu"}},[e._v(" "),t(v.a,{attrs:{"no-title":"",scrollable:""},model:{value:e.editedItem.start_date,callback:function(t){e.$set(e.editedItem,"start_date",t)},expression:"editedItem.start_date"}},[t(w.a),e._v(" "),t(r.a,{attrs:{text:"",color:"primary"},on:{click:function(t){e.from_menu=!1}}},[e._v("\n                    Cancel\n                  ")]),e._v(" "),t(r.a,{attrs:{text:"",color:"primary"},on:{click:function(t){return e.$refs.from_menu.save(e.editedItem.start_date)}}},[e._v("\n                    OK\n                  ")])],1)],1)],1),e._v(" "),t(m.a,{attrs:{cols:"4"}},[t(O.a,{ref:"end_menu",attrs:{"close-on-content-click":!1,"return-value":e.editedItem.end_date,transition:"scale-transition","offset-y":"","min-width":"auto"},on:{"update:returnValue":function(t){return e.$set(e.editedItem,"end_date",t)},"update:return-value":function(t){return e.$set(e.editedItem,"end_date",t)}},scopedSlots:e._u([{key:"activator",fn:function(n){var o=n.on,r=n.attrs;return[t("div",{staticClass:"mb-1"},[e._v("End Date")]),e._v(" "),t(A.a,e._g(e._b({attrs:{outlined:"",dense:"",readonly:"","error-messages":e.errors&&e.errors.end_date?e.errors.end_date[0]:""},model:{value:e.editedItem.end_date,callback:function(t){e.$set(e.editedItem,"end_date",t)},expression:"editedItem.end_date"}},"v-text-field",r,!1),o))]}}],null,!1,3363844155),model:{value:e.end_menu,callback:function(t){e.end_menu=t},expression:"end_menu"}},[e._v(" "),t(v.a,{attrs:{min:e.editedItem.start_date,"no-title":"",scrollable:""},model:{value:e.editedItem.end_date,callback:function(t){e.$set(e.editedItem,"end_date",t)},expression:"editedItem.end_date"}},[t(w.a),e._v(" "),t(r.a,{attrs:{text:"",color:"primary"},on:{click:function(t){e.end_menu=!1}}},[e._v("\n                    Cancel\n                  ")]),e._v(" "),t(r.a,{attrs:{text:"",color:"primary"},on:{click:function(t){return e.$refs.end_menu.save(e.editedItem.end_date)}}},[e._v("\n                    OK\n                  ")])],1)],1)],1),e._v(" "),t(m.a,[t("label",{attrs:{for:""}},[e._v("Category")]),e._v(" "),t(j.a,{attrs:{dense:"",outlined:"",items:e.categories,"item-value":"id","item-text":"name","error-messages":e.errors&&e.errors.category_id?e.errors.category_id[0]:""},model:{value:e.editedItem.category_id,callback:function(t){e.$set(e.editedItem,"category_id",t)},expression:"editedItem.category_id"}})],1),e._v(" "),t(m.a,{attrs:{cols:"12"}},[t("ClientOnly",{scopedSlots:e._u([{key:"placeholder",fn:function(){return[e._v(" Loading... ")]},proxy:!0}],null,!1,669632662)},[t("tiptap-vuetify",{directives:[{def:F.b,name:"scroll",rawName:"v-scroll.self",value:e.onScroll,expression:"onScroll",modifiers:{self:!0}}],staticClass:"tiptap-icon",attrs:{extensions:e.extensions,"max-height":"400","toolbar-attributes":{color:"background red--text"}},model:{value:e.editedItem.description,callback:function(t){e.$set(e.editedItem,"description",t)},expression:"editedItem.description"}})],1)],1)],1)],1)],1),e._v(" "),t(c.a,[t(w.a),e._v(" "),t(r.a,{staticClass:"primary",attrs:{small:""},on:{click:e.save}},[e._v("Save")])],1)],1)],1),e._v(" "),t(_.a,{attrs:{persistent:"","max-width":"60%"},model:{value:e.dialogEmployees,callback:function(t){e.dialogEmployees=t},expression:"dialogEmployees"}},[t(l.a,[t(c.d,{staticClass:"popup_background",attrs:{dense:""}},[e._v("\n        Employees List\n        "),t(w.a),e._v(" "),t(I.a,{attrs:{outlined:"",dark:""},on:{click:function(t){e.dialogEmployees=!1}}},[e._v("\n          mdi mdi-close-circle\n        ")])],1),e._v(" "),t(c.c,[t(h.a,[t(C.a,[t(f.a,{staticClass:"elevation-1",attrs:{"item-key":"id",headers:e.headers_Dialog,items:e.DialogEmployeesData,loading:e.loading,"footer-props":{itemsPerPageOptions:[10,50,100,500,1e3]}},scopedSlots:e._u([{key:"item.first_name",fn:function(t){var n=t.item;return[e._v("\n                "+e._s(n.first_name?n.first_name:"---")+"\n                "+e._s(n.last_name)+"\n              ")]}},{key:"item.employeeId",fn:function(t){var n=t.item;return[e._v("\n                "+e._s(n.employee_id)+"\n              ")]}}],null,!1,4148908657),model:{value:e.idsEmployeeList,callback:function(t){e.idsEmployeeList=t},expression:"idsEmployeeList"}})],1)],1)],1)],1)],1),e._v(" "),t(C.a,[t(m.a,{attrs:{md:"12"}},[t(l.a,{staticClass:"mb-5 mt-2 rounded-md",attrs:{elevation:"0"}},[t($.a,{attrs:{timeout:3e3,color:e.snackColor},scopedSlots:e._u([{key:"action",fn:function(n){var o=n.attrs;return[t(r.a,e._b({attrs:{text:""},on:{click:function(t){e.snack=!1}}},"v-btn",o,!1),[e._v(" Close ")])]}}],null,!1,3090489768),model:{value:e.snack,callback:function(t){e.snack=t},expression:"snack"}},[e._v("\n          "+e._s(e.snackText)+"\n\n          ")]),e._v(" "),t(C.a,[t(m.a,{attrs:{md:"3"}},[t(l.a,{attrs:{"min-height":"700"}},[t(P.a,{staticStyle:{height:"45px"},attrs:{color:"violet",dark:""}},[t(E.b,{staticStyle:{height:"50px"}},[e._v("Announcements")]),e._v(" "),t(w.a)],1),e._v(" "),t(x.a,[e.can("announcement_view")?t(f.a,{staticClass:"elevation-0 annnouncment_table",attrs:{"item-key":"id",headers:e.headers,items:e.data,loading:e.loading,options:e.options,"footer-props":{itemsPerPageOptions:[10,50,100,500,1e3]},"server-items-length":e.totalRowsCount,"hide-default-header":""},on:{"update:options":function(t){e.options=t}},scopedSlots:e._u([{key:"item.title",fn:function(n){var o=n.item,r=n.index;return[t(m.a,{class:{table_active:e.active_el==o.id},attrs:{md:"12",sm:"12",xs:"12",cols:"12"},on:{click:function(t){return e.showContent(o)}}},[t("div",{staticClass:"breakthewords11111"},[e._v("\n                        "+e._s(++r)+": "+e._s(o.title)+"\n                      ")]),e._v(" "),t(C.a,{staticClass:"pt-2"},[t(m.a,{attrs:{cols:"8"}},[t("div",{staticStyle:{color:"grey","font-size":"12px"}},[e._v("\n                            Posted:\n                            "+e._s(e.$dateFormat.format4(o.updated_at))+"\n                          ")])]),e._v(" "),t(m.a,{staticClass:"text-right",staticStyle:{"font-size":"12px"},attrs:{cols:"4"}},[t("span",{style:e.getPriorityColor(o.category)},[e._v(e._s(o.category&&o.category.name))])])],1)],1)]}}],null,!1,2843384226),model:{value:e.ids,callback:function(t){e.ids=t},expression:"ids"}}):e._e()],1)],1)],1),e._v(" "),t(m.a,{attrs:{md:"9"}},[t(l.a,{attrs:{"min-height":"700"}},[t(P.a,{staticClass:"popup_background",staticStyle:{height:"40px"},attrs:{dark:""}},[t(E.b,{staticStyle:{height:"50px"}},[e._v(e._s(e.selectedItem&&e.selectedItem.title))]),e._v(" "),t(w.a),e._v(" "),t("div",{staticStyle:{height:"50px","font-size":"12px"}},[e._v("\n                  Posted:\n                  "+e._s(e.selectedItem&&e.$dateFormat.format4(e.selectedItem.updated_at))+"\n                ")])],1),e._v(" "),t(c.c,[e.selectedItem?t("div",{staticClass:"announ_priority",style:" font-size:20px;"+e.getPriorityColor(e.selectedItem.category)},[e._v("\n                  "+e._s(e.selectedItem.category&&e.selectedItem.category.name)+"\n                ")]):e._e(),e._v(" "),e.selectedItem?t("div",{domProps:{innerHTML:e._s(e.selectedItem.description)}}):e._e(),e._v(" "),t(y.a,{staticClass:"pa-5"}),e._v(" "),e.selectedItem?t("div",{staticClass:"text-green bold",staticStyle:{color:"green"}},[e._v("\n                  Start Date: "+e._s(e.selectedItem&&e.selectedItem.start_date)+"\n                ")]):e._e(),e._v(" "),e.selectedItem?t("div",{staticClass:"text-red bold",staticStyle:{color:"red"}},[e._v("\n                  End Date: "+e._s(e.selectedItem&&e.selectedItem.end_date)+"\n                ")]):e._e()],1)],1)],1)],1)],1)],1)],1)],1):t("NoAccess")}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{NoAccess:n(909).default})},886:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return l}));var o=n(99),r=n(1),l=Object(r.k)("v-toolbar__title"),c=Object(r.k)("v-toolbar__items");o.a},909:function(e,t,n){"use strict";n.r(t);var o=n(60),component=Object(o.a)({},(function(){this._self._c;return this._m(0)}),[function(){var e=this._self._c;return e("div",{staticClass:"text-center",staticStyle:{"margin-top":"25%"}},[e("b",[this._v("No Access")])])}],!1,null,null,null);t.default=component.exports},912:function(e,t,n){var content=n(913);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(21).default)("1377ef10",content,!0,{sourceMap:!1})},913:function(e,t,n){var o=n(20)((function(i){return i[1]}));o.push([e.i,".v-autocomplete.v-input>.v-input__control>.v-input__slot{cursor:text}.v-autocomplete input{align-self:center}.v-autocomplete.v-select.v-input--is-focused input{min-width:64px}.v-autocomplete:not(.v-input--is-focused).v-select--chips input{max-height:0;padding:0}.v-autocomplete--is-selecting-index input{opacity:0}.v-autocomplete.v-text-field--enclosed:not(.v-text-field--solo):not(.v-text-field--single-line):not(.v-text-field--outlined) .v-select__slot>input{margin-top:24px}.v-autocomplete.v-text-field--enclosed:not(.v-text-field--solo):not(.v-text-field--single-line):not(.v-text-field--outlined).v-input--dense .v-select__slot>input{margin-top:20px}.v-autocomplete__content.v-menu__content,.v-autocomplete__content.v-menu__content .v-card{border-radius:0}",""]),o.locals={},e.exports=o},921:function(e,t,n){"use strict";n(12),n(14),n(18),n(9),n(19);var o=n(2),r=(n(70),n(6),n(11),n(92),n(103),n(223),n(41),n(61),n(912),n(920)),l=n(221),c=n(71),d=n(1);function m(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function h(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var f=h(h({},r.b),{},{offsetY:!0,offsetOverflow:!0,transition:!1});t.a=r.a.extend({name:"v-autocomplete",props:{autoSelectFirst:{type:Boolean,default:!1},filter:{type:Function,default:function(e,t,n){return n.toLocaleLowerCase().indexOf(t.toLocaleLowerCase())>-1}},hideNoData:Boolean,menuProps:{type:r.a.options.props.menuProps.type,default:function(){return f}},noFilter:Boolean,searchInput:{type:String}},data:function(){return{lazySearch:this.searchInput}},computed:{classes:function(){return h(h({},r.a.options.computed.classes.call(this)),{},{"v-autocomplete":!0,"v-autocomplete--is-selecting-index":this.selectedIndex>-1})},computedItems:function(){return this.filteredItems},selectedValues:function(){var e=this;return this.selectedItems.map((function(t){return e.getValue(t)}))},hasDisplayedItems:function(){var e=this;return this.hideSelected?this.filteredItems.some((function(t){return!e.hasItem(t)})):this.filteredItems.length>0},currentRange:function(){return null==this.selectedItem?0:String(this.getText(this.selectedItem)).length},filteredItems:function(){var e=this;return!this.isSearching||this.noFilter||null==this.internalSearch?this.allItems:this.allItems.filter((function(t){var n=Object(d.s)(t,e.itemText),text=null!=n?String(n):"";return e.filter(t,String(e.internalSearch),text)}))},internalSearch:{get:function(){return this.lazySearch},set:function(e){this.lazySearch!==e&&(this.lazySearch=e,this.$emit("update:search-input",e))}},isAnyValueAllowed:function(){return!1},isDirty:function(){return this.searchIsDirty||this.selectedItems.length>0},isSearching:function(){return this.multiple&&this.searchIsDirty||this.searchIsDirty&&this.internalSearch!==this.getText(this.selectedItem)},menuCanShow:function(){return!!this.isFocused&&(this.hasDisplayedItems||!this.hideNoData)},$_menuProps:function(){var e=r.a.options.computed.$_menuProps.call(this);return e.contentClass="v-autocomplete__content ".concat(e.contentClass||"").trim(),h(h({},f),e)},searchIsDirty:function(){return null!=this.internalSearch&&""!==this.internalSearch},selectedItem:function(){var e=this;return this.multiple?null:this.selectedItems.find((function(i){return e.valueComparator(e.getValue(i),e.getValue(e.internalValue))}))},listData:function(){var data=r.a.options.computed.listData.call(this);return data.props=h(h({},data.props),{},{items:this.virtualizedItems,noFilter:this.noFilter||!this.isSearching||!this.filteredItems.length,searchInput:this.internalSearch}),data}},watch:{filteredItems:"onFilteredItemsChanged",internalValue:"setSearch",isFocused:function(e){e?(document.addEventListener("copy",this.onCopy),this.$refs.input&&this.$refs.input.select()):(document.removeEventListener("copy",this.onCopy),this.blur(),this.updateSelf())},isMenuActive:function(e){!e&&this.hasSlot&&(this.lazySearch=null)},items:function(e,t){t&&t.length||!this.hideNoData||!this.isFocused||this.isMenuActive||!e.length||this.activateMenu()},searchInput:function(e){this.lazySearch=e},internalSearch:"onInternalSearchChanged",itemText:"updateSelf"},created:function(){this.setSearch()},destroyed:function(){document.removeEventListener("copy",this.onCopy)},methods:{onFilteredItemsChanged:function(e,t){var n=this;if(e!==t){if(!this.autoSelectFirst){var o=t[this.$refs.menu.listIndex];o?this.setMenuIndex(e.findIndex((function(i){return i===o}))):this.setMenuIndex(-1),this.$emit("update:list-index",this.$refs.menu.listIndex)}this.$nextTick((function(){n.internalSearch&&(1===e.length||n.autoSelectFirst)&&(n.$refs.menu.getTiles(),n.autoSelectFirst&&e.length&&(n.setMenuIndex(0),n.$emit("update:list-index",n.$refs.menu.listIndex)))}))}},onInternalSearchChanged:function(){this.updateMenuDimensions()},updateMenuDimensions:function(){this.isMenuActive&&this.$refs.menu&&this.$refs.menu.updateDimensions()},changeSelectedIndex:function(e){this.searchIsDirty||(this.multiple&&e===d.z.left?-1===this.selectedIndex?this.selectedIndex=this.selectedItems.length-1:this.selectedIndex--:this.multiple&&e===d.z.right?this.selectedIndex>=this.selectedItems.length-1?this.selectedIndex=-1:this.selectedIndex++:e!==d.z.backspace&&e!==d.z.delete||this.deleteCurrentItem())},deleteCurrentItem:function(){var e=this.selectedIndex,t=this.selectedItems[e];if(this.isInteractive&&!this.getDisabled(t)){var n=this.selectedItems.length-1;if(-1!==this.selectedIndex||0===n){var o=e!==this.selectedItems.length-1?e:e-1;this.selectedItems[o]?this.selectItem(t):this.setValue(this.multiple?[]:null),this.selectedIndex=o}else this.selectedIndex=n}},clearableCallback:function(){this.internalSearch=null,r.a.options.methods.clearableCallback.call(this)},genInput:function(){var input=l.a.options.methods.genInput.call(this);return input.data=Object(c.a)(input.data,{attrs:{"aria-activedescendant":Object(d.q)(this.$refs.menu,"activeTile.id"),autocomplete:Object(d.q)(input.data,"attrs.autocomplete","off")},domProps:{value:this.internalSearch}}),input},genInputSlot:function(){var slot=r.a.options.methods.genInputSlot.call(this);return slot.data.attrs.role="combobox",slot},genSelections:function(){return this.hasSlot||this.multiple?r.a.options.methods.genSelections.call(this):[]},onClick:function(e){this.isInteractive&&(this.selectedIndex>-1?this.selectedIndex=-1:this.onFocus(),this.isAppendInner(e.target)||this.activateMenu())},onInput:function(e){if(!(this.selectedIndex>-1)&&e.target){var t=e.target,n=t.value;t.value&&this.activateMenu(),this.multiple||""!==n||this.deleteCurrentItem(),this.internalSearch=n,this.badInput=t.validity&&t.validity.badInput}},onKeyDown:function(e){var t=e.keyCode;!e.ctrlKey&&[d.z.home,d.z.end].includes(t)||r.a.options.methods.onKeyDown.call(this,e),this.changeSelectedIndex(t)},onSpaceDown:function(e){},onTabDown:function(e){r.a.options.methods.onTabDown.call(this,e),this.updateSelf()},onUpDown:function(e){e.preventDefault(),this.activateMenu()},selectItem:function(e){r.a.options.methods.selectItem.call(this,e),this.setSearch()},setSelectedItems:function(){r.a.options.methods.setSelectedItems.call(this),this.isFocused||this.setSearch()},setSearch:function(){var e=this;this.$nextTick((function(){e.multiple&&e.internalSearch&&e.isMenuActive||(e.internalSearch=!e.selectedItems.length||e.multiple||e.hasSlot?null:e.getText(e.selectedItem))}))},updateSelf:function(){(this.searchIsDirty||this.internalValue)&&(this.multiple||this.valueComparator(this.internalSearch,this.getValue(this.internalValue))||this.setSearch())},hasItem:function(e){return this.selectedValues.indexOf(this.getValue(e))>-1},onCopy:function(e){var t,n;if(-1!==this.selectedIndex){var o=this.selectedItems[this.selectedIndex],r=this.getText(o);null===(t=e.clipboardData)||void 0===t||t.setData("text/plain",r),null===(n=e.clipboardData)||void 0===n||n.setData("text/vnd.vuetify.autocomplete.item+plain",r),e.preventDefault()}}}})}}]);