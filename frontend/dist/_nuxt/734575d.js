(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{1e3:function(t,e,n){var o=n(20)((function(i){return i[1]}));o.push([t.i,".theme--light.v-file-input .v-file-input__text{color:rgba(0,0,0,.87)}.theme--light.v-file-input .v-file-input__text--placeholder{color:rgba(0,0,0,.6)}.theme--light.v-file-input.v-input--is-disabled .v-file-input__text,.theme--light.v-file-input.v-input--is-disabled .v-file-input__text .v-file-input__text--placeholder{color:rgba(0,0,0,.38)}.theme--dark.v-file-input .v-file-input__text{color:#fff}.theme--dark.v-file-input .v-file-input__text--placeholder{color:hsla(0,0%,100%,.7)}.theme--dark.v-file-input.v-input--is-disabled .v-file-input__text,.theme--dark.v-file-input.v-input--is-disabled .v-file-input__text .v-file-input__text--placeholder{color:hsla(0,0%,100%,.5)}.v-file-input input[type=file]{left:0;max-width:0;opacity:0;pointer-events:none;position:absolute;width:0}.v-file-input .v-file-input__text{align-items:center;align-self:stretch;display:flex;flex-wrap:wrap;width:100%}.v-file-input .v-file-input__text.v-file-input__text--chips{flex-wrap:wrap}.v-file-input .v-file-input__text .v-chip{margin:4px}.v-file-input .v-text-field__slot{min-height:32px}.v-file-input.v-input--dense .v-text-field__slot{min-height:26px}.v-file-input.v-text-field--filled:not(.v-text-field--single-line) .v-file-input__text{padding-top:22px}.v-file-input.v-text-field--outlined .v-text-field__slot{padding:6px 0}.v-file-input.v-text-field--outlined.v-input--dense .v-text-field__slot{padding:3px 0}",""]),o.locals={},t.exports=o},1033:function(t,e,n){"use strict";n(12),n(14),n(11),n(18),n(19);var o=n(86),l=n(2),r=n(15),c=(n(28),n(41),n(6),n(70),n(33),n(37),n(222),n(9),n(59),n(999),n(905)),h=n(1200),v=n(1),d=n(16),f=n(71);function m(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function x(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(e){Object(l.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=c.a.extend({name:"v-file-input",model:{prop:"value",event:"change"},props:{chips:Boolean,clearable:{type:Boolean,default:!0},counterSizeString:{type:String,default:"$vuetify.fileInput.counterSize"},counterString:{type:String,default:"$vuetify.fileInput.counter"},hideInput:Boolean,multiple:Boolean,placeholder:String,prependIcon:{type:String,default:"$file"},readonly:{type:Boolean,default:!1},showSize:{type:[Boolean,Number],default:!1,validator:function(t){return"boolean"==typeof t||[1e3,1024].includes(t)}},smallChips:Boolean,truncateLength:{type:[Number,String],default:22},type:{type:String,default:"file"},value:{default:void 0,validator:function(t){return Object(v.I)(t).every((function(t){return null!=t&&"object"===Object(r.a)(t)}))}}},computed:{classes:function(){return x(x({},c.a.options.computed.classes.call(this)),{},{"v-file-input":!0})},computedCounterValue:function(){var t=this.multiple&&this.lazyValue?this.lazyValue.length:this.lazyValue instanceof File?1:0;if(!this.showSize)return this.$vuetify.lang.t(this.counterString,t);var e=this.internalArrayValue.reduce((function(t,e){var n=e.size;return t+(void 0===n?0:n)}),0);return this.$vuetify.lang.t(this.counterSizeString,t,Object(v.x)(e,1024===this.base))},internalArrayValue:function(){return Object(v.I)(this.internalValue)},internalValue:{get:function(){return this.lazyValue},set:function(t){this.lazyValue=t,this.$emit("change",this.lazyValue)}},isDirty:function(){return this.internalArrayValue.length>0},isLabelActive:function(){return this.isDirty},text:function(){var t=this;return this.isDirty||!this.persistentPlaceholder&&!this.isFocused&&this.hasLabel?this.internalArrayValue.map((function(e){var n=e.name,o=void 0===n?"":n,l=e.size,r=void 0===l?0:l,c=t.truncateText(o);return t.showSize?"".concat(c," (").concat(Object(v.x)(r,1024===t.base),")"):c})):[this.placeholder]},base:function(){return"boolean"!=typeof this.showSize?this.showSize:void 0},hasChips:function(){return this.chips||this.smallChips}},watch:{readonly:{handler:function(t){!0===t&&Object(d.b)("readonly is not supported on <v-file-input>",this)},immediate:!0},value:function(t){var e=this.multiple?t:t?[t]:[];Object(v.l)(e,this.$refs.input.files)||(this.$refs.input.value="")}},methods:{clearableCallback:function(){this.internalValue=this.multiple?[]:null,this.$refs.input.value=""},genChips:function(){var t=this;return this.isDirty?this.text.map((function(text,e){return t.$createElement(h.a,{props:{small:t.smallChips},on:{"click:close":function(){var n=t.internalValue;n.splice(e,1),t.internalValue=n}}},[text])})):[]},genControl:function(){var t=c.a.options.methods.genControl.call(this);return this.hideInput&&(t.data.style=Object(f.d)(t.data.style,{display:"none"})),t},genInput:function(){var input=c.a.options.methods.genInput.call(this);return input.data.attrs.multiple=this.multiple,delete input.data.domProps.value,delete input.data.on.input,input.data.on.change=this.onInput,[this.genSelections(),input]},genPrependSlot:function(){var t=this;if(!this.prependIcon)return null;var e=this.genIcon("prepend",(function(){t.$refs.input.click()}));return this.genSlot("prepend","outer",[e])},genSelectionText:function(){var t=this.text.length;return t<2?this.text:this.showSize&&!this.counter?[this.computedCounterValue]:[this.$vuetify.lang.t(this.counterString,t)]},genSelections:function(){var t=this,e=[];return this.isDirty&&this.$scopedSlots.selection?this.internalArrayValue.forEach((function(n,o){t.$scopedSlots.selection&&e.push(t.$scopedSlots.selection({text:t.text[o],file:n,index:o}))})):e.push(this.hasChips&&this.isDirty?this.genChips():this.genSelectionText()),this.$createElement("div",{staticClass:"v-file-input__text",class:{"v-file-input__text--placeholder":this.placeholder&&!this.isDirty,"v-file-input__text--chips":this.hasChips&&!this.$scopedSlots.selection}},e)},genTextFieldSlot:function(){var t=this,e=c.a.options.methods.genTextFieldSlot.call(this);return e.data.on=x(x({},e.data.on||{}),{},{click:function(e){e.target&&"LABEL"===e.target.nodeName||t.$refs.input.click()}}),e},onInput:function(t){var e=Object(o.a)(t.target.files||[]);this.internalValue=this.multiple?e:e[0],this.initialValue=this.internalValue},onKeyDown:function(t){this.$emit("keydown",t)},truncateText:function(t){if(t.length<Number(this.truncateLength))return t;var e=Math.floor((Number(this.truncateLength)-1)/2);return"".concat(t.slice(0,e),"…").concat(t.slice(t.length-e))}}})},1148:function(t,e,n){var content=n(1149);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(21).default)("59b49814",content,!0,{sourceMap:!1})},1149:function(t,e,n){var o=n(20)((function(i){return i[1]}));o.push([t.i,'.v-chip:not(.v-chip--outlined).accent,.v-chip:not(.v-chip--outlined).error,.v-chip:not(.v-chip--outlined).info,.v-chip:not(.v-chip--outlined).primary,.v-chip:not(.v-chip--outlined).secondary,.v-chip:not(.v-chip--outlined).success,.v-chip:not(.v-chip--outlined).warning{color:#fff}.theme--light.v-chip{border-color:rgba(0,0,0,.12);color:rgba(0,0,0,.87)}.theme--light.v-chip:not(.v-chip--active){background:#e0e0e0}.theme--light.v-chip:hover:before{opacity:.04}.theme--light.v-chip--active:before,.theme--light.v-chip--active:hover:before,.theme--light.v-chip:focus:before{opacity:.12}.theme--light.v-chip--active:focus:before{opacity:.16}.theme--dark.v-chip{border-color:hsla(0,0%,100%,.12);color:#fff}.theme--dark.v-chip:not(.v-chip--active){background:#555}.theme--dark.v-chip:hover:before{opacity:.08}.theme--dark.v-chip--active:before,.theme--dark.v-chip--active:hover:before,.theme--dark.v-chip:focus:before{opacity:.24}.theme--dark.v-chip--active:focus:before{opacity:.32}.v-chip{align-items:center;cursor:default;display:inline-flex;line-height:20px;max-width:100%;outline:none;overflow:hidden;padding:0 12px;position:relative;-webkit-text-decoration:none;text-decoration:none;transition-duration:.28s;transition-property:box-shadow,opacity;transition-timing-function:cubic-bezier(.4,0,.2,1);vertical-align:middle;white-space:nowrap}.v-chip:before{background-color:currentColor;border-radius:inherit;bottom:0;content:"";left:0;opacity:0;pointer-events:none;position:absolute;right:0;top:0}.v-chip .v-avatar{height:24px!important;min-width:24px!important;width:24px!important}.v-chip .v-icon{font-size:24px}.v-application--is-ltr .v-chip .v-avatar--left,.v-application--is-ltr .v-chip .v-icon--left{margin-left:-6px;margin-right:6px}.v-application--is-ltr .v-chip .v-avatar--right,.v-application--is-ltr .v-chip .v-icon--right,.v-application--is-rtl .v-chip .v-avatar--left,.v-application--is-rtl .v-chip .v-icon--left{margin-left:6px;margin-right:-6px}.v-application--is-rtl .v-chip .v-avatar--right,.v-application--is-rtl .v-chip .v-icon--right{margin-left:-6px;margin-right:6px}.v-chip:not(.v-chip--no-color) .v-icon{color:inherit}.v-chip .v-chip__close.v-icon{font-size:18px;max-height:18px;max-width:18px;-webkit-user-select:none;-moz-user-select:none;user-select:none}.v-application--is-ltr .v-chip .v-chip__close.v-icon.v-icon--right{margin-right:-4px}.v-application--is-rtl .v-chip .v-chip__close.v-icon.v-icon--right{margin-left:-4px}.v-chip .v-chip__close.v-icon:active,.v-chip .v-chip__close.v-icon:focus,.v-chip .v-chip__close.v-icon:hover{opacity:.72}.v-chip .v-chip__content{align-items:center;display:inline-flex;height:100%;max-width:100%}.v-chip--active .v-icon{color:inherit}.v-chip--link:before{transition:opacity .3s cubic-bezier(.25,.8,.5,1)}.v-chip--link:focus:before{opacity:.32}.v-chip--clickable{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;user-select:none}.v-chip--clickable:active{box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-chip--disabled{opacity:.4;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;user-select:none}.v-chip__filter{max-width:24px}.v-chip__filter.v-icon{color:inherit}.v-chip__filter.expand-x-transition-enter,.v-chip__filter.expand-x-transition-leave-active{margin:0}.v-chip--pill .v-chip__filter{margin:0 16px 0 0}.v-chip--pill .v-avatar{height:32px!important;width:32px!important}.v-application--is-ltr .v-chip--pill .v-avatar--left{margin-left:-12px}.v-application--is-ltr .v-chip--pill .v-avatar--right,.v-application--is-rtl .v-chip--pill .v-avatar--left{margin-right:-12px}.v-application--is-rtl .v-chip--pill .v-avatar--right{margin-left:-12px}.v-chip--label{border-radius:4px!important}.v-chip.v-chip--outlined{border-style:solid;border-width:thin}.v-chip.v-chip--outlined.v-chip--active:before{opacity:.08}.v-chip.v-chip--outlined .v-icon{color:inherit}.v-chip.v-chip--outlined.v-chip.v-chip{background-color:transparent!important}.v-chip.v-chip--selected{background:transparent}.v-chip.v-chip--selected:after{opacity:.28}.v-chip.v-size--x-small{border-radius:8px;font-size:10px;height:16px}.v-chip.v-size--small{border-radius:12px;font-size:12px;height:24px}.v-chip.v-size--default{border-radius:16px;font-size:14px;height:32px}.v-chip.v-size--large{border-radius:27px;font-size:16px;height:54px}.v-chip.v-size--x-large{border-radius:33px;font-size:18px;height:66px}',""]),o.locals={},t.exports=o},1200:function(t,e,n){"use strict";n(12),n(14),n(18),n(9),n(19);var o=n(34),l=n(2),r=(n(6),n(11),n(1148),n(8)),c=n(139),h=n(63),v=n(29),d=n(122),f=n(26),m=n(62),x=n(90),_=n(230),y=n(16);function k(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function w(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?k(Object(source),!0).forEach((function(e){Object(l.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):k(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(r.a)(v.a,_.a,x.a,f.a,Object(d.a)("chipGroup"),Object(m.b)("inputValue")).extend({name:"v-chip",props:{active:{type:Boolean,default:!0},activeClass:{type:String,default:function(){return this.chipGroup?this.chipGroup.activeClass:""}},close:Boolean,closeIcon:{type:String,default:"$delete"},closeLabel:{type:String,default:"$vuetify.close"},disabled:Boolean,draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:Boolean,outlined:Boolean,pill:Boolean,tag:{type:String,default:"span"},textColor:String,value:null},data:function(){return{proxyClass:"v-chip--active"}},computed:{classes:function(){return w(w(w(w({"v-chip":!0},x.a.options.computed.classes.call(this)),{},{"v-chip--clickable":this.isClickable,"v-chip--disabled":this.disabled,"v-chip--draggable":this.draggable,"v-chip--label":this.label,"v-chip--link":this.isLink,"v-chip--no-color":!this.color,"v-chip--outlined":this.outlined,"v-chip--pill":this.pill,"v-chip--removable":this.hasClose},this.themeClasses),this.sizeableClasses),this.groupClasses)},hasClose:function(){return Boolean(this.close)},isClickable:function(){return Boolean(x.a.options.computed.isClickable.call(this)||this.chipGroup)}},created:function(){var t=this;[["outline","outlined"],["selected","input-value"],["value","active"],["@input","@active.sync"]].forEach((function(e){var n=Object(o.a)(e,2),l=n[0],r=n[1];t.$attrs.hasOwnProperty(l)&&Object(y.a)(l,r,t)}))},methods:{click:function(t){this.$emit("click",t),this.chipGroup&&this.toggle()},genFilter:function(){var t=[];return this.isActive&&t.push(this.$createElement(h.a,{staticClass:"v-chip__filter",props:{left:!0}},this.filterIcon)),this.$createElement(c.b,t)},genClose:function(){var t=this;return this.$createElement(h.a,{staticClass:"v-chip__close",props:{right:!0,size:18},attrs:{"aria-label":this.$vuetify.lang.t(this.closeLabel)},on:{click:function(e){e.stopPropagation(),e.preventDefault(),t.$emit("click:close"),t.$emit("update:active",!1)}}},this.closeIcon)},genContent:function(){return this.$createElement("span",{staticClass:"v-chip__content"},[this.filter&&this.genFilter(),this.$slots.default,this.hasClose&&this.genClose()])}},render:function(t){var e=[this.genContent()],n=this.generateRouteLink(),o=n.tag,data=n.data;data.attrs=w(w({},data.attrs),{},{draggable:this.draggable?"true":void 0,tabindex:this.chipGroup&&!this.disabled?0:data.attrs.tabindex}),data.directives.push({name:"show",value:this.active}),data=this.setBackgroundColor(this.color,data);var l=this.textColor||this.outlined&&this.color;return t(o,this.setTextColor(l,data),e)}})},1280:function(t,e,n){"use strict";n.r(e);var o=n(117),l=n(1200),r=n(539),c=n(903),h=n(1033),v=n(116),d=n(538),f=n(900),m=n(221),x=(n(6),n(80),n(31),n(58),n(9),n(222),{props:["employeeId"],data:function(){return{snackbar:!1,valid:!0,documents:!1,response:"",errors:[],FileRules:[function(t){return!t||t.size<2e5||"File size should be less than 200 KB!"}],TitleRules:[function(t){return!!t||"Title is required"}],Document:{items:[{title:"",file:""}]},document_list:[]}},created:function(){this.getInfo()},methods:{getInfo:function(){var t,e,n,o=this;this.$axios.get("document",{params:{company_id:null===(t=this.$auth)||void 0===t||null===(e=t.user)||void 0===e||null===(n=e.company)||void 0===n?void 0:n.id}}).then((function(t){var data=t.data;o.document_list=data,o.loading=!1}))},can:function(t){return!0},caps:function(t){return""==t||null==t?"---":t.toString().replace(/\b\w/g,(function(t){return t.toUpperCase()}))},addDocumentInfo:function(){this.Document.items.push({title:"",file:""})},save_document_info:function(){var t,e,n,o=this,l=new FormData;this.Document.items.forEach((function(t){l.append("items[][key]",t.title),l.append("items[][value]",t.file||{})})),l.append("company_id",null===(t=this.$auth)||void 0===t||null===(e=t.user)||void 0===e||null===(n=e.company)||void 0===n?void 0:n.id),this.$axios.post("document",l,{headers:{"Content-Type":"multipart/form-data"}}).then((function(t){var data=t.data;o.loading=!1,data.status?(o.errors=[],o.snackbar=!0,o.response=data.message,o.getInfo(),o.Document.items=[{title:"",file:""}],o.close_document_info()):o.errors=data.errors})).catch((function(t){return console.log(t)}))},close_document_info:function(){this.documents=!1,this.errors=[]},removeItem:function(t){this.Document.items.splice(t,1)},delete_document:function(t){var e=this;confirm("Are you sure you wish to delete , to mitigate any inconvenience in future.")&&this.$axios.delete("document/".concat(t)).then((function(t){var data=t.data;e.loading=!1,data.status?(e.errors=[],e.snackbar=!0,e.response=data.message,e.getInfo(),e.close_document_info()):e.errors=data.errors})).catch((function(t){return console.log(t)}))}}}),_=n(60),component=Object(_.a)(x,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"mt-8"},[e("div",{staticClass:"text-center ma-2"},[e(f.a,{attrs:{top:"top",color:"secondary",elevation:"24"},model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v("\n      "+t._s(t.response)+"\n    ")])],1),t._v(" "),e(c.a,[t.can("employee_document_edit_access")?e(o.a,{staticClass:"primary mb-2",on:{click:t.addDocumentInfo}},[t._v("Add Document +\n    ")]):t._e(),t._v(" "),t._l(t.Document.items,(function(n,o){return e(d.a,{key:o},[e(r.a,{attrs:{cols:"2"}},[e("label",{staticClass:"col-form-label"},[t._v("Title "),e("span",{staticClass:"text-danger"},[t._v("*")])]),t._v(" "),e(m.a,{attrs:{dense:"",outlined:""},model:{value:n.title,callback:function(e){t.$set(n,"title",e)},expression:"d.title"}}),t._v(" "),t.errors&&t.errors.title?e("span",{staticClass:"text-danger mt-2"},[t._v(t._s(t.errors.title[0]))]):t._e()],1),t._v(" "),e(r.a,{attrs:{cols:"2"}},[e("label",{staticClass:"col-form-label"},[t._v("File "),e("span",{staticClass:"text-danger"},[t._v("*")])]),t._v(" "),e(h.a,{attrs:{dense:"",outlined:""},scopedSlots:t._u([{key:"selection",fn:function(n){var text=n.text;return[text?e(l.a,{staticClass:"ma-1",attrs:{small:"",label:"",color:"primary"}},[t._v("\n              "+t._s(text)+"\n            ")]):t._e()]}}],null,!0),model:{value:n.file,callback:function(e){t.$set(n,"file",e)},expression:"d.file"}}),t._v(" "),t.errors&&t.errors.value?e("span",{staticClass:"text-danger mt-5"},[t._v(t._s(t.errors.value[0]))]):t._e()],1),t._v(" "),e(r.a,{attrs:{cols:"2"}},[e(v.a,{staticClass:"error--text mt-10",on:{click:function(e){return t.removeItem(o)}}},[t._v("mdi-delete")])],1)],1)})),t._v(" "),e(d.a,[e(r.a,{attrs:{cols:"12"}},[e(o.a,{staticClass:"primary",attrs:{disabled:!t.Document.items.length,small:""},on:{click:t.save_document_info}},[t._v("Save")])],1)],1),t._v(" "),e(d.a,[e(r.a,{attrs:{cols:"6"}},[e("table",{staticStyle:{"border-collapse":"collapse",width:"100%"}},[e("thead",[e("tr",[e("th",{staticStyle:{border:"1px solid #dddddd","text-align":"left",padding:"8px"}},[t._v("\n                Title\n              ")]),t._v(" "),e("th",{staticStyle:{border:"1px solid #dddddd","text-align":"left",padding:"8px"}},[t._v("\n                File\n              ")]),t._v(" "),e("th",{staticStyle:{border:"1px solid #dddddd","text-align":"left",padding:"8px"}},[t._v("\n                Action\n              ")])])]),t._v(" "),e("tbody",t._l(t.document_list,(function(n,l){return e("tr",{key:l},[e("td",{staticStyle:{border:"1px solid #dddddd","text-align":"left",padding:"8px"}},[t._v("\n                "+t._s(n.key)+"\n              ")]),t._v(" "),e("td",{staticStyle:{border:"1px solid #dddddd","text-align":"left",padding:"8px"}},[e("a",{attrs:{href:n.value,target:"_blank"}},[e(o.a,{staticClass:"primary",attrs:{small:""}},[t._v("\n                    open file "),e(v.a,[t._v("mdi-open-window")])],1)],1)]),t._v(" "),e("td",{staticStyle:{border:"1px solid #dddddd","text-align":"left",padding:"8px"}},[e(v.a,{attrs:{color:"error"},on:{click:function(e){return t.delete_document(n.id)}}},[t._v("\n                  mdi-delete\n                ")])],1)])})),0)])])],1)],2)],1)}),[],!1,null,null,null);e.default=component.exports},905:function(t,e,n){"use strict";var o=n(221);e.a=o.a},999:function(t,e,n){var content=n(1e3);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(21).default)("735d40bc",content,!0,{sourceMap:!1})}}]);