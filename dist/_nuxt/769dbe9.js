(window.webpackJsonp=window.webpackJsonp||[]).push([[381],{1663:function(e,t,o){"use strict";o.r(t);var n=o(133),r=o(87),l=o(1179),c=o(518),d=o(1556),_=o(872),m=o(96),v=o(855),h=(o(37),o(6),o(72),o(33),o(58),o(41),o(61),{data:function(){return{ids:[],schdulesList:[],employees:[],cumulativeIndex:1,perPage:10,currentPage:1,branchesList:[],branch_id:null,totalRowsCount:0,snack:!1,snackColor:"",snackText:"",displayNoRecords:!1,Module:"Employee Schedule",shift_types:[],manual_shift:{},options:{perPage:10},options_dialog:{},endpoint:"scheduled_employees_index",endpoint_dialog:"scheduled_employees_list",search:"",shifts_for_filter:[],dialog_search:"",snackbar:!1,dialog:!1,editDialog:!1,loading:!1,loading_dialog:!1,isEdit:!1,total:0,total_dialog:0,system_user_id:0,headersGroupInfo:[{text:"Leave Type",align:"left",key:"name",sortable:!1,value:"leave_type"},{text:"Total",align:"center",key:"name",sortable:!1,value:"total"},{text:"Approved",align:"center",key:"name",sortable:!1,value:"approved"},{text:"Available",align:"center",key:"name",sortable:!1,value:"available"}],pagination:{current:1,total:0,per_page:10},response:"",data:[],errors:[],headers_ids:[],leave_group_name:"",DialogLeaveGroupData:[],leaveGroupId:""}},computed:{},created:function(){this.system_user_id=this.$auth.user.employee.system_user_id,this.getDataFromApi()},methods:{caps:function(e){return""==e||null==e?"---":e.toString().replace(/\b\w/g,(function(e){return e.toUpperCase()}))},ScheduleItem:function(e,t){var o=this;this.empId=e.employee_id;var n=e.employee_id,r={company_id:this.$auth.user.company_id};this.$axios.get("get_roster_by_employee/".concat(n),{params:r}).then((function(e){var data=e.data;o.isEdit="edit"==t,o.schedules_temp_list=data,o.editDialog=!0}))},can:function(e){return this.$pagePermission.can(e,this)},can_old:function(e){return this.$auth.user.permissions.includes(e)},gotoGroupDetails:function(e,t,o){var n=this;if(!e)return!1;this.dialogLeaveGroup=!0,this.viewEmployeeName=o;var r={params:{per_page:1e3,company_id:this.$auth.user.company_id,employee_id:t}};this.$axios.get("leave_groups/"+e,r).then((function(e){var data=e.data;n.DialogLeaveGroupData=data[0].leave_count,n.leave_group_name=data[0].group_name}))},getDataFromApi:function(){var e=this,t={params:{id:this.$auth.user.employee.id,company_id:this.$auth.user.company_id}};this.$axios.get("employee",t).then((function(t){var data=t.data;data.data[0]&&(e.employeeObject=data.data[0]),e.employeeObject&&e.employeeObject.leave_group_id&&e.gotoGroupDetails(e.employeeObject.leave_group_id,e.employeeObject.employee_id,e.employeeObject.first_name)}))}}}),y=o(116),component=Object(y.a)(h,(function(){var e=this,t=e._self._c;return t("div",[t("div",{staticClass:"text-center ma-2"},[t(_.a,{attrs:{top:"top",color:"secondary",elevation:"24"},model:{value:e.snackbar,callback:function(t){e.snackbar=t},expression:"snackbar"}},[e._v("\n      "+e._s(e.response)+"\n    ")])],1),e._v(" "),t(n.a,{staticClass:""},[t(m.a,{staticClass:"rounded-md",attrs:{color:"popup_background",dense:"",flat:""}},[t(c.a,{attrs:{cols:"12"}},[t(v.b,[t("span",[e._v("Leave Group : "+e._s(e.leave_group_name))])])],1)],1),e._v(" "),t(r.c,[t(d.a,{staticClass:"elevation-0",attrs:{"item-key":"id",headers:e.headersGroupInfo,items:e.DialogLeaveGroupData,loading:e.loading,"hide-default-footer":!0},scopedSlots:e._u([{key:"item.leave_type",fn:function(t){var o=t.item;return[e._v("\n          "+e._s(o.leave_type.name)+" ("+e._s(o.leave_type.short_name)+")\n        ")]}},{key:"item.total",fn:function(o){var n=o.item;return[t(l.a,{attrs:{color:"black","text-color":"white"}},[e._v("\n            "+e._s(n.leave_type_count))])]}},{key:"item.approved",fn:function(o){var n=o.item;return[t(l.a,{attrs:{color:"primary"}},[e._v(" "+e._s(n.employee_used))])]}},{key:"item.available",fn:function(o){var n=o.item;return[t(l.a,{staticClass:"ma-2",attrs:{color:"green","text-color":"white"}},[e._v("\n            "+e._s(n.leave_type_count-n.employee_used))])]}}]),model:{value:e.ids,callback:function(t){e.ids=t},expression:"ids"}})],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports},855:function(e,t,o){"use strict";o.d(t,"a",(function(){return c})),o.d(t,"b",(function(){return l}));var n=o(96),r=o(1),l=Object(r.k)("v-toolbar__title"),c=Object(r.k)("v-toolbar__items");n.a}}]);