(window.webpackJsonp=window.webpackJsonp||[]).push([[431,186,194,280],{1303:function(e,t,r){var content=r(1471);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(21).default)("3267c715",content,!0,{sourceMap:!1})},1355:function(e,t,r){"use strict";r.r(t);var o,n=r(117),c=r(138),l=r(1200),d=r(903),f=r(1583),m=r(116),h=r(336),v=r(211),x=r(10),_=r(888),w=r(900),y=r(360),k=r(221),j=r(99),O=r(886),A=(r(59),r(14),r(11),r(18),r(19),r(17)),C=r(2),z=(r(103),r(6),r(80),r(31),r(58),r(57),r(70),r(33),r(120),r(12),r(9),r(92),r(363),r(41),r(61),r(37),r(69),r(923),r(936));function F(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function D(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?F(Object(source),!0).forEach((function(t){Object(C.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):F(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var P={components:{VueCropper:r.n(z).a},data:function(){var e;return e={disabled:!1,openTimePicker:!1,closeTimePicker:!1,menu:!1,payload:{flat_number:"",floor_number:"",manager_name:"",number:"",emergency_phone:"",email:"",open_time:"",close_time:"",zone_id:1,weekend:1,webaccess:1},tab:null,totalRowsCount:0,filters:{},isFilter:!1,sortBy:"id",sortDesc:!1,snack:!1,snackColor:"",snackText:"",loadinglinear:!0,displayErrormsg:!1,image:"",mime_type:"",cropedImage:"",cropper:"",autoCrop:!1,dialogCropping:!1,tabMenu:[]},Object(C.a)(e,"tab","0"),Object(C.a)(e,"attrs",[]),Object(C.a)(e,"right",!0),Object(C.a)(e,"rightDrawer",!1),Object(C.a)(e,"drawer",!0),Object(C.a)(e,"tab",null),Object(C.a)(e,"selectedItem",1),Object(C.a)(e,"on",""),Object(C.a)(e,"files",""),Object(C.a)(e,"search",""),Object(C.a)(e,"loading",!1),Object(C.a)(e,"next_page_url",""),Object(C.a)(e,"prev_page_url",""),Object(C.a)(e,"current_page",1),Object(C.a)(e,"per_page",1e3),Object(C.a)(e,"color","background"),Object(C.a)(e,"response",""),Object(C.a)(e,"btnLoader",!1),Object(C.a)(e,"pagination",{current:1,total:0,per_page:10}),Object(C.a)(e,"options",{}),Object(C.a)(e,"Model","Zone"),Object(C.a)(e,"endpoint","zone"),Object(C.a)(e,"search",""),Object(C.a)(e,"snackbar",!1),Object(C.a)(e,"ids",[]),Object(C.a)(e,"loading",!1),Object(C.a)(e,"response",""),Object(C.a)(e,"data",[]),Object(C.a)(e,"errors",[]),Object(C.a)(e,"designations",[]),Object(C.a)(e,"roles",[]),Object(C.a)(e,"department_filter_id",""),Object(C.a)(e,"dialogVisible",!1),Object(C.a)(e,"payloadOptions",{}),Object(C.a)(e,"headers",[{text:"#",align:"left",sortable:!0,key:"id",value:"id",filterable:!0,filterSpecial:!1,disabled:!0},{text:"Zone Name",align:"left",sortable:!0,key:"name",value:"name",filterable:!0,filterSpecial:!1,disabled:!1},{text:"Devices",align:"left",sortable:!0,key:"devices",value:"devices",filterable:!0,filterSpecial:!1,disabled:!1},{text:"Details",align:"left",sortable:!1,key:"options",value:"options",filterable:!0,filterSpecial:!1,disabled:!0}]),e},created:function(){var e=this;return Object(A.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.loading=!1,e.payloadOptions={params:{per_page:10,company_id:e.$auth.user.company_id}},e.getDataFromApi();case 3:case"end":return t.stop()}}),t)})))()},mounted:function(){},watch:{options:{handler:function(){this.getDataFromApi()},deep:!0}},methods:(o={can:function(e){return this.$pagePermission.can(e,this)},getCurrentShift:function(e){var t=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"][(new Date).getDay()];return e.roster.json.find((function(e){return e.day==t})).shift_name},closeViewDialog:function(){this.viewDialog=!1},caps:function(e){return""==e||null==e?"---":e.toString().replace(/\b\w/g,(function(e){return e.toUpperCase()}))},closePopup:function(){this.$refs.attachment_input.value=null,this.dialogCropping=!1},saveCroppedImageStep2:function(){this.cropedImage=this.$refs.cropper.getCroppedCanvas().toDataURL(),this.image_name=this.cropedImage,this.previewImage=this.cropedImage,this.dialogCropping=!1},close:function(){this.dialog=!1,this.errors=[],setTimeout((function(){}),300)},json_to_csv:function(e){var data=e.map((function(e){return{first_name:e.first_name,last_name:e.last_name,display_name:e.display_name,email:e.user.email,phone_number:e.phone_number,whatsapp_number:e.whatsapp_number,phone_relative_number:e.phone_relative_number,whatsapp_relative_number:e.whatsapp_relative_number,employee_id:e.employee_id,joining_date:e.show_joining_date,department_code:e.department_id,designation_code:e.designation_id,department:e.department.name,designation:e.designation.name}})),header=Object.keys(data[0]).join(",")+"\n",t="";return data.forEach((function(e){t+=Object.values(e).join(",").trim()+"\n"})),header+t},export_submit:function(){if(0==this.data.length)return this.snackbar=!0,void(this.response="No record to download");var e=this.json_to_csv(this.data),element=document.createElement("a");element.setAttribute("href","data:text/csv;charset=utf-8, "+encodeURIComponent(e)),element.setAttribute("download","download.csv"),document.body.appendChild(element),element.click(),document.body.removeChild(element)},importEmployee:function(){var e,t,r,o=this,n=new FormData;n.append("employees",this.files),n.append("company_id",null===(e=this.$auth)||void 0===e||null===(t=e.user)||void 0===t||null===(r=t.company)||void 0===r?void 0:r.id);this.btnLoader=!0,this.$axios.post("/employee/import",n,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){var data=e.data;o.btnLoader=!1,data.status?(o.errors=[],o.snackbar=!0,o.response="Employees imported successfully",o.getDataFromApi(),o.close()):o.errors=data.errors})).catch((function(e){e.toString().includes("Error: Network Error")&&(o.errors=["File is modified.Please cancel the current file and try again"],o.btnLoader=!1)}))}},Object(C.a)(o,"can",(function(e){return this.$pagePermission.can(e,this)})),Object(C.a)(o,"onPageChange",(function(){this.getDataFromApi()})),Object(C.a)(o,"applyFilters",(function(){this.getDataFromApi()})),Object(C.a)(o,"toggleFilter",(function(){this.isFilter=!this.isFilter})),Object(C.a)(o,"clearFilters",(function(){this.filters={},this.isFilter=!1,this.getDataFromApi()})),Object(C.a)(o,"getDataFromApi",(function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.endpoint;this.loadinglinear=!0;var r=this.options,o=r.sortBy,n=r.sortDesc,c=r.page,l=r.itemsPerPage,d={params:D({sortBy:o?o[0]:"",sortDesc:n?n[0]:"",per_page:l,company_id:this.$auth.user.company_id},this.filters)};this.$axios.get("".concat(t,"?page=").concat(c),d).then((function(t){var data=t.data;e.data=data.data,e.pagination.current=data.current_page,e.pagination.total=data.last_page,e.totalRowsCount=data.total,0==e.data.length?e.displayErrormsg=!0:e.displayErrormsg=!1,e.loadinglinear=!1}))})),Object(C.a)(o,"addItem",(function(){this.$router.push("/zone/create")})),Object(C.a)(o,"editItem",(function(e){this.$router.push("/zone/"+e.id)})),Object(C.a)(o,"viewItem",(function(e){this.$router.push("/zone/single/"+e.id)})),Object(C.a)(o,"deleteItem",(function(e){var t=this;confirm("Are you sure you wish to delete , to mitigate any inconvenience in future.")&&this.$axios.delete("".concat(this.endpoint,"/").concat(e.id)).then((function(e){e.data;t.getDataFromApi(),t.snackbar=!0,t.response="Record deleted successfully"})).catch((function(e){return console.log(e)}))})),o)},S=P,I=r(60),component=Object(I.a)(S,(function(){var e=this,t=e._self._c;return e.can("zone_access")?t("div",[t("div",{staticClass:"text-center ma-2"},[t(w.a,{attrs:{small:"",top:"top",color:e.color},model:{value:e.snackbar,callback:function(t){e.snackbar=t},expression:"snackbar"}},[e._v("\n      "+e._s(e.response)+"\n    ")])],1),e._v(" "),e.loading?t("Preloader"):t("div",[e.can("zone_view")?t("div",[t(d.a,[t(c.a,{attrs:{elevation:"0"}},[t(j.a,{staticClass:"mb-2",attrs:{dense:"",flat:""}},[t(O.b,[t("span",[e._v(e._s(e.Model)+"s ")])]),e._v(" "),t("span",[t(n.a,{staticClass:"ma-0 px-0",attrs:{dense:"","x-small":"",ripple:!1,text:"",title:"Reload"}},[t(m.a,{staticClass:"ml-2",attrs:{dark:""},on:{click:e.clearFilters}},[e._v("mdi mdi-reload")])],1)],1),e._v(" "),t("span",[t(n.a,{staticClass:"ma-0 px-0",attrs:{dense:"","x-small":"",ripple:!1,text:"",title:"Filter"}},[t(m.a,{staticClass:"mx-1 ml-2",on:{click:e.toggleFilter}},[e._v("mdi mdi-filter")])],1)],1),e._v(" "),t(y.a),e._v(" "),t("span",[t(n.a,{staticClass:"ma-0 px-0",attrs:{dense:"","x-small":"",ripple:!1,text:"",title:"Add Zone"},on:{click:e.addItem}},[e.can("zone_create")?t(m.a,{attrs:{right:"",size:"x-large",dark:""}},[e._v("mdi-plus-circle")]):e._e()],1)],1)],1),e._v(" "),t(f.a,{staticClass:"elevation-1",attrs:{dense:"",headers:e.headers,items:e.data,"model-value":"data.id",loading:e.loadinglinear,options:e.options,"footer-props":{itemsPerPageOptions:[100,500,1e3]},"server-items-length":e.totalRowsCount},on:{"update:options":function(t){e.options=t}},scopedSlots:e._u([{key:"header",fn:function(r){var o=r.props.headers;return[e.isFilter?t("tr",e._l(o,(function(header,r){return t("td",{key:r},[t(d.a,[t(k.a,{staticClass:"ma-3",attrs:{disabled:header.disabled,solo:"",clearable:"","hide-details":!0,id:header.value,outlined:"",dense:"",autocomplete:"off"},on:{"click:clear":function(t){e.filters[header.value]="",e.applyFilters()},input:function(t){return e.applyFilters(header.key,t)}},model:{value:e.filters[header.value],callback:function(t){e.$set(e.filters,header.value,t)},expression:"filters[header.value]"}})],1)],1)})),0):e._e()]}},{key:"item.devices",fn:function(r){var o=r.item;return[e._l(o.devices.slice(0,3),(function(r,o){return t(l.a,{key:o,staticClass:"primary ma-1",attrs:{small:""}},[e._v("\n                "+e._s(e.caps(r.short_name||"---"))+" "),t("br")])})),e._v(" "),o.devices.length>3?t(l.a,{staticClass:"background ma-1",attrs:{small:"",dark:""}},[e._v("\n                More...\n              ")]):e._e()]}},{key:"item.options",fn:function(r){var o=r.item;return[t(_.a,{attrs:{bottom:"",left:""},scopedSlots:e._u([{key:"activator",fn:function(r){var o=r.on,c=r.attrs;return[t(n.a,e._g(e._b({attrs:{"dark-2":"",icon:""}},"v-btn",c,!1),o),[t(m.a,[e._v("mdi-dots-vertical")])],1)]}}],null,!0)},[e._v(" "),t(h.a,{attrs:{width:"120",dense:""}},[t(v.a,{on:{click:function(t){return e.viewItem(o)}}},[t(x.c,{staticStyle:{cursor:"pointer"}},[t(m.a,{attrs:{color:"secondary",small:""}},[e._v(" mdi-eye ")]),e._v("\n                      View\n                    ")],1)],1),e._v(" "),e.can("zone_edit")?t(v.a,{on:{click:function(t){return e.editItem(o)}}},[t(x.c,{staticStyle:{cursor:"pointer"}},[t(m.a,{attrs:{color:"secondary",small:""}},[e._v(" mdi-pencil ")]),e._v("\n                      Edit\n                    ")],1)],1):e._e(),e._v(" "),e.can("zone_delete")?t(v.a,{on:{click:function(t){return e.deleteItem(o)}}},[t(x.c,{staticStyle:{cursor:"pointer"}},[t(m.a,{attrs:{color:"error",small:""}},[e._v(" mdi-delete ")]),e._v("\n                      Delete\n                    ")],1)],1):e._e()],1)],1)]}}],null,!1,2919781084)})],1)],1)],1):e._e()])],1):t("NoAccess")}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Preloader:r(924).default,NoAccess:r(909).default})},1470:function(e,t,r){"use strict";r(1303)},1471:function(e,t,r){var o=r(20)((function(i){return i[1]}));o.push([e.i,'.font-11[data-v-4db07f3e]{font-size:11px}.card[data-v-4db07f3e]{word-wrap:break-word;background-clip:border-box;background-color:#fff;border:1px solid rgba(0,0,0,.125);border-radius:.25rem;display:flex;flex-direction:column;min-width:0}.card-title[data-v-4db07f3e]{margin-bottom:.5rem}.mb-0[data-v-4db07f3e]{margin-bottom:0!important}.p-2[data-v-4db07f3e]{padding:.5rem!important}.text-uppercase[data-v-4db07f3e]{text-transform:uppercase!important}.text-capitalize[data-v-4db07f3e]{text-transform:capitalize!important}.text-nowrap[data-v-4db07f3e]{white-space:nowrap!important}.text-white[data-v-4db07f3e]{--bs-text-opacity:1;color:#fff!important;color:rgba(255,255,255,var(--bs-text-opacity))!important;color:rgba(var(--bs-white-rgb),1)!important;color:rgba(var(--bs-white-rgb),var(--bs-text-opacity))!important}a[data-v-4db07f3e]{font-size:14px!important;outline:none!important}a[data-v-4db07f3e],a[data-v-4db07f3e]:hover{-webkit-text-decoration:none;text-decoration:none}.row[data-v-4db07f3e]{margin-bottom:0!important}.l-bg-green-dark[data-v-4db07f3e]{background:linear-gradient(135deg,#23bdb8,#65a986)!important;color:#fff}.l-bg-red-dark[data-v-4db07f3e]{background:linear-gradient(135deg,#f44336,#dc5d54)!important;color:#fff}.l-bg-orange-dark[data-v-4db07f3e]{background:linear-gradient(135deg,#f48665,#d68e41)!important;color:#fff}.l-bg-cyan-dark[data-v-4db07f3e]{background:linear-gradient(135deg,#289cf5,#4f8bb7)!important;color:#fff}.l-bg-purple-dark[data-v-4db07f3e]{background:linear-gradient(135deg,#8e4cf1,#c554bc)!important;color:#fff}.fas[data-v-4db07f3e]{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-feature-settings:normal;display:inline-block;font-style:normal;font-variant:normal;line-height:1;text-rendering:auto}.fa-calendar-check[data-v-4db07f3e]:before{content:"\\f274"}.fa-calendar-times[data-v-4db07f3e]:before{content:"\\f273"}.fa-clock[data-v-4db07f3e]:before{content:"\\f017"}.fas[data-v-4db07f3e]{font-family:"Font Awesome 5 Free";font-weight:900}.card[data-v-4db07f3e]{background:#fff;border:1px solid #f2f4f9;border-radius:10px;box-shadow:0 0 10px 0 rgba(183,192,206,.2);-webkit-box-shadow:0 0 10px 0 rgba(183,192,206,.2);margin-bottom:24px;min-height:50px;position:relative}.card .card-statistic-3[data-v-4db07f3e]{border-radius:3px;color:#fff;overflow:hidden;padding:15px;position:relative}.card .card-statistic-3 .card-icon-large[data-v-4db07f3e]{font-size:110px;height:50px;text-shadow:3px 7px rgba(0,0,0,.3);width:110px}.card .card-statistic-3 .card-icon[data-v-4db07f3e]{color:#000;line-height:50px;margin-left:15px;opacity:.1;position:absolute;right:-5px;text-align:center;top:20px}.card .card-statistic-3 .card-content .data-1[data-v-4db07f3e]{font-size:25px;font-weight:600}',""]),o.locals={},e.exports=o},1625:function(e,t,r){"use strict";r.r(t);var o={methods:{can:function(e){return this.$pagePermission.can(e,this)}}},n=(r(1470),r(60)),component=Object(n.a)(o,(function(){var e=this._self._c;return this.can("zone_access")?e("div",[e("ZoneList")],1):e("NoAccess")}),[],!1,null,"4db07f3e",null);t.default=component.exports;installComponents(component,{ZoneList:r(1355).default,NoAccess:r(909).default})},886:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return c}));var o=r(99),n=r(1),c=Object(n.k)("v-toolbar__title"),l=Object(n.k)("v-toolbar__items");o.a},909:function(e,t,r){"use strict";r.r(t);var o=r(60),component=Object(o.a)({},(function(){this._self._c;return this._m(0)}),[function(){var e=this._self._c;return e("div",{staticClass:"text-center",staticStyle:{"margin-top":"25%"}},[e("b",[this._v("No Access")])])}],!1,null,null,null);t.default=component.exports},923:function(e,t,r){var content=r(933);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(21).default)("8f215f56",content,!0,{sourceMap:!1})},924:function(e,t,r){"use strict";r.r(t);var o=r(219),n=r(60),component=Object(n.a)({},(function(){var e=this._self._c;return e("div",{staticClass:"text-center",staticStyle:{width:"50px",margin:"25% auto"}},[e(o.a,{attrs:{src:"/preloaders/1.gif"}})],1)}),[],!1,null,null,null);t.default=component.exports},933:function(e,t,r){var o=r(20)((function(i){return i[1]}));o.push([e.i,'/*!\n * Cropper.js v1.5.13\n * https://fengyuanchen.github.io/cropperjs\n *\n * Copyright 2015-present Chen Fengyuan\n * Released under the MIT license\n *\n * Date: 2022-11-20T05:30:43.444Z\n */.cropper-container{direction:ltr;font-size:0;line-height:0;position:relative;touch-action:none;-webkit-user-select:none;-moz-user-select:none;user-select:none}.cropper-container img{backface-visibility:hidden;display:block;height:100%;image-orientation:0deg;max-height:none!important;max-width:none!important;min-height:0!important;min-width:0!important;width:100%}.cropper-canvas,.cropper-crop-box,.cropper-drag-box,.cropper-modal,.cropper-wrap-box{bottom:0;left:0;position:absolute;right:0;top:0}.cropper-canvas,.cropper-wrap-box{overflow:hidden}.cropper-drag-box{background-color:#fff;opacity:0}.cropper-modal{background-color:#000;opacity:.5}.cropper-view-box{display:block;height:100%;outline:1px solid #39f;outline-color:rgba(51,153,255,.75);overflow:hidden;width:100%}.cropper-dashed{border:0 dashed #eee;display:block;opacity:.5;position:absolute}.cropper-dashed.dashed-h{border-bottom-width:1px;border-top-width:1px;height:33.33333%;left:0;top:33.33333%;width:100%}.cropper-dashed.dashed-v{border-left-width:1px;border-right-width:1px;height:100%;left:33.33333%;top:0;width:33.33333%}.cropper-center{display:block;height:0;left:50%;opacity:.75;position:absolute;top:50%;width:0}.cropper-center:after,.cropper-center:before{background-color:#eee;content:" ";display:block;position:absolute}.cropper-center:before{height:1px;left:-3px;top:0;width:7px}.cropper-center:after{height:7px;left:0;top:-3px;width:1px}.cropper-face,.cropper-line,.cropper-point{display:block;height:100%;opacity:.1;position:absolute;width:100%}.cropper-face{background-color:#fff;left:0;top:0}.cropper-line{background-color:#39f}.cropper-line.line-e{cursor:ew-resize;right:-3px;top:0;width:5px}.cropper-line.line-n{cursor:ns-resize;height:5px;left:0;top:-3px}.cropper-line.line-w{cursor:ew-resize;left:-3px;top:0;width:5px}.cropper-line.line-s{bottom:-3px;cursor:ns-resize;height:5px;left:0}.cropper-point{background-color:#39f;height:5px;opacity:.75;width:5px}.cropper-point.point-e{cursor:ew-resize;margin-top:-3px;right:-3px;top:50%}.cropper-point.point-n{cursor:ns-resize;left:50%;margin-left:-3px;top:-3px}.cropper-point.point-w{cursor:ew-resize;left:-3px;margin-top:-3px;top:50%}.cropper-point.point-s{bottom:-3px;cursor:s-resize;left:50%;margin-left:-3px}.cropper-point.point-ne{cursor:nesw-resize;right:-3px;top:-3px}.cropper-point.point-nw{cursor:nwse-resize;left:-3px;top:-3px}.cropper-point.point-sw{bottom:-3px;cursor:nesw-resize;left:-3px}.cropper-point.point-se{bottom:-3px;cursor:nwse-resize;height:20px;opacity:1;right:-3px;width:20px}@media (min-width:768px){.cropper-point.point-se{height:15px;width:15px}}@media (min-width:992px){.cropper-point.point-se{height:10px;width:10px}}@media (min-width:1200px){.cropper-point.point-se{height:5px;opacity:.75;width:5px}}.cropper-point.point-se:before{background-color:#39f;bottom:-50%;content:" ";display:block;height:200%;opacity:0;position:absolute;right:-50%;width:200%}.cropper-invisible{opacity:0}.cropper-bg{background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAAA3NCSVQICAjb4U/gAAAABlBMVEXMzMz////TjRV2AAAACXBIWXMAAArrAAAK6wGCiw1aAAAAHHRFWHRTb2Z0d2FyZQBBZG9iZSBGaXJld29ya3MgQ1M26LyyjAAAABFJREFUCJlj+M/AgBVhF/0PAH6/D/HkDxOGAAAAAElFTkSuQmCC")}.cropper-hide{display:block;height:0;position:absolute;width:0}.cropper-hidden{display:none!important}.cropper-move{cursor:move}.cropper-crop{cursor:crosshair}.cropper-disabled .cropper-drag-box,.cropper-disabled .cropper-face,.cropper-disabled .cropper-line,.cropper-disabled .cropper-point{cursor:not-allowed}',""]),o.locals={},e.exports=o}}]);