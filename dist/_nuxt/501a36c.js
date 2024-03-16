(window.webpackJsonp=window.webpackJsonp||[]).push([[198],{1700:function(e,t,l){"use strict";l.r(t);var r=l(114),n=l(518),o=l(147),c=l(96),d=l(855),m={data:function(){return{branchesList:[],filterLoader:!1,filters:{},isFilter:!1,totalRowsCount:0,dialogVisible:!1,server_datatable_totalItems:1e3,filter_employeeid:"",snack:!1,snackColor:"",snackText:"",downloadAllDisplayStatus:!0,dialogPayslipsResults:!1,payslipsResultsmessages:[],payslipsDownloadAllEmployeeidsArray:[],payslipsDownloadAllURL:"",items:[],dataYears:[],tab:null,pagination:{current:1,total:0,per_page:100},options:{},Model:"Payroll",endpoint:"employee",search:"",snackbar:!1,dialog:!1,ids:[],loading:!1,total:0,paymentMethod:["Bank Transfer","Cash","Cheque"],Allowance:["Transport","Travel","Entertainment","Housing","Uniform","Uniform","Medical/health"],headers:[{text:"#"},{text:"E.ID"},{text:"Name"},{text:"Month/Year"},{text:"Designation"},{text:"Department"},{text:"Basic Salary"},{text:"Net Salary"},{text:"Payslip"},{text:"Actions",align:"center",value:"action",sortable:!1}],headers_table:[{text:"Emp ID",align:"left",sortable:!0,key:"employee_id",filterable:!0,value:"employee_id"},{text:"Name",align:"left",sortable:!0,filterable:!0,key:"display_name",value:"first_name",filterSpecial:!1},{text:"Department",align:"left",sortable:!0,filterable:!0,key:"department_id",value:"department.name.id",filterSpecial:!0},{text:"Month/Year",align:"left",sortable:!1,key:"year_month",filterable:!1,value:"year_month",filterSpecial:!1},{text:"Basic Salary",align:"left",sortable:!0,filterable:!0,key:"payrollbasic",value:"payroll.basic_salary",filterSpecial:!1},{text:"Net Salary",align:"left",sortable:!0,filterable:!0,key:"net_salary",value:"payroll.net_salary"},{text:"Payslip",align:"left",sortable:!1,filterable:!1,key:"payslip",value:"payslip",filterSpecial:!1},{text:"Actions",align:"left",sortable:!1,filterable:!1,key:"actions",value:"actions"}],datatable_search_textbox:"",editedIndex:-1,editedItem:{name:""},defaultItem:{name:""},response:"",data:[],errors:[],departments:[],department_id:"",department_idPopup:"",work:{first_name:"",last_name:"",department:"",sub_department:"",designation:"",role:"",employee_id:"",system_user_id:"",user:"",profile_picture:"",phone_number:"",whatsapp_number:"",joining_date:""},BankInfo:{bank_name:"",account_no:"",account_title:"",iban:"",address:"",remark:"",company_id:"",employee_id:""},salary:{basic_salary:"",payment_method:"",remark:""},allowance:{name:"",amount:"",remark:""},generatePayslipDialog:!1,payslip_year:(new Date).getFullYear(),payslip_month:(new Date).getMonth(),payslip_year_Popup:(new Date).getFullYear(),payslip_month_Popup:(new Date).getMonth(),selectedItems:[],allSelected:!1,monthNames:[{value:1,label:"January"},{value:2,label:"February"},{value:3,label:"March"},{value:4,label:"April"},{value:5,label:"May"},{value:6,label:"June"},{value:7,label:"July"},{value:8,label:"August"},{value:9,label:"September"},{value:10,label:"October"},{value:11,label:"November"},{value:12,label:"December"}]}}},y=l(116),component=Object(y.a)(m,(function(){var e=this,t=e._self._c;return t("div",[t(c.a,{staticClass:"mb-2",attrs:{dense:"",flat:""}},[t(d.b,{staticStyle:{color:"black"}},[t("span",[e._v(" Payslips")])]),e._v(" "),t(r.a,{staticClass:"ma-0 px-0",attrs:{dense:"","x-small":"",ripple:!1,text:"",title:"Reload"}},[t(o.a,{staticClass:"ml-2",attrs:{dark:""},on:{click:e.clearFilters}},[e._v("mdi mdi-reload")])],1),e._v(" "),t(r.a,{directives:[{name:"show",rawName:"v-show",value:e.can("payroll_payslip_generate_access"),expression:"can(`payroll_payslip_generate_access`)"}],staticClass:"ma-0 px-0",attrs:{dense:"","x-small":"",ripple:!1,text:"",title:"Filter By Department"}},[t(o.a,{staticClass:"ml-2",attrs:{dark:""},on:{click:function(t){e.dialogVisible=!0}}},[e._v("mdi-filter-multiple\n      ")])],1),e._v(" "),t(r.a,{staticClass:"ma-0 px-0",attrs:{dense:"","x-small":"",ripple:!1,text:"",title:"Download All Payslips"}},[t(o.a,{staticClass:"ml-2",attrs:{dark:""},on:{click:e.toggleFilter}},[e._v("mdi-filter ")])],1),e._v(" "),t(r.a,{directives:[{name:"btn",rawName:"v-btn"},{name:"show",rawName:"v-show",value:e.selectedItems.length&&e.can("payroll_payslip_generate_access"),expression:"selectedItems.length && can(`payroll_payslip_generate_access`)"}],staticClass:"primary toolbar-button-design1",attrs:{small:"",color:"primary",title:"Payslips For selected"},on:{click:e.generateNewpayslipsSelected}},[e._v("\n      Payslips For selected\n    ")]),e._v(" "),t(n.a,{staticClass:"text-right",attrs:{cols:"4"}},[t(r.a,{directives:[{name:"show",rawName:"v-show",value:e.can("payroll_payslip_generate_access"),expression:"can(`payroll_payslip_generate_access`)"}],staticClass:"ma-0 px-0",attrs:{dense:"","x-small":"",ripple:!1,text:"",title:"Generate Payslips by Department"}},[t(o.a,{staticClass:"mx-1 white--text",on:{click:e.openPayslipDialog}},[e._v("mdi-briefcase-outline")])],1),e._v(" "),t(r.a,{directives:[{name:"show",rawName:"v-show",value:e.downloadAllDisplayStatus,expression:"downloadAllDisplayStatus"}],staticClass:"ma-0 px-0",attrs:{dense:"","x-small":"",ripple:!1,text:"",download:"",href:e.payslipsDownloadAllURL,small:"",title:"Download All Payslips"}},[t(o.a,{staticClass:"mx-1 white--text",on:{click:function(t){e.showFilters=!e.showFilters}}},[e._v("mdi mdi-download")])],1)],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports},855:function(e,t,l){"use strict";l.d(t,"a",(function(){return c})),l.d(t,"b",(function(){return o}));var r=l(96),n=l(1),o=Object(n.k)("v-toolbar__title"),c=Object(n.k)("v-toolbar__items");r.a}}]);