(window.webpackJsonp=window.webpackJsonp||[]).push([[217],{1013:function(t,e,n){"use strict";n(12),n(14),n(13),n(17),n(18);var r=n(81),l=n(3),o=n(10),c=(n(28),n(41),n(6),n(80),n(37),n(35),n(216),n(11),n(56),n(979),n(877)),h=n(1185),d=n(1),f=n(15),v=n(65);function m(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function _(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(e){Object(l.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=c.a.extend({name:"v-file-input",model:{prop:"value",event:"change"},props:{chips:Boolean,clearable:{type:Boolean,default:!0},counterSizeString:{type:String,default:"$vuetify.fileInput.counterSize"},counterString:{type:String,default:"$vuetify.fileInput.counter"},hideInput:Boolean,multiple:Boolean,placeholder:String,prependIcon:{type:String,default:"$file"},readonly:{type:Boolean,default:!1},showSize:{type:[Boolean,Number],default:!1,validator:function(t){return"boolean"==typeof t||[1e3,1024].includes(t)}},smallChips:Boolean,truncateLength:{type:[Number,String],default:22},type:{type:String,default:"file"},value:{default:void 0,validator:function(t){return Object(d.I)(t).every((function(t){return null!=t&&"object"===Object(o.a)(t)}))}}},computed:{classes:function(){return _(_({},c.a.options.computed.classes.call(this)),{},{"v-file-input":!0})},computedCounterValue:function(){var t=this.multiple&&this.lazyValue?this.lazyValue.length:this.lazyValue instanceof File?1:0;if(!this.showSize)return this.$vuetify.lang.t(this.counterString,t);var e=this.internalArrayValue.reduce((function(t,e){var n=e.size;return t+(void 0===n?0:n)}),0);return this.$vuetify.lang.t(this.counterSizeString,t,Object(d.x)(e,1024===this.base))},internalArrayValue:function(){return Object(d.I)(this.internalValue)},internalValue:{get:function(){return this.lazyValue},set:function(t){this.lazyValue=t,this.$emit("change",this.lazyValue)}},isDirty:function(){return this.internalArrayValue.length>0},isLabelActive:function(){return this.isDirty},text:function(){var t=this;return this.isDirty||!this.persistentPlaceholder&&!this.isFocused&&this.hasLabel?this.internalArrayValue.map((function(e){var n=e.name,r=void 0===n?"":n,l=e.size,o=void 0===l?0:l,c=t.truncateText(r);return t.showSize?"".concat(c," (").concat(Object(d.x)(o,1024===t.base),")"):c})):[this.placeholder]},base:function(){return"boolean"!=typeof this.showSize?this.showSize:void 0},hasChips:function(){return this.chips||this.smallChips}},watch:{readonly:{handler:function(t){!0===t&&Object(f.b)("readonly is not supported on <v-file-input>",this)},immediate:!0},value:function(t){var e=this.multiple?t:t?[t]:[];Object(d.l)(e,this.$refs.input.files)||(this.$refs.input.value="")}},methods:{clearableCallback:function(){this.internalValue=this.multiple?[]:null,this.$refs.input.value=""},genChips:function(){var t=this;return this.isDirty?this.text.map((function(text,e){return t.$createElement(h.a,{props:{small:t.smallChips},on:{"click:close":function(){var n=t.internalValue;n.splice(e,1),t.internalValue=n}}},[text])})):[]},genControl:function(){var t=c.a.options.methods.genControl.call(this);return this.hideInput&&(t.data.style=Object(v.d)(t.data.style,{display:"none"})),t},genInput:function(){var input=c.a.options.methods.genInput.call(this);return input.data.attrs.multiple=this.multiple,delete input.data.domProps.value,delete input.data.on.input,input.data.on.change=this.onInput,[this.genSelections(),input]},genPrependSlot:function(){var t=this;if(!this.prependIcon)return null;var e=this.genIcon("prepend",(function(){t.$refs.input.click()}));return this.genSlot("prepend","outer",[e])},genSelectionText:function(){var t=this.text.length;return t<2?this.text:this.showSize&&!this.counter?[this.computedCounterValue]:[this.$vuetify.lang.t(this.counterString,t)]},genSelections:function(){var t=this,e=[];return this.isDirty&&this.$scopedSlots.selection?this.internalArrayValue.forEach((function(n,r){t.$scopedSlots.selection&&e.push(t.$scopedSlots.selection({text:t.text[r],file:n,index:r}))})):e.push(this.hasChips&&this.isDirty?this.genChips():this.genSelectionText()),this.$createElement("div",{staticClass:"v-file-input__text",class:{"v-file-input__text--placeholder":this.placeholder&&!this.isDirty,"v-file-input__text--chips":this.hasChips&&!this.$scopedSlots.selection}},e)},genTextFieldSlot:function(){var t=this,e=c.a.options.methods.genTextFieldSlot.call(this);return e.data.on=_(_({},e.data.on||{}),{},{click:function(e){e.target&&"LABEL"===e.target.nodeName||t.$refs.input.click()}}),e},onInput:function(t){var e=Object(r.a)(t.target.files||[]);this.internalValue=this.multiple?e:e[0],this.initialValue=this.internalValue},onKeyDown:function(t){this.$emit("keydown",t)},truncateText:function(t){if(t.length<Number(this.truncateLength))return t;var e=Math.floor((Number(this.truncateLength)-1)/2);return"".concat(t.slice(0,e),"…").concat(t.slice(t.length-e))}}})},1070:function(t,e,n){var content=n(1171);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(22).default)("8eddf25e",content,!0,{sourceMap:!1})},1170:function(t,e,n){"use strict";n(1070)},1171:function(t,e,n){var r=n(21)((function(i){return i[1]}));r.push([t.i,"",""]),r.locals={},t.exports=r},1217:function(t,e,n){"use strict";n.r(e);var r=n(114),l=n(133),o=n(87),c=n(1185),h=n(516),d=n(876),f=n(350),v=n(1013),m=n(147),_=n(515),y=n(893),x=n(873),S=n(349),k=n(23),w=(n(41),n(61),n(6),n(72),n(55),n(88),{props:{data:{type:Array}},data:function(){return{btnLoader:!1,dialog:!1,snackbar:!1,response:null,errors:[],import_branch_id:"",branches_list:[],files:"",text:null,color:"background"}},created:function(){var t=this;return Object(k.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("branches_list");case 2:t.branches_list=e.sent;case 3:case"end":return e.stop()}}),e)})))()},methods:{importEmployee:function(){var t=this;if(this.import_branch_id>0){var e,n,r,l=new FormData;l.append("employees",this.files),l.append("company_id",null===(e=this.$auth)||void 0===e||null===(n=e.user)||void 0===n||null===(r=n.company)||void 0===r?void 0:r.id),l.append("branch_id",this.import_branch_id);this.btnLoader=!0,this.$axios.post("/employee/import",l,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){var data=e.data;t.btnLoader=!1,data.status?(t.errors=[],t.snackbar=!0,t.response="Employees imported successfully",t.$emit("success"),t.close()):(t.errors=data.errors,l.delete("employees"))})).catch((function(e){e.toString().includes("Error: Network Error")&&(t.errors=["File is modified.Please cancel the current file and try again"],t.btnLoader=!1)}))}else alert("Select Branch")},close:function(){this.dialog=!1,this.errors=[],setTimeout((function(){}),300)}}}),O=(n(1170),n(116)),component=Object(O.a)(w,(function(){var t=this,e=t._self._c;return e("div",[e(x.a,{attrs:{small:"",top:"top",color:t.color},model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v("\n    "+t._s(t.response)+"\n  ")]),t._v(" "),e(f.a,{attrs:{persistent:"","max-width":"500px"},scopedSlots:t._u([{key:"activator",fn:function(n){var r=n.on,l=n.attrs;return[e(m.a,t._g(t._b({attrs:{title:"Import File",right:"",dark:"",color:"black",size:"x-large"},on:{click:function(e){t.dialog=!0}}},"v-icon",l,!1),r),[t._v("mdi-file-import")])]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[t._v(" "),e(l.a,[e(o.c,{staticClass:"popup_background",attrs:{dense:""}},[t._v("\n        Import Employee\n        "),e(S.a),t._v(" "),e(m.a,{attrs:{outlined:"",dark:""},on:{click:function(e){t.dialog=!1}}},[t._v("\n          mdi mdi-close-circle\n        ")])],1),t._v(" "),e(o.b,[e(d.a,[e(_.a,[e(h.a,[e(y.a,{attrs:{"hide-details":!0,clearable:"","item-value":"id","item-text":"name",outlined:"",dense:"",items:t.branches_list},model:{value:t.import_branch_id,callback:function(e){t.import_branch_id=e},expression:"import_branch_id"}})],1),t._v(" "),e(h.a,{attrs:{cols:"12"}},[e(v.a,{attrs:{accept:"text/csv",placeholder:"Upload your file",label:"File","prepend-icon":"mdi-paperclip"},scopedSlots:t._u([{key:"selection",fn:function(n){var text=n.text;return[text?e(c.a,{attrs:{small:"",label:"",color:"primary"}},[t._v("\n                    "+t._s(text)+"\n                  ")]):t._e()]}}]),model:{value:t.files,callback:function(e){t.files=e},expression:"files"}}),t._v(" "),e("br"),t._v(" "),e("a",{attrs:{href:"/employees.csv",download:""}},[t._v(" Download Sample")]),t._v(" "),e("br"),t._v(" "),t.errors&&t.errors.length>0?e("span",{staticClass:"error--text"},[t._v(t._s(t.errors[0]))]):t._e()],1)],1)],1)],1),t._v(" "),e(o.a,[e(S.a),t._v(" "),e(r.a,{staticClass:"error",attrs:{small:""},on:{click:t.close}},[t._v(" Cancel ")]),t._v(" "),e(r.a,{staticClass:"primary",attrs:{loading:t.btnLoader,small:""},on:{click:t.importEmployee}},[t._v("Save")])],1)],1)],1)],1)}),[],!1,null,"f63b3dfa",null);e.default=component.exports},877:function(t,e,n){"use strict";var r=n(214);e.a=r.a},979:function(t,e,n){var content=n(980);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(22).default)("735d40bc",content,!0,{sourceMap:!1})},980:function(t,e,n){var r=n(21)((function(i){return i[1]}));r.push([t.i,".theme--light.v-file-input .v-file-input__text{color:rgba(0,0,0,.87)}.theme--light.v-file-input .v-file-input__text--placeholder{color:rgba(0,0,0,.6)}.theme--light.v-file-input.v-input--is-disabled .v-file-input__text,.theme--light.v-file-input.v-input--is-disabled .v-file-input__text .v-file-input__text--placeholder{color:rgba(0,0,0,.38)}.theme--dark.v-file-input .v-file-input__text{color:#fff}.theme--dark.v-file-input .v-file-input__text--placeholder{color:hsla(0,0%,100%,.7)}.theme--dark.v-file-input.v-input--is-disabled .v-file-input__text,.theme--dark.v-file-input.v-input--is-disabled .v-file-input__text .v-file-input__text--placeholder{color:hsla(0,0%,100%,.5)}.v-file-input input[type=file]{left:0;max-width:0;opacity:0;pointer-events:none;position:absolute;width:0}.v-file-input .v-file-input__text{align-items:center;align-self:stretch;display:flex;flex-wrap:wrap;width:100%}.v-file-input .v-file-input__text.v-file-input__text--chips{flex-wrap:wrap}.v-file-input .v-file-input__text .v-chip{margin:4px}.v-file-input .v-text-field__slot{min-height:32px}.v-file-input.v-input--dense .v-text-field__slot{min-height:26px}.v-file-input.v-text-field--filled:not(.v-text-field--single-line) .v-file-input__text{padding-top:22px}.v-file-input.v-text-field--outlined .v-text-field__slot{padding:6px 0}.v-file-input.v-text-field--outlined.v-input--dense .v-text-field__slot{padding:3px 0}",""]),r.locals={},t.exports=r}}]);