(window.webpackJsonp=window.webpackJsonp||[]).push([[361,186,194,238],{1002:function(e,t,n){var content=n(1028);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(21).default)("4d0b8504",content,!0,{sourceMap:!1})},1027:function(e,t,n){"use strict";n(1002)},1028:function(e,t,n){var r=n(20)((function(i){return i[1]}));r.push([e.i,"input[type=number][data-v-1be929ca]::-webkit-inner-spin-button,input[type=number][data-v-1be929ca]::-webkit-outer-spin-button{font-size:20px!important;padding:5px!important}",""]),r.locals={},e.exports=r},1030:function(e,t,n){"use strict";n.r(t);var r=n(336),o=n(211),l=n(888),c=n(221),d=(n(37),n(543),{props:["label","default_value"],auth:!1,layout:"login",data:function(){return{hour:"00",minute:"00",menu2:!1,time:"00:00"}},created:function(){this.time=this.default_value,this.$emit("getTime",this.default_value)},methods:{updateTime:function(){this.hour<0&&(this.hour=0),this.hour>23&&(this.hour=23),this.minute<0&&(this.minute=0),this.minute>59&&(this.minute=59),this.time="".concat(String(this.hour).padStart(2,"0"),":").concat(String(this.minute).padStart(2,"0")),this.$emit("getTime",this.time)},incrementHour:function(){this.hour=(this.hour+1)%24,this.updateTime()},decrementHour:function(){this.hour=(this.hour-1+24)%24,this.updateTime()},incrementMinute:function(){this.minute=(this.minute+1)%60,this.updateTime()},decrementMinute:function(){this.minute=(this.minute-1+60)%60,this.updateTime()}}}),m=(n(1027),n(60)),component=Object(m.a)(d,(function(){var e=this,t=e._self._c;return t(l.a,{ref:"menu",attrs:{dense:"","close-on-content-click":!1,transition:"scale-transition","offset-y":"","max-width":"150px"},scopedSlots:e._u([{key:"activator",fn:function(n){var r=n.on,o=n.attrs;return[t(c.a,e._g(e._b({attrs:{label:e.label,outlined:"",dense:"","append-icon":"mdi-clock-time-four-outline","hide-details":!0},on:{keydown:[function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.updateTime.apply(null,arguments)},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"tab",9,t.key,"Tab")?null:e.updateTime.apply(null,arguments)}]},model:{value:e.time,callback:function(t){e.time=t},expression:"time"}},"v-text-field",o,!1),r))]}}]),model:{value:e.menu2,callback:function(t){e.menu2=t},expression:"menu2"}},[e._v(" "),t(r.a,{staticStyle:{height:"55px"}},[t(o.a,{staticClass:"pb-2"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.hour,expression:"hour"}],staticStyle:{border:"1px solid grey","border-radius":"5px"},attrs:{outlined:"",dense:"",placeholder:"HH",type:"number",min:"0",max:"23"},domProps:{value:e.hour},on:{input:[function(t){t.target.composing||(e.hour=t.target.value)},e.updateTime],click:e.updateTime,keydown:[function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"up",38,t.key,["Up","ArrowUp"])?null:(t.preventDefault(),e.incrementHour.apply(null,arguments))},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"down",40,t.key,["Down","ArrowDown"])?null:(t.preventDefault(),e.decrementHour.apply(null,arguments))},function(t){if(!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter"))return null;t.preventDefault(),e.menu2=!1}]}}),e._v("\n       \n      "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.minute,expression:"minute"}],staticStyle:{border:"1px solid grey","border-radius":"5px"},attrs:{outlined:"",dense:"",placeholder:"MM",type:"number",min:"0",max:"59"},domProps:{value:e.minute},on:{input:[function(t){t.target.composing||(e.minute=t.target.value)},e.updateTime],click:e.updateTime,keydown:[function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"up",38,t.key,["Up","ArrowUp"])?null:(t.preventDefault(),e.incrementMinute.apply(null,arguments))},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"down",40,t.key,["Down","ArrowDown"])?null:(t.preventDefault(),e.decrementMinute.apply(null,arguments))},function(t){if(!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter"))return null;t.preventDefault(),e.menu2=!1}]}})])],1)],1)}),[],!1,null,"1be929ca",null);t.default=component.exports},1282:function(e,t,n){"use strict";n.r(t);var r=n(921),o=n(117),l=n(79),c=n(539),d=n(889),m=n(116),h=n(538),f=n(900),_=n(360),y=n(1014),v=n(221),k=(n(33),n(41),n(61),n(222),n(11),n(6),n(9),n(57),{props:["dialogNew","editItemPayload"],components:{TimePickerCommon:n(1030).default},data:function(){return{daysNumaric:[],managers:[],time_in_menu:!1,menu:!1,days:[{id:"1",name:"Monday"},{id:"2",name:"Tuesday"},{id:"3",name:"Wednesday"},{id:"4",name:"Thursday"},{id:"5",name:"Friday"},{id:"6",name:"Saturday"},{id:"0",name:"Sunday"}],content:"\n        <h1>Yay Headlines!</h1>\n        <p>All these <strong>cool tags</strong> are working now.</p>\n          ",color:"primary",e1:1,menu2:!1,preloader:!1,loading:!1,response:!1,id:"",snackbar:!1,to:"",number:"",cc:"",bcc:"",email:"",whatsapp:"",payload:{mediums:[],company_id:0},errors:[],branchesList:[],branch_id:""}},created:function(){for(var e,t,n,r=this,i=1;i<=31;i++)this.daysNumaric.push({id:i+"",name:i+""});console.log(this.editItemPayload),this.preloader=!1,this.$axios.get("branches_list",{params:{per_page:1e3,company_id:this.$auth.user.company_id}}).then((function(e){var data=e.data;r.branchesList=data,r.branch_id=r.$auth.user.branch_id||""})),this.payload.company_id=null===(e=this.$auth)||void 0===e||null===(t=e.user)||void 0===t||null===(n=t.company)||void 0===n?void 0:n.id,this.add(),this.editItemPayload&&(this.payload.branch_id=this.editItemPayload.branch_id,this.payload.company_id=this.editItemPayload.company_id,this.payload.branch_id=this.editItemPayload.branch_id,this.managers=this.editItemPayload.managers,this.email=this.editItemPayload.mediums.includes("Email")?"Email":"",this.whatsapp=this.editItemPayload.mediums.includes("Whatsapp")?"Whatsapp":"",0==this.managers.length&&this.add())},methods:{set_date_save:function(e,t){e.save(t)},add:function(){if(this.managers.length>=3)return this.snackbar=!0,this.response="Maximum 3 managers",!1;this.managers.push({name:"",email:"",whatsapp_number:""})},removeItem:function(e){this.managers.splice(e,1)},close:function(){this.$emit("close-dialog")},setDay:function(){var e=this.payload;e.frequency,e.day,e.date},onScroll:function(){this.scrollInvoked++},can:function(e){return this.$pagePermission.can(e,this)},add_number:function(){this.number&&this.number.length>10&&(this.payload.numbers.push(this.number),this.number="")},add_to:function(){this.payload.tos.push(this.to),this.to=""},add_cc:function(){this.payload.ccs.push(this.cc),this.cc=""},add_bcc:function(){this.payload.bccs.push(this.bcc),this.bcc=""},deleteTO:function(i){this.payload.tos.splice(i,1)},deleteNumber:function(i){this.payload.numbers.splice(i,1)},deleteCC:function(i){this.payload.ccs.splice(i,1)},deleteBCC:function(i){this.payload.bccs.splice(i,1)},store:function(){var e=this;this.payload.managers=this.managers.filter((function(e){return""!=e.email&&""!=e.name})),this.payload.mediums=[],this.email&&this.payload.mediums.push("Email"),this.whatsapp&&this.payload.mediums.push("Whatsapp"),this.managers.forEach((function(element){element.company_id=e.$auth.user.company_id,element.branch_id=e.payload.branch_id})),this.editItemPayload?this.$axios.put("/device_notifications/"+this.editItemPayload.id,this.payload).then((function(t){var data=t.data;e.loading=!1,e.$emit("getDataFromApi"),data.status?(e.snackbar=data.status,e.response=data.message,setTimeout((function(){e.$emit("closePopup",data)}),500)):e.errors=data.errors})).catch((function(e){return console.log(e)})):this.$axios.post("/device_notifications",this.payload).then((function(t){var data=t.data;e.loading=!1,e.$emit("getDataFromApi"),data.status?(e.snackbar=data.status,e.response=data.message,setTimeout((function(){e.$emit("closePopup",data)}),500)):e.errors=data.errors})).catch((function(e){return console.log(e)}))},test_endpoint:function(){this.$axios.get("/test/whatsapp").then((function(e){}))},test:function(){n(188)({method:"post",url:"https://graph.facebook.com/v14.0/102482416002121/messages",headers:{"Content-Type":"application/json",Authorization:"Bearer EAAP9IfKKSo0BAGDS96w2XuYjjpXIqxZBAOcwzlFWecCxODjNO3ruEcbnZCkmHSWNAGNf1Q9wC2uwe5XnyxteTOYAO3l9wgy4iu9L6wwYgtZBZAygXV3Tc4euoYANOZCFlvMAsnNz7vNQEYUYdL56l9poliM3eS6ZCZBV4dMzJhKEQKDbUTZB2ZBvEVl2mlHvSj8dCWgITF8e9GFkTXO8isMsx"},data:JSON.stringify({messaging_product:"whatsapp",to:"923108559858",type:"template",template:{name:"automated_reports",language:{code:"en"}}})}).then((function(e){})).catch((function(e){console.log(e)}))}}}),x=n(60),component=Object(x.a)(k,(function(){var e=this,t=e._self._c;return t("div",[t("div",{staticClass:"text-center ma-2"},[t(f.a,{attrs:{top:"top",color:"secondary",elevation:"24"},model:{value:e.snackbar,callback:function(t){e.snackbar=t},expression:"snackbar"}},[e._v("\n      "+e._s(e.response)+"\n    ")])],1),e._v(" "),t(r.a,{staticClass:"pb-0",attrs:{items:e.branchesList,dense:"",placeholder:"Select Branch",outlined:"","item-value":"id","item-text":"branch_name",label:"Branch"},model:{value:e.payload.branch_id,callback:function(t){e.$set(e.payload,"branch_id",t)},expression:"payload.branch_id"}}),e._v(" "),e.errors&&e.errors.branch_id&&e.errors.branch_id[0]?t("span",{staticClass:"error--text"},[e._v(e._s(e.errors.branch_id[0]))]):e._e(),e._v(" "),t(h.a,{staticClass:"pt-3",attrs:{dense:""}},[t(c.a,{staticClass:"pa-1 ma-0",attrs:{cols:"6"}},[t(y.a,{attrs:{label:"Email"},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}})],1),e._v(" "),t(c.a,{staticClass:"pa-1 align-end",attrs:{cols:"6"}},[t(y.a,{attrs:{label:"Whatsapp"},model:{value:e.whatsapp,callback:function(t){e.whatsapp=t},expression:"whatsapp"}})],1),e._v(" "),t(c.a,{staticClass:"pa-0 ma-0",attrs:{cols:"12"}},[e.errors&&e.errors.mediums?t("span",{staticClass:"error--text"},[e._v(e._s(e.errors.mediums[0]))]):e._e()])],1),e._v(" "),t(d.a),e._v(" "),t(h.a,{staticClass:"pt-3"},[t(c.a,{attrs:{md:"6"}},[t("b",[e._v("Add Manager(s)")])])],1),e._v(" "),e._l(e.managers,(function(n,r){return t("div",{key:r},[t(v.a,{attrs:{dense:"",outlined:"",label:"Name"},model:{value:n.name,callback:function(t){e.$set(n,"name",t)},expression:"item.name"}}),e._v(" "),t(v.a,{attrs:{dense:"",outlined:"",type:"email",label:"Email"},model:{value:n.email,callback:function(t){e.$set(n,"email",t)},expression:"item.email"}}),e._v(" "),t(v.a,{attrs:{dense:"",outlined:"",label:"Whatsapp Number"},model:{value:n.whatsapp_number,callback:function(t){e.$set(n,"whatsapp_number",t)},expression:"item.whatsapp_number"}}),e._v(" "),t(h.a,[t(c.a,{staticClass:"pa-0",attrs:{md:"6"}},[t(d.a)],1),e._v(" "),t(c.a,{staticClass:"pa-0 text-end",staticStyle:{"margin-top":"-10px"},attrs:{md:"6"}},[t(m.a,{attrs:{title:"Delete"},on:{click:function(t){return e.removeItem(r)}}},[e._v("mdi-trash-can-outline")]),e._v(" "),r==e.managers.length-1?t(m.a,{attrs:{title:"Add - Maximum 3 managers",color:"black",disabled:e.managers.length>=3},on:{click:e.add}},[e._v("mdi-plus-circle")]):e._e()],1)],1),e._v(" "),t(c.a,{attrs:{md:"12"}},[e.errors&&e.errors.managers?t("span",{staticClass:"error--text"},[e._v(e._s(e.errors.managers[0]))]):e._e()])],1)})),e._v(" "),t(l.a,{staticClass:"mt-5"},[t(_.a),e._v(" "),t(o.a,{staticClass:"primary",attrs:{disabled:!e.managers.length,small:""},on:{click:e.store}},[e._v("\n      "+e._s(e.editItemPayload?"Update":"Save"))])],1)],2)}),[],!1,null,null,null);t.default=component.exports},1600:function(e,t,n){"use strict";n.r(t);var r=n(117),o=n(138),l=n(79),c=n(903),d=n(1583),m=n(361),h=n(116),f=n(336),_=n(211),y=n(10),v=n(888),k=n(897),x=n(920),w=n(900),C=n(360),P=n(221),S=n(963),O=n(99),D=n(886),A=n(86),N=(n(37),n(33),n(2));n(222),n(11),n(6),n(12),n(14),n(18),n(9),n(19);function F(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function I(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?F(Object(source),!0).forEach((function(t){Object(N.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):F(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var $={components:{DeviceNotification:n(1282).default},data:function(){return{dialogviewHisotry:!1,totalRowsCount_history:10,branchesList:[],editItemPayload:null,newDialogKey:1,perPage_history:10,cumulativeIndex_history:1,currentPage_history:1,perPage:10,cumulativeIndex:1,currentPage:1,dialogNew:!1,showFilters:!1,filters:{},isFilter:!1,totalRowsCount:0,datatable_search_textbox:"",filter_employeeid:"",snack:!1,snackColor:"",snackText:"",dialog:!1,color:"primary",endpoint:"device_notifications",e1:1,menu2:!1,preloader:!1,loading:!1,response:!1,id:"",snackbar:!1,to:"",cc:"",bcc:"",number:"",message:"",payload:{report_types:[],mediums:[],frequency:null,time:null,tos:[],ccs:[],bccs:[]},data:[],options:{},errors:[],data_history:[],options_history:{},days:[{id:1,name:"Monday"},{id:2,name:"Tuesday"},{id:3,name:"Wednesday"},{id:4,name:"Thursday"},{id:5,name:"Friday"},{id:6,name:"Saturday"},{id:0,name:"Sunday"}],headers_table_history:[{text:"#",align:"left",sortable:!1,key:"title",value:"sno1",filterable:!1,filterSpecial:!1},{text:"Email",align:"left",sortable:!1,key:"email",value:"email",filterable:!1,filterSpecial:!1},{text:"Whatsapp Number",align:"left",sortable:!1,key:"whatsapp_number",value:"whatsapp_number",filterable:!1,filterSpecial:!1},{text:"Sent at ",align:"left",sortable:!1,key:"created_at",value:"created_at",filterable:!1,filterSpecial:!1}],headers_table:[{text:"#",align:"left",sortable:!1,key:"title",value:"sno",filterable:!1,filterSpecial:!1},{text:"Manager1",align:"left",sortable:!0,key:"manager",value:"manager1",filterable:!0,filterSpecial:!1},{text:"Manager2",align:"left",sortable:!0,key:"manager",value:"manager2",filterable:!0,filterSpecial:!1},{text:"Manager3",align:"left",sortable:!0,key:"manager",value:"manager3",filterable:!0,filterSpecial:!1},{text:"Media",align:"left",sortable:!0,key:"medium",value:"medium",filterable:!0,filterSpecial:!0},{text:"Last Sent",align:"left",sortable:!0,key:"time",value:"last_sent",filterable:!0,filterSpecial:!1},{text:"Options",align:"left",sortable:!1,key:"time",value:"options",filterable:!1,filterSpecial:!1}],viewHistoryItem:null}},watch:{options:{handler:function(){this.getDataFromApi()},deep:!0}},created:function(){var e,t,n;if(this.preloader=!1,this.id=null===(e=this.$auth)||void 0===e||null===(t=e.user)||void 0===t||null===(n=t.company)||void 0===n?void 0:n.id,this.getDataFromApi(),!this.$auth.user.branch_id){var r;(r=this.headers_table).splice.apply(r,[1,0].concat([{text:"Branch",align:"left",sortable:!0,key:"branch_id",value:"branch.branch_name",filterable:!0,filterSpecial:!0}]))}this.getbranchesList()},methods:{getDayName:function(e){var t=this.days.filter((function(t){return t.id==e}));if(1==t.length)return t[0].name},getbranchesList:function(){var e=this;this.payloadOptions={params:{company_id:this.$auth.user.company_id}},this.$axios.get("branches_list",this.payloadOptions).then((function(t){var data=t.data;e.branchesList=data}))},openNewPage:function(){++this.newDialogKey,this.editItemPayload=null,this.dialogNew=!0},closePopup:function(data){this.snackbar=data.status,this.response=data.message,this.dialogNew=!1},datatable_cancel:function(){this.datatable_search_textbox=""},datatable_open:function(){this.datatable_search_textbox=""},datatable_close:function(){this.loading=!1},send:function(){this.$axios.get("https://ezwhat.com/api/send.php?number=".concat(this.number,"&type=text&message=").concat(this.message,"&instance_id=64466B01B7926&access_token=a27e1f9ca2347bb766f332b8863ebe9f")).then((function(e){var data=e.data;return console.log(data)}))},can:function(e){return this.$pagePermission.can(e,this)},viewItem:function(e){this.dialogviewHisotry=!0,this.viewHistoryItem=e,this.getDataFromApi_history(e)},getDataFromApi_history:function(e){var t=this;this.loading=!0,this.data_history=[];var n=this.options_history,r=n.sortBy,o=n.sortDesc,l=n.page,c=n.itemsPerPage,d={params:{page:l,sortBy:r?r[0]:"",sortDesc:o?o[0]:"",per_page:c,company_id:this.$auth.user.company_id,notification_id:e.id}};this.currentPage_history=l,this.perPage_history=c,this.$axios.get("device_notifications_logs?page=".concat(l),d).then((function(e){var data=e.data;t.data_history=data.data,t.totalRowsCount_history=data.total,t.total_history=data.total,t.loading=!1}))},editItem:function(e){++this.newDialogKey,this.dialogNew=!0,this.editItemPayload=e},deleteItem:function(e){var t=this;confirm("Are you sure you wish to delete , to mitigate any inconvenience in future.")&&this.$axios.delete(this.endpoint+"/"+e.id).then((function(e){var data=e.data;data.status?(t.snackbar=data.status,t.response=data.message,t.getDataFromApi()):t.errors=data.errors})).catch((function(e){return console.log(e)}))},add_to:function(){this.payload.tos.push(this.to),this.to=""},add_cc:function(){this.payload.ccs.push(this.cc),this.cc=""},add_bcc:function(){this.payload.bccs.push(this.bcc),this.bcc=""},deleteTO:function(i){this.payload.tos.splice(i,1)},deleteCC:function(i){this.payload.ccs.splice(i,1)},deleteBCC:function(i){this.payload.bccs.splice(i,1)},applyFilters:function(){this.getDataFromApi()},toggleFilter:function(){this.isFilter=!this.isFilter},clearFilters:function(){this.filters={},this.isFilter=!1,this.getDataFromApi()},getDataFromApi:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.endpoint,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";if(("serach_medium"==n||"serach_email_recipients"==n)&&""!=r&&r.length<=5)return this.snack=!0,this.snackColor="error",this.snackText="Minimum 5 Characters to filter ",this.loading=!1,!1;this.loading=!0,""==t&&(t=this.endpoint);var o=this.options,l=o.sortBy,c=o.sortDesc,d=o.page,m=o.itemsPerPage,h={params:I({page:d,sortBy:l?l[0]:"",sortDesc:c?c[0]:"",per_page:m,company_id:this.$auth.user.company_id,role_type:"employee"},this.filters)};this.currentPage=d,this.perPage=m,""!=n&&(h.params[n]=r),this.$axios.get("".concat(t,"?page=").concat(d),h).then((function(t){var data=t.data;if(""!=n&&0==data.data.length)return e.snack=!0,e.snackColor="error",e.snackText="No Results Found",e.loading=!1,!1;e.data=data.data,e.totalRowsCount=data.total,e.total=data.total,e.loading=!1}))}}},T=$,M=n(60),component=Object(M.a)(T,(function(){var e=this,t=e._self._c;return e.can("device_notification_contnet_access")?t("div",[t("div",{staticClass:"text-center ma-2"},[t(w.a,{attrs:{top:"top",color:"secondary",elevation:"24"},model:{value:e.snackbar,callback:function(t){e.snackbar=t},expression:"snackbar"}},[e._v("\n      "+e._s(e.response)+"\n    ")])],1),e._v(" "),t(m.a,{key:e.newDialogKey,attrs:{width:"900"},model:{value:e.dialogviewHisotry,callback:function(t){e.dialogviewHisotry=t},expression:"dialogviewHisotry"}},[t(o.a,[t(l.d,{staticClass:"popup_background",attrs:{dense:""}},[e._v("\n        History1\n        "),t(C.a),e._v(" "),t(h.a,{attrs:{outlined:"",dark:""},on:{click:function(t){e.dialogviewHisotry=!1}}},[e._v("\n          mdi mdi-close-circle\n        ")])],1),e._v(" "),t(l.c,[t(d.a,{staticClass:"elevation-1",attrs:{flat:"",dense:"",headers:e.headers_table_history,items:e.data_history,options:e.options_history,"footer-props":{itemsPerPageOptions:[10,50,100,500,1e3]},"server-items-length":e.totalRowsCount_history},on:{"update:options":function(t){e.options_history=t}},scopedSlots:e._u([{key:"item.sno1",fn:function(t){var n=t.item;return[e._v("\n            "+e._s(e.currentPage_history?(e.currentPage_history-1)*e.perPage_history+(e.cumulativeIndex_history+e.data_history.indexOf(n)):e.cumulativeIndex_history+e.data_history.indexOf(n))+"\n          ")]}},{key:"item.created_at",fn:function(t){var n=t.item;return[e._v("\n            "+e._s(e.$dateFormat.format4(n.created_at))+"\n          ")]}},{key:"item.whatsapp_number",fn:function(t){var n=t.item;return[e._v("\n            "+e._s(n.whatsapp_number||"---")+"\n          ")]}},{key:"item.email",fn:function(t){var n=t.item;return[e._v("\n            "+e._s(n.email||"---")+"\n          ")]}}],null,!1,3828281665)})],1)],1)],1),e._v(" "),e.preloader?t("Preloader"):t("div",[t("div",{staticClass:"text-center"},[t(m.a,{attrs:{persistent:"",width:"500"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[t(o.a,[t(l.d,{staticClass:"popup_background",attrs:{dense:""}},[e._v("\n            Send Test message to Whatsapp\n            "),t(C.a),e._v(" "),t(h.a,{attrs:{outlined:"",dark:""},on:{click:function(t){e.dialog=!1}}},[e._v("\n              mdi mdi-close-circle\n            ")])],1),e._v(" "),t(l.c,{staticClass:"mt-4"},[t(P.a,{attrs:{dense:"",outlined:"",placeholder:"number"},model:{value:e.number,callback:function(t){e.number=t},expression:"number"}}),e._v(" "),t(S.a,{attrs:{dense:"",outlined:"",placeholder:"message"},model:{value:e.message,callback:function(t){e.message=t},expression:"message"}},[e._v("\n              Hello\n            ")])],1),e._v(" "),t(l.a,[t(C.a),e._v(" "),t(r.a,{staticClass:"primary",attrs:{small:"",dense:""},on:{click:e.send}},[e._v(" Send ")])],1)],1)],1)],1),e._v(" "),t(k.a,{staticStyle:{width:"300px"},attrs:{bottom:"",temporary:"",right:"",fixed:""},model:{value:e.dialogNew,callback:function(t){e.dialogNew=t},expression:"dialogNew"}},[t(o.a,[t(l.d,{staticClass:"popup_background",attrs:{dense:""}},[e._v("\n          "+e._s(e.editItemPayload?"Edit":"New")+" Notification\n          "),t(C.a),e._v(" "),t(h.a,{attrs:{outlined:"",dark:""},on:{click:function(t){e.dialogNew=!1}}},[e._v("\n            mdi mdi-close-circle\n          ")])],1),e._v(" "),t(l.c,{staticClass:"mt-4"},[t("DeviceNotification",{key:e.newDialogKey,attrs:{editItemPayload:e.editItemPayload},on:{getDataFromApi:e.getDataFromApi,closePopup:e.closePopup}})],1)],1)],1),e._v(" "),t(o.a,{staticClass:"mb-5 mt-2",attrs:{elevation:"0"}},[t(O.a,{staticClass:"rounded-md",attrs:{dense:"",flat:""}},[t(D.b,[t("span",[e._v(" Device Offline/Online Notifications ")])]),e._v(" "),t("span",[t(r.a,{staticClass:"ma-0 px-0",attrs:{dense:"","x-small":"",ripple:!1,text:"",title:"Reload"}},[t(h.a,{staticClass:"ml-2",attrs:{dark:""},on:{click:function(t){return e.getDataFromApi()}}},[e._v("mdi mdi-reload")])],1)],1),e._v(" "),t("span",[t(r.a,{attrs:{"x-small":"",ripple:!1,text:"",title:"Filter"},on:{click:function(t){return e.toggleFilter()}}},[t(h.a,{attrs:{dark:""}},[e._v("mdi-filter")])],1)],1),e._v(" "),t(C.a),e._v(" "),t("span",[e.can("device_notification_contnet_create")?t(r.a,{staticClass:"primary",attrs:{"x-small":"",ripple:!1,title:"Add Notification",color:"violet"},on:{click:function(t){return e.openNewPage()}}},[e._v("\n            Add+\n          ")]):e._e()],1)],1),e._v(" "),t(w.a,{attrs:{timeout:3e3,color:e.snackColor},scopedSlots:e._u([{key:"action",fn:function(n){var o=n.attrs;return[t(r.a,e._b({attrs:{text:""},on:{click:function(t){e.snack=!1}}},"v-btn",o,!1),[e._v(" Close ")])]}}],null,!1,3090489768),model:{value:e.snack,callback:function(t){e.snack=t},expression:"snack"}},[e._v("\n        "+e._s(e.snackText)+"\n\n        ")]),e._v(" "),t(d.a,{staticClass:"elevation-1",attrs:{flat:"",dense:"",headers:e.headers_table,items:e.data,"model-value":"data.id",loading:e.loading,options:e.options,"footer-props":{itemsPerPageOptions:[10,50,100,500,1e3]},"server-items-length":e.totalRowsCount},on:{"update:options":function(t){e.options=t}},scopedSlots:e._u([{key:"header",fn:function(n){var r=n.props.headers;return[e.isFilter?t("tr",e._l(r,(function(header){return t("td",{key:header.text},[t(c.a,[header.filterable&&!header.filterSpecial?t(P.a,{attrs:{clearable:"","hide-details":!0,id:header.value,outlined:"",dense:"",autocomplete:"off"},on:{input:function(t){return e.applyFilters(header.key,t)}},model:{value:e.filters[header.value],callback:function(t){e.$set(e.filters,header.value,t)},expression:"filters[header.value]"}}):e._e(),e._v(" "),header.filterSpecial&&"branch.branch_name"==header.value?t(x.a,{attrs:{id:header.key,"hide-details":!0,clearable:"",outlined:"",dense:"",small:"","item-text":"branch_name","item-value":"id",items:[{branch_name:"All Branches",id:""}].concat(Object(A.a)(e.branchesList)),placeholder:"Branch"},on:{change:function(t){return e.applyFilters(header.key,e.id)}},model:{value:e.filters[header.key],callback:function(t){e.$set(e.filters,header.key,t)},expression:"filters[header.key]"}}):e._e(),e._v(" "),header.filterSpecial&&"frequency"==header.value?t(x.a,{attrs:{id:header.key,"hide-details":!0,clearable:"",outlined:"",dense:"",small:"","item-text":"name","item-value":"id",items:[{name:"All",id:""},{name:"Daily",id:"Daily"},{name:"Weekly",id:"Weekly"},{name:"Monthly",id:"Monthly"}],placeholder:"Report Type"},on:{change:function(t){return e.applyFilters(header.key,e.id)}},model:{value:e.filters[header.key],callback:function(t){e.$set(e.filters,header.key,t)},expression:"filters[header.key]"}}):e._e(),e._v(" "),header.filterSpecial&&"medium"==header.value?t(x.a,{attrs:{id:header.key,"hide-details":!0,clearable:"",outlined:"",dense:"",small:"","item-text":"name","item-value":"id",items:[{name:"All",id:""},{name:"Email",id:"Email"},{name:"Whatsapp",id:"Whatsapp"}],placeholder:"Medium"},on:{change:function(t){return e.applyFilters(header.key,e.id)}},model:{value:e.filters[header.key],callback:function(t){e.$set(e.filters,header.key,t)},expression:"filters[header.key]"}}):e._e()],1)],1)})),0):e._e()]}},{key:"item.sno",fn:function(t){var n=t.item;t.index;return[e._v("\n          "+e._s(e.currentPage?(e.currentPage-1)*e.perPage+(e.cumulativeIndex+e.data.indexOf(n)):"")+"\n        ")]}},{key:"item.medium",fn:function(n){var r=n.item;return e._l(r.mediums,(function(n,i){return t("div",{key:i,staticClass:"ma-1",attrs:{small:"",color:"primary"}},[e._v("\n            "+e._s(n)+"\n\n            "),t("br")])}))}},{key:"item.frequency",fn:function(n){var r=n.item;n.index;return[e._v("\n          "+e._s(r.frequency)+"\n          "),t("div",{staticClass:"secondary-value"},[e._v("\n            "+e._s("Weekly"==r.frequency?e.getDayName(r.day):"")+"\n            "+e._s("Monthly"==r.frequency?r.day:"")+"\n          ")])]}},{key:"item.manager1",fn:function(n){var r=n.item;return[e._v("\n          "+e._s(r.managers&&r.managers[0]&&r.managers[0].name||"---")+"\n          "),t("div",{staticClass:"secondary-value"},[e._v("\n            "+e._s(r.managers&&r.managers[0]&&r.managers[0].email||"---")+"\n            "),t("br"),e._v("\n            "+e._s(r.managers&&r.managers[0]&&r.managers[0].whatsapp_number||"---")+"\n          ")])]}},{key:"item.manager2",fn:function(n){var r=n.item;return[e._v("\n          "+e._s(r.managers&&r.managers[1]&&r.managers[1].name||"---")+"\n          "),t("div",{staticClass:"secondary-value"},[e._v("\n            "+e._s(r.managers&&r.managers[1]&&r.managers[1].email||"---")+"\n            "),t("br"),e._v("\n            "+e._s(r.managers&&r.managers[1]&&r.managers[1].whatsapp_number||"---")+"\n          ")])]}},{key:"item.manager3",fn:function(n){var r=n.item;return[e._v("\n          "+e._s(r.managers&&r.managers[2]&&r.managers[2].name||"---")+"\n          "),t("div",{staticClass:"secondary-value"},[e._v("\n            "+e._s(r.managers&&r.managers[2]&&r.managers[2].email||"---")+"\n            "),t("br"),e._v("\n            "+e._s(r.managers&&r.managers[2]&&r.managers[2].whatsapp_number||"---")+"\n          ")])]}},{key:"item.last_sent",fn:function(t){var n=t.item;return[e._v("\n          "+e._s(n.logs&&n.logs[0]&&e.$dateFormat.format4(n.logs[n.logs.length-1].created_at)||"---")+"\n        ")]}},{key:"item.options",fn:function(n){var o=n.item;return[t(v.a,{attrs:{bottom:"",left:""},scopedSlots:e._u([{key:"activator",fn:function(n){var o=n.on,l=n.attrs;return[t(r.a,e._g(e._b({attrs:{"dark-2":"",icon:""}},"v-btn",l,!1),o),[t(h.a,[e._v("mdi-dots-vertical")])],1)]}}],null,!0)},[e._v(" "),t(f.a,{attrs:{width:"120",dense:""}},[e.can("device_notification_contnet_view")?t(_.a,{on:{click:function(t){return e.viewItem(o)}}},[t(y.c,{staticStyle:{cursor:"pointer"}},[t(h.a,{attrs:{color:"secondary",small:""}},[e._v(" mdi-eye ")]),e._v("\n                  View\n                ")],1)],1):e._e(),e._v(" "),e.can("device_notification_contnet_edit")?t(_.a,{on:{click:function(t){return e.editItem(o)}}},[t(y.c,{staticStyle:{cursor:"pointer"}},[t(h.a,{attrs:{color:"secondary",small:""}},[e._v(" mdi-pencil ")]),e._v("\n                  Edit\n                ")],1)],1):e._e(),e._v(" "),e.can("device_notification_contnet_delete")?t(_.a,{on:{click:function(t){return e.deleteItem(o)}}},[t(y.c,{staticStyle:{cursor:"pointer"}},[t(h.a,{attrs:{color:"error",small:""}},[e._v(" mdi-delete ")]),e._v("\n                  Delete\n                ")],1)],1):e._e()],1)],1)]}}],null,!1,3201814508)})],1)],1)],1):t("NoAccess")}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{DeviceNotification:n(1282).default,Preloader:n(924).default,NoAccess:n(909).default})},909:function(e,t,n){"use strict";n.r(t);var r=n(60),component=Object(r.a)({},(function(){this._self._c;return this._m(0)}),[function(){var e=this._self._c;return e("div",{staticClass:"text-center",staticStyle:{"margin-top":"25%"}},[e("b",[this._v("No Access")])])}],!1,null,null,null);t.default=component.exports},924:function(e,t,n){"use strict";n.r(t);var r=n(219),o=n(60),component=Object(o.a)({},(function(){var e=this._self._c;return e("div",{staticClass:"text-center",staticStyle:{width:"50px",margin:"25% auto"}},[e(r.a,{attrs:{src:"/preloaders/1.gif"}})],1)}),[],!1,null,null,null);t.default=component.exports}}]);