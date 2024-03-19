(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{1013:function(t,e,n){"use strict";n(12),n(14),n(13),n(17),n(18);var o=n(81),r=n(3),l=n(10),c=(n(28),n(41),n(6),n(80),n(37),n(35),n(215),n(11),n(56),n(977),n(876)),d=n(1176),f=n(0),h=n(15),m=n(65);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function _(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=c.a.extend({name:"v-file-input",model:{prop:"value",event:"change"},props:{chips:Boolean,clearable:{type:Boolean,default:!0},counterSizeString:{type:String,default:"$vuetify.fileInput.counterSize"},counterString:{type:String,default:"$vuetify.fileInput.counter"},hideInput:Boolean,multiple:Boolean,placeholder:String,prependIcon:{type:String,default:"$file"},readonly:{type:Boolean,default:!1},showSize:{type:[Boolean,Number],default:!1,validator:function(t){return"boolean"==typeof t||[1e3,1024].includes(t)}},smallChips:Boolean,truncateLength:{type:[Number,String],default:22},type:{type:String,default:"file"},value:{default:void 0,validator:function(t){return Object(f.I)(t).every((function(t){return null!=t&&"object"===Object(l.a)(t)}))}}},computed:{classes:function(){return _(_({},c.a.options.computed.classes.call(this)),{},{"v-file-input":!0})},computedCounterValue:function(){var t=this.multiple&&this.lazyValue?this.lazyValue.length:this.lazyValue instanceof File?1:0;if(!this.showSize)return this.$vuetify.lang.t(this.counterString,t);var e=this.internalArrayValue.reduce((function(t,e){var n=e.size;return t+(void 0===n?0:n)}),0);return this.$vuetify.lang.t(this.counterSizeString,t,Object(f.x)(e,1024===this.base))},internalArrayValue:function(){return Object(f.I)(this.internalValue)},internalValue:{get:function(){return this.lazyValue},set:function(t){this.lazyValue=t,this.$emit("change",this.lazyValue)}},isDirty:function(){return this.internalArrayValue.length>0},isLabelActive:function(){return this.isDirty},text:function(){var t=this;return this.isDirty||!this.persistentPlaceholder&&!this.isFocused&&this.hasLabel?this.internalArrayValue.map((function(e){var n=e.name,o=void 0===n?"":n,r=e.size,l=void 0===r?0:r,c=t.truncateText(o);return t.showSize?"".concat(c," (").concat(Object(f.x)(l,1024===t.base),")"):c})):[this.placeholder]},base:function(){return"boolean"!=typeof this.showSize?this.showSize:void 0},hasChips:function(){return this.chips||this.smallChips}},watch:{readonly:{handler:function(t){!0===t&&Object(h.b)("readonly is not supported on <v-file-input>",this)},immediate:!0},value:function(t){var e=this.multiple?t:t?[t]:[];Object(f.l)(e,this.$refs.input.files)||(this.$refs.input.value="")}},methods:{clearableCallback:function(){this.internalValue=this.multiple?[]:null,this.$refs.input.value=""},genChips:function(){var t=this;return this.isDirty?this.text.map((function(text,e){return t.$createElement(d.a,{props:{small:t.smallChips},on:{"click:close":function(){var n=t.internalValue;n.splice(e,1),t.internalValue=n}}},[text])})):[]},genControl:function(){var t=c.a.options.methods.genControl.call(this);return this.hideInput&&(t.data.style=Object(m.d)(t.data.style,{display:"none"})),t},genInput:function(){var input=c.a.options.methods.genInput.call(this);return input.data.attrs.multiple=this.multiple,delete input.data.domProps.value,delete input.data.on.input,input.data.on.change=this.onInput,[this.genSelections(),input]},genPrependSlot:function(){var t=this;if(!this.prependIcon)return null;var e=this.genIcon("prepend",(function(){t.$refs.input.click()}));return this.genSlot("prepend","outer",[e])},genSelectionText:function(){var t=this.text.length;return t<2?this.text:this.showSize&&!this.counter?[this.computedCounterValue]:[this.$vuetify.lang.t(this.counterString,t)]},genSelections:function(){var t=this,e=[];return this.isDirty&&this.$scopedSlots.selection?this.internalArrayValue.forEach((function(n,o){t.$scopedSlots.selection&&e.push(t.$scopedSlots.selection({text:t.text[o],file:n,index:o}))})):e.push(this.hasChips&&this.isDirty?this.genChips():this.genSelectionText()),this.$createElement("div",{staticClass:"v-file-input__text",class:{"v-file-input__text--placeholder":this.placeholder&&!this.isDirty,"v-file-input__text--chips":this.hasChips&&!this.$scopedSlots.selection}},e)},genTextFieldSlot:function(){var t=this,e=c.a.options.methods.genTextFieldSlot.call(this);return e.data.on=_(_({},e.data.on||{}),{},{click:function(e){e.target&&"LABEL"===e.target.nodeName||t.$refs.input.click()}}),e},onInput:function(t){var e=Object(o.a)(t.target.files||[]);this.internalValue=this.multiple?e:e[0],this.initialValue=this.internalValue},onKeyDown:function(t){this.$emit("keydown",t)},truncateText:function(t){if(t.length<Number(this.truncateLength))return t;var e=Math.floor((Number(this.truncateLength)-1)/2);return"".concat(t.slice(0,e),"…").concat(t.slice(t.length-e))}}})},1328:function(t,e,n){"use strict";n.r(e);var o=n(114),r=n(133),l=n(87),c=n(1176),d=n(518),f=n(875),h=n(1545),m=n(350),v=n(1013),_=n(935),y=n(147),x=n(326),D=n(204),k=n(60),w=n(862),O=n(517),C=n(872),S=n(349),$=n(214),j=n(96),V=n(855),z=(n(6),n(72),n(33),n(58),n(11),n(215),n(35),{props:["contractor_id"],data:function(){return{dialogUploadDocuments:!1,editDialogUploadDocuments:!1,key:0,loading:!1,snackbar:!1,valid:!1,displayForm:!1,documents:!1,response:"",errors:[],FileRules:[function(t){return!t||t.size<2e5||"File size should be less than 200 KB!"}],TitleRules:[function(t){return!!t||"Title is required"}],Document:{items:[{title:"",file:""}]},EditDocument:{items:[{title:"",file:"",document_id:null}]},document_list:[],headers_table:[{text:"#",align:"left",sortable:!1,key:"sno",value:"sno"},{text:"Title",align:"left",sortable:!1,key:"title",value:"title"},{text:"Download",align:"left",sortable:!1,key:"frequency",value:"download"},{text:"Date",align:"left",sortable:!1,key:"date_time",value:"date_time"},{text:"Options",align:"left",sortable:!1,key:"edit",value:"edit"}]}},created:function(){this.getInfo(this.contractor_id)},methods:{editDocuments:function(t){this.EditDocument.items=[{title:t.title,file:"",document_id:t.id}],this.key++,this.editDialogUploadDocuments=!0},getInfo:function(t){var e=this;this.loading=!0,this.$axios.get("contractor-documents-list/".concat(t)).then((function(t){var data=t.data;e.document_list=data,e.loading=!1}))},can:function(t){return!0},caps:function(t){return""==t||null==t?"---":t.toString().replace(/\b\w/g,(function(t){return t.toUpperCase()}))},addDocumentInfo:function(){this.dialogUploadDocuments=!0,this.valid=!0,this.Document.items=[{title:"",file:""}],this.displayForm=!0},addDocumentFile:function(){this.Document.items.push({title:"",file:""})},update_document_info:function(){var t,e,n,o=this;if(this.$refs.form.validate()){this.loading=!0;var r=new FormData;this.EditDocument.items.forEach((function(t){r.append("items[][title]",t.title),r.append("items[][document_id]",t.document_id),r.append("items[][file]",t.file||{})})),r.append("company_id",null===(t=this.$auth)||void 0===t||null===(e=t.user)||void 0===e||null===(n=e.company)||void 0===n?void 0:n.id),r.append("contractor_id",this.contractor_id),this.$axios.post("contractor-documents-update",r,{headers:{"Content-Type":"multipart/form-data"}}).then((function(t){var data=t.data;o.editDialogUploadDocuments=!1,o.loading=!1,data.status?(o.errors=[],o.snackbar=!0,o.response="Document saved successfully",o.getDocumentInfo(o.contractor_id),o.loading=!1):o.errors=data.errors})).catch((function(t){return console.log(t)}))}else alert("Enter required fields!")},save_document_info:function(){var t,e,n,o=this;if(this.$refs.form.validate()){this.loading=!0;var r=new FormData;this.Document.items.forEach((function(t){r.append("items[][title]",t.title),r.append("items[][file]",t.file||{})})),r.append("company_id",null===(t=this.$auth)||void 0===t||null===(e=t.user)||void 0===e||null===(n=e.company)||void 0===n?void 0:n.id),r.append("contractor_id",this.contractor_id),this.$axios.post("contractor-documents-store",r,{headers:{"Content-Type":"multipart/form-data"}}).then((function(t){var data=t.data;o.dialogUploadDocuments=!1,o.loading=!1,data.status?(o.errors=[],o.snackbar=!0,o.response="Document saved successfully",o.getDocumentInfo(o.contractor_id),o.loading=!1):o.errors=data.errors})).catch((function(t){return console.log(t)}))}else alert("Enter required fields!")},getDonwloadLink:function(t,e){return"http://192.168.88.30:8000/api/download-contractor-documents/"+t+"/"+e},getDocumentInfo:function(t){var e=this;this.loading=!0,this.$axios.get("contractor-documents-list/".concat(t)).then((function(t){var data=t.data;e.document_list=data,e.documents=!1,e.loading=!1}))},close_document_info:function(){this.documents=!1,this.errors=[],this.$emit("close-popup")},removeItem:function(t){this.Document.items.splice(t,1)},delete_document:function(t,e,n){var o=this;confirm("Are you sure you wish to delete , to mitigate any inconvenience in future.")&&this.$axios.post("contractor-documents-delete/".concat(t,"/").concat(e,"/").concat(n)).then((function(t){var data=t.data;o.loading=!1,data.status?(o.errors=[],o.snackbar=!0,o.response=data.message,o.getDocumentInfo(o.contractor_id),o.close_document_info()):o.errors=data.errors})).catch((function(t){return console.log(t)}))}}}),E=n(116),component=Object(E.a)(z,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"mt-0"},[e("div",{staticClass:"text-center ma-2"},[e(C.a,{attrs:{top:"top",color:"secondary",elevation:"24"},model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v("\n      "+t._s(t.response)+"\n    ")])],1),t._v(" "),e(f.a,[e(O.a,{staticClass:"pl-1 mt-0 mb-0"},[e(d.a,{attrs:{cols:"12"}},[e(r.a,{staticClass:"mb-5 rounded-md",attrs:{elevation:"0"}},[e(j.a,{staticClass:"rounded-md",staticStyle:{"border-radius":"5px 5px 0px 0px"},attrs:{elevation:"1",dense:""}},[e(S.a),t._v(" "),e(V.a,[e(d.a,{staticClass:"toolbaritems-button-design"},[e(o.a,{staticClass:"primary",attrs:{dark:"",small:""},on:{click:t.addDocumentInfo}},[t._v("\n                  Document  "),e(y.a,[t._v("mdi-plus")])],1)],1)],1)],1),t._v(" "),e(h.a,{staticClass:"elevation-1",attrs:{dense:"",headers:t.headers_table,items:t.document_list,"model-value":"data.id",loading:t.loading,"footer-props":{itemsPerPageOptions:[10,50,100,500,1e3]}},scopedSlots:t._u([{key:"item.sno",fn:function(e){e.item;var n=e.index;return[t._v("\n              "+t._s(n+1)+"\n            ")]}},{key:"item.title",fn:function(e){var n=e.item;return[t._v("\n              "+t._s(n.title)+"\n            ")]}},{key:"item.date_time",fn:function(e){var n=e.item;return[t._v("\n              "+t._s(t.$dateFormat.format4(n.date_time))+"\n            ")]}},{key:"item.download",fn:function(n){var o=n.item;return[e("a",{attrs:{title:"Download Profile Picture",href:t.getDonwloadLink(o.contractor_id,o.attachment)}},[e(y.a,{attrs:{color:"violet"}},[t._v("mdi-arrow-down-bold-circle")])],1)]}},{key:"item.edit",fn:function(n){var r=n.item;return["company"==t.$auth.user.user_type?e(w.a,{attrs:{bottom:"",left:""},scopedSlots:t._u([{key:"activator",fn:function(n){var r=n.on,l=n.attrs;return[e(o.a,t._g(t._b({attrs:{"dark-2":"",icon:""}},"v-btn",l,!1),r),[e(y.a,[t._v("mdi-dots-vertical")])],1)]}}],null,!0)},[t._v(" "),e(x.a,{attrs:{width:"120",dense:""}},[t.can("branch_view")?e(D.a,{on:{click:function(e){return t.editDocuments(r)}}},[e(k.c,{staticStyle:{cursor:"pointer"}},[e(y.a,{attrs:{color:"secondary",small:""}},[t._v("mdi-pencil ")]),t._v("\n                      Edit\n                    ")],1)],1):t._e(),t._v(" "),t.can("branch_delete")?e(D.a,{on:{click:function(e){return t.delete_document(r.id,r.contractor_id,r.attachment)}}},[e(k.c,{staticStyle:{cursor:"pointer"}},[e(y.a,{attrs:{color:"error",small:""}},[t._v(" mdi-delete ")]),t._v("\n                      Delete\n                    ")],1)],1):t._e()],1)],1):t._e()]}}])})],1)],1)],1),t._v(" "),e(m.a,{attrs:{persistent:"",width:"800px"},model:{value:t.dialogUploadDocuments,callback:function(e){t.dialogUploadDocuments=e},expression:"dialogUploadDocuments"}},[e(r.a,[e(l.c,{staticClass:"popup_background",attrs:{dense:""}},[t._v("\n          Upload Documents\n          "),e(S.a),t._v(" "),e(y.a,{attrs:{outlined:"",dark:"",fill:""},on:{click:function(e){t.dialogUploadDocuments=!1}}},[t._v("\n            mdi mdi-close-circle\n          ")])],1),t._v(" "),e(l.b,[e(f.a,[e(O.a,[e(d.a,{staticClass:"text-right",attrs:{cols:"12"}}),t._v(" "),e(d.a,{staticClass:"text-right",attrs:{cols:"12"}},[t.displayForm?e(_.a,{ref:"form",staticClass:"mt-5",attrs:{method:"post","lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[t._l(t.Document.items,(function(n,r){return e(O.a,{key:r},[e(d.a,{attrs:{cols:"5"}},[e($.a,{staticClass:"form-control",attrs:{small:"",type:"text",label:"Title",dense:"",outlined:"",rules:t.TitleRules},model:{value:n.title,callback:function(e){t.$set(n,"title",e)},expression:"d.title"}}),t._v(" "),t.errors&&t.errors.title?e("span",{staticClass:"text-danger mt-2"},[t._v(t._s(t.errors.title[0]))]):t._e()],1),t._v(" "),e(d.a,{attrs:{cols:"5"}},[e("div",{staticClass:"form-group"},[e(v.a,{attrs:{label:"Attachment",dense:"",outlined:"",placeholder:"Upload your file",rules:t.FileRules},scopedSlots:t._u([{key:"selection",fn:function(n){var text=n.text;return[text?e(c.a,{attrs:{small:"",label:"",color:"primary"}},[t._v("\n                              "+t._s(text)+"\n                            ")]):t._e()]}}],null,!0),model:{value:n.file,callback:function(e){t.$set(n,"file",e)},expression:"d.file"}}),t._v(" "),t.errors&&t.errors.attachment?e("span",{staticClass:"text-danger mt-2"},[t._v(t._s(t.errors.attachment[0]))]):t._e()],1)]),t._v(" "),e(d.a,{attrs:{cols:"2"}},[e("div",{staticClass:"form-group"},[t.Document.items.length-1==r?e(y.a,{staticClass:"mt-1",attrs:{size:"40",color:"primary"},on:{click:t.addDocumentFile}},[t._v("mdi-plus-circle")]):e(o.a,{staticClass:"error mt-2",attrs:{dark:"",fab:"","x-small":""},on:{click:function(e){return t.removeItem(r)}}},[e(y.a,[t._v("mdi-delete")])],1)],1)])],1)})),t._v(" "),e(O.a,[e(d.a,{staticClass:"text-right",attrs:{cols:"12"}},[e(o.a,{staticClass:"primary",attrs:{disabled:!t.Document.items.length,small:""},on:{click:t.save_document_info}},[t._v("Save")])],1)],1)],2):t._e()],1)],1)],1)],1)],1)],1),t._v(" "),e(m.a,{attrs:{persistent:"",width:"800px"},model:{value:t.editDialogUploadDocuments,callback:function(e){t.editDialogUploadDocuments=e},expression:"editDialogUploadDocuments"}},[e(r.a,[e(l.c,{staticClass:"popup_background",attrs:{dense:""}},[t._v("\n          Edit Documents\n          "),e(S.a),t._v(" "),e(y.a,{attrs:{outlined:"",dark:"",fill:""},on:{click:function(e){t.editDialogUploadDocuments=!1}}},[t._v("\n            mdi mdi-close-circle\n          ")])],1),t._v(" "),e(l.b,[e(f.a,[e(O.a,[e(d.a,{staticClass:"text-right",attrs:{cols:"12"}},[e(_.a,{ref:"form",staticClass:"mt-5",attrs:{method:"post","lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[t._l(t.EditDocument.items,(function(n,o){return e(O.a,{key:o},[e(d.a,{attrs:{cols:"5"}},[e($.a,{staticClass:"form-control",staticStyle:{display:"none"},attrs:{small:"",type:"text",label:"Title",dense:"",outlined:""},model:{value:n.document_id,callback:function(e){t.$set(n,"document_id",e)},expression:"d.document_id"}}),t._v(" "),e($.a,{staticClass:"form-control",attrs:{small:"",type:"text",label:"Title",dense:"",outlined:"",rules:t.TitleRules},model:{value:n.title,callback:function(e){t.$set(n,"title",e)},expression:"d.title"}}),t._v(" "),t.errors&&t.errors.title?e("span",{staticClass:"text-danger mt-2"},[t._v(t._s(t.errors.title[0]))]):t._e()],1),t._v(" "),e(d.a,{attrs:{cols:"5"}},[e("div",{staticClass:"form-group"},[e(v.a,{attrs:{label:"Attachment",dense:"",outlined:"",placeholder:"Upload your file",rules:t.FileRules},scopedSlots:t._u([{key:"selection",fn:function(n){var text=n.text;return[text?e(c.a,{attrs:{small:"",label:"",color:"primary"}},[t._v("\n                              "+t._s(text)+"\n                            ")]):t._e()]}}],null,!0),model:{value:n.file,callback:function(e){t.$set(n,"file",e)},expression:"d.file"}}),t._v(" "),t.errors&&t.errors.attachment?e("span",{staticClass:"text-danger mt-2"},[t._v(t._s(t.errors.attachment[0]))]):t._e()],1)])],1)})),t._v(" "),e(O.a,[e(d.a,{staticClass:"text-right",attrs:{cols:"12"}},[e(o.a,{staticClass:"primary",attrs:{disabled:!t.EditDocument.items.length,small:""},on:{click:t.update_document_info}},[t._v("Save")])],1)],1)],2)],1)],1)],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports},855:function(t,e,n){"use strict";n.d(e,"a",(function(){return c})),n.d(e,"b",(function(){return l}));var o=n(96),r=n(0),l=Object(r.k)("v-toolbar__title"),c=Object(r.k)("v-toolbar__items");o.a},876:function(t,e,n){"use strict";var o=n(214);e.a=o.a},935:function(t,e,n){"use strict";var o=n(3),r=(n(41),n(61),n(351),n(13),n(6),n(11),n(55),n(99),n(12),n(14),n(17),n(18),n(8)),l=n(118),c=n(148);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(r.a)(l.a,Object(c.b)("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(input){var t=this,e=function(input){return input.$watch("hasError",(function(e){t.$set(t.errorBag,input._uid,e)}),{immediate:!0})},n={_uid:input._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?n.shouldValidate=input.$watch("shouldValidate",(function(o){o&&(t.errorBag.hasOwnProperty(input._uid)||(n.valid=e(input)))})):n.valid=e(input),n},validate:function(){return 0===this.inputs.filter((function(input){return!input.validate(!0)})).length},reset:function(){this.inputs.forEach((function(input){return input.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(input){return input.resetValidation()})),this.resetErrorBag()},register:function(input){this.inputs.push(input),this.watchers.push(this.watchInput(input))},unregister:function(input){var t=this.inputs.find((function(i){return i._uid===input._uid}));if(t){var e=this.watchers.find((function(i){return i._uid===t._uid}));e&&(e.valid(),e.shouldValidate()),this.watchers=this.watchers.filter((function(i){return i._uid!==t._uid})),this.inputs=this.inputs.filter((function(i){return i._uid!==t._uid})),this.$delete(this.errorBag,t._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:f({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},977:function(t,e,n){var content=n(978);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(22).default)("735d40bc",content,!0,{sourceMap:!1})},978:function(t,e,n){var o=n(21)((function(i){return i[1]}));o.push([t.i,".theme--light.v-file-input .v-file-input__text{color:rgba(0,0,0,.87)}.theme--light.v-file-input .v-file-input__text--placeholder{color:rgba(0,0,0,.6)}.theme--light.v-file-input.v-input--is-disabled .v-file-input__text,.theme--light.v-file-input.v-input--is-disabled .v-file-input__text .v-file-input__text--placeholder{color:rgba(0,0,0,.38)}.theme--dark.v-file-input .v-file-input__text{color:#fff}.theme--dark.v-file-input .v-file-input__text--placeholder{color:hsla(0,0%,100%,.7)}.theme--dark.v-file-input.v-input--is-disabled .v-file-input__text,.theme--dark.v-file-input.v-input--is-disabled .v-file-input__text .v-file-input__text--placeholder{color:hsla(0,0%,100%,.5)}.v-file-input input[type=file]{left:0;max-width:0;opacity:0;pointer-events:none;position:absolute;width:0}.v-file-input .v-file-input__text{align-items:center;align-self:stretch;display:flex;flex-wrap:wrap;width:100%}.v-file-input .v-file-input__text.v-file-input__text--chips{flex-wrap:wrap}.v-file-input .v-file-input__text .v-chip{margin:4px}.v-file-input .v-text-field__slot{min-height:32px}.v-file-input.v-input--dense .v-text-field__slot{min-height:26px}.v-file-input.v-text-field--filled:not(.v-text-field--single-line) .v-file-input__text{padding-top:22px}.v-file-input.v-text-field--outlined .v-text-field__slot{padding:6px 0}.v-file-input.v-text-field--outlined.v-input--dense .v-text-field__slot{padding:3px 0}",""]),o.locals={},t.exports=o}}]);