(window.webpackJsonp=window.webpackJsonp||[]).push([[244,36],{1023:function(e,t,r){var content=r(1024);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(22).default)("1c8f4490",content,!0,{sourceMap:!1})},1024:function(e,t,r){var o=r(21)((function(i){return i[1]}));o.push([e.i,'.theme--light.v-alert .v-alert--prominent .v-alert__icon:after{background:rgba(0,0,0,.12)}.theme--dark.v-alert .v-alert--prominent .v-alert__icon:after{background:hsla(0,0%,100%,.12)}.v-sheet.v-alert{border-radius:4px}.v-sheet.v-alert:not(.v-sheet--outlined){box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)}.v-sheet.v-alert.v-sheet--shaped{border-radius:24px 4px}.v-alert{display:block;font-size:16px;margin-bottom:16px;padding:16px;position:relative;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-alert:not(.v-sheet--tile){border-radius:4px}.v-application--is-ltr .v-alert>.v-alert__content,.v-application--is-ltr .v-alert>.v-icon{margin-right:16px}.v-application--is-rtl .v-alert>.v-alert__content,.v-application--is-rtl .v-alert>.v-icon{margin-left:16px}.v-application--is-ltr .v-alert>.v-icon+.v-alert__content{margin-right:0}.v-application--is-rtl .v-alert>.v-icon+.v-alert__content{margin-left:0}.v-application--is-ltr .v-alert>.v-alert__content+.v-icon{margin-right:0}.v-application--is-rtl .v-alert>.v-alert__content+.v-icon{margin-left:0}.v-alert__border{border-style:solid;border-width:4px;content:"";position:absolute}.v-alert__border:not(.v-alert__border--has-color){opacity:.26}.v-alert__border--left,.v-alert__border--right{bottom:0;top:0}.v-alert__border--bottom,.v-alert__border--top{left:0;right:0}.v-alert__border--bottom{border-bottom-left-radius:inherit;border-bottom-right-radius:inherit;bottom:0}.v-application--is-ltr .v-alert__border--left{border-bottom-left-radius:inherit;border-top-left-radius:inherit;left:0}.v-application--is-ltr .v-alert__border--right,.v-application--is-rtl .v-alert__border--left{border-bottom-right-radius:inherit;border-top-right-radius:inherit;right:0}.v-application--is-rtl .v-alert__border--right{border-bottom-left-radius:inherit;border-top-left-radius:inherit;left:0}.v-alert__border--top{border-top-left-radius:inherit;border-top-right-radius:inherit;top:0}.v-alert__content{flex:1 1 auto}.v-application--is-ltr .v-alert__dismissible{margin:-16px -8px -16px 8px}.v-application--is-rtl .v-alert__dismissible{margin:-16px 8px -16px -8px}.v-alert__icon{align-self:flex-start;border-radius:50%;height:24px;min-width:24px;position:relative}.v-application--is-ltr .v-alert__icon{margin-right:16px}.v-application--is-rtl .v-alert__icon{margin-left:16px}.v-alert__icon.v-icon{font-size:24px}.v-alert__wrapper{align-items:center;border-radius:inherit;display:flex}.v-application--is-ltr .v-alert--border.v-alert--prominent .v-alert__icon{margin-left:8px}.v-application--is-rtl .v-alert--border.v-alert--prominent .v-alert__icon{margin-right:8px}.v-alert--dense{padding-bottom:8px;padding-top:8px}.v-alert--dense .v-alert__border{border-width:medium}.v-alert--outlined{background:transparent!important;border:thin solid!important}.v-alert--outlined .v-alert__icon{color:inherit!important}.v-alert--prominent .v-alert__icon{align-self:center;height:48px;min-width:48px}.v-alert--prominent .v-alert__icon.v-icon{font-size:32px}.v-alert--prominent .v-alert__icon.v-icon:after{background:currentColor!important;border-radius:50%;bottom:0;content:"";left:0;opacity:.16;position:absolute;right:0;top:0}.v-alert--prominent.v-alert--dense .v-alert__icon.v-icon:after{transform:scale(1)}.v-alert--text{background:transparent!important}.v-alert--text:before{background-color:currentColor;border-radius:inherit;bottom:0;content:"";left:0;opacity:.12;pointer-events:none;position:absolute;right:0;top:0}',""]),o.locals={},e.exports=o},1111:function(e,t,r){"use strict";r.r(t);var o=r(1124),n=r(114),l=r(133),c=r(87),d=r(518),h=r(875),m=r(350),v=r(147),f=r(972),_=r(971),y=r(517),x=r(214),O=r(23),w=r(3),j=(r(88),r(895),r(909)),C={props:["item"],components:{VueCropper:r.n(j).a},data:function(){var e;return e={parkings:[],room_categories:[],room_sub_categories:[],filtered_room_sub_categories:[],disabled:!1,step:1,payload:{term:"Long Term",gender:"Male",full_name:"",phone_number:"",floor_id:"",room_id:"",start_date:"",end_date:"",member_type:"Family Member"},imagePreview:"/no-profile-image.jpg",setImagePreview:null,imageMemberPreview:"/no-profile-image.jpg",tab:null,totalRowsCount:0,filters:{},isFilter:!1,sortBy:"id",sortDesc:!1,snack:!1,snackColor:"",snackText:"",loadinglinear:!0,displayErrormsg:!1,image:"",mime_type:"",cropedImage:"",cropper:"",autoCrop:!1,dialogCropping:!1,tabMenu:[]},Object(w.a)(e,"tab","0"),Object(w.a)(e,"employeeId",0),Object(w.a)(e,"employeeObject",{}),Object(w.a)(e,"attrs",[]),Object(w.a)(e,"dialog",!1),Object(w.a)(e,"editDialog",!1),Object(w.a)(e,"viewDialog",!1),Object(w.a)(e,"selectedFile",""),Object(w.a)(e,"dialog",!1),Object(w.a)(e,"memberdialog",!1),Object(w.a)(e,"viewMemberdialog",!1),Object(w.a)(e,"m",!1),Object(w.a)(e,"expand",!1),Object(w.a)(e,"expand2",!1),Object(w.a)(e,"boilerplate",!1),Object(w.a)(e,"right",!0),Object(w.a)(e,"rightDrawer",!1),Object(w.a)(e,"drawer",!0),Object(w.a)(e,"tab",null),Object(w.a)(e,"selectedItem",1),Object(w.a)(e,"on",""),Object(w.a)(e,"files",""),Object(w.a)(e,"search",""),Object(w.a)(e,"loading",!1),Object(w.a)(e,"next_page_url",""),Object(w.a)(e,"prev_page_url",""),Object(w.a)(e,"current_page",1),Object(w.a)(e,"per_page",1e3),Object(w.a)(e,"ListName",""),Object(w.a)(e,"color","background"),Object(w.a)(e,"response",""),Object(w.a)(e,"snackbar",!1),Object(w.a)(e,"btnLoader",!1),Object(w.a)(e,"max_employee",0),Object(w.a)(e,"upload",{name:""}),Object(w.a)(e,"pagination",{current:1,total:0,per_page:10}),Object(w.a)(e,"options",{}),Object(w.a)(e,"Model","Tanent"),Object(w.a)(e,"endpoint","tanent"),Object(w.a)(e,"search",""),Object(w.a)(e,"snackbar",!1),Object(w.a)(e,"ids",[]),Object(w.a)(e,"loading",!1),Object(w.a)(e,"titleItems",["Mr","Mrs","Miss","Ms","Dr"]),Object(w.a)(e,"editedIndex",-1),Object(w.a)(e,"editedItem",{name:""}),Object(w.a)(e,"defaultItem",{name:""}),Object(w.a)(e,"response",""),Object(w.a)(e,"data",[]),Object(w.a)(e,"errors",[]),Object(w.a)(e,"designations",[]),Object(w.a)(e,"roles",[]),Object(w.a)(e,"employees",[]),Object(w.a)(e,"department_filter_id",""),Object(w.a)(e,"dialogVisible",!1),Object(w.a)(e,"formAction","Create"),Object(w.a)(e,"date",new Date(Date.now()-6e4*(new Date).getTimezoneOffset()).toISOString().substr(0,10)),Object(w.a)(e,"menu",!1),Object(w.a)(e,"menu2",!1),Object(w.a)(e,"menu3",!1),Object(w.a)(e,"floors",[]),Object(w.a)(e,"rooms",[]),Object(w.a)(e,"member",{full_name:null,phone_number:null,age:null,relation:null,tanent_id:0}),Object(w.a)(e,"member_types",[]),e},created:function(){var e=this;return Object(O.a)(regeneratorRuntime.mark((function t(){var r,o,n,l,c,d,data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.loading=!1,e.boilerplate=!0,r={params:{company_id:e.$auth.user.company_id}},t.next=5,e.$axios.get("room-category-list",r);case 5:return o=t.sent,n=o.data,e.room_categories=n,t.next=10,e.$axios.get("room-sub-category-list",r);case 10:return l=t.sent,c=l.data,e.room_sub_categories=c,t.next=15,e.$axios.get("parking-list");case 15:d=t.sent,data=d.data,e.parkings=data,e.payload.parent_id=e.item.tanent_id,e.payload.system_user_id=e.item.system_user_id;case 20:case"end":return t.stop()}}),t)})))()},methods:{handleAttachment:function(e){this.payload.profile_picture=e},submit:function(){var e=this;this.payload.company_id=this.$auth.user.company_id,this.$axios.post("add-member",this.payload).then((function(t){t.data;e.errors=[],e.handleSuccessResponse("Member inserted successfully")})).catch((function(t){var r=t.response;e.handleErrorResponse(r)}))},handleSuccessResponse:function(e){this.errors=[],this.dialog=!1,this.$emit("success",e)},handleErrorResponse:function(e){if(!e)return this.snackbar=!0,void(this.response="An unexpected error occurred.");var t=e.status,data=e.data,r=e.statusText;t&&422==t?this.errors=data.errors:(this.snackbar=!0,this.response=r)}}},k=r(116),component=Object(k.a)(C,(function(){var e=this,t=e._self._c;return t(m.a,{attrs:{persistent:"",width:"900"},scopedSlots:e._u([{key:"activator",fn:function(r){var n=r.on,l=r.attrs;return[t("span",e._g(e._b({staticStyle:{cursor:"pointer"}},"span",l,!1),n),[t(o.a,{staticClass:"text-center",attrs:{outlined:"",color:"primary",dense:""}},[t(v.a,{attrs:{color:"primary",small:""}},[e._v(" mdi-account ")]),e._v("\n        Add Member(s)\n      ")],1)],1)]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[e._v(" "),t(l.a,[t(c.c,[e._v("Add Member")]),e._v(" "),t(h.a,[t(y.a,[t(d.a,{attrs:{cols:"3"}},[t(y.a,[t(d.a,{attrs:{cols:"12"}},[t("div",{staticClass:"text-center"},[t("CameraORUpload",{on:{imageSrc:e.handleAttachment}}),e._v(" "),e.errors&&e.errors.profile_picture?t("span",{staticClass:"text-danger mt-2"},[e._v(e._s(e.errors.profile_picture[0]))]):e._e()],1)])],1)],1),e._v(" "),t(d.a,{attrs:{cols:"9"}},[t(y.a,[t(d.a,{attrs:{cols:"6"}},[t(x.a,{staticClass:"text-center",attrs:{label:"Tanent Ref #",disabled:!0,dense:"",outlined:"","hide-details":!e.errors.parent_id,"error-messages":e.errors&&e.errors.parent_id?e.errors.parent_id[0]:""},model:{value:e.item.tanent_id,callback:function(t){e.$set(e.item,"tanent_id",t)},expression:"item.tanent_id"}})],1),e._v(" "),t(d.a,{attrs:{cols:"6"}},[t(x.a,{staticClass:"text-center",attrs:{label:"Device User Id",readonly:!0,dense:"",outlined:"","hide-details":!e.errors.system_user_id,"error-messages":e.errors&&e.errors.system_user_id?e.errors.system_user_id[0]:""},model:{value:e.item.system_user_id,callback:function(t){e.$set(e.item,"system_user_id",t)},expression:"item.system_user_id"}})],1),e._v(" "),t(d.a,{attrs:{cols:"6"}},[t(x.a,{staticClass:"text-center",attrs:{label:"First Name",readonly:e.disabled,dense:"",outlined:"","hide-details":!e.errors.first_name,"error-messages":e.errors&&e.errors.first_name?e.errors.first_name[0]:""},model:{value:e.payload.first_name,callback:function(t){e.$set(e.payload,"first_name",t)},expression:"payload.first_name"}})],1),e._v(" "),t(d.a,{attrs:{cols:"6"}},[t(x.a,{staticClass:"text-center",attrs:{label:"Last Name",readonly:e.disabled,dense:"",outlined:"","hide-details":!e.errors.last_name,"error-messages":e.errors&&e.errors.last_name?e.errors.last_name[0]:""},model:{value:e.payload.last_name,callback:function(t){e.$set(e.payload,"last_name",t)},expression:"payload.last_name"}})],1),e._v(" "),t(d.a,{attrs:{cols:"6"}},[t(x.a,{staticClass:"text-center",attrs:{label:"Age",readonly:e.disabled,dense:"",outlined:"","hide-details":!e.errors.age,"error-messages":e.errors&&e.errors.age?e.errors.age[0]:""},model:{value:e.payload.age,callback:function(t){e.$set(e.payload,"age",t)},expression:"payload.age"}})],1),e._v(" "),t(d.a,{attrs:{cols:"6"}},[t(x.a,{staticClass:"text-center",attrs:{label:"Phone Number",dense:"",outlined:"","hide-details":!e.errors.phone_number,"error-messages":e.errors&&e.errors.phone_number?e.errors.phone_number[0]:""},model:{value:e.payload.phone_number,callback:function(t){e.$set(e.payload,"phone_number",t)},expression:"payload.phone_number"}})],1),e._v(" "),t(d.a,{attrs:{cols:"6"}},[t(x.a,{staticClass:"text-center",attrs:{label:"Nationality",readonly:e.disabled,dense:"",outlined:"","hide-details":!e.errors.nationality,"error-messages":e.errors&&e.errors.nationality?e.errors.nationality[0]:""},model:{value:e.payload.nationality,callback:function(t){e.$set(e.payload,"nationality",t)},expression:"payload.nationality"}})],1),e._v(" "),t(d.a,{attrs:{cols:"6"}},[t(x.a,{staticClass:"text-center",attrs:{label:"RFID",readonly:e.disabled,dense:"",outlined:"","hide-details":!e.errors.rfid,"error-messages":e.errors&&e.errors.rfid?e.errors.rfid[0]:""},model:{value:e.payload.rfid,callback:function(t){e.$set(e.payload,"rfid",t)},expression:"payload.rfid"}})],1),e._v(" "),t(d.a,{attrs:{cols:"6"}},[t(_.a,{staticClass:"ma-0 mt-2 px-2 pa-0",attrs:{row:"","hide-details":!e.errors.gender,"error-messages":e.errors&&e.errors.gender?e.errors.gender[0]:""},model:{value:e.payload.gender,callback:function(t){e.$set(e.payload,"gender",t)},expression:"payload.gender"}},[t(f.a,{attrs:{label:"Male",value:"Male"}}),e._v(" "),t(f.a,{attrs:{label:"Female",value:"Female"}}),e._v(" "),t(f.a,{attrs:{label:"Other",value:"Other"}})],1)],1)],1)],1)],1),e._v(" "),t(y.a,[t(d.a,{staticClass:"text-right my-1",attrs:{cols:"12"}},[t(n.a,{on:{click:function(t){e.dialog=!1}}},[e._v("Close")]),e._v(" "),t(n.a,{staticClass:"primary",on:{click:e.submit}},[e._v("Submit")])],1)],1)],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{CameraORUpload:r(907).default})},1124:function(e,t,r){"use strict";r(12),r(14),r(13),r(6),r(17),r(11),r(18);var o=r(3),n=(r(41),r(1023),r(149)),l=r(265),c=r(79),d=r(75),h=r(26),m=r(5).a.extend({name:"transitionable",props:{mode:String,origin:String,transition:String}}),v=r(8),f=r(15);function _(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function y(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?_(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):_(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}t.a=Object(v.a)(n.a,d.a,m).extend({name:"v-alert",props:{border:{type:String,validator:function(e){return["top","right","bottom","left"].includes(e)}},closeLabel:{type:String,default:"$vuetify.close"},coloredBorder:Boolean,dense:Boolean,dismissible:Boolean,closeIcon:{type:String,default:"$cancel"},icon:{default:"",type:[Boolean,String],validator:function(e){return"string"==typeof e||!1===e}},outlined:Boolean,prominent:Boolean,text:Boolean,type:{type:String,validator:function(e){return["info","error","success","warning"].includes(e)}},value:{type:Boolean,default:!0}},computed:{__cachedBorder:function(){if(!this.border)return null;var data={staticClass:"v-alert__border",class:Object(o.a)({},"v-alert__border--".concat(this.border),!0)};return this.coloredBorder&&((data=this.setBackgroundColor(this.computedColor,data)).class["v-alert__border--has-color"]=!0),this.$createElement("div",data)},__cachedDismissible:function(){var e=this;if(!this.dismissible)return null;var t=this.iconColor;return this.$createElement(l.a,{staticClass:"v-alert__dismissible",props:{color:t,icon:!0,small:!0},attrs:{"aria-label":this.$vuetify.lang.t(this.closeLabel)},on:{click:function(){return e.isActive=!1}}},[this.$createElement(c.a,{props:{color:t}},this.closeIcon)])},__cachedIcon:function(){return this.computedIcon?this.$createElement(c.a,{staticClass:"v-alert__icon",props:{color:this.iconColor}},this.computedIcon):null},classes:function(){var e=y(y({},n.a.options.computed.classes.call(this)),{},{"v-alert--border":Boolean(this.border),"v-alert--dense":this.dense,"v-alert--outlined":this.outlined,"v-alert--prominent":this.prominent,"v-alert--text":this.text});return this.border&&(e["v-alert--border-".concat(this.border)]=!0),e},computedColor:function(){return this.color||this.type},computedIcon:function(){return!1!==this.icon&&("string"==typeof this.icon&&this.icon?this.icon:!!["error","info","success","warning"].includes(this.type)&&"$".concat(this.type))},hasColoredIcon:function(){return this.hasText||Boolean(this.border)&&this.coloredBorder},hasText:function(){return this.text||this.outlined},iconColor:function(){return this.hasColoredIcon?this.computedColor:void 0},isDark:function(){return!(!this.type||this.coloredBorder||this.outlined)||h.a.options.computed.isDark.call(this)}},created:function(){this.$attrs.hasOwnProperty("outline")&&Object(f.a)("outline","outlined",this)},methods:{genWrapper:function(){var e=[this.$slots.prepend||this.__cachedIcon,this.genContent(),this.__cachedBorder,this.$slots.append,this.$scopedSlots.close?this.$scopedSlots.close({toggle:this.toggle}):this.__cachedDismissible];return this.$createElement("div",{staticClass:"v-alert__wrapper"},e)},genContent:function(){return this.$createElement("div",{staticClass:"v-alert__content"},this.$slots.default)},genAlert:function(){var data={staticClass:"v-alert",attrs:{role:"alert"},on:this.listeners$,class:this.classes,style:this.styles,directives:[{name:"show",value:this.isActive}]};this.coloredBorder||(data=(this.hasText?this.setTextColor:this.setBackgroundColor)(this.computedColor,data));return this.$createElement("div",data,[this.genWrapper()])},toggle:function(){this.isActive=!this.isActive}},render:function(e){var t=this.genAlert();return this.transition?e("transition",{props:{name:this.transition,origin:this.origin,mode:this.mode}},[t]):t}})},895:function(e,t,r){var content=r(904);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(22).default)("8f215f56",content,!0,{sourceMap:!1})},904:function(e,t,r){var o=r(21)((function(i){return i[1]}));o.push([e.i,'/*!\n * Cropper.js v1.5.13\n * https://fengyuanchen.github.io/cropperjs\n *\n * Copyright 2015-present Chen Fengyuan\n * Released under the MIT license\n *\n * Date: 2022-11-20T05:30:43.444Z\n */.cropper-container{direction:ltr;font-size:0;line-height:0;position:relative;touch-action:none;-webkit-user-select:none;-moz-user-select:none;user-select:none}.cropper-container img{backface-visibility:hidden;display:block;height:100%;image-orientation:0deg;max-height:none!important;max-width:none!important;min-height:0!important;min-width:0!important;width:100%}.cropper-canvas,.cropper-crop-box,.cropper-drag-box,.cropper-modal,.cropper-wrap-box{bottom:0;left:0;position:absolute;right:0;top:0}.cropper-canvas,.cropper-wrap-box{overflow:hidden}.cropper-drag-box{background-color:#fff;opacity:0}.cropper-modal{background-color:#000;opacity:.5}.cropper-view-box{display:block;height:100%;outline:1px solid #39f;outline-color:rgba(51,153,255,.75);overflow:hidden;width:100%}.cropper-dashed{border:0 dashed #eee;display:block;opacity:.5;position:absolute}.cropper-dashed.dashed-h{border-bottom-width:1px;border-top-width:1px;height:33.33333%;left:0;top:33.33333%;width:100%}.cropper-dashed.dashed-v{border-left-width:1px;border-right-width:1px;height:100%;left:33.33333%;top:0;width:33.33333%}.cropper-center{display:block;height:0;left:50%;opacity:.75;position:absolute;top:50%;width:0}.cropper-center:after,.cropper-center:before{background-color:#eee;content:" ";display:block;position:absolute}.cropper-center:before{height:1px;left:-3px;top:0;width:7px}.cropper-center:after{height:7px;left:0;top:-3px;width:1px}.cropper-face,.cropper-line,.cropper-point{display:block;height:100%;opacity:.1;position:absolute;width:100%}.cropper-face{background-color:#fff;left:0;top:0}.cropper-line{background-color:#39f}.cropper-line.line-e{cursor:ew-resize;right:-3px;top:0;width:5px}.cropper-line.line-n{cursor:ns-resize;height:5px;left:0;top:-3px}.cropper-line.line-w{cursor:ew-resize;left:-3px;top:0;width:5px}.cropper-line.line-s{bottom:-3px;cursor:ns-resize;height:5px;left:0}.cropper-point{background-color:#39f;height:5px;opacity:.75;width:5px}.cropper-point.point-e{cursor:ew-resize;margin-top:-3px;right:-3px;top:50%}.cropper-point.point-n{cursor:ns-resize;left:50%;margin-left:-3px;top:-3px}.cropper-point.point-w{cursor:ew-resize;left:-3px;margin-top:-3px;top:50%}.cropper-point.point-s{bottom:-3px;cursor:s-resize;left:50%;margin-left:-3px}.cropper-point.point-ne{cursor:nesw-resize;right:-3px;top:-3px}.cropper-point.point-nw{cursor:nwse-resize;left:-3px;top:-3px}.cropper-point.point-sw{bottom:-3px;cursor:nesw-resize;left:-3px}.cropper-point.point-se{bottom:-3px;cursor:nwse-resize;height:20px;opacity:1;right:-3px;width:20px}@media (min-width:768px){.cropper-point.point-se{height:15px;width:15px}}@media (min-width:992px){.cropper-point.point-se{height:10px;width:10px}}@media (min-width:1200px){.cropper-point.point-se{height:5px;opacity:.75;width:5px}}.cropper-point.point-se:before{background-color:#39f;bottom:-50%;content:" ";display:block;height:200%;opacity:0;position:absolute;right:-50%;width:200%}.cropper-invisible{opacity:0}.cropper-bg{background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAAA3NCSVQICAjb4U/gAAAABlBMVEXMzMz////TjRV2AAAACXBIWXMAAArrAAAK6wGCiw1aAAAAHHRFWHRTb2Z0d2FyZQBBZG9iZSBGaXJld29ya3MgQ1M26LyyjAAAABFJREFUCJlj+M/AgBVhF/0PAH6/D/HkDxOGAAAAAElFTkSuQmCC")}.cropper-hide{display:block;height:0;position:absolute;width:0}.cropper-hidden{display:none!important}.cropper-move{cursor:move}.cropper-crop{cursor:crosshair}.cropper-disabled .cropper-drag-box,.cropper-disabled .cropper-face,.cropper-disabled .cropper-line,.cropper-disabled .cropper-point{cursor:not-allowed}',""]),o.locals={},e.exports=o},907:function(e,t,r){"use strict";r.r(t);var o=r(329),n=r(147),l=r(23),c=(r(6),r(11),r(88),{auth:!1,layout:"login",props:{PreviewImage:{type:String,default:"/no-profile-image.jpg"}},data:function(){return{isClicked:!1,isCamera:!1,videoStream:null,isUpload:!0,PlaceHolderImage:null}},mounted:function(){this.setupCamera(),this.PlaceHolderImage=this.PreviewImage},methods:{setupCamera:function(){var e=this;return Object(l.a)(regeneratorRuntime.mark((function t(){var r,video;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,navigator.mediaDevices.getUserMedia({video:!0});case 3:r=t.sent,(video=e.$refs.video).srcObject=r,e.videoStream=r,video.play(),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),console.error("Error accessing the camera: ",t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})))()},toggleCamera:function(){this.isClicked=!0,this.isUpload=!1,this.isCamera=!this.isCamera;var video=this.$refs.video,canvas=this.$refs.canvas,e=canvas.getContext("2d");canvas.width=video.videoWidth,canvas.height=video.videoHeight,e.drawImage(video,0,0,canvas.width,canvas.height),this.$emit("imageSrc",canvas.toDataURL("image/png")),this.isCamera?video.play():this.isCamera||(this.isUpload=!1,video.pause())},uploadPicture:function(){this.$refs.fileInput.click()},handleFileUpload:function(e){var t=this,r=e.target.files[0],o=new FileReader;o.onload=function(e){t.isUpload=!0,t.PlaceHolderImage=e.target.result,t.$emit("imageSrc",e.target.result)},o.readAsDataURL(r)},beforeDestroy:function(){this.videoStream&&this.videoStream.getTracks().forEach((function(track){return track.stop()}))}}}),d=r(116),component=Object(d.a)(c,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"text-center"},[t(o.a,{staticStyle:{border:"1px solid #6946dd"},attrs:{size:"175"}},[t("img",{directives:[{name:"show",rawName:"v-show",value:e.isUpload,expression:"isUpload"}],ref:"img",attrs:{src:e.PlaceHolderImage,alt:""}}),e._v(" "),t("video",{directives:[{name:"show",rawName:"v-show",value:!e.isUpload,expression:"!isUpload"}],ref:"video",attrs:{width:"100%",autoplay:"",playsinline:""}}),e._v(" "),t("canvas",{ref:"canvas",staticStyle:{display:"none"}})]),e._v(" "),t("div",{staticClass:"pa-5"},[t(n.a,{attrs:{large:"",color:"primary"},on:{click:e.toggleCamera}},[e._v("mdi-camera")]),e._v(" "),t(n.a,{attrs:{large:"",color:"primary"},on:{click:e.uploadPicture}},[e._v("mdi-folder-open")])],1),e._v(" "),t("input",{ref:"fileInput",staticStyle:{display:"none"},attrs:{type:"file"},on:{change:e.handleFileUpload}})],1)}),[],!1,null,null,null);t.default=component.exports},910:function(e,t,r){var content=r(911);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(22).default)("e09e1dc8",content,!0,{sourceMap:!1})},911:function(e,t,r){var o=r(21)((function(i){return i[1]}));o.push([e.i,".v-input--radio-group legend.v-label{cursor:text;font-size:14px;height:auto}.v-input--radio-group__input{border:none;cursor:default;display:flex;width:100%}.v-input--radio-group--column .v-input--radio-group__input>.v-label{padding-bottom:8px}.v-input--radio-group--row .v-input--radio-group__input>.v-label{padding-right:8px}.v-input--radio-group--row legend{align-self:center;display:inline-block}.v-input--radio-group--row .v-input--radio-group__input{flex-direction:row;flex-wrap:wrap}.v-input--radio-group--column legend{padding-bottom:8px}.v-input--radio-group--column .v-radio:not(:last-child):not(:only-child){margin-bottom:8px}.v-input--radio-group--column .v-input--radio-group__input{flex-direction:column}",""]),o.locals={},e.exports=o},912:function(e,t,r){var content=r(913);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(22).default)("78a1b980",content,!0,{sourceMap:!1})},913:function(e,t,r){var o=r(21)((function(i){return i[1]}));o.push([e.i,".theme--light.v-radio--is-disabled label{color:rgba(0,0,0,.38)}.theme--dark.v-radio--is-disabled label{color:hsla(0,0%,100%,.5)}.v-radio{align-items:center;display:flex;height:auto;outline:none}.v-radio--is-disabled{cursor:default;pointer-events:none}.v-input--radio-group.v-input--radio-group--row .v-radio{margin-right:16px}",""]),o.locals={},e.exports=o},971:function(e,t,r){"use strict";r(12),r(14),r(13),r(6),r(17),r(11),r(18);var o=r(3),n=(r(28),r(524),r(910),r(73)),l=r(92),c=r(8);function d(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function h(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var m=Object(c.a)(l.a,n.a);t.a=m.extend({name:"v-radio-group",provide:function(){return{radioGroup:this}},props:{column:{type:Boolean,default:!0},height:{type:[Number,String],default:"auto"},name:String,row:Boolean,value:null},computed:{classes:function(){return h(h({},n.a.options.computed.classes.call(this)),{},{"v-input--selection-controls v-input--radio-group":!0,"v-input--radio-group--column":this.column&&!this.row,"v-input--radio-group--row":this.row})}},methods:{genDefaultSlot:function(){return this.$createElement("div",{staticClass:"v-input--radio-group__input",attrs:{id:this.id,role:"radiogroup","aria-labelledby":this.computedId}},n.a.options.methods.genDefaultSlot.call(this))},genInputSlot:function(){var e=n.a.options.methods.genInputSlot.call(this);return delete e.data.on.click,e},genLabel:function(){var label=n.a.options.methods.genLabel.call(this);return label?(label.data.attrs.id=this.computedId,delete label.data.attrs.for,label.tag="legend",label):null},onClick:l.a.options.methods.onClick},render:function(e){var t=n.a.options.render.call(this,e);return this._b(t.data,"div",this.attrs$),t}})},972:function(e,t,r){"use strict";r(12),r(14),r(13),r(6),r(17),r(11),r(18);var o=r(107),n=r(3),l=(r(37),r(912),r(219)),c=r(79),d=r(73),h=r(118),m=r(29),v=r(119),f=r(356),_=r(26),y=r(352),x=r(0),O=r(8),w=r(65),j=["title"];function C(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function k(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?C(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):C(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var A=Object(O.a)(h.a,m.a,f.a,Object(v.a)("radioGroup"),_.a);t.a=A.extend().extend({name:"v-radio",inheritAttrs:!1,props:{disabled:Boolean,id:String,label:String,name:String,offIcon:{type:String,default:"$radioOff"},onIcon:{type:String,default:"$radioOn"},readonly:Boolean,value:{default:null}},data:function(){return{isFocused:!1}},computed:{classes:function(){return k(k({"v-radio--is-disabled":this.isDisabled,"v-radio--is-focused":this.isFocused},this.themeClasses),this.groupClasses)},computedColor:function(){if(!this.isDisabled)return y.a.options.computed.computedColor.call(this)},computedIcon:function(){return this.isActive?this.onIcon:this.offIcon},computedId:function(){return d.a.options.computed.computedId.call(this)},hasLabel:d.a.options.computed.hasLabel,hasState:function(){return(this.radioGroup||{}).hasState},isDisabled:function(){return this.disabled||!!this.radioGroup&&this.radioGroup.isDisabled},isReadonly:function(){return this.readonly||!!this.radioGroup&&this.radioGroup.isReadonly},computedName:function(){return this.name||!this.radioGroup?this.name:this.radioGroup.name||"radio-".concat(this.radioGroup._uid)},rippleState:function(){return y.a.options.computed.rippleState.call(this)},validationState:function(){return(this.radioGroup||{}).validationState||this.computedColor}},methods:{genInput:function(e){return y.a.options.methods.genInput.call(this,"radio",e)},genLabel:function(){return this.hasLabel?this.$createElement(l.a,{on:{click:y.b},attrs:{for:this.computedId},props:{color:this.validationState,focused:this.hasState}},Object(x.t)(this,"label")||this.label):null},genRadio:function(){var e=this.attrs$,t=(e.title,Object(o.a)(e,j));return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.$createElement(c.a,this.setTextColor(this.validationState,{props:{dense:this.radioGroup&&this.radioGroup.dense}}),this.computedIcon),this.genInput(k({name:this.computedName,value:this.value},t)),this.genRipple(this.setTextColor(this.rippleState))])},onFocus:function(e){this.isFocused=!0,this.$emit("focus",e)},onBlur:function(e){this.isFocused=!1,this.$emit("blur",e)},onChange:function(){this.isDisabled||this.isReadonly||this.isActive||this.toggle()},onKeydown:function(){}},render:function(e){return e("div",{staticClass:"v-radio",class:this.classes,on:Object(w.c)({click:this.onChange},this.listeners$),attrs:{title:this.attrs$.title}},[this.genRadio(),this.genLabel()])}})}}]);