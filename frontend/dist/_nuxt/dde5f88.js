(window.webpackJsonp=window.webpackJsonp||[]).push([[142,36],{1328:function(e,t,r){"use strict";r.r(t);var n=r(894),o=r(114),l=r(133),c=r(87),d=r(516),m=r(350),h=r(515),f=r(893),v=r(873),y=r(214),_=(r(12),r(14),r(13),r(6),r(17),r(11),r(18),r(23)),x=r(3),I=(r(55),r(88),r(897),r(910));function w(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function O(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?w(Object(source),!0).forEach((function(t){Object(x.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):w(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var S={components:{VueCropper:r.n(I).a},props:["employeeId"],data:function(){var e;return e={image:"",leave_managers:[],mime_type:"",cropedImage:"",cropper:"",autoCrop:!1,dialogCropping:!1,selectedFile:"",upload_edit:{name:""},attrs:[],dialog:!1,editDialog:!1,tab:null,m:!1,expand:!1,expand2:!1,boilerplate:!1,right:!0,rightDrawer:!1,drawer:!0},Object(x.a)(e,"tab",null),Object(x.a)(e,"selectedItem",1),Object(x.a)(e,"on",""),Object(x.a)(e,"color","background"),Object(x.a)(e,"files",""),Object(x.a)(e,"Model","Employee"),Object(x.a)(e,"endpoint","employee"),Object(x.a)(e,"search",""),Object(x.a)(e,"loading",!1),Object(x.a)(e,"total",0),Object(x.a)(e,"next_page_url",""),Object(x.a)(e,"prev_page_url",""),Object(x.a)(e,"current_page",1),Object(x.a)(e,"per_page",8),Object(x.a)(e,"response",""),Object(x.a)(e,"ListName",""),Object(x.a)(e,"snackbar",!1),Object(x.a)(e,"btnLoader",!1),Object(x.a)(e,"max_employee",0),Object(x.a)(e,"employee",{title:"",display_name:"",employee_id:"",system_user_id:"",profile_picture:"",leave_group_id:"",reporting_manager_id:""}),Object(x.a)(e,"upload",{name:""}),Object(x.a)(e,"setPreviewImage",null),Object(x.a)(e,"snackbar",!1),Object(x.a)(e,"ids",[]),Object(x.a)(e,"loading",!1),Object(x.a)(e,"total",0),Object(x.a)(e,"titleItems",["Mr","Mrs","Miss","Ms","Dr"]),Object(x.a)(e,"editedIndex",-1),Object(x.a)(e,"response",""),Object(x.a)(e,"departments",[]),Object(x.a)(e,"sub_departments",[]),Object(x.a)(e,"designations",[]),Object(x.a)(e,"leave_groups",[]),Object(x.a)(e,"data",[]),Object(x.a)(e,"errors",[]),Object(x.a)(e,"departments",[]),Object(x.a)(e,"department_id",""),Object(x.a)(e,"branchesList",[]),Object(x.a)(e,"isCompany",!0),Object(x.a)(e,"isImage",!1),e},created:function(){var e=this;return Object(_.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.getInfo(e.employeeId),e.getDepartments();case 2:case"end":return t.stop()}}),t)})))()},mounted:function(){},watch:{dialog:function(e){e||this.close()},options:{handler:function(){this.getDataFromApi()},deep:!0}},methods:{handleAttachment:function(e){this.isImage=!0,this.employee.profile_picture=e},getInfo:function(e){var t=this;this.$axios.get("employee-single/".concat(e)).then((function(e){var data=e.data;t.employee={title:data.title,display_name:data.display_name,full_name:data.full_name,first_name:data.first_name,last_name:data.last_name,employee_id:data.employee_id,system_user_id:data.system_user_id,department_id:data.department_id,sub_department_id:data.sub_department_id,designation_id:data.designation_id,leave_group_id:data.leave_group_id,reporting_manager_id:data.reporting_manager_id,branch_id:data.branch_id},t.setPreviewImage=data.profile_picture,t.getDesignations()})).catch((function(e){return console.log(e)}))},getDesignations:function(){var e=this;this.$axios.get("designation",{params:{per_page:1e3,company_id:this.$auth.user.company_id}}).then((function(t){var data=t.data;e.designations=data.data})).catch((function(e){return console.log(e)}))},getDepartments:function(){var e=this;this.$axios.get("departments",{params:{per_page:1e3,company_id:this.$auth.user.company_id}}).then((function(t){var data=t.data;e.departments=data.data}))},can:function(){return!0},close:function(){this.dialog=!1},store_data:function(){var e=this,t={};t=this.isImage?this.employee:O(O({},this.employee),{},{profile_picture:null}),this.$axios.post("/employee-update/".concat(this.employeeId),t).then((function(t){var data=t.data;e.loading=!1,data.status?(e.errors=[],e.snackbar=!0,e.response="Employees Updated successfully",e.$emit("eventFromchild"),setTimeout((function(){e.$emit("close-popup")}),1e3)):e.errors=data.errors})).catch((function(e){return console.log(e)}))}}},j=r(116),component=Object(j.a)(S,(function(){var e=this,t=e._self._c;return t("div",[t("div",{staticClass:"text-center ma-2"},[t(v.a,{attrs:{small:"",top:"top",color:e.color},model:{value:e.snackbar,callback:function(t){e.snackbar=t},expression:"snackbar"}},[e._v("\n      "+e._s(e.response)+"\n    ")])],1),e._v(" "),t(l.a,[t(c.b,[t(m.a,{attrs:{width:"500"},model:{value:e.dialogCropping,callback:function(t){e.dialogCropping=t},expression:"dialogCropping"}},[t(l.a,{staticStyle:{"padding-top":"20px"}},[t(c.b,[t("VueCropper",{directives:[{name:"show",rawName:"v-show",value:e.selectedFile,expression:"selectedFile"}],ref:"cropper",attrs:{src:e.selectedFile,alt:"Source Image",aspectRatio:1,autoCropArea:.9,viewMode:3}})],1),e._v(" "),t(c.a,[t("div",{staticClass:"col-sm-12 col-md-6 col-12 pull-left",attrs:{col:"6",md:"6"}},[t(o.a,{staticClass:"danger btn btn-danger text-left",staticStyle:{float:"left"},attrs:{text:""},on:{click:function(t){return e.closePopup()}}},[e._v("Cancel")])],1),e._v(" "),t("div",{staticClass:"col-sm-12 col-md-6 col-12 text-right",attrs:{col:"6",md:"6"}},[t(o.a,{staticClass:"primary btn btn-danger text-right",on:{click:function(t){e.saveCroppedImageStep2(),e.dialog=!1}}},[e._v("Crop")])],1)])],1)],1),e._v(" "),t(h.a,[t(d.a,{attrs:{md:"6",sm:"12",cols:"12",dense:""}},[t(h.a,[t(d.a,{attrs:{md:"6",sm:"12",cols:"12"}},[t(f.a,{attrs:{label:"Title",items:e.titleItems,"hide-details":!e.errors.title,error:e.errors.title,"error-messages":e.errors&&e.errors.title?e.errors.title[0]:"",dense:"",outlined:""},model:{value:e.employee.title,callback:function(t){e.$set(e.employee,"title",t)},expression:"employee.title"}})],1)],1),e._v(" "),t(h.a,[t(d.a,{attrs:{md:"6",sm:"12",cols:"12",dense:""}},[t(y.a,{attrs:{label:"Display Name",dense:"",outlined:"","hide-details":!e.errors.display_name,type:"text","error-messages":e.errors&&e.errors.display_name?e.errors.display_name[0]:""},model:{value:e.employee.display_name,callback:function(t){e.$set(e.employee,"display_name",t)},expression:"employee.display_name"}})],1),e._v(" "),t(d.a,{attrs:{md:"6",sm:"12",cols:"12",dense:""}},[t(y.a,{attrs:{label:"Full Name",dense:"",outlined:"","hide-details":!e.errors.full_name,type:"text","error-messages":e.errors&&e.errors.full_name?e.errors.full_name[0]:""},model:{value:e.employee.full_name,callback:function(t){e.$set(e.employee,"full_name",t)},expression:"employee.full_name"}})],1),e._v(" "),t(d.a,{attrs:{md:"6",sm:"12",cols:"12",dense:""}},[t(y.a,{attrs:{label:"First Name ",dense:"",outlined:"","hide-details":!e.errors.first_name,type:"text",error:e.errors.first_name,"error-messages":e.errors&&e.errors.first_name?e.errors.first_name[0]:""},model:{value:e.employee.first_name,callback:function(t){e.$set(e.employee,"first_name",t)},expression:"employee.first_name"}})],1),e._v(" "),t(d.a,{attrs:{md:"6",sm:"12",cols:"12",dense:""}},[t(y.a,{attrs:{label:"Last Name",dense:"",outlined:"","hide-details":!e.errors.last_name,type:"text",error:e.errors.last_name,"error-messages":e.errors&&e.errors.last_name?e.errors.last_name[0]:""},model:{value:e.employee.last_name,callback:function(t){e.$set(e.employee,"last_name",t)},expression:"employee.last_name"}})],1),e._v(" "),t(d.a,{attrs:{md:"6",cols:"12",sm:"12",dense:""}},[t(y.a,{attrs:{label:"Employee ID",dense:"",outlined:"",type:"text","hide-details":!e.errors.employee_id,error:e.errors.employee_id,"error-messages":e.errors&&e.errors.employee_id?e.errors.employee_id[0]:""},model:{value:e.employee.employee_id,callback:function(t){e.$set(e.employee,"employee_id",t)},expression:"employee.employee_id"}})],1),e._v(" "),t(d.a,{attrs:{md:"6",cols:"12",sm:"12",dense:""}},[t(y.a,{attrs:{label:"Employee Device Id",dense:"",outlined:"",type:"text","hide-details":!e.errors.system_user_id,error:e.errors.system_user_id,"error-messages":e.errors&&e.errors.system_user_id?e.errors.system_user_id[0]:""},model:{value:e.employee.system_user_id,callback:function(t){e.$set(e.employee,"system_user_id",t)},expression:"employee.system_user_id"}})],1),e._v(" "),t(d.a,{attrs:{md:"6",sm:"12",cols:"12"}},[t(f.a,{attrs:{label:"Department",items:e.departments,"item-text":"name","item-value":"id",placeholder:"Select","hide-details":!e.errors.department_id,"error-messages":e.errors&&e.errors.department_id?e.errors.department_id[0]:"",dense:"",outlined:""},model:{value:e.employee.department_id,callback:function(t){e.$set(e.employee,"department_id",t)},expression:"employee.department_id"}})],1),e._v(" "),t(d.a,{attrs:{md:"6",sm:"12",cols:"12"}},[t(n.a,{attrs:{label:"Designation ",items:e.designations,"item-text":"name","item-value":"id",placeholder:"Select","hide-details":!e.errors.designation_id,error:e.errors.designation_id,"error-messages":e.errors&&e.errors.designation_id?e.errors.designation_id[0]:"",dense:"",outlined:""},model:{value:e.employee.designation_id,callback:function(t){e.$set(e.employee,"designation_id",t)},expression:"employee.designation_id"}})],1)],1)],1),e._v(" "),t(d.a,{staticClass:"col-sm-6"},[t("CameraORUpload",{attrs:{PreviewImage:e.setPreviewImage},on:{imageSrc:e.handleAttachment}}),e._v(" "),e.errors&&e.errors.profile_picture?t("span",{staticClass:"text-danger mt-2"},[e._v(e._s(e.errors.profile_picture[0]))]):e._e()],1),e._v(" "),t(d.a,{staticClass:"text-right",attrs:{cols:"12"}},[e.can("employee_edit")?t(o.a,{attrs:{small:"",loading:e.loading,color:"primary"},on:{click:e.store_data}},[e._v("\n            Submit\n          ")]):e._e()],1)],1)],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{CameraORUpload:r(909).default})},884:function(e,t,r){var content=r(885);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(22).default)("1377ef10",content,!0,{sourceMap:!1})},885:function(e,t,r){var n=r(21)((function(i){return i[1]}));n.push([e.i,".v-autocomplete.v-input>.v-input__control>.v-input__slot{cursor:text}.v-autocomplete input{align-self:center}.v-autocomplete.v-select.v-input--is-focused input{min-width:64px}.v-autocomplete:not(.v-input--is-focused).v-select--chips input{max-height:0;padding:0}.v-autocomplete--is-selecting-index input{opacity:0}.v-autocomplete.v-text-field--enclosed:not(.v-text-field--solo):not(.v-text-field--single-line):not(.v-text-field--outlined) .v-select__slot>input{margin-top:24px}.v-autocomplete.v-text-field--enclosed:not(.v-text-field--solo):not(.v-text-field--single-line):not(.v-text-field--outlined).v-input--dense .v-select__slot>input{margin-top:20px}.v-autocomplete__content.v-menu__content,.v-autocomplete__content.v-menu__content .v-card{border-radius:0}",""]),n.locals={},e.exports=n},894:function(e,t,r){"use strict";r(12),r(14),r(17),r(11),r(18);var n=r(3),o=(r(80),r(6),r(13),r(89),r(99),r(216),r(41),r(61),r(884),r(893)),l=r(214),c=r(65),d=r(0);function m(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function h(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var f=h(h({},o.b),{},{offsetY:!0,offsetOverflow:!0,transition:!1});t.a=o.a.extend({name:"v-autocomplete",props:{autoSelectFirst:{type:Boolean,default:!1},filter:{type:Function,default:function(e,t,r){return r.toLocaleLowerCase().indexOf(t.toLocaleLowerCase())>-1}},hideNoData:Boolean,menuProps:{type:o.a.options.props.menuProps.type,default:function(){return f}},noFilter:Boolean,searchInput:{type:String}},data:function(){return{lazySearch:this.searchInput}},computed:{classes:function(){return h(h({},o.a.options.computed.classes.call(this)),{},{"v-autocomplete":!0,"v-autocomplete--is-selecting-index":this.selectedIndex>-1})},computedItems:function(){return this.filteredItems},selectedValues:function(){var e=this;return this.selectedItems.map((function(t){return e.getValue(t)}))},hasDisplayedItems:function(){var e=this;return this.hideSelected?this.filteredItems.some((function(t){return!e.hasItem(t)})):this.filteredItems.length>0},currentRange:function(){return null==this.selectedItem?0:String(this.getText(this.selectedItem)).length},filteredItems:function(){var e=this;return!this.isSearching||this.noFilter||null==this.internalSearch?this.allItems:this.allItems.filter((function(t){var r=Object(d.s)(t,e.itemText),text=null!=r?String(r):"";return e.filter(t,String(e.internalSearch),text)}))},internalSearch:{get:function(){return this.lazySearch},set:function(e){this.lazySearch!==e&&(this.lazySearch=e,this.$emit("update:search-input",e))}},isAnyValueAllowed:function(){return!1},isDirty:function(){return this.searchIsDirty||this.selectedItems.length>0},isSearching:function(){return this.multiple&&this.searchIsDirty||this.searchIsDirty&&this.internalSearch!==this.getText(this.selectedItem)},menuCanShow:function(){return!!this.isFocused&&(this.hasDisplayedItems||!this.hideNoData)},$_menuProps:function(){var e=o.a.options.computed.$_menuProps.call(this);return e.contentClass="v-autocomplete__content ".concat(e.contentClass||"").trim(),h(h({},f),e)},searchIsDirty:function(){return null!=this.internalSearch&&""!==this.internalSearch},selectedItem:function(){var e=this;return this.multiple?null:this.selectedItems.find((function(i){return e.valueComparator(e.getValue(i),e.getValue(e.internalValue))}))},listData:function(){var data=o.a.options.computed.listData.call(this);return data.props=h(h({},data.props),{},{items:this.virtualizedItems,noFilter:this.noFilter||!this.isSearching||!this.filteredItems.length,searchInput:this.internalSearch}),data}},watch:{filteredItems:"onFilteredItemsChanged",internalValue:"setSearch",isFocused:function(e){e?(document.addEventListener("copy",this.onCopy),this.$refs.input&&this.$refs.input.select()):(document.removeEventListener("copy",this.onCopy),this.blur(),this.updateSelf())},isMenuActive:function(e){!e&&this.hasSlot&&(this.lazySearch=null)},items:function(e,t){t&&t.length||!this.hideNoData||!this.isFocused||this.isMenuActive||!e.length||this.activateMenu()},searchInput:function(e){this.lazySearch=e},internalSearch:"onInternalSearchChanged",itemText:"updateSelf"},created:function(){this.setSearch()},destroyed:function(){document.removeEventListener("copy",this.onCopy)},methods:{onFilteredItemsChanged:function(e,t){var r=this;if(e!==t){if(!this.autoSelectFirst){var n=t[this.$refs.menu.listIndex];n?this.setMenuIndex(e.findIndex((function(i){return i===n}))):this.setMenuIndex(-1),this.$emit("update:list-index",this.$refs.menu.listIndex)}this.$nextTick((function(){r.internalSearch&&(1===e.length||r.autoSelectFirst)&&(r.$refs.menu.getTiles(),r.autoSelectFirst&&e.length&&(r.setMenuIndex(0),r.$emit("update:list-index",r.$refs.menu.listIndex)))}))}},onInternalSearchChanged:function(){this.updateMenuDimensions()},updateMenuDimensions:function(){this.isMenuActive&&this.$refs.menu&&this.$refs.menu.updateDimensions()},changeSelectedIndex:function(e){this.searchIsDirty||(this.multiple&&e===d.z.left?-1===this.selectedIndex?this.selectedIndex=this.selectedItems.length-1:this.selectedIndex--:this.multiple&&e===d.z.right?this.selectedIndex>=this.selectedItems.length-1?this.selectedIndex=-1:this.selectedIndex++:e!==d.z.backspace&&e!==d.z.delete||this.deleteCurrentItem())},deleteCurrentItem:function(){var e=this.selectedIndex,t=this.selectedItems[e];if(this.isInteractive&&!this.getDisabled(t)){var r=this.selectedItems.length-1;if(-1!==this.selectedIndex||0===r){var n=e!==this.selectedItems.length-1?e:e-1;this.selectedItems[n]?this.selectItem(t):this.setValue(this.multiple?[]:null),this.selectedIndex=n}else this.selectedIndex=r}},clearableCallback:function(){this.internalSearch=null,o.a.options.methods.clearableCallback.call(this)},genInput:function(){var input=l.a.options.methods.genInput.call(this);return input.data=Object(c.a)(input.data,{attrs:{"aria-activedescendant":Object(d.q)(this.$refs.menu,"activeTile.id"),autocomplete:Object(d.q)(input.data,"attrs.autocomplete","off")},domProps:{value:this.internalSearch}}),input},genInputSlot:function(){var slot=o.a.options.methods.genInputSlot.call(this);return slot.data.attrs.role="combobox",slot},genSelections:function(){return this.hasSlot||this.multiple?o.a.options.methods.genSelections.call(this):[]},onClick:function(e){this.isInteractive&&(this.selectedIndex>-1?this.selectedIndex=-1:this.onFocus(),this.isAppendInner(e.target)||this.activateMenu())},onInput:function(e){if(!(this.selectedIndex>-1)&&e.target){var t=e.target,r=t.value;t.value&&this.activateMenu(),this.multiple||""!==r||this.deleteCurrentItem(),this.internalSearch=r,this.badInput=t.validity&&t.validity.badInput}},onKeyDown:function(e){var t=e.keyCode;!e.ctrlKey&&[d.z.home,d.z.end].includes(t)||o.a.options.methods.onKeyDown.call(this,e),this.changeSelectedIndex(t)},onSpaceDown:function(e){},onTabDown:function(e){o.a.options.methods.onTabDown.call(this,e),this.updateSelf()},onUpDown:function(e){e.preventDefault(),this.activateMenu()},selectItem:function(e){o.a.options.methods.selectItem.call(this,e),this.setSearch()},setSelectedItems:function(){o.a.options.methods.setSelectedItems.call(this),this.isFocused||this.setSearch()},setSearch:function(){var e=this;this.$nextTick((function(){e.multiple&&e.internalSearch&&e.isMenuActive||(e.internalSearch=!e.selectedItems.length||e.multiple||e.hasSlot?null:e.getText(e.selectedItem))}))},updateSelf:function(){(this.searchIsDirty||this.internalValue)&&(this.multiple||this.valueComparator(this.internalSearch,this.getValue(this.internalValue))||this.setSearch())},hasItem:function(e){return this.selectedValues.indexOf(this.getValue(e))>-1},onCopy:function(e){var t,r;if(-1!==this.selectedIndex){var n=this.selectedItems[this.selectedIndex],o=this.getText(n);null===(t=e.clipboardData)||void 0===t||t.setData("text/plain",o),null===(r=e.clipboardData)||void 0===r||r.setData("text/vnd.vuetify.autocomplete.item+plain",o),e.preventDefault()}}}})},897:function(e,t,r){var content=r(905);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(22).default)("8f215f56",content,!0,{sourceMap:!1})},905:function(e,t,r){var n=r(21)((function(i){return i[1]}));n.push([e.i,'/*!\n * Cropper.js v1.5.13\n * https://fengyuanchen.github.io/cropperjs\n *\n * Copyright 2015-present Chen Fengyuan\n * Released under the MIT license\n *\n * Date: 2022-11-20T05:30:43.444Z\n */.cropper-container{direction:ltr;font-size:0;line-height:0;position:relative;touch-action:none;-webkit-user-select:none;-moz-user-select:none;user-select:none}.cropper-container img{backface-visibility:hidden;display:block;height:100%;image-orientation:0deg;max-height:none!important;max-width:none!important;min-height:0!important;min-width:0!important;width:100%}.cropper-canvas,.cropper-crop-box,.cropper-drag-box,.cropper-modal,.cropper-wrap-box{bottom:0;left:0;position:absolute;right:0;top:0}.cropper-canvas,.cropper-wrap-box{overflow:hidden}.cropper-drag-box{background-color:#fff;opacity:0}.cropper-modal{background-color:#000;opacity:.5}.cropper-view-box{display:block;height:100%;outline:1px solid #39f;outline-color:rgba(51,153,255,.75);overflow:hidden;width:100%}.cropper-dashed{border:0 dashed #eee;display:block;opacity:.5;position:absolute}.cropper-dashed.dashed-h{border-bottom-width:1px;border-top-width:1px;height:33.33333%;left:0;top:33.33333%;width:100%}.cropper-dashed.dashed-v{border-left-width:1px;border-right-width:1px;height:100%;left:33.33333%;top:0;width:33.33333%}.cropper-center{display:block;height:0;left:50%;opacity:.75;position:absolute;top:50%;width:0}.cropper-center:after,.cropper-center:before{background-color:#eee;content:" ";display:block;position:absolute}.cropper-center:before{height:1px;left:-3px;top:0;width:7px}.cropper-center:after{height:7px;left:0;top:-3px;width:1px}.cropper-face,.cropper-line,.cropper-point{display:block;height:100%;opacity:.1;position:absolute;width:100%}.cropper-face{background-color:#fff;left:0;top:0}.cropper-line{background-color:#39f}.cropper-line.line-e{cursor:ew-resize;right:-3px;top:0;width:5px}.cropper-line.line-n{cursor:ns-resize;height:5px;left:0;top:-3px}.cropper-line.line-w{cursor:ew-resize;left:-3px;top:0;width:5px}.cropper-line.line-s{bottom:-3px;cursor:ns-resize;height:5px;left:0}.cropper-point{background-color:#39f;height:5px;opacity:.75;width:5px}.cropper-point.point-e{cursor:ew-resize;margin-top:-3px;right:-3px;top:50%}.cropper-point.point-n{cursor:ns-resize;left:50%;margin-left:-3px;top:-3px}.cropper-point.point-w{cursor:ew-resize;left:-3px;margin-top:-3px;top:50%}.cropper-point.point-s{bottom:-3px;cursor:s-resize;left:50%;margin-left:-3px}.cropper-point.point-ne{cursor:nesw-resize;right:-3px;top:-3px}.cropper-point.point-nw{cursor:nwse-resize;left:-3px;top:-3px}.cropper-point.point-sw{bottom:-3px;cursor:nesw-resize;left:-3px}.cropper-point.point-se{bottom:-3px;cursor:nwse-resize;height:20px;opacity:1;right:-3px;width:20px}@media (min-width:768px){.cropper-point.point-se{height:15px;width:15px}}@media (min-width:992px){.cropper-point.point-se{height:10px;width:10px}}@media (min-width:1200px){.cropper-point.point-se{height:5px;opacity:.75;width:5px}}.cropper-point.point-se:before{background-color:#39f;bottom:-50%;content:" ";display:block;height:200%;opacity:0;position:absolute;right:-50%;width:200%}.cropper-invisible{opacity:0}.cropper-bg{background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAAA3NCSVQICAjb4U/gAAAABlBMVEXMzMz////TjRV2AAAACXBIWXMAAArrAAAK6wGCiw1aAAAAHHRFWHRTb2Z0d2FyZQBBZG9iZSBGaXJld29ya3MgQ1M26LyyjAAAABFJREFUCJlj+M/AgBVhF/0PAH6/D/HkDxOGAAAAAElFTkSuQmCC")}.cropper-hide{display:block;height:0;position:absolute;width:0}.cropper-hidden{display:none!important}.cropper-move{cursor:move}.cropper-crop{cursor:crosshair}.cropper-disabled .cropper-drag-box,.cropper-disabled .cropper-face,.cropper-disabled .cropper-line,.cropper-disabled .cropper-point{cursor:not-allowed}',""]),n.locals={},e.exports=n},909:function(e,t,r){"use strict";r.r(t);var n=r(329),o=r(147),l=r(23),c=(r(6),r(11),r(88),{auth:!1,layout:"login",props:{PreviewImage:{type:String,default:"/no-profile-image.jpg"}},data:function(){return{isClicked:!1,isCamera:!1,videoStream:null,isUpload:!0,PlaceHolderImage:null}},mounted:function(){this.setupCamera(),this.PlaceHolderImage=this.PreviewImage},methods:{setupCamera:function(){var e=this;return Object(l.a)(regeneratorRuntime.mark((function t(){var r,video;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,navigator.mediaDevices.getUserMedia({video:!0});case 3:r=t.sent,(video=e.$refs.video).srcObject=r,e.videoStream=r,video.play(),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),console.error("Error accessing the camera: ",t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})))()},toggleCamera:function(){this.isClicked=!0,this.isUpload=!1,this.isCamera=!this.isCamera;var video=this.$refs.video,canvas=this.$refs.canvas,e=canvas.getContext("2d");canvas.width=video.videoWidth,canvas.height=video.videoHeight,e.drawImage(video,0,0,canvas.width,canvas.height),this.$emit("imageSrc",canvas.toDataURL("image/png")),this.isCamera?video.play():this.isCamera||(this.isUpload=!1,video.pause())},uploadPicture:function(){this.$refs.fileInput.click()},handleFileUpload:function(e){var t=this,r=e.target.files[0],n=new FileReader;n.onload=function(e){t.isUpload=!0,t.PlaceHolderImage=e.target.result,t.$emit("imageSrc",e.target.result)},n.readAsDataURL(r)},beforeDestroy:function(){this.videoStream&&this.videoStream.getTracks().forEach((function(track){return track.stop()}))}}}),d=r(116),component=Object(d.a)(c,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"text-center"},[t(n.a,{staticStyle:{border:"1px solid #6946dd"},attrs:{size:"175"}},[t("img",{directives:[{name:"show",rawName:"v-show",value:e.isUpload,expression:"isUpload"}],ref:"img",attrs:{src:e.PlaceHolderImage,alt:""}}),e._v(" "),t("video",{directives:[{name:"show",rawName:"v-show",value:!e.isUpload,expression:"!isUpload"}],ref:"video",attrs:{width:"100%",autoplay:"",playsinline:""}}),e._v(" "),t("canvas",{ref:"canvas",staticStyle:{display:"none"}})]),e._v(" "),t("div",{staticClass:"pa-5"},[t(o.a,{attrs:{large:"",color:"primary"},on:{click:e.toggleCamera}},[e._v("mdi-camera")]),e._v(" "),t(o.a,{attrs:{large:"",color:"primary"},on:{click:e.uploadPicture}},[e._v("mdi-folder-open")])],1),e._v(" "),t("input",{ref:"fileInput",staticStyle:{display:"none"},attrs:{type:"file"},on:{change:e.handleFileUpload}})],1)}),[],!1,null,null,null);t.default=component.exports}}]);