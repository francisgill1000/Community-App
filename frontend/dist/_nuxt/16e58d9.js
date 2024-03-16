(window.webpackJsonp=window.webpackJsonp||[]).push([[152],{1212:function(e,t,o){"use strict";o.r(t);var n=o(921),r=o(117),l=o(138),c=o(79),d=o(539),h=o(361),m=o(342),f=o(538),v=o(900),x=o(221),y=o(86),I=(o(37),o(17)),w=o(2),_=(o(69),o(923),o(936)),S={components:{VueCropper:o.n(_).a},props:["employeeId"],data:function(){var e;return e={image:"",mime_type:"",cropedImage:"",cropper:"",autoCrop:!1,dialogCropping:!1,selectedFile:"",upload_edit:{name:""},attrs:[],dialog:!1,editDialog:!1,tab:null,m:!1,expand:!1,expand2:!1,boilerplate:!1,right:!0,rightDrawer:!1,drawer:!0},Object(w.a)(e,"tab",null),Object(w.a)(e,"selectedItem",1),Object(w.a)(e,"on",""),Object(w.a)(e,"color","background"),Object(w.a)(e,"files",""),Object(w.a)(e,"Model","Employee"),Object(w.a)(e,"endpoint","employee"),Object(w.a)(e,"search",""),Object(w.a)(e,"total",0),Object(w.a)(e,"next_page_url",""),Object(w.a)(e,"prev_page_url",""),Object(w.a)(e,"current_page",1),Object(w.a)(e,"per_page",8),Object(w.a)(e,"response",""),Object(w.a)(e,"ListName",""),Object(w.a)(e,"snackbar",!1),Object(w.a)(e,"btnLoader",!1),Object(w.a)(e,"max_employee",0),Object(w.a)(e,"employee",{email:"",employee_role_id:""}),Object(w.a)(e,"upload",{name:""}),Object(w.a)(e,"previewImage",null),Object(w.a)(e,"snackbar",!1),Object(w.a)(e,"ids",[]),Object(w.a)(e,"loading",!1),Object(w.a)(e,"total",0),Object(w.a)(e,"titleItems",["Mr","Mrs","Miss","Ms","Dr"]),Object(w.a)(e,"editedIndex",-1),Object(w.a)(e,"response",""),Object(w.a)(e,"data",[]),Object(w.a)(e,"errors",[]),Object(w.a)(e,"departments",[]),Object(w.a)(e,"department_id",""),Object(w.a)(e,"roles",[]),Object(w.a)(e,"payloadOptions",{}),e},created:function(){this.payloadOptions={params:{per_page:10,company_id:this.$auth.user.company_id}},this.getInfo(this.employeeId),this.getRoles()},mounted:function(){},watch:{dialog:function(e){e||this.close()},options:{handler:function(){this.getDataFromApi()},deep:!0}},methods:{getInfo:function(e){var t=this;return Object(I.a)(regeneratorRuntime.mark((function o(){return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return t.loading=!0,o.next=3,t.$axios.get("employee-single/".concat(e)).then((function(o){var data=o.data;t.employee=data.user,t.employee.employee_id=e,t.employee.company_id=t.$auth.user.company_id,t.loading=!1})).catch((function(e){return console.log(e)}));case 3:case"end":return o.stop()}}),o)})))()},can:function(){return!0},getRoles:function(){var e=this;this.payloadOptions.params.role_type="employee",this.$axios.get("role",this.payloadOptions).then((function(t){var data=t.data;e.roles=data.data}))},close:function(){this.dialog=!1},submit:function(){var e=this;this.loading=!0,this.$axios.post("/employee-login-update/".concat(this.employee.id||0),this.employee).then((function(t){var data=t.data;e.loading=!1,console.log("employee",e.employee),data.status?(e.errors=[],e.snackbar=!0,e.response="Employees Updated successfully",e.employee.id=data.record,e.$emit("eventFromchild"),e.$emit("close-popup")):e.errors=data.errors})).catch((function(e){return console.log(e)}))}}},O=o(60),component=Object(O.a)(S,(function(){var e=this,t=e._self._c;return t("div",[t("div",{staticClass:"text-center ma-2"},[t(v.a,{attrs:{small:"",top:"top",color:e.color},model:{value:e.snackbar,callback:function(t){e.snackbar=t},expression:"snackbar"}},[e._v("\n      "+e._s(e.response)+"\n    ")])],1),e._v(" "),t(l.a,[t(m.a,{attrs:{active:e.loading,color:"primary",indeterminate:""}}),e._v(" "),t(c.c,[t(h.a,{attrs:{persistent:"",width:"400"},model:{value:e.dialogCropping,callback:function(t){e.dialogCropping=t},expression:"dialogCropping"}},[t(l.a,{staticStyle:{"padding-top":"20px"}},[t(c.c,[t("VueCropper",{directives:[{name:"show",rawName:"v-show",value:e.selectedFile,expression:"selectedFile"}],ref:"cropper",attrs:{src:e.selectedFile,alt:"Source Image",aspectRatio:1,autoCropArea:.9,viewMode:3}})],1),e._v(" "),t(c.a,[t("div",{staticClass:"col-sm-12 col-md-6 col-12 pull-left",attrs:{col:"6",md:"6"}},[t(r.a,{staticClass:"danger btn btn-danger text-left",staticStyle:{float:"left"},attrs:{text:""},on:{click:function(t){return e.closePopup()}}},[e._v("Cancel")])],1),e._v(" "),t("div",{staticClass:"col-sm-12 col-md-6 col-12 text-right",attrs:{col:"6",md:"6"}},[t(r.a,{staticClass:"primary btn btn-danger text-right",on:{click:function(t){e.saveCroppedImageStep2(),e.dialog=!1}}},[e._v("Crop")])],1)])],1)],1),e._v(" "),t(f.a,[t(d.a,{attrs:{md:"6",sm:"6",cols:"6",dense:""}},[t(f.a,[t(d.a,{attrs:{cols:"12"}},[t(n.a,{attrs:{label:"Employee Roll(Admin Application Access)",items:[{name:"No Access",id:0}].concat(Object(y.a)(e.roles)),"item-text":"name","item-value":"id",placeholder:"Select","hide-details":!e.errors.employee_role_id,"error-messages":e.errors&&e.errors.employee_role_id?e.errors.employee_role_id[0]:"",dense:"",outlined:""},model:{value:e.employee.employee_role_id,callback:function(t){e.$set(e.employee,"employee_role_id",t)},expression:"employee.employee_role_id"}})],1),e._v(" "),t(d.a,{attrs:{md:"12",sm:"12",cols:"12",dense:""}},[t(x.a,{attrs:{label:"Email",dense:"",outlined:"","hide-details":!e.errors.email,type:"text",error:e.errors.email,"error-messages":e.errors&&e.errors.email?e.errors.email[0]:""},model:{value:e.employee.email,callback:function(t){e.$set(e.employee,"email",t)},expression:"employee.email"}})],1),e._v(" "),t(d.a,{attrs:{md:"12",sm:"12",cols:"12",dense:""}},[t(x.a,{attrs:{label:"Password",dense:"",outlined:"","hide-details":!e.errors.password,type:"text",error:e.errors.password,"error-messages":e.errors&&e.errors.password?e.errors.password[0]:""},model:{value:e.employee.password,callback:function(t){e.$set(e.employee,"password",t)},expression:"employee.password"}})],1),e._v(" "),t(d.a,{attrs:{md:"12",sm:"12",cols:"12",dense:""}},[t(x.a,{attrs:{label:"Confirm Password",dense:"",outlined:"","hide-details":!e.errors.password_confirmation,type:"text",error:e.errors.password_confirmation,"error-messages":e.errors&&e.errors.password_confirmation?e.errors.password_confirmation[0]:""},model:{value:e.employee.password_confirmation,callback:function(t){e.$set(e.employee,"password_confirmation",t)},expression:"employee.password_confirmation"}})],1),e._v(" "),t(d.a,{staticClass:"text-right",attrs:{cols:"12"}},[e.can("employee_edit")?t(r.a,{attrs:{small:"",loading:e.loading,color:"primary"},on:{click:e.submit}},[e._v("\n                Submit\n              ")]):e._e()],1)],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports},912:function(e,t,o){var content=o(913);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(21).default)("1377ef10",content,!0,{sourceMap:!1})},913:function(e,t,o){var n=o(20)((function(i){return i[1]}));n.push([e.i,".v-autocomplete.v-input>.v-input__control>.v-input__slot{cursor:text}.v-autocomplete input{align-self:center}.v-autocomplete.v-select.v-input--is-focused input{min-width:64px}.v-autocomplete:not(.v-input--is-focused).v-select--chips input{max-height:0;padding:0}.v-autocomplete--is-selecting-index input{opacity:0}.v-autocomplete.v-text-field--enclosed:not(.v-text-field--solo):not(.v-text-field--single-line):not(.v-text-field--outlined) .v-select__slot>input{margin-top:24px}.v-autocomplete.v-text-field--enclosed:not(.v-text-field--solo):not(.v-text-field--single-line):not(.v-text-field--outlined).v-input--dense .v-select__slot>input{margin-top:20px}.v-autocomplete__content.v-menu__content,.v-autocomplete__content.v-menu__content .v-card{border-radius:0}",""]),n.locals={},e.exports=n},921:function(e,t,o){"use strict";o(12),o(14),o(18),o(9),o(19);var n=o(2),r=(o(70),o(6),o(11),o(92),o(103),o(223),o(41),o(61),o(912),o(920)),l=o(221),c=o(71),d=o(1);function h(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,o)}return t}function m(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var f=m(m({},r.b),{},{offsetY:!0,offsetOverflow:!0,transition:!1});t.a=r.a.extend({name:"v-autocomplete",props:{autoSelectFirst:{type:Boolean,default:!1},filter:{type:Function,default:function(e,t,o){return o.toLocaleLowerCase().indexOf(t.toLocaleLowerCase())>-1}},hideNoData:Boolean,menuProps:{type:r.a.options.props.menuProps.type,default:function(){return f}},noFilter:Boolean,searchInput:{type:String}},data:function(){return{lazySearch:this.searchInput}},computed:{classes:function(){return m(m({},r.a.options.computed.classes.call(this)),{},{"v-autocomplete":!0,"v-autocomplete--is-selecting-index":this.selectedIndex>-1})},computedItems:function(){return this.filteredItems},selectedValues:function(){var e=this;return this.selectedItems.map((function(t){return e.getValue(t)}))},hasDisplayedItems:function(){var e=this;return this.hideSelected?this.filteredItems.some((function(t){return!e.hasItem(t)})):this.filteredItems.length>0},currentRange:function(){return null==this.selectedItem?0:String(this.getText(this.selectedItem)).length},filteredItems:function(){var e=this;return!this.isSearching||this.noFilter||null==this.internalSearch?this.allItems:this.allItems.filter((function(t){var o=Object(d.s)(t,e.itemText),text=null!=o?String(o):"";return e.filter(t,String(e.internalSearch),text)}))},internalSearch:{get:function(){return this.lazySearch},set:function(e){this.lazySearch!==e&&(this.lazySearch=e,this.$emit("update:search-input",e))}},isAnyValueAllowed:function(){return!1},isDirty:function(){return this.searchIsDirty||this.selectedItems.length>0},isSearching:function(){return this.multiple&&this.searchIsDirty||this.searchIsDirty&&this.internalSearch!==this.getText(this.selectedItem)},menuCanShow:function(){return!!this.isFocused&&(this.hasDisplayedItems||!this.hideNoData)},$_menuProps:function(){var e=r.a.options.computed.$_menuProps.call(this);return e.contentClass="v-autocomplete__content ".concat(e.contentClass||"").trim(),m(m({},f),e)},searchIsDirty:function(){return null!=this.internalSearch&&""!==this.internalSearch},selectedItem:function(){var e=this;return this.multiple?null:this.selectedItems.find((function(i){return e.valueComparator(e.getValue(i),e.getValue(e.internalValue))}))},listData:function(){var data=r.a.options.computed.listData.call(this);return data.props=m(m({},data.props),{},{items:this.virtualizedItems,noFilter:this.noFilter||!this.isSearching||!this.filteredItems.length,searchInput:this.internalSearch}),data}},watch:{filteredItems:"onFilteredItemsChanged",internalValue:"setSearch",isFocused:function(e){e?(document.addEventListener("copy",this.onCopy),this.$refs.input&&this.$refs.input.select()):(document.removeEventListener("copy",this.onCopy),this.blur(),this.updateSelf())},isMenuActive:function(e){!e&&this.hasSlot&&(this.lazySearch=null)},items:function(e,t){t&&t.length||!this.hideNoData||!this.isFocused||this.isMenuActive||!e.length||this.activateMenu()},searchInput:function(e){this.lazySearch=e},internalSearch:"onInternalSearchChanged",itemText:"updateSelf"},created:function(){this.setSearch()},destroyed:function(){document.removeEventListener("copy",this.onCopy)},methods:{onFilteredItemsChanged:function(e,t){var o=this;if(e!==t){if(!this.autoSelectFirst){var n=t[this.$refs.menu.listIndex];n?this.setMenuIndex(e.findIndex((function(i){return i===n}))):this.setMenuIndex(-1),this.$emit("update:list-index",this.$refs.menu.listIndex)}this.$nextTick((function(){o.internalSearch&&(1===e.length||o.autoSelectFirst)&&(o.$refs.menu.getTiles(),o.autoSelectFirst&&e.length&&(o.setMenuIndex(0),o.$emit("update:list-index",o.$refs.menu.listIndex)))}))}},onInternalSearchChanged:function(){this.updateMenuDimensions()},updateMenuDimensions:function(){this.isMenuActive&&this.$refs.menu&&this.$refs.menu.updateDimensions()},changeSelectedIndex:function(e){this.searchIsDirty||(this.multiple&&e===d.z.left?-1===this.selectedIndex?this.selectedIndex=this.selectedItems.length-1:this.selectedIndex--:this.multiple&&e===d.z.right?this.selectedIndex>=this.selectedItems.length-1?this.selectedIndex=-1:this.selectedIndex++:e!==d.z.backspace&&e!==d.z.delete||this.deleteCurrentItem())},deleteCurrentItem:function(){var e=this.selectedIndex,t=this.selectedItems[e];if(this.isInteractive&&!this.getDisabled(t)){var o=this.selectedItems.length-1;if(-1!==this.selectedIndex||0===o){var n=e!==this.selectedItems.length-1?e:e-1;this.selectedItems[n]?this.selectItem(t):this.setValue(this.multiple?[]:null),this.selectedIndex=n}else this.selectedIndex=o}},clearableCallback:function(){this.internalSearch=null,r.a.options.methods.clearableCallback.call(this)},genInput:function(){var input=l.a.options.methods.genInput.call(this);return input.data=Object(c.a)(input.data,{attrs:{"aria-activedescendant":Object(d.q)(this.$refs.menu,"activeTile.id"),autocomplete:Object(d.q)(input.data,"attrs.autocomplete","off")},domProps:{value:this.internalSearch}}),input},genInputSlot:function(){var slot=r.a.options.methods.genInputSlot.call(this);return slot.data.attrs.role="combobox",slot},genSelections:function(){return this.hasSlot||this.multiple?r.a.options.methods.genSelections.call(this):[]},onClick:function(e){this.isInteractive&&(this.selectedIndex>-1?this.selectedIndex=-1:this.onFocus(),this.isAppendInner(e.target)||this.activateMenu())},onInput:function(e){if(!(this.selectedIndex>-1)&&e.target){var t=e.target,o=t.value;t.value&&this.activateMenu(),this.multiple||""!==o||this.deleteCurrentItem(),this.internalSearch=o,this.badInput=t.validity&&t.validity.badInput}},onKeyDown:function(e){var t=e.keyCode;!e.ctrlKey&&[d.z.home,d.z.end].includes(t)||r.a.options.methods.onKeyDown.call(this,e),this.changeSelectedIndex(t)},onSpaceDown:function(e){},onTabDown:function(e){r.a.options.methods.onTabDown.call(this,e),this.updateSelf()},onUpDown:function(e){e.preventDefault(),this.activateMenu()},selectItem:function(e){r.a.options.methods.selectItem.call(this,e),this.setSearch()},setSelectedItems:function(){r.a.options.methods.setSelectedItems.call(this),this.isFocused||this.setSearch()},setSearch:function(){var e=this;this.$nextTick((function(){e.multiple&&e.internalSearch&&e.isMenuActive||(e.internalSearch=!e.selectedItems.length||e.multiple||e.hasSlot?null:e.getText(e.selectedItem))}))},updateSelf:function(){(this.searchIsDirty||this.internalValue)&&(this.multiple||this.valueComparator(this.internalSearch,this.getValue(this.internalValue))||this.setSearch())},hasItem:function(e){return this.selectedValues.indexOf(this.getValue(e))>-1},onCopy:function(e){var t,o;if(-1!==this.selectedIndex){var n=this.selectedItems[this.selectedIndex],r=this.getText(n);null===(t=e.clipboardData)||void 0===t||t.setData("text/plain",r),null===(o=e.clipboardData)||void 0===o||o.setData("text/vnd.vuetify.autocomplete.item+plain",r),e.preventDefault()}}}})},923:function(e,t,o){var content=o(933);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(21).default)("8f215f56",content,!0,{sourceMap:!1})},933:function(e,t,o){var n=o(20)((function(i){return i[1]}));n.push([e.i,'/*!\n * Cropper.js v1.5.13\n * https://fengyuanchen.github.io/cropperjs\n *\n * Copyright 2015-present Chen Fengyuan\n * Released under the MIT license\n *\n * Date: 2022-11-20T05:30:43.444Z\n */.cropper-container{direction:ltr;font-size:0;line-height:0;position:relative;touch-action:none;-webkit-user-select:none;-moz-user-select:none;user-select:none}.cropper-container img{backface-visibility:hidden;display:block;height:100%;image-orientation:0deg;max-height:none!important;max-width:none!important;min-height:0!important;min-width:0!important;width:100%}.cropper-canvas,.cropper-crop-box,.cropper-drag-box,.cropper-modal,.cropper-wrap-box{bottom:0;left:0;position:absolute;right:0;top:0}.cropper-canvas,.cropper-wrap-box{overflow:hidden}.cropper-drag-box{background-color:#fff;opacity:0}.cropper-modal{background-color:#000;opacity:.5}.cropper-view-box{display:block;height:100%;outline:1px solid #39f;outline-color:rgba(51,153,255,.75);overflow:hidden;width:100%}.cropper-dashed{border:0 dashed #eee;display:block;opacity:.5;position:absolute}.cropper-dashed.dashed-h{border-bottom-width:1px;border-top-width:1px;height:33.33333%;left:0;top:33.33333%;width:100%}.cropper-dashed.dashed-v{border-left-width:1px;border-right-width:1px;height:100%;left:33.33333%;top:0;width:33.33333%}.cropper-center{display:block;height:0;left:50%;opacity:.75;position:absolute;top:50%;width:0}.cropper-center:after,.cropper-center:before{background-color:#eee;content:" ";display:block;position:absolute}.cropper-center:before{height:1px;left:-3px;top:0;width:7px}.cropper-center:after{height:7px;left:0;top:-3px;width:1px}.cropper-face,.cropper-line,.cropper-point{display:block;height:100%;opacity:.1;position:absolute;width:100%}.cropper-face{background-color:#fff;left:0;top:0}.cropper-line{background-color:#39f}.cropper-line.line-e{cursor:ew-resize;right:-3px;top:0;width:5px}.cropper-line.line-n{cursor:ns-resize;height:5px;left:0;top:-3px}.cropper-line.line-w{cursor:ew-resize;left:-3px;top:0;width:5px}.cropper-line.line-s{bottom:-3px;cursor:ns-resize;height:5px;left:0}.cropper-point{background-color:#39f;height:5px;opacity:.75;width:5px}.cropper-point.point-e{cursor:ew-resize;margin-top:-3px;right:-3px;top:50%}.cropper-point.point-n{cursor:ns-resize;left:50%;margin-left:-3px;top:-3px}.cropper-point.point-w{cursor:ew-resize;left:-3px;margin-top:-3px;top:50%}.cropper-point.point-s{bottom:-3px;cursor:s-resize;left:50%;margin-left:-3px}.cropper-point.point-ne{cursor:nesw-resize;right:-3px;top:-3px}.cropper-point.point-nw{cursor:nwse-resize;left:-3px;top:-3px}.cropper-point.point-sw{bottom:-3px;cursor:nesw-resize;left:-3px}.cropper-point.point-se{bottom:-3px;cursor:nwse-resize;height:20px;opacity:1;right:-3px;width:20px}@media (min-width:768px){.cropper-point.point-se{height:15px;width:15px}}@media (min-width:992px){.cropper-point.point-se{height:10px;width:10px}}@media (min-width:1200px){.cropper-point.point-se{height:5px;opacity:.75;width:5px}}.cropper-point.point-se:before{background-color:#39f;bottom:-50%;content:" ";display:block;height:200%;opacity:0;position:absolute;right:-50%;width:200%}.cropper-invisible{opacity:0}.cropper-bg{background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAAA3NCSVQICAjb4U/gAAAABlBMVEXMzMz////TjRV2AAAACXBIWXMAAArrAAAK6wGCiw1aAAAAHHRFWHRTb2Z0d2FyZQBBZG9iZSBGaXJld29ya3MgQ1M26LyyjAAAABFJREFUCJlj+M/AgBVhF/0PAH6/D/HkDxOGAAAAAElFTkSuQmCC")}.cropper-hide{display:block;height:0;position:absolute;width:0}.cropper-hidden{display:none!important}.cropper-move{cursor:move}.cropper-crop{cursor:crosshair}.cropper-disabled .cropper-drag-box,.cropper-disabled .cropper-face,.cropper-disabled .cropper-line,.cropper-disabled .cropper-point{cursor:not-allowed}',""]),n.locals={},e.exports=n}}]);