(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{1538:function(e,t,n){"use strict";n.r(t);var o=n(893),r=n(114),l=n(133),c=n(87),d=n(520),h=n(518),m=n(1545),f=n(1546),_=n(350),v=n(1019),y=n(147),x=n(862),I=n(331),S=n(517),D=n(892),O=n(349),k=n(214),$=n(96),j=n(81),w=(n(35),n(3)),F=(n(56),n(523),n(33),n(266),n(99),n(6),n(215),n(72),n(58),n(80),n(37),n(55),{data:function(){var e;return e={branch_id:null,branchesList:[],isActive:!1,filterLoader:!1,dialogVisible:!1,from_date:null,from_menu:!1},Object(w.a)(e,"from_menu",[]),Object(w.a)(e,"to_menu",[]),Object(w.a)(e,"Module","Employee Schedule"),Object(w.a)(e,"schedules_temp_list",[]),Object(w.a)(e,"options",{}),Object(w.a)(e,"endpoint","not_scheduled_employees"),Object(w.a)(e,"snackbar",!1),Object(w.a)(e,"dialog",!1),Object(w.a)(e,"employee_search",""),Object(w.a)(e,"loading",!1),Object(w.a)(e,"loading",!1),Object(w.a)(e,"total",0),Object(w.a)(e,"total",0),Object(w.a)(e,"department_ids",["---"]),Object(w.a)(e,"sub_department_ids",["---"]),Object(w.a)(e,"employee_ids",[]),Object(w.a)(e,"payload",{shift_id:[1],from_date:[(new Date).toJSON().slice(0,10)],to_date:[(new Date).toJSON().slice(0,10)],is_over_time:[!1]}),Object(w.a)(e,"isOverTime",!1),Object(w.a)(e,"is_edit",!1),Object(w.a)(e,"employees",[]),Object(w.a)(e,"departments",[]),Object(w.a)(e,"sub_departments",[]),Object(w.a)(e,"ids",[]),Object(w.a)(e,"response",""),Object(w.a)(e,"data",[]),Object(w.a)(e,"shifts",[]),Object(w.a)(e,"rosterFirstValue",""),Object(w.a)(e,"max_date",[]),Object(w.a)(e,"min_date",[]),Object(w.a)(e,"errors",[]),Object(w.a)(e,"headers",[{text:"Emp Id",align:"left",sortable:!1,value:"employee_id"},{text:"Name",sortable:!1,value:"name"},{text:"Branch",sortable:!1,value:"branch.branch_name"},{text:"Department",sortable:!1,value:"department.name"},{text:"Sub Department",sortable:!1,value:"sub_department.name"},{text:"Shift",sortable:!1,value:"schedule.shift.name"}]),Object(w.a)(e,"branch_id",null),e},computed:{activeStyle:function(){return"border-bottom: 1px white solid !important"}},watch:{dialog:function(e){e||this.close(),this.errors=[],this.search="",this.is_edit||(this.getDepartments(this.options),this.getDataFromApi())},options:{handler:function(){this.getDataFromApi()},deep:!0}},created:function(){this.loading=!0,this.options={params:{per_page:1e3,company_id:this.$auth.user.company_id}},this.getShifts(this.options),this.getDepartments(this.options),this.getbranchesList()},methods:{filterBranchdata:function(e){this.employee_ids=[],this.branch_id=e,""==e&&(this.branch_id=null,e=null),this.loading=!0,this.options={params:{per_page:1e3,company_id:this.$auth.user.company_id,branch_id:e}},this.getShifts(this.options),this.getDepartments(this.options),this.getDataFromApi()},getbranchesList:function(){var e=this;this.payloadOptions={params:{company_id:this.$auth.user.company_id,branch_id:this.$auth.user.branch_id}},this.$axios.get("branches_list",this.payloadOptions).then((function(t){var data=t.data;e.branchesList=data}))},getUpdateSchedule:function(e){var t=this.shifts.find((function(t){return t.shift_id==e.shift_id})),n=t.from_date,o=t.to_date,r=t.shift_type_id;e.shift_type_id=r,e.from_date=n,e.to_date=o},arrangeShift:function(){this.branch_id?this.shifts.length?(this.addRow(),this.employee_ids.length?this.dialog=!0:alert("Atleast one employee must be selected.")):alert("No shift found. Please create shift and come back."):alert("Please select Branch  ")},addRow:function(){var e={shift_id:this.shifts[0].shift_id,shift_type_id:this.shifts[0].shift_type_id,from_date:this.shifts[0].from_date,to_date:this.shifts[0].to_date,is_over_time:!1};this.schedules_temp_list.length<5&&this.schedules_temp_list.push(e)},removeItem:function(i){this.schedules_temp_list.splice(i,1)},onPageChange:function(){this.getDataFromApi()},caps:function(e){return""==e||null==e?"---":e.toString().replace(/\b\w/g,(function(e){return e.toUpperCase()}))},set_date_save:function(e,t,n){e.save(t)},set_to_date_save:function(e,t,n){e.save(t);var o=this.setSevenDays(t);this.schedules_temp_list[n].to_date=o},setSevenDays:function(e,t){var n=new Date(e);n.setDate(n.getDate()+6);var o=new Date(n),r=o.getDate();r=r<"10"?"0"+r:r;var l=o.getMonth()+1;l=l<10?"0"+l:l;var c=o.getFullYear();return this.max_date[t]="".concat(c,"-").concat(l,"-").concat(r),this.min_date[t]="".concat(c,"-").concat(l,"-").concat(r),"".concat(c,"-").concat(l,"-").concat(r)},getShifts:function(e){var t=this;this.$axios.get("shift",e).then((function(e){var data=e.data;t.shifts=data.data.map((function(e){return{shift_id:e.id,name:e.name,shift_type_id:e.shift_type_id,from_date:e.from_date,to_date:e.to_date}}))}))},close:function(){this.dialog=!1,this.is_edit=!1},getDepartments:function(e){var t=this;this.$axios.get("departments",e).then((function(e){var data=e.data;t.departments=data.data,t.departments.unshift({id:"---",name:"Select All"})})).catch((function(e){return console.log(e)}))},employeesByDepartment:function(){var e=this;this.loading=!0;var t=this.options,n=t.page,o=t.itemsPerPage,r={params:{department_ids:this.department_ids,per_page:o,page:n,company_id:this.$auth.user.company_id}};if(!this.department_ids.length)return this.employees=[],this.total=0,void(this.loading=!1);this.$axios.get("employeesByDepartment",r).then((function(t){var data=t.data;e.employees=data.data,e.total=data.total,e.loading=!1}))},dialogSearchIt:function(e){this.employeesByDepartment(),this.getEmployeesBySubDepartment()},dialogSearchByEmployeeID:function(e){var t=this;if(0==e.length)this.employeesByDepartment();else if(e.length>2){this.filterLoader=!0;var n=this.options,o=n.page,r={params:{per_page:n.itemsPerPage,page:o,employee_search:this.employee_search,company_id:this.$auth.user.company_id}};this.$axios.get("employeesByEmployeeId",r).then((function(e){var data=e.data;t.employees=data.data,t.total=data.total,t.filterLoader=!1}))}},getEmployeesBySubDepartment:function(){var e=this;this.loading=!0;var t=this.options,n=t.page,o=t.itemsPerPage,r={params:{department_ids:this.department_ids,sub_department_ids:this.sub_department_ids,per_page:o,page:n,company_id:this.$auth.user.company_id}};this.sub_department_ids.length?this.$axios.get("employeesBySubDepartment",r).then((function(t){var data=t.data;e.employees=data.data,e.total=data.total,e.loading=!1})).catch((function(e){return console.log(e)})):this.loading=!1},subDepartmentsByDepartment:function(){var e=this;this.options.params.department_ids=this.department_ids,this.$axios.get("sub-departments-by-departments",this.options).then((function(t){var data=t.data;e.sub_departments=data,e.sub_departments.unshift({id:"---",name:"Select All"})})).catch((function(e){return console.log(e)}))},runMultipleFunctions:function(){this.employeesByDepartment(),this.subDepartmentsByDepartment()},can:function(e){return this.$dateFormat.can(e,this)},getDataFromApi:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.endpoint;this.loading=!0;var n=this.options,o=n.page,r={params:{per_page:n.itemsPerPage,page:o,company_id:this.$auth.user.company_id,branch_id:this.branch_id}};this.$axios.get(t,r).then((function(t){var data=t.data;e.employees=data.data,e.total=data.total,e.loading=!1}))},searchIt:function(){var s=this.search.length,e=this.search;0==s?this.getDataFromApi():s>2&&this.getDataFromApi("".concat(this.endpoint,"/search/").concat(e))},delteteSelectedRecords:function(){var e=this,t=this.ids.map((function(e){return e.schedule.id}));confirm("Are you sure you wish to delete selected records , to mitigate any inconvenience in future.")&&this.$axios.post("schedule_employee/delete/selected",{ids:t}).then((function(t){var data=t.data;data.status?(e.getDataFromApi(),e.snackbar=data.status,e.ids=[],e.response="Selected records has been deleted"):(e.errors=data.errors,alert("1"))})).catch((function(e){return console.log(e)}))},deleteItem:function(e){var t=this;confirm("Are you sure you wish to delete , to mitigate any inconvenience in future.")&&this.$axios.delete("schedule_employees/"+e.id).then((function(n){var data=n.data,o=t.employees.indexOf(e);t.employees.splice(o,1),t.snackbar=data.status,t.response=data.message,t.getDataFromApi()})).catch((function(e){return console.log(e)}))},save:function(){var e=this;this.loading=!0,this.errors=[];var t={employee_ids:this.employee_ids.map((function(e){return e.system_user_id})),schedules:this.schedules_temp_list,company_id:this.$auth.user.company_id,branch_id:this.branch_id};this.$axios.post("schedule_employees",t).then((function(t){var data=t.data;if(!data.status)return null!=data&&data.custom_errors&&(e.custom_errors=data.custom_errors,e.errors=[]),null!=data&&data.errors&&(e.errors=data.errors,e.custom_errors=[]),void(e.loading=!1);e.dialog=!1,e.response=data.message,e.snackbar=!0,e.loading=!1,setTimeout((function(){e.$router.push("/employee_schedule")}),1e3)})).catch((function(e){return console.log(e)}))},process:function(e){var t=this;e.then((function(e){var data=e.data;if(!data.status)return null!=data&&data.custom_errors&&(t.custom_errors=data.custom_errors,t.errors=[]),null!=data&&data.errors&&(t.errors=data.errors,t.custom_errors=[]),void(t.loading=!1);t.dialog=!1,t.response=data.message,t.snackbar=!0,t.loading=!1,setTimeout((function(){t.$router.push("/employee_schedule")}),1e3)})).catch((function(e){return console.log(e)}))}}}),C=F,A=n(116),component=Object(A.a)(C,(function(){var e=this,t=e._self._c;return t("div",[t($.a,{attrs:{flat:"",dense:""}},[t(r.a,{staticClass:"primary",attrs:{small:"",color:"primary"},on:{click:e.arrangeShift}},[e._v("Arrange Shift(s)\n    ")]),e._v(" "),t(y.a,{staticClass:"mx-2",attrs:{color:"primary"},on:{click:function(t){e.dialogVisible=!0}}},[e._v("mdi-filter")]),e._v(" "),t("div",[t("br"),e._v(" "),t(D.a,{staticStyle:{"margin-top":"9px",width:"200px"},attrs:{clearable:"",small:"",cols:"2",items:[{branch_name:"All Branches",id:""}].concat(Object(j.a)(e.branchesList)),dense:"",placeholder:"All Branches ",outlined:"","item-value":"id","item-text":"branch_name"},on:{change:function(t){return e.filterBranchdata(t)}},model:{value:e.branch_id,callback:function(t){e.branch_id=t},expression:"branch_id"}})],1)],1),e._v(" "),t(m.a,{attrs:{"show-select":"","item-key":"id",headers:e.headers,items:e.employees,"server-items-length":e.total,loading:e.loading,options:e.options,"footer-props":{itemsPerPageOptions:[50,100,500,1e3]}},on:{"update:options":function(t){e.options=t}},scopedSlots:e._u([{key:"item.name",fn:function(t){var n=t.item;return[e._v("\n      "+e._s(n.first_name?n.first_name:"---")+"\n      "+e._s(n.last_name?n.last_name:"---")+"\n    ")]}}]),model:{value:e.employee_ids,callback:function(t){e.employee_ids=t},expression:"employee_ids"}}),e._v(" "),t(_.a,{attrs:{persistent:"",width:"900"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[t(l.a,[t(c.c,{staticClass:"popup_background mb-1",attrs:{dark:""}},[e._v("\n        Arrange Shift(s)\n        "),t(O.a),e._v(" "),t(y.a,{attrs:{title:"Close ",right:"",dark:"",color:"black",size:"x-large"},on:{click:e.close}},[e._v("mdi mdi-close-circle-outline")])],1),e._v(" "),e._l(e.schedules_temp_list,(function(n,i){return t(c.b,{key:i},[t(S.a,[t(h.a,{attrs:{md:"3"}},[t("div",{},[e._v("Schedule List")]),e._v(" "),t(o.a,{attrs:{outlined:"",dense:"","x-small":"",items:e.shifts,"item-value":"shift_id","item-text":"name"},on:{change:function(t){return e.getUpdateSchedule(n)}},model:{value:n.shift_id,callback:function(t){e.$set(n,"shift_id",t)},expression:"item.shift_id"}})],1),e._v(" "),t(h.a,{attrs:{md:"3"}},[t("div",{staticClass:"mb-6"},[t("div",[e._v("From")]),e._v(" "),t(x.a,{ref:"from_menu",refInFor:!0,attrs:{"close-on-content-click":!1,"return-value":n.from_date,transition:"scale-transition","offset-y":"","min-width":"auto"},on:{"update:returnValue":function(t){return e.$set(n,"from_date",t)},"update:return-value":function(t){return e.$set(n,"from_date",t)}},scopedSlots:e._u([{key:"activator",fn:function(o){var r=o.on,l=o.attrs;return[t(k.a,e._g(e._b({attrs:{"hide-details":!0,outlined:"",dense:"",readonly:""},model:{value:n.from_date,callback:function(t){e.$set(n,"from_date",t)},expression:"item.from_date"}},"v-text-field",l,!1),r))]}}],null,!0),model:{value:e.from_menu[i],callback:function(t){e.$set(e.from_menu,i,t)},expression:"from_menu[i]"}},[e._v(" "),t(f.a,{attrs:{"no-title":"",scrollable:""},model:{value:n.from_date,callback:function(t){e.$set(n,"from_date",t)},expression:"item.from_date"}},[t(O.a),e._v(" "),t(r.a,{attrs:{text:"",color:"primary"},on:{click:function(t){e.from_menu[i]=!1}}},[e._v("\n                    Cancel\n                  ")]),e._v(" "),t(r.a,{attrs:{text:"",color:"primary"},on:{click:function(t){return e.set_date_save(e.$refs.from_menu[i],n.from_date,i)}}},[e._v("\n                    OK\n                  ")])],1)],1)],1)]),e._v(" "),t(h.a,{attrs:{md:"3"}},[t("div",{staticClass:"mb-6"},[t("div",[e._v("To")]),e._v(" "),t(x.a,{ref:"to_menu",refInFor:!0,attrs:{"close-on-content-click":!1,"return-value":n.to_date,transition:"scale-transition","offset-y":"","min-width":"auto"},on:{"update:returnValue":function(t){return e.$set(n,"to_date",t)},"update:return-value":function(t){return e.$set(n,"to_date",t)}},scopedSlots:e._u([{key:"activator",fn:function(o){var r=o.on,l=o.attrs;return[t(k.a,e._g(e._b({attrs:{"hide-details":!0,outlined:"",dense:"",readonly:""},model:{value:n.to_date,callback:function(t){e.$set(n,"to_date",t)},expression:"item.to_date"}},"v-text-field",l,!1),r))]}}],null,!0),model:{value:e.to_menu[i],callback:function(t){e.$set(e.to_menu,i,t)},expression:"to_menu[i]"}},[e._v(" "),t(f.a,{attrs:{"no-title":"",scrollable:""},model:{value:n.to_date,callback:function(t){e.$set(n,"to_date",t)},expression:"item.to_date"}},[t(O.a),e._v(" "),t(r.a,{attrs:{text:"",color:"primary"},on:{click:function(t){e.to_menu[i]=!1}}},[e._v("\n                    Cancel\n                  ")]),e._v(" "),t(r.a,{attrs:{text:"",color:"primary"},on:{click:function(t){return e.set_date_save(e.$refs.to_menu[i],n.to_date,i)}}},[e._v("\n                    OK\n                  ")])],1)],1)],1)]),e._v(" "),t(h.a,{attrs:{md:"2"}},[t("div",[e._v("\n              Overtime Allowed\n              "),t(d.a,{staticStyle:{"margin-top":"-8px"},model:{value:n.is_over_time,callback:function(t){e.$set(n,"is_over_time",t)},expression:"item.is_over_time"}})],1)]),e._v(" "),t(h.a,{attrs:{md:"1"}},[t("div"),e._v(" "),i?t(y.a,{attrs:{color:"error"},on:{click:function(t){return e.removeItem(i)}}},[e._v("mdi-delete")]):t(y.a,{attrs:{title:"Add   Schedule ",dark:"",color:"black",size:"x-large"},on:{click:e.addRow}},[e._v("mdi-plus-circle")])],1)],1)],1)})),e._v(" "),t(v.a),e._v(" "),t(c.a,[t(O.a),e._v(" "),t(r.a,{attrs:{dark:"",small:"",color:"grey"},on:{click:e.close}},[e._v(" Close ")]),e._v(" "),t(r.a,{attrs:{dark:"",small:"",color:"primary"},on:{click:e.save}},[e._v(" Submit ")])],1)],2)],1),e._v(" "),t(_.a,{attrs:{persistent:"","max-width":"500px"},model:{value:e.dialogVisible,callback:function(t){e.dialogVisible=t},expression:"dialogVisible"}},[t(l.a,[t(c.c,{staticClass:"popup_background",attrs:{dense:"",dark:""}},[e._v("\n        Filter\n        "),t(O.a),e._v(" "),t(y.a,{attrs:{outlined:"",dark:""},on:{click:function(t){e.dialogVisible=!1}}},[e._v("\n          mdi mdi-close-circle\n        ")])],1),e._v(" "),e.filterLoader?t(I.a,{attrs:{indeterminate:"",color:"primary"}}):e._e(),e._v(" "),t("br"),e._v(" "),t(c.b,[t("div",[t(o.a,{attrs:{placeholder:"Department",outlined:"",dense:"",multiple:"","x-small":"",items:e.departments,"item-value":"id","item-text":"name",disabled:1==e.is_edit},on:{change:e.runMultipleFunctions},model:{value:e.department_ids,callback:function(t){e.department_ids=t},expression:"department_ids"}}),e._v(" "),t(o.a,{attrs:{placeholder:"Sub Department",outlined:"",dense:"",multiple:"","x-small":"",items:e.sub_departments,"item-value":"id","item-text":"name",disabled:1==e.is_edit},on:{change:e.runMultipleFunctions},model:{value:e.department_ids,callback:function(t){e.department_ids=t},expression:"department_ids"}}),e._v(" "),t(k.a,{attrs:{label:"Search Employee by ID",outlined:"",dense:"","append-icon":"mdi-magnify","single-line":"","hide-details":""},on:{input:e.dialogSearchByEmployeeID},model:{value:e.employee_search,callback:function(t){e.employee_search=t},expression:"employee_search"}})],1)])],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports},883:function(e,t,n){var content=n(884);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(22).default)("1377ef10",content,!0,{sourceMap:!1})},884:function(e,t,n){var o=n(21)((function(i){return i[1]}));o.push([e.i,".v-autocomplete.v-input>.v-input__control>.v-input__slot{cursor:text}.v-autocomplete input{align-self:center}.v-autocomplete.v-select.v-input--is-focused input{min-width:64px}.v-autocomplete:not(.v-input--is-focused).v-select--chips input{max-height:0;padding:0}.v-autocomplete--is-selecting-index input{opacity:0}.v-autocomplete.v-text-field--enclosed:not(.v-text-field--solo):not(.v-text-field--single-line):not(.v-text-field--outlined) .v-select__slot>input{margin-top:24px}.v-autocomplete.v-text-field--enclosed:not(.v-text-field--solo):not(.v-text-field--single-line):not(.v-text-field--outlined).v-input--dense .v-select__slot>input{margin-top:20px}.v-autocomplete__content.v-menu__content,.v-autocomplete__content.v-menu__content .v-card{border-radius:0}",""]),o.locals={},e.exports=o},893:function(e,t,n){"use strict";n(12),n(14),n(17),n(11),n(18);var o=n(3),r=(n(80),n(6),n(13),n(89),n(99),n(216),n(41),n(61),n(883),n(892)),l=n(214),c=n(65),d=n(0);function h(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function m(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var f=m(m({},r.b),{},{offsetY:!0,offsetOverflow:!0,transition:!1});t.a=r.a.extend({name:"v-autocomplete",props:{autoSelectFirst:{type:Boolean,default:!1},filter:{type:Function,default:function(e,t,n){return n.toLocaleLowerCase().indexOf(t.toLocaleLowerCase())>-1}},hideNoData:Boolean,menuProps:{type:r.a.options.props.menuProps.type,default:function(){return f}},noFilter:Boolean,searchInput:{type:String}},data:function(){return{lazySearch:this.searchInput}},computed:{classes:function(){return m(m({},r.a.options.computed.classes.call(this)),{},{"v-autocomplete":!0,"v-autocomplete--is-selecting-index":this.selectedIndex>-1})},computedItems:function(){return this.filteredItems},selectedValues:function(){var e=this;return this.selectedItems.map((function(t){return e.getValue(t)}))},hasDisplayedItems:function(){var e=this;return this.hideSelected?this.filteredItems.some((function(t){return!e.hasItem(t)})):this.filteredItems.length>0},currentRange:function(){return null==this.selectedItem?0:String(this.getText(this.selectedItem)).length},filteredItems:function(){var e=this;return!this.isSearching||this.noFilter||null==this.internalSearch?this.allItems:this.allItems.filter((function(t){var n=Object(d.s)(t,e.itemText),text=null!=n?String(n):"";return e.filter(t,String(e.internalSearch),text)}))},internalSearch:{get:function(){return this.lazySearch},set:function(e){this.lazySearch!==e&&(this.lazySearch=e,this.$emit("update:search-input",e))}},isAnyValueAllowed:function(){return!1},isDirty:function(){return this.searchIsDirty||this.selectedItems.length>0},isSearching:function(){return this.multiple&&this.searchIsDirty||this.searchIsDirty&&this.internalSearch!==this.getText(this.selectedItem)},menuCanShow:function(){return!!this.isFocused&&(this.hasDisplayedItems||!this.hideNoData)},$_menuProps:function(){var e=r.a.options.computed.$_menuProps.call(this);return e.contentClass="v-autocomplete__content ".concat(e.contentClass||"").trim(),m(m({},f),e)},searchIsDirty:function(){return null!=this.internalSearch&&""!==this.internalSearch},selectedItem:function(){var e=this;return this.multiple?null:this.selectedItems.find((function(i){return e.valueComparator(e.getValue(i),e.getValue(e.internalValue))}))},listData:function(){var data=r.a.options.computed.listData.call(this);return data.props=m(m({},data.props),{},{items:this.virtualizedItems,noFilter:this.noFilter||!this.isSearching||!this.filteredItems.length,searchInput:this.internalSearch}),data}},watch:{filteredItems:"onFilteredItemsChanged",internalValue:"setSearch",isFocused:function(e){e?(document.addEventListener("copy",this.onCopy),this.$refs.input&&this.$refs.input.select()):(document.removeEventListener("copy",this.onCopy),this.blur(),this.updateSelf())},isMenuActive:function(e){!e&&this.hasSlot&&(this.lazySearch=null)},items:function(e,t){t&&t.length||!this.hideNoData||!this.isFocused||this.isMenuActive||!e.length||this.activateMenu()},searchInput:function(e){this.lazySearch=e},internalSearch:"onInternalSearchChanged",itemText:"updateSelf"},created:function(){this.setSearch()},destroyed:function(){document.removeEventListener("copy",this.onCopy)},methods:{onFilteredItemsChanged:function(e,t){var n=this;if(e!==t){if(!this.autoSelectFirst){var o=t[this.$refs.menu.listIndex];o?this.setMenuIndex(e.findIndex((function(i){return i===o}))):this.setMenuIndex(-1),this.$emit("update:list-index",this.$refs.menu.listIndex)}this.$nextTick((function(){n.internalSearch&&(1===e.length||n.autoSelectFirst)&&(n.$refs.menu.getTiles(),n.autoSelectFirst&&e.length&&(n.setMenuIndex(0),n.$emit("update:list-index",n.$refs.menu.listIndex)))}))}},onInternalSearchChanged:function(){this.updateMenuDimensions()},updateMenuDimensions:function(){this.isMenuActive&&this.$refs.menu&&this.$refs.menu.updateDimensions()},changeSelectedIndex:function(e){this.searchIsDirty||(this.multiple&&e===d.z.left?-1===this.selectedIndex?this.selectedIndex=this.selectedItems.length-1:this.selectedIndex--:this.multiple&&e===d.z.right?this.selectedIndex>=this.selectedItems.length-1?this.selectedIndex=-1:this.selectedIndex++:e!==d.z.backspace&&e!==d.z.delete||this.deleteCurrentItem())},deleteCurrentItem:function(){var e=this.selectedIndex,t=this.selectedItems[e];if(this.isInteractive&&!this.getDisabled(t)){var n=this.selectedItems.length-1;if(-1!==this.selectedIndex||0===n){var o=e!==this.selectedItems.length-1?e:e-1;this.selectedItems[o]?this.selectItem(t):this.setValue(this.multiple?[]:null),this.selectedIndex=o}else this.selectedIndex=n}},clearableCallback:function(){this.internalSearch=null,r.a.options.methods.clearableCallback.call(this)},genInput:function(){var input=l.a.options.methods.genInput.call(this);return input.data=Object(c.a)(input.data,{attrs:{"aria-activedescendant":Object(d.q)(this.$refs.menu,"activeTile.id"),autocomplete:Object(d.q)(input.data,"attrs.autocomplete","off")},domProps:{value:this.internalSearch}}),input},genInputSlot:function(){var slot=r.a.options.methods.genInputSlot.call(this);return slot.data.attrs.role="combobox",slot},genSelections:function(){return this.hasSlot||this.multiple?r.a.options.methods.genSelections.call(this):[]},onClick:function(e){this.isInteractive&&(this.selectedIndex>-1?this.selectedIndex=-1:this.onFocus(),this.isAppendInner(e.target)||this.activateMenu())},onInput:function(e){if(!(this.selectedIndex>-1)&&e.target){var t=e.target,n=t.value;t.value&&this.activateMenu(),this.multiple||""!==n||this.deleteCurrentItem(),this.internalSearch=n,this.badInput=t.validity&&t.validity.badInput}},onKeyDown:function(e){var t=e.keyCode;!e.ctrlKey&&[d.z.home,d.z.end].includes(t)||r.a.options.methods.onKeyDown.call(this,e),this.changeSelectedIndex(t)},onSpaceDown:function(e){},onTabDown:function(e){r.a.options.methods.onTabDown.call(this,e),this.updateSelf()},onUpDown:function(e){e.preventDefault(),this.activateMenu()},selectItem:function(e){r.a.options.methods.selectItem.call(this,e),this.setSearch()},setSelectedItems:function(){r.a.options.methods.setSelectedItems.call(this),this.isFocused||this.setSearch()},setSearch:function(){var e=this;this.$nextTick((function(){e.multiple&&e.internalSearch&&e.isMenuActive||(e.internalSearch=!e.selectedItems.length||e.multiple||e.hasSlot?null:e.getText(e.selectedItem))}))},updateSelf:function(){(this.searchIsDirty||this.internalValue)&&(this.multiple||this.valueComparator(this.internalSearch,this.getValue(this.internalValue))||this.setSearch())},hasItem:function(e){return this.selectedValues.indexOf(this.getValue(e))>-1},onCopy:function(e){var t,n;if(-1!==this.selectedIndex){var o=this.selectedItems[this.selectedIndex],r=this.getText(o);null===(t=e.clipboardData)||void 0===t||t.setData("text/plain",r),null===(n=e.clipboardData)||void 0===n||n.setData("text/vnd.vuetify.autocomplete.item+plain",r),e.preventDefault()}}}})}}]);