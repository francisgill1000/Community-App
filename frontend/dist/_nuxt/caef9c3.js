(window.webpackJsonp=window.webpackJsonp||[]).push([[341,182,191,253],{1656:function(e,t,o){"use strict";o.r(t);var r,n=o(114),c=o(133),l=o(87),d=o(516),h=o(876),m=o(1571),f=o(350),y=o(1019),v=o(147),x=o(326),_=o(204),O=o(60),w=o(863),j=o(515),k=o(873),A=o(349),C=o(214),D=o(96),F=o(856),R=(o(37),o(12),o(14),o(13),o(17),o(11),o(18),o(23)),B=o(3),I=(o(6),o(72),o(33),o(58),o(55),o(35),o(88),o(898),o(914));function P(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,o)}return t}function z(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?P(Object(source),!0).forEach((function(t){Object(B.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):P(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var S={components:{VueCropper:o.n(I).a},data:function(){var e;return e={originalURL:"https://mytime2cloud.com/register/visitor/",fullCompanyLink:"",encryptedID:"",fullLink:"",qrCodeDataURL:"",qrCompanyCodeDataURL:"",disabled:!1,openTimePicker:!1,closeTimePicker:!1,menu:!1,payload:{flat_number:"",room_category:"",manager_name:"",number:"",emergency_phone:"",email:"",open_time:"",close_time:"",zone_id:1,weekend:1,webaccess:1},tab:null,totalRowsCount:0,filters:{},isFilter:!1,sortBy:"id",sortDesc:!1,snack:!1,snackColor:"",snackText:"",loadinglinear:!0,displayErrormsg:!1,image:"",mime_type:"",cropedImage:"",cropper:"",autoCrop:!1,dialogCropping:!1,tabMenu:[]},Object(B.a)(e,"tab","0"),Object(B.a)(e,"employeeId",0),Object(B.a)(e,"employeeObject",{}),Object(B.a)(e,"attrs",[]),Object(B.a)(e,"dialog",!1),Object(B.a)(e,"editDialog",!1),Object(B.a)(e,"viewDialog",!1),Object(B.a)(e,"selectedFile",""),Object(B.a)(e,"DialogBox",!1),Object(B.a)(e,"m",!1),Object(B.a)(e,"expand",!1),Object(B.a)(e,"expand2",!1),Object(B.a)(e,"boilerplate",!1),Object(B.a)(e,"right",!0),Object(B.a)(e,"rightDrawer",!1),Object(B.a)(e,"drawer",!0),Object(B.a)(e,"tab",null),Object(B.a)(e,"selectedItem",1),Object(B.a)(e,"on",""),Object(B.a)(e,"files",""),Object(B.a)(e,"search",""),Object(B.a)(e,"loading",!1),Object(B.a)(e,"next_page_url",""),Object(B.a)(e,"prev_page_url",""),Object(B.a)(e,"current_page",1),Object(B.a)(e,"per_page",1e3),Object(B.a)(e,"ListName",""),Object(B.a)(e,"color","background"),Object(B.a)(e,"response",""),Object(B.a)(e,"snackbar",!1),Object(B.a)(e,"btnLoader",!1),Object(B.a)(e,"max_employee",0),Object(B.a)(e,"employee",{title:"Mr",display_name:"",employee_id:"",system_user_id:""}),Object(B.a)(e,"upload",{name:""}),Object(B.a)(e,"previewImage",null),Object(B.a)(e,"pagination",{current:1,total:0,per_page:10}),Object(B.a)(e,"options",{}),Object(B.a)(e,"Model","Room Category"),Object(B.a)(e,"endpoint","room-category"),Object(B.a)(e,"search",""),Object(B.a)(e,"snackbar",!1),Object(B.a)(e,"ids",[]),Object(B.a)(e,"loading",!1),Object(B.a)(e,"editedIndex",-1),Object(B.a)(e,"response",""),Object(B.a)(e,"data",[]),Object(B.a)(e,"errors",[]),Object(B.a)(e,"designations",[]),Object(B.a)(e,"roles",[]),Object(B.a)(e,"employees",[]),Object(B.a)(e,"department_filter_id",""),Object(B.a)(e,"dialogVisible",!1),Object(B.a)(e,"payloadOptions",{}),Object(B.a)(e,"headers",[{text:"Room Category",align:"left",sortable:!0,key:"name",value:"name",filterable:!0,filterSpecial:!1},{text:"Details",align:"left",sortable:!1,key:"options",value:"options"}]),Object(B.a)(e,"formAction","Create"),e},created:function(){var e=this;return Object(R.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.loading=!1,e.boilerplate=!0,e.payloadOptions={params:{per_page:10,company_id:e.$auth.user.company_id}},e.getDataFromApi();case 4:case"end":return t.stop()}}),t)})))()},mounted:function(){},watch:{options:{handler:function(){this.getDataFromApi()},deep:!0}},methods:(r={encrypt:function(){this.encryptedID=this.$crypto.encrypt(id)},closeViewDialog:function(){this.viewDialog=!1},caps:function(e){return""==e||null==e?"---":e.toString().replace(/\b\w/g,(function(e){return e.toUpperCase()}))},closePopup:function(){this.$refs.attachment_input.value=null,this.dialogCropping=!1},close:function(){this.dialog=!1,this.errors=[],setTimeout((function(){}),300)},can:function(e){return this.$pagePermission.can(e,this)},onPageChange:function(){this.getDataFromApi()},applyFilters:function(){this.getDataFromApi()},toggleFilter:function(){this.isFilter=!this.isFilter},clearFilters:function(){this.filters={},this.isFilter=!1,this.getDataFromApi()},getDataFromApi:function(){var e=this;arguments.length>0&&void 0!==arguments[0]||this.endpoint;this.loadinglinear=!0;var t=this.options,o=t.sortBy,r=t.sortDesc,n=t.page,c=t.itemsPerPage,l={params:z({page:n,sortBy:o?o[0]:"",sortDesc:r?r[0]:"",per_page:c,company_id:this.$auth.user.company_id},this.filters)};this.$axios.get(this.endpoint,l).then((function(t){var data=t.data;e.data=data.data,e.pagination.current=data.current_page,e.pagination.total=data.last_page,e.totalRowsCount=data.total,0==e.data.length?e.displayErrormsg=!0:e.displayErrormsg=!1,e.loadinglinear=!1}))},addItem:function(){this.disabled=!1,this.formAction="Create",this.DialogBox=!0,this.payload={}},editItem:function(e){this.disabled=!1,this.formAction="Edit",this.DialogBox=!0,this.payload=e,this.previewImage=e.logo},viewItem:function(e){this.disabled=!0,this.formAction="View",this.DialogBox=!0,this.payload=e,this.previewImage=e.logo,this.fullLink=this.originalURL+this.$auth.user.company_id+"-"+e.id,this.fullCompanyLink=this.originalURL+this.$auth.user.company_id,this.generateQRCode(this.fullLink),this.generateCompanyQRCode(this.fullCompanyLink)},deleteItem:function(e){var t=this;confirm("Are you sure you wish to delete , to mitigate any inconvenience in future.")&&this.$axios.delete("".concat(this.endpoint,"/").concat(e.id)).then((function(e){e.data;t.getDataFromApi(),t.snackbar=!0,t.response="Record deleted successfully"})).catch((function(e){return console.log(e)}))}},Object(B.a)(r,"close",(function(){var e=this;this.dialog=!1,setTimeout((function(){e.editedItem=Object.assign({},e.defaultItem),e.editedIndex=-1}),300)})),Object(B.a)(r,"submit",(function(){var e=this;this.payload.company_id=this.$auth.user.company_id,this.$axios.post(this.endpoint,this.payload).then((function(t){t.data;e.errors=[],e.snackbar=!0,e.response="Room Category inserted successfully",e.getDataFromApi(),e.DialogBox=!1,e.dialog=!0})).catch((function(t){var o=t.response;if(!o)return!1;var r=o.status,data=o.data,n=o.statusText;r&&422==r?e.errors=data.errors:(e.snackbar=!0,e.response=n)}))})),Object(B.a)(r,"update_data",(function(){var e=this;this.payload.company_id=this.$auth.user.company_id,this.$axios.put(this.endpoint+"/"+this.payload.id,this.payload).then((function(t){t.data;e.errors=[],e.snackbar=!0,e.response="Room Category updated successfully",e.getDataFromApi(),e.DialogBox=!1})).catch((function(t){var o=t.response;if(!o)return!1;var r=o.status,data=o.data,n=o.statusText;r&&422==r?e.errors=data.errors:(e.snackbar=!0,e.response=n)}))})),r)},M=S,$=o(116),component=Object($.a)(M,(function(){var e=this,t=e._self._c;return e.can("employee_access")?t("div",[t("div",{staticClass:"text-center ma-2"},[t(k.a,{attrs:{small:"",top:"top",color:e.color},model:{value:e.snackbar,callback:function(t){e.snackbar=t},expression:"snackbar"}},[e._v("\n      "+e._s(e.response)+"\n    ")])],1),e._v(" "),e.loading?t("Preloader"):t("div",[t(f.a,{attrs:{persistent:"",width:"500"},model:{value:e.DialogBox,callback:function(t){e.DialogBox=t},expression:"DialogBox"}},[t(c.a,[t(D.a,{staticClass:"popup_background",attrs:{flat:"",dense:""}},[e._v("\n          "+e._s(e.formAction)+" Room Category\n\n          "),t(A.a),e._v(" "),t("span",[t(v.a,{staticClass:"ml-2",attrs:{dark:""},on:{click:function(t){e.DialogBox=!1}}},[e._v("\n              mdi mdi-close-circle-outline")])],1)],1),e._v(" "),t(h.a,[t(j.a,[t(d.a,{attrs:{cols:"12"}},[t(C.a,{staticClass:"text-center",attrs:{label:"Room Category",disabled:e.disabled,dense:"",outlined:"","hide-details":!e.errors.name,error:e.errors.name,"error-messages":e.errors&&e.errors.name?e.errors.name[0]:""},model:{value:e.payload.name,callback:function(t){e.$set(e.payload,"name",t)},expression:"payload.name"}})],1)],1)],1),e._v(" "),t(y.a),e._v(" "),t(l.a,[t(A.a),e._v(" "),t("div",{staticClass:"text-right"},[t(n.a,{attrs:{small:"",color:"grey white--text"},on:{click:function(t){e.DialogBox=!1}}},[e._v("\n              Close\n            ")]),e._v(" "),e.can("employee_create")&&"Create"==e.formAction?t(n.a,{attrs:{small:"",loading:e.loading,color:"primary"},on:{click:e.submit}},[e._v("\n              Submit\n            ")]):e.can("employee_create")&&"Edit"==e.formAction?t(n.a,{attrs:{small:"",loading:e.loading,color:"primary"},on:{click:e.update_data}},[e._v("\n              Update\n            ")]):e._e()],1)],1)],1)],1),e._v(" "),t(k.a,{attrs:{timeout:3e3,color:e.snackColor},scopedSlots:e._u([{key:"action",fn:function(o){var r=o.attrs;return[t(n.a,e._b({attrs:{text:""},on:{click:function(t){e.snack=!1}}},"v-btn",r,!1),[e._v(" Close ")])]}}],null,!1,3090489768),model:{value:e.snack,callback:function(t){e.snack=t},expression:"snack"}},[e._v("\n      "+e._s(e.snackText)+"\n\n      ")]),e._v(" "),e.can("employee_view")?t("div",[t(h.a,[t(c.a,{attrs:{elevation:"0"}},[t(D.a,{staticClass:"mb-2",attrs:{dense:"",flat:""}},[t(F.b,[t("span",[e._v(e._s(e.Model)+" ")])]),e._v(" "),t("span",[t(n.a,{staticClass:"ma-0 px-0",attrs:{dense:"","x-small":"",ripple:!1,text:"",title:"Reload"}},[t(v.a,{staticClass:"ml-2",attrs:{dark:""},on:{click:e.clearFilters}},[e._v("mdi mdi-reload")])],1)],1),e._v(" "),t(A.a),e._v(" "),t("span",[t(n.a,{staticClass:"ma-0 px-0",attrs:{dense:"","x-small":"",ripple:!1,text:"",title:"Add Company"},on:{click:e.addItem}},[e.can("employee_create")?t(v.a,{attrs:{right:"",size:"x-large",dark:""}},[e._v("mdi-plus-circle")]):e._e()],1)],1)],1),e._v(" "),t(m.a,{staticClass:"elevation-1",attrs:{dense:"",headers:e.headers,items:e.data,"model-value":"data.id",loading:e.loadinglinear,options:e.options,"footer-props":{itemsPerPageOptions:[100,500,1e3]},"server-items-length":e.totalRowsCount},on:{"update:options":function(t){e.options=t}},scopedSlots:e._u([{key:"header",fn:function(o){var r=o.props.headers;return[e.isFilter?t("tr",e._l(r,(function(header){return t("td",{key:header.text},[t(h.a,[header.filterable&&!header.filterSpecial?t(C.a,{attrs:{clearable:"","hide-details":!0,id:header.value,outlined:"",dense:"",autocomplete:"off"},on:{"click:clear":function(t){e.filters[header.value]="",e.applyFilters()},input:function(t){return e.applyFilters(header.key,t)}},model:{value:e.filters[header.value],callback:function(t){e.$set(e.filters,header.value,t)},expression:"filters[header.value]"}}):e._e()],1)],1)})),0):e._e()]}},{key:"item.options",fn:function(o){var r=o.item;return[t(w.a,{attrs:{bottom:"",left:""},scopedSlots:e._u([{key:"activator",fn:function(o){var r=o.on,c=o.attrs;return[t(n.a,e._g(e._b({attrs:{"dark-2":"",icon:""}},"v-btn",c,!1),r),[t(v.a,[e._v("mdi-dots-vertical")])],1)]}}],null,!0)},[e._v(" "),t(x.a,{attrs:{width:"120",dense:""}},[t(_.a,{on:{click:function(t){return e.viewItem(r)}}},[t(O.c,{staticStyle:{cursor:"pointer"}},[t(v.a,{attrs:{color:"secondary",small:""}},[e._v(" mdi-eye ")]),e._v("\n                      View\n                    ")],1)],1),e._v(" "),t(_.a,{on:{click:function(t){return e.editItem(r)}}},[t(O.c,{staticStyle:{cursor:"pointer"}},[t(v.a,{attrs:{color:"secondary",small:""}},[e._v(" mdi-pencil ")]),e._v("\n                      Edit\n                    ")],1)],1),e._v(" "),t(_.a,{on:{click:function(t){return e.deleteItem(r)}}},[t(O.c,{staticStyle:{cursor:"pointer"}},[t(v.a,{attrs:{color:"error",small:""}},[e._v(" mdi-delete ")]),e._v("\n                      Delete\n                    ")],1)],1)],1)],1)]}}],null,!1,4141217634)})],1)],1)],1):e._e()],1)],1):t("NoAccess")}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Preloader:o(896).default,NoAccess:o(881).default})},856:function(e,t,o){"use strict";o.d(t,"a",(function(){return l})),o.d(t,"b",(function(){return c}));var r=o(96),n=o(1),c=Object(n.k)("v-toolbar__title"),l=Object(n.k)("v-toolbar__items");r.a},881:function(e,t,o){"use strict";o.r(t);var r=o(116),component=Object(r.a)({},(function(){this._self._c;return this._m(0)}),[function(){var e=this._self._c;return e("div",{staticClass:"text-center",staticStyle:{"margin-top":"25%"}},[e("b",[this._v("No Access")])])}],!1,null,null,null);t.default=component.exports},896:function(e,t,o){"use strict";o.r(t);var r=o(212),n=o(116),component=Object(n.a)({},(function(){var e=this._self._c;return e("div",{staticClass:"text-center",staticStyle:{width:"50px",margin:"25% auto"}},[e(r.a,{attrs:{src:"/preloaders/1.gif"}})],1)}),[],!1,null,null,null);t.default=component.exports},898:function(e,t,o){var content=o(905);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(22).default)("8f215f56",content,!0,{sourceMap:!1})},905:function(e,t,o){var r=o(21)((function(i){return i[1]}));r.push([e.i,'/*!\n * Cropper.js v1.5.13\n * https://fengyuanchen.github.io/cropperjs\n *\n * Copyright 2015-present Chen Fengyuan\n * Released under the MIT license\n *\n * Date: 2022-11-20T05:30:43.444Z\n */.cropper-container{direction:ltr;font-size:0;line-height:0;position:relative;touch-action:none;-webkit-user-select:none;-moz-user-select:none;user-select:none}.cropper-container img{backface-visibility:hidden;display:block;height:100%;image-orientation:0deg;max-height:none!important;max-width:none!important;min-height:0!important;min-width:0!important;width:100%}.cropper-canvas,.cropper-crop-box,.cropper-drag-box,.cropper-modal,.cropper-wrap-box{bottom:0;left:0;position:absolute;right:0;top:0}.cropper-canvas,.cropper-wrap-box{overflow:hidden}.cropper-drag-box{background-color:#fff;opacity:0}.cropper-modal{background-color:#000;opacity:.5}.cropper-view-box{display:block;height:100%;outline:1px solid #39f;outline-color:rgba(51,153,255,.75);overflow:hidden;width:100%}.cropper-dashed{border:0 dashed #eee;display:block;opacity:.5;position:absolute}.cropper-dashed.dashed-h{border-bottom-width:1px;border-top-width:1px;height:33.33333%;left:0;top:33.33333%;width:100%}.cropper-dashed.dashed-v{border-left-width:1px;border-right-width:1px;height:100%;left:33.33333%;top:0;width:33.33333%}.cropper-center{display:block;height:0;left:50%;opacity:.75;position:absolute;top:50%;width:0}.cropper-center:after,.cropper-center:before{background-color:#eee;content:" ";display:block;position:absolute}.cropper-center:before{height:1px;left:-3px;top:0;width:7px}.cropper-center:after{height:7px;left:0;top:-3px;width:1px}.cropper-face,.cropper-line,.cropper-point{display:block;height:100%;opacity:.1;position:absolute;width:100%}.cropper-face{background-color:#fff;left:0;top:0}.cropper-line{background-color:#39f}.cropper-line.line-e{cursor:ew-resize;right:-3px;top:0;width:5px}.cropper-line.line-n{cursor:ns-resize;height:5px;left:0;top:-3px}.cropper-line.line-w{cursor:ew-resize;left:-3px;top:0;width:5px}.cropper-line.line-s{bottom:-3px;cursor:ns-resize;height:5px;left:0}.cropper-point{background-color:#39f;height:5px;opacity:.75;width:5px}.cropper-point.point-e{cursor:ew-resize;margin-top:-3px;right:-3px;top:50%}.cropper-point.point-n{cursor:ns-resize;left:50%;margin-left:-3px;top:-3px}.cropper-point.point-w{cursor:ew-resize;left:-3px;margin-top:-3px;top:50%}.cropper-point.point-s{bottom:-3px;cursor:s-resize;left:50%;margin-left:-3px}.cropper-point.point-ne{cursor:nesw-resize;right:-3px;top:-3px}.cropper-point.point-nw{cursor:nwse-resize;left:-3px;top:-3px}.cropper-point.point-sw{bottom:-3px;cursor:nesw-resize;left:-3px}.cropper-point.point-se{bottom:-3px;cursor:nwse-resize;height:20px;opacity:1;right:-3px;width:20px}@media (min-width:768px){.cropper-point.point-se{height:15px;width:15px}}@media (min-width:992px){.cropper-point.point-se{height:10px;width:10px}}@media (min-width:1200px){.cropper-point.point-se{height:5px;opacity:.75;width:5px}}.cropper-point.point-se:before{background-color:#39f;bottom:-50%;content:" ";display:block;height:200%;opacity:0;position:absolute;right:-50%;width:200%}.cropper-invisible{opacity:0}.cropper-bg{background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAAA3NCSVQICAjb4U/gAAAABlBMVEXMzMz////TjRV2AAAACXBIWXMAAArrAAAK6wGCiw1aAAAAHHRFWHRTb2Z0d2FyZQBBZG9iZSBGaXJld29ya3MgQ1M26LyyjAAAABFJREFUCJlj+M/AgBVhF/0PAH6/D/HkDxOGAAAAAElFTkSuQmCC")}.cropper-hide{display:block;height:0;position:absolute;width:0}.cropper-hidden{display:none!important}.cropper-move{cursor:move}.cropper-crop{cursor:crosshair}.cropper-disabled .cropper-drag-box,.cropper-disabled .cropper-face,.cropper-disabled .cropper-line,.cropper-disabled .cropper-point{cursor:not-allowed}',""]),r.locals={},e.exports=r}}]);