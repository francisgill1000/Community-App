(window.webpackJsonp=window.webpackJsonp||[]).push([[198,209],{912:function(e,t,n){var content=n(913);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(21).default)("1377ef10",content,!0,{sourceMap:!1})},913:function(e,t,n){var r=n(20)((function(i){return i[1]}));r.push([e.i,".v-autocomplete.v-input>.v-input__control>.v-input__slot{cursor:text}.v-autocomplete input{align-self:center}.v-autocomplete.v-select.v-input--is-focused input{min-width:64px}.v-autocomplete:not(.v-input--is-focused).v-select--chips input{max-height:0;padding:0}.v-autocomplete--is-selecting-index input{opacity:0}.v-autocomplete.v-text-field--enclosed:not(.v-text-field--solo):not(.v-text-field--single-line):not(.v-text-field--outlined) .v-select__slot>input{margin-top:24px}.v-autocomplete.v-text-field--enclosed:not(.v-text-field--solo):not(.v-text-field--single-line):not(.v-text-field--outlined).v-input--dense .v-select__slot>input{margin-top:20px}.v-autocomplete__content.v-menu__content,.v-autocomplete__content.v-menu__content .v-card{border-radius:0}",""]),r.locals={},e.exports=r},921:function(e,t,n){"use strict";n(12),n(14),n(18),n(9),n(19);var r=n(2),l=(n(70),n(6),n(11),n(92),n(103),n(223),n(41),n(61),n(912),n(920)),o=n(221),c=n(71),d=n(1);function h(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function f(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var m=f(f({},l.b),{},{offsetY:!0,offsetOverflow:!0,transition:!1});t.a=l.a.extend({name:"v-autocomplete",props:{autoSelectFirst:{type:Boolean,default:!1},filter:{type:Function,default:function(e,t,n){return n.toLocaleLowerCase().indexOf(t.toLocaleLowerCase())>-1}},hideNoData:Boolean,menuProps:{type:l.a.options.props.menuProps.type,default:function(){return m}},noFilter:Boolean,searchInput:{type:String}},data:function(){return{lazySearch:this.searchInput}},computed:{classes:function(){return f(f({},l.a.options.computed.classes.call(this)),{},{"v-autocomplete":!0,"v-autocomplete--is-selecting-index":this.selectedIndex>-1})},computedItems:function(){return this.filteredItems},selectedValues:function(){var e=this;return this.selectedItems.map((function(t){return e.getValue(t)}))},hasDisplayedItems:function(){var e=this;return this.hideSelected?this.filteredItems.some((function(t){return!e.hasItem(t)})):this.filteredItems.length>0},currentRange:function(){return null==this.selectedItem?0:String(this.getText(this.selectedItem)).length},filteredItems:function(){var e=this;return!this.isSearching||this.noFilter||null==this.internalSearch?this.allItems:this.allItems.filter((function(t){var n=Object(d.s)(t,e.itemText),text=null!=n?String(n):"";return e.filter(t,String(e.internalSearch),text)}))},internalSearch:{get:function(){return this.lazySearch},set:function(e){this.lazySearch!==e&&(this.lazySearch=e,this.$emit("update:search-input",e))}},isAnyValueAllowed:function(){return!1},isDirty:function(){return this.searchIsDirty||this.selectedItems.length>0},isSearching:function(){return this.multiple&&this.searchIsDirty||this.searchIsDirty&&this.internalSearch!==this.getText(this.selectedItem)},menuCanShow:function(){return!!this.isFocused&&(this.hasDisplayedItems||!this.hideNoData)},$_menuProps:function(){var e=l.a.options.computed.$_menuProps.call(this);return e.contentClass="v-autocomplete__content ".concat(e.contentClass||"").trim(),f(f({},m),e)},searchIsDirty:function(){return null!=this.internalSearch&&""!==this.internalSearch},selectedItem:function(){var e=this;return this.multiple?null:this.selectedItems.find((function(i){return e.valueComparator(e.getValue(i),e.getValue(e.internalValue))}))},listData:function(){var data=l.a.options.computed.listData.call(this);return data.props=f(f({},data.props),{},{items:this.virtualizedItems,noFilter:this.noFilter||!this.isSearching||!this.filteredItems.length,searchInput:this.internalSearch}),data}},watch:{filteredItems:"onFilteredItemsChanged",internalValue:"setSearch",isFocused:function(e){e?(document.addEventListener("copy",this.onCopy),this.$refs.input&&this.$refs.input.select()):(document.removeEventListener("copy",this.onCopy),this.blur(),this.updateSelf())},isMenuActive:function(e){!e&&this.hasSlot&&(this.lazySearch=null)},items:function(e,t){t&&t.length||!this.hideNoData||!this.isFocused||this.isMenuActive||!e.length||this.activateMenu()},searchInput:function(e){this.lazySearch=e},internalSearch:"onInternalSearchChanged",itemText:"updateSelf"},created:function(){this.setSearch()},destroyed:function(){document.removeEventListener("copy",this.onCopy)},methods:{onFilteredItemsChanged:function(e,t){var n=this;if(e!==t){if(!this.autoSelectFirst){var r=t[this.$refs.menu.listIndex];r?this.setMenuIndex(e.findIndex((function(i){return i===r}))):this.setMenuIndex(-1),this.$emit("update:list-index",this.$refs.menu.listIndex)}this.$nextTick((function(){n.internalSearch&&(1===e.length||n.autoSelectFirst)&&(n.$refs.menu.getTiles(),n.autoSelectFirst&&e.length&&(n.setMenuIndex(0),n.$emit("update:list-index",n.$refs.menu.listIndex)))}))}},onInternalSearchChanged:function(){this.updateMenuDimensions()},updateMenuDimensions:function(){this.isMenuActive&&this.$refs.menu&&this.$refs.menu.updateDimensions()},changeSelectedIndex:function(e){this.searchIsDirty||(this.multiple&&e===d.z.left?-1===this.selectedIndex?this.selectedIndex=this.selectedItems.length-1:this.selectedIndex--:this.multiple&&e===d.z.right?this.selectedIndex>=this.selectedItems.length-1?this.selectedIndex=-1:this.selectedIndex++:e!==d.z.backspace&&e!==d.z.delete||this.deleteCurrentItem())},deleteCurrentItem:function(){var e=this.selectedIndex,t=this.selectedItems[e];if(this.isInteractive&&!this.getDisabled(t)){var n=this.selectedItems.length-1;if(-1!==this.selectedIndex||0===n){var r=e!==this.selectedItems.length-1?e:e-1;this.selectedItems[r]?this.selectItem(t):this.setValue(this.multiple?[]:null),this.selectedIndex=r}else this.selectedIndex=n}},clearableCallback:function(){this.internalSearch=null,l.a.options.methods.clearableCallback.call(this)},genInput:function(){var input=o.a.options.methods.genInput.call(this);return input.data=Object(c.a)(input.data,{attrs:{"aria-activedescendant":Object(d.q)(this.$refs.menu,"activeTile.id"),autocomplete:Object(d.q)(input.data,"attrs.autocomplete","off")},domProps:{value:this.internalSearch}}),input},genInputSlot:function(){var slot=l.a.options.methods.genInputSlot.call(this);return slot.data.attrs.role="combobox",slot},genSelections:function(){return this.hasSlot||this.multiple?l.a.options.methods.genSelections.call(this):[]},onClick:function(e){this.isInteractive&&(this.selectedIndex>-1?this.selectedIndex=-1:this.onFocus(),this.isAppendInner(e.target)||this.activateMenu())},onInput:function(e){if(!(this.selectedIndex>-1)&&e.target){var t=e.target,n=t.value;t.value&&this.activateMenu(),this.multiple||""!==n||this.deleteCurrentItem(),this.internalSearch=n,this.badInput=t.validity&&t.validity.badInput}},onKeyDown:function(e){var t=e.keyCode;!e.ctrlKey&&[d.z.home,d.z.end].includes(t)||l.a.options.methods.onKeyDown.call(this,e),this.changeSelectedIndex(t)},onSpaceDown:function(e){},onTabDown:function(e){l.a.options.methods.onTabDown.call(this,e),this.updateSelf()},onUpDown:function(e){e.preventDefault(),this.activateMenu()},selectItem:function(e){l.a.options.methods.selectItem.call(this,e),this.setSearch()},setSelectedItems:function(){l.a.options.methods.setSelectedItems.call(this),this.isFocused||this.setSearch()},setSearch:function(){var e=this;this.$nextTick((function(){e.multiple&&e.internalSearch&&e.isMenuActive||(e.internalSearch=!e.selectedItems.length||e.multiple||e.hasSlot?null:e.getText(e.selectedItem))}))},updateSelf:function(){(this.searchIsDirty||this.internalValue)&&(this.multiple||this.valueComparator(this.internalSearch,this.getValue(this.internalValue))||this.setSearch())},hasItem:function(e){return this.selectedValues.indexOf(this.getValue(e))>-1},onCopy:function(e){var t,n;if(-1!==this.selectedIndex){var r=this.selectedItems[this.selectedIndex],l=this.getText(r);null===(t=e.clipboardData)||void 0===t||t.setData("text/plain",l),null===(n=e.clipboardData)||void 0===n||n.setData("text/vnd.vuetify.autocomplete.item+plain",l),e.preventDefault()}}}})},964:function(e,t,n){"use strict";var r=n(2),l=(n(41),n(61),n(363),n(11),n(6),n(9),n(57),n(103),n(12),n(14),n(18),n(19),n(8)),o=n(121),c=n(155);function d(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function h(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}t.a=Object(l.a)(o.a,Object(c.b)("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(e){var t=Object.values(e).includes(!0);this.$emit("input",!t)},deep:!0,immediate:!0}},methods:{watchInput:function(input){var e=this,t=function(input){return input.$watch("hasError",(function(t){e.$set(e.errorBag,input._uid,t)}),{immediate:!0})},n={_uid:input._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?n.shouldValidate=input.$watch("shouldValidate",(function(r){r&&(e.errorBag.hasOwnProperty(input._uid)||(n.valid=t(input)))})):n.valid=t(input),n},validate:function(){return 0===this.inputs.filter((function(input){return!input.validate(!0)})).length},reset:function(){this.inputs.forEach((function(input){return input.reset()})),this.resetErrorBag()},resetErrorBag:function(){var e=this;this.lazyValidation&&setTimeout((function(){e.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(input){return input.resetValidation()})),this.resetErrorBag()},register:function(input){this.inputs.push(input),this.watchers.push(this.watchInput(input))},unregister:function(input){var e=this.inputs.find((function(i){return i._uid===input._uid}));if(e){var t=this.watchers.find((function(i){return i._uid===e._uid}));t&&(t.valid(),t.shouldValidate()),this.watchers=this.watchers.filter((function(i){return i._uid!==e._uid})),this.inputs=this.inputs.filter((function(i){return i._uid!==e._uid})),this.$delete(this.errorBag,e._uid)}}},render:function(e){var t=this;return e("form",{staticClass:"v-form",attrs:h({novalidate:!0},this.attrs$),on:{submit:function(e){return t.$emit("submit",e)}}},this.$slots.default)}})},980:function(e,t,n){"use strict";n.r(t);var r=n(921),l=n(117),o=n(138),c=n(79),d=n(541),h=n(539),f=n(903),m=n(964),v=n(211),y=n(338),I=n(10),_=n(538),D=n(900),x=n(360),S=(n(33),n(17)),w=(n(69),n(70),n(11),n(6),{props:["endpoint","shift_type_id","system_user_id"],data:function(){return{valid:!1,snackbar:!1,loading:!1,response:null,selectAllEmployee:!1,result:[],editItems:{attendance_logs_id:"",UserID:"",device_id:"",user_id:"",reason:"",date:"",UserIDs:[],dates:[],time:null},employees:[]}},computed:{isIndeterminateEmployee:function(){return this.editItems.UserIDs.length>0&&this.editItems.UserIDs.length<this.employees.length}},watch:{selectAllEmployee:function(e){this.editItems.UserIDs=e?this.employees.map((function(e){return e.system_user_id})):[]}},created:function(){var e=this;return Object(S.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$store.dispatch("fetchDropDowns",{key:"employeeList",endpoint:"employee-list",refresh:!0});case 3:e.employees=t.sent,e.system_user_id&&(n=e.employees.filter((function(t){return t.system_user_id==e.system_user_id})),e.employees=n),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.error("Error fetching data:",t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))()},methods:{toggleEmployeeSelection:function(){this.selectAllEmployee=!this.selectAllEmployee},handleDatesFilter:function(e){this.editItems.dates=e},renderByType:function(e){var t=this,n=this.editItems,r=n.UserID,l=n.date,o=n.reason,c=n.UserIDs,d=n.dates;if(c.length&&d.length){this.result=["Processing..."],this.loading=!0;var h={params:{date:l,UserID:r,updated_by:this.$auth.user.id,company_ids:[this.$auth.user.company_id],manual_entry:!0,reason:o,employee_ids:c,dates:d,shift_type_id:this.shift_type_id}},f="/"+e;"render_off"!=e&&"render_absent"!=e&&(f="render_logs"),this.$axios.get(f,h).then((function(e){var data=e.data;t.loading=!1,"render_logs"===f?(t.result=data,t.$emit("update-data-table")):t.result=[h]})).catch((function(e){return console.log(e)}))}else alert("System User Id and Date field is required")}},components:{DateRangePickerCommon:n(986).default}}),O=n(60),component=Object(O.a)(w,(function(){var e=this,t=e._self._c;return t("div",[t(D.a,{attrs:{top:"top",color:"secondary",elevation:"24"},model:{value:e.snackbar,callback:function(t){e.snackbar=t},expression:"snackbar"}},[e._v("\n    "+e._s(e.response)+"\n  ")]),e._v(" "),t(c.c,[t(f.a,[t(_.a,[t(m.a,{ref:"form",staticStyle:{width:"100%"},attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[t(_.a,[t(h.a,{attrs:{md:"6"}},[t(r.a,{staticClass:"mt-5",attrs:{placeholder:"Employee Device Id",items:e.employees,"item-text":"name_with_user_id","item-value":"system_user_id",dense:"",outlined:"",multiple:""},scopedSlots:e._u([e.employees.length&&!e.system_user_id?{key:"prepend-item",fn:function(){return[t(v.a,{on:{click:e.toggleEmployeeSelection}},[t(y.a,[t(d.a,{attrs:{indeterminate:e.isIndeterminateEmployee,"true-value":!0,"false-value":!1},on:{click:e.toggleEmployeeSelection},model:{value:e.selectAllEmployee,callback:function(t){e.selectAllEmployee=t},expression:"selectAllEmployee"}})],1),e._v(" "),t(I.a,[t(I.c,[e._v("\n                        "+e._s(e.selectAllEmployee?"Unselect All":"Select All")+"\n                      ")])],1)],1)]},proxy:!0}:null,{key:"selection",fn:function(n){var r=n.item,l=n.index;return[0===l&&1==e.editItems.UserIDs.length?t("span",[e._v(e._s(r.name))]):1===l&&e.editItems.UserIDs.length==e.employees.length?t("span",{staticClass:""},[e._v("\n                    All Selected\n                  ")]):1===l?t("span",{staticClass:""},[e._v("\n                    Selected "+e._s(e.editItems.UserIDs.length)+" Employee(s)\n                  ")]):e._e()]}}],null,!0),model:{value:e.editItems.UserIDs,callback:function(t){e.$set(e.editItems,"UserIDs",t)},expression:"editItems.UserIDs"}})],1),e._v(" "),t(h.a,{staticClass:"pt-8",attrs:{md:"6"}},[t("DateRangePickerCommon",{on:{"selected-dates":e.handleDatesFilter}})],1),e._v(" "),t(h.a,{attrs:{cols:"12"}},[t(o.a,{attrs:{outlined:""}},[t("ul",{staticStyle:{height:"150px","overflow-y":"scroll"}},e._l(e.result,(function(n,r){return t("li",{key:r},[t("div",[e._v(e._s(n))])])})),0)])],1)],1)],1)],1)],1)],1),e._v(" "),t(c.a,[t(x.a),e._v(" "),t("span",{staticClass:"mx-2"},[e._v("Render As: ")]),e._v(" "),t(l.a,{staticClass:"primary",attrs:{loading:e.loading,small:""},on:{click:function(t){return e.renderByType(e.endpoint)}}},[e._v("Log")])],1)],1)}),[],!1,null,null,null);t.default=component.exports},986:function(e,t,n){"use strict";n.r(t);var r=n(117),l=n(138),o=n(1584),c=n(888),d=n(221),h=(n(59),n(120),n(366),new Date(Date.now()-6e4*(new Date).getTimezoneOffset())),f=new Date(h);f.setMonth(f.getMonth()+1);var m=h.toISOString().slice(0,10),v=f.toISOString().slice(0,10),y={props:["column","disabled"],data:function(){return{menu:!1,menu2:!1,showPicker:!0,startDates:[m],endDates:[v],finalDates:[],min:v}},computed:{datesLabel:function(){return this.finalDates.join(" ~ ")}},methods:{firstPicker:function(){this.startDates.sort((function(a,b){return a.localeCompare(b)})),this.endDates=[],this.finalDates=this.startDates,this.$emit("selected-dates",this.finalDates)},secondPicker:function(){this.endDates.sort((function(a,b){return a.localeCompare(b)}));var e=this.endDates.length?this.endDates[this.endDates.length-1]:this.startDates[this.startDates.length-1];this.finalDates=[this.startDates[0],e],this.startDates=this.finalDates,this.endDates=this.finalDates,this.$emit("selected-dates",this.finalDates),this.min=this.startDates[0]},clearDates:function(){this.clearStartDates(),this.clearEndDates()},clearStartDates:function(){this.finalDates=[],this.startDates=[]},clearEndDates:function(){this.finalDates=[],this.endDates=[]}}},I=n(60),component=Object(I.a)(y,(function(){var e=this,t=e._self._c;return t(c.a,{ref:"menu",attrs:{"close-on-content-click":!1,transition:"scale-transition","offset-y":"","min-width":"auto"},scopedSlots:e._u([{key:"activator",fn:function(n){var r=n.on;return[t(d.a,e._g({attrs:{"hide-details":!0,outlined:"",dense:"",readonly:"",placeholder:"Select Date Range"},model:{value:e.datesLabel,callback:function(t){e.datesLabel=t},expression:"datesLabel"}},r))]}}]),model:{value:e.menu,callback:function(t){e.menu=t},expression:"menu"}},[e._v(" "),t("div",{staticClass:"text-center",staticStyle:{padding:"0"}},[t(o.a,{attrs:{persistant:"","no-title":"",color:"primary",range:"",scrollable:""},on:{input:e.firstPicker},model:{value:e.startDates,callback:function(t){e.startDates=t},expression:"startDates"}}),e._v(" "),t(o.a,{attrs:{"no-title":"",color:"primary",range:"",min:e.min},on:{input:e.secondPicker},model:{value:e.endDates,callback:function(t){e.endDates=t},expression:"endDates"}}),e._v(" "),t(l.a,{staticClass:"text-right pa-2"},[t(r.a,{attrs:{dark:"",color:"background","x-small":""},on:{click:e.clearDates}},[e._v("\n        clear\n      ")]),e._v(" "),t(r.a,{attrs:{dark:"",color:"background","x-small":""},on:{click:function(t){e.menu=!1}}},[e._v("\n        close\n      ")]),e._v(" "),t(r.a,{attrs:{dark:"",color:"background","x-small":""},on:{click:function(t){return e.$refs.menu.save(e.secondPicker)}}},[e._v("\n        OK\n      ")])],1)],1)])}),[],!1,null,null,null);t.default=component.exports}}]);