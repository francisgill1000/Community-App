(window.webpackJsonp=window.webpackJsonp||[]).push([[250,38,248],{1032:function(e,r,t){var content=t(1091);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,t(22).default)("39ebcaec",content,!0,{sourceMap:!1})},1090:function(e,r,t){"use strict";t(1032)},1091:function(e,r,t){var o=t(21)((function(i){return i[1]}));o.push([e.i,"table[data-v-c090f7a8]{border-collapse:collapse;font-family:arial,sans-serif;width:100%}td[data-v-c090f7a8],th[data-v-c090f7a8]{border:1px solid #ddd;padding:8px;text-align:left}",""]),o.locals={},e.exports=o},1113:function(e,r,t){"use strict";t.r(r);var o=t(114),n=t(133),l=t(87),c=t(516),d=t(876),m=t(350),_=t(147),f=t(515),v=t(349),h=t(214),y=t(96),x=t(23),k=(t(519),t(6),t(72),t(11),t(216),t(88),{props:["item"],components:{},data:function(){return{dialog:!1,disabled:!1,payload:{full_name:""},color:"background",response:"",snackbar:!1,loading:!1,data:[],errors:[],singleMessage:null}},created:function(){var e=this;return Object(x.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:e.payload=e.item;case 1:case"end":return r.stop()}}),r)})))()},methods:{generateRandomId:function(){return Math.floor(Math.random()*Math.pow(10,8)).toString().padStart(8,"0")},handleSuccessResponse:function(e){this.$emit("success",e)},close:function(){this.$emit("close")},can:function(e){return this.$pagePermission.can(e,this)},update_card:function(e){var r=this;this.loading=!0,this.$axios.post("/update-card/"+e.id,e).then((function(e){e.data;r.singleMessage=null,r.errors=[],r.$emit("success","Member has been updated"),r.loading=!1})).catch((function(e){var t=e.response;r.handleErrorResponse(t)}))},delete_card:function(e,r){var t=this;this.loading=!0,confirm("Are you sure you wish to delete , to mitigate any inconvenience in future.")&&this.$axios.delete("delete-member/".concat(r.id)).then((function(o){o.data;t.render(e,r)})).catch((function(e){return console.log(e)}))},render:function(e,r){var t=this;this.loading=!0,this.dialog=!0,this.data=[],this.$axios.get("/device_list",{params:{company_id:this.$auth.user.company_id}}).then((function(o){o.data.forEach(function(){var o=Object(x.a)(regeneratorRuntime.mark((function o(n){var l,c,d,m;return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return l=n.device_id,c={UserID:r.system_user_id,DeviceID:l},o.prev=2,o.next=5,t.$axios.post("delete-card",c);case 5:d=o.sent,m=d.data,t.data.push({status:m.status,message:m.message,DeviceID:c.DeviceID}),o.next=13;break;case 10:o.prev=10,o.t0=o.catch(2),console.error("Error deleting record:",o.t0);case 13:t.loading=!1,t.payload.cards.splice(e,1);case 15:case"end":return o.stop()}}),o,null,[[2,10]])})));return function(e){return o.apply(this,arguments)}}())}))},handleErrorResponse:function(e){if(e){var r=e.status,data=e.data;if(r&&422==r)return this.errors=data.errors,void(this.singleMessage=data.message);alert("An unexpected error occurred.")}else alert("An unexpected error occurred.")}}}),C=k,$=(t(1090),t(116)),component=Object($.a)(C,(function(){var e=this,r=e._self._c;return r("div",[r(m.a,{attrs:{persistent:"","max-width":"700"},model:{value:e.dialog,callback:function(r){e.dialog=r},expression:"dialog"}},[r(n.a,[r(y.a,{staticClass:"popup_background",attrs:{flat:"",dense:""}},[r("span",{staticClass:"popup_title"},[e._v("Card Delete From Device(s)")]),e._v(" "),r(v.a),e._v(" "),r(o.a,{attrs:{loading:e.loading,small:"",icon:""},on:{click:e.render}},[r(_.a,[e._v("mdi-sync")])],1),e._v(" "),r(_.a,{staticClass:"primary--text",on:{click:function(r){e.dialog=!1}}},[e._v("\n          mdi-close\n        ")])],1),e._v(" "),r(l.b,[r("table",{staticClass:"mt-2",staticStyle:{width:"100%"}},[r("thead",[r("tr",{staticClass:"",attrs:{dark:""}},[r("th",{staticStyle:{width:"30%"}},[e._v("Device ID")]),e._v(" "),r("th",{staticStyle:{width:"60%"}},[e._v("Message")]),e._v(" "),r("th",{staticClass:"text-center"},[e._v("Status")])])]),e._v(" "),r("tbody",[e._l(e.data,(function(t,o){return r("tr",{key:o},[r("td",[e._v(e._s(t.DeviceID))]),e._v(" "),r("td",{domProps:{innerHTML:e._s(t.message)}}),e._v(" "),r("td",{staticClass:"text-center"},[200==t.status?r(_.a,{attrs:{color:"green"}},[e._v("mdi-check")]):r(_.a,{attrs:{color:"error"}},[e._v("mdi-close")])],1)])})),e._v(" "),0==e.data.length?r("tr",[r("td",{staticClass:"text-center",attrs:{colspan:"3"}},[e._v("No Data available")])]):e._e()],2)])])],1)],1),e._v(" "),r(d.a,{attrs:{fluid:""}},[r(f.a,[r(c.a,{staticClass:"text-right mb-5",attrs:{cols:"12"}},[r(_.a,{attrs:{color:"primary"},on:{click:e.close}},[e._v("mdi-close-circle-outline")])],1)],1),e._v(" "),r("div",e._l(e.payload.cards,(function(t,o){return r(n.a,{key:o,staticClass:"mb-2",attrs:{outlined:""}},[r(d.a,[r(f.a,{staticClass:"mt-1"},[r(c.a,{attrs:{cols:"12"}},[r(h.a,{staticClass:"text-center",attrs:{disabled:"",label:"User Device Id",dense:"",outlined:"","hide-details":!e.errors.system_user_id,"error-messages":e.errors&&e.errors.system_user_id?e.errors.system_user_id[0]:""},model:{value:t.system_user_id,callback:function(r){e.$set(t,"system_user_id",r)},expression:"member.system_user_id"}})],1),e._v(" "),r(c.a,{attrs:{cols:"5"}},[r(h.a,{staticClass:"text-center",attrs:{label:"Card Name",dense:"",outlined:"","hide-details":!e.errors.full_name,"error-messages":e.errors&&e.errors.full_name?e.errors.full_name[0]:""},model:{value:t.full_name,callback:function(r){e.$set(t,"full_name",r)},expression:"member.full_name"}})],1),e._v(" "),r(c.a,{attrs:{cols:"5"}},[r(h.a,{staticClass:"text-center",attrs:{"append-icon":"mdi-credit-card-scan-outline",label:"RFID",dense:"",outlined:"","hide-details":!e.errors.rfid,"error-messages":e.errors&&e.errors.rfid?e.errors.rfid[0]:""},model:{value:t.rfid,callback:function(r){e.$set(t,"rfid",r)},expression:"member.rfid"}})],1),e._v(" "),r(c.a,{attrs:{cols:"2"}},[r(_.a,{attrs:{color:"primary"},on:{click:function(r){return e.update_card(t)}}},[e._v("mdi-floppy")]),e._v(" "),r(_.a,{attrs:{color:"error"},on:{click:function(r){return e.delete_card(o,t)}}},[e._v("mdi-delete")])],1)],1)],1)],1)})),1)],1)],1)}),[],!1,null,"c090f7a8",null);r.default=component.exports},1203:function(e,r,t){"use strict";t.r(r);var o=t(894),n=t(114),l=t(133),c=t(518),d=t(516),m=t(876),_=t(1572),f=t(350),v=t(147),h=t(863),y=t(973),x=t(972),k=t(515),C=t(853),$=t(855),w=t(854),O=t(214),j=t(107),R=t(23),S=t(3),I=(t(519),t(6),t(72),t(13),t(99),t(216),t(37),t(33),t(58),t(11),t(12),t(14),t(17),t(18),t(88),t(898),t(914)),D=["profile_picture","passport_doc","id_doc","contract_doc","ejari_doc","license_doc","others_doc","floor","room"];function M(object,e){var r=Object.keys(object);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(object);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),r.push.apply(r,t)}return r}function P(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?M(Object(source),!0).forEach((function(r){Object(S.a)(e,r,source[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):M(Object(source)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(source,r))}))}return e}var F={props:["item"],components:{VueCropper:t.n(I).a},data:function(){var e;return e={room_categories:[],room_sub_categories:[],filtered_room_sub_categories:[],disabled:!1,parkings:[],payload:{term:"Long Term",gender:"Male",full_name:"",phone_number:"",floor_id:"",room_id:"",start_date:"",end_date:"",vehicles:[{car_number:"",car_brand:"",parking_id:""}]},documents:[{label:"Passport",key:"passport_doc"},{label:"ID",key:"id_doc"},{label:"Contract",key:"contract_doc"},{label:"Ejari",key:"ejari_doc"},{label:"License",key:"license_doc"},{label:"Other",key:"others_doc"}],setImagePreview:null,tab:null,tabMenu:[]},Object(S.a)(e,"tab","0"),Object(S.a)(e,"attrs",[]),Object(S.a)(e,"selectedFile",""),Object(S.a)(e,"dialog",!1),Object(S.a)(e,"right",!0),Object(S.a)(e,"tab",null),Object(S.a)(e,"color","background"),Object(S.a)(e,"response",""),Object(S.a)(e,"snackbar",!1),Object(S.a)(e,"btnLoader",!1),Object(S.a)(e,"upload",{name:""}),Object(S.a)(e,"options",{}),Object(S.a)(e,"Model","Tanent"),Object(S.a)(e,"endpoint","tanent"),Object(S.a)(e,"search",""),Object(S.a)(e,"snackbar",!1),Object(S.a)(e,"ids",[]),Object(S.a)(e,"loading",!1),Object(S.a)(e,"response",""),Object(S.a)(e,"data",[]),Object(S.a)(e,"errors",[]),Object(S.a)(e,"singleMessage",null),Object(S.a)(e,"member_types",[]),Object(S.a)(e,"date",new Date(Date.now()-6e4*(new Date).getTimezoneOffset()).toISOString().substr(0,10)),Object(S.a)(e,"menu",!1),Object(S.a)(e,"menu2",!1),Object(S.a)(e,"menu3",!1),Object(S.a)(e,"floors",[]),Object(S.a)(e,"rooms",[]),Object(S.a)(e,"member",{full_name:null,phone_number:null,age:null,member_type:null,tanent_id:0}),e},created:function(){var e=this;return Object(R.a)(regeneratorRuntime.mark((function r(){var t,o,n,l,c,d,data;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e.loading=!1,e.boilerplate=!0,e.editItem(e.item),r.next=5,e.getFloors();case 5:return t={params:{company_id:e.$auth.user.company_id}},r.next=8,e.$axios.get("room-category-list",t);case 8:return o=r.sent,n=o.data,e.room_categories=n,r.next=13,e.$axios.get("room-sub-category-list",t);case 13:return l=r.sent,c=l.data,e.room_sub_categories=c,r.next=18,e.getMemberTypes();case 18:return r.next=20,e.$axios.get("parking-list");case 20:return d=r.sent,data=d.data,e.parkings=data,r.next=25,e.setRoomSubCategories(e.payload.room_category_id);case 25:case"end":return r.stop()}}),r)})))()},methods:{generateRandomId:function(){return Math.floor(Math.random()*Math.pow(10,8)).toString().padStart(8,"0")},handleSuccessResponse:function(e){this.$emit("success",e)},getRelatedChildDetails:function(){var e=this;return Object(R.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.setRoomSubCategories(e.payload.room_category_id);case 2:case"end":return r.stop()}}),r)})))()},setRoomSubCategories:function(e){var r=this;return Object(R.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r.filtered_room_sub_categories=r.room_sub_categories.filter((function(r){return r.room_category_id==e})),t.next=3,r.getFloorByCategory(e);case 3:case"end":return t.stop()}}),t)})))()},getFloorByCategory:function(e){var r=this;return Object(R.a)(regeneratorRuntime.mark((function t(){var o,data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.$axios.get("room-floor-by-category/".concat(e));case 2:o=t.sent,data=o.data,r.floors=data;case 5:case"end":return t.stop()}}),t)})))()},updatePayload:function(e,r){this.payload[e]=r},handleAttachment:function(e){console.log("🚀 ~ handleAttachment ~ e:",e),this.payload.profile_picture=e},getRoomNumber:function(e){var r=this.rooms.find((function(r){return r.id==e})).room_number;this.payload.room_number=r||0},getFloors:function(){var e=this;return Object(R.a)(regeneratorRuntime.mark((function r(){var t,o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.$axios.get("floor",{params:{company_id:e.$auth.user.company_id}});case 2:t=r.sent,o=t.data,e.floors=o.data;case 5:case"end":return r.stop()}}),r)})))()},getMemberTypes:function(){var e=this;return Object(R.a)(regeneratorRuntime.mark((function r(){var t,data;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.$axios.get("get_member_types");case 2:t=r.sent,data=t.data,e.member_types=data;case 5:case"end":return r.stop()}}),r)})))()},getRoomsByFloorId:function(e){var r=this;return Object(R.a)(regeneratorRuntime.mark((function t(){var o,data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.$axios.get("room-by-floor-id",{params:{company_id:r.$auth.user.company_id,floor_id:e}});case 2:o=t.sent,data=o.data,r.rooms=data;case 5:case"end":return t.stop()}}),t)})))()},can:function(e){return this.$pagePermission.can(e,this)},addVehicleInfo:function(){this.payload.vehicles.push({car_number:"",car_brand:"",parking_id:""})},editItem:function(e){var r=e.profile_picture,t=(e.passport_doc,e.id_doc,e.contract_doc,e.ejari_doc,e.license_doc,e.others_doc,e.floor,e.room,Object(j.a)(e,D));this.setImagePreview=r,this.payload=t,this.getRoomsByFloorId(t.floor_id)},delete_vehicle:function(e){this.payload.vehicles.splice(e,1)},others_doc:function(e){var r=this;this.upload.name=e.target.files[0]||"";var t=this.$refs.otherDoc_input.files;if(t[0].size>1048576)return e.preventDefault(),void(this.errors.profile_picture=["File too big (> 1MB). Upload less than 1MB"]);if(t&&t[0]){var o=new FileReader;o.onload=function(e){r.selectedFile=event.target.result,r.$refs.cropper.replace(r.selectedFile)},o.readAsDataURL(t[0]),this.$emit("input",t[0]),this.dialogCropping=!0}},add_vehicles:function(){var e=this,r=[];this.payload.vehicles.forEach((function(t){var o=t.car_number,n=t.car_brand,l=t.parking_id;r.push({tanent_id:e.payload.id,car_number:o,car_brand:n,parking_id:l})})),this.$axios.post("store-multiple-vehicles/".concat(this.payload.id),{vehicles:r}).then((function(r){r.data;e.singleMessage=null,e.errors=[],e.$emit("success","Vehicle has been added")})).catch((function(r){var t=r.response;e.handleErrorResponse(t)}))},update_data:function(){var e=this;this.payload.isStaying=this.payload.isStaying?1:0,this.$axios.post(this.endpoint+"-update/"+this.payload.id,this.payload,{headers:{"Content-Type":"multipart/form-data"}}).then((function(r){r.data;e.singleMessage=null,e.errors=[],e.$emit("success","Tanent has been updated")})).catch((function(r){var t=r.response;e.handleErrorResponse(t)}))},update_member:function(e){var r=this,t={};t=e.isImage?e:P(P({},e),{},{profile_picture:null}),this.$axios.post("/update-member/"+e.id,t).then((function(e){e.data;r.singleMessage=null,r.errors=[],r.$emit("success","Member has been updated")})).catch((function(e){var t=e.response;r.handleErrorResponse(t)}))},delete_member:function(e,r){var t=this;confirm("Are you sure you wish to delete , to mitigate any inconvenience in future.")&&this.$axios.delete("delete-member/".concat(r.id)).then((function(r){r.data;t.payload.members.splice(e,1),t.$emit("success","Record deleted successfully")})).catch((function(e){return console.log(e)}))},handleErrorResponse:function(e){if(e){var r=e.status,data=e.data;if(r&&422==r)return this.errors=data.errors,void(this.singleMessage=data.message);alert("An unexpected error occurred.")}else alert("An unexpected error occurred.")}}},U=t(116),component=Object(U.a)(F,(function(){var e=this,r=e._self._c;return r(f.a,{attrs:{persistent:"",width:"900"},scopedSlots:e._u([{key:"activator",fn:function(t){var o=t.on,n=t.attrs;return[r("span",e._g(e._b({staticStyle:{cursor:"pointer"}},"span",n,!1),o),[r(v.a,{attrs:{color:"secondary",small:""}},[e._v(" mdi-pencil ")]),e._v("\n      Edit\n    ")],1)]}}]),model:{value:e.dialog,callback:function(r){e.dialog=r},expression:"dialog"}},[e._v(" "),r(w.a,{attrs:{color:"deep-purple accent-4"}},[r(C.a,[e._v("Basic Info")]),e._v(" "),r(C.a,[e._v("Members")]),e._v(" "),r(C.a,[e._v("Cards")]),e._v(" "),r(C.a,[e._v("Vechicle Info")]),e._v(" "),r($.a,[r(m.a,[r(k.a,[r(d.a,{attrs:{cols:"3"}},[r(k.a,[r(d.a,{attrs:{cols:"12"}},[r("div",{staticClass:"text-center"},[r("CameraORUpload",{attrs:{PreviewImage:e.setImagePreview},on:{imageSrc:e.handleAttachment}}),e._v(" "),e.errors&&e.errors.profile_picture?r("span",{staticClass:"error--text mt-2"},[e._v(e._s(e.errors.profile_picture[0]))]):e._e()],1)]),e._v(" "),r(d.a,{attrs:{cols:"12"}},[r(O.a,{staticClass:"text-center",attrs:{label:"User Device Id",dense:"",outlined:"","hide-details":!e.errors.system_user_id,"error-messages":e.errors&&e.errors.system_user_id?e.errors.system_user_id[0]:""},model:{value:e.payload.system_user_id,callback:function(r){e.$set(e.payload,"system_user_id",r)},expression:"payload.system_user_id"}})],1),e._v(" "),r(d.a,{attrs:{cols:"12"}},[r(O.a,{staticClass:"text-center",attrs:{label:"RFID",dense:"",outlined:"","hide-details":!e.errors.rfid,"error-messages":e.errors&&e.errors.rfid?e.errors.rfid[0]:""},model:{value:e.payload.rfid,callback:function(r){e.$set(e.payload,"rfid",r)},expression:"payload.rfid"}})],1)],1)],1),e._v(" "),r(d.a,{attrs:{cols:"9"}},[r(k.a,{staticClass:"mt-4"},[r(d.a,{attrs:{cols:"6"}},[r(O.a,{staticClass:"text-center",attrs:{label:"First Name",dense:"",outlined:"","hide-details":!e.errors.first_name,"error-messages":e.errors&&e.errors.first_name?e.errors.first_name[0]:""},model:{value:e.payload.first_name,callback:function(r){e.$set(e.payload,"first_name",r)},expression:"payload.first_name"}})],1),e._v(" "),r(d.a,{attrs:{cols:"6"}},[r(O.a,{staticClass:"text-center",attrs:{label:"Last Name",dense:"",outlined:"","hide-details":!e.errors.last_name,"error-messages":e.errors&&e.errors.last_name?e.errors.last_name[0]:""},model:{value:e.payload.last_name,callback:function(r){e.$set(e.payload,"last_name",r)},expression:"payload.last_name"}})],1),e._v(" "),r(d.a,{attrs:{cols:"6"}},[r(o.a,{attrs:{label:"Term",outlined:"",items:["Long Term","Short Term"],dense:"","hide-details":!e.errors.term,"error-messages":e.errors&&e.errors.term?e.errors.term[0]:""},model:{value:e.payload.term,callback:function(r){e.$set(e.payload,"term",r)},expression:"payload.term"}})],1),e._v(" "),r(d.a,{attrs:{cols:"6"}},[r(x.a,{staticClass:"ma-0 mt-2 px-2 pa-0",attrs:{row:"","hide-details":!e.errors.gender,"error-messages":e.errors&&e.errors.gender?e.errors.gender[0]:""},model:{value:e.payload.gender,callback:function(r){e.$set(e.payload,"gender",r)},expression:"payload.gender"}},[r(y.a,{attrs:{label:"Male",value:"Male"}}),e._v(" "),r(y.a,{attrs:{label:"Female",value:"Female"}}),e._v(" "),r(y.a,{attrs:{label:"Other",value:"Other"}})],1)],1),e._v(" "),r(d.a,{attrs:{cols:"6"}},[r(o.a,{attrs:{label:"Room Category",outlined:"",disabled:e.disabled,items:e.room_categories,dense:"","item-text":"name","item-value":"id","hide-details":!e.errors.room_category_id,"error-messages":e.errors&&e.errors.room_category_id?e.errors.room_category_id[0]:""},on:{change:e.getRelatedChildDetails},model:{value:e.payload.room_category_id,callback:function(r){e.$set(e.payload,"room_category_id",r)},expression:"payload.room_category_id"}})],1),e._v(" "),r(d.a,{attrs:{cols:"6"}},[r(o.a,{attrs:{label:"Room Sub Category",outlined:"",disabled:e.disabled,items:e.filtered_room_sub_categories,dense:"","item-text":"name","item-value":"id","hide-details":!e.errors.room_sub_category_id,"error-messages":e.errors&&e.errors.room_sub_category_id?e.errors.room_sub_category_id[0]:""},model:{value:e.payload.room_sub_category_id,callback:function(r){e.$set(e.payload,"room_sub_category_id",r)},expression:"payload.room_sub_category_id"}})],1),e._v(" "),r(d.a,{attrs:{cols:"6"}},[r(o.a,{attrs:{label:"Floor Number",outlined:"",items:e.floors,dense:"","item-text":"floor_number","item-value":"id","hide-details":!e.errors.floor_id,"error-messages":e.errors&&e.errors.floor_id?e.errors.floor_id[0]:""},on:{change:function(r){return e.getRoomsByFloorId(e.payload.floor_id)}},model:{value:e.payload.floor_id,callback:function(r){e.$set(e.payload,"floor_id",r)},expression:"payload.floor_id"}})],1),e._v(" "),r(d.a,{attrs:{cols:"6"}},[r(o.a,{attrs:{label:"Room",outlined:"",items:e.rooms,dense:"","item-text":"room_number","item-value":"id","hide-details":!e.errors.room_id,"error-messages":e.errors&&e.errors.room_id?e.errors.room_id[0]:""},on:{change:function(r){return e.getRoomNumber(e.payload.room_id)}},model:{value:e.payload.room_id,callback:function(r){e.$set(e.payload,"room_id",r)},expression:"payload.room_id"}})],1),e._v(" "),r(d.a,{attrs:{cols:"6"}},[r(O.a,{staticClass:"text-center",attrs:{label:"Email",dense:"",outlined:"","hide-details":!e.errors.email,"error-messages":e.errors&&e.errors.email?e.errors.email[0]:""},model:{value:e.payload.email,callback:function(r){e.$set(e.payload,"email",r)},expression:"payload.email"}})],1),e._v(" "),r(d.a,{attrs:{cols:"6"}},[r(h.a,{attrs:{"close-on-content-click":!1,"nudge-right":40,transition:"scale-transition","offset-y":"","min-width":"auto"},scopedSlots:e._u([{key:"activator",fn:function(t){var o=t.on,n=t.attrs;return[r(O.a,e._g(e._b({attrs:{label:"Date of Birth","append-icon":"mdi-calendar",outlined:"",dense:"",readonly:"","hide-details":!e.errors.date_of_birth,"error-messages":e.errors&&e.errors.date_of_birth?e.errors.date_of_birth[0]:""},model:{value:e.payload.date_of_birth,callback:function(r){e.$set(e.payload,"date_of_birth",r)},expression:"payload.date_of_birth"}},"v-text-field",n,!1),o))]}}]),model:{value:e.menu3,callback:function(r){e.menu3=r},expression:"menu3"}},[e._v(" "),r(_.a,{on:{input:function(r){e.menu3=!1}},model:{value:e.payload.date_of_birth,callback:function(r){e.$set(e.payload,"date_of_birth",r)},expression:"payload.date_of_birth"}})],1)],1),e._v(" "),r(d.a,{attrs:{cols:"6"}},[r(O.a,{staticClass:"text-center",attrs:{label:"Phone Number",dense:"",outlined:"","hide-details":!e.errors.phone_number,"error-messages":e.errors&&e.errors.phone_number?e.errors.phone_number[0]:""},model:{value:e.payload.phone_number,callback:function(r){e.$set(e.payload,"phone_number",r)},expression:"payload.phone_number"}})],1),e._v(" "),r(d.a,{attrs:{cols:"6"}},[r(O.a,{staticClass:"text-center",attrs:{label:"Whatsapp Number (optional)",dense:"",outlined:"","hide-details":!e.errors.whatsapp_number,"error-messages":e.errors&&e.errors.whatsapp_number?e.errors.whatsapp_number[0]:""},model:{value:e.payload.whatsapp_number,callback:function(r){e.$set(e.payload,"whatsapp_number",r)},expression:"payload.whatsapp_number"}})],1),e._v(" "),r(d.a,{attrs:{cols:"6"}},[r(O.a,{staticClass:"text-center",attrs:{label:"Nationality",dense:"",outlined:"","hide-details":!e.errors.nationality,"error-messages":e.errors&&e.errors.nationality?e.errors.nationality[0]:""},model:{value:e.payload.nationality,callback:function(r){e.$set(e.payload,"nationality",r)},expression:"payload.nationality"}})],1),e._v(" "),r(d.a,{attrs:{cols:"6"}},[r(O.a,{staticClass:"text-center",attrs:{label:"Address",dense:"",outlined:"","hide-details":!e.errors.address,"error-messages":e.errors&&e.errors.address?e.errors.address[0]:""},model:{value:e.payload.address,callback:function(r){e.$set(e.payload,"address",r)},expression:"payload.address"}})],1),e._v(" "),r(d.a,{attrs:{cols:"6"}},[r(h.a,{attrs:{"close-on-content-click":!1,"nudge-right":40,transition:"scale-transition","offset-y":"","min-width":"auto"},scopedSlots:e._u([{key:"activator",fn:function(t){var o=t.on,n=t.attrs;return[r(O.a,e._g(e._b({attrs:{label:"Start Date","append-icon":"mdi-calendar",outlined:"",dense:"",readonly:"","hide-details":!e.errors.start_date,"error-messages":e.errors&&e.errors.start_date?e.errors.start_date[0]:""},model:{value:e.payload.start_date,callback:function(r){e.$set(e.payload,"start_date",r)},expression:"payload.start_date"}},"v-text-field",n,!1),o))]}}]),model:{value:e.menu,callback:function(r){e.menu=r},expression:"menu"}},[e._v(" "),r(_.a,{on:{input:function(r){e.menu=!1}},model:{value:e.payload.start_date,callback:function(r){e.$set(e.payload,"start_date",r)},expression:"payload.start_date"}})],1)],1),e._v(" "),r(d.a,{attrs:{cols:"6"}},[r(h.a,{attrs:{"close-on-content-click":!1,"nudge-right":40,transition:"scale-transition","offset-y":"","min-width":"auto"},scopedSlots:e._u([{key:"activator",fn:function(t){var o=t.on,n=t.attrs;return[r(O.a,e._g(e._b({attrs:{label:"End Date","append-icon":"mdi-calendar",outlined:"",dense:"",readonly:"","hide-details":!e.errors.end_date,"error-messages":e.errors&&e.errors.end_date?e.errors.end_date[0]:""},model:{value:e.payload.end_date,callback:function(r){e.$set(e.payload,"end_date",r)},expression:"payload.end_date"}},"v-text-field",n,!1),o))]}}]),model:{value:e.menu2,callback:function(r){e.menu2=r},expression:"menu2"}},[e._v(" "),r(_.a,{on:{input:function(r){e.menu2=!1}},model:{value:e.payload.end_date,callback:function(r){e.$set(e.payload,"end_date",r)},expression:"payload.end_date"}})],1)],1),e._v(" "),"Owner"==e.payload.member_type?r(d.a,{attrs:{cols:"12"}},[r(c.a,{attrs:{label:"Is Staying",dense:"",primary:"","hide-details":!e.errors.isStaying,"error-messages":e.errors&&e.errors.isStaying?e.errors.isStaying[0]:""},model:{value:e.payload.isStaying,callback:function(r){e.$set(e.payload,"isStaying",r)},expression:"payload.isStaying"}})],1):e._e(),e._v(" "),r(d.a,{staticClass:"text-right my-1",attrs:{cols:"12"}},[r(n.a,{on:{click:function(r){e.dialog=!1}}},[e._v("Close")]),e._v(" "),r(n.a,{staticClass:"primary",on:{click:e.update_data}},[e._v("Update")])],1)],1)],1)],1)],1)],1),e._v(" "),r($.a,[r(m.a,[r(k.a,[r(d.a,{staticClass:"text-right mb-5",attrs:{cols:"12"}},[r(v.a,{attrs:{color:"primary"},on:{click:function(r){e.dialog=!1}}},[e._v("mdi-close-circle-outline")])],1)],1),e._v(" "),r("div",[e._l(e.payload.members_only,(function(t,o){return r(l.a,{key:o,staticClass:"mb-2",attrs:{outlined:""}},[r(m.a,[r(k.a,[r(d.a,{attrs:{cols:"3"}},[r(k.a,[r(d.a,{attrs:{cols:"12"}},[r("CameraORUpload",{attrs:{PreviewImage:t.profile_picture},on:{imageSrc:function(e){t.profile_picture=e,t.isImage=!0}}}),e._v(" "),e.errors&&e.errors.profile_picture?r("span",{staticClass:"text-danger mt-2"},[e._v(e._s(e.errors.profile_picture[0]))]):e._e()],1)],1)],1),e._v(" "),r(d.a,{attrs:{cols:"9"}},[r(k.a,{staticClass:"mt-1"},[r(d.a,{attrs:{cols:"6"}},[r(O.a,{staticClass:"text-center",attrs:{readonly:"",label:"Member Type",dense:"",outlined:"","hide-details":!e.errors.member_type,"error-messages":e.errors&&e.errors.member_type?e.errors.member_type[0]:""},model:{value:t.member_type,callback:function(r){e.$set(t,"member_type",r)},expression:"member.member_type"}})],1),e._v(" "),r(d.a,{attrs:{cols:"6"}},[r(O.a,{staticClass:"text-center",attrs:{readonly:"",label:"System User Id",dense:"",outlined:"","hide-details":!e.errors.system_user_id,"error-messages":e.errors&&e.errors.system_user_id?e.errors.system_user_id[0]:""},model:{value:t.system_user_id,callback:function(r){e.$set(t,"system_user_id",r)},expression:"member.system_user_id"}})],1),e._v(" "),r(d.a,{attrs:{cols:"6"}},[r(O.a,{staticClass:"text-center",attrs:{label:"First Name",dense:"",outlined:"","hide-details":!e.errors.first_name,"error-messages":e.errors&&e.errors.first_name?e.errors.first_name[0]:""},model:{value:t.first_name,callback:function(r){e.$set(t,"first_name",r)},expression:"member.first_name"}})],1),e._v(" "),r(d.a,{attrs:{cols:"6"}},[r(O.a,{staticClass:"text-center",attrs:{label:"Last Name",dense:"",outlined:"","hide-details":!e.errors.last_name,"error-messages":e.errors&&e.errors.last_name?e.errors.last_name[0]:""},model:{value:t.last_name,callback:function(r){e.$set(t,"last_name",r)},expression:"member.last_name"}})],1),e._v(" "),r(d.a,{attrs:{cols:"6"}},[r(O.a,{staticClass:"text-center",attrs:{label:"Age",dense:"",outlined:"","hide-details":!e.errors.age,"error-messages":e.errors&&e.errors.age?e.errors.age[0]:""},model:{value:t.age,callback:function(r){e.$set(t,"age",r)},expression:"member.age"}})],1),e._v(" "),r(d.a,{attrs:{cols:"6"}},[r(O.a,{staticClass:"text-center",attrs:{label:"Phone Number",dense:"",outlined:"","hide-details":!e.errors.phone_number,"error-messages":e.errors&&e.errors.phone_number?e.errors.phone_number[0]:""},model:{value:t.phone_number,callback:function(r){e.$set(t,"phone_number",r)},expression:"member.phone_number"}})],1),e._v(" "),r(d.a,{attrs:{cols:"6"}},[r(O.a,{staticClass:"text-center",attrs:{label:"Nationality",dense:"",outlined:"","hide-details":!e.errors.nationality,"error-messages":e.errors&&e.errors.nationality?e.errors.nationality[0]:""},model:{value:t.nationality,callback:function(r){e.$set(t,"nationality",r)},expression:"member.nationality"}})],1),e._v(" "),r(d.a,{attrs:{cols:"6"}},[r(O.a,{staticClass:"text-center",attrs:{label:"RFID",dense:"",outlined:"","hide-details":!e.errors.rfid,"error-messages":e.errors&&e.errors.rfid?e.errors.rfid[0]:""},model:{value:t.rfid,callback:function(r){e.$set(t,"rfid",r)},expression:"member.rfid"}})],1),e._v(" "),r(d.a,{attrs:{cols:"6"}},[r(x.a,{staticClass:"ma-0 mt-2 px-2 pa-0",attrs:{row:"","hide-details":!e.errors.gender,"error-messages":e.errors&&e.errors.gender?e.errors.gender[0]:""},model:{value:t.gender,callback:function(r){e.$set(t,"gender",r)},expression:"member.gender"}},[r(y.a,{attrs:{label:"Male",value:"Male"}}),e._v(" "),r(y.a,{attrs:{label:"Female",value:"Female"}}),e._v(" "),r(y.a,{attrs:{label:"Other",value:"Other"}})],1)],1),e._v(" "),r(d.a,{staticClass:"text-right",attrs:{cols:"6"}},[r(v.a,{attrs:{color:"primary"},on:{click:function(r){return e.update_member(t)}}},[e._v("mdi-floppy")]),e._v(" "),r(v.a,{attrs:{color:"error"},on:{click:function(r){return e.delete_member(o,t)}}},[e._v("mdi-delete")])],1)],1)],1)],1)],1)],1)})),e._v(" "),e._l(e.payload.maids,(function(t,o){return r(l.a,{key:o,staticClass:"mb-2",attrs:{outlined:""}},[r(m.a,[r(k.a,[r(d.a,{attrs:{cols:"3"}},[r(k.a,[r(d.a,{attrs:{cols:"12"}},[r("CameraORUpload",{attrs:{PreviewImage:t.profile_picture},on:{imageSrc:function(e){t.profile_picture=e}}}),e._v(" "),e.errors&&e.errors.profile_picture?r("span",{staticClass:"text-danger mt-2"},[e._v(e._s(e.errors.profile_picture[0]))]):e._e()],1)],1)],1),e._v(" "),r(d.a,{attrs:{cols:"9"}},[r(k.a,{staticClass:"mt-1"},[r(d.a,{attrs:{cols:"6"}},[r(O.a,{staticClass:"text-center",attrs:{readonly:"",label:"Member Type",dense:"",outlined:"","hide-details":!e.errors.member_type,"error-messages":e.errors&&e.errors.member_type?e.errors.member_type[0]:""},model:{value:t.member_type,callback:function(r){e.$set(t,"member_type",r)},expression:"maid.member_type"}})],1),e._v(" "),r(d.a,{attrs:{cols:"6"}},[r(O.a,{staticClass:"text-center",attrs:{readonly:"",label:"System User Id",dense:"",outlined:"","hide-details":!e.errors.system_user_id,"error-messages":e.errors&&e.errors.system_user_id?e.errors.system_user_id[0]:""},model:{value:t.system_user_id,callback:function(r){e.$set(t,"system_user_id",r)},expression:"maid.system_user_id"}})],1),e._v(" "),r(d.a,{attrs:{cols:"6"}},[r(O.a,{staticClass:"text-center",attrs:{label:"First Name",dense:"",outlined:"","hide-details":!e.errors.first_name,"error-messages":e.errors&&e.errors.first_name?e.errors.first_name[0]:""},model:{value:t.first_name,callback:function(r){e.$set(t,"first_name",r)},expression:"maid.first_name"}})],1),e._v(" "),r(d.a,{attrs:{cols:"6"}},[r(O.a,{staticClass:"text-center",attrs:{label:"Last Name",dense:"",outlined:"","hide-details":!e.errors.last_name,"error-messages":e.errors&&e.errors.last_name?e.errors.last_name[0]:""},model:{value:t.last_name,callback:function(r){e.$set(t,"last_name",r)},expression:"maid.last_name"}})],1),e._v(" "),r(d.a,{attrs:{cols:"6"}},[r(O.a,{staticClass:"text-center",attrs:{label:"Age",dense:"",outlined:"","hide-details":!e.errors.age,"error-messages":e.errors&&e.errors.age?e.errors.age[0]:""},model:{value:t.age,callback:function(r){e.$set(t,"age",r)},expression:"maid.age"}})],1),e._v(" "),r(d.a,{attrs:{cols:"6"}},[r(O.a,{staticClass:"text-center",attrs:{label:"Phone Number",dense:"",outlined:"","hide-details":!e.errors.phone_number,"error-messages":e.errors&&e.errors.phone_number?e.errors.phone_number[0]:""},model:{value:t.phone_number,callback:function(r){e.$set(t,"phone_number",r)},expression:"maid.phone_number"}})],1),e._v(" "),r(d.a,{attrs:{cols:"6"}},[r(O.a,{staticClass:"text-center",attrs:{label:"Nationality",dense:"",outlined:"","hide-details":!e.errors.nationality,"error-messages":e.errors&&e.errors.nationality?e.errors.nationality[0]:""},model:{value:t.nationality,callback:function(r){e.$set(t,"nationality",r)},expression:"maid.nationality"}})],1),e._v(" "),r(d.a,{attrs:{cols:"6"}},[r(O.a,{staticClass:"text-center",attrs:{label:"RFID",dense:"",outlined:"","hide-details":!e.errors.rfid,"error-messages":e.errors&&e.errors.rfid?e.errors.rfid[0]:""},model:{value:t.rfid,callback:function(r){e.$set(t,"rfid",r)},expression:"maid.rfid"}})],1),e._v(" "),r(d.a,{attrs:{cols:"6"}},[r(x.a,{staticClass:"ma-0 mt-2 px-2 pa-0",attrs:{row:"","hide-details":!e.errors.gender,"error-messages":e.errors&&e.errors.gender?e.errors.gender[0]:""},model:{value:t.gender,callback:function(r){e.$set(t,"gender",r)},expression:"maid.gender"}},[r(y.a,{attrs:{label:"Male",value:"Male"}}),e._v(" "),r(y.a,{attrs:{label:"Female",value:"Female"}}),e._v(" "),r(y.a,{attrs:{label:"Other",value:"Other"}})],1)],1),e._v(" "),r(d.a,{staticClass:"text-right",attrs:{cols:"6"}},[r(v.a,{attrs:{color:"primary"},on:{click:function(r){return e.update_member(t)}}},[e._v("mdi-floppy")]),e._v(" "),r(v.a,{attrs:{color:"error"},on:{click:function(r){return e.delete_member(o,t)}}},[e._v("mdi-delete")])],1)],1)],1)],1)],1)],1)}))],2)],1)],1),e._v(" "),r($.a,[r("TanentCardEdit",{attrs:{item:e.payload},on:{close:function(r){return e.dialog=!1},success:e.handleSuccessResponse}})],1),e._v(" "),r($.a,[r(m.a,[r(k.a,[r(d.a,{staticClass:"text-right",attrs:{cols:"12"}},[r(v.a,{attrs:{color:"primary"},on:{click:function(r){e.dialog=!1}}},[e._v("mdi-close-circle-outline")])],1)],1),e._v(" "),e._l(e.payload.vehicles,(function(t,n){return r(k.a,{key:n},[r(d.a,{attrs:{cols:"3"}},[r(O.a,{staticClass:"text-center",attrs:{label:"Car Number",dense:"",outlined:"","hide-details":!e.errors.car_number,"error-messages":e.errors&&e.errors.car_number?e.errors.car_number[0]:""},model:{value:t.car_number,callback:function(r){e.$set(t,"car_number",r)},expression:"vehicle.car_number"}})],1),e._v(" "),r(d.a,{attrs:{cols:"3"}},[r(O.a,{staticClass:"text-center",attrs:{label:"Car Brand",dense:"",outlined:"","hide-details":!e.errors.car_brand,"error-messages":e.errors&&e.errors.car_brand?e.errors.car_brand[0]:""},model:{value:t.car_brand,callback:function(r){e.$set(t,"car_brand",r)},expression:"vehicle.car_brand"}})],1),e._v(" "),r(d.a,{attrs:{cols:"3"}},[r(o.a,{attrs:{label:"Parking Number",outlined:"",items:e.parkings,dense:"","item-text":"parking_number","item-value":"id","hide-details":!e.errors.parking_number,"error-messages":e.errors&&e.errors.parking_number?e.errors.parking_number[0]:""},model:{value:t.parking_id,callback:function(r){e.$set(t,"parking_id",r)},expression:"vehicle.parking_id"}})],1)],1)})),e._v(" "),r(k.a,[r(d.a,{staticClass:"text-right",attrs:{cols:"9"}},[r(v.a,{attrs:{color:""},on:{click:e.addVehicleInfo}},[e._v("mdi-plus-circle-outline")]),e._v(" "),r(v.a,{attrs:{color:""},on:{click:function(r){return e.delete_vehicle(e.index)}}},[e._v("mdi-delete")])],1),e._v(" "),r(d.a,{attrs:{cols:"12"}},[r(n.a,{staticClass:"primary",on:{click:e.add_vehicles}},[e._v("Submit")])],1)],1)],2)],1)],1)],1)}),[],!1,null,null,null);r.default=component.exports;installComponents(component,{CameraORUpload:t(908).default,TanentCardEdit:t(1113).default})},908:function(e,r,t){"use strict";t.r(r);var o=t(329),n=t(147),l=t(23),c=(t(6),t(11),t(88),{auth:!1,layout:"login",props:{PreviewImage:{type:String,default:"/no-profile-image.jpg"}},data:function(){return{isClicked:!1,isCamera:!1,videoStream:null,isUpload:!0,PlaceHolderImage:null}},mounted:function(){this.setupCamera(),this.PlaceHolderImage=this.PreviewImage},methods:{setupCamera:function(){var e=this;return Object(l.a)(regeneratorRuntime.mark((function r(){var t,video;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,navigator.mediaDevices.getUserMedia({video:!0});case 3:t=r.sent,(video=e.$refs.video).srcObject=t,e.videoStream=t,video.play(),r.next=13;break;case 10:r.prev=10,r.t0=r.catch(0),console.error("Error accessing the camera: ",r.t0);case 13:case"end":return r.stop()}}),r,null,[[0,10]])})))()},toggleCamera:function(){this.isClicked=!0,this.isUpload=!1,this.isCamera=!this.isCamera;var video=this.$refs.video,canvas=this.$refs.canvas,e=canvas.getContext("2d");canvas.width=video.videoWidth,canvas.height=video.videoHeight,e.drawImage(video,0,0,canvas.width,canvas.height),this.$emit("imageSrc",canvas.toDataURL("image/png")),this.isCamera?video.play():this.isCamera||(this.isUpload=!1,video.pause())},uploadPicture:function(){this.$refs.fileInput.click()},handleFileUpload:function(e){var r=this,t=e.target.files[0],o=new FileReader;o.onload=function(e){r.isUpload=!0,r.PlaceHolderImage=e.target.result,r.$emit("imageSrc",e.target.result)},o.readAsDataURL(t)},beforeDestroy:function(){this.videoStream&&this.videoStream.getTracks().forEach((function(track){return track.stop()}))}}}),d=t(116),component=Object(d.a)(c,(function(){var e=this,r=e._self._c;return r("div",{staticClass:"text-center"},[r(o.a,{staticStyle:{border:"1px solid #6946dd"},attrs:{size:"175"}},[r("img",{directives:[{name:"show",rawName:"v-show",value:e.isUpload,expression:"isUpload"}],ref:"img",attrs:{src:e.PlaceHolderImage,alt:""}}),e._v(" "),r("video",{directives:[{name:"show",rawName:"v-show",value:!e.isUpload,expression:"!isUpload"}],ref:"video",attrs:{width:"100%",autoplay:"",playsinline:""}}),e._v(" "),r("canvas",{ref:"canvas",staticStyle:{display:"none"}})]),e._v(" "),r("div",{staticClass:"pa-5"},[r(n.a,{attrs:{large:"",color:"primary"},on:{click:e.toggleCamera}},[e._v("mdi-camera")]),e._v(" "),r(n.a,{attrs:{large:"",color:"primary"},on:{click:e.uploadPicture}},[e._v("mdi-folder-open")])],1),e._v(" "),r("input",{ref:"fileInput",staticStyle:{display:"none"},attrs:{type:"file"},on:{change:e.handleFileUpload}})],1)}),[],!1,null,null,null);r.default=component.exports}}]);