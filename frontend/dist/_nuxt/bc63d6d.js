(window.webpackJsonp=window.webpackJsonp||[]).push([[352,91,180,189,199],{1181:function(e,o,t){"use strict";t.r(o);var r=t(329),n=t(114),c=t(133),l=t(516),d=t(876),m=t(147),_=t(212),y=t(515),v=t(873),f=t(853),h=t(855),x=t(854),w=t(343),C=t(214),k=(t(37),t(31)),$=t(23),D=(t(88),t(35),{props:["propId"],components:{Back:t(967).default},data:function(){return{originalURL:"https://mytime2cloud.comregister/visitor/walkin/",fullCompanyLink:null,qrCompanyCodeDataURL:null,show_password_confirm:!1,current_password_show:!1,show_password:!1,loading_password:!1,menuIssueDate:!1,menuExpiryDate:!1,IssueDate:null,vertical:!1,id:"",loading:!1,preloader:!0,upload:{name:""},company_payload:{name:"",logo:"",member_from:"",expiry:"",max_branches:"",max_employee:"",max_devices:"",mol_id:"",p_o_box_no:""},company_trade_license:{license_no:"",license_type:"",emirate:"",makeem_no:"",manager:"",issue_date:"",expiry_date:""},contact_payload:{name:"",number:"",position:"",whatsapp:""},user_payload:{password:"",password_confirmation:""},payload:{password:"",current_password:"",password_confirmation:""},geographic_payload:{lat:"",lon:"",location:""},e1:1,errors:[],previewImage:"/no-image.PNG",data:{},response:"",snackbar:!1}},created:function(){var e=this;return Object($.a)(regeneratorRuntime.mark((function o(){return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:e.getDataFromApi(),e.originalURL="http://".concat("192.168.88.30",":").concat("3000","/register/visitor/walkin/"),e.fullCompanyLink=e.originalURL+e.propId;case 3:case"end":return o.stop()}}),o)})))()},methods:{generateCompanyQRCode:function(e){var o=this;return Object($.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.$qrcode.generate(e);case 3:o.qrCompanyCodeDataURL=t.sent,t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),console.error("Error generating QR code:",t.t0);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})))()},can:function(e){return this.$pagePermission.can(e,this)},update_setting:function(){var e,o,t,r=this;this.$axios.post("/company/".concat(null===(e=this.$auth)||void 0===e||null===(o=e.user)||void 0===o||null===(t=o.company)||void 0===t?void 0:t.id,"/update/user"),this.payload).then((function(e){var data=e.data;r.loading=!1,data.status?(r.snackbar=!0,r.response="Setting updated successfully"):r.errors=data.errors})).catch((function(e){return console.log(e)}))},getDataFromApi:function(){var e=this;this.id=this.$auth.user.company_id,this.$axios.get("company/".concat(this.$auth.user.company_id)).then((function(o){var t=o.data.record;e.company_payload=t,e.previewImage=t.logo,e.contact_payload=t.contact,e.user_payload=t.user,t.trade_license&&(e.company_trade_license=t.trade_license);var r=e.formatted_date(t.member_from),n=e.formatted_date(t.expiry);e.company_payload.member_from=r,e.company_payload.expiry=n,e.geographic_payload={lat:e.company_payload.lat,lon:e.company_payload.lon,location:e.company_payload.location},e.preloader=!1}))},formatted_date:function(e){var o=e.split("/"),t=Object(k.a)(o,3),r=t[0],n=t[1],c=t[2];return"".concat(r,"-").concat(n,"-").concat(c)},onpick_attachment:function(){this.$refs.attachment_input.click()},attachment:function(e){var o=this;this.upload.name=e.target.files[0]||"";var t=this.$refs.attachment_input.files;if(t&&t[0]){var r=new FileReader;r.onload=function(e){o.previewImage=e.target.result},r.readAsDataURL(t[0]),this.$emit("input",t[0])}},update_company:function(){var e=new FormData;e.append("name",this.company_payload.name),this.upload.name&&e.append("logo",this.upload.name),e.append("location",this.company_payload.location),e.append("member_from",this.company_payload.member_from),e.append("expiry",this.company_payload.expiry),e.append("max_employee",this.company_payload.max_employee),e.append("max_branches",this.company_payload.max_branches),e.append("max_devices",this.company_payload.max_devices),e.append("mol_id",this.company_payload.mol_id),e.append("p_o_box_no",this.company_payload.p_o_box_no),this.start_process("/company/".concat(this.id,"/update"),e,"Company")},update_contact:function(){this.start_process("/company/".concat(this.id,"/update/contact"),this.contact_payload,"Contact")},update_license:function(){this.start_process("/company/".concat(this.id,"/trade-license"),this.company_trade_license,"Trade License")},update_geographic:function(){this.start_process("/company/".concat(this.id,"/update/geographic"),this.geographic_payload,"Geographic Info")},update_user:function(){this.start_process("/company/".concat(this.id,"/update/user"),this.user_payload,"User")},start_process:function(e,o,t){var r=this;this.loading=!0,this.$axios.post(e,o).then((function(e){var data=e.data;r.loading=!1,data.status?(r.snackbar=!0,r.response=t+" updated successfully"):r.errors=data.errors})).catch((function(e){return console.log(e)}))}}}),L=t(116),component=Object(L.a)(D,(function(){var e=this,o=e._self._c;return e.can("company_access")?o("div",[e.preloader?o("Preloader"):o("div",[o("div",{staticClass:"text-center ma-2"},[o(v.a,{attrs:{top:"top",color:"secondary",elevation:"24"},model:{value:e.snackbar,callback:function(o){e.snackbar=o},expression:"snackbar"}},[e._v("\n        "+e._s(e.response)+"\n      ")])],1),e._v(" "),o(y.a,[o(l.a,[o(c.a,{staticClass:"mt-2"},[o(x.a,{staticClass:"pt-3",attrs:{vertical:e.vertical}},[o(w.a,{attrs:{color:"violet"}}),e._v(" "),o(f.a,[o(m.a,{attrs:{left:""}},[e._v(" mdi-domain ")]),e._v(" "),o("span",[e._v("Profile")])],1),e._v(" "),o(f.a,[o(m.a,{attrs:{left:""}},[e._v(" mdi-file ")]),e._v(" "),o("span",[e._v("Documents")])],1),e._v(" "),o(f.a,[o(m.a,{attrs:{left:""}},[e._v(" mdi-lock ")]),e._v(" "),o("span",[e._v("Password")])],1),e._v(" "),o(h.a,[o(d.a,{attrs:{fluid:""}},[o(y.a,[o(l.a,{attrs:{cols:"4",md:"4",sm:"4"}},[o(C.a,{attrs:{label:"Company Code",color:"primary",readonly:"",dense:"",outlined:"","hide-details":""},model:{value:e.company_payload.company_code,callback:function(o){e.$set(e.company_payload,"company_code",o)},expression:"company_payload.company_code"}})],1),e._v(" "),o(l.a,{attrs:{cols:"4",md:"4",sm:"4"}},[o(C.a,{attrs:{label:"Company Name",color:"primary",readonly:"",dense:"",outlined:"","hide-details":""},model:{value:e.company_payload.name,callback:function(o){e.$set(e.company_payload,"name",o)},expression:"company_payload.name"}}),e._v(" "),e.errors&&e.errors.name?o("span",{staticClass:"text-danger mt-2"},[e._v(e._s(e.errors.name[0]))]):e._e()],1),e._v(" "),o(l.a,{attrs:{cols:"4",md:"4",sm:"4"}},[o(C.a,{attrs:{label:"Company Email",color:"primary",readonly:"",dense:"",outlined:"","hide-details":""},model:{value:e.user_payload.email,callback:function(o){e.$set(e.user_payload,"email",o)},expression:"user_payload.email"}}),e._v(" "),e.errors&&e.errors.email?o("span",{staticClass:"text-danger mt-2"},[e._v(e._s(e.errors.email[0]))]):e._e()],1),e._v(" "),o(l.a,{attrs:{cols:"6",md:"6",sm:"6"}},[o(C.a,{attrs:{label:"Mol ID",color:"primary",dense:"",outlined:"","hide-details":""},model:{value:e.company_payload.mol_id,callback:function(o){e.$set(e.company_payload,"mol_id",o)},expression:"company_payload.mol_id"}}),e._v(" "),e.errors&&e.errors.mol_id?o("span",{staticClass:"text-danger mt-2"},[e._v(e._s(e.errors.mol_id[0]))]):e._e()],1),e._v(" "),o(l.a,{attrs:{cols:"6",md:"6",sm:"6"}},[o(C.a,{attrs:{label:"P.O Box",color:"primary",dense:"",outlined:"","hide-details":""},model:{value:e.company_payload.p_o_box_no,callback:function(o){e.$set(e.company_payload,"p_o_box_no",o)},expression:"company_payload.p_o_box_no"}}),e._v(" "),e.errors&&e.errors.p_o_box_no?o("span",{staticClass:"text-danger mt-2"},[e._v(e._s(e.errors.p_o_box_no[0]))]):e._e()],1),e._v(" "),o(l.a,{attrs:{cols:"6",md:"6",sm:"6"}},[o(C.a,{attrs:{label:"Member From",color:"primary",readonly:"",dense:"",outlined:"","hide-details":""},model:{value:e.company_payload.member_from,callback:function(o){e.$set(e.company_payload,"member_from",o)},expression:"company_payload.member_from"}}),e._v(" "),e.errors&&e.errors.member_from?o("span",{staticClass:"text-danger mt-2"},[e._v(e._s(e.errors.member_from[0]))]):e._e()],1),e._v(" "),o(l.a,{attrs:{cols:"6",md:"6",sm:"6"}},[o(C.a,{attrs:{label:"Expiry Date",color:"primary",readonly:"",dense:"",outlined:"","hide-details":""},model:{value:e.company_payload.expiry,callback:function(o){e.$set(e.company_payload,"expiry",o)},expression:"company_payload.expiry"}}),e._v(" "),e.errors&&e.errors.expiry?o("span",{staticClass:"text-danger mt-2"},[e._v(e._s(e.errors.expiry[0]))]):e._e()],1),e._v(" "),o(l.a,{attrs:{cols:"4",md:"4",sm:"4"}},[o(C.a,{attrs:{label:"Max Branches",color:"primary",readonly:"",dense:"",outlined:"","hide-details":""},model:{value:e.company_payload.max_branches,callback:function(o){e.$set(e.company_payload,"max_branches",o)},expression:"company_payload.max_branches"}}),e._v(" "),e.errors&&e.errors.max_branches?o("span",{staticClass:"text-danger mt-2"},[e._v(e._s(e.errors.max_branches[0]))]):e._e()],1),e._v(" "),o(l.a,{attrs:{cols:"4",md:"4",sm:"4"}},[o(C.a,{attrs:{label:"Max Employees",color:"primary",readonly:"",dense:"",outlined:"","hide-details":""},model:{value:e.company_payload.max_employee,callback:function(o){e.$set(e.company_payload,"max_employee",o)},expression:"company_payload.max_employee"}}),e._v(" "),e.errors&&e.errors.max_employee?o("span",{staticClass:"text-danger mt-2"},[e._v(e._s(e.errors.max_employee[0]))]):e._e()],1),e._v(" "),o(l.a,{attrs:{cols:"4",md:"4",sm:"4"}},[o(C.a,{attrs:{label:"Max Devices",color:"primary",readonly:"",dense:"",outlined:"","hide-details":""},model:{value:e.company_payload.max_devices,callback:function(o){e.$set(e.company_payload,"max_devices",o)},expression:"company_payload.max_devices"}}),e._v(" "),e.errors&&e.errors.max_devices?o("span",{staticClass:"text-danger mt-2"},[e._v(e._s(e.errors.max_devices[0]))]):e._e()],1),e._v(" "),o(l.a,{attrs:{cols:"2",md:"2",sm:"2"}},[o("div",{staticClass:"text-center"},[o(r.a,{attrs:{size:"175"}},[o(_.a,{staticStyle:{width:"100%"},attrs:{src:e.previewImage},on:{click:e.onpick_attachment}})],1)],1),e._v(" "),o(n.a,{staticClass:"mt-2",attrs:{block:"",outlined:"",small:"",color:"primary"},on:{click:e.onpick_attachment}},[e._v(e._s(e.upload.name?"Logo Uploaded":"Upload Logo")+"\n                    ")]),e._v(" "),o("input",{ref:"attachment_input",staticStyle:{display:"none"},attrs:{required:"",type:"file",accept:"image/*"},on:{change:e.attachment}}),e._v(" "),e.errors&&e.errors.logo?o("span",{staticClass:"text-danger mt-2"},[e._v(e._s(e.errors.logo[0]))]):e._e()],1),e._v(" "),o(l.a,{attrs:{cols:"12"}},[o("div",{staticClass:"text-right"},[e.can("company_edit")?o(n.a,{attrs:{small:"",loading:e.loading,color:"primary"},on:{click:e.update_company}},[e._v("\n                        Submit\n                      ")]):e._e()],1)])],1)],1)],1),e._v(" "),o(h.a,[o("Document")],1),e._v(" "),o(h.a,[o(d.a,{attrs:{fluid:""}},[o(y.a,[o(l.a,{attrs:{cols:"12"}},[o("label",{staticClass:"col-form-label"},[e._v("Current Password\n                      "),o("span",{staticClass:"text-danger"},[e._v("*")])]),e._v(" "),o(C.a,{staticClass:"input-group--focused",attrs:{dense:"",outlined:"","hide-details":!e.errors.current_password,"append-icon":e.current_password_show?"mdi-eye":"mdi-eye-off",type:e.current_password_show?"text":"password",error:e.errors.current_password,"error-messages":e.errors&&e.errors.current_password?e.errors.current_password:""},on:{"click:append":function(o){e.current_password_show=!e.current_password_show}},model:{value:e.payload.current_password,callback:function(o){e.$set(e.payload,"current_password",o)},expression:"payload.current_password"}})],1),e._v(" "),o(l.a,{attrs:{md:"12",sm:"12",cols:"12",dense:""}},[o("label",{staticClass:"col-form-label"},[e._v("New Password "),o("span",{staticClass:"text-danger"},[e._v("*")])]),e._v(" "),o(C.a,{staticClass:"input-group--focused",attrs:{dense:"",outlined:"","hide-details":!e.errors.password,"append-icon":e.show_password?"mdi-eye":"mdi-eye-off",type:e.show_password?"text":"password",error:e.errors.password,"error-messages":e.errors&&e.errors.password?e.errors.password[0]:""},on:{"click:append":function(o){e.show_password=!e.show_password}},model:{value:e.payload.password,callback:function(o){e.$set(e.payload,"password",o)},expression:"payload.password"}})],1),e._v(" "),o(l.a,{attrs:{md:"12",sm:"12",cols:"12",dense:""}},[o("label",{staticClass:"col-form-label"},[e._v("Confirm Password\n                      "),o("span",{staticClass:"text-danger"},[e._v("*")])]),e._v(" "),o(C.a,{staticClass:"input-group--focused",attrs:{dense:"",outlined:"","hide-details":!e.errors.password_confirmation,"append-icon":e.show_password_confirm?"mdi-eye":"mdi-eye-off",type:e.show_password_confirm?"text":"password",error:e.errors.show_password_confirm,"error-messages":e.errors&&e.errors.show_password_confirm?e.errors.show_password_confirm[0]:""},on:{"click:append":function(o){e.show_password_confirm=!e.show_password_confirm}},model:{value:e.payload.password_confirmation,callback:function(o){e.$set(e.payload,"password_confirmation",o)},expression:"payload.password_confirmation"}})],1),e._v(" "),o(l.a,{attrs:{cols:"12"}},[o("div",{staticClass:"text-right"},[e.can("setting_company_change_password_access")?o(n.a,{attrs:{dark:"",small:"",loading:e.loading_password,color:"primary"},on:{click:e.update_setting}},[e._v("\n                        Submit\n                      ")]):e._e()],1)])],1)],1)],1),e._v(" "),o(h.a,[o(d.a,[o("div",[e.qrCompanyCodeDataURL?o(r.a,{attrs:{size:"150",tile:""}},[o("img",{attrs:{src:e.qrCompanyCodeDataURL,alt:"Avatar"}})]):e._e()],1),e._v(" "),o("span",[o("a",{attrs:{href:"".concat(e.fullCompanyLink),target:"_blank"}},[e._v("\n                    "+e._s(e.fullCompanyLink)+"\n                  ")])])])],1)],1)],1)],1)],1)],1)],1):o("NoAccess")}),[],!1,null,null,null);o.default=component.exports;installComponents(component,{Document:t(1256).default,Preloader:t(898).default,NoAccess:t(881).default})},1791:function(e,o,t){"use strict";t.r(o);var r=t(116),component=Object(r.a)({},(function(){return(0,this._self._c)("CompanyProfile",{attrs:{propId:this.$route.params.id}})}),[],!1,null,null,null);o.default=component.exports;installComponents(component,{CompanyProfile:t(1181).default})},881:function(e,o,t){"use strict";t.r(o);var r=t(116),component=Object(r.a)({},(function(){this._self._c;return this._m(0)}),[function(){var e=this._self._c;return e("div",{staticClass:"text-center",staticStyle:{"margin-top":"25%"}},[e("b",[this._v("No Access")])])}],!1,null,null,null);o.default=component.exports},898:function(e,o,t){"use strict";t.r(o);var r=t(212),n=t(116),component=Object(n.a)({},(function(){var e=this._self._c;return e("div",{staticClass:"text-center",staticStyle:{width:"50px",margin:"25% auto"}},[e(r.a,{attrs:{src:"/preloaders/1.gif"}})],1)}),[],!1,null,null,null);o.default=component.exports},967:function(e,o,t){"use strict";t.r(o);var r={props:["color"],methods:{goBack:function(){window.history.back()}}},n=t(116),component=Object(n.a)(r,(function(){return(0,this._self._c)("div")}),[],!1,null,null,null);o.default=component.exports}}]);