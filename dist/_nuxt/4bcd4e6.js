(window.webpackJsonp=window.webpackJsonp||[]).push([[336,185,203],{1652:function(e,t,n){"use strict";n.r(t);var r=n(893),o=n(329),l=n(114),c=n(133),d=n(87),h=n(520),m=n(518),f=n(147),v=n(212),y=n(331),S=n(517),_=n(872),D=n(96),x=n(3),E=n(81),I=(n(35),n(37),n(23)),k=(n(88),n(55),n(6),n(11),n(354),n(13),n(216),n(99),n(215),n(80),{data:function(){var e;return e={floor_id:[],floors:[],room_id:[],rooms:[],isCompany:!0,loading:!1,counter:0,devices_dialog:[],displaybutton:!1,progressloading:!1,searchInput:"",snackbar:{message:"",color:"black",show:!1},errors:[],response:"",color:"primary"},Object(x.a)(e,"loading",!0),Object(x.a)(e,"endpointEmployee","get_employeeswith_timezonename"),Object(x.a)(e,"endpointUpdatetimezoneStore","employee_timezone_mapping"),Object(x.a)(e,"endpointDevise","device"),Object(x.a)(e,"leftSelectedEmp",[]),Object(x.a)(e,"departmentselected",[]),Object(x.a)(e,"departments",[]),Object(x.a)(e,"leftEmployees",[]),Object(x.a)(e,"rightSelectedEmp",[]),Object(x.a)(e,"rightEmployees",[]),Object(x.a)(e,"leftSelectedDevices",[]),Object(x.a)(e,"leftDevices",[]),Object(x.a)(e,"rightSelectedDevices",[]),Object(x.a)(e,"rightDevices",[]),Object(x.a)(e,"department_ids",["---"]),Object(x.a)(e,"timezones",["Timeszones are not available"]),Object(x.a)(e,"timezonesselected",[]),Object(x.a)(e,"options",{params:{company_id:this.$auth.user.company_id,cols:["id","name"]}}),e},mounted:function(){var e=this;this.$nextTick((function(){var e=this;setTimeout((function(){e.loading=!1}),2e3)})),setTimeout((function(){e.loading=!1}),2e3)},created:function(){var e=this;return Object(I.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.progressloading=!0,t.next=3,e.getFloors();case 3:case"end":return t.stop()}}),t)})))()},methods:{getFloors:function(){var e=this;return Object(I.a)(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$axios.get("floor",{params:{company_id:e.$auth.user.company_id}});case 2:n=t.sent,r=n.data,e.floors=r.data;case 5:case"end":return t.stop()}}),t)})))()},getRoomsByFloorId:function(e){var t=this;return Object(I.a)(regeneratorRuntime.mark((function n(){var r,data;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.$axios.get("room-by-floor-id",{params:{company_id:t.$auth.user.company_id,floor_id:e}});case 2:r=n.sent,data=r.data,t.rooms=data;case 5:case"end":return n.stop()}}),n)})))()},getTanentsAndMembersByRoom:function(e){var t=this;return Object(I.a)(regeneratorRuntime.mark((function n(){var r,data,o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.$axios.get("cards-by-room-id",{params:{company_id:t.$auth.user.company_id,room_id:e,floor_id:t.floor_id}});case 2:r=n.sent,data=r.data,o=[],data.forEach((function(e){o.push({id:e.id,full_name:e.full_name,system_user_id:parseInt(e.system_user_id),profile_picture:null,rfid:e.rfid})})),t.leftEmployees=o,t.getDevisesDataFromApi();case 8:case"end":return n.stop()}}),n)})))()},can:function(e){return this.$pagePermission.can(e,this)},resetErrorMessages:function(){this.errors=[],this.response="",this.leftEmployees.forEach((function(element){element.sdkEmpResponse=""})),this.leftDevices.forEach((function(element){element.sdkDeviceResponse=""}))},getDevisesDataFromApi:function(){var e=this;this.$axios.get(this.endpointDevise,{params:{per_page:1e3,company_id:this.$auth.user.company_id,sortBy:"status_id"}}).then((function(t){var data=t.data;e.leftDevices=data.data}))},sortObject:function(e){return e.sort((function(a,b){if(a.full_name&&b.full_name){var e=a.full_name.toUpperCase(),t=b.full_name.toUpperCase();return e<t?-1:e>t?1:0}}))},sortObjectD:function(e){return e.sort((function(a,b){if(a.device_id&&b.device_id){var e=a.device_id.toUpperCase(),t=b.device_id.toUpperCase();return e<t?-1:e>t?1:0}return 0}))},sortObjectC:function(e){return e.sort((function(a,b){if(a.name&&b.name){var e=a.name.toUpperCase(),t=b.name.toUpperCase();return e<t?-1:e>t?1:0}}))},verifySubmitButton:function(){this.rightEmployees.length>0&&this.rightDevices.length>0?this.displaybutton=!0:this.displaybutton=!1},allmoveToLeftemp:function(){this.resetErrorMessages(),this.leftEmployees=this.leftEmployees.concat(this.rightEmployees),this.rightEmployees=[],this.leftEmployees=this.sortObject(this.leftEmployees),this.verifySubmitButton()},allmoveToRightEmp:function(){this.resetErrorMessages(),this.rightEmployees=this.rightEmployees.concat(this.leftEmployees.filter((function(e){return null!=e.profile_picture}))),this.leftEmployees=this.leftEmployees.filter((function(e){return null==e.profile_picture})),this.rightEmployees=this.sortObject(this.rightEmployees),this.verifySubmitButton()},moveToLeftempOption2:function(){var e=this;if(this.resetErrorMessages(),this.rightSelectedEmp.length){for(var t=this.rightSelectedEmp.length,n=function(i){if(e.rightSelectedEmp){var t=e.rightEmployees.findIndex((function(t){return t.id==e.rightSelectedEmp[i]})),n=e.rightEmployees.find((function(t){return t.id==e.rightSelectedEmp[i]}));n.sdkEmpResponse="",e.leftEmployees.push(n),e.rightEmployees.splice(t,1)}},i=0;i<t;i++)n(i);this.leftEmployees=this.sortObject(this.leftEmployees);for(var r=0;r<t;r++)this.rightSelectedEmp.pop(this.rightSelectedEmp[r]);this.verifySubmitButton()}},moveToLeftemp:function(e){var t=this;if(this.resetErrorMessages(),this.rightSelectedEmp.push(e),this.rightSelectedEmp.length){for(var n=this.rightSelectedEmp.length,r=function(i){if(t.rightSelectedEmp){var e=t.rightEmployees.findIndex((function(e){return e.id==t.rightSelectedEmp[i]})),n=t.rightEmployees.find((function(e){return e.id==t.rightSelectedEmp[i]}));n.sdkEmpResponse="",t.leftEmployees.push(n),t.rightEmployees.splice(e,1)}},i=0;i<n;i++)r(i);this.leftEmployees=this.sortObject(this.leftEmployees),this.rightSelectedEmp.pop(e),this.verifySubmitButton()}},selectLeftEmployee:function(e){this.leftSelectedEmp.push(e)},moveToRightEmpOption2:function(){var e=this;if(this.resetErrorMessages(),this.leftSelectedEmp.length){for(var t=this.leftSelectedEmp.length,n=function(i){if(e.leftSelectedEmp){var t=e.leftEmployees.findIndex((function(t){return t.id==e.leftSelectedEmp[i]})),n=e.leftEmployees.find((function(t){return t.id==e.leftSelectedEmp[i]}));e.rightEmployees.push(n),e.leftEmployees.splice(t,1)}},i=0;i<t;i++)n(i);this.rightEmployees=this.sortObject(this.rightEmployees);for(var r=0;r<t;r++)this.leftSelectedEmp.pop(this.leftSelectedEmp[r]);this.verifySubmitButton()}},allmoveToLeftDevices:function(){this.resetErrorMessages(),this.leftDevices=this.leftDevices.concat(this.rightDevices),this.rightDevices=[],this.leftDevices=this.sortObjectD(this.leftDevices),this.verifySubmitButton()},allmoveToRightDevices:function(){this.resetErrorMessages(),this.rightDevices=this.rightDevices.concat(this.leftDevices.filter((function(e){return"active"==e.status.name}))),this.leftDevices=this.leftDevices.filter((function(e){return"inactive"==e.status.name})),this.rightDevices=this.sortObjectD(this.rightDevices),this.verifySubmitButton()},moveToLeftDevicesOption2:function(){var e=this;if(this.resetErrorMessages(),this.rightSelectedDevices.length){for(var t=this.rightSelectedDevices.length,n=function(i){if(e.rightSelectedDevices){var t=e.rightDevices.findIndex((function(t){return t.id==e.rightSelectedDevices[i]})),n=e.rightDevices.find((function(t){return t.id==e.rightSelectedDevices[i]}));n.sdkEmpResponse="",e.leftDevices.push(n),e.rightDevices.splice(t,1)}},i=0;i<t;i++)n(i);this.leftDevices=this.sortObjectD(this.leftDevices);for(var r=0;r<t;r++)this.rightSelectedDevices.pop(this.rightSelectedDevices[r]);this.verifySubmitButton()}},moveToLeftDevices:function(e){var t=this;if(this.resetErrorMessages(),this.rightSelectedDevices.push(e),this.rightSelectedDevices.length){for(var n=this.rightSelectedDevices.length,r=function(i){if(t.rightSelectedDevices){var e=t.rightDevices.findIndex((function(e){return e.id==t.rightSelectedDevices[i]})),n=t.rightDevices.find((function(e){return e.id==t.rightSelectedDevices[i]}));t.leftDevices.push(n),t.rightDevices.splice(e,1)}},i=0;i<n;i++)r(i);this.leftDevices=this.sortObjectD(this.leftDevices),this.rightSelectedDevices.pop(e),this.verifySubmitButton()}},moveToRightDevicesOption2:function(){var e=this;if(this.resetErrorMessages(),this.leftSelectedDevices.length){for(var t=this.leftSelectedDevices.length,n=function(i){if(e.leftSelectedDevices){var t=e.leftDevices.findIndex((function(t){return t.id==e.leftSelectedDevices[i]})),n=e.leftDevices.find((function(t){return t.id==e.leftSelectedDevices[i]}));n.sdkDeviceResponse="",e.rightDevices.push(n),e.leftDevices.splice(t,1)}},i=0;i<t;i++)n(i);this.rightDevices=this.sortObjectD(this.rightDevices);for(var r=0;r<t;r++)this.leftSelectedDevices.pop(this.leftSelectedDevices[r]);this.verifySubmitButton()}},moveToRightDevices:function(e){var t=this;if(this.resetErrorMessages(),this.leftSelectedDevices.push(e),this.leftSelectedDevices.length){for(var n=this.leftSelectedDevices.length,r=function(i){if(t.leftSelectedDevices){var e=t.leftDevices.findIndex((function(e){return e.id==t.leftSelectedDevices[i]})),n=t.leftDevices.find((function(e){return e.id==t.leftSelectedDevices[i]}));n.sdkDeviceResponse="",t.rightDevices.push(n),t.leftDevices.splice(e,1)}},i=0;i<n;i++)r(i);this.rightDevices=this.sortObjectD(this.rightDevices),this.leftSelectedDevices.pop(e),this.verifySubmitButton()}},submit:function(){var e=this;return Object(I.a)(regeneratorRuntime.mark((function t(){var n,r,o,data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.loading=!0,0==e.rightEmployees.length?e.response=e.response+" Atleast select one Employee Details":0==e.rightDevices.length&&(e.response=e.response+" Atleast select one Device Details"),e.loading_dialog=!0,e.errors=[],n=[],e.rightEmployees.forEach((function(e){console.log("item",e);var t={name:e.full_name,userCode:parseInt(e.system_user_id),faceImage:e.profile_picture,cardData:e.rfid};n.push(t)})),!(r={personList:n,snList:e.rightDevices.map((function(e){return e.device_id}))}).snList||0!==r.snList.length){t.next=10;break}return alert("Atleast one device must be selected"),t.abrupt("return",!1);case 10:return e.devices_dialog.forEach((function(e){e.state="---",e.message="---"})),"/Person/AddRange/Photos",t.next=14,e.$axios.post("/Person/AddRange/Photos",r);case 14:o=t.sent,200==(data=o.data).status?(e.loading_dialog=!1,e.snackbar.show=!0,e.response="Employee(s) Pictures has been uploaded",e.rightEmployees.forEach((function(element){element.sdkEmpResponse="Success"})),e.rightDevices.forEach((function(t){t.sdkDeviceResponse="Success",e.errors=[],e.loading=!1}))):(e.loading_dialog=!1,e.snackbar.show=!0,e.response=data.message,e.loading=!1),e.displaybutton=!0;case 18:case"end":return t.stop()}}),t)})))()}}}),O=n(116),component=Object(O.a)(k,(function(){var e=this,t=e._self._c;return e.can("tanent_access")?t("div",{staticStyle:{width:"100% !important"}},[t("div",{staticClass:"text-center ma-2"},[t(_.a,{attrs:{color:"primary",small:"",top:"top",timeout:3e3},model:{value:e.snackbar.show,callback:function(t){e.$set(e.snackbar,"show",t)},expression:"snackbar.show"}},[e._v("\n      Users has been uploaded.\n    ")])],1),e._v(" "),t(S.a,[t(m.a,{attrs:{cols:"4"}},[t(r.a,{attrs:{label:"Floor Number",outlined:"",items:e.floors,dense:"","item-text":"floor_number","item-value":"id","hide-details":!0},on:{change:function(t){return e.getRoomsByFloorId(e.floor_id)}},model:{value:e.floor_id,callback:function(t){e.floor_id=t},expression:"floor_id"}})],1),e._v(" "),t(m.a,{attrs:{cols:"4"}},[t(r.a,{attrs:{label:"Room",outlined:"",items:[{id:"",room_number:"Select All"}].concat(Object(E.a)(e.rooms)),dense:"","item-text":"room_number","item-value":"id","hide-details":!0},on:{change:function(t){return e.getTanentsAndMembersByRoom(e.room_id)}},model:{value:e.room_id,callback:function(t){e.room_id=t},expression:"room_id"}})],1),e._v(" "),t(m.a,{staticClass:"text-right",attrs:{cols:"4"}},[t("SnippetsBack")],1),e._v(" "),t(m.a,{attrs:{cols:"5"}},[t(c.a,{staticClass:"photo-displaylist",staticStyle:{height:"300px"}},[t(D.a,{staticStyle:{border:"1px solid #ddd"},attrs:{dense:"",flat:""}},[t("span",[e._v(" Cards ")])]),e._v(" "),e.progressloading?t(y.a,{attrs:{active:e.loading,indeterminate:e.loading,absolute:"",color:"primary"}}):e._e(),e._v(" "),t("div",{staticStyle:{"max-height":"250px","overflow-y":"auto","overflow-x":"hidden"}},[t(d.c,e._l(e.leftEmployees,(function(n){return t(S.a,{key:n.id,staticStyle:{"border-bottom":"1px solid #ddd"},attrs:{"no-gutters":"",id:n.id},model:{value:e.leftEmployees,callback:function(t){e.leftEmployees=t},expression:"leftEmployees"}},[t(m.a,{staticClass:"pa-0 ma-0",attrs:{cols:"1"}},[t(h.a,{attrs:{dense:"",small:"",primary:"","hide-details":"",value:n.id},model:{value:e.leftSelectedEmp,callback:function(t){e.leftSelectedEmp=t},expression:"leftSelectedEmp"}})],1),e._v(" "),t(m.a,{staticClass:"py-1 ma-0",attrs:{cols:"1"}},[t(o.a,{attrs:{size:"40"}},[t(v.a,{attrs:{src:n.profile_picture?n.profile_picture:"/no-profile-image.jpg"}})],1)],1),e._v(" "),t(m.a,{staticClass:"pt-2",attrs:{col:"4"}},[e._v("\n                "+e._s(n.full_name)+"\n              ")]),e._v(" "),t(m.a,{staticClass:"pt-2",attrs:{col:"3"}},[e._v("\n                "+e._s(n.system_user_id)+"\n              ")])],1)})),1)],1)],1)],1),e._v(" "),t(m.a,{attrs:{cols:"2"}},[t(S.a,{attrs:{"no-gutters":""}},[t(m.a,{attrs:{cols:"12"}},[t(l.a,{staticClass:"primary",attrs:{block:""}},[e._v(" Options ")])],1),e._v(" "),t(m.a,{attrs:{cols:"12"}},[t(l.a,{staticClass:"popup_background my-1",attrs:{block:""},on:{click:e.moveToRightEmpOption2}},[t(f.a,[e._v(" mdi-chevron-right ")])],1)],1),e._v(" "),t(m.a,{attrs:{cols:"12"}},[t(l.a,{staticClass:"popup_background my-1",attrs:{block:""},on:{click:e.allmoveToRightEmp}},[t(f.a,[e._v(" mdi-chevron-double-right ")])],1)],1),e._v(" "),t(m.a,{attrs:{cols:"12"}},[t(l.a,{staticClass:"popup_background my-1",attrs:{block:""},on:{click:e.moveToLeftempOption2}},[t(f.a,[e._v(" mdi-chevron-left ")])],1)],1),e._v(" "),t(m.a,{attrs:{cols:"12"}},[t(l.a,{staticClass:"popup_background my-1",attrs:{block:""},on:{click:e.allmoveToLeftemp}},[t(f.a,[e._v(" mdi-chevron-double-left ")])],1)],1)],1)],1),e._v(" "),t(m.a,{attrs:{cols:"5"}},[t(c.a,{staticClass:"photo-displaylist",staticStyle:{height:"300px"}},[t(D.a,{staticStyle:{border:"1px solid #ddd"},attrs:{color:" ",dense:"",flat:""}},[t("span",[e._v("Selected Tanents ")])]),e._v(" "),t("div",{staticStyle:{"max-height":"250px","overflow-y":"auto","overflow-x":"hidden"}},[t(d.c,e._l(e.rightEmployees,(function(n,r){return t(S.a,{key:n.id,staticClass:"timezone-displaylistview1",staticStyle:{"border-bottom":"1px solid #ddd"},attrs:{id:n.id},model:{value:e.rightSelectedEmp,callback:function(t){e.rightSelectedEmp=t},expression:"rightSelectedEmp"}},[t(m.a,{staticStyle:{padding:"0px"},attrs:{md:"1"}},[n.profile_picture?t(h.a,{attrs:{dense:"",small:"",hideDetails:"",value:n.id,primary:"","hide-details":""},model:{value:e.rightSelectedEmp,callback:function(t){e.rightSelectedEmp=t},expression:"rightSelectedEmp"}}):t(h.a,{staticStyle:{padding:"0px"},attrs:{dense:"",small:"",hideDetails:"",value:n.id,primary:"","hide-details":""},model:{value:e.rightSelectedEmp,callback:function(t){e.rightSelectedEmp=t},expression:"rightSelectedEmp"}})],1),e._v(" "),t(m.a,{staticStyle:{padding:"0px"},attrs:{md:"1"}},[t(o.a,[t(v.a,{attrs:{src:n.profile_picture?n.profile_picture:"/no-profile-image.jpg"}})],1)],1),e._v(" "),t(m.a,{staticStyle:{padding:"0px","padding-top":"5px"},attrs:{md:"3"}},[e._v("\n                "+e._s(n.full_name)+"\n              ")]),e._v(" "),t(m.a,{staticStyle:{padding:"0px","padding-top":"5px"},attrs:{md:"3"}},[e._v("\n                "+e._s(n.employee_id)+"\n              ")])],1)})),1)],1)],1)],1)],1),e._v(" "),t(S.a,[t(m.a,{attrs:{cols:"5"}},[t(c.a,{staticClass:"photo-displaylist",staticStyle:{height:"300px"}},[t(D.a,{staticStyle:{border:"1px solid #ddd"},attrs:{color:" ",dense:"",flat:""}},[t("span",[e._v(" Devices")])]),e._v(" "),t("div",{staticStyle:{"max-height":"250px","overflow-y":"auto","overflow-x":"hidden"}},[t(d.c,e._l(e.leftDevices,(function(n,r){var o;return t(S.a,{key:n.id,staticClass:"timezone-displaylistview1",staticStyle:{"border-bottom":"1px solid #ddd"},attrs:{id:n.id},model:{value:e.leftSelectedDevices,callback:function(t){e.leftSelectedDevices=t},expression:"leftSelectedDevices"}},[t(m.a,{staticStyle:{padding:"0px"},attrs:{md:"1"}},["active"==n.status.name?t(h.a,{attrs:{dense:"",small:"",hideDetails:"",value:n.id,primary:"","hide-details":""},model:{value:e.leftSelectedDevices,callback:function(t){e.leftSelectedDevices=t},expression:"leftSelectedDevices"}}):t(h.a,{staticStyle:{padding:"0px"},attrs:(o={indeterminate:"",value:"",disabled:"",dense:"",small:"",hideDetails:""},Object(x.a)(o,"value",n.id),Object(x.a)(o,"primary",""),Object(x.a)(o,"hide-details",""),o),model:{value:e.leftSelectedDevices,callback:function(t){e.leftSelectedDevices=t},expression:"leftSelectedDevices"}})],1),e._v(" "),t(m.a,{staticStyle:{padding:"0px","padding-top":"5px"},attrs:{md:"3"}},[e._v("\n                "+e._s(n.name)+"\n              ")]),e._v(" "),t(m.a,{staticStyle:{padding:"0px","padding-top":"5px"},attrs:{md:"3"}},[e._v("\n                "+e._s(n.model_number)+"\n              ")]),e._v(" "),t(m.a,{staticStyle:{padding:"0px"},attrs:{md:"3"}},["active"==n.status.name?t("img",{staticStyle:{width:"30px"},attrs:{title:"Online",src:"/icons/device_status_open.png"}}):t("img",{staticStyle:{width:"30px"},attrs:{title:"Offline",src:"/icons/device_status_close.png"}})])],1)})),1)],1)],1)],1),e._v(" "),t(m.a,{attrs:{cols:"2"}},[t(S.a,{attrs:{"no-gutters":""}},[t(m.a,{attrs:{cols:"12"}},[t(l.a,{staticClass:"primary",attrs:{block:""}},[e._v(" Options ")])],1),e._v(" "),t(m.a,{attrs:{cols:"12"}},[t(l.a,{staticClass:"popup_background my-1",attrs:{block:""},on:{click:e.moveToRightDevicesOption2}},[t(f.a,[e._v(" mdi-chevron-right ")])],1)],1),e._v(" "),t(m.a,{attrs:{cols:"12"}},[t(l.a,{staticClass:"popup_background my-1",attrs:{block:""},on:{click:e.allmoveToRightDevices}},[t(f.a,[e._v(" mdi-chevron-double-right ")])],1)],1),e._v(" "),t(m.a,{attrs:{cols:"12"}},[t(l.a,{staticClass:"popup_background my-1",attrs:{block:""},on:{click:e.moveToLeftDevicesOption2}},[t(f.a,[e._v(" mdi-chevron-left ")])],1)],1),e._v(" "),t(m.a,{attrs:{cols:"12"}},[t(l.a,{staticClass:"popup_background my-1",attrs:{block:""},on:{click:e.allmoveToLeftDevices}},[t(f.a,[e._v(" mdi-chevron-double-left ")])],1)],1)],1)],1),e._v(" "),t(m.a,{attrs:{cols:"5"}},[t(c.a,{staticClass:"photo-displaylist",staticStyle:{height:"300px"}},[t(D.a,{staticStyle:{border:"1px solid #ddd"},attrs:{color:" ",dense:"",flat:""}},[t("span",[e._v("Selected Devices")])]),e._v(" "),t("div",{staticStyle:{"max-height":"250px","overflow-y":"auto","overflow-x":"hidden"}},[t(d.c,e._l(e.rightDevices,(function(n,r){var o;return t(S.a,{key:n.id,staticClass:"timezone-displaylistview1",staticStyle:{"border-bottom":"1px solid #ddd"},attrs:{id:n.id},model:{value:e.rightSelectedDevices,callback:function(t){e.rightSelectedDevices=t},expression:"rightSelectedDevices"}},[t(m.a,{staticStyle:{padding:"0px"},attrs:{md:"1"}},["active"==n.status.name?t(h.a,{attrs:{dense:"",small:"",hideDetails:"",value:n.id,primary:"","hide-details":""},model:{value:e.rightSelectedDevices,callback:function(t){e.rightSelectedDevices=t},expression:"rightSelectedDevices"}}):t(h.a,{staticStyle:{padding:"0px"},attrs:(o={indeterminate:"",value:"",disabled:"",dense:"",small:"",hideDetails:""},Object(x.a)(o,"value",n.id),Object(x.a)(o,"primary",""),Object(x.a)(o,"hide-details",""),o),model:{value:e.leftSelectedDevices,callback:function(t){e.leftSelectedDevices=t},expression:"leftSelectedDevices"}})],1),e._v(" "),t(m.a,{staticStyle:{padding:"0px","padding-top":"5px"},attrs:{md:"3"}},[e._v("\n                "+e._s(n.name)+"\n              ")]),e._v(" "),t(m.a,{staticStyle:{padding:"0px","padding-top":"5px"},attrs:{md:"3"}},[e._v("\n                "+e._s(n.model_number)+"\n              ")]),e._v(" "),t(m.a,{staticStyle:{padding:"0px"},attrs:{md:"3"}},["Success"==n.sdkDeviceResponse?t("span",{staticStyle:{color:"green"}},[e._v(e._s(n.sdkDeviceResponse))]):t("span",{staticStyle:{color:"red"}},[e._v(e._s(n.sdkDeviceResponse))])])],1)})),1)],1)],1)],1)],1),e._v(" "),t(S.a,[t(m.a,{staticClass:"text-right",attrs:{cols:"12"}},[t("div",[e.errors&&e.errors.message?t("span",{staticClass:"text-danger mt-2"},[e._v(e._s(e.errors.message))]):e._e()]),e._v(" "),t(l.a,{staticClass:"primary",attrs:{disabled:!e.displaybutton,loading:e.loading,id:"save"},on:{click:e.submit}},[e._v("\n        Submit\n      ")])],1)],1)],1):t("NoAccess")}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{SnippetsBack:n(971).default,NoAccess:n(880).default})},880:function(e,t,n){"use strict";n.r(t);var r=n(116),component=Object(r.a)({},(function(){this._self._c;return this._m(0)}),[function(){var e=this._self._c;return e("div",{staticClass:"text-center",staticStyle:{"margin-top":"25%"}},[e("b",[this._v("No Access")])])}],!1,null,null,null);t.default=component.exports},883:function(e,t,n){var content=n(884);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(22).default)("1377ef10",content,!0,{sourceMap:!1})},884:function(e,t,n){var r=n(21)((function(i){return i[1]}));r.push([e.i,".v-autocomplete.v-input>.v-input__control>.v-input__slot{cursor:text}.v-autocomplete input{align-self:center}.v-autocomplete.v-select.v-input--is-focused input{min-width:64px}.v-autocomplete:not(.v-input--is-focused).v-select--chips input{max-height:0;padding:0}.v-autocomplete--is-selecting-index input{opacity:0}.v-autocomplete.v-text-field--enclosed:not(.v-text-field--solo):not(.v-text-field--single-line):not(.v-text-field--outlined) .v-select__slot>input{margin-top:24px}.v-autocomplete.v-text-field--enclosed:not(.v-text-field--solo):not(.v-text-field--single-line):not(.v-text-field--outlined).v-input--dense .v-select__slot>input{margin-top:20px}.v-autocomplete__content.v-menu__content,.v-autocomplete__content.v-menu__content .v-card{border-radius:0}",""]),r.locals={},e.exports=r},893:function(e,t,n){"use strict";n(12),n(14),n(17),n(11),n(18);var r=n(3),o=(n(80),n(6),n(13),n(89),n(99),n(216),n(41),n(61),n(883),n(892)),l=n(214),c=n(65),d=n(1);function h(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function m(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var f=m(m({},o.b),{},{offsetY:!0,offsetOverflow:!0,transition:!1});t.a=o.a.extend({name:"v-autocomplete",props:{autoSelectFirst:{type:Boolean,default:!1},filter:{type:Function,default:function(e,t,n){return n.toLocaleLowerCase().indexOf(t.toLocaleLowerCase())>-1}},hideNoData:Boolean,menuProps:{type:o.a.options.props.menuProps.type,default:function(){return f}},noFilter:Boolean,searchInput:{type:String}},data:function(){return{lazySearch:this.searchInput}},computed:{classes:function(){return m(m({},o.a.options.computed.classes.call(this)),{},{"v-autocomplete":!0,"v-autocomplete--is-selecting-index":this.selectedIndex>-1})},computedItems:function(){return this.filteredItems},selectedValues:function(){var e=this;return this.selectedItems.map((function(t){return e.getValue(t)}))},hasDisplayedItems:function(){var e=this;return this.hideSelected?this.filteredItems.some((function(t){return!e.hasItem(t)})):this.filteredItems.length>0},currentRange:function(){return null==this.selectedItem?0:String(this.getText(this.selectedItem)).length},filteredItems:function(){var e=this;return!this.isSearching||this.noFilter||null==this.internalSearch?this.allItems:this.allItems.filter((function(t){var n=Object(d.s)(t,e.itemText),text=null!=n?String(n):"";return e.filter(t,String(e.internalSearch),text)}))},internalSearch:{get:function(){return this.lazySearch},set:function(e){this.lazySearch!==e&&(this.lazySearch=e,this.$emit("update:search-input",e))}},isAnyValueAllowed:function(){return!1},isDirty:function(){return this.searchIsDirty||this.selectedItems.length>0},isSearching:function(){return this.multiple&&this.searchIsDirty||this.searchIsDirty&&this.internalSearch!==this.getText(this.selectedItem)},menuCanShow:function(){return!!this.isFocused&&(this.hasDisplayedItems||!this.hideNoData)},$_menuProps:function(){var e=o.a.options.computed.$_menuProps.call(this);return e.contentClass="v-autocomplete__content ".concat(e.contentClass||"").trim(),m(m({},f),e)},searchIsDirty:function(){return null!=this.internalSearch&&""!==this.internalSearch},selectedItem:function(){var e=this;return this.multiple?null:this.selectedItems.find((function(i){return e.valueComparator(e.getValue(i),e.getValue(e.internalValue))}))},listData:function(){var data=o.a.options.computed.listData.call(this);return data.props=m(m({},data.props),{},{items:this.virtualizedItems,noFilter:this.noFilter||!this.isSearching||!this.filteredItems.length,searchInput:this.internalSearch}),data}},watch:{filteredItems:"onFilteredItemsChanged",internalValue:"setSearch",isFocused:function(e){e?(document.addEventListener("copy",this.onCopy),this.$refs.input&&this.$refs.input.select()):(document.removeEventListener("copy",this.onCopy),this.blur(),this.updateSelf())},isMenuActive:function(e){!e&&this.hasSlot&&(this.lazySearch=null)},items:function(e,t){t&&t.length||!this.hideNoData||!this.isFocused||this.isMenuActive||!e.length||this.activateMenu()},searchInput:function(e){this.lazySearch=e},internalSearch:"onInternalSearchChanged",itemText:"updateSelf"},created:function(){this.setSearch()},destroyed:function(){document.removeEventListener("copy",this.onCopy)},methods:{onFilteredItemsChanged:function(e,t){var n=this;if(e!==t){if(!this.autoSelectFirst){var r=t[this.$refs.menu.listIndex];r?this.setMenuIndex(e.findIndex((function(i){return i===r}))):this.setMenuIndex(-1),this.$emit("update:list-index",this.$refs.menu.listIndex)}this.$nextTick((function(){n.internalSearch&&(1===e.length||n.autoSelectFirst)&&(n.$refs.menu.getTiles(),n.autoSelectFirst&&e.length&&(n.setMenuIndex(0),n.$emit("update:list-index",n.$refs.menu.listIndex)))}))}},onInternalSearchChanged:function(){this.updateMenuDimensions()},updateMenuDimensions:function(){this.isMenuActive&&this.$refs.menu&&this.$refs.menu.updateDimensions()},changeSelectedIndex:function(e){this.searchIsDirty||(this.multiple&&e===d.z.left?-1===this.selectedIndex?this.selectedIndex=this.selectedItems.length-1:this.selectedIndex--:this.multiple&&e===d.z.right?this.selectedIndex>=this.selectedItems.length-1?this.selectedIndex=-1:this.selectedIndex++:e!==d.z.backspace&&e!==d.z.delete||this.deleteCurrentItem())},deleteCurrentItem:function(){var e=this.selectedIndex,t=this.selectedItems[e];if(this.isInteractive&&!this.getDisabled(t)){var n=this.selectedItems.length-1;if(-1!==this.selectedIndex||0===n){var r=e!==this.selectedItems.length-1?e:e-1;this.selectedItems[r]?this.selectItem(t):this.setValue(this.multiple?[]:null),this.selectedIndex=r}else this.selectedIndex=n}},clearableCallback:function(){this.internalSearch=null,o.a.options.methods.clearableCallback.call(this)},genInput:function(){var input=l.a.options.methods.genInput.call(this);return input.data=Object(c.a)(input.data,{attrs:{"aria-activedescendant":Object(d.q)(this.$refs.menu,"activeTile.id"),autocomplete:Object(d.q)(input.data,"attrs.autocomplete","off")},domProps:{value:this.internalSearch}}),input},genInputSlot:function(){var slot=o.a.options.methods.genInputSlot.call(this);return slot.data.attrs.role="combobox",slot},genSelections:function(){return this.hasSlot||this.multiple?o.a.options.methods.genSelections.call(this):[]},onClick:function(e){this.isInteractive&&(this.selectedIndex>-1?this.selectedIndex=-1:this.onFocus(),this.isAppendInner(e.target)||this.activateMenu())},onInput:function(e){if(!(this.selectedIndex>-1)&&e.target){var t=e.target,n=t.value;t.value&&this.activateMenu(),this.multiple||""!==n||this.deleteCurrentItem(),this.internalSearch=n,this.badInput=t.validity&&t.validity.badInput}},onKeyDown:function(e){var t=e.keyCode;!e.ctrlKey&&[d.z.home,d.z.end].includes(t)||o.a.options.methods.onKeyDown.call(this,e),this.changeSelectedIndex(t)},onSpaceDown:function(e){},onTabDown:function(e){o.a.options.methods.onTabDown.call(this,e),this.updateSelf()},onUpDown:function(e){e.preventDefault(),this.activateMenu()},selectItem:function(e){o.a.options.methods.selectItem.call(this,e),this.setSearch()},setSelectedItems:function(){o.a.options.methods.setSelectedItems.call(this),this.isFocused||this.setSearch()},setSearch:function(){var e=this;this.$nextTick((function(){e.multiple&&e.internalSearch&&e.isMenuActive||(e.internalSearch=!e.selectedItems.length||e.multiple||e.hasSlot?null:e.getText(e.selectedItem))}))},updateSelf:function(){(this.searchIsDirty||this.internalValue)&&(this.multiple||this.valueComparator(this.internalSearch,this.getValue(this.internalValue))||this.setSearch())},hasItem:function(e){return this.selectedValues.indexOf(this.getValue(e))>-1},onCopy:function(e){var t,n;if(-1!==this.selectedIndex){var r=this.selectedItems[this.selectedIndex],o=this.getText(r);null===(t=e.clipboardData)||void 0===t||t.setData("text/plain",o),null===(n=e.clipboardData)||void 0===n||n.setData("text/vnd.vuetify.autocomplete.item+plain",o),e.preventDefault()}}}})},971:function(e,t,n){"use strict";n.r(t);var r={props:["color"],methods:{goBack:function(){window.history.back()}}},o=n(116),component=Object(o.a)(r,(function(){return(0,this._self._c)("div")}),[],!1,null,null,null);t.default=component.exports}}]);