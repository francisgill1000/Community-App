(window.webpackJsonp=window.webpackJsonp||[]).push([[158],{1189:function(t,e,n){"use strict";n.r(e);var r=n(893),o=n(114),c=n(518),l=n(331),h=n(517),d=n(872),v=n(993),m=(n(12),n(14),n(13),n(17),n(11),n(18),n(23)),f=n(3);n(88),n(6),n(72),n(33),n(58),n(55);function _(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var x={props:["employeeId"],data:function(){return{response:"",snackbar:!1,setting:{user:{}},leave_managers:[],leave_groups:[],errors:[],loading:!1,isStatusChanged:!1}},created:function(){this.payloadOptions={params:{per_page:10,company_id:this.$auth.user.company_id}},this.getInfo(this.employeeId),this.getLeaveGroups(),this.getLeaveManagers()},methods:{getLeaveGroups:function(){var t=this;this.payloadOptions.params.company_id=this.$auth.user.company_id,this.loading=!0,this.$axios.get("leave_groups",this.payloadOptions).then((function(e){var data=e.data;t.leave_groups=data.data,t.loading=!1}))},getLeaveManagers:function(){var t=this;this.loading=!0,this.payloadOptions.params.company_id=this.$auth.user.company_id,this.$axios.get("employeesList",this.payloadOptions).then((function(e){var data=e.data;t.leave_managers=data.data,t.loading=!1}))},getEmployeeName:function(t){return t.first_name?t.first_name+" "+t.last_name:"---"},getInfo:function(t){var e=this;this.loading=!0,this.$axios.get("employee/".concat(t)).then((function(t){var data=t.data;e.employeeId=data.id,e.setting=function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?_(Object(source),!0).forEach((function(e){Object(f.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):_(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},data),e.loading=!1}))},caps:function(t){return""==t||null==t?"---":t.toString().replace(/\b\w/g,(function(t){return t.toUpperCase()}))},update_setting:function(){var t,e,n,r=this,o={company_id:null===(t=this.$auth)||void 0===t||null===(e=t.user)||void 0===e||null===(n=e.company)||void 0===n?void 0:n.id,employee_id:this.setting.employee_id,status:this.setting.status,lockDevice:this.setting.status?0:1,overtime:this.setting.overtime,leave_group_id:this.setting.leave_group_id,reporting_manager_id:this.setting.reporting_manager_id,user_id:this.setting.user_id,mobile_app_login_access:this.setting.user.mobile_app_login_access,web_login_access:this.setting.user.web_login_access,enable_whatsapp_otp:this.setting.user.enable_whatsapp_otp,tracking_status:this.setting.user.tracking_status};this.$axios.post("employee/update/setting",o).then(function(){var t=Object(m.a)(regeneratorRuntime.mark((function t(e){var data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(data=e.data,r.loading=!1,data.status){t.next=6;break}r.errors=data.errors,t.next=12;break;case 6:return r.errors=[],r.snackbar=!0,r.response="Settings has been successfully updated",t.next=11,r.handleExpiry();case 11:setTimeout((function(){return r.$emit("close-popup")}),3e3);case 12:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(t){return console.log(t)}))},handleExpiry:function(){var t=this;return Object(m.a)(regeneratorRuntime.mark((function e(){var n,r,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.$axios.post("setUserExpiry/".concat(null===(n=t.$auth)||void 0===n||null===(r=n.user)||void 0===r||null===(o=r.company)||void 0===o?void 0:o.id),{name:t.setting.first_name+" "+t.setting.last_name,userCode:t.setting.system_user_id,lockDevice:t.setting.status?0:1}).then((function(t){t.data}));case 1:case"end":return e.stop()}}),e)})))()}}},w=x,y=n(116),component=Object(y.a)(w,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"mt-5"},[e("div",{staticClass:"text-center ma-2"},[e(d.a,{attrs:{small:"",top:"top",color:"background"},model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v("\n      "+t._s(t.response)+"\n    ")])],1),t._v(" "),e(h.a,[e(l.a,{attrs:{active:t.loading,color:"primary",indeterminate:""}}),t._v(" "),e(c.a,{attrs:{cols:"6",xs:"6",sm:"12",md:"6",lg:"6",xl:"6"}},[e(c.a,{attrs:{md:"12",sm:"12",cols:"12"}},[e(r.a,{attrs:{label:"Leave Group",items:t.leave_groups,"item-text":"group_name","item-value":"id",placeholder:"Select","hide-details":!t.errors.leave_group_id,error:t.errors.leave_group_id,"error-messages":t.errors&&t.errors.leave_group_id?t.errors.leave_group_id[0]:"",dense:"",outlined:""},model:{value:t.setting.leave_group_id,callback:function(e){t.$set(t.setting,"leave_group_id",e)},expression:"setting.leave_group_id"}})],1),t._v(" "),e(c.a,{attrs:{md:"12",sm:"12",sx:"12",xl:"12",cols:"12",outlined:""}},[e(r.a,{attrs:{label:"Leave Manager/Reporting Manger",items:t.leave_managers,"item-text":t.getEmployeeName,"item-value":"id",placeholder:"Select","hide-details":!t.errors.reporting_manager_id,error:t.errors.reporting_manager_id,"error-messages":t.errors&&t.errors.reporting_manager_id?t.errors.reporting_manager_id[0]:"",dense:"",outlined:""},model:{value:t.setting.reporting_manager_id,callback:function(e){t.$set(t.setting,"reporting_manager_id",e)},expression:"setting.reporting_manager_id"}})],1)],1),t._v(" "),e(c.a,{attrs:{cols:"6",xs:"12",sm:"12",md:"6",lg:"6",xl:"6",outlined:"",elevation:"2"}},[e("table",{staticStyle:{width:"70%"}},[e("tr",[e("td",[e("strong",[t._v("Employee Status")])]),t._v(" "),e("td",[e(v.a,{staticClass:"mt-0 ml-2",attrs:{color:"success"},on:{change:function(e){t.isStatusChanged=!0}},model:{value:t.setting.status,callback:function(e){t.$set(t.setting,"status",e)},expression:"setting.status"}})],1)]),t._v(" "),e("tr",[e("td",[e("strong",[t._v("Web Login Access")])]),t._v(" "),e("td",[e(v.a,{staticClass:"mt-0 ml-2",attrs:{color:"success"},model:{value:t.setting.user.web_login_access,callback:function(e){t.$set(t.setting.user,"web_login_access",e)},expression:"setting.user.web_login_access"}})],1)]),t._v(" "),e("tr",[e("td",[e("strong",[t._v("Mobile App Login Access")])]),t._v(" "),e("td",[e(v.a,{staticClass:"mt-0 ml-2",attrs:{color:"success"},model:{value:t.setting.user.mobile_app_login_access,callback:function(e){t.$set(t.setting.user,"mobile_app_login_access",e)},expression:"setting.user.mobile_app_login_access"}})],1)]),t._v(" "),e("tr",[e("td",[e("strong",[t._v("Over Time")])]),t._v(" "),e("td",[e("div",{staticClass:"text-overline mb-1"},[e(v.a,{staticClass:"mt-0 ml-2",attrs:{color:"success"},model:{value:t.setting.overtime,callback:function(e){t.$set(t.setting,"overtime",e)},expression:"setting.overtime"}})],1)])]),t._v(" "),e("tr",[e("td",[e("strong",[t._v(" Whatsapp OTP")])]),t._v(" "),e("td",[e("div",{staticClass:"text-overline mb-1"},[e(v.a,{staticClass:"mt-0 ml-2",attrs:{color:"success"},model:{value:t.setting.user.enable_whatsapp_otp,callback:function(e){t.$set(t.setting.user,"enable_whatsapp_otp",e)},expression:"setting.user.enable_whatsapp_otp"}})],1)])]),t._v(" "),e("tr",[e("td",[e("strong",[t._v("Location Tracking(Mobile Login) ")])]),t._v(" "),e("td",[e("div",{staticClass:"text-overline mb-1"},[e(v.a,{staticClass:"mt-0 ml-2",attrs:{color:"success"},model:{value:t.setting.user.tracking_status,callback:function(e){t.$set(t.setting.user,"tracking_status",e)},expression:"setting.user.tracking_status"}})],1)])])])]),t._v(" "),e(c.a,{staticClass:"text-right",attrs:{col:"12"}},[e("div",{staticClass:"text-right"},[e(o.a,{staticClass:"primary mt-1",attrs:{small:""},on:{click:t.update_setting}},[t._v("Save")])],1)])],1)],1)}),[],!1,null,null,null);e.default=component.exports},883:function(t,e,n){var content=n(884);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(22).default)("1377ef10",content,!0,{sourceMap:!1})},884:function(t,e,n){var r=n(21)((function(i){return i[1]}));r.push([t.i,".v-autocomplete.v-input>.v-input__control>.v-input__slot{cursor:text}.v-autocomplete input{align-self:center}.v-autocomplete.v-select.v-input--is-focused input{min-width:64px}.v-autocomplete:not(.v-input--is-focused).v-select--chips input{max-height:0;padding:0}.v-autocomplete--is-selecting-index input{opacity:0}.v-autocomplete.v-text-field--enclosed:not(.v-text-field--solo):not(.v-text-field--single-line):not(.v-text-field--outlined) .v-select__slot>input{margin-top:24px}.v-autocomplete.v-text-field--enclosed:not(.v-text-field--solo):not(.v-text-field--single-line):not(.v-text-field--outlined).v-input--dense .v-select__slot>input{margin-top:20px}.v-autocomplete__content.v-menu__content,.v-autocomplete__content.v-menu__content .v-card{border-radius:0}",""]),r.locals={},t.exports=r},893:function(t,e,n){"use strict";n(12),n(14),n(17),n(11),n(18);var r=n(3),o=(n(80),n(6),n(13),n(89),n(99),n(216),n(41),n(61),n(883),n(892)),c=n(214),l=n(65),h=n(1);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var m=v(v({},o.b),{},{offsetY:!0,offsetOverflow:!0,transition:!1});e.a=o.a.extend({name:"v-autocomplete",props:{autoSelectFirst:{type:Boolean,default:!1},filter:{type:Function,default:function(t,e,n){return n.toLocaleLowerCase().indexOf(e.toLocaleLowerCase())>-1}},hideNoData:Boolean,menuProps:{type:o.a.options.props.menuProps.type,default:function(){return m}},noFilter:Boolean,searchInput:{type:String}},data:function(){return{lazySearch:this.searchInput}},computed:{classes:function(){return v(v({},o.a.options.computed.classes.call(this)),{},{"v-autocomplete":!0,"v-autocomplete--is-selecting-index":this.selectedIndex>-1})},computedItems:function(){return this.filteredItems},selectedValues:function(){var t=this;return this.selectedItems.map((function(e){return t.getValue(e)}))},hasDisplayedItems:function(){var t=this;return this.hideSelected?this.filteredItems.some((function(e){return!t.hasItem(e)})):this.filteredItems.length>0},currentRange:function(){return null==this.selectedItem?0:String(this.getText(this.selectedItem)).length},filteredItems:function(){var t=this;return!this.isSearching||this.noFilter||null==this.internalSearch?this.allItems:this.allItems.filter((function(e){var n=Object(h.s)(e,t.itemText),text=null!=n?String(n):"";return t.filter(e,String(t.internalSearch),text)}))},internalSearch:{get:function(){return this.lazySearch},set:function(t){this.lazySearch!==t&&(this.lazySearch=t,this.$emit("update:search-input",t))}},isAnyValueAllowed:function(){return!1},isDirty:function(){return this.searchIsDirty||this.selectedItems.length>0},isSearching:function(){return this.multiple&&this.searchIsDirty||this.searchIsDirty&&this.internalSearch!==this.getText(this.selectedItem)},menuCanShow:function(){return!!this.isFocused&&(this.hasDisplayedItems||!this.hideNoData)},$_menuProps:function(){var t=o.a.options.computed.$_menuProps.call(this);return t.contentClass="v-autocomplete__content ".concat(t.contentClass||"").trim(),v(v({},m),t)},searchIsDirty:function(){return null!=this.internalSearch&&""!==this.internalSearch},selectedItem:function(){var t=this;return this.multiple?null:this.selectedItems.find((function(i){return t.valueComparator(t.getValue(i),t.getValue(t.internalValue))}))},listData:function(){var data=o.a.options.computed.listData.call(this);return data.props=v(v({},data.props),{},{items:this.virtualizedItems,noFilter:this.noFilter||!this.isSearching||!this.filteredItems.length,searchInput:this.internalSearch}),data}},watch:{filteredItems:"onFilteredItemsChanged",internalValue:"setSearch",isFocused:function(t){t?(document.addEventListener("copy",this.onCopy),this.$refs.input&&this.$refs.input.select()):(document.removeEventListener("copy",this.onCopy),this.blur(),this.updateSelf())},isMenuActive:function(t){!t&&this.hasSlot&&(this.lazySearch=null)},items:function(t,e){e&&e.length||!this.hideNoData||!this.isFocused||this.isMenuActive||!t.length||this.activateMenu()},searchInput:function(t){this.lazySearch=t},internalSearch:"onInternalSearchChanged",itemText:"updateSelf"},created:function(){this.setSearch()},destroyed:function(){document.removeEventListener("copy",this.onCopy)},methods:{onFilteredItemsChanged:function(t,e){var n=this;if(t!==e){if(!this.autoSelectFirst){var r=e[this.$refs.menu.listIndex];r?this.setMenuIndex(t.findIndex((function(i){return i===r}))):this.setMenuIndex(-1),this.$emit("update:list-index",this.$refs.menu.listIndex)}this.$nextTick((function(){n.internalSearch&&(1===t.length||n.autoSelectFirst)&&(n.$refs.menu.getTiles(),n.autoSelectFirst&&t.length&&(n.setMenuIndex(0),n.$emit("update:list-index",n.$refs.menu.listIndex)))}))}},onInternalSearchChanged:function(){this.updateMenuDimensions()},updateMenuDimensions:function(){this.isMenuActive&&this.$refs.menu&&this.$refs.menu.updateDimensions()},changeSelectedIndex:function(t){this.searchIsDirty||(this.multiple&&t===h.z.left?-1===this.selectedIndex?this.selectedIndex=this.selectedItems.length-1:this.selectedIndex--:this.multiple&&t===h.z.right?this.selectedIndex>=this.selectedItems.length-1?this.selectedIndex=-1:this.selectedIndex++:t!==h.z.backspace&&t!==h.z.delete||this.deleteCurrentItem())},deleteCurrentItem:function(){var t=this.selectedIndex,e=this.selectedItems[t];if(this.isInteractive&&!this.getDisabled(e)){var n=this.selectedItems.length-1;if(-1!==this.selectedIndex||0===n){var r=t!==this.selectedItems.length-1?t:t-1;this.selectedItems[r]?this.selectItem(e):this.setValue(this.multiple?[]:null),this.selectedIndex=r}else this.selectedIndex=n}},clearableCallback:function(){this.internalSearch=null,o.a.options.methods.clearableCallback.call(this)},genInput:function(){var input=c.a.options.methods.genInput.call(this);return input.data=Object(l.a)(input.data,{attrs:{"aria-activedescendant":Object(h.q)(this.$refs.menu,"activeTile.id"),autocomplete:Object(h.q)(input.data,"attrs.autocomplete","off")},domProps:{value:this.internalSearch}}),input},genInputSlot:function(){var slot=o.a.options.methods.genInputSlot.call(this);return slot.data.attrs.role="combobox",slot},genSelections:function(){return this.hasSlot||this.multiple?o.a.options.methods.genSelections.call(this):[]},onClick:function(t){this.isInteractive&&(this.selectedIndex>-1?this.selectedIndex=-1:this.onFocus(),this.isAppendInner(t.target)||this.activateMenu())},onInput:function(t){if(!(this.selectedIndex>-1)&&t.target){var e=t.target,n=e.value;e.value&&this.activateMenu(),this.multiple||""!==n||this.deleteCurrentItem(),this.internalSearch=n,this.badInput=e.validity&&e.validity.badInput}},onKeyDown:function(t){var e=t.keyCode;!t.ctrlKey&&[h.z.home,h.z.end].includes(e)||o.a.options.methods.onKeyDown.call(this,t),this.changeSelectedIndex(e)},onSpaceDown:function(t){},onTabDown:function(t){o.a.options.methods.onTabDown.call(this,t),this.updateSelf()},onUpDown:function(t){t.preventDefault(),this.activateMenu()},selectItem:function(t){o.a.options.methods.selectItem.call(this,t),this.setSearch()},setSelectedItems:function(){o.a.options.methods.setSelectedItems.call(this),this.isFocused||this.setSearch()},setSearch:function(){var t=this;this.$nextTick((function(){t.multiple&&t.internalSearch&&t.isMenuActive||(t.internalSearch=!t.selectedItems.length||t.multiple||t.hasSlot?null:t.getText(t.selectedItem))}))},updateSelf:function(){(this.searchIsDirty||this.internalValue)&&(this.multiple||this.valueComparator(this.internalSearch,this.getValue(this.internalValue))||this.setSearch())},hasItem:function(t){return this.selectedValues.indexOf(this.getValue(t))>-1},onCopy:function(t){var e,n;if(-1!==this.selectedIndex){var r=this.selectedItems[this.selectedIndex],o=this.getText(r);null===(e=t.clipboardData)||void 0===e||e.setData("text/plain",o),null===(n=t.clipboardData)||void 0===n||n.setData("text/vnd.vuetify.autocomplete.item+plain",o),t.preventDefault()}}}})},961:function(t,e,n){var content=n(962);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(22).default)("59f225a8",content,!0,{sourceMap:!1})},962:function(t,e,n){var r=n(21)((function(i){return i[1]}));r.push([t.i,".theme--light.v-input--switch .v-input--switch__thumb{color:#fff}.theme--light.v-input--switch .v-input--switch__track{color:rgba(0,0,0,.38)}.theme--light.v-input--switch.v-input--is-disabled:not(.v-input--is-dirty) .v-input--switch__thumb{color:#fafafa!important}.theme--light.v-input--switch.v-input--is-disabled:not(.v-input--is-dirty) .v-input--switch__track{color:rgba(0,0,0,.12)!important}.theme--dark.v-input--switch .v-input--switch__thumb{color:#bdbdbd}.theme--dark.v-input--switch .v-input--switch__track{color:hsla(0,0%,100%,.3)}.theme--dark.v-input--switch.v-input--is-disabled:not(.v-input--is-dirty) .v-input--switch__thumb{color:#424242!important}.theme--dark.v-input--switch.v-input--is-disabled:not(.v-input--is-dirty) .v-input--switch__track{color:hsla(0,0%,100%,.1)!important}.v-input--switch__thumb,.v-input--switch__track{background-color:currentColor;pointer-events:none;transition:inherit}.v-input--switch__track{border-radius:8px;height:14px;left:2px;opacity:.6;position:absolute;right:2px;top:calc(50% - 7px);width:36px}.v-input--switch__thumb{align-items:center;border-radius:50%;display:flex;height:20px;justify-content:center;position:relative;top:calc(50% - 10px);transition:.3s cubic-bezier(.25,.8,.5,1);width:20px}.v-input--switch .v-input--selection-controls__input{transition:opacity .3s cubic-bezier(.25,.8,.5,1);width:38px}.v-input--switch .v-input--selection-controls__ripple{top:calc(50% - 24px)}.v-input--switch.v-input--dense .v-input--switch__thumb{height:18px;width:18px}.v-input--switch.v-input--dense .v-input--switch__track{height:12px;width:32px}.v-input--switch.v-input--dense.v-input--switch--inset .v-input--switch__track{height:22px;left:-3px;top:calc(50% - 12px);width:44px}.v-input--switch.v-input--dense .v-input--selection-controls__ripple{top:calc(50% - 22px)}.v-input--switch.v-input--is-dirty.v-input--is-disabled .v-input--selection-controls__input{opacity:.6}.v-application--is-ltr .v-input--switch .v-input--selection-controls__ripple{left:-14px}.v-application--is-ltr .v-input--switch.v-input--dense .v-input--selection-controls__ripple{left:-12px}.v-application--is-ltr .v-input--switch.v-input--is-dirty .v-input--selection-controls__ripple,.v-application--is-ltr .v-input--switch.v-input--is-dirty .v-input--switch__thumb{transform:translate(20px)}.v-application--is-rtl .v-input--switch .v-input--selection-controls__ripple{right:-14px}.v-application--is-rtl .v-input--switch.v-input--dense .v-input--selection-controls__ripple{right:-12px}.v-application--is-rtl .v-input--switch.v-input--is-dirty .v-input--selection-controls__ripple,.v-application--is-rtl .v-input--switch.v-input--is-dirty .v-input--switch__thumb{transform:translate(-20px)}.v-input--switch:not(.v-input--switch--flat):not(.v-input--switch--inset) .v-input--switch__thumb{box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12)}.v-input--switch--inset .v-input--selection-controls__input,.v-input--switch--inset .v-input--switch__track{width:48px}.v-input--switch--inset .v-input--switch__track{border-radius:14px;height:28px;left:-4px;opacity:.32;top:calc(50% - 14px)}.v-application--is-ltr .v-input--switch--inset .v-input--selection-controls__ripple,.v-application--is-ltr .v-input--switch--inset .v-input--switch__thumb{transform:translate(0)!important}.v-application--is-rtl .v-input--switch--inset .v-input--selection-controls__ripple,.v-application--is-rtl .v-input--switch--inset .v-input--switch__thumb{transform:translate(-6px)!important}.v-application--is-ltr .v-input--switch--inset.v-input--is-dirty .v-input--selection-controls__ripple,.v-application--is-ltr .v-input--switch--inset.v-input--is-dirty .v-input--switch__thumb{transform:translate(20px)!important}.v-application--is-rtl .v-input--switch--inset.v-input--is-dirty .v-input--selection-controls__ripple,.v-application--is-rtl .v-input--switch--inset.v-input--is-dirty .v-input--switch__thumb{transform:translate(-26px)!important}",""]),r.locals={},t.exports=r},993:function(t,e,n){"use strict";n(12),n(14),n(13),n(6),n(17),n(11),n(18);var r=n(107),o=n(3),c=(n(217),n(218),n(524),n(961),n(353)),l=n(73),h=n(121),d=n(134),v=n(267),m=n(1),f=["title"];function _(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function x(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?_(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):_(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=c.a.extend({name:"v-switch",directives:{Touch:h.a},props:{inset:Boolean,loading:{type:[Boolean,String],default:!1},flat:{type:Boolean,default:!1}},computed:{classes:function(){return x(x({},l.a.options.computed.classes.call(this)),{},{"v-input--selection-controls v-input--switch":!0,"v-input--switch--flat":this.flat,"v-input--switch--inset":this.inset})},attrs:function(){return{"aria-checked":String(this.isActive),"aria-disabled":String(this.isDisabled),role:"switch"}},validationState:function(){return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0},switchData:function(){return this.setTextColor(this.loading?void 0:this.validationState,{class:this.themeClasses})}},methods:{genDefaultSlot:function(){return[this.genSwitch(),this.genLabel()]},genSwitch:function(){var t=this.attrs$,e=(t.title,Object(r.a)(t,f));return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.genInput("checkbox",x(x({},this.attrs),e)),this.genRipple(this.setTextColor(this.validationState,{directives:[{name:"touch",value:{left:this.onSwipeLeft,right:this.onSwipeRight}}]})),this.$createElement("div",x({staticClass:"v-input--switch__track"},this.switchData)),this.$createElement("div",x({staticClass:"v-input--switch__thumb"},this.switchData),[this.genProgress()])])},genProgress:function(){return this.$createElement(d.c,{},[!1===this.loading?null:this.$slots.progress||this.$createElement(v.a,{props:{color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,size:16,width:2,indeterminate:!0}})])},onSwipeLeft:function(){this.isActive&&this.onChange()},onSwipeRight:function(){this.isActive||this.onChange()},onKeydown:function(t){(t.keyCode===m.z.left&&this.isActive||t.keyCode===m.z.right&&!this.isActive)&&this.onChange()}}})}}]);