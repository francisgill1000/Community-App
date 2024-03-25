(window.webpackJsonp=window.webpackJsonp||[]).push([[395],{1620:function(t,e,n){"use strict";n.r(e);var o=n(133),r=n(516),c=n(1561),l=n(873),h=n(997),d=n(96),_=n(856),v=(n(37),n(99),n(6),n(72),n(33),n(58),n(35),n(216),n(56),n(521),n(13),n(41),n(61),{data:function(){return{schdulesList:[],employees:[],cumulativeIndex:1,perPage:10,currentPage:1,branchesList:[],branch_id:null,totalRowsCount:0,snack:!1,snackColor:"",snackText:"",displayNoRecords:!1,Module:"Employee Schedule",shift_types:[],manual_shift:{},options:{perPage:10},options_dialog:{},endpoint:"scheduled_employees_index",endpoint_dialog:"scheduled_employees_list",search:"",shifts_for_filter:[],dialog_search:"",snackbar:!1,dialog:!1,editDialog:!1,loading:!1,loading_dialog:!1,isEdit:!1,total:0,total_dialog:0,system_user_id:0,headers_table:[{text:"#",align:"left",sortable:!1,value:"sno",filterable:!1},{text:"Shift Name",align:"left",sortable:!1,value:"shift_name",filterable:!1},{text:"Time",align:"left",sortable:!1,value:"on_duty_time",filterable:!1},{text:"Working Hours",align:"left",sortable:!1,value:"working_hours",filterable:!1},{text:"Date",align:"left",sortable:!1,value:"from_date",filterable:!1},{text:"Days",align:"left",sortable:!1,value:"days",filterable:!1},{text:"OverTime",align:"left",sortable:!1,value:"isOverTime",filterable:!1},{text:"Shift Type",align:"left",sortable:!1,value:"shift_type",filterable:!1}],pagination:{current:1,total:0,per_page:10},response:"",data:[],errors:[],headers_ids:[]}},computed:{},watch:{options:{handler:function(){this.getDataFromApi()},deep:!0}},created:function(){this.system_user_id=this.$auth.user.employee.system_user_id,this.getDataFromApi()},methods:{getCurrentShift:function(t){var e=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"][(new Date).getDay()];return t.roster.json.find((function(t){return t.day==e})).shift_name},gotoCreateSchedule:function(){this.$router.push("/employee_schedule/create")},datatable_save:function(){},datatable_cancel:function(){this.datatable_search_textbox=""},datatable_open:function(){this.datatable_search_textbox=""},datatable_close:function(){this.loading=!1},onPageChange:function(){this.getDataFromApi()},caps:function(t){return""==t||null==t?"---":t.toString().replace(/\b\w/g,(function(t){return t.toUpperCase()}))},ScheduleItem:function(t,e){var n=this;this.empId=t.employee_id;var o=t.employee_id,r={company_id:this.$auth.user.company_id};this.$axios.get("get_roster_by_employee/".concat(o),{params:r}).then((function(t){var data=t.data;n.isEdit="edit"==e,n.schedules_temp_list=data,n.editDialog=!0}))},set_date_save:function(t,e,n){t.save(e);var o=this.setSevenDays(e);this.schedules_temp_list[n].to_date=o},setSevenDays:function(t){var e=new Date(t);e.setDate(e.getDate()+6);var n=new Date(e),o=n.getDate();o=o<"10"?"0"+o:o;var r=n.getMonth()+1;r=r<10?"0"+r:r;var c=n.getFullYear();return"".concat(c,"-").concat(r,"-").concat(o)},update:function(){var t={schedules:this.schedules_temp_list,deleteIds:this.deleteIds,company_id:this.$auth.user.company_id};this.process(this.$axios.put("schedule_update/".concat(this.empId),t))},removeItem:function(i,t){t.id&&this.deleteIds.push(t.id),this.schedules_temp_list.splice(i,1)},get_rosters:function(){var t=this,e={company_id:this.$auth.user.company_id};this.$axios.get("roster_list",{params:e}).then((function(e){var data=e.data;t.rosters=data,t.addRow(data[0].schedule_id),t.rosterFirstValue=data[0].schedule_id}))},addRow:function(t){var e={schedule_id:t,from_date:(new Date).toJSON().slice(0,10),to_date:(new Date).toJSON().slice(0,10),is_over_time:!1};this.schedules_temp_list.length<5&&this.schedules_temp_list.push(e)},runShiftTypeFunction:function(){this.getShifts(this.shift_type_id)},close:function(){this.dialog=!1,this.is_edit=!1},getShifts:function(t){var e=this;if(3==this.shift_type_id)return this.shift_id=0,void(this.shifts=[]);var n={params:{shift_type_id:t,company_id:this.$auth.user.company_id}};this.$axios.get("shift_by_type",n).then((function(t){var data=t.data;e.shifts=data})).catch((function(t){return console.log(t)}))},getShiftTypes:function(t){var e=this;this.$axios.get("shift_type",t).then((function(t){var data=t.data;e.shift_types=data,e.shift_types.unshift({id:"",name:"Select Shift Type"})})).catch((function(t){return console.log(t)}))},runShiftFunction:function(){this.shifts=this.shifts.filter((function(t){return"---"!==t.id}))},getDepartments:function(t){var e=this;this.$axios.get("departments",t).then((function(t){var data=t.data;e.departments=data.data,e.departments.unshift({id:"---",name:"Select All"})})).catch((function(t){return console.log(t)}))},employeesByDepartment:function(){var t=this;this.loading_dialog=!0;var e=this.options_dialog,n=e.page,o=e.itemsPerPage,r={params:{department_ids:this.department_ids,per_page:o,page:n,company_id:this.$auth.user.company_id}};if(!this.department_ids.length)return this.employees_dialog=[],this.total_dialog=0,void(this.loading_dialog=!1);this.$axios.get("employeesByDepartment",r).then((function(e){var data=e.data;t.employees_dialog=data.data,t.total_dialog=data.total,t.loading_dialog=!1}))},getEmployeesBySubDepartment:function(){var t=this;this.loading_dialog=!0;var e=this.options_dialog,n=e.page,o=e.itemsPerPage,r={params:{department_ids:this.department_ids,sub_department_ids:this.sub_department_ids,per_page:o,page:n,company_id:this.$auth.user.company_id}};this.sub_department_ids.length?this.$axios.get("employeesBySubDepartment",r).then((function(e){var data=e.data;t.employees_dialog=data.data,t.total_dialog=data.total,t.loading_dialog=!1})).catch((function(t){return console.log(t)})):this.loading_dialog=!1},subDepartmentsByDepartment:function(){var t=this;this.options.params.department_ids=this.department_ids,this.$axios.get("sub-departments-by-departments",this.options).then((function(e){var data=e.data;t.sub_departments=data,t.sub_departments.unshift({id:"---",name:"Select All"})})).catch((function(t){return console.log(t)}))},runMultipleFunctions:function(){this.employeesByDepartment(),this.subDepartmentsByDepartment()},can:function(t){return this.$pagePermission.can(t,this)},can_old:function(t){return this.$auth.user.permissions.includes(t)},getSearchRecords:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";this.getDataFromApi(this.endpoint,t,e)},applyFilters:function(t,e){if(e&&e.length<3)return!1;this.getDataFromApi()},toggleFilter:function(){this.isFilter=!this.isFilter},clearFilters:function(){this.filters={},this.isFilter=!1,this.getDataFromApi()},getDataFromApi:function(){var t=this;arguments.length>0&&void 0!==arguments[0]||this.endpoint;this.loading=!0;var e=this.options,n=e.sortBy,o=e.sortDesc,r=e.page,c=e.itemsPerPage,l={params:{page:r,sortBy:n?n[0]:"",sortDesc:o?o[0]:"",per_page:c,pagination:!0,company_id:this.$auth.user.company_id}};this.currentPage=r,this.perPage=c,this.$axios.get("get_shifts_by_employee/".concat(this.system_user_id),{params:l.params}).then((function(e){var data=e.data;t.schdulesList=data.data,t.pagination.current=data.current_page,t.pagination.total=data.last_page,t.loading=!1,0==t.schdulesList.length&&(t.displayNoRecords=!0),t.totalRowsCount=data.total}))}}}),f=v,m=n(116),component=Object(m.a)(f,(function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"text-center ma-2"},[e(l.a,{attrs:{top:"top",color:"secondary",elevation:"24"},model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v("\n      "+t._s(t.response)+"\n    ")])],1),t._v(" "),e(o.a,[e(d.a,{staticClass:"rounded-md",attrs:{color:"popup_background",dense:"",flat:""}},[e(r.a,{attrs:{cols:"12"}},[e(_.b,[e("span",[t._v("Schedule(s)")])])],1)],1),t._v(" "),e(c.a,{staticClass:"elevation-1 alternate-rows",attrs:{dense:"",headers:t.headers_table,items:t.schdulesList,"model-value":"data.id",loading:t.loading,options:t.options,"footer-props":{itemsPerPageOptions:[10,50,100,500,1e3]},"server-items-length":t.totalRowsCount},on:{"update:options":function(e){t.options=e}},scopedSlots:t._u([{key:"item.sno",fn:function(e){var n=e.item;e.index;return[t._v("\n        "+t._s(t.currentPage?(t.currentPage-1)*t.perPage+(t.cumulativeIndex+t.schdulesList.indexOf(n)):"-")+"\n      ")]}},{key:"item.shift_name",fn:function(e){var n=e.item;return[t._v(t._s(n.shift&&n.shift.name)+"\n      ")]}},{key:"item.on_duty_time",fn:function(e){var n=e.item;return[t._v(t._s(n.shift&&n.shift.on_duty_time)+" to\n        "+t._s(n.shift&&n.shift.off_duty_time)+"\n      ")]}},{key:"item.working_hours",fn:function(e){var n=e.item;return[t._v("\n        "+t._s(n.shift&&n.shift.working_hours)+"h\n      ")]}},{key:"item.from_date",fn:function(n){var o=n.item;return[t._v(t._s(t.$dateFormat.format1(o.from_date))+" "),e("br"),t._v("\n        "+t._s(t.$dateFormat.format1(o.to_date))+"\n      ")]}},{key:"item.days",fn:function(n){var o=n.item;n.index;return t._l(o.shift.days,(function(n,r){return e("span",[t._v(t._s(n)),r<o.shift.days.length-1?e("span",[t._v(" ,")]):t._e()])}))}},{key:"item.isOverTime",fn:function(n){var o=n.item;return[e(h.a,{attrs:{disabled:"",lable:"item.isOverTime"},model:{value:o.isOverTime,callback:function(e){t.$set(o,"isOverTime",e)},expression:"item.isOverTime"}})]}},{key:"item.shift_type",fn:function(e){var n=e.item;return[t._v(t._s(n.shift_type.name)+"\n      ")]}}])})],1)],1)}),[],!1,null,null,null);e.default=component.exports},856:function(t,e,n){"use strict";n.d(e,"a",(function(){return l})),n.d(e,"b",(function(){return c}));var o=n(96),r=n(1),c=Object(r.k)("v-toolbar__title"),l=Object(r.k)("v-toolbar__items");o.a},966:function(t,e,n){var content=n(967);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(22).default)("59f225a8",content,!0,{sourceMap:!1})},967:function(t,e,n){var o=n(21)((function(i){return i[1]}));o.push([t.i,".theme--light.v-input--switch .v-input--switch__thumb{color:#fff}.theme--light.v-input--switch .v-input--switch__track{color:rgba(0,0,0,.38)}.theme--light.v-input--switch.v-input--is-disabled:not(.v-input--is-dirty) .v-input--switch__thumb{color:#fafafa!important}.theme--light.v-input--switch.v-input--is-disabled:not(.v-input--is-dirty) .v-input--switch__track{color:rgba(0,0,0,.12)!important}.theme--dark.v-input--switch .v-input--switch__thumb{color:#bdbdbd}.theme--dark.v-input--switch .v-input--switch__track{color:hsla(0,0%,100%,.3)}.theme--dark.v-input--switch.v-input--is-disabled:not(.v-input--is-dirty) .v-input--switch__thumb{color:#424242!important}.theme--dark.v-input--switch.v-input--is-disabled:not(.v-input--is-dirty) .v-input--switch__track{color:hsla(0,0%,100%,.1)!important}.v-input--switch__thumb,.v-input--switch__track{background-color:currentColor;pointer-events:none;transition:inherit}.v-input--switch__track{border-radius:8px;height:14px;left:2px;opacity:.6;position:absolute;right:2px;top:calc(50% - 7px);width:36px}.v-input--switch__thumb{align-items:center;border-radius:50%;display:flex;height:20px;justify-content:center;position:relative;top:calc(50% - 10px);transition:.3s cubic-bezier(.25,.8,.5,1);width:20px}.v-input--switch .v-input--selection-controls__input{transition:opacity .3s cubic-bezier(.25,.8,.5,1);width:38px}.v-input--switch .v-input--selection-controls__ripple{top:calc(50% - 24px)}.v-input--switch.v-input--dense .v-input--switch__thumb{height:18px;width:18px}.v-input--switch.v-input--dense .v-input--switch__track{height:12px;width:32px}.v-input--switch.v-input--dense.v-input--switch--inset .v-input--switch__track{height:22px;left:-3px;top:calc(50% - 12px);width:44px}.v-input--switch.v-input--dense .v-input--selection-controls__ripple{top:calc(50% - 22px)}.v-input--switch.v-input--is-dirty.v-input--is-disabled .v-input--selection-controls__input{opacity:.6}.v-application--is-ltr .v-input--switch .v-input--selection-controls__ripple{left:-14px}.v-application--is-ltr .v-input--switch.v-input--dense .v-input--selection-controls__ripple{left:-12px}.v-application--is-ltr .v-input--switch.v-input--is-dirty .v-input--selection-controls__ripple,.v-application--is-ltr .v-input--switch.v-input--is-dirty .v-input--switch__thumb{transform:translate(20px)}.v-application--is-rtl .v-input--switch .v-input--selection-controls__ripple{right:-14px}.v-application--is-rtl .v-input--switch.v-input--dense .v-input--selection-controls__ripple{right:-12px}.v-application--is-rtl .v-input--switch.v-input--is-dirty .v-input--selection-controls__ripple,.v-application--is-rtl .v-input--switch.v-input--is-dirty .v-input--switch__thumb{transform:translate(-20px)}.v-input--switch:not(.v-input--switch--flat):not(.v-input--switch--inset) .v-input--switch__thumb{box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12)}.v-input--switch--inset .v-input--selection-controls__input,.v-input--switch--inset .v-input--switch__track{width:48px}.v-input--switch--inset .v-input--switch__track{border-radius:14px;height:28px;left:-4px;opacity:.32;top:calc(50% - 14px)}.v-application--is-ltr .v-input--switch--inset .v-input--selection-controls__ripple,.v-application--is-ltr .v-input--switch--inset .v-input--switch__thumb{transform:translate(0)!important}.v-application--is-rtl .v-input--switch--inset .v-input--selection-controls__ripple,.v-application--is-rtl .v-input--switch--inset .v-input--switch__thumb{transform:translate(-6px)!important}.v-application--is-ltr .v-input--switch--inset.v-input--is-dirty .v-input--selection-controls__ripple,.v-application--is-ltr .v-input--switch--inset.v-input--is-dirty .v-input--switch__thumb{transform:translate(20px)!important}.v-application--is-rtl .v-input--switch--inset.v-input--is-dirty .v-input--selection-controls__ripple,.v-application--is-rtl .v-input--switch--inset.v-input--is-dirty .v-input--switch__thumb{transform:translate(-26px)!important}",""]),o.locals={},t.exports=o},997:function(t,e,n){"use strict";n(12),n(14),n(13),n(6),n(17),n(11),n(18);var o=n(107),r=n(3),c=(n(217),n(218),n(522),n(966),n(352)),l=n(73),h=n(121),d=n(134),_=n(267),v=n(1),f=["title"];function m(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function y(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=c.a.extend({name:"v-switch",directives:{Touch:h.a},props:{inset:Boolean,loading:{type:[Boolean,String],default:!1},flat:{type:Boolean,default:!1}},computed:{classes:function(){return y(y({},l.a.options.computed.classes.call(this)),{},{"v-input--selection-controls v-input--switch":!0,"v-input--switch--flat":this.flat,"v-input--switch--inset":this.inset})},attrs:function(){return{"aria-checked":String(this.isActive),"aria-disabled":String(this.isDisabled),role:"switch"}},validationState:function(){return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0},switchData:function(){return this.setTextColor(this.loading?void 0:this.validationState,{class:this.themeClasses})}},methods:{genDefaultSlot:function(){return[this.genSwitch(),this.genLabel()]},genSwitch:function(){var t=this.attrs$,e=(t.title,Object(o.a)(t,f));return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.genInput("checkbox",y(y({},this.attrs),e)),this.genRipple(this.setTextColor(this.validationState,{directives:[{name:"touch",value:{left:this.onSwipeLeft,right:this.onSwipeRight}}]})),this.$createElement("div",y({staticClass:"v-input--switch__track"},this.switchData)),this.$createElement("div",y({staticClass:"v-input--switch__thumb"},this.switchData),[this.genProgress()])])},genProgress:function(){return this.$createElement(d.c,{},[!1===this.loading?null:this.$slots.progress||this.$createElement(_.a,{props:{color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,size:16,width:2,indeterminate:!0}})])},onSwipeLeft:function(){this.isActive&&this.onChange()},onSwipeRight:function(){this.isActive||this.onChange()},onKeydown:function(t){(t.keyCode===v.z.left&&this.isActive||t.keyCode===v.z.right&&!this.isActive)&&this.onChange()}}})}}]);