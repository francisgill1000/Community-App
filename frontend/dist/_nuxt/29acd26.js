(window.webpackJsonp=window.webpackJsonp||[]).push([[289,180],{1264:function(e,t,n){var content=n(1416);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(22).default)("93c8cd08",content,!0,{sourceMap:!1})},1415:function(e,t,n){"use strict";n(1264)},1416:function(e,t,n){var o=n(21)((function(i){return i[1]}));o.push([e.i,".tiptap-vuetify-editor__content{min-height:400px!important}.ProseMirror .ProseMirror-focused{height:400px!important}.tiptap-icon .v-btn--icon,.tiptap-icon .v-icon{color:#fff!important}.breakthewords{-webkit-line-clamp:2;-webkit-box-orient:vertical;display:-webkit-box;font-size:12px!important;overflow:hidden;text-overflow:ellipsis}",""]),o.locals={},e.exports=o},1569:function(e,t,n){"use strict";n.r(t);var o=n(114),l=n(133),r=n(87),d=n(516),v=n(1561),x=n(350),c=n(147),f=n(515),_=n(873),m=n(349),h=n(214),w=n(956),y=n(96),k=n(856),O=n(362),I=(n(37),n(3)),j=(n(35),n(33),n(266),n(361)),P={components:{TiptapVuetify:j.p},data:function(){var e;return e={extensions:[j.g,j.a,j.r,j.o,j.j,j.l,j.c,j.m,[j.f,{options:{levels:[1,2,3]}}],j.b,j.n],endpoint:"mail_content",editedItem:{content:""},perPage:10,cumulativeIndex:1,currentPage:1,totalRowsCount:0,dialogNew:!1,options:{},Model:"Role"},Object(I.a)(e,"endpoint","mail_content"),Object(I.a)(e,"search",""),Object(I.a)(e,"snackbar",!1),Object(I.a)(e,"dialog",!1),Object(I.a)(e,"ids",[]),Object(I.a)(e,"loading",!1),Object(I.a)(e,"total",0),Object(I.a)(e,"headers",[{text:"#",align:"left",sortable:!0,key:"sno",value:"sno"},{text:"Title",align:"left",sortable:!0,key:"name",value:"name"},{text:"Content",align:"left",sortable:!0,key:"content",value:"content"},{text:"Created",align:"left",sortable:!0,key:"updated_at",value:"updated_at"},{text:"Actions",align:"center",value:"action",sortable:!1}]),Object(I.a)(e,"editedIndex",-1),Object(I.a)(e,"editedItem",{name:"",description:""}),Object(I.a)(e,"defaultItem",{name:"",description:""}),Object(I.a)(e,"response",""),Object(I.a)(e,"data",[]),Object(I.a)(e,"errors",[]),e},watch:{options:{handler:function(){this.getDataFromApi()},deep:!0}},computed:{formTitle:function(){return-1===this.editedIndex?"New":"Edit"}},created:function(){this.loading=!0,this.getDataFromApi()},methods:{getDataFromApi:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.endpoint;this.loading=!0;var n=this.options,o=n.page,l=n.itemsPerPage,r={params:{per_page:l,company_id:this.$auth.user.company.id}};this.currentPage=o,this.perPage=l,this.$axios.get("".concat(t,"?page=").concat(o),r).then((function(t){var data=t.data;e.data=data.data,e.total=data.total,e.loading=!1,e.totalRowsCount=data.total}))},can:function(e){return this.$pagePermission.can(e,this)},onScroll:function(){this.scrollInvoked++},editItem:function(e){this.dialogNew=!0,this.editedItem=e,this.editedIndex=e.id},save:function(){var e=this,t={name:this.editedItem.name,content:this.editedItem.content,branch_id:0,company_id:this.$auth.user.company.id};this.editedIndex>-1?this.$axios.put(this.endpoint+"/"+this.editedItem.id,t).then((function(t){var data=t.data;data.status?(e.getDataFromApi(),e.snackbar=data.status,e.response=data.message,e.dialogNew=!1):e.errors=data.errors})).catch((function(e){return console.log(e)})):this.$axios.post(this.endpoint,t).then((function(t){var data=t.data;data.status?(e.getDataFromApi(),e.snackbar=data.status,e.response=data.message,e.close(),e.errors=[],e.search="",e.dialogNew=!1):e.errors=data.errors})).catch((function(e){return console.log(e)}))}}},C=P,N=(n(1415),n(116)),component=Object(N.a)(C,(function(){var e=this,t=e._self._c;return e.can("automation_contnet_access")?t("div",[t(x.a,{attrs:{width:"60%"},model:{value:e.dialogNew,callback:function(t){e.dialogNew=t},expression:"dialogNew"}},[t(l.a,[t(r.c,{staticClass:"popup_background",attrs:{dense:""}},[e._v("\n        Modify Mail Content\n        "),t(m.a),e._v(" "),t(c.a,{attrs:{outlined:"",dark:""},on:{click:function(t){e.dialogNew=!1}}},[e._v("\n          mdi mdi-close-circle\n        ")])],1),e._v(" "),t(r.b,[t(f.a,{staticClass:"pt-5"},[t(d.a,{attrs:{md:"6"}},[t(h.a,{attrs:{dense:"",small:"",outlined:"",label:"Name or Title",disabled:""},model:{value:e.editedItem.name,callback:function(t){e.$set(e.editedItem,"name",t)},expression:"editedItem.name"}})],1),e._v(" "),t(d.a,{staticClass:"text-end",attrs:{md:"6"}},[t(o.a,{attrs:{color:"primary"},on:{click:e.save}},[e._v(" Update ")])],1),e._v(" "),t(d.a,{attrs:{md:"12"}},["email"==e.editedItem.name?t("ClientOnly",{scopedSlots:e._u([{key:"placeholder",fn:function(){return[e._v(" Loading... ")]},proxy:!0}],null,!1,669632662)},[t("tiptap-vuetify",{directives:[{def:O.b,name:"scroll",rawName:"v-scroll.self",value:e.onScroll,expression:"onScroll",modifiers:{self:!0}}],staticClass:"tiptap-icon",attrs:{extensions:e.extensions,height:"400","toolbar-attributes":{color:"background red--text"}},model:{value:e.editedItem.content,callback:function(t){e.$set(e.editedItem,"content",t)},expression:"editedItem.content"}})],1):t(w.a,{attrs:{outlined:"",label:e.editedItem.name,value:" "},model:{value:e.editedItem.content,callback:function(t){e.$set(e.editedItem,"content",t)},expression:"editedItem.content"}})],1)],1)],1)],1)],1),e._v(" "),t("div",{staticClass:"text-center ma-2"},[t(_.a,{attrs:{top:"top",color:"secondary",elevation:"24"},model:{value:e.snackbar,callback:function(t){e.snackbar=t},expression:"snackbar"}},[e._v("\n      "+e._s(e.response)+"\n    ")])],1),e._v(" "),t(f.a,[t(d.a,{attrs:{md:"12"}},[t(v.a,{staticClass:"elevation-1",attrs:{"item-key":"id",headers:e.headers,items:e.data,loading:e.loading,options:e.options,"footer-props":{itemsPerPageOptions:[50,100,500,1e3]}},on:{"update:options":function(t){e.options=t}},scopedSlots:e._u([{key:"top",fn:function(){return[t(l.a,{staticClass:"mb-5 rounded-md mt-3",attrs:{elevation:"0"}},[t(y.a,{staticClass:"rounded-md",staticStyle:{"border-radius":"5px 5px 0px 0px"},attrs:{dense:"",flat:""}},[t("span",[e._v(" Mail Content List ")]),e._v(" "),t(o.a,{staticClass:"ma-0 px-0",attrs:{dense:"","x-small":"",ripple:!1,text:"",title:"Add Role"},on:{click:function(t){return e.getDataFromApi()}}},[t(c.a,{staticClass:"ml-2",attrs:{dark:""}},[e._v("mdi mdi-reload")])],1),e._v(" "),t(m.a),e._v(" "),t(k.a,[t(d.a)],1)],1)],1)]},proxy:!0},{key:"item.sno",fn:function(t){var n=t.item;return[e._v("\n          "+e._s(e.currentPage?(e.currentPage-1)*e.perPage+(e.cumulativeIndex+e.data.indexOf(n)):""))]}},{key:"item.content",fn:function(n){var o=n.item;return[t("div",{staticClass:"text-break-dot1",domProps:{innerHTML:e._s(o.content)}})]}},{key:"item.updated_at",fn:function(t){var n=t.item;return[e._v("\n          "+e._s(e.$dateFormat.format1(n.updated_at))+"\n        ")]}},e.can("automation_contnet_edit")?{key:"item.action",fn:function(n){var o=n.item;return[e.can("settings_roles_edit")?t(c.a,{staticClass:"mr-2",attrs:{color:"secondary",small:""},on:{click:function(t){return e.editItem(o)}}},[e._v("\n            mdi-pencil\n          ")]):e._e()]}}:null,{key:"no-data",fn:function(){},proxy:!0}],null,!0),model:{value:e.ids,callback:function(t){e.ids=t},expression:"ids"}})],1)],1)],1):t("NoAccess")}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{NoAccess:n(880).default})},856:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return r}));var o=n(96),l=n(1),r=Object(l.k)("v-toolbar__title"),d=Object(l.k)("v-toolbar__items");o.a},880:function(e,t,n){"use strict";n.r(t);var o=n(116),component=Object(o.a)({},(function(){this._self._c;return this._m(0)}),[function(){var e=this._self._c;return e("div",{staticClass:"text-center",staticStyle:{"margin-top":"25%"}},[e("b",[this._v("No Access")])])}],!1,null,null,null);t.default=component.exports},903:function(e,t,n){var content=n(904);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(22).default)("c54b7bb4",content,!0,{sourceMap:!1})},904:function(e,t,n){var o=n(21)((function(i){return i[1]}));o.push([e.i,".theme--light.v-textarea.v-text-field--solo-inverted.v-input--is-focused textarea{color:#fff}.theme--light.v-textarea.v-text-field--solo-inverted.v-input--is-focused textarea::-moz-placeholder{color:hsla(0,0%,100%,.5)}.theme--light.v-textarea.v-text-field--solo-inverted.v-input--is-focused textarea::placeholder{color:hsla(0,0%,100%,.5)}.theme--dark.v-textarea.v-text-field--solo-inverted.v-input--is-focused textarea{color:rgba(0,0,0,.87)}.theme--dark.v-textarea.v-text-field--solo-inverted.v-input--is-focused textarea::-moz-placeholder{color:rgba(0,0,0,.38)}.theme--dark.v-textarea.v-text-field--solo-inverted.v-input--is-focused textarea::placeholder{color:rgba(0,0,0,.38)}.v-textarea textarea{align-self:stretch;flex:1 1 auto;line-height:1.75rem;max-width:100%;min-height:32px;outline:none;padding:0;width:100%}.v-textarea .v-text-field__prefix,.v-textarea .v-text-field__suffix{align-self:start;padding-top:2px}.v-textarea.v-text-field--box .v-text-field__prefix,.v-textarea.v-text-field--box textarea,.v-textarea.v-text-field--enclosed .v-text-field__prefix,.v-textarea.v-text-field--enclosed textarea{margin-top:24px}.v-textarea.v-text-field--box.v-text-field--outlined:not(.v-input--dense) .v-text-field__prefix,.v-textarea.v-text-field--box.v-text-field--outlined:not(.v-input--dense) .v-text-field__suffix,.v-textarea.v-text-field--box.v-text-field--outlined:not(.v-input--dense) textarea,.v-textarea.v-text-field--box.v-text-field--single-line:not(.v-input--dense) .v-text-field__prefix,.v-textarea.v-text-field--box.v-text-field--single-line:not(.v-input--dense) .v-text-field__suffix,.v-textarea.v-text-field--box.v-text-field--single-line:not(.v-input--dense) textarea,.v-textarea.v-text-field--enclosed.v-text-field--outlined:not(.v-input--dense) .v-text-field__prefix,.v-textarea.v-text-field--enclosed.v-text-field--outlined:not(.v-input--dense) .v-text-field__suffix,.v-textarea.v-text-field--enclosed.v-text-field--outlined:not(.v-input--dense) textarea,.v-textarea.v-text-field--enclosed.v-text-field--single-line:not(.v-input--dense) .v-text-field__prefix,.v-textarea.v-text-field--enclosed.v-text-field--single-line:not(.v-input--dense) .v-text-field__suffix,.v-textarea.v-text-field--enclosed.v-text-field--single-line:not(.v-input--dense) textarea{margin-top:10px}.v-textarea.v-text-field--box.v-text-field--outlined:not(.v-input--dense) .v-label,.v-textarea.v-text-field--box.v-text-field--single-line:not(.v-input--dense) .v-label,.v-textarea.v-text-field--enclosed.v-text-field--outlined:not(.v-input--dense) .v-label,.v-textarea.v-text-field--enclosed.v-text-field--single-line:not(.v-input--dense) .v-label{top:18px}.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-text-field__prefix,.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-text-field__suffix,.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense textarea,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-text-field__prefix,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-text-field__suffix,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense textarea,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-text-field__prefix,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-text-field__suffix,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense textarea,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-text-field__prefix,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-text-field__suffix,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense textarea{margin-top:6px}.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-input__append-inner,.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-input__append-outer,.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-input__prepend-inner,.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-input__prepend-outer,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-input__append-inner,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-input__append-outer,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-input__prepend-inner,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-input__prepend-outer,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-input__append-inner,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-input__append-outer,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-input__prepend-inner,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-input__prepend-outer,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-input__append-inner,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-input__append-outer,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-input__prepend-inner,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-input__prepend-outer{align-self:flex-start;margin-top:8px}.v-textarea.v-text-field--solo{align-items:flex-start}.v-textarea.v-text-field--solo .v-input__control textarea{caret-color:auto}.v-textarea.v-text-field--solo .v-input__append-inner,.v-textarea.v-text-field--solo .v-input__append-outer,.v-textarea.v-text-field--solo .v-input__prepend-inner,.v-textarea.v-text-field--solo .v-input__prepend-outer{align-self:flex-start;margin-top:12px}.v-application--is-ltr .v-textarea.v-text-field--solo .v-input__append-inner{padding-left:12px}.v-application--is-rtl .v-textarea.v-text-field--solo .v-input__append-inner{padding-right:12px}.v-textarea--auto-grow textarea{overflow:hidden}.v-textarea--no-resize textarea{resize:none}.v-textarea.v-text-field--enclosed .v-text-field__slot{align-self:stretch}.v-application--is-ltr .v-textarea.v-text-field--enclosed .v-text-field__slot{margin-right:-12px}.v-application--is-rtl .v-textarea.v-text-field--enclosed .v-text-field__slot{margin-left:-12px}.v-application--is-ltr .v-textarea.v-text-field--enclosed .v-text-field__slot textarea{padding-right:12px}.v-application--is-rtl .v-textarea.v-text-field--enclosed .v-text-field__slot textarea{padding-left:12px}",""]),o.locals={},e.exports=o},956:function(e,t,n){"use strict";n(12),n(14),n(13),n(6),n(17),n(11),n(18);var o=n(3),l=(n(28),n(55),n(903),n(214)),r=n(8);function d(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}var v=Object(r.a)(l.a);t.a=v.extend({name:"v-textarea",props:{autoGrow:Boolean,noResize:Boolean,rowHeight:{type:[Number,String],default:24,validator:function(e){return!isNaN(parseFloat(e))}},rows:{type:[Number,String],default:5,validator:function(e){return!isNaN(parseInt(e,10))}}},computed:{classes:function(){return function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({"v-textarea":!0,"v-textarea--auto-grow":this.autoGrow,"v-textarea--no-resize":this.noResizeHandle},l.a.options.computed.classes.call(this))},noResizeHandle:function(){return this.noResize||this.autoGrow}},watch:{autoGrow:function(e){var t=this;this.$nextTick((function(){var n;e?t.calculateInputHeight():null===(n=t.$refs.input)||void 0===n||n.style.removeProperty("height")}))},lazyValue:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)},rowHeight:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)}},mounted:function(){var e=this;setTimeout((function(){e.autoGrow&&e.calculateInputHeight()}),0)},methods:{calculateInputHeight:function(){var input=this.$refs.input;if(input){input.style.height="0";var e=input.scrollHeight,t=parseInt(this.rows,10)*parseFloat(this.rowHeight);input.style.height=Math.max(t,e)+"px"}},genInput:function(){var input=l.a.options.methods.genInput.call(this);return input.tag="textarea",delete input.data.attrs.type,input.data.attrs.rows=this.rows,input},onInput:function(e){l.a.options.methods.onInput.call(this,e),this.autoGrow&&this.calculateInputHeight()},onKeyDown:function(e){this.isFocused&&13===e.keyCode&&e.stopPropagation(),this.$emit("keydown",e)}}})}}]);