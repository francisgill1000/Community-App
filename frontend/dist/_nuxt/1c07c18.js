(window.webpackJsonp=window.webpackJsonp||[]).push([[296],{1667:function(e,t,n){"use strict";n.r(t);var r=n(894),o=n(329),l=n(114),c=n(133),d=n(87),h=n(518),m=n(516),f=n(147),v=n(212),y=n(515),_=n(893),S=n(873),x=n(96),D=n(3),E=n(81),I=(n(35),n(37),n(23)),k=(n(88),n(55),n(6),n(11),n(80),n(99),n(354),n(13),n(215),n(216),{data:function(){return{floor_id:[],floors:[],room_id:[],rooms:[],displaybutton:!1,progressloading:!1,searchInput:"",snackbar:{message:"",color:"black",show:!0},errors:[],response:"",color:"primary",loading:!0,endpointEmployee:"get_employeeswith_timezonename",endpointUpdatetimezoneStore:"employee_timezone_mapping",endpointDevise:"device",leftSelectedEmp:[],department_id:"",departments:[],leftEmployees:[],rightSelectedEmp:[],rightEmployees:[],leftSelectedDevices:[],leftDevices:[],rightSelectedDevices:[],rightDevices:[],department_ids:["---"],timezones:[],timezone_id:null,options:{params:{company_id:this.$auth.user.company_id,cols:["id","name"]}},isCompany:!0}},mounted:function(){var e=this;this.snackbar.show=!0,this.snackbar.message="Data loading...Please wait ",this.response="Data loading...Please wait ",this.$nextTick((function(){var e=this;setTimeout((function(){e.loading=!1}),2e3)})),setTimeout((function(){e.loading=!1}),2e3)},created:function(){var e=this;return Object(I.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.getFloors();case 2:e.getTimezonesFromApi(),e.getDevisesDataFromApi();case 4:case"end":return t.stop()}}),t)})))()},methods:{getFloors:function(){var e=this;return Object(I.a)(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$axios.get("floor",{params:{company_id:e.$auth.user.company_id}});case 2:n=t.sent,r=n.data,e.floors=r.data;case 5:case"end":return t.stop()}}),t)})))()},getRoomsByFloorId:function(e){var t=this;return Object(I.a)(regeneratorRuntime.mark((function n(){var r,data;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.$axios.get("room-by-floor-id",{params:{company_id:t.$auth.user.company_id,floor_id:e}});case 2:r=n.sent,data=r.data,t.rooms=data;case 5:case"end":return n.stop()}}),n)})))()},getTanentsAndMembersByRoom:function(e){var t=this;return Object(I.a)(regeneratorRuntime.mark((function n(){var r,data,o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.$axios.get("tanents-and-members-by-room-id",{params:{company_id:t.$auth.user.company_id,room_id:e,floor_id:t.floor_id}});case 2:r=n.sent,data=r.data,o=[],data.forEach((function(e){o.push({id:e.id,full_name:e.full_name,system_user_id:parseInt(e.system_user_id),profile_picture:e.profile_picture,isPrimaryUser:"(Primary Member)",rfid:e.rfid}),e.members_only.forEach((function(t){o.push({id:e.id+t.id,full_name:t.full_name,system_user_id:t.system_user_id,profile_picture:t.profile_picture,rfid:t.rfid})})),e.maids.forEach((function(t){o.push({id:e.id+t.id,full_name:t.full_name,system_user_id:t.system_user_id,profile_picture:t.profile_picture,rfid:t.rfid})}))})),t.leftEmployees=o,t.getDevisesDataFromApi();case 8:case"end":return n.stop()}}),n)})))()},getDevisesDataFromApi:function(){var e=this,t={params:{company_id:this.$auth.user.company_id}};this.$axios.get("device_list",t).then((function(t){var data=t.data;e.leftDevices=data}))},getEmployeesDataFromApi:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.endpointEmployee,n={params:{per_page:1e3,company_id:this.$auth.user.company_id,cols:["id","employee_id","display_name","first_name","last_name"]}};this.$axios.get("".concat(t,"?page=").concat(1),n).then((function(t){var data=t.data;e.leftEmployees=data.data}),1e3)},getTimezonesFromApi:function(){var e=this,t={params:{company_id:this.$auth.user.company_id}};this.$axios.get("timezone-list",t).then((function(t){var data=t.data;return e.timezones=data})).catch((function(e){return console.log(e)}))},verifySubmitButton:function(){this.rightEmployees.length>0&&this.rightDevices.length>0?this.displaybutton=!0:this.displaybutton=!1},loadDepartmentemployees:function(){var e=this,t=this.endpointEmployee,n={params:{per_page:1e3,company_id:this.$auth.user.company_id,department_id:this.department_id,cols:["id","employee_id","display_name","first_name","last_name"]}};this.$axios.get("".concat(t,"?page=").concat(1),n).then((function(t){var data=t.data;e.leftEmployees=[],e.leftEmployees=data.data,e.leftSelectedEmp=[],e.rightEmployees=[],e.rightSelectedEmp=[]}))},resetErrorMessages:function(){this.errors=[],this.response="",this.leftEmployees.forEach((function(e){return e.sdkEmpResponse=""})),this.leftDevices.forEach((function(e){return e.sdkDeviceResponse=""}))},onSubmit:function(){var e=this;if(this.resetErrorMessages(),this.displaybutton=!1,""==this.timezone_id?this.response=this.response+"Timezones not selected":0==this.rightEmployees.length?this.response=this.response+" Atleast select one Employee Details":0==this.rightDevices.length&&(this.response=this.response+" Atleast select one Device Details"),""!=this.response)return this.snackbar.show=!0,this.snackbar.message=this.response,this.snackbar.color="red",setTimeout((function(){e.snackbar.show=!1}),1e4),!1;this.loading=!0;var t=["system_user_id"],n=[];this.rightEmployees.map((function(e){var r={};return t.forEach((function(t){e.hasOwnProperty(t)&&(r=e[t],n.push(r))})),r})),t=["device_id"];var r=[];this.rightDevices.map((function(e){var n={};return t.forEach((function(t){e.hasOwnProperty(t)&&(n=e[t],r.push(n))})),n}));var o={timezone_id:this.timezone_id,employee_id:this.rightEmployees,device_id:this.rightDevices,company_id:this.$auth.user.company_id,employee_ids:n,device_ids:r};this.progressloading=!0;var l=this.rightEmployees,c=!0;this.$axios.post("".concat(this.endpointUpdatetimezoneStore),o).then((function(t){var data=t.data;if(data.status&&e.$router.push("/community/access_control/tenant-mapping"),!data.record.SDKResponse)return e.errors=[],e.progressloading=!1,e.snackbar.show=!0,e.errors.message=data.message+" But, Error:Device Communication is not available",e.snackbar.message=data.message+"But,  Error:Device Communication is not available",e.response=data.message+"But,  Error:Device Communication is not available",!1;e.loading=!1,e.rightDevices.forEach((function(t){var n=data.record.SDKResponse.data.find((function(e){return e.sn==t.device_id})),r="",o="";if(""==n.message)r="Success";else if("The device was not found"==n.message)r="The device was not found or offline",c=!1;else if("person info error"==n.message){var d=n.userList;l.forEach((function(element){element.sdkEmpResponse="Success";var e=element.system_user_id;c=!1;var t=d.find((function(t){return t.userCode==e}));o=n.sdkEmpResponse,r="",""!=o&&(element.sdkEmpResponse=t?"person photo error ":"Success")}))}t.sdkDeviceResponse=""!=r?r:" Success",e.errors=[]})),e.rightEmployees=l,e.progressloading=!1,e.loading=!1,c?e.$router.push("/timezonemapping/list"):(e.errors=data.errors,e.errors=[],e.errors.message="Device/Employee Error:   Device and Employee details are Mapped. You can add/remove items from Edit list "),e.displaybutton=!0}))},goback:function(){this.$router.push("/community/access_control/tenant-mapping")},sortObject:function(e){return e.sort((function(a,b){if(a.first_name&&b.first_name){var e=a.first_name.toUpperCase(),t=b.first_name.toUpperCase();return e<t?-1:e>t?1:0}}))},sortObjectD:function(e){return e.sort((function(a,b){if(a.device_id&&b.device_id){var e=a.device_id.toUpperCase(),t=b.device_id.toUpperCase();return e<t?-1:e>t?1:0}return 0}))},sortObjectC:function(e){return e.sort((function(a,b){if(a.name&&b.name){var e=a.name.toUpperCase(),t=b.name.toUpperCase();return e<t?-1:e>t?1:0}}))},allmoveToLeftemp:function(){this.resetErrorMessages(),this.leftEmployees=this.leftEmployees.concat(this.rightEmployees),this.rightEmployees=[],this.leftEmployees=this.sortObject(this.leftEmployees),this.verifySubmitButton()},allmoveToRightEmp:function(){this.resetErrorMessages(),this.rightEmployees=this.rightEmployees.concat(this.leftEmployees.filter((function(e){return"---"==e.timezone.timezone_name||1==e.timezone.timezone_id}))),this.leftEmployees=this.leftEmployees.filter((function(e){return"---"!=e.timezone.timezone_name&&1!=e.timezone.timezone_id})),this.rightEmployees=this.sortObject(this.rightEmployees),this.verifySubmitButton()},moveToLeftempOption2:function(){var e=this;if(this.resetErrorMessages(),this.rightSelectedEmp.length){for(var t=this.rightSelectedEmp.length,n=function(i){if(e.rightSelectedEmp){var t=e.rightEmployees.findIndex((function(t){return t.id==e.rightSelectedEmp[i]})),n=e.rightEmployees.find((function(t){return t.id==e.rightSelectedEmp[i]}));n.sdkEmpResponse="",e.leftEmployees.push(n),e.rightEmployees.splice(t,1)}},i=0;i<t;i++)n(i);this.leftEmployees=this.sortObject(this.leftEmployees);for(var r=0;r<t;r++)this.rightSelectedEmp.pop(this.rightSelectedEmp[r]);this.verifySubmitButton()}},moveToRightEmpOption2:function(){var e=this;if(this.resetErrorMessages(),this.leftSelectedEmp.length){for(var t=this.leftSelectedEmp.length,n=function(i){if(e.leftSelectedEmp){var t=e.leftEmployees.findIndex((function(t){return t.id==e.leftSelectedEmp[i]})),n=e.leftEmployees.find((function(t){return t.id==e.leftSelectedEmp[i]}));e.rightEmployees.push(n),e.leftEmployees.splice(t,1)}},i=0;i<t;i++)n(i);this.rightEmployees=this.sortObject(this.rightEmployees);for(var r=0;r<t;r++)this.leftSelectedEmp.pop(this.leftSelectedEmp[r]);this.verifySubmitButton()}},allmoveLeftDevices:function(){this.resetErrorMessages(),this.leftDevices=this.leftDevices.concat(this.rightDevices),this.rightDevices=[],this.leftDevices=this.sortObjectD(this.leftDevices),this.verifySubmitButton()},allmoveRightDevices:function(){this.resetErrorMessages(),this.rightDevices=this.rightDevices.concat(this.leftDevices.filter((function(e){return"active"==e.status.name}))),this.leftDevices=this.leftDevices.filter((function(e){return"inactive"==e.status.name})),this.rightDevices=this.sortObjectD(this.rightDevices),this.verifySubmitButton()},moveToLeftDevicesOption2:function(){var e=this;if(this.resetErrorMessages(),this.rightSelectedDevices.length){for(var t=this.rightSelectedDevices.length,n=function(i){if(e.rightSelectedDevices){var t=e.rightDevices.findIndex((function(t){return t.id==e.rightSelectedDevices[i]})),n=e.rightDevices.find((function(t){return t.id==e.rightSelectedDevices[i]}));e.leftDevices.push(n),e.rightDevices.splice(t,1)}},i=0;i<t;i++)n(i);this.leftDevices=this.sortObjectD(this.leftDevices);for(var r=0;r<t;r++)this.rightSelectedDevices.pop(this.rightSelectedDevices[r]);this.verifySubmitButton()}},moveToRightDevicesOption2:function(){var e=this;if(this.resetErrorMessages(),this.leftSelectedDevices.length){for(var t=this.leftSelectedDevices.length,n=function(i){if(e.leftSelectedDevices){var t=e.leftDevices.findIndex((function(t){return t.id==e.leftSelectedDevices[i]})),n=e.leftDevices.find((function(t){return t.id==e.leftSelectedDevices[i]}));e.rightDevices.push(n),e.leftDevices.splice(t,1)}},i=0;i<t;i++)n(i);this.rightDevices=this.sortObjectD(this.rightDevices);for(var r=0;r<t;r++)this.leftSelectedDevices.pop(this.leftSelectedDevices[r]);this.verifySubmitButton()}}}}),w=k,C=n(116),component=Object(C.a)(w,(function(){var e=this,t=e._self._c;return t("div",[t("div",{staticClass:"text-center ma-2"},[t(S.a,{attrs:{color:e.snackbar.color,small:"",top:"top",timeout:3e3},model:{value:e.snackbar.show,callback:function(t){e.$set(e.snackbar,"show",t)},expression:"snackbar.show"}},[e._v("\n      "+e._s(e.response)+"\n    ")])],1),e._v(" "),t(y.a,[t(m.a,{attrs:{cols:"3"}},[t(r.a,{attrs:{label:"Floor Number",outlined:"",items:e.floors,dense:"","item-text":"floor_number","item-value":"id","hide-details":!0},on:{change:function(t){return e.getRoomsByFloorId(e.floor_id)}},model:{value:e.floor_id,callback:function(t){e.floor_id=t},expression:"floor_id"}})],1),e._v(" "),t(m.a,{attrs:{cols:"3"}},[t(r.a,{attrs:{label:"Room",outlined:"",items:[{id:"",room_number:"Select All"}].concat(Object(E.a)(e.rooms)),dense:"","item-text":"room_number","item-value":"id","hide-details":!0},on:{change:function(t){return e.getTanentsAndMembersByRoom(e.room_id)}},model:{value:e.room_id,callback:function(t){e.room_id=t},expression:"room_id"}})],1),e._v(" "),t(m.a,{attrs:{cols:"3"}},[t(_.a,{attrs:{items:e.timezones,dense:"",outlined:"","item-value":"timezone_id","item-text":"name","hide-details":"",label:"Timezones",required:""},model:{value:e.timezone_id,callback:function(t){e.timezone_id=t},expression:"timezone_id"}})],1),e._v(" "),t(m.a,{staticClass:"text-right",attrs:{cols:"3"}},[t("div",[t(l.a,{attrs:{color:"primary"},on:{click:function(t){return e.goback()}}},[t(f.a,{attrs:{color:"white"}},[e._v("mdi-format-list-bulleted-square")]),e._v(" View\n          List")],1)],1)])],1),e._v(" "),t(y.a,[t(m.a,{attrs:{cols:"5"}},[t(c.a,{staticClass:"timezone-displaylist1",staticStyle:{height:"300px"}},[t(x.a,{staticStyle:{"border-bottom":"1px solid #ddd"},attrs:{dense:"",flat:""}},[t("span",[e._v(" Tanents & Members ")])]),e._v(" "),t("div",{staticStyle:{height:"245px","overflow-y":"auto","overflow-x":"hidden"}},[t(d.b,e._l(e.leftEmployees,(function(n,r){return t(y.a,{key:n.id,staticClass:"timezone-displaylistview1",staticStyle:{"border-bottom":"1px solid #ddd"},attrs:{id:n.id},model:{value:e.leftEmployees,callback:function(t){e.leftEmployees=t},expression:"leftEmployees"}},[t(m.a,{staticClass:"pa-0 ma-0",attrs:{cols:"1"}},[t(h.a,{attrs:{dense:"",small:"",primary:"","hide-details":"",value:n.id},model:{value:e.leftSelectedEmp,callback:function(t){e.leftSelectedEmp=t},expression:"leftSelectedEmp"}})],1),e._v(" "),t(m.a,{staticClass:"py-1 ma-0",attrs:{cols:"1"}},[t(o.a,{attrs:{size:"40"}},[t(v.a,{attrs:{src:n.profile_picture?n.profile_picture:"/no-profile-image.jpg"}})],1)],1),e._v(" "),t(m.a,{staticClass:"pt-2",attrs:{col:"4"}},[e._v("\n                "+e._s(n.full_name)+" "+e._s(n.isPrimaryUser)+"\n              ")])],1)})),1)],1)],1)],1),e._v(" "),t(m.a,{attrs:{cols:"2"}},[t("div",{staticStyle:{"text-align":"-webkit-center"}},[t("button",{staticClass:"btn primary btn-block white--text",attrs:{type:"button",id:"undo_redo_undo"}},[e._v("\n          Options\n        ")]),e._v(" "),t("button",{staticClass:"btn btn-default btn-block",attrs:{type:"button",id:"undo_redo_rightSelected"},on:{click:e.moveToRightEmpOption2}},[t("i",{staticClass:"v-icon notranslate mdi mdi-chevron-right theme--red",attrs:{"aria-hidden":"true"}})]),e._v(" "),t("button",{staticClass:"btn btn-default btn-block",attrs:{type:"button",id:"undo_redo_rightAll"},on:{click:e.allmoveToRightEmp}},[t("i",{staticClass:"v-icon notranslate mdi mdi-chevron-double-right theme--red",attrs:{"aria-hidden":"true"}})]),e._v(" "),t("button",{staticClass:"btn btn-default btn-block",attrs:{type:"button",id:"undo_redo_leftSelected"},on:{click:e.moveToLeftempOption2}},[t("i",{staticClass:"v-icon notranslate mdi mdi-chevron-left theme--red",attrs:{"aria-hidden":"true"}})]),e._v(" "),t("button",{staticClass:"btn btn-default btn-block",attrs:{type:"button",id:"undo_redo_leftAll"},on:{click:e.allmoveToLeftemp}},[t("i",{staticClass:"v-icon notranslate mdi mdi-chevron-double-left theme--red",attrs:{"aria-hidden":"true"}})])])]),e._v(" "),t(m.a,{attrs:{cols:"5"}},[t(c.a,{staticClass:"timezone-displaylist1",staticStyle:{height:"300px"}},[t(x.a,{staticStyle:{"border-bottom":"1px solid #ddd"},attrs:{color:" ",dense:"",flat:""}},[t("span",[e._v("Selected Tanents & Members List")])]),e._v(" "),t("div",{staticStyle:{"max-height":"245px","overflow-y":"auto","overflow-x":"hidden"}},[t(d.b,e._l(e.rightEmployees,(function(n,r){return t(y.a,{key:n.id,staticClass:"timezone-displaylistview1",staticStyle:{"border-bottom":"1px solid #ddd"},attrs:{id:n.id},model:{value:e.leftSelectedEmp,callback:function(t){e.leftSelectedEmp=t},expression:"leftSelectedEmp"}},[t(m.a,{staticStyle:{padding:"0px"},attrs:{md:"1"}},[n.profile_picture?t(h.a,{attrs:{dense:"",small:"",hideDetails:"",value:n.id,primary:"","hide-details":""},model:{value:e.rightSelectedEmp,callback:function(t){e.rightSelectedEmp=t},expression:"rightSelectedEmp"}}):t(h.a,{staticStyle:{padding:"0px"},attrs:{dense:"",small:"",hideDetails:"",value:n.id,primary:"","hide-details":""},model:{value:e.rightSelectedEmp,callback:function(t){e.rightSelectedEmp=t},expression:"rightSelectedEmp"}})],1),e._v(" "),t(m.a,{staticStyle:{padding:"0px"},attrs:{md:"1"}},[t(o.a,[t(v.a,{attrs:{src:n.profile_picture?n.profile_picture:"/no-profile-image.jpg"}})],1)],1),e._v(" "),t(m.a,{staticStyle:{padding:"0px","padding-top":"5px"},attrs:{md:"3"}},[e._v("\n                "+e._s(n.full_name)+"\n              ")])],1)})),1)],1)],1)],1)],1),e._v(" "),t(y.a,[t(m.a,{attrs:{cols:"5"}},[t(c.a,{staticClass:"timezone-displaylist1",staticStyle:{height:"305px"}},[t(x.a,{staticStyle:{"border-bottom":"1px solid #ddd"},attrs:{color:" ",dense:"",flat:""}},[t("span",[e._v(" Devices ")])]),e._v(" "),t("div",{staticStyle:{"max-height":"260px","overflow-y":"auto","overflow-x":"hidden"}},[t(d.b,e._l(e.leftDevices,(function(n,r){var o;return t(y.a,{key:n.id,staticClass:"timezone-displaylistview1",staticStyle:{"border-bottom":"1px solid #ddd"},attrs:{id:n.id},model:{value:e.leftSelectedDevices,callback:function(t){e.leftSelectedDevices=t},expression:"leftSelectedDevices"}},[t(m.a,{staticStyle:{padding:"0px"},attrs:{md:"1"}},["active"==n.status.name?t(h.a,{attrs:{dense:"",small:"",hideDetails:"",value:n.id,primary:"","hide-details":""},model:{value:e.leftSelectedDevices,callback:function(t){e.leftSelectedDevices=t},expression:"leftSelectedDevices"}}):t(h.a,{staticStyle:{padding:"0px"},attrs:(o={indeterminate:"",value:"",disabled:"",dense:"",small:"",hideDetails:""},Object(D.a)(o,"value",n.id),Object(D.a)(o,"primary",""),Object(D.a)(o,"hide-details",""),o),model:{value:e.leftSelectedDevices,callback:function(t){e.leftSelectedDevices=t},expression:"leftSelectedDevices"}})],1),e._v(" "),t(m.a,{staticStyle:{padding:"0px","padding-top":"5px"},attrs:{md:"3"}},[e._v("\n                "+e._s(n.name)+"\n              ")]),e._v(" "),t(m.a,{staticStyle:{padding:"0px","padding-top":"5px"},attrs:{md:"3"}},[e._v("\n                "+e._s(n.model_number)+"\n              ")]),e._v(" "),t(m.a,{staticStyle:{padding:"0px"},attrs:{md:"3"}},["active"==n.status.name?t("img",{staticStyle:{width:"30px"},attrs:{title:"Online",src:"/icons/device_status_open.png"}}):t("img",{staticStyle:{width:"30px"},attrs:{title:"Offline",src:"/icons/device_status_close.png"}})])],1)})),1)],1)],1)],1),e._v(" "),t(m.a,{attrs:{cols:"2"}},[t("div",{staticStyle:{"text-align":"-webkit-center"}},[t("button",{staticClass:"btn primary btn-block white--text",attrs:{type:"button",id:"undo_redo_undo"}},[e._v("\n          Options\n        ")]),e._v(" "),t("button",{staticClass:"btn btn-default btn-block",attrs:{type:"button",id:"undo_redo_rightSelected"},on:{click:e.moveToRightDevicesOption2}},[t("i",{staticClass:"v-icon notranslate mdi mdi-chevron-right theme--red",attrs:{"aria-hidden":"true"}})]),e._v(" "),t("button",{staticClass:"btn btn-default btn-block",attrs:{type:"button",id:"undo_redo_rightAll"},on:{click:e.allmoveRightDevices}},[t("i",{staticClass:"v-icon notranslate mdi mdi-chevron-double-right theme--red",attrs:{"aria-hidden":"true"}})]),e._v(" "),t("button",{staticClass:"btn btn-default btn-block",attrs:{type:"button",id:"undo_redo_leftSelected"},on:{click:e.moveToLeftDevicesOption2}},[t("i",{staticClass:"v-icon notranslate mdi mdi-chevron-left theme--red",attrs:{"aria-hidden":"true"}})]),e._v(" "),t("button",{staticClass:"btn btn-default btn-block",attrs:{type:"button",id:"undo_redo_leftAll"},on:{click:e.allmoveLeftDevices}},[t("i",{staticClass:"v-icon notranslate mdi mdi-chevron-double-left theme--red",attrs:{"aria-hidden":"true"}})])])]),e._v(" "),t(m.a,{attrs:{cols:"5"}},[t(c.a,{staticClass:"timezone-displaylist1",staticStyle:{height:"305px"}},[t(x.a,{staticStyle:{"border-bottom":"1px solid #ddd"},attrs:{color:" ",dense:"",flat:""}},[t("span",[e._v("Selected Devices List")])]),e._v(" "),t("div",{staticStyle:{"max-height":"260px","overflow-y":"auto","overflow-x":"hidden"}},[t(d.b,e._l(e.rightDevices,(function(n,r){return t(y.a,{key:n.id,staticClass:"timezone-displaylistview1",staticStyle:{"border-bottom":"1px solid #ddd"},attrs:{id:n.id},model:{value:e.rightSelectedDevices,callback:function(t){e.rightSelectedDevices=t},expression:"rightSelectedDevices"}},[t(m.a,{staticStyle:{padding:"0px"},attrs:{md:"1"}},["active"==n.status.name?t(h.a,{attrs:{dense:"",small:"",hideDetails:"",value:n.id,primary:"","hide-details":""},model:{value:e.rightSelectedDevices,callback:function(t){e.rightSelectedDevices=t},expression:"rightSelectedDevices"}}):t(h.a,{staticStyle:{padding:"0px"},attrs:{dense:"",small:"",hideDetails:"",value:n.id,primary:"","hide-details":""},model:{value:e.rightSelectedDevices,callback:function(t){e.rightSelectedDevices=t},expression:"rightSelectedDevices"}})],1),e._v(" "),t(m.a,{staticStyle:{padding:"0px","padding-top":"5px"},attrs:{md:"3"}},[e._v("\n                "+e._s(n.name)+"\n              ")]),e._v(" "),t(m.a,{staticStyle:{padding:"0px","padding-top":"5px"},attrs:{md:"3"}},[e._v("\n                "+e._s(n.model_number)+"\n              ")]),e._v(" "),t(m.a,{staticStyle:{padding:"0px"},attrs:{md:"3"}},["active"==n.status.name?t("img",{staticStyle:{width:"30px"},attrs:{title:"Online",src:"/icons/device_status_open.png"}}):t("img",{staticStyle:{width:"30px"},attrs:{title:"Offline",src:"/icons/device_status_close.png"}})]),e._v(" "),t(m.a,{staticStyle:{padding:"0px"},attrs:{md:"3"}},["Success"==n.sdkDeviceResponse?t("span",{staticStyle:{color:"green"}},[e._v(e._s(n.sdkDeviceResponse))]):t("span",{staticStyle:{color:"red"}},[e._v(e._s(n.sdkDeviceResponse))])])],1)})),1)],1)],1)],1),e._v(" "),t(m.a,{attrs:{cols:"12"}},[e.errors&&e.errors.message?t("span",{staticClass:"text-danger mt-2"},[e._v(e._s(e.errors.message))]):e._e()]),e._v(" "),t(m.a,{staticClass:"text-right",attrs:{cols:"12"}},[t(l.a,{staticClass:"primary",attrs:{loading:e.loading,type:"button"},on:{click:e.onSubmit}},[e._v("\n        Submit\n      ")])],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports},884:function(e,t,n){var content=n(885);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(22).default)("1377ef10",content,!0,{sourceMap:!1})},885:function(e,t,n){var r=n(21)((function(i){return i[1]}));r.push([e.i,".v-autocomplete.v-input>.v-input__control>.v-input__slot{cursor:text}.v-autocomplete input{align-self:center}.v-autocomplete.v-select.v-input--is-focused input{min-width:64px}.v-autocomplete:not(.v-input--is-focused).v-select--chips input{max-height:0;padding:0}.v-autocomplete--is-selecting-index input{opacity:0}.v-autocomplete.v-text-field--enclosed:not(.v-text-field--solo):not(.v-text-field--single-line):not(.v-text-field--outlined) .v-select__slot>input{margin-top:24px}.v-autocomplete.v-text-field--enclosed:not(.v-text-field--solo):not(.v-text-field--single-line):not(.v-text-field--outlined).v-input--dense .v-select__slot>input{margin-top:20px}.v-autocomplete__content.v-menu__content,.v-autocomplete__content.v-menu__content .v-card{border-radius:0}",""]),r.locals={},e.exports=r},894:function(e,t,n){"use strict";n(12),n(14),n(17),n(11),n(18);var r=n(3),o=(n(80),n(6),n(13),n(89),n(99),n(215),n(41),n(61),n(884),n(893)),l=n(214),c=n(65),d=n(1);function h(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function m(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var f=m(m({},o.b),{},{offsetY:!0,offsetOverflow:!0,transition:!1});t.a=o.a.extend({name:"v-autocomplete",props:{autoSelectFirst:{type:Boolean,default:!1},filter:{type:Function,default:function(e,t,n){return n.toLocaleLowerCase().indexOf(t.toLocaleLowerCase())>-1}},hideNoData:Boolean,menuProps:{type:o.a.options.props.menuProps.type,default:function(){return f}},noFilter:Boolean,searchInput:{type:String}},data:function(){return{lazySearch:this.searchInput}},computed:{classes:function(){return m(m({},o.a.options.computed.classes.call(this)),{},{"v-autocomplete":!0,"v-autocomplete--is-selecting-index":this.selectedIndex>-1})},computedItems:function(){return this.filteredItems},selectedValues:function(){var e=this;return this.selectedItems.map((function(t){return e.getValue(t)}))},hasDisplayedItems:function(){var e=this;return this.hideSelected?this.filteredItems.some((function(t){return!e.hasItem(t)})):this.filteredItems.length>0},currentRange:function(){return null==this.selectedItem?0:String(this.getText(this.selectedItem)).length},filteredItems:function(){var e=this;return!this.isSearching||this.noFilter||null==this.internalSearch?this.allItems:this.allItems.filter((function(t){var n=Object(d.s)(t,e.itemText),text=null!=n?String(n):"";return e.filter(t,String(e.internalSearch),text)}))},internalSearch:{get:function(){return this.lazySearch},set:function(e){this.lazySearch!==e&&(this.lazySearch=e,this.$emit("update:search-input",e))}},isAnyValueAllowed:function(){return!1},isDirty:function(){return this.searchIsDirty||this.selectedItems.length>0},isSearching:function(){return this.multiple&&this.searchIsDirty||this.searchIsDirty&&this.internalSearch!==this.getText(this.selectedItem)},menuCanShow:function(){return!!this.isFocused&&(this.hasDisplayedItems||!this.hideNoData)},$_menuProps:function(){var e=o.a.options.computed.$_menuProps.call(this);return e.contentClass="v-autocomplete__content ".concat(e.contentClass||"").trim(),m(m({},f),e)},searchIsDirty:function(){return null!=this.internalSearch&&""!==this.internalSearch},selectedItem:function(){var e=this;return this.multiple?null:this.selectedItems.find((function(i){return e.valueComparator(e.getValue(i),e.getValue(e.internalValue))}))},listData:function(){var data=o.a.options.computed.listData.call(this);return data.props=m(m({},data.props),{},{items:this.virtualizedItems,noFilter:this.noFilter||!this.isSearching||!this.filteredItems.length,searchInput:this.internalSearch}),data}},watch:{filteredItems:"onFilteredItemsChanged",internalValue:"setSearch",isFocused:function(e){e?(document.addEventListener("copy",this.onCopy),this.$refs.input&&this.$refs.input.select()):(document.removeEventListener("copy",this.onCopy),this.blur(),this.updateSelf())},isMenuActive:function(e){!e&&this.hasSlot&&(this.lazySearch=null)},items:function(e,t){t&&t.length||!this.hideNoData||!this.isFocused||this.isMenuActive||!e.length||this.activateMenu()},searchInput:function(e){this.lazySearch=e},internalSearch:"onInternalSearchChanged",itemText:"updateSelf"},created:function(){this.setSearch()},destroyed:function(){document.removeEventListener("copy",this.onCopy)},methods:{onFilteredItemsChanged:function(e,t){var n=this;if(e!==t){if(!this.autoSelectFirst){var r=t[this.$refs.menu.listIndex];r?this.setMenuIndex(e.findIndex((function(i){return i===r}))):this.setMenuIndex(-1),this.$emit("update:list-index",this.$refs.menu.listIndex)}this.$nextTick((function(){n.internalSearch&&(1===e.length||n.autoSelectFirst)&&(n.$refs.menu.getTiles(),n.autoSelectFirst&&e.length&&(n.setMenuIndex(0),n.$emit("update:list-index",n.$refs.menu.listIndex)))}))}},onInternalSearchChanged:function(){this.updateMenuDimensions()},updateMenuDimensions:function(){this.isMenuActive&&this.$refs.menu&&this.$refs.menu.updateDimensions()},changeSelectedIndex:function(e){this.searchIsDirty||(this.multiple&&e===d.z.left?-1===this.selectedIndex?this.selectedIndex=this.selectedItems.length-1:this.selectedIndex--:this.multiple&&e===d.z.right?this.selectedIndex>=this.selectedItems.length-1?this.selectedIndex=-1:this.selectedIndex++:e!==d.z.backspace&&e!==d.z.delete||this.deleteCurrentItem())},deleteCurrentItem:function(){var e=this.selectedIndex,t=this.selectedItems[e];if(this.isInteractive&&!this.getDisabled(t)){var n=this.selectedItems.length-1;if(-1!==this.selectedIndex||0===n){var r=e!==this.selectedItems.length-1?e:e-1;this.selectedItems[r]?this.selectItem(t):this.setValue(this.multiple?[]:null),this.selectedIndex=r}else this.selectedIndex=n}},clearableCallback:function(){this.internalSearch=null,o.a.options.methods.clearableCallback.call(this)},genInput:function(){var input=l.a.options.methods.genInput.call(this);return input.data=Object(c.a)(input.data,{attrs:{"aria-activedescendant":Object(d.q)(this.$refs.menu,"activeTile.id"),autocomplete:Object(d.q)(input.data,"attrs.autocomplete","off")},domProps:{value:this.internalSearch}}),input},genInputSlot:function(){var slot=o.a.options.methods.genInputSlot.call(this);return slot.data.attrs.role="combobox",slot},genSelections:function(){return this.hasSlot||this.multiple?o.a.options.methods.genSelections.call(this):[]},onClick:function(e){this.isInteractive&&(this.selectedIndex>-1?this.selectedIndex=-1:this.onFocus(),this.isAppendInner(e.target)||this.activateMenu())},onInput:function(e){if(!(this.selectedIndex>-1)&&e.target){var t=e.target,n=t.value;t.value&&this.activateMenu(),this.multiple||""!==n||this.deleteCurrentItem(),this.internalSearch=n,this.badInput=t.validity&&t.validity.badInput}},onKeyDown:function(e){var t=e.keyCode;!e.ctrlKey&&[d.z.home,d.z.end].includes(t)||o.a.options.methods.onKeyDown.call(this,e),this.changeSelectedIndex(t)},onSpaceDown:function(e){},onTabDown:function(e){o.a.options.methods.onTabDown.call(this,e),this.updateSelf()},onUpDown:function(e){e.preventDefault(),this.activateMenu()},selectItem:function(e){o.a.options.methods.selectItem.call(this,e),this.setSearch()},setSelectedItems:function(){o.a.options.methods.setSelectedItems.call(this),this.isFocused||this.setSearch()},setSearch:function(){var e=this;this.$nextTick((function(){e.multiple&&e.internalSearch&&e.isMenuActive||(e.internalSearch=!e.selectedItems.length||e.multiple||e.hasSlot?null:e.getText(e.selectedItem))}))},updateSelf:function(){(this.searchIsDirty||this.internalValue)&&(this.multiple||this.valueComparator(this.internalSearch,this.getValue(this.internalValue))||this.setSearch())},hasItem:function(e){return this.selectedValues.indexOf(this.getValue(e))>-1},onCopy:function(e){var t,n;if(-1!==this.selectedIndex){var r=this.selectedItems[this.selectedIndex],o=this.getText(r);null===(t=e.clipboardData)||void 0===t||t.setData("text/plain",o),null===(n=e.clipboardData)||void 0===n||n.setData("text/vnd.vuetify.autocomplete.item+plain",o),e.preventDefault()}}}})}}]);