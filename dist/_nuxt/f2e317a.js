(window.webpackJsonp=window.webpackJsonp||[]).push([[357,185,193],{1280:function(e,t,n){var content=n(1451);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(22).default)("6689323a",content,!0,{sourceMap:!1})},1281:function(e,t,n){var content=n(1453);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(22).default)("a5968638",content,!0,{sourceMap:!1})},1450:function(e,t,n){"use strict";n(1280)},1451:function(e,t,n){var r=n(21)((function(i){return i[1]}));r.push([e.i,"table[data-v-67f025f3]{border-collapse:collapse;font-family:arial,sans-serif;width:100%}td[data-v-67f025f3],th[data-v-67f025f3]{border:1px solid #ddd;padding:8px;text-align:left}tr[data-v-67f025f3]:nth-child(2n){background-color:#ddd}",""]),r.locals={},e.exports=r},1452:function(e,t,n){"use strict";n(1281)},1453:function(e,t,n){var r=n(21)((function(i){return i[1]}));r.push([e.i,".tiptap-vuetify-editor__content[data-v-67f025f3]{min-height:400px!important}.ProseMirror .ProseMirror-focused[data-v-67f025f3]{height:400px!important}.tiptap-icon .v-btn--icon[data-v-67f025f3],.tiptap-icon .v-icon[data-v-67f025f3]{color:#fff!important}",""]),r.locals={},e.exports=r},1604:function(e,t,n){"use strict";n.r(t);var r=n(893),l=n(114),o=n(133),c=n(87),d=n(518),h=n(875),f=n(147),v=n(517),m=n(349),_=(n(37),n(80),n(13),n(6),n(41),n(61),n(11),{data:function(){return{model:"Upload Users",menu:!1,color:"primary",preloader:!1,loading:!1,response:!1,payload:{users:[],devices:[],company_id:0},employees:[],devices:[],errors:[],results:[],columns:["id","display_name","system_user_id","profile_picture"]}},mounted:function(){},created:function(){var e,t,n,r,l,o,c=this,d={params:{per_page:1e3,company_id:null===(e=this.$auth)||void 0===e||null===(t=e.user)||void 0===t||null===(n=t.company)||void 0===n?void 0:n.id,columns:this.columns}};this.$axios.get("employeesList",d).then((function(e){var data=e.data.data;c.employees=data.map((function(e){return{userCode:e.system_user_id,name:e.display_name,profile_picture:e.profile_picture}}))})),this.$axios.get("device",d).then((function(e){var data=e.data.data;c.devices=data.filter((function(e){return 1==e.status_id}))})),this.preloader=!1,this.payload.company_id=null===(r=this.$auth)||void 0===r||null===(l=r.user)||void 0===l||null===(o=l.company)||void 0===o?void 0:o.id},methods:{can:function(e){return this.$pagePermission.can(e,this)},setUsers:function(){var e=this;this.payload.users=this.payload.users.includes("-1")?this.employees:this.employees.filter((function(t){return e.payload.users.includes(t.system_user_id)}))},setDevices:function(){var e=this;this.payload.devices=this.payload.devices.includes("-1")?this.devices:this.devices.filter((function(t){return e.payload.devices.includes(t.device_id)}))},store:function(){var e=this;this.results=[];var t=this.payload,n=t.users,r=t.devices,l=this.employees,o=r.map((function(e){return{device_id:e.device_id,device_name:e.name}})),c=l.filter((function(e){return n.includes(e.userCode)}));o.forEach((function(t){c.forEach((function(n){n.device_id=t.device_id,n.device_name=t.device_name,n.expiry="2089-12-31 23:59:59",n.faceImage="https://backend.ideahrms.com/media/employee/profile_picture/WhatsApp%20Image%202022-09-16%20at%202.11.34%20PM%20(1).jpeg",e.$axios.post("upload-users",n).then((function(t){var data=t.data;e.results.push(data)})).catch((function(t){return e.results.push(t.message)}))}))}))}}}),y=(n(1450),n(1452),n(116)),component=Object(y.a)(_,(function(){var e=this,t=e._self._c;return e.can("device_management")?t("div",[e.preloader?t("Preloader"):t("div",[t(v.a,{staticClass:"mt-5 mb-5"},[t(d.a,{attrs:{cols:"10"}},[t("h3",[e._v(e._s(e.model))]),e._v(" "),t("div",[e._v("Dashboard / "+e._s(e.model))])])],1),e._v(" "),t(o.a,{staticClass:"pa-3",attrs:{elevation:"0"}},[t(c.d,[t("label",{staticClass:"col-form-label"},[t("b",[e._v("Upload User List to devices ")])]),e._v(" "),t(m.a),e._v(" "),t(l.a,{attrs:{small:"",fab:"",color:"background",dark:"",to:"/device_management"}},[t(f.a,[e._v("mdi-arrow-left")])],1)],1),e._v(" "),t(h.a,[t(v.a,[t(d.a,{attrs:{cols:"3"}},[t(r.a,{attrs:{"hide-details":!e.payload.users,multiple:"",outlined:"",dense:"","item-text":"name","item-value":"userCode",placeholder:"Users",items:e.employees},model:{value:e.payload.users,callback:function(t){e.$set(e.payload,"users",t)},expression:"payload.users"}}),e._v(" "),e.errors&&e.errors.users?t("span",{staticClass:"error--text"},[e._v(e._s(e.errors.users[0]))]):e._e()],1),e._v(" "),t(d.a,{attrs:{cols:"3"}},[t(r.a,{attrs:{"hide-details":!e.payload.devices,multiple:"",outlined:"",dense:"","item-text":"name","item-value":"device_id",placeholder:"Devices",items:e.devices},on:{change:e.setDevices},model:{value:e.payload.devices,callback:function(t){e.$set(e.payload,"devices",t)},expression:"payload.devices"}}),e._v(" "),e.errors&&e.errors.devices?t("span",{staticClass:"error--text"},[e._v(e._s(e.errors.devices[0]))]):e._e()],1),e._v(" "),t(d.a,{attrs:{cols:"12"}},[t(l.a,{attrs:{small:"",color:"primary"},on:{click:e.store}},[e._v(" Submit ")])],1),e._v(" "),t(d.a,{attrs:{cols:"12"}},[t("table",[t("thead",[t("tr",[t("th",{staticClass:"text-left"},[e._v("User Code")]),e._v(" "),t("th",{staticClass:"text-left"},[e._v("Name")]),e._v(" "),t("th",{staticClass:"text-left"},[e._v("Device ID")]),e._v(" "),t("th",{staticClass:"text-left"},[e._v("Message")]),e._v(" "),t("th",{staticClass:"text-left"},[e._v("Status")])])]),e._v(" "),t("tbody",e._l(e.results,(function(n,r){var l=n.userCode,o=n.name,c=n.device_id,d=n.message,h=n.status;return t("tr",{key:r},[t("td",[e._v(e._s(l))]),e._v(" "),t("td",[e._v(e._s(o))]),e._v(" "),t("td",[e._v(e._s(c))]),e._v(" "),t("td",[e._v(e._s(d))]),e._v(" "),t("td",[t(f.a,{attrs:{color:h?"green":"red"}},[e._v("mdi-"+e._s(h?"check":"close"))])],1)])})),0)])])],1)],1)],1)],1)],1):t("NoAccess")}),[],!1,null,"67f025f3",null);t.default=component.exports;installComponents(component,{Preloader:n(897).default,NoAccess:n(880).default})},880:function(e,t,n){"use strict";n.r(t);var r=n(116),component=Object(r.a)({},(function(){this._self._c;return this._m(0)}),[function(){var e=this._self._c;return e("div",{staticClass:"text-center",staticStyle:{"margin-top":"25%"}},[e("b",[this._v("No Access")])])}],!1,null,null,null);t.default=component.exports},883:function(e,t,n){var content=n(884);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(22).default)("1377ef10",content,!0,{sourceMap:!1})},884:function(e,t,n){var r=n(21)((function(i){return i[1]}));r.push([e.i,".v-autocomplete.v-input>.v-input__control>.v-input__slot{cursor:text}.v-autocomplete input{align-self:center}.v-autocomplete.v-select.v-input--is-focused input{min-width:64px}.v-autocomplete:not(.v-input--is-focused).v-select--chips input{max-height:0;padding:0}.v-autocomplete--is-selecting-index input{opacity:0}.v-autocomplete.v-text-field--enclosed:not(.v-text-field--solo):not(.v-text-field--single-line):not(.v-text-field--outlined) .v-select__slot>input{margin-top:24px}.v-autocomplete.v-text-field--enclosed:not(.v-text-field--solo):not(.v-text-field--single-line):not(.v-text-field--outlined).v-input--dense .v-select__slot>input{margin-top:20px}.v-autocomplete__content.v-menu__content,.v-autocomplete__content.v-menu__content .v-card{border-radius:0}",""]),r.locals={},e.exports=r},893:function(e,t,n){"use strict";n(12),n(14),n(17),n(11),n(18);var r=n(3),l=(n(80),n(6),n(13),n(89),n(99),n(216),n(41),n(61),n(883),n(892)),o=n(214),c=n(65),d=n(1);function h(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function f(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var v=f(f({},l.b),{},{offsetY:!0,offsetOverflow:!0,transition:!1});t.a=l.a.extend({name:"v-autocomplete",props:{autoSelectFirst:{type:Boolean,default:!1},filter:{type:Function,default:function(e,t,n){return n.toLocaleLowerCase().indexOf(t.toLocaleLowerCase())>-1}},hideNoData:Boolean,menuProps:{type:l.a.options.props.menuProps.type,default:function(){return v}},noFilter:Boolean,searchInput:{type:String}},data:function(){return{lazySearch:this.searchInput}},computed:{classes:function(){return f(f({},l.a.options.computed.classes.call(this)),{},{"v-autocomplete":!0,"v-autocomplete--is-selecting-index":this.selectedIndex>-1})},computedItems:function(){return this.filteredItems},selectedValues:function(){var e=this;return this.selectedItems.map((function(t){return e.getValue(t)}))},hasDisplayedItems:function(){var e=this;return this.hideSelected?this.filteredItems.some((function(t){return!e.hasItem(t)})):this.filteredItems.length>0},currentRange:function(){return null==this.selectedItem?0:String(this.getText(this.selectedItem)).length},filteredItems:function(){var e=this;return!this.isSearching||this.noFilter||null==this.internalSearch?this.allItems:this.allItems.filter((function(t){var n=Object(d.s)(t,e.itemText),text=null!=n?String(n):"";return e.filter(t,String(e.internalSearch),text)}))},internalSearch:{get:function(){return this.lazySearch},set:function(e){this.lazySearch!==e&&(this.lazySearch=e,this.$emit("update:search-input",e))}},isAnyValueAllowed:function(){return!1},isDirty:function(){return this.searchIsDirty||this.selectedItems.length>0},isSearching:function(){return this.multiple&&this.searchIsDirty||this.searchIsDirty&&this.internalSearch!==this.getText(this.selectedItem)},menuCanShow:function(){return!!this.isFocused&&(this.hasDisplayedItems||!this.hideNoData)},$_menuProps:function(){var e=l.a.options.computed.$_menuProps.call(this);return e.contentClass="v-autocomplete__content ".concat(e.contentClass||"").trim(),f(f({},v),e)},searchIsDirty:function(){return null!=this.internalSearch&&""!==this.internalSearch},selectedItem:function(){var e=this;return this.multiple?null:this.selectedItems.find((function(i){return e.valueComparator(e.getValue(i),e.getValue(e.internalValue))}))},listData:function(){var data=l.a.options.computed.listData.call(this);return data.props=f(f({},data.props),{},{items:this.virtualizedItems,noFilter:this.noFilter||!this.isSearching||!this.filteredItems.length,searchInput:this.internalSearch}),data}},watch:{filteredItems:"onFilteredItemsChanged",internalValue:"setSearch",isFocused:function(e){e?(document.addEventListener("copy",this.onCopy),this.$refs.input&&this.$refs.input.select()):(document.removeEventListener("copy",this.onCopy),this.blur(),this.updateSelf())},isMenuActive:function(e){!e&&this.hasSlot&&(this.lazySearch=null)},items:function(e,t){t&&t.length||!this.hideNoData||!this.isFocused||this.isMenuActive||!e.length||this.activateMenu()},searchInput:function(e){this.lazySearch=e},internalSearch:"onInternalSearchChanged",itemText:"updateSelf"},created:function(){this.setSearch()},destroyed:function(){document.removeEventListener("copy",this.onCopy)},methods:{onFilteredItemsChanged:function(e,t){var n=this;if(e!==t){if(!this.autoSelectFirst){var r=t[this.$refs.menu.listIndex];r?this.setMenuIndex(e.findIndex((function(i){return i===r}))):this.setMenuIndex(-1),this.$emit("update:list-index",this.$refs.menu.listIndex)}this.$nextTick((function(){n.internalSearch&&(1===e.length||n.autoSelectFirst)&&(n.$refs.menu.getTiles(),n.autoSelectFirst&&e.length&&(n.setMenuIndex(0),n.$emit("update:list-index",n.$refs.menu.listIndex)))}))}},onInternalSearchChanged:function(){this.updateMenuDimensions()},updateMenuDimensions:function(){this.isMenuActive&&this.$refs.menu&&this.$refs.menu.updateDimensions()},changeSelectedIndex:function(e){this.searchIsDirty||(this.multiple&&e===d.z.left?-1===this.selectedIndex?this.selectedIndex=this.selectedItems.length-1:this.selectedIndex--:this.multiple&&e===d.z.right?this.selectedIndex>=this.selectedItems.length-1?this.selectedIndex=-1:this.selectedIndex++:e!==d.z.backspace&&e!==d.z.delete||this.deleteCurrentItem())},deleteCurrentItem:function(){var e=this.selectedIndex,t=this.selectedItems[e];if(this.isInteractive&&!this.getDisabled(t)){var n=this.selectedItems.length-1;if(-1!==this.selectedIndex||0===n){var r=e!==this.selectedItems.length-1?e:e-1;this.selectedItems[r]?this.selectItem(t):this.setValue(this.multiple?[]:null),this.selectedIndex=r}else this.selectedIndex=n}},clearableCallback:function(){this.internalSearch=null,l.a.options.methods.clearableCallback.call(this)},genInput:function(){var input=o.a.options.methods.genInput.call(this);return input.data=Object(c.a)(input.data,{attrs:{"aria-activedescendant":Object(d.q)(this.$refs.menu,"activeTile.id"),autocomplete:Object(d.q)(input.data,"attrs.autocomplete","off")},domProps:{value:this.internalSearch}}),input},genInputSlot:function(){var slot=l.a.options.methods.genInputSlot.call(this);return slot.data.attrs.role="combobox",slot},genSelections:function(){return this.hasSlot||this.multiple?l.a.options.methods.genSelections.call(this):[]},onClick:function(e){this.isInteractive&&(this.selectedIndex>-1?this.selectedIndex=-1:this.onFocus(),this.isAppendInner(e.target)||this.activateMenu())},onInput:function(e){if(!(this.selectedIndex>-1)&&e.target){var t=e.target,n=t.value;t.value&&this.activateMenu(),this.multiple||""!==n||this.deleteCurrentItem(),this.internalSearch=n,this.badInput=t.validity&&t.validity.badInput}},onKeyDown:function(e){var t=e.keyCode;!e.ctrlKey&&[d.z.home,d.z.end].includes(t)||l.a.options.methods.onKeyDown.call(this,e),this.changeSelectedIndex(t)},onSpaceDown:function(e){},onTabDown:function(e){l.a.options.methods.onTabDown.call(this,e),this.updateSelf()},onUpDown:function(e){e.preventDefault(),this.activateMenu()},selectItem:function(e){l.a.options.methods.selectItem.call(this,e),this.setSearch()},setSelectedItems:function(){l.a.options.methods.setSelectedItems.call(this),this.isFocused||this.setSearch()},setSearch:function(){var e=this;this.$nextTick((function(){e.multiple&&e.internalSearch&&e.isMenuActive||(e.internalSearch=!e.selectedItems.length||e.multiple||e.hasSlot?null:e.getText(e.selectedItem))}))},updateSelf:function(){(this.searchIsDirty||this.internalValue)&&(this.multiple||this.valueComparator(this.internalSearch,this.getValue(this.internalValue))||this.setSearch())},hasItem:function(e){return this.selectedValues.indexOf(this.getValue(e))>-1},onCopy:function(e){var t,n;if(-1!==this.selectedIndex){var r=this.selectedItems[this.selectedIndex],l=this.getText(r);null===(t=e.clipboardData)||void 0===t||t.setData("text/plain",l),null===(n=e.clipboardData)||void 0===n||n.setData("text/vnd.vuetify.autocomplete.item+plain",l),e.preventDefault()}}}})},897:function(e,t,n){"use strict";n.r(t);var r=n(212),l=n(116),component=Object(l.a)({},(function(){var e=this._self._c;return e("div",{staticClass:"text-center",staticStyle:{width:"50px",margin:"25% auto"}},[e(r.a,{attrs:{src:"/preloaders/1.gif"}})],1)}),[],!1,null,null,null);t.default=component.exports}}]);