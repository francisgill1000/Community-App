(window.webpackJsonp=window.webpackJsonp||[]).push([[389,186],{1700:function(e,t,n){"use strict";n.r(t);var l=n(921),o=n(117),r=n(138),c=n(79),d=n(539),h=n(903),m=n(1583),y=n(361),f=n(116),_=n(219),v=n(342),x=n(538),I=n(920),D=n(900),S=n(360),w=n(99),k=n(882),P=(n(33),n(12),n(14),n(11),n(18),n(19),n(2));n(31),n(273),n(59),n(37),n(64),n(44),n(70),n(6),n(80),n(58),n(9),n(57),n(223),n(222);function A(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function F(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?A(Object(source),!0).forEach((function(t){Object(P.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):A(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var C={data:function(){return{filterLoader:!1,filters:{},isFilter:!1,totalRowsCount:0,dialogVisible:!1,server_datatable_totalItems:1e3,filter_employeeid:"",snack:!1,snackColor:"",snackText:"",downloadAllDisplayStatus:!0,dialogPayslipsResults:!1,payslipsResultsmessages:[],payslipsDownloadAllEmployeeidsArray:[],payslipsDownloadAllURL:"",items:[],dataYears:[],tab:null,pagination:{current:1,total:0,per_page:100},options:{},Model:"Payroll",endpoint:"employee",search:"",snackbar:!1,dialog:!1,ids:[],loading:!1,total:0,paymentMethod:["Bank Transfer","Cash","Cheque"],Allowance:["Transport","Travel","Entertainment","Housing","Uniform","Uniform","Medical/health"],headers_table:[{text:"Emp ID",align:"left",sortable:!0,key:"employee_id",filterable:!0,value:"employee_id"},{text:"Name",align:"left",sortable:!1,filterable:!0,key:"display_name",value:"first_name",filterSpecial:!1},{text:"Department",align:"left",sortable:!1,filterable:!0,key:"department_id",value:"department_name",filterSpecial:!0},{text:"Month/Year",align:"left",sortable:!1,key:"year_month",filterable:!1,value:"year_month",filterSpecial:!1},{text:"Basic Salary",align:"left",sortable:!1,filterable:!0,key:"payrollbasic",value:"payroll_basic_salary",filterSpecial:!1},{text:"Net Salary",align:"left",sortable:!1,filterable:!0,key:"net_salary",value:"payroll_net_salary"},{text:"Payslip",align:"left",sortable:!1,filterable:!1,key:"payslip",value:"payslip",filterSpecial:!1}],datatable_search_textbox:"",editedIndex:-1,editedItem:{name:""},defaultItem:{name:""},response:"",data:[],errors:[],departments:[],department_id:"",department_idPopup:"",work:{first_name:"",last_name:"",department:"",sub_department:"",designation:"",role:"",employee_id:"",system_user_id:"",user:"",profile_picture:"",phone_number:"",whatsapp_number:"",joining_date:""},BankInfo:{bank_name:"",account_no:"",account_title:"",iban:"",address:"",remark:"",company_id:"",employee_id:""},salary:{basic_salary:"",payment_method:"",remark:""},allowance:{name:"",amount:"",remark:""},generatePayslipDialog:!1,payslip_year:(new Date).getFullYear(),payslip_month:(new Date).getMonth(),payslip_year_Popup:(new Date).getFullYear(),payslip_month_Popup:(new Date).getMonth(),selectedItems:[],allSelected:!1,monthNames:[{value:1,label:"January"},{value:2,label:"February"},{value:3,label:"March"},{value:4,label:"April"},{value:5,label:"May"},{value:6,label:"June"},{value:7,label:"July"},{value:8,label:"August"},{value:9,label:"September"},{value:10,label:"October"},{value:11,label:"November"},{value:12,label:"December"}]}},computed:{formTitle:function(){return-1===this.editedIndex?"New":"Edit"},selectAll:function(){return this.selectedItems.length===this.items.length},indeterminate:function(){return this.selectedItems.length>0&&this.selectedItems.length<this.items.length}},watch:{dialog:function(e){e||this.close(),this.errors=[],this.search=""},department_id:function(){this.pagination.current=1,this.getDataFromApi()},options:{handler:function(){this.getDataFromApi()},deep:!0}},created:function(){this.loading=!0,this.getDepartments(),this.lastTenYears()},mounted:function(){this.getDataFromApi()},methods:{toggleFilter:function(){this.isFilter=!this.isFilter},clearFilters:function(){this.filters={},this.isFilter=!1,this.getDataFromApi()},applyFilters:function(){this.getDataFromApi()},fitleredMonthNames:function(){var dt=new Date,e=this.payslip_year;return this.monthNames.slice(0,e==dt.getFullYear()?dt.getMonth():12)},datatable_cancel:function(){this.datatable_search_textbox=""},datatable_open:function(){this.datatable_search_textbox=""},datatable_close:function(){this.loading=!1},navigatetoEmployeepage:function(){this.$router.push("/employees")},downloadAllPayslipsError:function(){return this.snackbar=!0,this.response="Payslips are not available. Please generate and try again",!1},getdownloadLink:function(e){var t=this.$axios.defaults.baseURL,n=this.$auth.user.company_id,l=this.payslip_month,o=this.payslip_year;return"".concat(t,"/render-payslip-by-employee?company_id=").concat(n,"&employee_id=").concat(e,"&month=").concat(l,"&year=").concat(o)},handleFilters:function(){this.selectedItems=[],this.allSelected=!1,this.fitleredMonthNames(),this.getDataFromApi()},navigateToViewPDF:function(e){var path="/employees/payroll/salary/".concat(e,"_").concat(this.payslip_month,"_").concat(this.payslip_year);this.$router.push(path)},lastTenYears:function(){var e=(new Date).getFullYear();this.dataYears=Array.from({length:10},(function(t,i){return e-i}))},toggleSelectAll:function(){this.selectedItems=this.allSelected?this.data.map((function(e){return e.id})):[]},onPageChange:function(){this.getDataFromApi()},caps:function(e){return""==e||null==e?"":e.toString().replace(/\b\w/g,(function(e){return e.toUpperCase()}))},can:function(e){return this.$pagePermission.can(e,this)},res:function(e){var t=this;this.$axios.get("employee/".concat(e)).then((function(e){var data=e.data;t.work=F({},data),t.getBankInfo(data.employee_id)}))},getBankInfo:function(e){var t=this;this.$axios.get("bankinfo/".concat(e)).then((function(e){var data=e.data;t.BankInfo=F({},data)}))},getDepartments:function(){var e=this,t={params:{per_page:100,company_id:this.$auth.user.company_id}};this.$axios.get("departments",t).then((function(t){var data=t.data;e.departments=data.data,e.departments.unshift({name:"All Departments",id:""})}))},generateNewpayslipsByDepartment:function(){var e=this,t=(this.endpoint,{params:{company_id:this.$auth.user.company_id,department_id:this.department_idPopup,month:this.payslip_month_Popup,year:this.payslip_year_Popup}});this.$axios.get("payslip-by-department",t).then((function(t){var data=t.data;e.payslipsResultsmessages=[],e.data=data.data,e.dialogPayslipsResults=!0,e.payslipsResultsmessages=data,e.snackbar=!0,e.response="Payslips will be Genereated by selected department.",e.getDataFromApi()}))},generateNewpayslipsSelected:function(){var e=this,t=[];this.selectedItems.forEach((function(element){t.push(element.id)}));this.endpoint;var n={params:{company_id:this.$auth.user.company_id,employee_ids:t,year:this.payslip_year,month:this.payslip_month}};this.$axios.get("/generate-payslips-with-employeeids",n).then((function(t){var data=t.data;e.payslipsResultsmessages=[],e.dialogPayslipsResults=!0,e.payslipsResultsmessages=data,e.snackbar=!0,e.response="Payslips Generated successfully",e.getDataFromApi()}))},getDataFromApi:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.endpoint;this.loading=!0;var n=this.department_id,l=this.options,o=l.sortBy,r=l.sortDesc,c=l.page,d=l.itemsPerPage,h={params:{page:c,sortBy:o?o[0]:"",sortDesc:r?r[0]:"",per_page:d,company_id:this.$auth.user.company_id,department_id:n,year:this.payslip_year,month:this.payslip_month,employee_id:this.$auth.user.employee.employee_id}};this.$axios.get("".concat(t,"?page=").concat(c),h).then((function(t){var data=t.data;e.data=data.data,e.totalRowsCount=data.total,e.pagination.current=data.current_page,e.pagination.total=data.last_page,e.loading=!1,e.toggleSelectAll(),e.selectedItems=[],e.payslipsDownloadAllEmployeeidsArray=[],e.data.forEach((function(element){element.payslip_status&&e.payslipsDownloadAllEmployeeidsArray.push(element.employee_id)})),e.payslipsDownloadAllEmployeeidsArray.length>0?(e.payslipsDownloadAllURL=e.$axios.defaults.baseURL+"/generate-payslips-zip?company_id="+e.$auth.user.company_id+"&employee_ids="+e.payslipsDownloadAllEmployeeidsArray+"&month="+e.payslip_month+"&year="+e.payslip_year,e.downloadAllDisplayStatus=!0):e.downloadAllDisplayStatus=!1})),this.loading=!0},searchIt:function(e){0==e.length?this.getDataFromApi():e.length>2&&this.getDataFromApi("".concat(this.endpoint,"/search/").concat(e))},datatable_searchById:function(e){0==e.length?this.getDataFromApi():e.length>=1&&this.getDataFromApi("".concat(this.endpoint,"/searchby_emp_table_salary/").concat(e),"employee_id")},datatable_searchByName:function(e){0==e.length?this.getDataFromApi():e.length>=1&&this.getDataFromApi("".concat(this.endpoint,"/searchby_emp_table_salary/").concat(e),"display_name")},datatable_searchByDepartmentName:function(e){0==e.length?this.getDataFromApi():e.length>=1&&this.getDataFromApi("".concat(this.endpoint,"/searchby_emp_table_salary/").concat(e),"search_department_name")},datatable_searchByDesignationName:function(e){0==e.length?this.getDataFromApi():e.length>=1&&this.getDataFromApi("".concat(this.endpoint,"/searchby_emp_table_salary/").concat(e),"search_designation_name")},datatable_searchBybasic_salary:function(e){0==e.length?this.getDataFromApi():e.length>=1&&this.getDataFromApi("".concat(this.endpoint,"/searchby_emp_table_salary/").concat(e),"searchBybasic_salary")},datatable_searchBynet_salary:function(e){0==e.length?this.getDataFromApi():e.length>=1&&this.getDataFromApi("".concat(this.endpoint,"/searchby_emp_table_salary/").concat(e),"searchBynet_salary")},editItem:function(e){this.$router.push({path:"/employees?id=1",params:{id:e.id}})},delteteSelectedRecords:function(){var e=this,t=this.ids.map((function(e){return e.id}));confirm("Are you sure you wish to delete selected records , to mitigate any inconvenience in future.")&&this.$axios.post("".concat(this.endpoint,"/delete/selected"),{ids:t}).then((function(t){var data=t.data;data.status?(e.getDataFromApi(),e.snackbar=data.status,e.ids=[],e.response="Selected records has been deleted"):e.errors=data.errors})).catch((function(e){return console.log(e)}))},deleteItem:function(e){var t=this;confirm("Are you sure you wish to delete , to mitigate any inconvenience in future.")&&this.$axios.delete(this.endpoint+"/"+e.id).then((function(e){var data=e.data;data.status?(t.getDataFromApi(),t.snackbar=data.status,t.response=data.message):t.errors=data.errors})).catch((function(e){return console.log(e)}))},close:function(){var e=this;this.dialog=!1,setTimeout((function(){e.editedItem=Object.assign({},e.defaultItem),e.editedIndex=-1}),300)},save:function(){var e=this,t={name:this.editedItem.name.toLowerCase(),company_id:this.$auth.user.company_id};this.editedIndex>-1?this.$axios.put(this.endpoint+"/"+this.editedItem.id,t).then((function(t){var data=t.data;if(data.status){var n=e.data.findIndex((function(t){return t.id==e.editedItem.id}));e.data.splice(n,1,{id:e.editedItem.id,name:e.editedItem.name}),e.snackbar=data.status,e.response=data.message,e.close()}else e.errors=data.errors})).catch((function(e){return console.log(e)})):this.$axios.post(this.endpoint,t).then((function(t){var data=t.data;data.status?(e.getDataFromApi(),e.snackbar=data.status,e.response=data.message,e.close(),e.errors=[],e.search=""):e.errors=data.errors})).catch((function(e){return console.log(e)}))},openPayslipDialog:function(){this.generatePayslipDialog=!0},closePopup:function(){}}},O=C,$=n(60),component=Object($.a)(O,(function(){var e=this,t=e._self._c;return e.can("payroll_access")?t("div",[t("div",{staticClass:"text-center ma-2"},[t(D.a,{attrs:{top:"top",color:"secondary",elevation:"24"},model:{value:e.snackbar,callback:function(t){e.snackbar=t},expression:"snackbar"}},[e._v("\n       "+e._s(e.response)+"\n     ")])],1),e._v(" "),t(y.a,{attrs:{persistent:"",fullscreen:!1,width:"700px"},model:{value:e.dialogPayslipsResults,callback:function(t){e.dialogPayslipsResults=t},expression:"dialogPayslipsResults"}},[t(r.a,[t(c.d,{staticClass:"primary white--text background",attrs:{dense:""}},[e._v("\n         Payslip Results\n         "),t(S.a),e._v(" "),t(f.a,{attrs:{outlined:"",dark:"",color:"white"},on:{click:function(t){e.dialogPayslipsResults=!1}}},[e._v("\n           mdi mdi-close-circle\n         ")])],1),e._v(" "),t(c.c,[t(h.a,[[e.payslipsResultsmessages.length?t("table",{staticStyle:{width:"100%"}},[t("thead",[t("tr",[t("th",{staticClass:"text-left"},[e._v("#")]),e._v(" "),t("th",{staticClass:"text-left"},[e._v("Status")]),e._v(" "),t("th",{staticClass:"text-right"},[e._v("Download")])])]),e._v(" "),t("tbody",e._l(e.payslipsResultsmessages,(function(n,l){return t("tr",{key:n.id,style:{color:n.status?"":"red"}},[t("td",[e._v(e._s(l+1))]),e._v(" "),t("td",[e._v(e._s(n.status_message))]),e._v(" "),t("td",{staticClass:"text-right"},[n.status?t("a",{staticStyle:{"font-size":"25px","vertical-align":"inherit",cursor:"pointer"},attrs:{href:e.getdownloadLink(n.employee_table_id)}},[t(f.a,{staticClass:"primary--text",attrs:{small:""}},[e._v("mdi-download")])],1):e._e(),e._v(" "),n.status?e._e():t("a",{staticStyle:{"font-size":"14px","vertical-align":"inherit",cursor:"pointer"},on:{click:function(t){return e.navigatetoEmployeepage()}}},[e._v("\n                       Go to Employee Page\n                     ")])])])})),0)]):t("div",[e._v("No Employees are available")])]],2)],1)],1)],1),e._v(" "),t(y.a,{attrs:{persistent:"","max-width":"500px"},model:{value:e.dialogVisible,callback:function(t){e.dialogVisible=t},expression:"dialogVisible"}},[t(r.a,{staticClass:"white--text",attrs:{flat:"",dense:""}},[t(c.d,{staticClass:"background"},[t("span",{staticClass:"headline"},[e._v("Filter")])]),e._v(" "),e.filterLoader?t(v.a,{attrs:{indeterminate:"",color:"primary"}}):e._e(),e._v(" "),t("br"),e._v(" "),t(c.c,[t(l.a,{attrs:{placeholder:"Department",outlined:"",dense:"","x-small":"",items:e.departments,"item-value":"id","item-text":"name"},on:{change:function(t){return e.getDataFromApi("employee")}},model:{value:e.department_id,callback:function(t){e.department_id=t},expression:"department_id"}}),e._v(" "),t(l.a,{attrs:{outlined:"",dense:"","x-small":"","item-value":"id","item-text":"name",items:e.dataYears,placeholder:"Year"},on:{change:e.handleFilters},model:{value:e.payslip_year,callback:function(t){e.payslip_year=t},expression:"payslip_year"}}),e._v(" "),t(l.a,{attrs:{outlined:"",dense:"","x-small":"",items:e.fitleredMonthNames(),"item-text":"label","item-value":"value",placeholder:"Month"},on:{change:e.handleFilters},model:{value:e.payslip_month,callback:function(t){e.payslip_month=t},expression:"payslip_month"}})],1),e._v(" "),t(c.a,[t(S.a),e._v(" "),t(o.a,{attrs:{dark:"",color:"background"},on:{click:function(t){e.dialogVisible=!1}}},[e._v("Close")])],1)],1)],1),e._v(" "),t(y.a,{attrs:{persistent:"",fullscreen:!1,width:"600px"},model:{value:e.generatePayslipDialog,callback:function(t){e.generatePayslipDialog=t},expression:"generatePayslipDialog"}},[t(r.a,[t(c.d,{staticClass:"primary white--text background",attrs:{dense:""}},[e._v("\n         Generate Payslips\n         "),t(S.a),e._v(" "),t(f.a,{attrs:{outlined:"",dark:"",color:"white"},on:{click:function(t){e.generatePayslipDialog=!1}}},[e._v("\n           mdi mdi-close-circle\n         ")])],1),e._v(" "),t(c.c,[t(h.a,[t(x.a,{staticClass:"mt-4"},[t(d.a,{attrs:{cols:"5"}},[t("div",{},[e._v("Departments")]),e._v(" "),t(I.a,{attrs:{outlined:"",dense:"","x-small":"","item-text":"name","item-value":"id",items:e.departments,placeholder:"Department",solo:"",flat:""},model:{value:e.department_idPopup,callback:function(t){e.department_idPopup=t},expression:"department_idPopup"}})],1),e._v(" "),t(d.a,{attrs:{cols:"3"}},[t("div",{},[e._v("Year")]),e._v(" "),t(I.a,{attrs:{outlined:"",dense:"","x-small":"",items:e.dataYears,placeholder:"Year",solo:"",flat:""},model:{value:e.payslip_year_Popup,callback:function(t){e.payslip_year_Popup=t},expression:"payslip_year_Popup"}})],1),e._v(" "),t(d.a,{attrs:{cols:"3"}},[t("div",{},[e._v("Month")]),e._v(" "),t(I.a,{attrs:{outlined:"",dense:"","x-small":"",items:e.monthNames,"item-text":"label","item-value":"value",placeholder:"Month",solo:"",flat:""},model:{value:e.payslip_month_Popup,callback:function(t){e.payslip_month_Popup=t},expression:"payslip_month_Popup"}})],1),e._v(" "),t(c.a,[t(d.a,{staticStyle:{padding:"0px"},attrs:{md:"6",lg:"6"}}),e._v(" "),t(d.a,{staticClass:"text-right",staticStyle:{padding:"0px"},attrs:{md:"6",lg:"6"}},[t(o.a,{staticClass:"primary",on:{click:e.generateNewpayslipsByDepartment}},[e._v("Generate Payslips")])],1)],1)],1)],1)],1)],1)],1),e._v(" "),e.can("employee_view")?t("div",[t(x.a,[t(d.a,[t(r.a,{staticClass:"mb-5",attrs:{elevation:"0"}},[t(w.a,{staticClass:"rounded-md mb-2 white--text",attrs:{color:"background",dense:"",flat:""}},[t(d.a,{attrs:{cols:"8"}},[t("span",[e._v(" Payslips")]),e._v(" "),t(k.a,{attrs:{top:"",color:"primary"},scopedSlots:e._u([{key:"activator",fn:function(n){var l=n.on,r=n.attrs;return[t(o.a,e._g(e._b({staticClass:"ma-0 px-0",attrs:{dense:"","x-small":"",ripple:!1,text:""}},"v-btn",r,!1),l),[t(f.a,{staticClass:"ml-2",attrs:{color:"white",dark:""},on:{click:e.clearFilters}},[e._v("mdi mdi-reload")])],1)]}}],null,!1,3956209761)},[e._v(" "),t("span",[e._v("Reload")])])],1)],1),e._v(" "),t(m.a,{staticClass:"elevation-1",attrs:{dense:"",headers:e.headers_table,items:e.data,"model-value":"data.id",loading:e.loading,options:e.options,"footer-props":{itemsPerPageOptions:[10,50,100,500,1e3]},"server-items-length":e.totalRowsCount},on:{"update:options":function(t){e.options=t}},scopedSlots:e._u([{key:"item.employee_id",fn:function(t){var n=t.item;return[e._v("\n               "+e._s(n.employee_id)+"\n             ")]}},{key:"item.first_name",fn:function(n){var l=n.item;n.index;return[t(x.a,{attrs:{"no-gutters":""}},[t(d.a,{staticStyle:{padding:"5px","padding-left":"0px",width:"50px","max-width":"50px"}},[t(_.a,{staticStyle:{"border-radius":"50%",height:"auto",width:"50px","max-width":"50px"},attrs:{src:l.profile_picture?l.profile_picture:"/no-profile-image.jpg"}})],1),e._v(" "),t(d.a,{staticStyle:{padding:"10px"}},[t("strong",[e._v("\n                     "+e._s(l.first_name?l.first_name:"---")+"\n                     "+e._s(l.last_name?l.last_name:"---"))]),e._v(" "),t("div",[e._v("\n                     "+e._s(l.designation?e.caps(l.designation.name):"---")+"\n                   ")])])],1)]}},{key:"item.department_name",fn:function(n){var l=n.item;return[t("strong",[e._v(e._s(e.caps(l.department.name)))]),e._v(" "),t("div",[e._v(e._s(e.caps(l.sub_department.name)))])]}},{key:"item.year_month",fn:function(t){var n=t.item;return[e._v("\n               "+e._s(n.payroll_month)+" / "+e._s(n.payroll_year)+"\n             ")]}},{key:"item.payroll_basic_salary",fn:function(t){var n=t.item;return[e._v("\n               "+e._s(n.payroll&&n.payroll.basic_salary)+"\n             ")]}},{key:"item.payroll_net_salary",fn:function(t){var n=t.item;return[e._v("\n               "+e._s(n.payroll&&n.payroll.net_salary)+"\n             ")]}},{key:"item.payslip",fn:function(n){var l,o=n.item;return[null!=o&&null!==(l=o.payroll)&&void 0!==l&&l.basic_salary?t("span",{staticStyle:{"font-size":"25px","vertical-align":"inherit",cursor:"pointer"},on:{click:function(t){return e.navigateToViewPDF(o.employee_id)}}},[t(f.a,{staticClass:"primary--text",attrs:{small:""}},[e._v("mdi-eye")])],1):e._e()]}}],null,!1,3653494882),model:{value:e.selectedItems,callback:function(t){e.selectedItems=t},expression:"selectedItems"}})],1)],1)],1),e._v(" "),t("div")],1):t("NoAccess")],1):t("NoAccess")}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{NoAccess:n(909).default})},909:function(e,t,n){"use strict";n.r(t);var l=n(60),component=Object(l.a)({},(function(){this._self._c;return this._m(0)}),[function(){var e=this._self._c;return e("div",{staticClass:"text-center",staticStyle:{"margin-top":"25%"}},[e("b",[this._v("No Access")])])}],!1,null,null,null);t.default=component.exports},912:function(e,t,n){var content=n(913);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(21).default)("1377ef10",content,!0,{sourceMap:!1})},913:function(e,t,n){var l=n(20)((function(i){return i[1]}));l.push([e.i,".v-autocomplete.v-input>.v-input__control>.v-input__slot{cursor:text}.v-autocomplete input{align-self:center}.v-autocomplete.v-select.v-input--is-focused input{min-width:64px}.v-autocomplete:not(.v-input--is-focused).v-select--chips input{max-height:0;padding:0}.v-autocomplete--is-selecting-index input{opacity:0}.v-autocomplete.v-text-field--enclosed:not(.v-text-field--solo):not(.v-text-field--single-line):not(.v-text-field--outlined) .v-select__slot>input{margin-top:24px}.v-autocomplete.v-text-field--enclosed:not(.v-text-field--solo):not(.v-text-field--single-line):not(.v-text-field--outlined).v-input--dense .v-select__slot>input{margin-top:20px}.v-autocomplete__content.v-menu__content,.v-autocomplete__content.v-menu__content .v-card{border-radius:0}",""]),l.locals={},e.exports=l},921:function(e,t,n){"use strict";n(12),n(14),n(18),n(9),n(19);var l=n(2),o=(n(70),n(6),n(11),n(92),n(103),n(223),n(41),n(61),n(912),n(920)),r=n(221),c=n(71),d=n(1);function h(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function m(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(t){Object(l.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var y=m(m({},o.b),{},{offsetY:!0,offsetOverflow:!0,transition:!1});t.a=o.a.extend({name:"v-autocomplete",props:{autoSelectFirst:{type:Boolean,default:!1},filter:{type:Function,default:function(e,t,n){return n.toLocaleLowerCase().indexOf(t.toLocaleLowerCase())>-1}},hideNoData:Boolean,menuProps:{type:o.a.options.props.menuProps.type,default:function(){return y}},noFilter:Boolean,searchInput:{type:String}},data:function(){return{lazySearch:this.searchInput}},computed:{classes:function(){return m(m({},o.a.options.computed.classes.call(this)),{},{"v-autocomplete":!0,"v-autocomplete--is-selecting-index":this.selectedIndex>-1})},computedItems:function(){return this.filteredItems},selectedValues:function(){var e=this;return this.selectedItems.map((function(t){return e.getValue(t)}))},hasDisplayedItems:function(){var e=this;return this.hideSelected?this.filteredItems.some((function(t){return!e.hasItem(t)})):this.filteredItems.length>0},currentRange:function(){return null==this.selectedItem?0:String(this.getText(this.selectedItem)).length},filteredItems:function(){var e=this;return!this.isSearching||this.noFilter||null==this.internalSearch?this.allItems:this.allItems.filter((function(t){var n=Object(d.s)(t,e.itemText),text=null!=n?String(n):"";return e.filter(t,String(e.internalSearch),text)}))},internalSearch:{get:function(){return this.lazySearch},set:function(e){this.lazySearch!==e&&(this.lazySearch=e,this.$emit("update:search-input",e))}},isAnyValueAllowed:function(){return!1},isDirty:function(){return this.searchIsDirty||this.selectedItems.length>0},isSearching:function(){return this.multiple&&this.searchIsDirty||this.searchIsDirty&&this.internalSearch!==this.getText(this.selectedItem)},menuCanShow:function(){return!!this.isFocused&&(this.hasDisplayedItems||!this.hideNoData)},$_menuProps:function(){var e=o.a.options.computed.$_menuProps.call(this);return e.contentClass="v-autocomplete__content ".concat(e.contentClass||"").trim(),m(m({},y),e)},searchIsDirty:function(){return null!=this.internalSearch&&""!==this.internalSearch},selectedItem:function(){var e=this;return this.multiple?null:this.selectedItems.find((function(i){return e.valueComparator(e.getValue(i),e.getValue(e.internalValue))}))},listData:function(){var data=o.a.options.computed.listData.call(this);return data.props=m(m({},data.props),{},{items:this.virtualizedItems,noFilter:this.noFilter||!this.isSearching||!this.filteredItems.length,searchInput:this.internalSearch}),data}},watch:{filteredItems:"onFilteredItemsChanged",internalValue:"setSearch",isFocused:function(e){e?(document.addEventListener("copy",this.onCopy),this.$refs.input&&this.$refs.input.select()):(document.removeEventListener("copy",this.onCopy),this.blur(),this.updateSelf())},isMenuActive:function(e){!e&&this.hasSlot&&(this.lazySearch=null)},items:function(e,t){t&&t.length||!this.hideNoData||!this.isFocused||this.isMenuActive||!e.length||this.activateMenu()},searchInput:function(e){this.lazySearch=e},internalSearch:"onInternalSearchChanged",itemText:"updateSelf"},created:function(){this.setSearch()},destroyed:function(){document.removeEventListener("copy",this.onCopy)},methods:{onFilteredItemsChanged:function(e,t){var n=this;if(e!==t){if(!this.autoSelectFirst){var l=t[this.$refs.menu.listIndex];l?this.setMenuIndex(e.findIndex((function(i){return i===l}))):this.setMenuIndex(-1),this.$emit("update:list-index",this.$refs.menu.listIndex)}this.$nextTick((function(){n.internalSearch&&(1===e.length||n.autoSelectFirst)&&(n.$refs.menu.getTiles(),n.autoSelectFirst&&e.length&&(n.setMenuIndex(0),n.$emit("update:list-index",n.$refs.menu.listIndex)))}))}},onInternalSearchChanged:function(){this.updateMenuDimensions()},updateMenuDimensions:function(){this.isMenuActive&&this.$refs.menu&&this.$refs.menu.updateDimensions()},changeSelectedIndex:function(e){this.searchIsDirty||(this.multiple&&e===d.z.left?-1===this.selectedIndex?this.selectedIndex=this.selectedItems.length-1:this.selectedIndex--:this.multiple&&e===d.z.right?this.selectedIndex>=this.selectedItems.length-1?this.selectedIndex=-1:this.selectedIndex++:e!==d.z.backspace&&e!==d.z.delete||this.deleteCurrentItem())},deleteCurrentItem:function(){var e=this.selectedIndex,t=this.selectedItems[e];if(this.isInteractive&&!this.getDisabled(t)){var n=this.selectedItems.length-1;if(-1!==this.selectedIndex||0===n){var l=e!==this.selectedItems.length-1?e:e-1;this.selectedItems[l]?this.selectItem(t):this.setValue(this.multiple?[]:null),this.selectedIndex=l}else this.selectedIndex=n}},clearableCallback:function(){this.internalSearch=null,o.a.options.methods.clearableCallback.call(this)},genInput:function(){var input=r.a.options.methods.genInput.call(this);return input.data=Object(c.a)(input.data,{attrs:{"aria-activedescendant":Object(d.q)(this.$refs.menu,"activeTile.id"),autocomplete:Object(d.q)(input.data,"attrs.autocomplete","off")},domProps:{value:this.internalSearch}}),input},genInputSlot:function(){var slot=o.a.options.methods.genInputSlot.call(this);return slot.data.attrs.role="combobox",slot},genSelections:function(){return this.hasSlot||this.multiple?o.a.options.methods.genSelections.call(this):[]},onClick:function(e){this.isInteractive&&(this.selectedIndex>-1?this.selectedIndex=-1:this.onFocus(),this.isAppendInner(e.target)||this.activateMenu())},onInput:function(e){if(!(this.selectedIndex>-1)&&e.target){var t=e.target,n=t.value;t.value&&this.activateMenu(),this.multiple||""!==n||this.deleteCurrentItem(),this.internalSearch=n,this.badInput=t.validity&&t.validity.badInput}},onKeyDown:function(e){var t=e.keyCode;!e.ctrlKey&&[d.z.home,d.z.end].includes(t)||o.a.options.methods.onKeyDown.call(this,e),this.changeSelectedIndex(t)},onSpaceDown:function(e){},onTabDown:function(e){o.a.options.methods.onTabDown.call(this,e),this.updateSelf()},onUpDown:function(e){e.preventDefault(),this.activateMenu()},selectItem:function(e){o.a.options.methods.selectItem.call(this,e),this.setSearch()},setSelectedItems:function(){o.a.options.methods.setSelectedItems.call(this),this.isFocused||this.setSearch()},setSearch:function(){var e=this;this.$nextTick((function(){e.multiple&&e.internalSearch&&e.isMenuActive||(e.internalSearch=!e.selectedItems.length||e.multiple||e.hasSlot?null:e.getText(e.selectedItem))}))},updateSelf:function(){(this.searchIsDirty||this.internalValue)&&(this.multiple||this.valueComparator(this.internalSearch,this.getValue(this.internalValue))||this.setSearch())},hasItem:function(e){return this.selectedValues.indexOf(this.getValue(e))>-1},onCopy:function(e){var t,n;if(-1!==this.selectedIndex){var l=this.selectedItems[this.selectedIndex],o=this.getText(l);null===(t=e.clipboardData)||void 0===t||t.setData("text/plain",o),null===(n=e.clipboardData)||void 0===n||n.setData("text/vnd.vuetify.autocomplete.item+plain",o),e.preventDefault()}}}})}}]);