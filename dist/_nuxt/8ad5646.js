(window.webpackJsonp=window.webpackJsonp||[]).push([[144],{1125:function(t,e,n){"use strict";n.r(e);var o=n(114),r=n(133),c=n(87),l=n(518),d=n(147),h=n(212),v=n(870),_=n(517),m=n(349),w=n(993),f=n(96),x=(n(37),n(3)),y=(n(35),n(894),n(908)),O={components:{VueCropper:n.n(y).a},props:["employeeObject"],data:function(){var t;return t={switchValue:!0,image:"",mime_type:"",cropedImage:"",cropper:"",autoCrop:!1,selectedFile:"",upload_edit:{name:""},drawer:!1,group:null,attrs:[],dialog:!1,editDialog:!1,tab:null,m:!1,expand:!1,expand2:!1,boilerplate:!1,right:!0,rightDrawer:!1},Object(x.a)(t,"tab",null),Object(x.a)(t,"selectedItem",1),Object(x.a)(t,"on",""),Object(x.a)(t,"color","background"),Object(x.a)(t,"files",""),Object(x.a)(t,"Model","Employee"),Object(x.a)(t,"endpoint","employee"),Object(x.a)(t,"search",""),Object(x.a)(t,"loading",!1),Object(x.a)(t,"total",0),Object(x.a)(t,"next_page_url",""),Object(x.a)(t,"prev_page_url",""),Object(x.a)(t,"current_page",1),Object(x.a)(t,"per_page",8),Object(x.a)(t,"response",""),Object(x.a)(t,"ListName",""),Object(x.a)(t,"snackbar",!1),Object(x.a)(t,"btnLoader",!1),Object(x.a)(t,"max_employee",0),Object(x.a)(t,"employee",{title:"",display_name:"",employee_id:"",system_user_id:"",profile_picture:"",employee_role_id:""}),Object(x.a)(t,"upload",{name:""}),Object(x.a)(t,"previewImage",null),Object(x.a)(t,"snackbar",!1),Object(x.a)(t,"ids",[]),Object(x.a)(t,"loading",!1),Object(x.a)(t,"total",0),Object(x.a)(t,"titleItems",["Mr","Mrs","Miss","Ms","Dr"]),Object(x.a)(t,"editedIndex",-1),Object(x.a)(t,"response",""),Object(x.a)(t,"departments",[]),Object(x.a)(t,"sub_departments",[]),Object(x.a)(t,"designations",[]),Object(x.a)(t,"roles",[]),Object(x.a)(t,"data",[]),Object(x.a)(t,"errors",[]),Object(x.a)(t,"departments",[]),Object(x.a)(t,"department_id",""),Object(x.a)(t,"payloadOptions",{}),Object(x.a)(t,"last_login",{}),Object(x.a)(t,"document_list",[]),t},created:function(){this.payloadOptions={params:{per_page:1e3,company_id:this.$auth.user.company_id}},this.getDepartments(),this.getSubDepartments(),this.getDesignations(),this.getRoles(),this.getLastLogin();try{var t=this.$route.params.id;t&&this.editItemId(t)}catch(t){}},mounted:function(){},watch:{dialog:function(t){t||this.close()},options:{handler:function(){this.getDataFromApi()},deep:!0},group:function(){this.drawer=!1}},computed:{formatJoiningDate:function(){var t=new Date,e=this.employeeObject.joining_date;e&&(t=new Date(e));var n=t.getDate(),o=t.toLocaleString("default",{month:"long"}),r=t.getFullYear(),c=this.setDaySuffix(n);return"<p>".concat(n,"<sup>").concat(c,"</sup> ").concat(o," ").concat(r,"</p>")}},methods:{getLastLogin:function(){var t=this;this.employeeObject&&this.$axios.get("activity/".concat(this.employeeObject.user_id,"?action=Login&company_id=").concat(this.$auth.user.company_id)).then((function(e){var data=e.data;t.last_login=data.date_time}))},closeParentDialog:function(){this.$emit("close-parent-dialog")},openDocumentDrawer:function(){var t=this;this.drawer=!0,this.$axios.get("documentinfo/".concat(this.employeeObject.id)).then((function(e){var data=e.data;t.document_list=data}))},formatDate:function(t){var e=new Date;t&&(e=new Date(t));var n=e.getDate(),o=e.getMonth()+1,r=e.getFullYear();return"".concat(n,"/").concat(o,"/").concat(r)},setDaySuffix:function(t){switch(t){case 1:case 21:case 31:return"st";case 2:case 22:return"nd";case 3:case 23:return"rd";default:return"th"}},getDepartments:function(){var t=this;this.$axios.get("departments",this.payloadOptions).then((function(e){var data=e.data;t.departments=data.data}))},getSubDepartments:function(){var t=this;this.$axios.get("sub-departments",this.payloadOptions).then((function(e){var data=e.data;t.sub_departments=data.data}))},getDesignations:function(){var t=this;this.$axios.get("designation",this.payloadOptions).then((function(e){var data=e.data;t.designations=data.data}))},getRoles:function(){var t=this;this.payloadOptions.params.role_type="employee",this.$axios.get("role",this.payloadOptions).then((function(e){var data=e.data;t.roles=data.data}))},can:function(){return!0},close:function(){this.dialog=!1}}},j=n(116),component=Object(j.a)(O,(function(){var t,e,n,x=this,y=x._self._c;return y(r.a,[y(f.a,{staticClass:"primary white--text background",attrs:{dense:"",dark:""}},[x._v("Profile Details\n    "),y(m.a),x._v(" "),y(o.a,{staticClass:"primary",attrs:{small:""},on:{click:x.openDocumentDrawer}},[x._v("Documents "),y(d.a,{attrs:{small:""}},[x._v("\n        mdi-file\n        ")])],1),x._v("\n     \n    "),y(d.a,{attrs:{outlined:"",dark:"",color:"white"},on:{click:x.closeParentDialog}},[x._v("\n      mdi mdi-close-circle\n    ")])],1),x._v(" "),y(c.c,[y(_.a,{staticClass:"pt-5"},[y(l.a,{attrs:{cols:"3"}},[y("div",{staticClass:"mt-5",staticStyle:{margin:"0 auto",width:"200px"}},[y(h.a,{staticStyle:{width:"100%",height:"200px",border:"1px solid #5fafa3","border-radius":"50%",margin:"0 auto"},attrs:{src:x.employeeObject.profile_picture||"/no-profile-image.jpg"}}),x._v(" "),y("br"),x._v(" "),y("div",{staticClass:"text-center"},[y("strong",[x._v(x._s(x.employeeObject.full_name))])]),x._v(" "),y("div",{staticClass:"text-center"},[y("strong",[x._v("Employee ID: "+x._s(x.employeeObject.employee_id))])]),x._v(" "),y("div",{staticClass:"text-center"},[y("span",{domProps:{innerHTML:x._s(x.formatJoiningDate)}})])],1)]),x._v(" "),y(l.a,{attrs:{cols:"2"}},[y("table",[y("tr",[y("td",[y("strong",[x._v("Display Name ")]),y("br"),x._v(x._s(x.employeeObject.display_name)+"\n            ")])]),x._v(" "),y("tr",[y("td",[y("strong",[x._v("Department ")]),y("br"),x._v(x._s(x.employeeObject.department.name)+"\n            ")])]),x._v(" "),y("tr",[y("td",[y("strong",[x._v("Sub Department ")]),y("br"),x._v(x._s(x.employeeObject.sub_department.name)+"\n            ")])]),x._v(" "),y("tr",[y("td",[y("strong",[x._v("Designation ")]),y("br"),x._v(x._s(x.employeeObject.designation.name)+"\n            ")])]),x._v(" "),y("tr",[y("td",[y("strong",[x._v("Role ")]),y("br"),x._v(x._s((null===(t=x.employeeObject)||void 0===t||null===(e=t.user)||void 0===e||null===(n=e.role)||void 0===n?void 0:n.name)||"---")+"\n            ")])])])]),x._v(" "),y(l.a,{attrs:{cols:"2"}},[y("table",[y("tr",[y("td",[y("strong",[x._v("Contact")]),y("br"),x._v("\n              "+x._s(x.employeeObject.phone_number||"---")+"\n              "),y("br"),x._v("\n              "+x._s(x.employeeObject.local_email||"---")+"\n            ")])]),x._v(" "),y("tr",[y("td",[y("strong",[x._v("Address")]),y("br"),x._v(x._s(x.employeeObject.local_address||"---")+"\n              "),y("br"),x._v("\n              "+x._s(x.employeeObject.local_city||"---")+"\n              "),x.employeeObject.local_city?y("span",[x._v(",")]):x._e(),x._v("\n              "+x._s(x.employeeObject.local_country||"---")+"\n            ")])]),x._v(" "),y("tr",[y("td",[y("strong",[x._v("Qualification")]),y("br"),x._v(x._s(x.employeeObject.qualification.certificate)+"\n            ")])]),x._v(" "),y("tr",[y("td",[y("strong",[x._v("Bank")]),x._v(" "),y("br"),x._v("\n              "+x._s(x.employeeObject.bank.bank_name)+"\n              "),y("br"),x._v("\n              "+x._s(x.employeeObject.bank.address)+"\n              "),y("br"),x._v("\n              "+x._s(x.employeeObject.bank.account_no)+"\n            ")])])])]),x._v(" "),y(l.a,{staticStyle:{"max-width":"20%"},attrs:{cols:"3"}},[y("table",[y("tr",[y("td",[y("strong",[x._v("Timezone")]),y("br"),x._v(x._s(x.employeeObject.timezone.timezone_name)+"\n            ")])]),x._v(" "),y("tr",[y("td",[y("strong",[x._v("Passport : "+x._s(x.employeeObject.passport.country)+" ")]),y("br"),x._v("\n              "+x._s(x.employeeObject.passport.passport_no)),y("br"),x._v("Expired on\n              "),x.employeeObject.passport.expiry_date?y("span",[x._v("\n                "+x._s(x.formatDate(x.employeeObject.passport.expiry_date)))]):y("span",[x._v(" --- ")])])]),x._v(" "),y("tr",[y("td",[y("strong",[x._v("Emirates ID ")]),y("br"),x._v(x._s(x.employeeObject.emirate.emirate_id)),y("br"),x._v("Expired on\n              "),x.employeeObject.emirate.expiry?y("span",[x._v("\n                "+x._s(x.formatDate(x.employeeObject.emirate.expiry)))]):y("span",[x._v(" --- ")])])])])]),x._v(" "),y(l.a,{attrs:{cols:"2"}},[y("table",[y("tr",[y("td",[y("div",{staticStyle:{display:"flex","align-items":"center",height:"30px"}},[y("strong",{staticStyle:{width:"70px"}},[x._v("Web Login")]),x._v(" "),y(w.a,{attrs:{disabled:""},model:{value:x.employeeObject.status,callback:function(t){x.$set(x.employeeObject,"status",t)},expression:"employeeObject.status"}})],1),x._v("\n              Last Login :\n              "+x._s(x.last_login)+"\n              ")])]),x._v(" "),y("tr",[y("td",[y("div",{staticStyle:{display:"flex","align-items":"center",height:"30px"}},[y("strong",{staticStyle:{width:"90px"}},[x._v("Mobile Login")]),x._v(" "),y(w.a,{attrs:{disabled:""},model:{value:x.employeeObject.mobile_application,callback:function(t){x.$set(x.employeeObject,"mobile_application",t)},expression:"employeeObject.mobile_application"}})],1)])])])])],1),x._v(" "),y(v.a,{attrs:{bottom:"",temporary:"",right:"",fixed:""},model:{value:x.drawer,callback:function(t){x.drawer=t},expression:"drawer"}},[y(f.a,{staticClass:"background",attrs:{dense:"",dark:""}},[x._v("Documents\n        "),y(m.a),x._v(" "),y(d.a,{attrs:{outlined:"",dark:"",color:"white"},on:{click:function(t){x.drawer=!1}}},[x._v("\n          mdi mdi-close-circle\n        ")])],1),x._v(" "),y("table",{staticStyle:{width:"100%","border-collapse":"collapse",margin:"5px"}},[y("thead",[y("tr",[y("th",{staticStyle:{padding:"8px","text-align":"left","border-bottom":"1px solid #ddd"}},[x._v("\n              Title\n            ")]),x._v(" "),y("th",{staticStyle:{padding:"8px","text-align":"left","border-bottom":"1px solid #ddd"}},[x._v("\n              Document\n            ")])])]),x._v(" "),y("tbody",x._l(x.document_list,(function(t,e){return y("tr",{key:e},[y("td",{staticStyle:{padding:"8px","text-align":"left","border-bottom":"1px solid #ddd"}},[x._v("\n              "+x._s(t.title)+"\n            ")]),x._v(" "),y("td",{staticStyle:{padding:"8px","text-align":"left","border-bottom":"1px solid #ddd"}},[y("a",{attrs:{href:t.attachment,download:"",target:"_blank"}},[y(d.a,{attrs:{color:"primary"}},[x._v(" mdi-download ")])],1)])])})),0)])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports},894:function(t,e,n){var content=n(904);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(22).default)("8f215f56",content,!0,{sourceMap:!1})},904:function(t,e,n){var o=n(21)((function(i){return i[1]}));o.push([t.i,'/*!\n * Cropper.js v1.5.13\n * https://fengyuanchen.github.io/cropperjs\n *\n * Copyright 2015-present Chen Fengyuan\n * Released under the MIT license\n *\n * Date: 2022-11-20T05:30:43.444Z\n */.cropper-container{direction:ltr;font-size:0;line-height:0;position:relative;touch-action:none;-webkit-user-select:none;-moz-user-select:none;user-select:none}.cropper-container img{backface-visibility:hidden;display:block;height:100%;image-orientation:0deg;max-height:none!important;max-width:none!important;min-height:0!important;min-width:0!important;width:100%}.cropper-canvas,.cropper-crop-box,.cropper-drag-box,.cropper-modal,.cropper-wrap-box{bottom:0;left:0;position:absolute;right:0;top:0}.cropper-canvas,.cropper-wrap-box{overflow:hidden}.cropper-drag-box{background-color:#fff;opacity:0}.cropper-modal{background-color:#000;opacity:.5}.cropper-view-box{display:block;height:100%;outline:1px solid #39f;outline-color:rgba(51,153,255,.75);overflow:hidden;width:100%}.cropper-dashed{border:0 dashed #eee;display:block;opacity:.5;position:absolute}.cropper-dashed.dashed-h{border-bottom-width:1px;border-top-width:1px;height:33.33333%;left:0;top:33.33333%;width:100%}.cropper-dashed.dashed-v{border-left-width:1px;border-right-width:1px;height:100%;left:33.33333%;top:0;width:33.33333%}.cropper-center{display:block;height:0;left:50%;opacity:.75;position:absolute;top:50%;width:0}.cropper-center:after,.cropper-center:before{background-color:#eee;content:" ";display:block;position:absolute}.cropper-center:before{height:1px;left:-3px;top:0;width:7px}.cropper-center:after{height:7px;left:0;top:-3px;width:1px}.cropper-face,.cropper-line,.cropper-point{display:block;height:100%;opacity:.1;position:absolute;width:100%}.cropper-face{background-color:#fff;left:0;top:0}.cropper-line{background-color:#39f}.cropper-line.line-e{cursor:ew-resize;right:-3px;top:0;width:5px}.cropper-line.line-n{cursor:ns-resize;height:5px;left:0;top:-3px}.cropper-line.line-w{cursor:ew-resize;left:-3px;top:0;width:5px}.cropper-line.line-s{bottom:-3px;cursor:ns-resize;height:5px;left:0}.cropper-point{background-color:#39f;height:5px;opacity:.75;width:5px}.cropper-point.point-e{cursor:ew-resize;margin-top:-3px;right:-3px;top:50%}.cropper-point.point-n{cursor:ns-resize;left:50%;margin-left:-3px;top:-3px}.cropper-point.point-w{cursor:ew-resize;left:-3px;margin-top:-3px;top:50%}.cropper-point.point-s{bottom:-3px;cursor:s-resize;left:50%;margin-left:-3px}.cropper-point.point-ne{cursor:nesw-resize;right:-3px;top:-3px}.cropper-point.point-nw{cursor:nwse-resize;left:-3px;top:-3px}.cropper-point.point-sw{bottom:-3px;cursor:nesw-resize;left:-3px}.cropper-point.point-se{bottom:-3px;cursor:nwse-resize;height:20px;opacity:1;right:-3px;width:20px}@media (min-width:768px){.cropper-point.point-se{height:15px;width:15px}}@media (min-width:992px){.cropper-point.point-se{height:10px;width:10px}}@media (min-width:1200px){.cropper-point.point-se{height:5px;opacity:.75;width:5px}}.cropper-point.point-se:before{background-color:#39f;bottom:-50%;content:" ";display:block;height:200%;opacity:0;position:absolute;right:-50%;width:200%}.cropper-invisible{opacity:0}.cropper-bg{background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAAA3NCSVQICAjb4U/gAAAABlBMVEXMzMz////TjRV2AAAACXBIWXMAAArrAAAK6wGCiw1aAAAAHHRFWHRTb2Z0d2FyZQBBZG9iZSBGaXJld29ya3MgQ1M26LyyjAAAABFJREFUCJlj+M/AgBVhF/0PAH6/D/HkDxOGAAAAAElFTkSuQmCC")}.cropper-hide{display:block;height:0;position:absolute;width:0}.cropper-hidden{display:none!important}.cropper-move{cursor:move}.cropper-crop{cursor:crosshair}.cropper-disabled .cropper-drag-box,.cropper-disabled .cropper-face,.cropper-disabled .cropper-line,.cropper-disabled .cropper-point{cursor:not-allowed}',""]),o.locals={},t.exports=o},961:function(t,e,n){var content=n(962);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(22).default)("59f225a8",content,!0,{sourceMap:!1})},962:function(t,e,n){var o=n(21)((function(i){return i[1]}));o.push([t.i,".theme--light.v-input--switch .v-input--switch__thumb{color:#fff}.theme--light.v-input--switch .v-input--switch__track{color:rgba(0,0,0,.38)}.theme--light.v-input--switch.v-input--is-disabled:not(.v-input--is-dirty) .v-input--switch__thumb{color:#fafafa!important}.theme--light.v-input--switch.v-input--is-disabled:not(.v-input--is-dirty) .v-input--switch__track{color:rgba(0,0,0,.12)!important}.theme--dark.v-input--switch .v-input--switch__thumb{color:#bdbdbd}.theme--dark.v-input--switch .v-input--switch__track{color:hsla(0,0%,100%,.3)}.theme--dark.v-input--switch.v-input--is-disabled:not(.v-input--is-dirty) .v-input--switch__thumb{color:#424242!important}.theme--dark.v-input--switch.v-input--is-disabled:not(.v-input--is-dirty) .v-input--switch__track{color:hsla(0,0%,100%,.1)!important}.v-input--switch__thumb,.v-input--switch__track{background-color:currentColor;pointer-events:none;transition:inherit}.v-input--switch__track{border-radius:8px;height:14px;left:2px;opacity:.6;position:absolute;right:2px;top:calc(50% - 7px);width:36px}.v-input--switch__thumb{align-items:center;border-radius:50%;display:flex;height:20px;justify-content:center;position:relative;top:calc(50% - 10px);transition:.3s cubic-bezier(.25,.8,.5,1);width:20px}.v-input--switch .v-input--selection-controls__input{transition:opacity .3s cubic-bezier(.25,.8,.5,1);width:38px}.v-input--switch .v-input--selection-controls__ripple{top:calc(50% - 24px)}.v-input--switch.v-input--dense .v-input--switch__thumb{height:18px;width:18px}.v-input--switch.v-input--dense .v-input--switch__track{height:12px;width:32px}.v-input--switch.v-input--dense.v-input--switch--inset .v-input--switch__track{height:22px;left:-3px;top:calc(50% - 12px);width:44px}.v-input--switch.v-input--dense .v-input--selection-controls__ripple{top:calc(50% - 22px)}.v-input--switch.v-input--is-dirty.v-input--is-disabled .v-input--selection-controls__input{opacity:.6}.v-application--is-ltr .v-input--switch .v-input--selection-controls__ripple{left:-14px}.v-application--is-ltr .v-input--switch.v-input--dense .v-input--selection-controls__ripple{left:-12px}.v-application--is-ltr .v-input--switch.v-input--is-dirty .v-input--selection-controls__ripple,.v-application--is-ltr .v-input--switch.v-input--is-dirty .v-input--switch__thumb{transform:translate(20px)}.v-application--is-rtl .v-input--switch .v-input--selection-controls__ripple{right:-14px}.v-application--is-rtl .v-input--switch.v-input--dense .v-input--selection-controls__ripple{right:-12px}.v-application--is-rtl .v-input--switch.v-input--is-dirty .v-input--selection-controls__ripple,.v-application--is-rtl .v-input--switch.v-input--is-dirty .v-input--switch__thumb{transform:translate(-20px)}.v-input--switch:not(.v-input--switch--flat):not(.v-input--switch--inset) .v-input--switch__thumb{box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12)}.v-input--switch--inset .v-input--selection-controls__input,.v-input--switch--inset .v-input--switch__track{width:48px}.v-input--switch--inset .v-input--switch__track{border-radius:14px;height:28px;left:-4px;opacity:.32;top:calc(50% - 14px)}.v-application--is-ltr .v-input--switch--inset .v-input--selection-controls__ripple,.v-application--is-ltr .v-input--switch--inset .v-input--switch__thumb{transform:translate(0)!important}.v-application--is-rtl .v-input--switch--inset .v-input--selection-controls__ripple,.v-application--is-rtl .v-input--switch--inset .v-input--switch__thumb{transform:translate(-6px)!important}.v-application--is-ltr .v-input--switch--inset.v-input--is-dirty .v-input--selection-controls__ripple,.v-application--is-ltr .v-input--switch--inset.v-input--is-dirty .v-input--switch__thumb{transform:translate(20px)!important}.v-application--is-rtl .v-input--switch--inset.v-input--is-dirty .v-input--selection-controls__ripple,.v-application--is-rtl .v-input--switch--inset.v-input--is-dirty .v-input--switch__thumb{transform:translate(-26px)!important}",""]),o.locals={},t.exports=o},993:function(t,e,n){"use strict";n(12),n(14),n(13),n(6),n(17),n(11),n(18);var o=n(107),r=n(3),c=(n(217),n(218),n(524),n(961),n(353)),l=n(73),d=n(121),h=n(134),v=n(267),_=n(1),m=["title"];function w(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?w(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):w(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=c.a.extend({name:"v-switch",directives:{Touch:d.a},props:{inset:Boolean,loading:{type:[Boolean,String],default:!1},flat:{type:Boolean,default:!1}},computed:{classes:function(){return f(f({},l.a.options.computed.classes.call(this)),{},{"v-input--selection-controls v-input--switch":!0,"v-input--switch--flat":this.flat,"v-input--switch--inset":this.inset})},attrs:function(){return{"aria-checked":String(this.isActive),"aria-disabled":String(this.isDisabled),role:"switch"}},validationState:function(){return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0},switchData:function(){return this.setTextColor(this.loading?void 0:this.validationState,{class:this.themeClasses})}},methods:{genDefaultSlot:function(){return[this.genSwitch(),this.genLabel()]},genSwitch:function(){var t=this.attrs$,e=(t.title,Object(o.a)(t,m));return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.genInput("checkbox",f(f({},this.attrs),e)),this.genRipple(this.setTextColor(this.validationState,{directives:[{name:"touch",value:{left:this.onSwipeLeft,right:this.onSwipeRight}}]})),this.$createElement("div",f({staticClass:"v-input--switch__track"},this.switchData)),this.$createElement("div",f({staticClass:"v-input--switch__thumb"},this.switchData),[this.genProgress()])])},genProgress:function(){return this.$createElement(h.c,{},[!1===this.loading?null:this.$slots.progress||this.$createElement(v.a,{props:{color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,size:16,width:2,indeterminate:!0}})])},onSwipeLeft:function(){this.isActive&&this.onChange()},onSwipeRight:function(){this.isActive||this.onChange()},onKeydown:function(t){(t.keyCode===_.z.left&&this.isActive||t.keyCode===_.z.right&&!this.isActive)&&this.onChange()}}})}}]);