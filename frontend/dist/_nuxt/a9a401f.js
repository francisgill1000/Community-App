(window.webpackJsonp=window.webpackJsonp||[]).push([[163,180],{1042:function(t,e,n){"use strict";n.r(e);var r=n(114),l=n(133),o=n(518),c=n(1545),d=n(147),h=n(326),m=n(204),y=n(60),_=n(862),f=n(517),v=n(872),D=(n(12),n(14),n(13),n(17),n(18),n(3));n(33),n(266),n(56),n(35),n(62),n(45),n(80),n(6),n(72),n(58),n(11),n(55),n(37),n(216),n(215);function k(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function x(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?k(Object(source),!0).forEach((function(e){Object(D.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):k(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var A={props:["system_user_id","employee_id","table_id"],data:function(){return{year_display:"",payroll:{},cumulativeIndex:1,perPage:12,currentPage:1,branchesList:[],filterLoader:!1,filters:{},isFilter:!1,totalRowsCount:0,dialogVisible:!1,server_datatable_totalItems:1e3,filter_employeeid:"",snack:!1,snackColor:"",snackText:"",downloadAllDisplayStatus:!0,dialogPayslipsResults:!1,payslipsResultsmessages:[],payslipsDownloadAllEmployeeidsArray:[],payslipsDownloadAllURL:"",items:[],dataYears:[],tab:null,pagination:{current:1,total:0,per_page:100},options:{},Model:"Payroll",endpoint:"employee",search:"",snackbar:!1,dialog:!1,ids:[],loading:!1,total:0,paymentMethod:["Bank Transfer","Cash","Cheque"],Allowance:["Transport","Travel","Entertainment","Housing","Uniform","Uniform","Medical/health"],headers:[{text:"#"},{text:"E.ID"},{text:"Name"},{text:"Month/Year"},{text:"Designation"},{text:"Department"},{text:"Basic Salary"},{text:"Net Salary"},{text:"Payslip"}],headers_table:[{text:"#",align:"left",sortable:!1,key:"year_month",filterable:!1,value:"sno",filterSpecial:!1},{text:"Month/Year",align:"left",sortable:!1,key:"year_month",filterable:!1,value:"year_month",filterSpecial:!1},{text:"Basic Salary",align:"left",sortable:!0,filterable:!0,key:"payrollbasic",value:"basic_salary",filterSpecial:!1},{text:"Net Salary",align:"left",sortable:!0,filterable:!0,key:"net_salary",value:"net_salary"},{text:"Payslip",align:"left",sortable:!1,filterable:!1,key:"payslip",value:"payslip",filterSpecial:!1}],datatable_search_textbox:"",editedIndex:-1,editedItem:{name:""},defaultItem:{name:""},response:"",data:[],errors:[],departments:[],department_id:"",department_idPopup:"",work:{first_name:"",last_name:"",department:"",sub_department:"",designation:"",role:"",employee_id:"",system_user_id:"",user:"",profile_picture:"",phone_number:"",whatsapp_number:"",joining_date:""},BankInfo:{bank_name:"",account_no:"",account_title:"",iban:"",address:"",remark:"",company_id:"",employee_id:""},salary:{basic_salary:"",payment_method:"",remark:""},allowance:{name:"",amount:"",remark:""},generatePayslipDialog:!1,payslip_year:(new Date).getFullYear(),payslip_month:(new Date).getMonth(),payslip_year_Popup:(new Date).getFullYear(),payslip_month_Popup:(new Date).getMonth(),selectedItems:[],allSelected:!1,monthNames:[{value:1,label:"January"},{value:2,label:"February"},{value:3,label:"March"},{value:4,label:"April"},{value:5,label:"May"},{value:6,label:"June"},{value:7,label:"July"},{value:8,label:"August"},{value:9,label:"September"},{value:10,label:"October"},{value:11,label:"November"},{value:12,label:"December"}]}},computed:{formTitle:function(){return-1===this.editedIndex?"New":"Edit"},selectAll:function(){return this.selectedItems.length===this.items.length},indeterminate:function(){return this.selectedItems.length>0&&this.selectedItems.length<this.items.length}},watch:{dialog:function(t){t||this.close(),this.errors=[],this.search=""},department_id:function(){this.pagination.current=1,this.getDataFromApi()},options:{handler:function(){this.getDataFromApi()},deep:!0}},created:function(){var dt=new Date;this.year_display=dt.getFullYear(),this.loading=!0,this.getDepartments(),this.lastTenYears(),this.getbranchesList()},mounted:function(){this.getDataFromApi()},methods:{getbranchesList:function(){var t=this;this.payloadOptions={params:{company_id:this.$auth.user.company_id,branch_id:this.$auth.user.branch_id}},this.$axios.get("branches_list",this.payloadOptions).then((function(e){var data=e.data;t.branchesList=data}))},toggleFilter:function(){this.isFilter=!this.isFilter},clearFilters:function(){this.filters={},this.isFilter=!1,this.getDataFromApi()},applyFilters:function(){this.getDataFromApi()},fitleredMonthNames:function(){var dt=new Date,t=this.payslip_year;return this.monthNames.slice(0,t==dt.getFullYear()?dt.getMonth():12)},datatable_cancel:function(){this.datatable_search_textbox=""},datatable_open:function(){this.datatable_search_textbox=""},datatable_close:function(){this.loading=!1},navigatetoEmployeepage:function(){this.$router.push("/employees")},downloadAllPayslipsError:function(){return this.snackbar=!0,this.response="Payslips are not available. Please generate and try again",!1},getdownloadLink:function(t){var e=this.$axios.defaults.baseURL,n=this.$auth.user.company_id,r=this.payslip_month,l=this.payslip_year;return"".concat(e,"/render-payslip-by-employee?company_id=").concat(n,"&employee_id=").concat(t,"&month=").concat(r,"&year=").concat(l)},handleFilters:function(){this.selectedItems=[],this.allSelected=!1,this.fitleredMonthNames(),this.getDataFromApi()},navigateToViewPDF:function(t){var path="/payroll/salary/".concat(t,"_").concat(this.payslip_month,"_").concat(this.payslip_year);this.$router.push(path)},lastTenYears:function(){var t=(new Date).getFullYear();this.dataYears=Array.from({length:10},(function(e,i){return t-i}))},toggleSelectAll:function(){this.selectedItems=this.allSelected?this.data.map((function(t){return t.id})):[]},onPageChange:function(){this.getDataFromApi()},caps:function(t){return""==t||null==t?"":t.toString().replace(/\b\w/g,(function(t){return t.toUpperCase()}))},can:function(t){return this.$pagePermission.can(t,this)},res:function(t){var e=this;this.$axios.get("employee/".concat(t)).then((function(t){var data=t.data;e.work=x({},data),e.getBankInfo(data.employee_id)}))},getBankInfo:function(t){var e=this;this.$axios.get("bankinfo/".concat(t)).then((function(t){var data=t.data;e.BankInfo=x({},data)}))},getDepartments:function(){var t=this,e={params:{per_page:100,company_id:this.$auth.user.company_id}};this.$axios.get("departments",e).then((function(e){var data=e.data;t.departments=data.data,t.departments.unshift({name:"All Departments",id:""})}))},generateNewpayslipsByDepartment:function(){},generateNewpayslipsSelected:function(){var t=this,e=[];this.selectedItems.forEach((function(element){e.push(element.id)}));this.endpoint;var n={params:{company_id:this.$auth.user.company_id,employee_ids:e,year:this.payslip_year,month:this.payslip_month}};this.$axios.get("/generate-payslips-with-employeeids",n).then((function(e){var data=e.data;t.payslipsResultsmessages=[],t.dialogPayslipsResults=!0,t.payslipsResultsmessages=data,t.snackbar=!0,t.response="Payslips Generated successfully",t.getDataFromApi()}))},getDataFromApi:function(){var t=this;arguments.length>0&&void 0!==arguments[0]||this.endpoint;this.loading=!0;this.department_id;var e=this.options,n=e.sortBy,r=e.sortDesc,l=e.page,o=e.itemsPerPage,c={params:x({page:l,sortBy:n?n[0]:"",sortDesc:r?r[0]:"",per_page:o,company_id:this.$auth.user.company_id,year:this.year_display,employee_id:this.employee_id,employee_table_id:this.table_id},this.filters)};this.$axios.get("get-payslip-by-employee-year",c).then((function(e){var data=e.data;t.data=data,t.loading=!1,t.selectedItems=[],t.payslipsDownloadAllEmployeeidsArray=[],t.data.forEach((function(element){element.payslip_status&&t.payslipsDownloadAllEmployeeidsArray.push(element.employee_id)})),t.payslipsDownloadAllEmployeeidsArray.length>0?(t.payslipsDownloadAllURL=t.$axios.defaults.baseURL+"/generate-payslips-zip?company_id="+t.$auth.user.company_id+"&employee_ids="+t.payslipsDownloadAllEmployeeidsArray+"&month="+t.payslip_month+"&year="+t.payslip_year,t.downloadAllDisplayStatus=!0):t.downloadAllDisplayStatus=!1})),this.loading=!0},searchIt:function(t){0==t.length?this.getDataFromApi():t.length>2&&this.getDataFromApi("".concat(this.endpoint,"/search/").concat(t))},datatable_searchById:function(t){0==t.length?this.getDataFromApi():t.length>=1&&this.getDataFromApi("".concat(this.endpoint,"/searchby_emp_table_salary/").concat(t),"employee_id")},datatable_searchByName:function(t){0==t.length?this.getDataFromApi():t.length>=1&&this.getDataFromApi("".concat(this.endpoint,"/searchby_emp_table_salary/").concat(t),"display_name")},datatable_searchByDepartmentName:function(t){0==t.length?this.getDataFromApi():t.length>=1&&this.getDataFromApi("".concat(this.endpoint,"/searchby_emp_table_salary/").concat(t),"search_department_name")},datatable_searchByDesignationName:function(t){0==t.length?this.getDataFromApi():t.length>=1&&this.getDataFromApi("".concat(this.endpoint,"/searchby_emp_table_salary/").concat(t),"search_designation_name")},datatable_searchBybasic_salary:function(t){0==t.length?this.getDataFromApi():t.length>=1&&this.getDataFromApi("".concat(this.endpoint,"/searchby_emp_table_salary/").concat(t),"searchBybasic_salary")},datatable_searchBynet_salary:function(t){0==t.length?this.getDataFromApi():t.length>=1&&this.getDataFromApi("".concat(this.endpoint,"/searchby_emp_table_salary/").concat(t),"searchBynet_salary")},editItem:function(t){this.$router.push({path:"/employees?id=1",params:{id:t.id}})},delteteSelectedRecords:function(){var t=this,e=this.ids.map((function(t){return t.id}));confirm("Are you sure you wish to delete selected records , to mitigate any inconvenience in future.")&&this.$axios.post("".concat(this.endpoint,"/delete/selected"),{ids:e}).then((function(e){var data=e.data;data.status?(t.getDataFromApi(),t.snackbar=data.status,t.ids=[],t.response="Selected records has been deleted"):t.errors=data.errors})).catch((function(t){return console.log(t)}))},deleteItem:function(t){var e=this;confirm("Are you sure you wish to delete , to mitigate any inconvenience in future.")&&this.$axios.delete(this.endpoint+"/"+t.id).then((function(t){var data=t.data;data.status?(e.getDataFromApi(),e.snackbar=data.status,e.response=data.message):e.errors=data.errors})).catch((function(t){return console.log(t)}))},close:function(){var t=this;this.dialog=!1,setTimeout((function(){t.editedItem=Object.assign({},t.defaultItem),t.editedIndex=-1}),300)},save:function(){var t=this,e={name:this.editedItem.name.toLowerCase(),company_id:this.$auth.user.company_id};this.editedIndex>-1?this.$axios.put(this.endpoint+"/"+this.editedItem.id,e).then((function(e){var data=e.data;if(data.status){var n=t.data.findIndex((function(e){return e.id==t.editedItem.id}));t.data.splice(n,1,{id:t.editedItem.id,name:t.editedItem.name}),t.snackbar=data.status,t.response=data.message,t.close()}else t.errors=data.errors})).catch((function(t){return console.log(t)})):this.$axios.post(this.endpoint,e).then((function(e){var data=e.data;data.status?(t.getDataFromApi(),t.snackbar=data.status,t.response=data.message,t.close(),t.errors=[],t.search=""):t.errors=data.errors})).catch((function(t){return console.log(t)}))},openPayslipDialog:function(){this.generatePayslipDialog=!0},closePopup:function(){}}},w=A,F=n(116),component=Object(F.a)(w,(function(){var t=this,e=t._self._c;return t.can("payroll_access")?e("div",[e("div",{staticClass:"text-center ma-2"},[e(v.a,{attrs:{top:"top",color:"secondary",elevation:"24"},model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v("\n      "+t._s(t.response)+"\n    ")])],1),t._v(" "),t.can("employee_view")?e("div",[e(f.a,[e(o.a,[e(l.a,{staticClass:"mb-5 mt-2",attrs:{elevation:"0"}},[e(f.a,{staticClass:"pt-5"},[e(o.a,{staticClass:"align-left",attrs:{md:"2"}},[e(d.a,{staticStyle:{cursor:"pointer"},attrs:{size:"40"},on:{click:function(e){return t.getDataFromApi(--t.year_display)}}},[t._v("\n                mdi-less-than")])],1),t._v(" "),e(o.a,{staticClass:"text-center",staticStyle:{"font-size":"30px"},attrs:{md:"8"}},[e(d.a,{attrs:{size:"40",fill:""}},[t._v("mdi-calendar-month")]),t._v("\n              "+t._s(t.year_display)+"\n            ")],1),t._v(" "),e(o.a,{staticClass:"align-right text-end",attrs:{md:"2"}},[e(d.a,{staticStyle:{cursor:"pointer"},attrs:{size:"40"},on:{click:function(e){return t.getDataFromApi(++t.year_display)}}},[t._v("\n                mdi-greater-than")])],1)],1),t._v(" "),e(v.a,{attrs:{timeout:3e3,color:t.snackColor},scopedSlots:t._u([{key:"action",fn:function(n){var l=n.attrs;return[e(r.a,t._b({attrs:{text:""},on:{click:function(e){t.snack=!1}}},"v-btn",l,!1),[t._v("\n                Close\n              ")])]}}],null,!1,3572811048),model:{value:t.snack,callback:function(e){t.snack=e},expression:"snack"}},[t._v("\n            "+t._s(t.snackText)+"\n\n            ")]),t._v(" "),e(c.a,{staticClass:"elevation-1",attrs:{dense:"",headers:t.headers_table,items:t.data,"model-value":"data.id",loading:t.loading,"hide-default-footer":"","disable-pagination":""},scopedSlots:t._u([{key:"item.sno",fn:function(e){var n=e.item;e.index;return[t._v("\n              "+t._s(t.currentPage?(t.currentPage-1)*t.perPage+(t.cumulativeIndex+t.data.indexOf(n)):"")+"\n            ")]}},{key:"item.year_month",fn:function(e){var n=e.item;return[t._v("\n              "+t._s(n.payroll_month)+" / "+t._s(n.payroll_year)+"\n            ")]}},{key:"item.basic_salary",fn:function(e){var n=e.item;return[t._v("\n              "+t._s(n.basic_salary)+"\n            ")]}},{key:"item.net_salary",fn:function(e){var n=e.item;return[t._v("\n              "+t._s(n.net_salary)+"\n            ")]}},{key:"item.payslip",fn:function(n){var r=n.item;return[null!=r&&r.payslip_status?e("span",{staticStyle:{"font-size":"25px","vertical-align":"inherit",cursor:"pointer"},on:{click:function(e){return t.navigateToViewPDF(r.id)}}},[e(d.a,{staticClass:"primary--text",attrs:{small:""}},[t._v("mdi-eye")])],1):t._e(),t._v(" "),null!=r&&r.payslip_status?e("a",{staticStyle:{"font-size":"25px","vertical-align":"inherit",cursor:"pointer"},attrs:{href:t.getdownloadLink(r.employee_table_id)}},[e(d.a,{staticClass:"primary--text",attrs:{small:""}},[t._v("mdi-download")])],1):t._e()]}},{key:"item.actions",fn:function(n){var l=n.item;return[e(_.a,{attrs:{bottom:"",left:""},scopedSlots:t._u([{key:"activator",fn:function(n){var l=n.on,o=n.attrs;return[e(r.a,t._g(t._b({attrs:{"dark-2":"",icon:""}},"v-btn",o,!1),l),[e(d.a,[t._v("mdi-dots-vertical")])],1)]}}],null,!0)},[t._v(" "),e(h.a,{attrs:{width:"120",dense:""}},[e(m.a,{on:{click:function(e){return t.editItem(l)}}},[e(y.c,{staticStyle:{cursor:"pointer"}},[e(d.a,{attrs:{color:"secondary",small:""}},[t._v("\n                        mdi-information\n                      ")]),t._v("\n                      View\n                    ")],1)],1)],1)],1)]}}],null,!1,3537090711),model:{value:t.selectedItems,callback:function(e){t.selectedItems=e},expression:"selectedItems"}})],1)],1)],1),t._v(" "),e("div")],1):e("NoAccess")],1):e("NoAccess")}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{NoAccess:n(879).default})},879:function(t,e,n){"use strict";n.r(e);var r=n(116),component=Object(r.a)({},(function(){this._self._c;return this._m(0)}),[function(){var t=this._self._c;return t("div",{staticClass:"text-center",staticStyle:{"margin-top":"25%"}},[t("b",[this._v("No Access")])])}],!1,null,null,null);e.default=component.exports}}]);