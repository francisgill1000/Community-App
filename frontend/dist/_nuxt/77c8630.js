(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{1354:function(e,t,n){"use strict";n.r(t);var r=n(894),o=n(114),l=n(133),c=n(87),h=n(516),d=n(876),m=n(350),f=n(147),v=n(515),I=n(23),x=n(3),S=(n(88),n(80),{props:["id"],data:function(){var e;return e={parent_ids:[],snack:!1,snackColor:"",snackText:"",dialog:!1,current_page:1,color:"background",response:"",snackbar:!1,btnLoader:!1,max_employee:0,upload:{name:""}},Object(x.a)(e,"snackbar",!1),Object(x.a)(e,"ids",[]),Object(x.a)(e,"loading",!1),Object(x.a)(e,"response",""),Object(x.a)(e,"errors",[]),Object(x.a)(e,"formAction","Create"),Object(x.a)(e,"tanents",[]),e},created:function(){var e=this;return Object(I.a)(regeneratorRuntime.mark((function t(){var n,r,o,l;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.loading=!1,t.next=3,e.$axios.get("tanent-list",{params:{company_id:e.$auth.user.company_id}});case 3:return n=t.sent,r=n.data,e.tanents=r.map((function(e){var t;return{id:e.id,full_name_with_room:e.full_name+" (".concat(null==e||null===(t=e.room)||void 0===t?void 0:t.room_number,")")}})),t.next=8,e.$axios.get("get-associated-tanent-ids/".concat(e.id));case 8:o=t.sent,l=o.data,e.parent_ids=l;case 11:case"end":return t.stop()}}),t)})))()},methods:{submit:function(){var e=this;this.$axios.post("/assign-tanents/"+this.id,{parent_ids:this.parent_ids}).then((function(t){t.data;e.handleSuccessResponse("Maid has been assigned")})).catch((function(t){var n=t.response;e.handleErrorResponse(n)}))},handleSuccessResponse:function(e){this.errors=[],this.dialog=!1,this.$emit("response",e)},handleErrorResponse:function(e){if(!e)return this.snackbar=!0,void(this.response="An unexpected error occurred.");var t=e.status,data=e.data,n=e.statusText;t&&422==t?this.errors=data.errors:(this.snackbar=!0,this.response=n)}}}),_=n(116),component=Object(_.a)(S,(function(){var e=this,t=e._self._c;return t(m.a,{attrs:{persistent:"",width:"700"},scopedSlots:e._u([{key:"activator",fn:function(n){var r=n.on,o=n.attrs;return[t("span",e._g(e._b({staticStyle:{cursor:"pointer"}},"span",o,!1),r),[t(f.a,{attrs:{color:"black",small:""}},[e._v("mdi-account")]),e._v("\n      Assign Tanent(s)\n    ")],1)]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[e._v(" "),t(l.a,[t(c.c,[e._v("Assign Tanent(s)")]),e._v(" "),t(d.a,[t(v.a,[t(h.a,{attrs:{cols:"12"}},[t(r.a,{attrs:{label:"Tanent",multiple:"",outlined:"",items:e.tanents,"item-value":"id","item-text":"full_name_with_room",dense:"","hide-details":!e.errors.parent_ids,"error-messages":e.errors&&e.errors.parent_ids?e.errors.parent_ids[0]:""},model:{value:e.parent_ids,callback:function(t){e.parent_ids=t},expression:"parent_ids"}})],1)],1),e._v(" "),t(v.a,[t(h.a,{staticClass:"text-right my-1",attrs:{cols:"12"}},[t(o.a,{on:{click:function(t){e.dialog=!1}}},[e._v("Close")]),e._v(" "),t(o.a,{staticClass:"primary",on:{click:e.submit}},[e._v("Submit")])],1)],1)],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports},884:function(e,t,n){var content=n(885);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(22).default)("1377ef10",content,!0,{sourceMap:!1})},885:function(e,t,n){var r=n(21)((function(i){return i[1]}));r.push([e.i,".v-autocomplete.v-input>.v-input__control>.v-input__slot{cursor:text}.v-autocomplete input{align-self:center}.v-autocomplete.v-select.v-input--is-focused input{min-width:64px}.v-autocomplete:not(.v-input--is-focused).v-select--chips input{max-height:0;padding:0}.v-autocomplete--is-selecting-index input{opacity:0}.v-autocomplete.v-text-field--enclosed:not(.v-text-field--solo):not(.v-text-field--single-line):not(.v-text-field--outlined) .v-select__slot>input{margin-top:24px}.v-autocomplete.v-text-field--enclosed:not(.v-text-field--solo):not(.v-text-field--single-line):not(.v-text-field--outlined).v-input--dense .v-select__slot>input{margin-top:20px}.v-autocomplete__content.v-menu__content,.v-autocomplete__content.v-menu__content .v-card{border-radius:0}",""]),r.locals={},e.exports=r},894:function(e,t,n){"use strict";n(12),n(14),n(17),n(11),n(18);var r=n(3),o=(n(80),n(6),n(13),n(89),n(99),n(215),n(41),n(61),n(884),n(893)),l=n(214),c=n(65),h=n(1);function d(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function m(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var f=m(m({},o.b),{},{offsetY:!0,offsetOverflow:!0,transition:!1});t.a=o.a.extend({name:"v-autocomplete",props:{autoSelectFirst:{type:Boolean,default:!1},filter:{type:Function,default:function(e,t,n){return n.toLocaleLowerCase().indexOf(t.toLocaleLowerCase())>-1}},hideNoData:Boolean,menuProps:{type:o.a.options.props.menuProps.type,default:function(){return f}},noFilter:Boolean,searchInput:{type:String}},data:function(){return{lazySearch:this.searchInput}},computed:{classes:function(){return m(m({},o.a.options.computed.classes.call(this)),{},{"v-autocomplete":!0,"v-autocomplete--is-selecting-index":this.selectedIndex>-1})},computedItems:function(){return this.filteredItems},selectedValues:function(){var e=this;return this.selectedItems.map((function(t){return e.getValue(t)}))},hasDisplayedItems:function(){var e=this;return this.hideSelected?this.filteredItems.some((function(t){return!e.hasItem(t)})):this.filteredItems.length>0},currentRange:function(){return null==this.selectedItem?0:String(this.getText(this.selectedItem)).length},filteredItems:function(){var e=this;return!this.isSearching||this.noFilter||null==this.internalSearch?this.allItems:this.allItems.filter((function(t){var n=Object(h.s)(t,e.itemText),text=null!=n?String(n):"";return e.filter(t,String(e.internalSearch),text)}))},internalSearch:{get:function(){return this.lazySearch},set:function(e){this.lazySearch!==e&&(this.lazySearch=e,this.$emit("update:search-input",e))}},isAnyValueAllowed:function(){return!1},isDirty:function(){return this.searchIsDirty||this.selectedItems.length>0},isSearching:function(){return this.multiple&&this.searchIsDirty||this.searchIsDirty&&this.internalSearch!==this.getText(this.selectedItem)},menuCanShow:function(){return!!this.isFocused&&(this.hasDisplayedItems||!this.hideNoData)},$_menuProps:function(){var e=o.a.options.computed.$_menuProps.call(this);return e.contentClass="v-autocomplete__content ".concat(e.contentClass||"").trim(),m(m({},f),e)},searchIsDirty:function(){return null!=this.internalSearch&&""!==this.internalSearch},selectedItem:function(){var e=this;return this.multiple?null:this.selectedItems.find((function(i){return e.valueComparator(e.getValue(i),e.getValue(e.internalValue))}))},listData:function(){var data=o.a.options.computed.listData.call(this);return data.props=m(m({},data.props),{},{items:this.virtualizedItems,noFilter:this.noFilter||!this.isSearching||!this.filteredItems.length,searchInput:this.internalSearch}),data}},watch:{filteredItems:"onFilteredItemsChanged",internalValue:"setSearch",isFocused:function(e){e?(document.addEventListener("copy",this.onCopy),this.$refs.input&&this.$refs.input.select()):(document.removeEventListener("copy",this.onCopy),this.blur(),this.updateSelf())},isMenuActive:function(e){!e&&this.hasSlot&&(this.lazySearch=null)},items:function(e,t){t&&t.length||!this.hideNoData||!this.isFocused||this.isMenuActive||!e.length||this.activateMenu()},searchInput:function(e){this.lazySearch=e},internalSearch:"onInternalSearchChanged",itemText:"updateSelf"},created:function(){this.setSearch()},destroyed:function(){document.removeEventListener("copy",this.onCopy)},methods:{onFilteredItemsChanged:function(e,t){var n=this;if(e!==t){if(!this.autoSelectFirst){var r=t[this.$refs.menu.listIndex];r?this.setMenuIndex(e.findIndex((function(i){return i===r}))):this.setMenuIndex(-1),this.$emit("update:list-index",this.$refs.menu.listIndex)}this.$nextTick((function(){n.internalSearch&&(1===e.length||n.autoSelectFirst)&&(n.$refs.menu.getTiles(),n.autoSelectFirst&&e.length&&(n.setMenuIndex(0),n.$emit("update:list-index",n.$refs.menu.listIndex)))}))}},onInternalSearchChanged:function(){this.updateMenuDimensions()},updateMenuDimensions:function(){this.isMenuActive&&this.$refs.menu&&this.$refs.menu.updateDimensions()},changeSelectedIndex:function(e){this.searchIsDirty||(this.multiple&&e===h.z.left?-1===this.selectedIndex?this.selectedIndex=this.selectedItems.length-1:this.selectedIndex--:this.multiple&&e===h.z.right?this.selectedIndex>=this.selectedItems.length-1?this.selectedIndex=-1:this.selectedIndex++:e!==h.z.backspace&&e!==h.z.delete||this.deleteCurrentItem())},deleteCurrentItem:function(){var e=this.selectedIndex,t=this.selectedItems[e];if(this.isInteractive&&!this.getDisabled(t)){var n=this.selectedItems.length-1;if(-1!==this.selectedIndex||0===n){var r=e!==this.selectedItems.length-1?e:e-1;this.selectedItems[r]?this.selectItem(t):this.setValue(this.multiple?[]:null),this.selectedIndex=r}else this.selectedIndex=n}},clearableCallback:function(){this.internalSearch=null,o.a.options.methods.clearableCallback.call(this)},genInput:function(){var input=l.a.options.methods.genInput.call(this);return input.data=Object(c.a)(input.data,{attrs:{"aria-activedescendant":Object(h.q)(this.$refs.menu,"activeTile.id"),autocomplete:Object(h.q)(input.data,"attrs.autocomplete","off")},domProps:{value:this.internalSearch}}),input},genInputSlot:function(){var slot=o.a.options.methods.genInputSlot.call(this);return slot.data.attrs.role="combobox",slot},genSelections:function(){return this.hasSlot||this.multiple?o.a.options.methods.genSelections.call(this):[]},onClick:function(e){this.isInteractive&&(this.selectedIndex>-1?this.selectedIndex=-1:this.onFocus(),this.isAppendInner(e.target)||this.activateMenu())},onInput:function(e){if(!(this.selectedIndex>-1)&&e.target){var t=e.target,n=t.value;t.value&&this.activateMenu(),this.multiple||""!==n||this.deleteCurrentItem(),this.internalSearch=n,this.badInput=t.validity&&t.validity.badInput}},onKeyDown:function(e){var t=e.keyCode;!e.ctrlKey&&[h.z.home,h.z.end].includes(t)||o.a.options.methods.onKeyDown.call(this,e),this.changeSelectedIndex(t)},onSpaceDown:function(e){},onTabDown:function(e){o.a.options.methods.onTabDown.call(this,e),this.updateSelf()},onUpDown:function(e){e.preventDefault(),this.activateMenu()},selectItem:function(e){o.a.options.methods.selectItem.call(this,e),this.setSearch()},setSelectedItems:function(){o.a.options.methods.setSelectedItems.call(this),this.isFocused||this.setSearch()},setSearch:function(){var e=this;this.$nextTick((function(){e.multiple&&e.internalSearch&&e.isMenuActive||(e.internalSearch=!e.selectedItems.length||e.multiple||e.hasSlot?null:e.getText(e.selectedItem))}))},updateSelf:function(){(this.searchIsDirty||this.internalValue)&&(this.multiple||this.valueComparator(this.internalSearch,this.getValue(this.internalValue))||this.setSearch())},hasItem:function(e){return this.selectedValues.indexOf(this.getValue(e))>-1},onCopy:function(e){var t,n;if(-1!==this.selectedIndex){var r=this.selectedItems[this.selectedIndex],o=this.getText(r);null===(t=e.clipboardData)||void 0===t||t.setData("text/plain",o),null===(n=e.clipboardData)||void 0===n||n.setData("text/vnd.vuetify.autocomplete.item+plain",o),e.preventDefault()}}}})}}]);