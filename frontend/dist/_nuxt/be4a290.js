(window.webpackJsonp=window.webpackJsonp||[]).push([[208],{1064:function(e,t,r){var content=r(1157);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(22).default)("201e0aaa",content,!0,{sourceMap:!1})},1156:function(e,t,r){"use strict";r(1064)},1157:function(e,t,r){var n=r(21)((function(i){return i[1]}));n.push([e.i,"",""]),n.locals={},e.exports=n},1201:function(e,t,r){"use strict";r.r(t);var n=r(893),o=r(114),l=r(133),c=r(87),d=r(518),h=r(1546),m=r(350),f=r(1019),v=r(147),_=r(212),x=r(862),y=r(517),I=r(892),w=r(349),C=r(214),S=(r(37),r(23)),k=(r(33),r(58),r(88),r(895),r(909)),A={components:{VueCropper:r.n(k).a},data:function(){return{isCompany:!0,loading:!1,branches_list:[],departments:[],errors:[],branch_id:null,Model:"Employee",dialog:!1,dialogCropping:!1,employee:{},titleItems:["Mr","Mrs","Miss","Ms","Dr"],joiningDateMenuOpen:!1,previewImage:null,selectedFile:null,upload:{name:""}}},created:function(){var e=this;return Object(S.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("branches_list");case 2:if(e.branches_list=t.sent,console.log("sfdsfsdf"),!e.$auth.user.branch_id){t.next=9;break}return t.next=7,e.getDepartments(e.$auth.user.branch_id);case 7:t.next=11;break;case 9:return t.next=11,e.getDepartments(null);case 11:case"end":return t.stop()}}),t)})))()},methods:{getDepartments:function(e){var t=this;return Object(S.a)(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n={endpoint:"department-list",isFilter:!0,params:{company_id:t.$auth.user.company_id,branch_id:e}},r.next=3,t.$store.dispatch("department_list",n);case 3:t.departments=r.sent;case 4:case"end":return r.stop()}}),r)})))()},getTimezone:function(e){var t=this;return Object(S.a)(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n={endpoint:"timezone-list",isFilter:!0,params:{company_id:t.$auth.user.company_id,branch_id:e}},r.next=3,t.$store.dispatch("timezone_list",n);case 3:t.timezones=r.sent;case 4:case"end":return r.stop()}}),r)})))()},filterDepartmentsByBranch:function(e){var t=this;return Object(S.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,t.getDepartments(e);case 2:return r.next=4,t.getTimezone(e);case 4:case"end":return r.stop()}}),r)})))()},onpick_attachment:function(){this.$refs.attachment_input.click()},attachment:function(e){var t=this;this.upload.name=e.target.files[0]||"";var r=this.$refs.attachment_input.files;if(r[0].size>1048576)return e.preventDefault(),void(this.errors.profile_picture=["File too big (> 1MB). Upload less than 1MB"]);if(r&&r[0]){var n=new FileReader;n.onload=function(e){t.selectedFile=event.target.result,t.$refs.cropper.replace(t.selectedFile)},n.readAsDataURL(r[0]),this.$emit("input",r[0]),this.dialogCropping=!0}},mapper:function(e){var t=new FormData;for(var r in e)t.append(r,e[r]);return t.append("profile_picture",this.upload.name),t.append("company_id",this.$auth.user.company_id),t},store_data:function(){var e=Object.assign(this.employee),t=this.mapper(e);this.saveToAPI(t)},saveToAPI:function(e){var t=this;this.$axios.post("/employee-store",e).then((function(e){var data=e.data;data.status?(t.errors=[],t.snackbar=!0,t.response="Employees inserted successfully",t.$emit("success"),t.dialog=!1):(t.errors=[],data.errors?t.errors=data.errors:(t.snackbar=!0,t.response=data.message))})).catch((function(e){return console.log(e)}))},closePopup:function(){this.$refs.attachment_input.value=null,this.dialogCropping=!1},saveCroppedImageStep2:function(){this.cropedImage=this.$refs.cropper.getCroppedCanvas().toDataURL(),this.previewImage=this.cropedImage,this.dialogCropping=!1}}},D=(r(1156),r(116)),component=Object(D.a)(A,(function(){var e=this,t=e._self._c;return t("div",[t(m.a,{attrs:{persistent:"","max-width":"900px"},scopedSlots:e._u([{key:"activator",fn:function(r){var n=r.on,o=r.attrs;return[t(v.a,e._g(e._b({attrs:{color:"black lighten-2"}},"v-icon",o,!1),n),[e._v("\n        mdi-account-plus mdi-flip-h\n      ")])]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[e._v(" "),t(l.a,[t(c.c,{staticClass:"popup_background",staticStyle:{"font-weight":"400"},attrs:{dark:""}},[e._v("\n        Add "+e._s(e.Model)+"\n        "),t(w.a),e._v(" "),t(v.a,{staticClass:"mr-5",attrs:{outlined:"",dark:"",color:"black",title:"Save Employee",loading:e.loading},on:{click:e.store_data}},[e._v("\n          mdi mdi-content-save-all\n        ")]),e._v(" "),t(v.a,{attrs:{title:"Close",outlined:"",dark:"",color:"black"},on:{click:function(t){e.dialog=!1}}},[e._v("\n          mdi mdi-close-circle\n        ")])],1),e._v(" "),t(c.b,[t(y.a,[t(d.a,{attrs:{md:"6",sm:"12",cols:"12",dense:""}},[t(y.a,[t(d.a,{attrs:{md:"6",sm:"12",cols:"12"}},[t("label",{staticClass:"col-form-label"},[e._v("Title "),t("span",{staticClass:"text-danger"},[e._v("*")])]),e._v(" "),t(I.a,{attrs:{items:e.titleItems,"hide-details":!e.errors.title,error:e.errors.title,"error-messages":e.errors&&e.errors.title?e.errors.title[0]:"",dense:"",outlined:""},model:{value:e.employee.title,callback:function(t){e.$set(e.employee,"title",t)},expression:"employee.title"}})],1),e._v(" "),t(d.a,{attrs:{md:"6",sm:"12",cols:"12"}},[t("label",{staticClass:"col-form-label"},[e._v("Joining Date "),t("span",{staticClass:"text-danger"},[e._v("*")])]),e._v(" "),t("div",[t(x.a,{attrs:{"close-on-content-click":!1,transition:"scale-transition","offset-y":"","max-width":"290px","min-width":"auto"},scopedSlots:e._u([{key:"activator",fn:function(r){var n=r.on,o=r.attrs;return[t(C.a,e._g(e._b({attrs:{"hide-details":!e.errors.joining_date,"error-messages":e.errors&&e.errors.joining_date?e.errors.joining_date[0]:"","persistent-hint":"","append-icon":"mdi-calendar",readonly:"",outlined:"",dense:""},model:{value:e.employee.joining_date,callback:function(t){e.$set(e.employee,"joining_date",t)},expression:"employee.joining_date"}},"v-text-field",o,!1),n))]}}]),model:{value:e.joiningDateMenuOpen,callback:function(t){e.joiningDateMenuOpen=t},expression:"joiningDateMenuOpen"}},[e._v(" "),t(h.a,{staticStyle:{"min-height":"320px"},attrs:{"no-title":""},on:{input:function(t){e.joiningDateMenuOpen=!1}},model:{value:e.employee.joining_date,callback:function(t){e.$set(e.employee,"joining_date",t)},expression:"employee.joining_date"}})],1)],1)]),e._v(" "),t(d.a,{attrs:{md:"12",sm:"12",cols:"12",dense:""}},[t("label",{staticClass:"col-form-label"},[e._v("Display Name "),t("span",{staticClass:"text-danger"},[e._v("*")])]),e._v(" "),t(C.a,{attrs:{dense:"",outlined:"","hide-details":!e.errors.display_name,type:"text",error:e.errors.display_name,"error-messages":e.errors&&e.errors.display_name?e.errors.display_name[0]:""},model:{value:e.employee.display_name,callback:function(t){e.$set(e.employee,"display_name",t)},expression:"employee.display_name"}})],1),e._v(" "),t(d.a,{attrs:{md:"6",sm:"12",cols:"12",dense:""}},[t("label",{staticClass:"col-form-label"},[e._v("First Name "),t("span",{staticClass:"text-danger"},[e._v("*")])]),e._v(" "),t(C.a,{attrs:{dense:"",outlined:"","hide-details":!e.errors.first_name,type:"text",error:e.errors.first_name,"error-messages":e.errors&&e.errors.first_name?e.errors.first_name[0]:""},model:{value:e.employee.first_name,callback:function(t){e.$set(e.employee,"first_name",t)},expression:"employee.first_name"}})],1),e._v(" "),t(d.a,{attrs:{md:"6",sm:"12",cols:"12",dense:""}},[t("label",{staticClass:"col-form-label"},[e._v("Last Name "),t("span",{staticClass:"text-danger"},[e._v("*")])]),e._v(" "),t(C.a,{attrs:{dense:"",outlined:"","hide-details":!e.errors.last_name,type:"text",error:e.errors.last_name,"error-messages":e.errors&&e.errors.last_name?e.errors.last_name[0]:""},model:{value:e.employee.last_name,callback:function(t){e.$set(e.employee,"last_name",t)},expression:"employee.last_name"}})],1),e._v(" "),t(d.a,{attrs:{md:"6",cols:"6",sm:"6",dense:""}},[t("label",{staticClass:"col-form-label"},[e._v("Employee ID "),t("span",{staticClass:"text-danger"},[e._v("*")])]),e._v(" "),t(C.a,{attrs:{dense:"",outlined:"",type:"text","hide-details":!e.errors.employee_id,error:e.errors.employee_id,"error-messages":e.errors&&e.errors.employee_id?e.errors.employee_id[0]:""},model:{value:e.employee.employee_id,callback:function(t){e.$set(e.employee,"employee_id",t)},expression:"employee.employee_id"}})],1),e._v(" "),t(d.a,{attrs:{md:"6",cols:"6",sm:"6",dense:""}},[t("label",{staticClass:"col-form-label"},[e._v("Employee Device Id"),t("span",{staticClass:"text-danger"},[e._v("*")])]),e._v(" "),t(C.a,{attrs:{dense:"",outlined:"",type:"text","hide-details":!e.errors.system_user_id,error:e.errors.system_user_id,"error-messages":e.errors&&e.errors.system_user_id?e.errors.system_user_id[0]:""},model:{value:e.employee.system_user_id,callback:function(t){e.$set(e.employee,"system_user_id",t)},expression:"employee.system_user_id"}})],1),e._v(" "),t(d.a,{attrs:{md:"6",cols:"6",sm:"6",dense:""}},[t("label",{staticClass:"col-form-label"},[e._v("Mobile Number "),t("span",{staticClass:"text-danger"},[e._v("*")])]),e._v(" "),t(C.a,{attrs:{dense:"",outlined:"",type:"number","hide-details":!e.errors.phone_number,error:e.errors.phone_number,"error-messages":e.errors&&e.errors.phone_number?e.errors.phone_number[0]:""},model:{value:e.employee.phone_number,callback:function(t){e.$set(e.employee,"phone_number",t)},expression:"employee.phone_number"}})],1),e._v(" "),t(d.a,{attrs:{md:"6",cols:"6",sm:"6",dense:""}},[t("label",{staticClass:"col-form-label"},[e._v("Whatsapp "),t("span",{staticClass:"text-danger"},[e._v("*")]),e._v(" ( ex:\n                  971XXXX)")]),e._v(" "),t(C.a,{attrs:{dense:"",outlined:"",type:"number","hide-details":!e.errors.whatsapp_number,error:e.errors.whatsapp_number,"error-messages":e.errors&&e.errors.whatsapp_number?e.errors.whatsapp_number[0]:""},model:{value:e.employee.whatsapp_number,callback:function(t){e.$set(e.employee,"whatsapp_number",t)},expression:"employee.whatsapp_number"}})],1),e._v(" "),e.isCompany?t(d.a,{attrs:{cols:"6"}},[t("label",{staticClass:"col-form-label"},[e._v("Branch "),t("span",{staticClass:"text-danger"},[e._v("*")])]),e._v(" "),t(I.a,{attrs:{items:e.branches_list,dense:"",placeholder:"Select Branch",outlined:"","item-value":"id","item-text":"name",error:e.errors.branch_id,"error-messages":e.errors&&e.errors.branch_id?e.errors.branch_id[0]:""},on:{change:function(t){return e.filterDepartmentsByBranch(e.employee.branch_id)}},model:{value:e.employee.branch_id,callback:function(t){e.$set(e.employee,"branch_id",t)},expression:"employee.branch_id"}})],1):e._e(),e._v(" "),t(d.a,{attrs:{cols:"6"}},[t("label",{staticClass:"col-form-label"},[e._v("Department "),t("span",{staticClass:"text-danger"},[e._v("*")])]),e._v(" "),t(n.a,{attrs:{items:e.departments,"item-text":"name","item-value":"id",placeholder:"Select","hide-details":!e.errors.department_id,error:e.errors.department_id,"error-messages":e.errors&&e.errors.department_id?e.errors.department_id[0]:"",dense:"",outlined:""},model:{value:e.employee.department_id,callback:function(t){e.$set(e.employee,"department_id",t)},expression:"employee.department_id"}})],1)],1)],1),e._v(" "),t(d.a,{staticClass:"col-sm-6"},[t("div",{staticClass:"form-group pt-15",staticStyle:{margin:"0 auto",width:"200px"}},[t(_.a,{staticStyle:{width:"100%",height:"200px",border:"1px solid #5fafa3","border-radius":"50%",margin:"0 auto"},attrs:{src:e.previewImage||"/no-profile-image.jpg"}}),e._v(" "),t("br"),e._v(" "),t(o.a,{staticClass:"form-control primary",attrs:{small:""},on:{click:e.onpick_attachment}},[e._v(e._s(e.upload.name?"Change":"Upload")+" Profile Image\n                "),t(v.a,{attrs:{right:"",dark:""}},[e._v("mdi-cloud-upload")])],1),e._v(" "),t("input",{ref:"attachment_input",staticStyle:{display:"none"},attrs:{required:"",type:"file",accept:"image/*"},on:{change:e.attachment}}),e._v(" "),e.errors&&e.errors.profile_picture?t("span",{staticClass:"text-danger mt-2"},[e._v(e._s(e.errors.profile_picture[0]))]):e._e()],1)])],1)],1),e._v(" "),t(f.a),e._v(" "),t(c.a,[t(w.a),e._v(" "),t(o.a,{attrs:{small:"",loading:e.loading,color:"primary"},on:{click:e.store_data}},[e._v("\n          Submit\n        ")])],1)],1)],1),e._v(" "),t(m.a,{attrs:{persistent:"",width:"500"},model:{value:e.dialogCropping,callback:function(t){e.dialogCropping=t},expression:"dialogCropping"}},[t(l.a,{staticStyle:{"padding-top":"20px"}},[t(c.b,[t("VueCropper",{directives:[{name:"show",rawName:"v-show",value:e.selectedFile,expression:"selectedFile"}],ref:"cropper",attrs:{src:e.selectedFile,alt:"Source Image",aspectRatio:1,autoCropArea:.9,viewMode:3}})],1),e._v(" "),t(c.a,[t("div",{staticClass:"col-sm-12 col-md-6 col-12 pull-left",attrs:{col:"6",md:"6"}},[t(o.a,{staticClass:"danger btn btn-danger text-left",staticStyle:{float:"left"},attrs:{text:""},on:{click:function(t){return e.closePopup()}}},[e._v("Cancel")])],1),e._v(" "),t("div",{staticClass:"col-sm-12 col-md-6 col-12 text-right",attrs:{col:"6",md:"6"}},[t(o.a,{staticClass:"primary btn btn-danger text-right",on:{click:function(t){e.saveCroppedImageStep2(),e.dialogCropping=!1}}},[e._v("Crop")])],1)])],1)],1)],1)}),[],!1,null,"df5d2f60",null);t.default=component.exports},883:function(e,t,r){var content=r(884);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(22).default)("1377ef10",content,!0,{sourceMap:!1})},884:function(e,t,r){var n=r(21)((function(i){return i[1]}));n.push([e.i,".v-autocomplete.v-input>.v-input__control>.v-input__slot{cursor:text}.v-autocomplete input{align-self:center}.v-autocomplete.v-select.v-input--is-focused input{min-width:64px}.v-autocomplete:not(.v-input--is-focused).v-select--chips input{max-height:0;padding:0}.v-autocomplete--is-selecting-index input{opacity:0}.v-autocomplete.v-text-field--enclosed:not(.v-text-field--solo):not(.v-text-field--single-line):not(.v-text-field--outlined) .v-select__slot>input{margin-top:24px}.v-autocomplete.v-text-field--enclosed:not(.v-text-field--solo):not(.v-text-field--single-line):not(.v-text-field--outlined).v-input--dense .v-select__slot>input{margin-top:20px}.v-autocomplete__content.v-menu__content,.v-autocomplete__content.v-menu__content .v-card{border-radius:0}",""]),n.locals={},e.exports=n},893:function(e,t,r){"use strict";r(12),r(14),r(17),r(11),r(18);var n=r(3),o=(r(80),r(6),r(13),r(89),r(99),r(216),r(41),r(61),r(883),r(892)),l=r(214),c=r(65),d=r(0);function h(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function m(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var f=m(m({},o.b),{},{offsetY:!0,offsetOverflow:!0,transition:!1});t.a=o.a.extend({name:"v-autocomplete",props:{autoSelectFirst:{type:Boolean,default:!1},filter:{type:Function,default:function(e,t,r){return r.toLocaleLowerCase().indexOf(t.toLocaleLowerCase())>-1}},hideNoData:Boolean,menuProps:{type:o.a.options.props.menuProps.type,default:function(){return f}},noFilter:Boolean,searchInput:{type:String}},data:function(){return{lazySearch:this.searchInput}},computed:{classes:function(){return m(m({},o.a.options.computed.classes.call(this)),{},{"v-autocomplete":!0,"v-autocomplete--is-selecting-index":this.selectedIndex>-1})},computedItems:function(){return this.filteredItems},selectedValues:function(){var e=this;return this.selectedItems.map((function(t){return e.getValue(t)}))},hasDisplayedItems:function(){var e=this;return this.hideSelected?this.filteredItems.some((function(t){return!e.hasItem(t)})):this.filteredItems.length>0},currentRange:function(){return null==this.selectedItem?0:String(this.getText(this.selectedItem)).length},filteredItems:function(){var e=this;return!this.isSearching||this.noFilter||null==this.internalSearch?this.allItems:this.allItems.filter((function(t){var r=Object(d.s)(t,e.itemText),text=null!=r?String(r):"";return e.filter(t,String(e.internalSearch),text)}))},internalSearch:{get:function(){return this.lazySearch},set:function(e){this.lazySearch!==e&&(this.lazySearch=e,this.$emit("update:search-input",e))}},isAnyValueAllowed:function(){return!1},isDirty:function(){return this.searchIsDirty||this.selectedItems.length>0},isSearching:function(){return this.multiple&&this.searchIsDirty||this.searchIsDirty&&this.internalSearch!==this.getText(this.selectedItem)},menuCanShow:function(){return!!this.isFocused&&(this.hasDisplayedItems||!this.hideNoData)},$_menuProps:function(){var e=o.a.options.computed.$_menuProps.call(this);return e.contentClass="v-autocomplete__content ".concat(e.contentClass||"").trim(),m(m({},f),e)},searchIsDirty:function(){return null!=this.internalSearch&&""!==this.internalSearch},selectedItem:function(){var e=this;return this.multiple?null:this.selectedItems.find((function(i){return e.valueComparator(e.getValue(i),e.getValue(e.internalValue))}))},listData:function(){var data=o.a.options.computed.listData.call(this);return data.props=m(m({},data.props),{},{items:this.virtualizedItems,noFilter:this.noFilter||!this.isSearching||!this.filteredItems.length,searchInput:this.internalSearch}),data}},watch:{filteredItems:"onFilteredItemsChanged",internalValue:"setSearch",isFocused:function(e){e?(document.addEventListener("copy",this.onCopy),this.$refs.input&&this.$refs.input.select()):(document.removeEventListener("copy",this.onCopy),this.blur(),this.updateSelf())},isMenuActive:function(e){!e&&this.hasSlot&&(this.lazySearch=null)},items:function(e,t){t&&t.length||!this.hideNoData||!this.isFocused||this.isMenuActive||!e.length||this.activateMenu()},searchInput:function(e){this.lazySearch=e},internalSearch:"onInternalSearchChanged",itemText:"updateSelf"},created:function(){this.setSearch()},destroyed:function(){document.removeEventListener("copy",this.onCopy)},methods:{onFilteredItemsChanged:function(e,t){var r=this;if(e!==t){if(!this.autoSelectFirst){var n=t[this.$refs.menu.listIndex];n?this.setMenuIndex(e.findIndex((function(i){return i===n}))):this.setMenuIndex(-1),this.$emit("update:list-index",this.$refs.menu.listIndex)}this.$nextTick((function(){r.internalSearch&&(1===e.length||r.autoSelectFirst)&&(r.$refs.menu.getTiles(),r.autoSelectFirst&&e.length&&(r.setMenuIndex(0),r.$emit("update:list-index",r.$refs.menu.listIndex)))}))}},onInternalSearchChanged:function(){this.updateMenuDimensions()},updateMenuDimensions:function(){this.isMenuActive&&this.$refs.menu&&this.$refs.menu.updateDimensions()},changeSelectedIndex:function(e){this.searchIsDirty||(this.multiple&&e===d.z.left?-1===this.selectedIndex?this.selectedIndex=this.selectedItems.length-1:this.selectedIndex--:this.multiple&&e===d.z.right?this.selectedIndex>=this.selectedItems.length-1?this.selectedIndex=-1:this.selectedIndex++:e!==d.z.backspace&&e!==d.z.delete||this.deleteCurrentItem())},deleteCurrentItem:function(){var e=this.selectedIndex,t=this.selectedItems[e];if(this.isInteractive&&!this.getDisabled(t)){var r=this.selectedItems.length-1;if(-1!==this.selectedIndex||0===r){var n=e!==this.selectedItems.length-1?e:e-1;this.selectedItems[n]?this.selectItem(t):this.setValue(this.multiple?[]:null),this.selectedIndex=n}else this.selectedIndex=r}},clearableCallback:function(){this.internalSearch=null,o.a.options.methods.clearableCallback.call(this)},genInput:function(){var input=l.a.options.methods.genInput.call(this);return input.data=Object(c.a)(input.data,{attrs:{"aria-activedescendant":Object(d.q)(this.$refs.menu,"activeTile.id"),autocomplete:Object(d.q)(input.data,"attrs.autocomplete","off")},domProps:{value:this.internalSearch}}),input},genInputSlot:function(){var slot=o.a.options.methods.genInputSlot.call(this);return slot.data.attrs.role="combobox",slot},genSelections:function(){return this.hasSlot||this.multiple?o.a.options.methods.genSelections.call(this):[]},onClick:function(e){this.isInteractive&&(this.selectedIndex>-1?this.selectedIndex=-1:this.onFocus(),this.isAppendInner(e.target)||this.activateMenu())},onInput:function(e){if(!(this.selectedIndex>-1)&&e.target){var t=e.target,r=t.value;t.value&&this.activateMenu(),this.multiple||""!==r||this.deleteCurrentItem(),this.internalSearch=r,this.badInput=t.validity&&t.validity.badInput}},onKeyDown:function(e){var t=e.keyCode;!e.ctrlKey&&[d.z.home,d.z.end].includes(t)||o.a.options.methods.onKeyDown.call(this,e),this.changeSelectedIndex(t)},onSpaceDown:function(e){},onTabDown:function(e){o.a.options.methods.onTabDown.call(this,e),this.updateSelf()},onUpDown:function(e){e.preventDefault(),this.activateMenu()},selectItem:function(e){o.a.options.methods.selectItem.call(this,e),this.setSearch()},setSelectedItems:function(){o.a.options.methods.setSelectedItems.call(this),this.isFocused||this.setSearch()},setSearch:function(){var e=this;this.$nextTick((function(){e.multiple&&e.internalSearch&&e.isMenuActive||(e.internalSearch=!e.selectedItems.length||e.multiple||e.hasSlot?null:e.getText(e.selectedItem))}))},updateSelf:function(){(this.searchIsDirty||this.internalValue)&&(this.multiple||this.valueComparator(this.internalSearch,this.getValue(this.internalValue))||this.setSearch())},hasItem:function(e){return this.selectedValues.indexOf(this.getValue(e))>-1},onCopy:function(e){var t,r;if(-1!==this.selectedIndex){var n=this.selectedItems[this.selectedIndex],o=this.getText(n);null===(t=e.clipboardData)||void 0===t||t.setData("text/plain",o),null===(r=e.clipboardData)||void 0===r||r.setData("text/vnd.vuetify.autocomplete.item+plain",o),e.preventDefault()}}}})},895:function(e,t,r){var content=r(904);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(22).default)("8f215f56",content,!0,{sourceMap:!1})},904:function(e,t,r){var n=r(21)((function(i){return i[1]}));n.push([e.i,'/*!\n * Cropper.js v1.5.13\n * https://fengyuanchen.github.io/cropperjs\n *\n * Copyright 2015-present Chen Fengyuan\n * Released under the MIT license\n *\n * Date: 2022-11-20T05:30:43.444Z\n */.cropper-container{direction:ltr;font-size:0;line-height:0;position:relative;touch-action:none;-webkit-user-select:none;-moz-user-select:none;user-select:none}.cropper-container img{backface-visibility:hidden;display:block;height:100%;image-orientation:0deg;max-height:none!important;max-width:none!important;min-height:0!important;min-width:0!important;width:100%}.cropper-canvas,.cropper-crop-box,.cropper-drag-box,.cropper-modal,.cropper-wrap-box{bottom:0;left:0;position:absolute;right:0;top:0}.cropper-canvas,.cropper-wrap-box{overflow:hidden}.cropper-drag-box{background-color:#fff;opacity:0}.cropper-modal{background-color:#000;opacity:.5}.cropper-view-box{display:block;height:100%;outline:1px solid #39f;outline-color:rgba(51,153,255,.75);overflow:hidden;width:100%}.cropper-dashed{border:0 dashed #eee;display:block;opacity:.5;position:absolute}.cropper-dashed.dashed-h{border-bottom-width:1px;border-top-width:1px;height:33.33333%;left:0;top:33.33333%;width:100%}.cropper-dashed.dashed-v{border-left-width:1px;border-right-width:1px;height:100%;left:33.33333%;top:0;width:33.33333%}.cropper-center{display:block;height:0;left:50%;opacity:.75;position:absolute;top:50%;width:0}.cropper-center:after,.cropper-center:before{background-color:#eee;content:" ";display:block;position:absolute}.cropper-center:before{height:1px;left:-3px;top:0;width:7px}.cropper-center:after{height:7px;left:0;top:-3px;width:1px}.cropper-face,.cropper-line,.cropper-point{display:block;height:100%;opacity:.1;position:absolute;width:100%}.cropper-face{background-color:#fff;left:0;top:0}.cropper-line{background-color:#39f}.cropper-line.line-e{cursor:ew-resize;right:-3px;top:0;width:5px}.cropper-line.line-n{cursor:ns-resize;height:5px;left:0;top:-3px}.cropper-line.line-w{cursor:ew-resize;left:-3px;top:0;width:5px}.cropper-line.line-s{bottom:-3px;cursor:ns-resize;height:5px;left:0}.cropper-point{background-color:#39f;height:5px;opacity:.75;width:5px}.cropper-point.point-e{cursor:ew-resize;margin-top:-3px;right:-3px;top:50%}.cropper-point.point-n{cursor:ns-resize;left:50%;margin-left:-3px;top:-3px}.cropper-point.point-w{cursor:ew-resize;left:-3px;margin-top:-3px;top:50%}.cropper-point.point-s{bottom:-3px;cursor:s-resize;left:50%;margin-left:-3px}.cropper-point.point-ne{cursor:nesw-resize;right:-3px;top:-3px}.cropper-point.point-nw{cursor:nwse-resize;left:-3px;top:-3px}.cropper-point.point-sw{bottom:-3px;cursor:nesw-resize;left:-3px}.cropper-point.point-se{bottom:-3px;cursor:nwse-resize;height:20px;opacity:1;right:-3px;width:20px}@media (min-width:768px){.cropper-point.point-se{height:15px;width:15px}}@media (min-width:992px){.cropper-point.point-se{height:10px;width:10px}}@media (min-width:1200px){.cropper-point.point-se{height:5px;opacity:.75;width:5px}}.cropper-point.point-se:before{background-color:#39f;bottom:-50%;content:" ";display:block;height:200%;opacity:0;position:absolute;right:-50%;width:200%}.cropper-invisible{opacity:0}.cropper-bg{background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAAA3NCSVQICAjb4U/gAAAABlBMVEXMzMz////TjRV2AAAACXBIWXMAAArrAAAK6wGCiw1aAAAAHHRFWHRTb2Z0d2FyZQBBZG9iZSBGaXJld29ya3MgQ1M26LyyjAAAABFJREFUCJlj+M/AgBVhF/0PAH6/D/HkDxOGAAAAAElFTkSuQmCC")}.cropper-hide{display:block;height:0;position:absolute;width:0}.cropper-hidden{display:none!important}.cropper-move{cursor:move}.cropper-crop{cursor:crosshair}.cropper-disabled .cropper-drag-box,.cropper-disabled .cropper-face,.cropper-disabled .cropper-line,.cropper-disabled .cropper-point{cursor:not-allowed}',""]),n.locals={},e.exports=n}}]);