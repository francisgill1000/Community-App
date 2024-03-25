(window.webpackJsonp=window.webpackJsonp||[]).push([[369,180],{1359:function(e,t,n){"use strict";n.r(t);var o=n(894),r=n(114),l=n(133),c=n(87),d=n(518),m=n(516),_=n(1561),h=n(1562),v=n(350),f=n(1019),y=n(147),x=n(863),O=n(331),k=n(515),D=n(349),j=n(214),S=n(96),$=n(3),w=(n(56),n(521),n(33),n(266),n(216),n(6),n(72),n(58),n(35),n(37),n(80),n(55),{data:function(){var e;return e={isActive:!1,filterLoader:!1,dialogVisible:!1,from_date:null,from_menu:!1},Object($.a)(e,"from_menu",[]),Object($.a)(e,"to_menu",[]),Object($.a)(e,"Module","Employee Schedule"),Object($.a)(e,"schedules_temp_list",[]),Object($.a)(e,"options",{}),Object($.a)(e,"endpoint","scheduled_employees"),Object($.a)(e,"snackbar",!1),Object($.a)(e,"dialog",!1),Object($.a)(e,"employee_search",""),Object($.a)(e,"loading",!1),Object($.a)(e,"loading",!1),Object($.a)(e,"total",0),Object($.a)(e,"total",0),Object($.a)(e,"department_ids",["---"]),Object($.a)(e,"sub_department_ids",["---"]),Object($.a)(e,"employee_ids",[]),Object($.a)(e,"payload",{schedule_id:[1],from_date:[(new Date).toJSON().slice(0,10)],to_date:[(new Date).toJSON().slice(0,10)],is_over_time:[!1]}),Object($.a)(e,"isOverTime",!1),Object($.a)(e,"is_edit",!1),Object($.a)(e,"employees",[]),Object($.a)(e,"departments",[]),Object($.a)(e,"sub_departments",[]),Object($.a)(e,"shifts",[{id:1,name:"Week 1"},{id:2,name:"Week 2"}]),Object($.a)(e,"ids",[]),Object($.a)(e,"response",""),Object($.a)(e,"data",[]),Object($.a)(e,"rosters",[]),Object($.a)(e,"rosterFirstValue",""),Object($.a)(e,"max_date",[]),Object($.a)(e,"min_date",[]),Object($.a)(e,"errors",[]),Object($.a)(e,"headers",[{text:"Emp Id",align:"left",sortable:!1,value:"employee_id"},{text:"Name",sortable:!1,value:"name"},{text:"Department",sortable:!1,value:"department.name"},{text:"Sub Department",sortable:!1,value:"sub_department.name"},{text:"Shift",sortable:!1,value:"schedule.shift.name"}]),e},computed:{activeStyle:function(){return"border-bottom: 1px white solid !important"}},watch:{dialog:function(e){e||this.close(),this.errors=[],this.search="",this.is_edit||(this.getDepartments(this.options),this.getDataFromApi())},options:{handler:function(){this.getDataFromApi()},deep:!0}},created:function(){this.loading=!0,this.get_rosters(),this.options={params:{per_page:1e3,company_id:this.$auth.user.company_id}},this.getDepartments(this.options)},methods:{arrangeShift:function(){this.employee_ids.length?this.dialog=!0:alert("Atleast one employee must be selected.")},addRow:function(e){var t={schedule_id:e,from_date:(new Date).toJSON().slice(0,10),to_date:(new Date).toJSON().slice(0,10),is_over_time:!1};this.schedules_temp_list.length<5&&this.schedules_temp_list.push(t)},removeItem:function(i){this.schedules_temp_list.splice(i,1)},onPageChange:function(){this.getDataFromApi()},caps:function(e){return""==e||null==e?"---":e.toString().replace(/\b\w/g,(function(e){return e.toUpperCase()}))},set_date_save:function(e,t,n){e.save(t)},set_to_date_save:function(e,t,n){e.save(t);var o=this.setSevenDays(t);this.schedules_temp_list[n].to_date=o},setSevenDays:function(e,t){var n=new Date(e);n.setDate(n.getDate()+6);var o=new Date(n),r=o.getDate();r=r<"10"?"0"+r:r;var l=o.getMonth()+1;l=l<10?"0"+l:l;var c=o.getFullYear();return this.max_date[t]="".concat(c,"-").concat(l,"-").concat(r),this.min_date[t]="".concat(c,"-").concat(l,"-").concat(r),"".concat(c,"-").concat(l,"-").concat(r)},get_rosters:function(){var e=this,t={company_id:this.$auth.user.company_id};this.$axios.get("roster_list",{params:t}).then((function(t){var data=t.data;e.rosters=data,e.addRow(data[0].schedule_id),e.rosterFirstValue=data[0].schedule_id}))},close:function(){this.dialog=!1,this.is_edit=!1},getDepartments:function(e){var t=this;this.$axios.get("departments",e).then((function(e){var data=e.data;t.departments=data.data,t.departments.unshift({id:"---",name:"Select All"})})).catch((function(e){return console.log(e)}))},employeesByDepartment:function(){var e=this;this.loading=!0;var t=this.options,n=t.page,o=t.itemsPerPage,r={params:{department_ids:this.department_ids,per_page:o,page:n,company_id:this.$auth.user.company_id}};if(!this.department_ids.length)return this.employees=[],this.total=0,void(this.loading=!1);this.$axios.get("employeesByDepartment",r).then((function(t){var data=t.data;e.employees=data.data,e.total=data.total,e.loading=!1}))},dialogSearchIt:function(e){this.employeesByDepartment(),this.getEmployeesBySubDepartment()},dialogSearchByEmployeeID:function(e){var t=this;if(0==e.length)this.employeesByDepartment();else if(e.length>2){this.filterLoader=!0;var n=this.options,o=n.page,r={params:{per_page:n.itemsPerPage,page:o,employee_search:this.employee_search,company_id:this.$auth.user.company_id}};this.$axios.get("employeesByEmployeeId",r).then((function(e){var data=e.data;t.employees=data.data,t.total=data.total,t.filterLoader=!1}))}},getEmployeesBySubDepartment:function(){var e=this;this.loading=!0;var t=this.options,n=t.page,o=t.itemsPerPage,r={params:{department_ids:this.department_ids,sub_department_ids:this.sub_department_ids,per_page:o,page:n,company_id:this.$auth.user.company_id}};this.sub_department_ids.length?this.$axios.get("employeesBySubDepartment",r).then((function(t){var data=t.data;e.employees=data.data,e.total=data.total,e.loading=!1})).catch((function(e){return console.log(e)})):this.loading=!1},subDepartmentsByDepartment:function(){var e=this;this.options.params.department_ids=this.department_ids,this.$axios.get("sub-departments-by-departments",this.options).then((function(t){var data=t.data;e.sub_departments=data,e.sub_departments.unshift({id:"---",name:"Select All"})})).catch((function(e){return console.log(e)}))},runMultipleFunctions:function(){this.employeesByDepartment(),this.subDepartmentsByDepartment()},can:function(e){var u=this.$auth.user;return u&&u.permissions.some((function(t){return t.name==e||"/"==e}))||u.is_master},getDataFromApi:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.endpoint;this.loading=!0;var n=this.options,o=n.page,r={params:{per_page:n.itemsPerPage,page:o,company_id:this.$auth.user.company_id}};this.$axios.get(t,r).then((function(t){var data=t.data;e.employees=data.data,e.total=data.total,e.loading=!1}))},searchIt:function(){var s=this.search.length,e=this.search;0==s?this.getDataFromApi():s>2&&this.getDataFromApi("".concat(this.endpoint,"/search/").concat(e))},delteteSelectedRecords:function(){var e=this,t=this.ids.map((function(e){return e.schedule.id}));confirm("Are you sure you wish to delete selected records , to mitigate any inconvenience in future.")&&this.$axios.post("schedule_employee/delete/selected",{ids:t}).then((function(t){var data=t.data;data.status?(e.getDataFromApi(),e.snackbar=data.status,e.ids=[],e.response="Selected records has been deleted"):(e.errors=data.errors,alert("1"))})).catch((function(e){return console.log(e)}))},deleteItem:function(e){var t=this;confirm("Are you sure you wish to delete , to mitigate any inconvenience in future.")&&this.$axios.delete("schedule_employees/"+e.employee.system_user_id).then((function(n){var data=n.data,o=t.employees.indexOf(e);t.employees.splice(o,1),t.snackbar=data.status,t.response=data.message,t.getDataFromApi()})).catch((function(e){return console.log(e)}))},save:function(){this.loading=!0,this.errors=[];var e={employee_ids:this.employee_ids.map((function(e){return e.system_user_id})),schedules:this.schedules_temp_list,company_id:this.$auth.user.company_id};this.is_edit?this.process(this.$axios.post("schedule_employees/".concat(e.employee_ids),e)):this.process(this.$axios.post("store_schedule_arrange",e))},process:function(e){var t=this;e.then((function(e){var data=e.data;if(!data.status)return null!=data&&data.custom_errors&&(t.custom_errors=data.custom_errors,t.errors=[]),null!=data&&data.errors&&(t.errors=data.errors,t.custom_errors=[]),void(t.loading=!1);t.dialog=!1,t.response=data.message,t.snackbar=!0,t.loading=!1,setTimeout((function(){t.$router.push("/employee_schedule")}),1e3)})).catch((function(e){return console.log(e)}))}}}),A=w,F=n(116),component=Object(F.a)(A,(function(){var e=this,t=e._self._c;return t("div",[t(S.a,{attrs:{flat:"",dense:""}},[t(r.a,{staticClass:"primary",attrs:{small:"",color:"primary"},on:{click:e.arrangeShift}},[e._v("Arrange Shift(s)\n    ")]),e._v(" "),t(y.a,{staticClass:"mx-2",attrs:{color:"primary"},on:{click:function(t){e.dialogVisible=!0}}},[e._v("mdi-filter")])],1),e._v(" "),t(_.a,{attrs:{"show-select":"","item-key":"id",headers:e.headers,items:e.employees,"server-items-length":e.total,loading:e.loading,options:e.options,"footer-props":{itemsPerPageOptions:[50,100,500,1e3]}},on:{"update:options":function(t){e.options=t}},scopedSlots:e._u([{key:"item.name",fn:function(t){var n=t.item;return[e._v("\n      "+e._s(n.first_name?n.first_name:"---")+"\n      "+e._s(n.last_name?n.last_name:"---")+"\n    ")]}}]),model:{value:e.employee_ids,callback:function(t){e.employee_ids=t},expression:"employee_ids"}}),e._v(" "),t(v.a,{attrs:{persistent:"",width:"900"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[t(l.a,[t(c.c,{staticClass:"text-h5"},[e._v("\n        Arrange Shift(s)\n        "),t(D.a),e._v(" "),t(r.a,{staticClass:"primary",attrs:{small:"",fab:""},on:{click:function(t){return e.addRow(e.rosterFirstValue)}}},[t("b",[e._v("+")])])],1),e._v(" "),t(f.a),e._v(" "),e._l(e.schedules_temp_list,(function(n,i){return t(c.b,{key:i},[t(k.a,[t(m.a,{attrs:{md:"3"}},[t("div",{},[e._v("Schedule List")]),e._v(" "),t(o.a,{attrs:{outlined:"",dense:"","x-small":"",items:e.rosters,"item-value":"schedule_id","item-text":"name"},model:{value:n.schedule_id,callback:function(t){e.$set(n,"schedule_id",t)},expression:"item.schedule_id"}})],1),e._v(" "),t(m.a,{attrs:{md:"3"}},[t("div",{staticClass:"mb-6"},[t("div",[e._v("From")]),e._v(" "),t(x.a,{ref:"from_menu",refInFor:!0,attrs:{"close-on-content-click":!1,"return-value":n.from_date,transition:"scale-transition","offset-y":"","min-width":"auto"},on:{"update:returnValue":function(t){return e.$set(n,"from_date",t)},"update:return-value":function(t){return e.$set(n,"from_date",t)}},scopedSlots:e._u([{key:"activator",fn:function(o){var r=o.on,l=o.attrs;return[t(j.a,e._g(e._b({attrs:{"hide-details":!0,outlined:"",dense:"",readonly:""},model:{value:n.from_date,callback:function(t){e.$set(n,"from_date",t)},expression:"item.from_date"}},"v-text-field",l,!1),r))]}}],null,!0),model:{value:e.from_menu[i],callback:function(t){e.$set(e.from_menu,i,t)},expression:"from_menu[i]"}},[e._v(" "),t(h.a,{attrs:{"no-title":"",scrollable:""},model:{value:n.from_date,callback:function(t){e.$set(n,"from_date",t)},expression:"item.from_date"}},[t(D.a),e._v(" "),t(r.a,{attrs:{text:"",color:"primary"},on:{click:function(t){e.from_menu[i]=!1}}},[e._v("\n                    Cancel\n                  ")]),e._v(" "),t(r.a,{attrs:{text:"",color:"primary"},on:{click:function(t){return e.set_date_save(e.$refs.from_menu[i],n.from_date,i)}}},[e._v("\n                    OK\n                  ")])],1)],1)],1)]),e._v(" "),t(m.a,{attrs:{md:"3"}},[t("div",{staticClass:"mb-6"},[t("div",[e._v("To")]),e._v(" "),t(x.a,{ref:"to_menu",refInFor:!0,attrs:{"close-on-content-click":!1,"return-value":n.to_date,transition:"scale-transition","offset-y":"","min-width":"auto"},on:{"update:returnValue":function(t){return e.$set(n,"to_date",t)},"update:return-value":function(t){return e.$set(n,"to_date",t)}},scopedSlots:e._u([{key:"activator",fn:function(o){var r=o.on,l=o.attrs;return[t(j.a,e._g(e._b({attrs:{"hide-details":!0,outlined:"",dense:"",readonly:""},model:{value:n.to_date,callback:function(t){e.$set(n,"to_date",t)},expression:"item.to_date"}},"v-text-field",l,!1),r))]}}],null,!0),model:{value:e.to_menu[i],callback:function(t){e.$set(e.to_menu,i,t)},expression:"to_menu[i]"}},[e._v(" "),t(h.a,{attrs:{"no-title":"",scrollable:""},model:{value:n.to_date,callback:function(t){e.$set(n,"to_date",t)},expression:"item.to_date"}},[t(D.a),e._v(" "),t(r.a,{attrs:{text:"",color:"primary"},on:{click:function(t){e.to_menu[i]=!1}}},[e._v("\n                    Cancel\n                  ")]),e._v(" "),t(r.a,{attrs:{text:"",color:"primary"},on:{click:function(t){return e.set_date_save(e.$refs.to_menu[i],n.to_date,i)}}},[e._v("\n                    OK\n                  ")])],1)],1)],1)]),e._v(" "),t(m.a,{attrs:{md:"2"}},[t("div",[e._v("\n              Overtime Allowed\n              "),t(d.a,{staticStyle:{"margin-top":"-8px"},model:{value:n.is_over_time,callback:function(t){e.$set(n,"is_over_time",t)},expression:"item.is_over_time"}})],1)]),e._v(" "),t(m.a,{attrs:{md:"1"}},[t("div"),e._v(" "),i?t(y.a,{attrs:{color:"error"},on:{click:function(t){return e.removeItem(i)}}},[e._v("mdi-delete")]):e._e()],1)],1)],1)})),e._v(" "),t(f.a),e._v(" "),t(c.a,[t(D.a),e._v(" "),t(r.a,{attrs:{dark:"",small:"",color:"grey"},on:{click:e.close}},[e._v(" Close ")]),e._v(" "),t(r.a,{attrs:{dark:"",small:"",color:"primary"},on:{click:e.save}},[e._v(" Submit ")])],1)],2)],1),e._v(" "),t(v.a,{attrs:{persistent:"","max-width":"500px"},model:{value:e.dialogVisible,callback:function(t){e.dialogVisible=t},expression:"dialogVisible"}},[t(l.a,[t(c.c,{staticClass:"primary white--text background",attrs:{dense:""}},[e._v("\n        Filter\n        "),t(D.a),e._v(" "),t(y.a,{attrs:{outlined:"",dark:"",color:"white"},on:{click:function(t){e.dialogVisible=!1}}},[e._v("\n          mdi mdi-close-circle\n        ")])],1),e._v(" "),e.filterLoader?t(O.a,{attrs:{indeterminate:"",color:"primary"}}):e._e(),e._v(" "),t("br"),e._v(" "),t(c.b,[t("div",[t(o.a,{attrs:{placeholder:"Department",outlined:"",dense:"",multiple:"","x-small":"",items:e.departments,"item-value":"id","item-text":"name",disabled:1==e.is_edit},on:{change:e.runMultipleFunctions},model:{value:e.department_ids,callback:function(t){e.department_ids=t},expression:"department_ids"}}),e._v(" "),t(o.a,{attrs:{placeholder:"Sub Department",outlined:"",dense:"",multiple:"","x-small":"",items:e.sub_departments,"item-value":"id","item-text":"name",disabled:1==e.is_edit},on:{change:e.runMultipleFunctions},model:{value:e.department_ids,callback:function(t){e.department_ids=t},expression:"department_ids"}}),e._v(" "),t(j.a,{attrs:{label:"Search Employee by ID",outlined:"",dense:"","append-icon":"mdi-magnify","single-line":"","hide-details":""},on:{input:e.dialogSearchByEmployeeID},model:{value:e.employee_search,callback:function(t){e.employee_search=t},expression:"employee_search"}})],1)])],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports},1606:function(e,t,n){"use strict";n.r(t);var o=n(894),r=n(114),l=n(133),c=n(87),d=n(518),m=n(516),_=n(1562),h=n(350),v=n(1019),f=n(147),y=n(863),x=n(331),O=n(515),k=n(873),D=n(349),j=n(853),S=n(855),$=n(854),w=n(214),A=n(96),F=n(856),C=n(3),B=(n(56),n(521),n(33),n(266),n(216),n(6),n(72),n(58),n(35),n(80),n(1359)),I=n(1554),E={components:{ScheduledEmployees:B.default,UnScheduledEmployees:I.default},data:function(){var e;return e={currentComponent:"UnScheduledEmployees",isActive:!1,activeTab:"tab-0",tabs:[{id:"schedule",label:"Schedule"},{id:"unschedule",label:"Unschedule"}],filterLoader:!1,dialogVisible:!1,from_date:null,from_menu:!1},Object(C.a)(e,"from_menu",[]),Object(C.a)(e,"to_menu",[]),Object(C.a)(e,"pagination",{current:1,total:0,per_page:10}),Object(C.a)(e,"Module","Employee Schedule"),Object(C.a)(e,"schedules_temp_list",[]),Object(C.a)(e,"options",{}),Object(C.a)(e,"options_dialog",{}),Object(C.a)(e,"create_endpoint","not_scheduled_employees"),Object(C.a)(e,"endpoint","scheduled_employees"),Object(C.a)(e,"endpoint_dialog","scheduled_employees_list"),Object(C.a)(e,"search",""),Object(C.a)(e,"dialog_search",""),Object(C.a)(e,"snackbar",!1),Object(C.a)(e,"dialog",!1),Object(C.a)(e,"employee_search",""),Object(C.a)(e,"loading",!1),Object(C.a)(e,"loading_dialog",!1),Object(C.a)(e,"total",0),Object(C.a)(e,"total_dialog",0),Object(C.a)(e,"department_ids",["---"]),Object(C.a)(e,"sub_department_ids",["---"]),Object(C.a)(e,"employee_ids",[]),Object(C.a)(e,"payload",{schedule_id:[1],from_date:[(new Date).toJSON().slice(0,10)],to_date:[(new Date).toJSON().slice(0,10)],is_over_time:[!1]}),Object(C.a)(e,"isOverTime",!1),Object(C.a)(e,"is_edit",!1),Object(C.a)(e,"employees",[]),Object(C.a)(e,"employees_dialog",[]),Object(C.a)(e,"departments",[]),Object(C.a)(e,"sub_departments",[]),Object(C.a)(e,"shifts",[{id:1,name:"Week 1"},{id:2,name:"Week 2"}]),Object(C.a)(e,"ids",[]),Object(C.a)(e,"response",""),Object(C.a)(e,"data",[]),Object(C.a)(e,"shifts",[]),Object(C.a)(e,"rosters",[]),Object(C.a)(e,"rosterFirstValue",""),Object(C.a)(e,"max_date",[]),Object(C.a)(e,"min_date",[]),Object(C.a)(e,"errors",[]),Object(C.a)(e,"headers_ids",[]),Object(C.a)(e,"headers_dialog",[{text:"Emp Id",align:"left",sortable:!1,value:"employee_id"},{text:"Name",sortable:!1,value:"display_name"},{text:"Department",sortable:!1,value:"department.name"},{text:"Sub Department",sortable:!1,value:"sub_department.name"},{text:"Shift",sortable:!1,value:"schedule.shift.name"}]),e},computed:{activeStyle:function(){return"border-bottom: 1px white solid !important"}},watch:{dialog:function(e){e||this.close(),this.errors=[],this.search="",this.is_edit||this.getDataFromApi()},options:{handler:function(){this.getDataFromApi()},deep:!0},options_dialog:{handler:function(){this.runMultipleFunctions(),this.is_edit||this.getDataFromApi()},deep:!0},search:function(){this.pagination.current=1,this.searchIt()}},created:function(){this.loading=!0,this.get_rosters(),this.options={params:{per_page:1e3,department_ids:this.department_ids,company_id:this.$auth.user.company_id}}},methods:{changeComponent:function(e,t){this.create_endpoint=t,this.currentComponent=e},toggleActiveState:function(){this.isActive=!this.isActive},arrangeShift:function(){this.employee_ids.length?this.dialog=!0:alert("Atleast one employee must be selected.")},addRow:function(e){var t={schedule_id:e,from_date:(new Date).toJSON().slice(0,10),to_date:(new Date).toJSON().slice(0,10),is_over_time:!1};this.schedules_temp_list.length<5&&this.schedules_temp_list.push(t)},removeItem:function(i){this.schedules_temp_list.splice(i,1)},onPageChange:function(){this.getDataFromApi()},caps:function(e){return""==e||null==e?"---":e.toString().replace(/\b\w/g,(function(e){return e.toUpperCase()}))},set_date_save:function(e,t,n){e.save(t)},set_to_date_save:function(e,t,n){e.save(t);var o=this.setSevenDays(t);this.schedules_temp_list[n].to_date=o},setSevenDays:function(e,t){var n=new Date(e);n.setDate(n.getDate()+6);var o=new Date(n),r=o.getDate();r=r<"10"?"0"+r:r;var l=o.getMonth()+1;l=l<10?"0"+l:l;var c=o.getFullYear();return this.max_date[t]="".concat(c,"-").concat(l,"-").concat(r),this.min_date[t]="".concat(c,"-").concat(l,"-").concat(r),"".concat(c,"-").concat(l,"-").concat(r)},get_rosters:function(){var e=this,t={company_id:this.$auth.user.company_id};this.$axios.get("roster_list",{params:t}).then((function(t){var data=t.data;e.rosters=data,e.addRow(data[0].schedule_id),e.rosterFirstValue=data[0].schedule_id}))},close:function(){this.dialog=!1,this.is_edit=!1},getDepartments:function(e){var t=this;this.$axios.get("departments",e).then((function(e){var data=e.data;t.departments=data.data,t.departments.unshift({id:"---",name:"Select All"})})).catch((function(e){return console.log(e)}))},employeesByDepartment:function(){var e=this;this.loading_dialog=!0;var t=this.options_dialog,n=t.page,o=t.itemsPerPage,r={params:{department_ids:this.department_ids,per_page:o,page:n,company_id:this.$auth.user.company_id}};if(!this.department_ids.length)return this.employees_dialog=[],this.total_dialog=0,void(this.loading_dialog=!1);this.$axios.get("employeesByDepartment",r).then((function(t){var data=t.data;e.employees_dialog=data.data,e.total_dialog=data.total,e.loading_dialog=!1}))},dialogSearchIt:function(e){this.employeesByDepartment(),this.getEmployeesBySubDepartment()},dialogSearchByEmployeeID:function(e){var t=this;if(0==e.length)this.employeesByDepartment();else if(e.length>2){this.filterLoader=!0;var n=this.options_dialog,o=n.page,r={params:{per_page:n.itemsPerPage,page:o,employee_search:this.employee_search,company_id:this.$auth.user.company_id}};this.$axios.get("employeesByEmployeeId",r).then((function(e){var data=e.data;t.employees_dialog=data.data,t.total_dialog=data.total,t.filterLoader=!1}))}},getEmployeesBySubDepartment:function(){var e=this;this.loading_dialog=!0;var t=this.options_dialog,n=t.page,o=t.itemsPerPage,r={params:{department_ids:this.department_ids,sub_department_ids:this.sub_department_ids,per_page:o,page:n,company_id:this.$auth.user.company_id}};this.sub_department_ids.length?this.$axios.get("employeesBySubDepartment",r).then((function(t){var data=t.data;e.employees_dialog=data.data,e.total_dialog=data.total,e.loading_dialog=!1})).catch((function(e){return console.log(e)})):this.loading_dialog=!1},subDepartmentsByDepartment:function(){var e=this;this.options.params.department_ids=this.department_ids,this.$axios.get("sub-departments-by-departments",this.options).then((function(t){var data=t.data;e.sub_departments=data,e.sub_departments.unshift({id:"---",name:"Select All"})})).catch((function(e){return console.log(e)}))},runMultipleFunctions:function(){this.employeesByDepartment(),this.subDepartmentsByDepartment()},can:function(e){return this.$pagePermission.can(e,this)},getDataFromApi:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.endpoint;this.loading=!1;var n=this.pagination.current,o={params:{per_page:this.pagination.per_page,page:n,company_id:this.$auth.user.company_id}};this.$axios.get(t,o).then((function(t){var data=t.data;e.employees=data.data,e.pagination.current=data.current_page,e.pagination.total=data.last_page,e.loading=!1}))},searchIt:function(){var s=this.search.length,e=this.search;0==s?this.getDataFromApi():s>2&&this.getDataFromApi("".concat(this.endpoint,"/search/").concat(e))},delteteSelectedRecords:function(){var e=this,t=this.ids.map((function(e){return e.schedule.id}));confirm("Are you sure you wish to delete selected records , to mitigate any inconvenience in future.")&&this.$axios.post("schedule_employee/delete/selected",{ids:t}).then((function(t){var data=t.data;data.status?(e.getDataFromApi(),e.snackbar=data.status,e.ids=[],e.response="Selected records has been deleted"):(e.errors=data.errors,alert("1"))})).catch((function(e){return console.log(e)}))},deleteItem:function(e){var t=this;confirm("Are you sure you wish to delete , to mitigate any inconvenience in future.")&&this.$axios.delete("schedule_employees/"+e.employee.system_user_id).then((function(n){var data=n.data,o=t.employees.indexOf(e);t.employees.splice(o,1),t.snackbar=data.status,t.response=data.message,t.getDataFromApi()})).catch((function(e){return console.log(e)}))},save:function(){this.loading_dialog=!0,this.errors=[];var e={employee_ids:this.employee_ids.map((function(e){return e.employee_id})),schedules:this.schedules_temp_list,company_id:this.$auth.user.company_id};this.is_edit?this.process(this.$axios.post("schedule_employees/".concat(e.employee_ids),e)):this.process(this.$axios.post("store_schedule_arrange",e))},process:function(e){var t=this;e.then((function(e){var data=e.data;if(!data.status)return null!=data&&data.custom_errors&&(t.custom_errors=data.custom_errors,t.errors=[]),null!=data&&data.errors&&(t.errors=data.errors,t.custom_errors=[]),void(t.loading_dialog=!1);t.dialog=!1,t.response=data.message,t.snackbar=!0,t.loading_dialog=!1,t.getDataFromApi()})).catch((function(e){return console.log(e)}))}}},V=E,P=n(116),component=Object(P.a)(V,(function(){var e=this,t=e._self._c;return e.can("employee_schedule_create")?t("div",[t("div",{staticClass:"text-center ma-2"},[t(k.a,{attrs:{top:"top",color:"secondary",elevation:"24"},model:{value:e.snackbar,callback:function(t){e.snackbar=t},expression:"snackbar"}},[e._v("\n      "+e._s(e.response)+"\n    ")])],1),e._v(" "),t(A.a,{staticClass:"white--text",attrs:{color:"white",dense:"",flat:""}},[t(F.b,{staticClass:"black--text"},[t("span",[e._v(" Schedule Employees")])])],1),e._v(" "),t($.a,{attrs:{right:""}},[t(j.a,[e._v(" UnScheduled")]),e._v(" "),t(j.a,[e._v(" Scheduled ")]),e._v(" "),t("v-tab-slider",{attrs:{color:"violet"}}),e._v(" "),t(S.a,[t("UnScheduledEmployees",{attrs:{endpoint:"not_scheduled_employees"}})],1),e._v(" "),e.can("leave_group_access")?t(S.a,[t("ScheduledEmployees",{attrs:{endpoint:"scheduled_employees"}})],1):e._e()],1),e._v(" "),t(h.a,{attrs:{persistent:"",width:"900"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[t(l.a,[t(c.c,{staticClass:"text-h5 popup_background",attrs:{dark:""}},[e._v("\n        Arrange Shift(s)\n        "),t(D.a),e._v(" "),t(r.a,{staticClass:"primary",attrs:{small:"",fab:""},on:{click:function(t){return e.addRow(e.rosterFirstValue)}}},[t("b",[e._v("+")])])],1),e._v(" "),t(v.a),e._v(" "),e._l(e.schedules_temp_list,(function(n,i){return t(c.b,{key:i},[t(O.a,[t(m.a,{attrs:{md:"3"}},[t("div",{},[e._v("Schedule List")]),e._v(" "),t(o.a,{attrs:{outlined:"",dense:"","x-small":"",items:e.rosters,"item-value":"schedule_id","item-text":"name"},model:{value:n.schedule_id,callback:function(t){e.$set(n,"schedule_id",t)},expression:"item.schedule_id"}})],1),e._v(" "),t(m.a,{attrs:{md:"3"}},[t("div",{staticClass:"mb-6"},[t("div",[e._v("From")]),e._v(" "),t(y.a,{ref:"from_menu",refInFor:!0,attrs:{"close-on-content-click":!1,"return-value":n.from_date,transition:"scale-transition","offset-y":"","min-width":"auto"},on:{"update:returnValue":function(t){return e.$set(n,"from_date",t)},"update:return-value":function(t){return e.$set(n,"from_date",t)}},scopedSlots:e._u([{key:"activator",fn:function(o){var r=o.on,l=o.attrs;return[t(w.a,e._g(e._b({attrs:{"hide-details":!0,outlined:"",dense:"",readonly:""},model:{value:n.from_date,callback:function(t){e.$set(n,"from_date",t)},expression:"item.from_date"}},"v-text-field",l,!1),r))]}}],null,!0),model:{value:e.from_menu[i],callback:function(t){e.$set(e.from_menu,i,t)},expression:"from_menu[i]"}},[e._v(" "),t(_.a,{attrs:{"no-title":"",scrollable:""},model:{value:n.from_date,callback:function(t){e.$set(n,"from_date",t)},expression:"item.from_date"}},[t(D.a),e._v(" "),t(r.a,{attrs:{text:"",color:"primary"},on:{click:function(t){e.from_menu[i]=!1}}},[e._v("\n                    Cancel\n                  ")]),e._v(" "),t(r.a,{attrs:{text:"",color:"primary"},on:{click:function(t){return e.set_date_save(e.$refs.from_menu[i],n.from_date,i)}}},[e._v("\n                    OK\n                  ")])],1)],1)],1)]),e._v(" "),t(m.a,{attrs:{md:"3"}},[t("div",{staticClass:"mb-6"},[t("div",[e._v("To")]),e._v(" "),t(y.a,{ref:"to_menu",refInFor:!0,attrs:{"close-on-content-click":!1,"return-value":n.to_date,transition:"scale-transition","offset-y":"","min-width":"auto"},on:{"update:returnValue":function(t){return e.$set(n,"to_date",t)},"update:return-value":function(t){return e.$set(n,"to_date",t)}},scopedSlots:e._u([{key:"activator",fn:function(o){var r=o.on,l=o.attrs;return[t(w.a,e._g(e._b({attrs:{"hide-details":!0,outlined:"",dense:"",readonly:""},model:{value:n.to_date,callback:function(t){e.$set(n,"to_date",t)},expression:"item.to_date"}},"v-text-field",l,!1),r))]}}],null,!0),model:{value:e.to_menu[i],callback:function(t){e.$set(e.to_menu,i,t)},expression:"to_menu[i]"}},[e._v(" "),t(_.a,{attrs:{"no-title":"",scrollable:""},model:{value:n.to_date,callback:function(t){e.$set(n,"to_date",t)},expression:"item.to_date"}},[t(D.a),e._v(" "),t(r.a,{attrs:{text:"",color:"primary"},on:{click:function(t){e.to_menu[i]=!1}}},[e._v("\n                    Cancel\n                  ")]),e._v(" "),t(r.a,{attrs:{text:"",color:"primary"},on:{click:function(t){return e.set_date_save(e.$refs.to_menu[i],n.to_date,i)}}},[e._v("\n                    OK\n                  ")])],1)],1)],1)]),e._v(" "),t(m.a,{attrs:{md:"2"}},[t("div",[e._v("\n              Overtime Allowed\n              "),t(d.a,{staticStyle:{"margin-top":"-8px"},model:{value:n.is_over_time,callback:function(t){e.$set(n,"is_over_time",t)},expression:"item.is_over_time"}})],1)]),e._v(" "),t(m.a,{attrs:{md:"1"}},[t("div"),e._v(" "),i?t(f.a,{attrs:{color:"error"},on:{click:function(t){return e.removeItem(i)}}},[e._v("mdi-delete")]):e._e()],1)],1)],1)})),e._v(" "),t(v.a),e._v(" "),t(c.a,[t(D.a),e._v(" "),t(r.a,{attrs:{dark:"",small:"",color:"grey"},on:{click:e.close}},[e._v(" Close ")]),e._v(" "),t(r.a,{attrs:{dark:"",small:"",color:"primary"},on:{click:e.save}},[e._v(" Submit ")])],1)],2)],1),e._v(" "),t(h.a,{attrs:{"max-width":"500px"},model:{value:e.dialogVisible,callback:function(t){e.dialogVisible=t},expression:"dialogVisible"}},[t(l.a,{attrs:{dense:""}},[t(c.c,{staticClass:"popup_background",attrs:{dark:""}},[t("span",{staticClass:"headline"},[e._v("Filter")])]),e._v(" "),e.filterLoader?t(x.a,{attrs:{indeterminate:"",color:"primary"}}):e._e(),e._v(" "),t("br"),e._v(" "),t(c.b,[t("div",[t(o.a,{attrs:{placeholder:"Department",outlined:"",dense:"",multiple:"","x-small":"",items:e.departments,"item-value":"id","item-text":"name",disabled:1==e.is_edit},on:{change:e.runMultipleFunctions},model:{value:e.department_ids,callback:function(t){e.department_ids=t},expression:"department_ids"}}),e._v(" "),t(o.a,{attrs:{placeholder:"Sub Department",outlined:"",dense:"",multiple:"","x-small":"",items:e.sub_departments,"item-value":"id","item-text":"name",disabled:1==e.is_edit},on:{change:e.runMultipleFunctions},model:{value:e.department_ids,callback:function(t){e.department_ids=t},expression:"department_ids"}}),e._v(" "),t(w.a,{attrs:{label:"Search Employee by ID",outlined:"",dense:"","append-icon":"mdi-magnify","single-line":"","hide-details":""},on:{input:e.dialogSearchByEmployeeID},model:{value:e.employee_search,callback:function(t){e.employee_search=t},expression:"employee_search"}})],1)]),e._v(" "),t(c.a,[t(D.a),e._v(" "),t(r.a,{attrs:{dark:"",color:"background"},on:{click:function(t){e.dialogVisible=!1}}},[e._v("Close")])],1)],1)],1)],1):t("NoAccess")}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{NoAccess:n(880).default})},856:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return l}));var o=n(96),r=n(1),l=Object(r.k)("v-toolbar__title"),c=Object(r.k)("v-toolbar__items");o.a},880:function(e,t,n){"use strict";n.r(t);var o=n(116),component=Object(o.a)({},(function(){this._self._c;return this._m(0)}),[function(){var e=this._self._c;return e("div",{staticClass:"text-center",staticStyle:{"margin-top":"25%"}},[e("b",[this._v("No Access")])])}],!1,null,null,null);t.default=component.exports}}]);