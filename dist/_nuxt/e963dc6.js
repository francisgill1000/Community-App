(window.webpackJsonp=window.webpackJsonp||[]).push([[48,242],{1098:function(e,t,r){"use strict";r.r(t);var n=r(114),o=r(147),l=r(212),c=(r(37),{props:["defaultImage"],data:function(){return{imagePreview:"/no-profile-image.jpg",upload:{name:""}}},created:function(){this.imagePreview=this.defaultImage||"/no-profile-image.jpg"},methods:{onpick_attachment:function(){this.$refs.attachment_input.click()},attachment:function(e){var t=this;this.upload.name=e.target.files[0]||"";var r=this.$refs.attachment_input.files;if(r&&r[0]){var n=new FileReader;n.onload=function(e){t.imagePreview=e.target.result},n.readAsDataURL(r[0]),this.$emit("uploaded",r[0])}}}}),d=r(116),component=Object(d.a)(c,(function(){var e=this,t=e._self._c;return t("div",[t(l.a,{staticStyle:{width:"150px",height:"150px","border-radius":"50%",margin:"0 auto",border:"1px solid #6946dd"},attrs:{src:e.imagePreview}}),e._v(" "),t(n.a,{staticClass:"mt-2",attrs:{outlined:"",block:"",color:"primary",small:""},on:{click:e.onpick_attachment}},[e._v(e._s(e.upload.name?"Change":"Upload")+"\n    "),t(o.a,{attrs:{right:"",dark:""}},[e._v("mdi-cloud-upload")])],1),e._v(" "),t("input",{ref:"attachment_input",staticStyle:{display:"none"},attrs:{required:"",type:"file",accept:"image/*"},on:{change:e.attachment}})],1)}),[],!1,null,null,null);t.default=component.exports},1333:function(e,t,r){"use strict";r.r(t);var n=r(893),o=r(114),l=r(133),c=r(87),d=r(518),h=r(875),m=r(1557),f=r(350),v=r(147),y=r(862),_=r(517),x=r(214),I=r(23),O=r(3),w=(r(37),r(88),r(894),r(908)),j={props:["item"],components:{VueCropper:r.n(w).a},data:function(){var e;return e={menu:!1,parkings:[],room_categories:[],room_sub_categories:[],filtered_room_sub_categories:[],disabled:!1,step:1,payload:{term:"Long Term",gender:"Male",full_name:"",phone_number:"",floor_id:"",room_id:"",start_date:"",end_date:""},imagePreview:"/no-profile-image.jpg",setImagePreview:null,imageMemberPreview:"/no-profile-image.jpg",tab:null,totalRowsCount:0,filters:{},isFilter:!1,sortBy:"id",sortDesc:!1,snack:!1,snackColor:"",snackText:"",loadinglinear:!0,displayErrormsg:!1,image:"",mime_type:"",cropedImage:"",cropper:"",autoCrop:!1,dialogCropping:!1,tabMenu:[]},Object(O.a)(e,"tab","0"),Object(O.a)(e,"employeeId",0),Object(O.a)(e,"employeeObject",{}),Object(O.a)(e,"attrs",[]),Object(O.a)(e,"dialog",!1),Object(O.a)(e,"editDialog",!1),Object(O.a)(e,"viewDialog",!1),Object(O.a)(e,"selectedFile",""),Object(O.a)(e,"dialog",!1),Object(O.a)(e,"memberdialog",!1),Object(O.a)(e,"viewMemberdialog",!1),Object(O.a)(e,"m",!1),Object(O.a)(e,"expand",!1),Object(O.a)(e,"expand2",!1),Object(O.a)(e,"boilerplate",!1),Object(O.a)(e,"right",!0),Object(O.a)(e,"rightDrawer",!1),Object(O.a)(e,"drawer",!0),Object(O.a)(e,"tab",null),Object(O.a)(e,"selectedItem",1),Object(O.a)(e,"on",""),Object(O.a)(e,"files",""),Object(O.a)(e,"search",""),Object(O.a)(e,"loading",!1),Object(O.a)(e,"next_page_url",""),Object(O.a)(e,"prev_page_url",""),Object(O.a)(e,"current_page",1),Object(O.a)(e,"per_page",1e3),Object(O.a)(e,"ListName",""),Object(O.a)(e,"color","background"),Object(O.a)(e,"response",""),Object(O.a)(e,"snackbar",!1),Object(O.a)(e,"btnLoader",!1),Object(O.a)(e,"max_employee",0),Object(O.a)(e,"upload",{name:""}),Object(O.a)(e,"pagination",{current:1,total:0,per_page:10}),Object(O.a)(e,"options",{}),Object(O.a)(e,"Model","Tanent"),Object(O.a)(e,"endpoint","tanent"),Object(O.a)(e,"search",""),Object(O.a)(e,"snackbar",!1),Object(O.a)(e,"ids",[]),Object(O.a)(e,"loading",!1),Object(O.a)(e,"titleItems",["Mr","Mrs","Miss","Ms","Dr"]),Object(O.a)(e,"editedIndex",-1),Object(O.a)(e,"editedItem",{name:""}),Object(O.a)(e,"defaultItem",{name:""}),Object(O.a)(e,"response",""),Object(O.a)(e,"data",[]),Object(O.a)(e,"errors",[]),Object(O.a)(e,"designations",[]),Object(O.a)(e,"roles",[]),Object(O.a)(e,"employees",[]),Object(O.a)(e,"department_filter_id",""),Object(O.a)(e,"dialogVisible",!1),Object(O.a)(e,"formAction","Create"),Object(O.a)(e,"date",new Date(Date.now()-6e4*(new Date).getTimezoneOffset()).toISOString().substr(0,10)),Object(O.a)(e,"menu",!1),Object(O.a)(e,"menu2",!1),Object(O.a)(e,"menu3",!1),Object(O.a)(e,"floors",[]),Object(O.a)(e,"rooms",[]),Object(O.a)(e,"member",{full_name:null,phone_number:null,age:null,relation:null,tanent_id:0}),Object(O.a)(e,"member_types",[]),e},created:function(){var e=this;return Object(I.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.loading=!1,e.boilerplate=!0,e.payload=e.item;case 3:case"end":return t.stop()}}),t)})))()},methods:{handleAttachment:function(e){this.payload.logo=e},mapper:function(e){var t=new FormData;for(var r in e)t.append(r,e[r]);return this.payload.logo&&t.append("logo",this.upload.name),t.append("company_id",this.$auth.user.company_id),t},submit:function(){var e=this;this.$axios.post("contractor",this.mapper(Object.assign(this.payload))).then((function(t){t.data;e.errors=[],e.handleSuccessResponse("Contract Company inserted successfully")})).catch((function(t){var r=t.response;e.handleErrorResponse(r)}))},handleSuccessResponse:function(e){this.errors=[],this.dialog=!1,this.$emit("success",e)},handleErrorResponse:function(e){if(!e)return this.snackbar=!0,void(this.response="An unexpected error occurred.");var t=e.status,data=e.data,r=e.statusText;t&&422==t?this.errors=data.errors:(this.snackbar=!0,this.response=r)}}},S=r(116),component=Object(S.a)(j,(function(){var e=this,t=e._self._c;return t(f.a,{attrs:{persistent:"",width:"900"},scopedSlots:e._u([{key:"activator",fn:function(r){var n=r.on,o=r.attrs;return[t("span",e._g(e._b({staticStyle:{cursor:"pointer"}},"span",o,!1),n),[t(v.a,{attrs:{small:"",color:"black"}},[e._v("mdi-pencil")]),e._v(" Edit\n    ")],1)]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[e._v(" "),t(l.a,[t(c.d,[e._v("Edit Contractor Company")]),e._v(" "),t(h.a,[t(_.a,[t(d.a,{attrs:{cols:"3"}},[t(_.a,[t(d.a,{attrs:{cols:"12"}},[t("div",{staticClass:"text-center"},[t("SnippetsUploadAttachment",{attrs:{defaultImage:e.setImagePreview},on:{uploaded:e.handleAttachment}}),e._v(" "),e.errors&&e.errors.logo?t("span",{staticClass:"text-danger mt-2"},[e._v(e._s(e.errors.logo[0]))]):e._e()],1)])],1)],1),e._v(" "),t(d.a,{attrs:{cols:"9"}},[t(_.a,[t(d.a,{attrs:{cols:"6"}},[t(x.a,{staticClass:"text-center",attrs:{label:"Branch Name",readonly:e.disabled,dense:"",outlined:"","hide-details":!e.errors.branch_name,"error-messages":e.errors&&e.errors.branch_name?e.errors.branch_name[0]:""},model:{value:e.payload.branch_name,callback:function(t){e.$set(e.payload,"branch_name",t)},expression:"payload.branch_name"}})],1),e._v(" "),t(d.a,{attrs:{cols:"6"}},[t(x.a,{staticClass:"text-center",attrs:{label:"Manager Name",dense:"",outlined:"","hide-details":!e.errors.manager_name,"error-messages":e.errors&&e.errors.manager_name?e.errors.manager_name[0]:""},model:{value:e.payload.manager_name,callback:function(t){e.$set(e.payload,"manager_name",t)},expression:"payload.manager_name"}})],1),e._v(" "),t(d.a,{attrs:{cols:"6"}},[t(n.a,{attrs:{label:"Member Type",outlined:"",readonly:e.disabled,items:["Long Term","Short Term"],dense:"","hide-details":!e.errors.term,"error-messages":e.errors&&e.errors.term?e.errors.term[0]:""},model:{value:e.payload.term,callback:function(t){e.$set(e.payload,"term",t)},expression:"payload.term"}})],1),e._v(" "),t(d.a,{attrs:{cols:"6"}},[t(x.a,{staticClass:"text-center",attrs:{label:"Email",readonly:e.disabled,dense:"",outlined:"","hide-details":!e.errors.email,"error-messages":e.errors&&e.errors.email?e.errors.email[0]:""},model:{value:e.payload.email,callback:function(t){e.$set(e.payload,"email",t)},expression:"payload.email"}})],1),e._v(" "),t(d.a,{attrs:{cols:"6"}},[t(x.a,{staticClass:"text-center",attrs:{label:"Phone Number",readonly:e.disabled,dense:"",outlined:"","hide-details":!e.errors.phone_number,"error-messages":e.errors&&e.errors.phone_number?e.errors.phone_number[0]:""},model:{value:e.payload.phone_number,callback:function(t){e.$set(e.payload,"phone_number",t)},expression:"payload.phone_number"}})],1),e._v(" "),t(d.a,{attrs:{cols:"6"}},[t(x.a,{staticClass:"text-center",attrs:{label:"Mobile Number",readonly:e.disabled,dense:"",outlined:"","hide-details":!e.errors.mobile_number,"error-messages":e.errors&&e.errors.mobile_number?e.errors.mobile_number[0]:""},model:{value:e.payload.mobile_number,callback:function(t){e.$set(e.payload,"mobile_number",t)},expression:"payload.mobile_number"}})],1),e._v(" "),t(d.a,{attrs:{cols:"4"}},[t(x.a,{staticClass:"text-center",attrs:{label:"Licence Number",readonly:e.disabled,dense:"",outlined:"","hide-details":!e.errors.licence_number,"error-messages":e.errors&&e.errors.licence_number?e.errors.licence_number[0]:""},model:{value:e.payload.licence_number,callback:function(t){e.$set(e.payload,"licence_number",t)},expression:"payload.licence_number"}})],1),e._v(" "),t(d.a,{attrs:{cols:"4"}},[t(x.a,{staticClass:"text-center",attrs:{label:"Licence Issue By Department",readonly:e.disabled,dense:"",outlined:"","hide-details":!e.errors.licence_issue_by_department,"error-messages":e.errors&&e.errors.licence_issue_by_department?e.errors.licence_issue_by_department[0]:""},model:{value:e.payload.licence_issue_by_department,callback:function(t){e.$set(e.payload,"licence_issue_by_department",t)},expression:"payload.licence_issue_by_department"}})],1),e._v(" "),t(d.a,{attrs:{cols:"4"}},[t(y.a,{attrs:{"close-on-content-click":!1,"nudge-right":40,transition:"scale-transition","offset-y":"","min-width":"auto"},scopedSlots:e._u([{key:"activator",fn:function(r){var n=r.on,o=r.attrs;return[t(x.a,e._g(e._b({attrs:{label:"Licence Expiry","append-icon":"mdi-calendar",outlined:"",dense:"",readonly:"","hide-details":!e.errors.licence_expiry,"error-messages":e.errors&&e.errors.licence_expiry?e.errors.licence_expiry[0]:""},model:{value:e.payload.licence_expiry,callback:function(t){e.$set(e.payload,"licence_expiry",t)},expression:"payload.licence_expiry"}},"v-text-field",o,!1),n))]}}]),model:{value:e.menu,callback:function(t){e.menu=t},expression:"menu"}},[e._v(" "),t(m.a,{attrs:{"no-title":"",scrollable:""},on:{input:function(t){e.menu=!1}},model:{value:e.payload.licence_expiry,callback:function(t){e.$set(e.payload,"licence_expiry",t)},expression:"payload.licence_expiry"}})],1)],1),e._v(" "),t(d.a,{attrs:{cols:"4"}},[t(x.a,{staticClass:"text-center",attrs:{label:"Car Number",readonly:e.disabled,dense:"",outlined:"","hide-details":!e.errors.car_number,"error-messages":e.errors&&e.errors.car_number?e.errors.car_number[0]:""},model:{value:e.payload.car_number,callback:function(t){e.$set(e.payload,"car_number",t)},expression:"payload.car_number"}})],1),e._v(" "),t(d.a,{attrs:{cols:"4"}},[t(x.a,{staticClass:"text-center",attrs:{label:"Car Brand",readonly:e.disabled,dense:"",outlined:"","hide-details":!e.errors.car_brand,"error-messages":e.errors&&e.errors.car_brand?e.errors.car_brand[0]:""},model:{value:e.payload.car_brand,callback:function(t){e.$set(e.payload,"car_brand",t)},expression:"payload.car_brand"}})],1),e._v(" "),t(d.a,{attrs:{cols:"4"}},[t(x.a,{staticClass:"text-center",attrs:{label:"Car Issued city",readonly:e.disabled,dense:"",outlined:"","hide-details":!e.errors.car_issued_city,"error-messages":e.errors&&e.errors.car_issued_city?e.errors.car_issued_city[0]:""},model:{value:e.payload.car_issued_city,callback:function(t){e.$set(e.payload,"car_issued_city",t)},expression:"payload.car_issued_city"}})],1),e._v(" "),t(d.a,{attrs:{cols:"12"}},[t(x.a,{staticClass:"text-center",attrs:{label:"Address",readonly:e.disabled,dense:"",outlined:"","hide-details":!e.errors.address,"error-messages":e.errors&&e.errors.address?e.errors.address[0]:""},model:{value:e.payload.address,callback:function(t){e.$set(e.payload,"address",t)},expression:"payload.address"}})],1)],1)],1)],1),e._v(" "),t(_.a,[t(d.a,{staticClass:"text-right my-1",attrs:{cols:"12"}},[t(o.a,{on:{click:function(t){e.dialog=!1}}},[e._v("Close")]),e._v(" "),t(o.a,{staticClass:"primary",on:{click:e.submit}},[e._v("Submit")])],1)],1)],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{SnippetsUploadAttachment:r(1098).default})},883:function(e,t,r){var content=r(884);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(22).default)("1377ef10",content,!0,{sourceMap:!1})},884:function(e,t,r){var n=r(21)((function(i){return i[1]}));n.push([e.i,".v-autocomplete.v-input>.v-input__control>.v-input__slot{cursor:text}.v-autocomplete input{align-self:center}.v-autocomplete.v-select.v-input--is-focused input{min-width:64px}.v-autocomplete:not(.v-input--is-focused).v-select--chips input{max-height:0;padding:0}.v-autocomplete--is-selecting-index input{opacity:0}.v-autocomplete.v-text-field--enclosed:not(.v-text-field--solo):not(.v-text-field--single-line):not(.v-text-field--outlined) .v-select__slot>input{margin-top:24px}.v-autocomplete.v-text-field--enclosed:not(.v-text-field--solo):not(.v-text-field--single-line):not(.v-text-field--outlined).v-input--dense .v-select__slot>input{margin-top:20px}.v-autocomplete__content.v-menu__content,.v-autocomplete__content.v-menu__content .v-card{border-radius:0}",""]),n.locals={},e.exports=n},893:function(e,t,r){"use strict";r(12),r(14),r(17),r(11),r(18);var n=r(3),o=(r(80),r(6),r(13),r(89),r(99),r(216),r(41),r(61),r(883),r(892)),l=r(214),c=r(65),d=r(1);function h(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function m(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var f=m(m({},o.b),{},{offsetY:!0,offsetOverflow:!0,transition:!1});t.a=o.a.extend({name:"v-autocomplete",props:{autoSelectFirst:{type:Boolean,default:!1},filter:{type:Function,default:function(e,t,r){return r.toLocaleLowerCase().indexOf(t.toLocaleLowerCase())>-1}},hideNoData:Boolean,menuProps:{type:o.a.options.props.menuProps.type,default:function(){return f}},noFilter:Boolean,searchInput:{type:String}},data:function(){return{lazySearch:this.searchInput}},computed:{classes:function(){return m(m({},o.a.options.computed.classes.call(this)),{},{"v-autocomplete":!0,"v-autocomplete--is-selecting-index":this.selectedIndex>-1})},computedItems:function(){return this.filteredItems},selectedValues:function(){var e=this;return this.selectedItems.map((function(t){return e.getValue(t)}))},hasDisplayedItems:function(){var e=this;return this.hideSelected?this.filteredItems.some((function(t){return!e.hasItem(t)})):this.filteredItems.length>0},currentRange:function(){return null==this.selectedItem?0:String(this.getText(this.selectedItem)).length},filteredItems:function(){var e=this;return!this.isSearching||this.noFilter||null==this.internalSearch?this.allItems:this.allItems.filter((function(t){var r=Object(d.s)(t,e.itemText),text=null!=r?String(r):"";return e.filter(t,String(e.internalSearch),text)}))},internalSearch:{get:function(){return this.lazySearch},set:function(e){this.lazySearch!==e&&(this.lazySearch=e,this.$emit("update:search-input",e))}},isAnyValueAllowed:function(){return!1},isDirty:function(){return this.searchIsDirty||this.selectedItems.length>0},isSearching:function(){return this.multiple&&this.searchIsDirty||this.searchIsDirty&&this.internalSearch!==this.getText(this.selectedItem)},menuCanShow:function(){return!!this.isFocused&&(this.hasDisplayedItems||!this.hideNoData)},$_menuProps:function(){var e=o.a.options.computed.$_menuProps.call(this);return e.contentClass="v-autocomplete__content ".concat(e.contentClass||"").trim(),m(m({},f),e)},searchIsDirty:function(){return null!=this.internalSearch&&""!==this.internalSearch},selectedItem:function(){var e=this;return this.multiple?null:this.selectedItems.find((function(i){return e.valueComparator(e.getValue(i),e.getValue(e.internalValue))}))},listData:function(){var data=o.a.options.computed.listData.call(this);return data.props=m(m({},data.props),{},{items:this.virtualizedItems,noFilter:this.noFilter||!this.isSearching||!this.filteredItems.length,searchInput:this.internalSearch}),data}},watch:{filteredItems:"onFilteredItemsChanged",internalValue:"setSearch",isFocused:function(e){e?(document.addEventListener("copy",this.onCopy),this.$refs.input&&this.$refs.input.select()):(document.removeEventListener("copy",this.onCopy),this.blur(),this.updateSelf())},isMenuActive:function(e){!e&&this.hasSlot&&(this.lazySearch=null)},items:function(e,t){t&&t.length||!this.hideNoData||!this.isFocused||this.isMenuActive||!e.length||this.activateMenu()},searchInput:function(e){this.lazySearch=e},internalSearch:"onInternalSearchChanged",itemText:"updateSelf"},created:function(){this.setSearch()},destroyed:function(){document.removeEventListener("copy",this.onCopy)},methods:{onFilteredItemsChanged:function(e,t){var r=this;if(e!==t){if(!this.autoSelectFirst){var n=t[this.$refs.menu.listIndex];n?this.setMenuIndex(e.findIndex((function(i){return i===n}))):this.setMenuIndex(-1),this.$emit("update:list-index",this.$refs.menu.listIndex)}this.$nextTick((function(){r.internalSearch&&(1===e.length||r.autoSelectFirst)&&(r.$refs.menu.getTiles(),r.autoSelectFirst&&e.length&&(r.setMenuIndex(0),r.$emit("update:list-index",r.$refs.menu.listIndex)))}))}},onInternalSearchChanged:function(){this.updateMenuDimensions()},updateMenuDimensions:function(){this.isMenuActive&&this.$refs.menu&&this.$refs.menu.updateDimensions()},changeSelectedIndex:function(e){this.searchIsDirty||(this.multiple&&e===d.z.left?-1===this.selectedIndex?this.selectedIndex=this.selectedItems.length-1:this.selectedIndex--:this.multiple&&e===d.z.right?this.selectedIndex>=this.selectedItems.length-1?this.selectedIndex=-1:this.selectedIndex++:e!==d.z.backspace&&e!==d.z.delete||this.deleteCurrentItem())},deleteCurrentItem:function(){var e=this.selectedIndex,t=this.selectedItems[e];if(this.isInteractive&&!this.getDisabled(t)){var r=this.selectedItems.length-1;if(-1!==this.selectedIndex||0===r){var n=e!==this.selectedItems.length-1?e:e-1;this.selectedItems[n]?this.selectItem(t):this.setValue(this.multiple?[]:null),this.selectedIndex=n}else this.selectedIndex=r}},clearableCallback:function(){this.internalSearch=null,o.a.options.methods.clearableCallback.call(this)},genInput:function(){var input=l.a.options.methods.genInput.call(this);return input.data=Object(c.a)(input.data,{attrs:{"aria-activedescendant":Object(d.q)(this.$refs.menu,"activeTile.id"),autocomplete:Object(d.q)(input.data,"attrs.autocomplete","off")},domProps:{value:this.internalSearch}}),input},genInputSlot:function(){var slot=o.a.options.methods.genInputSlot.call(this);return slot.data.attrs.role="combobox",slot},genSelections:function(){return this.hasSlot||this.multiple?o.a.options.methods.genSelections.call(this):[]},onClick:function(e){this.isInteractive&&(this.selectedIndex>-1?this.selectedIndex=-1:this.onFocus(),this.isAppendInner(e.target)||this.activateMenu())},onInput:function(e){if(!(this.selectedIndex>-1)&&e.target){var t=e.target,r=t.value;t.value&&this.activateMenu(),this.multiple||""!==r||this.deleteCurrentItem(),this.internalSearch=r,this.badInput=t.validity&&t.validity.badInput}},onKeyDown:function(e){var t=e.keyCode;!e.ctrlKey&&[d.z.home,d.z.end].includes(t)||o.a.options.methods.onKeyDown.call(this,e),this.changeSelectedIndex(t)},onSpaceDown:function(e){},onTabDown:function(e){o.a.options.methods.onTabDown.call(this,e),this.updateSelf()},onUpDown:function(e){e.preventDefault(),this.activateMenu()},selectItem:function(e){o.a.options.methods.selectItem.call(this,e),this.setSearch()},setSelectedItems:function(){o.a.options.methods.setSelectedItems.call(this),this.isFocused||this.setSearch()},setSearch:function(){var e=this;this.$nextTick((function(){e.multiple&&e.internalSearch&&e.isMenuActive||(e.internalSearch=!e.selectedItems.length||e.multiple||e.hasSlot?null:e.getText(e.selectedItem))}))},updateSelf:function(){(this.searchIsDirty||this.internalValue)&&(this.multiple||this.valueComparator(this.internalSearch,this.getValue(this.internalValue))||this.setSearch())},hasItem:function(e){return this.selectedValues.indexOf(this.getValue(e))>-1},onCopy:function(e){var t,r;if(-1!==this.selectedIndex){var n=this.selectedItems[this.selectedIndex],o=this.getText(n);null===(t=e.clipboardData)||void 0===t||t.setData("text/plain",o),null===(r=e.clipboardData)||void 0===r||r.setData("text/vnd.vuetify.autocomplete.item+plain",o),e.preventDefault()}}}})},894:function(e,t,r){var content=r(904);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(22).default)("8f215f56",content,!0,{sourceMap:!1})},904:function(e,t,r){var n=r(21)((function(i){return i[1]}));n.push([e.i,'/*!\n * Cropper.js v1.5.13\n * https://fengyuanchen.github.io/cropperjs\n *\n * Copyright 2015-present Chen Fengyuan\n * Released under the MIT license\n *\n * Date: 2022-11-20T05:30:43.444Z\n */.cropper-container{direction:ltr;font-size:0;line-height:0;position:relative;touch-action:none;-webkit-user-select:none;-moz-user-select:none;user-select:none}.cropper-container img{backface-visibility:hidden;display:block;height:100%;image-orientation:0deg;max-height:none!important;max-width:none!important;min-height:0!important;min-width:0!important;width:100%}.cropper-canvas,.cropper-crop-box,.cropper-drag-box,.cropper-modal,.cropper-wrap-box{bottom:0;left:0;position:absolute;right:0;top:0}.cropper-canvas,.cropper-wrap-box{overflow:hidden}.cropper-drag-box{background-color:#fff;opacity:0}.cropper-modal{background-color:#000;opacity:.5}.cropper-view-box{display:block;height:100%;outline:1px solid #39f;outline-color:rgba(51,153,255,.75);overflow:hidden;width:100%}.cropper-dashed{border:0 dashed #eee;display:block;opacity:.5;position:absolute}.cropper-dashed.dashed-h{border-bottom-width:1px;border-top-width:1px;height:33.33333%;left:0;top:33.33333%;width:100%}.cropper-dashed.dashed-v{border-left-width:1px;border-right-width:1px;height:100%;left:33.33333%;top:0;width:33.33333%}.cropper-center{display:block;height:0;left:50%;opacity:.75;position:absolute;top:50%;width:0}.cropper-center:after,.cropper-center:before{background-color:#eee;content:" ";display:block;position:absolute}.cropper-center:before{height:1px;left:-3px;top:0;width:7px}.cropper-center:after{height:7px;left:0;top:-3px;width:1px}.cropper-face,.cropper-line,.cropper-point{display:block;height:100%;opacity:.1;position:absolute;width:100%}.cropper-face{background-color:#fff;left:0;top:0}.cropper-line{background-color:#39f}.cropper-line.line-e{cursor:ew-resize;right:-3px;top:0;width:5px}.cropper-line.line-n{cursor:ns-resize;height:5px;left:0;top:-3px}.cropper-line.line-w{cursor:ew-resize;left:-3px;top:0;width:5px}.cropper-line.line-s{bottom:-3px;cursor:ns-resize;height:5px;left:0}.cropper-point{background-color:#39f;height:5px;opacity:.75;width:5px}.cropper-point.point-e{cursor:ew-resize;margin-top:-3px;right:-3px;top:50%}.cropper-point.point-n{cursor:ns-resize;left:50%;margin-left:-3px;top:-3px}.cropper-point.point-w{cursor:ew-resize;left:-3px;margin-top:-3px;top:50%}.cropper-point.point-s{bottom:-3px;cursor:s-resize;left:50%;margin-left:-3px}.cropper-point.point-ne{cursor:nesw-resize;right:-3px;top:-3px}.cropper-point.point-nw{cursor:nwse-resize;left:-3px;top:-3px}.cropper-point.point-sw{bottom:-3px;cursor:nesw-resize;left:-3px}.cropper-point.point-se{bottom:-3px;cursor:nwse-resize;height:20px;opacity:1;right:-3px;width:20px}@media (min-width:768px){.cropper-point.point-se{height:15px;width:15px}}@media (min-width:992px){.cropper-point.point-se{height:10px;width:10px}}@media (min-width:1200px){.cropper-point.point-se{height:5px;opacity:.75;width:5px}}.cropper-point.point-se:before{background-color:#39f;bottom:-50%;content:" ";display:block;height:200%;opacity:0;position:absolute;right:-50%;width:200%}.cropper-invisible{opacity:0}.cropper-bg{background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAAA3NCSVQICAjb4U/gAAAABlBMVEXMzMz////TjRV2AAAACXBIWXMAAArrAAAK6wGCiw1aAAAAHHRFWHRTb2Z0d2FyZQBBZG9iZSBGaXJld29ya3MgQ1M26LyyjAAAABFJREFUCJlj+M/AgBVhF/0PAH6/D/HkDxOGAAAAAElFTkSuQmCC")}.cropper-hide{display:block;height:0;position:absolute;width:0}.cropper-hidden{display:none!important}.cropper-move{cursor:move}.cropper-crop{cursor:crosshair}.cropper-disabled .cropper-drag-box,.cropper-disabled .cropper-face,.cropper-disabled .cropper-line,.cropper-disabled .cropper-point{cursor:not-allowed}',""]),n.locals={},e.exports=n}}]);