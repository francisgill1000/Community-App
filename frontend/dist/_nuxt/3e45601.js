(window.webpackJsonp=window.webpackJsonp||[]).push([[161],{1362:function(e,t,n){"use strict";n.r(t);var l=n(114),o=n(516),r=n(876),d=n(1564),v=n(863),x=n(515),f=n(893),c=n(214),_=n(954),m=n(23),h=(n(55),n(519),n(35),n(88),{data:function(){return{responseStatusColor:"",menu1:!1,menu2:!1,request_types:[],response:null,endpoint:"change_request",editedItem:{company_id:null,branch_id:0,employee_device_id:null,request_type:"Attendance",from_date:new Date(Date.now()-6e4*(new Date).getTimezoneOffset()).toISOString().substr(0,10),to_date:new Date(Date.now()-6e4*(new Date).getTimezoneOffset()).toISOString().substr(0,10),remarks:"",status:"P"}}},created:function(){var e=this;return Object(m.a)(regeneratorRuntime.mark((function t(){var n,l,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.remarks="",e.response="",e.request_types=[{text:"Attendance",value:"Attendance"},{text:"Overtime",value:"Overtime"}],n=e.$auth.user,l=n.company_id,o=n.employee,e.editedItem.company_id=l,e.editedItem.branch_id=o.branch_id,e.editedItem.employee_device_id=o.system_user_id;case 7:case"end":return t.stop()}}),t)})))()},methods:{submit:function(){var e=this;this.editedItem.requested_at=this.getCurrentDateTime(),this.$axios.post(this.endpoint,this.editedItem).then((function(t){t.data;e.responseStatusColor="green",e.response="Request has been submitted succussfully.",setTimeout((function(){e.$emit("reload"),e.$emit("close-change-request-form"),e.response="",e.remarks="",e.responseStatusColor=""}),2e3)})).catch((function(t){var n=t.response;if(!n)return!1;var l=n.status,data=n.data,o=n.statusText;e.response=422==l?data.message:o,e.responseStatusColor="red"}))},getCurrentDateTime:function(){var e=new Date,t=e.getFullYear(),n=String(e.getMonth()+1).padStart(2,"0"),l=String(e.getDate()).padStart(2,"0"),o=String(e.getHours()).padStart(2,"0"),r=String(e.getMinutes()).padStart(2,"0"),d=String(e.getSeconds()).padStart(2,"0");return"".concat(t,"-").concat(n,"-").concat(l," ").concat(o,":").concat(r,":").concat(d)}}}),w=n(116),component=Object(w.a)(h,(function(){var e=this,t=e._self._c;return t(r.a,[t(x.a,[t(o.a,{attrs:{cols:"12"}},[t(f.a,{attrs:{dense:"",outlined:"","hide-details":"",items:e.request_types,"item-text":"text","item-value":"value",label:"Request Type"},model:{value:e.editedItem.request_type,callback:function(t){e.$set(e.editedItem,"request_type",t)},expression:"editedItem.request_type"}})],1),e._v(" "),t(o.a,{attrs:{cols:"12"}},[t(v.a,{attrs:{"close-on-content-click":!1,"nudge-right":40,transition:"scale-transition","offset-y":"","min-width":"auto"},scopedSlots:e._u([{key:"activator",fn:function(n){var l=n.on,o=n.attrs;return[t(c.a,e._g(e._b({attrs:{dense:"",outlined:"","hide-details":"",label:"From",readonly:""},model:{value:e.editedItem.from_date,callback:function(t){e.$set(e.editedItem,"from_date",t)},expression:"editedItem.from_date"}},"v-text-field",o,!1),l))]}}]),model:{value:e.menu1,callback:function(t){e.menu1=t},expression:"menu1"}},[e._v(" "),t(d.a,{on:{input:function(t){e.menu1=!1}},model:{value:e.editedItem.from_date,callback:function(t){e.$set(e.editedItem,"from_date",t)},expression:"editedItem.from_date"}})],1)],1),e._v(" "),t(o.a,{attrs:{cols:"12"}},[t(v.a,{attrs:{"close-on-content-click":!1,"nudge-right":40,transition:"scale-transition","offset-y":"","min-width":"auto"},scopedSlots:e._u([{key:"activator",fn:function(n){var l=n.on,o=n.attrs;return[t(c.a,e._g(e._b({attrs:{dense:"",outlined:"","hide-details":"",label:"To",readonly:""},model:{value:e.editedItem.to_date,callback:function(t){e.$set(e.editedItem,"to_date",t)},expression:"editedItem.to_date"}},"v-text-field",o,!1),l))]}}]),model:{value:e.menu2,callback:function(t){e.menu2=t},expression:"menu2"}},[e._v(" "),t(d.a,{on:{input:function(t){e.menu2=!1}},model:{value:e.editedItem.to_date,callback:function(t){e.$set(e.editedItem,"to_date",t)},expression:"editedItem.to_date"}})],1)],1),e._v(" "),t(o.a,{attrs:{cols:"12"}},[t(_.a,{attrs:{rows:"2",dense:"",outlined:"","hide-details":"",label:"Remarks"},model:{value:e.editedItem.remarks,callback:function(t){e.$set(e.editedItem,"remarks",t)},expression:"editedItem.remarks"}})],1),e._v(" "),t(o.a,{attrs:{cols:"12"}},[e.response?t("p",{class:"".concat(e.responseStatusColor,"--text")},[e._v("\n        "+e._s(e.response)+"\n      ")]):e._e(),e._v(" "),t(l.a,{staticClass:"indigo",attrs:{block:"",dark:""},on:{click:e.submit}},[e._v("Submit")])],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports},903:function(e,t,n){var content=n(904);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(22).default)("c54b7bb4",content,!0,{sourceMap:!1})},904:function(e,t,n){var l=n(21)((function(i){return i[1]}));l.push([e.i,".theme--light.v-textarea.v-text-field--solo-inverted.v-input--is-focused textarea{color:#fff}.theme--light.v-textarea.v-text-field--solo-inverted.v-input--is-focused textarea::-moz-placeholder{color:hsla(0,0%,100%,.5)}.theme--light.v-textarea.v-text-field--solo-inverted.v-input--is-focused textarea::placeholder{color:hsla(0,0%,100%,.5)}.theme--dark.v-textarea.v-text-field--solo-inverted.v-input--is-focused textarea{color:rgba(0,0,0,.87)}.theme--dark.v-textarea.v-text-field--solo-inverted.v-input--is-focused textarea::-moz-placeholder{color:rgba(0,0,0,.38)}.theme--dark.v-textarea.v-text-field--solo-inverted.v-input--is-focused textarea::placeholder{color:rgba(0,0,0,.38)}.v-textarea textarea{align-self:stretch;flex:1 1 auto;line-height:1.75rem;max-width:100%;min-height:32px;outline:none;padding:0;width:100%}.v-textarea .v-text-field__prefix,.v-textarea .v-text-field__suffix{align-self:start;padding-top:2px}.v-textarea.v-text-field--box .v-text-field__prefix,.v-textarea.v-text-field--box textarea,.v-textarea.v-text-field--enclosed .v-text-field__prefix,.v-textarea.v-text-field--enclosed textarea{margin-top:24px}.v-textarea.v-text-field--box.v-text-field--outlined:not(.v-input--dense) .v-text-field__prefix,.v-textarea.v-text-field--box.v-text-field--outlined:not(.v-input--dense) .v-text-field__suffix,.v-textarea.v-text-field--box.v-text-field--outlined:not(.v-input--dense) textarea,.v-textarea.v-text-field--box.v-text-field--single-line:not(.v-input--dense) .v-text-field__prefix,.v-textarea.v-text-field--box.v-text-field--single-line:not(.v-input--dense) .v-text-field__suffix,.v-textarea.v-text-field--box.v-text-field--single-line:not(.v-input--dense) textarea,.v-textarea.v-text-field--enclosed.v-text-field--outlined:not(.v-input--dense) .v-text-field__prefix,.v-textarea.v-text-field--enclosed.v-text-field--outlined:not(.v-input--dense) .v-text-field__suffix,.v-textarea.v-text-field--enclosed.v-text-field--outlined:not(.v-input--dense) textarea,.v-textarea.v-text-field--enclosed.v-text-field--single-line:not(.v-input--dense) .v-text-field__prefix,.v-textarea.v-text-field--enclosed.v-text-field--single-line:not(.v-input--dense) .v-text-field__suffix,.v-textarea.v-text-field--enclosed.v-text-field--single-line:not(.v-input--dense) textarea{margin-top:10px}.v-textarea.v-text-field--box.v-text-field--outlined:not(.v-input--dense) .v-label,.v-textarea.v-text-field--box.v-text-field--single-line:not(.v-input--dense) .v-label,.v-textarea.v-text-field--enclosed.v-text-field--outlined:not(.v-input--dense) .v-label,.v-textarea.v-text-field--enclosed.v-text-field--single-line:not(.v-input--dense) .v-label{top:18px}.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-text-field__prefix,.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-text-field__suffix,.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense textarea,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-text-field__prefix,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-text-field__suffix,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense textarea,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-text-field__prefix,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-text-field__suffix,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense textarea,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-text-field__prefix,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-text-field__suffix,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense textarea{margin-top:6px}.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-input__append-inner,.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-input__append-outer,.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-input__prepend-inner,.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-input__prepend-outer,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-input__append-inner,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-input__append-outer,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-input__prepend-inner,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-input__prepend-outer,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-input__append-inner,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-input__append-outer,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-input__prepend-inner,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-input__prepend-outer,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-input__append-inner,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-input__append-outer,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-input__prepend-inner,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-input__prepend-outer{align-self:flex-start;margin-top:8px}.v-textarea.v-text-field--solo{align-items:flex-start}.v-textarea.v-text-field--solo .v-input__control textarea{caret-color:auto}.v-textarea.v-text-field--solo .v-input__append-inner,.v-textarea.v-text-field--solo .v-input__append-outer,.v-textarea.v-text-field--solo .v-input__prepend-inner,.v-textarea.v-text-field--solo .v-input__prepend-outer{align-self:flex-start;margin-top:12px}.v-application--is-ltr .v-textarea.v-text-field--solo .v-input__append-inner{padding-left:12px}.v-application--is-rtl .v-textarea.v-text-field--solo .v-input__append-inner{padding-right:12px}.v-textarea--auto-grow textarea{overflow:hidden}.v-textarea--no-resize textarea{resize:none}.v-textarea.v-text-field--enclosed .v-text-field__slot{align-self:stretch}.v-application--is-ltr .v-textarea.v-text-field--enclosed .v-text-field__slot{margin-right:-12px}.v-application--is-rtl .v-textarea.v-text-field--enclosed .v-text-field__slot{margin-left:-12px}.v-application--is-ltr .v-textarea.v-text-field--enclosed .v-text-field__slot textarea{padding-right:12px}.v-application--is-rtl .v-textarea.v-text-field--enclosed .v-text-field__slot textarea{padding-left:12px}",""]),l.locals={},e.exports=l},954:function(e,t,n){"use strict";n(12),n(14),n(13),n(6),n(17),n(11),n(18);var l=n(3),o=(n(28),n(55),n(903),n(214)),r=n(8);function d(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}var v=Object(r.a)(o.a);t.a=v.extend({name:"v-textarea",props:{autoGrow:Boolean,noResize:Boolean,rowHeight:{type:[Number,String],default:24,validator:function(e){return!isNaN(parseFloat(e))}},rows:{type:[Number,String],default:5,validator:function(e){return!isNaN(parseInt(e,10))}}},computed:{classes:function(){return function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(t){Object(l.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({"v-textarea":!0,"v-textarea--auto-grow":this.autoGrow,"v-textarea--no-resize":this.noResizeHandle},o.a.options.computed.classes.call(this))},noResizeHandle:function(){return this.noResize||this.autoGrow}},watch:{autoGrow:function(e){var t=this;this.$nextTick((function(){var n;e?t.calculateInputHeight():null===(n=t.$refs.input)||void 0===n||n.style.removeProperty("height")}))},lazyValue:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)},rowHeight:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)}},mounted:function(){var e=this;setTimeout((function(){e.autoGrow&&e.calculateInputHeight()}),0)},methods:{calculateInputHeight:function(){var input=this.$refs.input;if(input){input.style.height="0";var e=input.scrollHeight,t=parseInt(this.rows,10)*parseFloat(this.rowHeight);input.style.height=Math.max(t,e)+"px"}},genInput:function(){var input=o.a.options.methods.genInput.call(this);return input.tag="textarea",delete input.data.attrs.type,input.data.attrs.rows=this.rows,input},onInput:function(e){o.a.options.methods.onInput.call(this,e),this.autoGrow&&this.calculateInputHeight()},onKeyDown:function(e){this.isFocused&&13===e.keyCode&&e.stopPropagation(),this.$emit("keydown",e)}}})}}]);