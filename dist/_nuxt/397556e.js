(window.webpackJsonp=window.webpackJsonp||[]).push([[412,205,239],{1072:function(e,t,r){"use strict";r.r(t);var o=r(340),n=r(117),l=r(17),c=(r(6),r(9),r(69),{auth:!1,layout:"login",data:function(){return{isClicked:!1,isCamera:!1,videoStream:null}},mounted:function(){this.setupCamera()},methods:{setupCamera:function(){var e=this;return Object(l.a)(regeneratorRuntime.mark((function t(){var r,video;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,navigator.mediaDevices.getUserMedia({video:!0});case 3:r=t.sent,(video=e.$refs.video).srcObject=r,e.videoStream=r,video.play(),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),console.error("Error accessing the camera: ",t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})))()},takeSnapshot:function(){this.isClicked=!0,this.isCamera=!this.isCamera;var video=this.$refs.video,canvas=this.$refs.canvas,e=canvas.getContext("2d");canvas.width=video.videoWidth,canvas.height=video.videoHeight,e.drawImage(video,0,0,canvas.width,canvas.height),this.$emit("imageSrc",canvas.toDataURL("image/png")),this.isCamera?video.play():this.isCamera||video.pause()},beforeDestroy:function(){this.videoStream&&this.videoStream.getTracks().forEach((function(track){return track.stop()}))}}}),d=r(60),component=Object(d.a)(c,(function(){var e=this,t=e._self._c;return t("div",[t(o.a,{staticStyle:{border:"1px solid purple"},attrs:{size:"300"}},[t("img",{directives:[{name:"show",rawName:"v-show",value:!e.isClicked,expression:"!isClicked"}],ref:"img",attrs:{src:"/no-profile-image.jpg",alt:""}}),e._v(" "),t("video",{directives:[{name:"show",rawName:"v-show",value:e.isClicked,expression:"isClicked"}],ref:"video",attrs:{width:"100%",autoplay:"",playsinline:""}}),e._v(" "),t("canvas",{ref:"canvas",staticStyle:{display:"none"}})]),e._v(" "),t("div",{staticClass:"mb-1"},[t(n.a,{staticClass:"primary mt-1",on:{click:e.takeSnapshot}},[e._v(e._s(e.isCamera?"Take Picture":"Open Camera"))])],1)],1)}),[],!1,null,null,null);t.default=component.exports},1703:function(e,t,r){"use strict";r.r(t);var o=r(117),n=r(138),l=r(79),c=r(539),d=r(903),m=r(1584),_=r(361),v=r(116),h=r(888),f=r(538),y=r(920),k=r(360),x=r(221),C=r(886),w=r(17),S=r(2),$=(r(69),r(543),r(57),new Date(Date.now()-6e4*(new Date).getTimezoneOffset()).toISOString().substring(0,10)),O=String((new Date).getHours()).padStart(2,"0")+":"+String((new Date).getMinutes()).padStart(2,"0"),j={layout:"login",auth:!1,data:function(){var e;return e={searchDialog:!1,searchInput:null,time_in_menu:"",responseStatus:"",responseDialog:!1,visit_from_menu:!1,visit_to_menu:!1,payload:{withOutHost:!0,host_flat_number:null,host_company_name:null,host_name:null,host_phone_number:null,host_email:null,system_user_id:"",visit_from:$,visit_to:$,time_in:O,time_out:O,timezone_id:1,purpose_id:1,first_name:"",last_name:"",gender:"Male",phone_number:"",email:"",visitor_company_name:"",id_type:1,id_number:"",id_copy:"jpg",status_id:1,date:$,updated_by:1,status_phone_number:"",company_name:"",reason:"",company_id:0,host_company_id:0},image:"",cropper:"",loading:!1},Object(S.a)(e,"image",null),Object(S.a)(e,"response",null),Object(S.a)(e,"snackbar",!1),Object(S.a)(e,"Model","Visitor"),Object(S.a)(e,"endpoint","visitor"),Object(S.a)(e,"loading",!1),Object(S.a)(e,"data",[]),Object(S.a)(e,"errors",[]),Object(S.a)(e,"purposes",[]),Object(S.a)(e,"step",1),Object(S.a)(e,"field1",""),Object(S.a)(e,"field2",""),Object(S.a)(e,"company_id",0),Object(S.a)(e,"photo",null),e},mounted:function(){},created:function(){var e=this;return Object(w.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.loading=!1,e.company_id=e.$route.params.id,t.next=4,e.getPurposes();case 4:case"end":return t.stop()}}),t)})))()},methods:{searchVisitor:function(){var e=this;this.searchInput&&this.searchInput.length>3&&this.$axios.get("visitor-search",{params:{company_id:this.company_id,searchInput:this.searchInput}}).then((function(t){var data=t.data;e.payload={},data&&(e.payload=data),e.searchDialog=!1}))},close:function(){this.dialog=!1,this.errors=[],setTimeout((function(){}),300)},getPurposes:function(){var e=this;return Object(w.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.$axios.get("purpose_list",{params:{company_id:e.company_id}}).then((function(t){var data=t.data;e.purposes=data}));case 1:case"end":return t.stop()}}),t)})))()},submit:function(){var e=this;this.payload.company_id=this.company_id,this.payload.logo=this.photo,this.$axios.post("visitor-self-register",this.payload).then((function(t){var data=t.data;e.errors=[],e.responseDialog=!0,e.response=data.message="Registration has been submitted.",e.responseStatus="Success",e.getDataFromApi(),e.DialogBox=!1})).catch((function(t){var r=t.response;if(!r)return!1;var o=r.status,data=r.data,n=r.statusText;if(o&&422==o)return e.response=data.message,void(e.errors=data.errors);e.response=n}))}}},T=r(60),component=Object(T.a)(j,(function(){var e=this,t=e._self._c;return t("div",[t(f.a,{attrs:{justify:"center"}},[t(_.a,{attrs:{"max-width":"700px"},model:{value:e.responseDialog,callback:function(t){e.responseDialog=t},expression:"responseDialog"}},[t(n.a,[t(l.d,{staticClass:"popup_background",attrs:{dark:""}},[t("span",{attrs:{dense:""}},[e._v(" "+e._s(e.responseStatus)+" ")]),e._v(" "),t(k.a),e._v(" "),t(v.a,{attrs:{outlined:""},on:{click:function(t){e.responseDialog=!1}}},[e._v("\n            mdi mdi-close-circle\n          ")])],1),e._v(" "),t(l.c,{staticClass:"ma-2",class:"".concat("Fail"==e.responseStatus?"red--text":"")},[e._v("\n          "+e._s(e.response)+"\n        ")])],1)],1)],1),e._v(" "),t(C.b,{staticClass:"primary text-center white--text pa-2 mt-5"},[e._v("\n    Visitor Registration\n  ")]),e._v(" "),[t("div",{staticClass:"text-center"},[t(_.a,{attrs:{width:"500"},model:{value:e.searchDialog,callback:function(t){e.searchDialog=t},expression:"searchDialog"}},[t(n.a,[t(l.a,[t(k.a),e._v(" "),t(v.a,{attrs:{color:"black"},on:{click:function(t){e.searchDialog=!1}}},[e._v("\n              mdi-close-circle\n            ")])],1),e._v(" "),t(l.c,[t(x.a,{attrs:{outlined:"","hide-details":"",dense:"",label:"Search here"},model:{value:e.searchInput,callback:function(t){e.searchInput=t},expression:"searchInput"}}),e._v(" "),t(o.a,{staticClass:"mt-1",attrs:{color:"primary",block:""},on:{click:e.searchVisitor}},[e._v("\n              Search\n            ")])],1)],1)],1)],1)],e._v(" "),t(d.a,[t(f.a,[t(c.a,{staticClass:"text-right",attrs:{cols:"12"}},[t(v.a,{staticClass:"primary--text",attrs:{large:"",dark:""},on:{click:function(t){e.searchDialog=!0}}},[e._v("mdi-magnify")])],1),e._v(" "),t(c.a,{attrs:{cols:"12"}},[t("div",{staticClass:"text-center"},[t("SnippetsCamera",{attrs:{defaultImage:"/no-profile-image.jpg"},on:{imageSrc:function(t){return e.photo=t}}}),e._v(" "),e.errors&&e.errors.logo?t("span",{staticClass:"text-danger mt-2"},[e._v(e._s(e.errors.logo[0]))]):e._e()],1)]),e._v(" "),t(c.a,{attrs:{cols:"12",sm:"6",md:"4",lg:"6"}},[t(x.a,{attrs:{dense:"",outlined:"","hide-details":!e.errors.first_name,"error-messages":e.errors&&e.errors.first_name?e.errors.first_name[0]:"",label:"First Name *"},model:{value:e.payload.first_name,callback:function(t){e.$set(e.payload,"first_name",t)},expression:"payload.first_name"}})],1),e._v(" "),t(c.a,{attrs:{cols:"12",sm:"6",md:"4",lg:"6"}},[t(x.a,{attrs:{dense:"",outlined:"","hide-details":!e.errors.last_name,"error-messages":e.errors&&e.errors.last_name?e.errors.last_name[0]:"",label:"Last Name *"},model:{value:e.payload.last_name,callback:function(t){e.$set(e.payload,"last_name",t)},expression:"payload.last_name"}})],1),e._v(" "),t(c.a,{attrs:{cols:"12",sm:"6",md:"4",lg:"4"}},[t(x.a,{attrs:{dense:"",outlined:"","hide-details":!e.errors.phone_number,"error-messages":e.errors&&e.errors.phone_number?e.errors.phone_number[0]:"",label:"Phone Number *"},model:{value:e.payload.phone_number,callback:function(t){e.$set(e.payload,"phone_number",t)},expression:"payload.phone_number"}})],1),e._v(" "),t(c.a,{attrs:{cols:"12",sm:"6",md:"4",lg:"4"}},[t(x.a,{attrs:{dense:"",outlined:"","hide-details":!e.errors.visitor_company_name,"error-messages":e.errors&&e.errors.visitor_company_name?e.errors.visitor_company_name[0]:"",label:"Your Company Name *"},model:{value:e.payload.visitor_company_name,callback:function(t){e.$set(e.payload,"visitor_company_name",t)},expression:"payload.visitor_company_name"}})],1),e._v(" "),t(c.a,{attrs:{cols:"12",sm:"4",md:"4",lg:"6"}},[t(y.a,{attrs:{items:e.purposes,dense:"",outlined:"","item-text":"name","item-value":"id","hide-details":!e.errors.purpose_id,label:"Purpose *"},model:{value:e.payload.purpose_id,callback:function(t){e.$set(e.payload,"purpose_id",t)},expression:"payload.purpose_id"}})],1),e._v(" "),t(c.a,{attrs:{cols:"12",sm:"4",md:"4",lg:"6"}},[t(y.a,{attrs:{items:["Male","Female"],dense:"",outlined:"","hide-details":!e.errors.gender,"error-messages":e.errors&&e.errors.gender?e.errors.gender[0]:"",label:"Gender *"},model:{value:e.payload.gender,callback:function(t){e.$set(e.payload,"gender",t)},expression:"payload.gender"}})],1),e._v(" "),t(c.a,{attrs:{cols:"12",sm:"4",md:"4",lg:"4"}},[t(x.a,{attrs:{dense:"",outlined:"","hide-details":!e.errors.email,"error-messages":e.errors&&e.errors.email?e.errors.email[0]:"",label:"Email Address"},model:{value:e.payload.email,callback:function(t){e.$set(e.payload,"email",t)},expression:"payload.email"}})],1),e._v(" "),t(c.a,{attrs:{cols:"12",sm:"6",md:"4",lg:"6"}},[t(h.a,{ref:"visit_from_menu_ref",attrs:{"close-on-content-click":!1,"return-value":e.payload.visit_from,transition:"scale-transition","offset-y":"","min-width":"auto"},on:{"update:returnValue":function(t){return e.$set(e.payload,"visit_from",t)},"update:return-value":function(t){return e.$set(e.payload,"visit_from",t)}},scopedSlots:e._u([{key:"activator",fn:function(r){var o=r.on,n=r.attrs;return[t(x.a,e._g(e._b({attrs:{"hide-details":!e.errors.visit_from,"error-messages":e.errors&&e.errors.visit_from?e.errors.visit_from[0]:"","append-icon":"mdi-calendar",outlined:"",dense:"",readonly:"",label:"Visit From *"},model:{value:e.payload.visit_from,callback:function(t){e.$set(e.payload,"visit_from",t)},expression:"payload.visit_from"}},"v-text-field",n,!1),o))]}}]),model:{value:e.visit_from_menu,callback:function(t){e.visit_from_menu=t},expression:"visit_from_menu"}},[e._v(" "),t(m.a,{attrs:{"no-title":"",scrollable:""},model:{value:e.payload.visit_from,callback:function(t){e.$set(e.payload,"visit_from",t)},expression:"payload.visit_from"}},[t(k.a),e._v(" "),t(o.a,{attrs:{text:"",color:"primary"},on:{click:function(t){e.visit_from_menu=!1}}},[e._v("\n              Cancel\n            ")]),e._v(" "),t(o.a,{attrs:{text:"",color:"primary"},on:{click:function(t){return e.$refs.visit_from_menu_ref.save(e.payload.visit_from)}}},[e._v("\n              OK\n            ")])],1)],1)],1),e._v(" "),t(c.a,{attrs:{cols:"12",sm:"6",md:"4",lg:"6"}},[t(h.a,{ref:"visit_to_menu_ref",attrs:{"close-on-content-click":!1,"return-value":e.payload.visit_to,transition:"scale-transition","offset-y":"","min-width":"auto"},on:{"update:returnValue":function(t){return e.$set(e.payload,"visit_to",t)},"update:return-value":function(t){return e.$set(e.payload,"visit_to",t)}},scopedSlots:e._u([{key:"activator",fn:function(r){var o=r.on,n=r.attrs;return[t(x.a,e._g(e._b({attrs:{"hide-details":!e.errors.visit_to,"error-messages":e.errors&&e.errors.visit_to?e.errors.visit_to[0]:"","append-icon":"mdi-calendar",outlined:"",dense:"",readonly:"",label:"Visit To *"},model:{value:e.payload.visit_to,callback:function(t){e.$set(e.payload,"visit_to",t)},expression:"payload.visit_to"}},"v-text-field",n,!1),o))]}}]),model:{value:e.visit_to_menu,callback:function(t){e.visit_to_menu=t},expression:"visit_to_menu"}},[e._v(" "),t(m.a,{attrs:{"no-title":"",scrollable:""},model:{value:e.payload.visit_to,callback:function(t){e.$set(e.payload,"visit_to",t)},expression:"payload.visit_to"}},[t(k.a),e._v(" "),t(o.a,{attrs:{text:"",color:"primary"},on:{click:function(t){e.visit_to_menu=!1}}},[e._v("\n              Cancel\n            ")]),e._v(" "),t(o.a,{attrs:{text:"",color:"primary"},on:{click:function(t){return e.$refs.visit_to_menu_ref.save(e.payload.visit_to)}}},[e._v("\n              OK\n            ")])],1)],1)],1),e._v(" "),t(c.a,{attrs:{cols:"12",sm:"6",md:"4",lg:"6"}},[t("SnippetsTimePickerV1",{attrs:{label:"Entry Time *",default_value:e.payload.time_in},on:{getTime:function(t){return e.payload.time_in=t}}})],1),e._v(" "),t(c.a,{attrs:{cols:"12",sm:"6",md:"4",lg:"6"}},[t("SnippetsTimePickerV1",{attrs:{label:"Exit Time *",default_value:e.payload.time_out},on:{getTime:function(t){return e.payload.time_out=t}}})],1),e._v(" "),t(c.a,{attrs:{cols:"12"}},[t("b",[e._v("Enter Host Details")])]),e._v(" "),t(c.a,{attrs:{cols:"12",sm:"6",md:"4",lg:"6"}},[t(x.a,{attrs:{dense:"",outlined:"","hide-details":!e.errors.host_flat_number,"error-messages":e.errors&&e.errors.host_flat_number?e.errors.host_flat_number[0]:"",label:"Flat Number *"},model:{value:e.payload.host_flat_number,callback:function(t){e.$set(e.payload,"host_flat_number",t)},expression:"payload.host_flat_number"}})],1),e._v(" "),t(c.a,{attrs:{cols:"12",sm:"6",md:"4",lg:"6"}},[t(x.a,{attrs:{dense:"",outlined:"","hide-details":!e.errors.host_company_name,"error-messages":e.errors&&e.errors.host_company_name?e.errors.host_company_name[0]:"",label:"Host Company Name"},model:{value:e.payload.host_company_name,callback:function(t){e.$set(e.payload,"host_company_name",t)},expression:"payload.host_company_name"}})],1),e._v(" "),t(c.a,{attrs:{cols:"12",sm:"6",md:"4",lg:"6"}},[t(x.a,{attrs:{dense:"",outlined:"","hide-details":!e.errors.host_name,"error-messages":e.errors&&e.errors.host_name?e.errors.host_name[0]:"",label:"Host Name"},model:{value:e.payload.host_name,callback:function(t){e.$set(e.payload,"host_name",t)},expression:"payload.host_name"}})],1),e._v(" "),t(c.a,{attrs:{cols:"12",sm:"6",md:"4",lg:"6"}},[t(x.a,{attrs:{dense:"",outlined:"","hide-details":!e.errors.host_phone_number,"error-messages":e.errors&&e.errors.host_phone_number?e.errors.host_phone_number[0]:"",label:"Phone Number"},model:{value:e.payload.host_phone_number,callback:function(t){e.$set(e.payload,"host_phone_number",t)},expression:"payload.host_phone_number"}})],1),e._v(" "),t(c.a,{attrs:{cols:"12",sm:"6",md:"4",lg:"6"}},[t(x.a,{attrs:{dense:"",outlined:"","hide-details":!e.errors.host_email,"error-messages":e.errors&&e.errors.host_email?e.errors.host_email[0]:"",label:"Host Email Address"},model:{value:e.payload.host_email,callback:function(t){e.$set(e.payload,"host_email",t)},expression:"payload.host_email"}})],1),e._v(" "),t(c.a,{attrs:{cols:"12"}},[t(o.a,{attrs:{block:"",loading:e.loading,color:"primary"},on:{click:e.submit}},[e._v("\n          Submit\n        ")])],1)],1)],1)],2)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{SnippetsCamera:r(1072).default,SnippetsTimePickerV1:r(962).default})},886:function(e,t,r){"use strict";r.d(t,"a",(function(){return c})),r.d(t,"b",(function(){return l}));var o=r(99),n=r(1),l=Object(n.k)("v-toolbar__title"),c=Object(n.k)("v-toolbar__items");o.a},962:function(e,t,r){"use strict";r.r(t);var o=r(117),n=r(539),l=r(336),c=r(211),d=r(10),m=r(341),_=r(888),v=r(538),h=r(221),f=(r(64),r(44),r(37),{props:["label","default_value"],data:function(){return{menu:!1,selectedHour:1,selectedMinute:0,selectedPeriod:null,hours:[1,2,3,4,5,6,7,8,9,10,11,12],minutes:Array.from({length:60},(function(e,i){return i})),periods:["AM","PM"],finalTime:null}},created:function(){this.finalTime=this.default_value,this.$emit("getTime",this.default_value)},methods:{setPeriod:function(e){this.selectedHour="PM"==this.periods[e]?12+this.selectedHour:this.selectedHour-12,this.setFinalTime()},setHour:function(e){this.selectedPeriod&&"PM"==this.periods[e]?this.selectedHour=12+e:this.selectedHour=e,this.setFinalTime()},setMinute:function(e){this.selectedMinute=e,this.setFinalTime()},setFinalTime:function(){this.selectedHour>23?this.selectedHour=this.selectedHour-12:this.selectedHour<0&&(this.selectedHour=this.selectedHour+12);var e=this.selectedHour,t=this.selectedMinute;this.finalTime="".concat(e<10?"0".concat(e):e,":").concat(t<10?"0".concat(t):t),this.$emit("getTime",this.finalTime)}}}),y=r(60),component=Object(y.a)(f,(function(){var e=this,t=e._self._c;return t(_.a,{attrs:{"offset-y":"","close-on-content-click":!1},scopedSlots:e._u([{key:"activator",fn:function(r){var o=r.on,n=r.attrs;return[t(h.a,e._g(e._b({attrs:{"append-icon":"mdi-clock-time-four-outline",outlined:"",dense:"",readonly:"","hide-details":"",label:e.label},model:{value:e.finalTime,callback:function(t){e.finalTime=t},expression:"finalTime"}},"v-text-field",n,!1),o))]}}]),model:{value:e.menu,callback:function(t){e.menu=t},expression:"menu"}},[e._v(" "),t(v.a,{staticClass:"pa-2 mx-auto",attrs:{witdh:"",align:"center","no-gutters":"",justify:"center"}},[t(n.a,[t(l.a,{staticClass:"text-center",staticStyle:{overflow:"scroll"},attrs:{outlined:"",dense:"",height:"200"}},[t("div",{staticClass:"mx-auto"},[t("b",[e._v("Hours ")])]),e._v(" "),t(m.a,{attrs:{color:"primary"}},e._l(e.hours,(function(r,i){return t(c.a,{key:i},[t(d.a,[t(d.c,{on:{click:function(t){return e.setHour(r)}}},[e._v(e._s(r))])],1)],1)})),1)],1)],1),e._v(" "),t(n.a,[t(l.a,{staticClass:"text-center",staticStyle:{overflow:"scroll"},attrs:{outlined:"",dense:"",height:"200"}},[t("div",{staticClass:"mx-auto"},[t("b",[e._v("Minutes ")])]),e._v(" "),t(m.a,{attrs:{color:"primary"}},e._l(e.minutes,(function(r,i){return t(c.a,{key:i},[t(d.a,[t(d.c,{on:{click:function(t){return e.setMinute(r)}}},[e._v(e._s(r))])],1)],1)})),1)],1)],1),e._v(" "),t(n.a,[t(l.a,{staticClass:"text-center",staticStyle:{overflow:"scroll"},attrs:{outlined:"",dense:"",height:"200"}},[t(m.a,{attrs:{color:"primary"}},[e._l(e.periods,(function(r,o){return t(c.a,{key:o},[t(d.a,[t(d.c,{on:{click:function(t){return e.setPeriod(o)}}},[t("b",[e._v("\n                  "+e._s(r)+"\n                ")])])],1)],1)})),e._v(" "),t(c.a,[t(d.a,[t(d.c,[t("b")])],1)],1),e._v(" "),t(o.a,{staticClass:"primary",attrs:{large:""},on:{click:function(t){e.menu=!1}}},[e._v("Ok")])],2)],1)],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports}}]);