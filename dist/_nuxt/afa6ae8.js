(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{1201:function(e,t,n){"use strict";n.r(t);var r=n(893),o=n(114),l=n(133),c=n(87),d=n(518),h=n(875),m=n(350),f=n(1019),v=n(147),I=n(517),x=n(349),y=n(214),S=n(96),_=(n(37),n(23)),D=(n(88),{props:["item"],data:function(){return{payload:{},endpoint:"community-admin",DialogBox:!1,loading:!1,errors:[],roles:[]}},created:function(){var e=this;return Object(_.a)(regeneratorRuntime.mark((function t(){var n,data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.payload=e.item,t.prev=1,t.next=4,e.$axios.get("role-list",{params:{company_id:e.$auth.user.company_id}});case 4:n=t.sent,data=n.data,e.roles=data,t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),console.log(t.t0);case 12:case"end":return t.stop()}}),t,null,[[1,9]])})))()},methods:{submit:function(){var e=this;this.payload.company_id=this.$auth.user.company_id,this.$axios.put(this.endpoint+"/"+this.payload.id,this.payload).then((function(t){t.data;e.errors=[],e.$emit("success","User updated successfully"),e.DialogBox=!1})).catch((function(t){var n=t.response;if(!n)return!1;var r=n.status,data=n.data,o=n.statusText;r&&422==r?e.errors=data.errors:e.response=o}))}}}),w=n(116),component=Object(w.a)(D,(function(){var e=this,t=e._self._c;return t(m.a,{attrs:{persistent:"",width:"500"},scopedSlots:e._u([{key:"activator",fn:function(n){var r=n.on,o=n.attrs;return[t("span",e._g(e._b({staticStyle:{cursor:"pointer"}},"span",o,!1),r),[t(v.a,{attrs:{color:"black",small:""}},[e._v("mdi-pencil")]),e._v("\n      Edit\n    ")],1)]}}]),model:{value:e.DialogBox,callback:function(t){e.DialogBox=t},expression:"DialogBox"}},[e._v(" "),t(l.a,[t(S.a,{staticClass:"popup_background",attrs:{flat:"",dense:""}},[e._v("\n      Edit User\n\n      "),t(x.a),e._v(" "),t("span",[t(v.a,{staticClass:"ml-2",attrs:{dark:""},on:{click:function(t){e.DialogBox=!1}}},[e._v("\n          mdi mdi-close-circle-outline")])],1)],1),e._v(" "),t(h.a,[t(I.a,[t(d.a,{attrs:{cols:"12"}},[t(y.a,{staticClass:"text-center",attrs:{label:"User",dense:"",outlined:"","hide-details":!e.errors.name,error:e.errors.name,"error-messages":e.errors&&e.errors.name?e.errors.name[0]:""},model:{value:e.payload.name,callback:function(t){e.$set(e.payload,"name",t)},expression:"payload.name"}})],1),e._v(" "),t(d.a,{attrs:{cols:"12"}},[t(y.a,{staticClass:"text-center",attrs:{label:"Email",dense:"",outlined:"","hide-details":!e.errors.email,error:e.errors.email,"error-messages":e.errors&&e.errors.email?e.errors.email[0]:""},model:{value:e.payload.email,callback:function(t){e.$set(e.payload,"email",t)},expression:"payload.email"}})],1),e._v(" "),t(d.a,{attrs:{cols:"12"}},[t(y.a,{staticClass:"text-center",attrs:{label:"Password",dense:"",outlined:"","hide-details":!e.errors.password,error:e.errors.password,"error-messages":e.errors&&e.errors.password?e.errors.password[0]:""},model:{value:e.payload.password,callback:function(t){e.$set(e.payload,"password",t)},expression:"payload.password"}})],1),e._v(" "),t(d.a,{attrs:{cols:"12"}},[t(r.a,{attrs:{label:"Roles",outlined:"",items:e.roles,"item-value":"id","item-text":"name",dense:"","hide-details":!e.errors.role_id,"error-messages":e.errors&&e.errors.role_id?e.errors.role_id[0]:""},model:{value:e.payload.role_id,callback:function(t){e.$set(e.payload,"role_id",t)},expression:"payload.role_id"}})],1)],1)],1),e._v(" "),t(f.a),e._v(" "),t(c.a,[t(x.a),e._v(" "),t("div",{staticClass:"text-right"},[t(o.a,{attrs:{small:"",color:"grey white--text"},on:{click:function(t){e.DialogBox=!1}}},[e._v("\n          Close\n        ")]),e._v(" "),t(o.a,{attrs:{small:"",loading:e.loading,color:"primary"},on:{click:e.submit}},[e._v("\n          Submit\n        ")])],1)],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports},883:function(e,t,n){var content=n(884);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(22).default)("1377ef10",content,!0,{sourceMap:!1})},884:function(e,t,n){var r=n(21)((function(i){return i[1]}));r.push([e.i,".v-autocomplete.v-input>.v-input__control>.v-input__slot{cursor:text}.v-autocomplete input{align-self:center}.v-autocomplete.v-select.v-input--is-focused input{min-width:64px}.v-autocomplete:not(.v-input--is-focused).v-select--chips input{max-height:0;padding:0}.v-autocomplete--is-selecting-index input{opacity:0}.v-autocomplete.v-text-field--enclosed:not(.v-text-field--solo):not(.v-text-field--single-line):not(.v-text-field--outlined) .v-select__slot>input{margin-top:24px}.v-autocomplete.v-text-field--enclosed:not(.v-text-field--solo):not(.v-text-field--single-line):not(.v-text-field--outlined).v-input--dense .v-select__slot>input{margin-top:20px}.v-autocomplete__content.v-menu__content,.v-autocomplete__content.v-menu__content .v-card{border-radius:0}",""]),r.locals={},e.exports=r},893:function(e,t,n){"use strict";n(12),n(14),n(17),n(11),n(18);var r=n(3),o=(n(80),n(6),n(13),n(89),n(99),n(216),n(41),n(61),n(883),n(892)),l=n(214),c=n(65),d=n(1);function h(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function m(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var f=m(m({},o.b),{},{offsetY:!0,offsetOverflow:!0,transition:!1});t.a=o.a.extend({name:"v-autocomplete",props:{autoSelectFirst:{type:Boolean,default:!1},filter:{type:Function,default:function(e,t,n){return n.toLocaleLowerCase().indexOf(t.toLocaleLowerCase())>-1}},hideNoData:Boolean,menuProps:{type:o.a.options.props.menuProps.type,default:function(){return f}},noFilter:Boolean,searchInput:{type:String}},data:function(){return{lazySearch:this.searchInput}},computed:{classes:function(){return m(m({},o.a.options.computed.classes.call(this)),{},{"v-autocomplete":!0,"v-autocomplete--is-selecting-index":this.selectedIndex>-1})},computedItems:function(){return this.filteredItems},selectedValues:function(){var e=this;return this.selectedItems.map((function(t){return e.getValue(t)}))},hasDisplayedItems:function(){var e=this;return this.hideSelected?this.filteredItems.some((function(t){return!e.hasItem(t)})):this.filteredItems.length>0},currentRange:function(){return null==this.selectedItem?0:String(this.getText(this.selectedItem)).length},filteredItems:function(){var e=this;return!this.isSearching||this.noFilter||null==this.internalSearch?this.allItems:this.allItems.filter((function(t){var n=Object(d.s)(t,e.itemText),text=null!=n?String(n):"";return e.filter(t,String(e.internalSearch),text)}))},internalSearch:{get:function(){return this.lazySearch},set:function(e){this.lazySearch!==e&&(this.lazySearch=e,this.$emit("update:search-input",e))}},isAnyValueAllowed:function(){return!1},isDirty:function(){return this.searchIsDirty||this.selectedItems.length>0},isSearching:function(){return this.multiple&&this.searchIsDirty||this.searchIsDirty&&this.internalSearch!==this.getText(this.selectedItem)},menuCanShow:function(){return!!this.isFocused&&(this.hasDisplayedItems||!this.hideNoData)},$_menuProps:function(){var e=o.a.options.computed.$_menuProps.call(this);return e.contentClass="v-autocomplete__content ".concat(e.contentClass||"").trim(),m(m({},f),e)},searchIsDirty:function(){return null!=this.internalSearch&&""!==this.internalSearch},selectedItem:function(){var e=this;return this.multiple?null:this.selectedItems.find((function(i){return e.valueComparator(e.getValue(i),e.getValue(e.internalValue))}))},listData:function(){var data=o.a.options.computed.listData.call(this);return data.props=m(m({},data.props),{},{items:this.virtualizedItems,noFilter:this.noFilter||!this.isSearching||!this.filteredItems.length,searchInput:this.internalSearch}),data}},watch:{filteredItems:"onFilteredItemsChanged",internalValue:"setSearch",isFocused:function(e){e?(document.addEventListener("copy",this.onCopy),this.$refs.input&&this.$refs.input.select()):(document.removeEventListener("copy",this.onCopy),this.blur(),this.updateSelf())},isMenuActive:function(e){!e&&this.hasSlot&&(this.lazySearch=null)},items:function(e,t){t&&t.length||!this.hideNoData||!this.isFocused||this.isMenuActive||!e.length||this.activateMenu()},searchInput:function(e){this.lazySearch=e},internalSearch:"onInternalSearchChanged",itemText:"updateSelf"},created:function(){this.setSearch()},destroyed:function(){document.removeEventListener("copy",this.onCopy)},methods:{onFilteredItemsChanged:function(e,t){var n=this;if(e!==t){if(!this.autoSelectFirst){var r=t[this.$refs.menu.listIndex];r?this.setMenuIndex(e.findIndex((function(i){return i===r}))):this.setMenuIndex(-1),this.$emit("update:list-index",this.$refs.menu.listIndex)}this.$nextTick((function(){n.internalSearch&&(1===e.length||n.autoSelectFirst)&&(n.$refs.menu.getTiles(),n.autoSelectFirst&&e.length&&(n.setMenuIndex(0),n.$emit("update:list-index",n.$refs.menu.listIndex)))}))}},onInternalSearchChanged:function(){this.updateMenuDimensions()},updateMenuDimensions:function(){this.isMenuActive&&this.$refs.menu&&this.$refs.menu.updateDimensions()},changeSelectedIndex:function(e){this.searchIsDirty||(this.multiple&&e===d.z.left?-1===this.selectedIndex?this.selectedIndex=this.selectedItems.length-1:this.selectedIndex--:this.multiple&&e===d.z.right?this.selectedIndex>=this.selectedItems.length-1?this.selectedIndex=-1:this.selectedIndex++:e!==d.z.backspace&&e!==d.z.delete||this.deleteCurrentItem())},deleteCurrentItem:function(){var e=this.selectedIndex,t=this.selectedItems[e];if(this.isInteractive&&!this.getDisabled(t)){var n=this.selectedItems.length-1;if(-1!==this.selectedIndex||0===n){var r=e!==this.selectedItems.length-1?e:e-1;this.selectedItems[r]?this.selectItem(t):this.setValue(this.multiple?[]:null),this.selectedIndex=r}else this.selectedIndex=n}},clearableCallback:function(){this.internalSearch=null,o.a.options.methods.clearableCallback.call(this)},genInput:function(){var input=l.a.options.methods.genInput.call(this);return input.data=Object(c.a)(input.data,{attrs:{"aria-activedescendant":Object(d.q)(this.$refs.menu,"activeTile.id"),autocomplete:Object(d.q)(input.data,"attrs.autocomplete","off")},domProps:{value:this.internalSearch}}),input},genInputSlot:function(){var slot=o.a.options.methods.genInputSlot.call(this);return slot.data.attrs.role="combobox",slot},genSelections:function(){return this.hasSlot||this.multiple?o.a.options.methods.genSelections.call(this):[]},onClick:function(e){this.isInteractive&&(this.selectedIndex>-1?this.selectedIndex=-1:this.onFocus(),this.isAppendInner(e.target)||this.activateMenu())},onInput:function(e){if(!(this.selectedIndex>-1)&&e.target){var t=e.target,n=t.value;t.value&&this.activateMenu(),this.multiple||""!==n||this.deleteCurrentItem(),this.internalSearch=n,this.badInput=t.validity&&t.validity.badInput}},onKeyDown:function(e){var t=e.keyCode;!e.ctrlKey&&[d.z.home,d.z.end].includes(t)||o.a.options.methods.onKeyDown.call(this,e),this.changeSelectedIndex(t)},onSpaceDown:function(e){},onTabDown:function(e){o.a.options.methods.onTabDown.call(this,e),this.updateSelf()},onUpDown:function(e){e.preventDefault(),this.activateMenu()},selectItem:function(e){o.a.options.methods.selectItem.call(this,e),this.setSearch()},setSelectedItems:function(){o.a.options.methods.setSelectedItems.call(this),this.isFocused||this.setSearch()},setSearch:function(){var e=this;this.$nextTick((function(){e.multiple&&e.internalSearch&&e.isMenuActive||(e.internalSearch=!e.selectedItems.length||e.multiple||e.hasSlot?null:e.getText(e.selectedItem))}))},updateSelf:function(){(this.searchIsDirty||this.internalValue)&&(this.multiple||this.valueComparator(this.internalSearch,this.getValue(this.internalValue))||this.setSearch())},hasItem:function(e){return this.selectedValues.indexOf(this.getValue(e))>-1},onCopy:function(e){var t,n;if(-1!==this.selectedIndex){var r=this.selectedItems[this.selectedIndex],o=this.getText(r);null===(t=e.clipboardData)||void 0===t||t.setData("text/plain",o),null===(n=e.clipboardData)||void 0===n||n.setData("text/vnd.vuetify.autocomplete.item+plain",o),e.preventDefault()}}}})}}]);