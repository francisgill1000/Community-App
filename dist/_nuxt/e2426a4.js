(window.webpackJsonp=window.webpackJsonp||[]).push([[287,186,204],{1304:function(t,e,r){var content=r(1473);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(21).default)("6137b839",content,!0,{sourceMap:!1})},1472:function(t,e,r){"use strict";r(1304)},1473:function(t,e,r){var n=r(20)((function(i){return i[1]}));n.push([t.i,'table[data-v-1bcb3eac]{font-family:arial,sans-serif}tr[data-v-1bcb3eac]:nth-child(2n){background-color:#e9e9e9}td[data-v-1bcb3eac],th[data-v-1bcb3eac]{border:1px solid #ddd;padding:5px}.chk-align[data-v-1bcb3eac]{margin-left:98px!important;margin-top:8px!important;text-align:center!important}*[data-v-1bcb3eac]{box-sizing:border-box}body>div[data-v-1bcb3eac]{display:flex;font-family:"Roboto",sans-serif;min-height:100vh}.table_responsive[data-v-1bcb3eac]{background-color:hsla(0,0%,94%,.2);border:1px solid #00bcd4;border-radius:4px;margin:auto;max-width:900px;overflow:auto;padding:15px}table[data-v-1bcb3eac]{border-collapse:collapse;color:#444;font-size:13px;white-space:nowrap;width:100%}table>thead[data-v-1bcb3eac]{background-color:#00bcd4;color:#fff}table>thead th[data-v-1bcb3eac]{padding:15px}table td[data-v-1bcb3eac],table th[data-v-1bcb3eac]{border:1px solid rgba(0,0,0,.09);padding:10px 15px}table>tbody>tr>td>img[data-v-1bcb3eac]{border:4px solid #fff;border-radius:50%;box-shadow:0 2px 6px rgba(0,0,0,.2);display:inline-block;height:60px;-o-object-fit:cover;object-fit:cover;width:60px}.action_btn[data-v-1bcb3eac]{display:flex;gap:10px;justify-content:center}.action_btn>a[data-v-1bcb3eac]{background:#fff;border:1px solid;border-radius:3px;color:#444;display:inline-block;font-weight:700;padding:7px 20px;-webkit-text-decoration:none;text-decoration:none;transition:.3s ease-in-out}.action_btn>a[data-v-1bcb3eac]:first-child{border-color:#26a69a}.action_btn>a[data-v-1bcb3eac]:nth-child(2){border-color:orange}.action_btn>a[data-v-1bcb3eac]:hover{box-shadow:0 3px 8px rgba(0,0,0,.2)}table>tbody>tr[data-v-1bcb3eac]{background-color:#fff;transition:.3s ease-in-out}table>tbody>tr[data-v-1bcb3eac]:nth-child(2n){background-color:#eee}table>tbody>tr[data-v-1bcb3eac]:hover{filter:drop-shadow(0 2px 6px rgba(0,0,0,.13333))}',""]),n.locals={},t.exports=n},1626:function(t,e,r){"use strict";r.r(e);var n=r(117),o=r(138),c=r(79),l=r(541),d=r(539),h=r(903),f=r(964),v=r(116),m=r(538),_=r(920),x=r(900),y=r(360),w=(r(31),r(58),r(70),r(57),{components:{Back:r(996).default},data:function(){return{role_id:"",search:"",permission_ids:[],permissions:[],msg:"",snackbar:!1,Rules:[function(t){return!!t||"This field is required"}],errors:[],roles:[],just_ids:!1}},created:function(){var t=this,e={params:{company_id:this.$auth.user.company_id}};this.$axios.get("assign-permission/nars",e).then((function(e){var data=e.data;return t.roles=data})).catch((function(t){return console.log(t)})),this.getPermissions()},methods:{capsTitle:function(t){return t.replace(/[^a-z]/g," ").replace(/\b\w/g,(function(t){return t.toUpperCase()}))},can:function(t){return this.$pagePermission.can(t,this)},getPermissions:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"dropDownList";this.$axios.get(e).then((function(e){var data=e.data;t.permissions=data.data})).catch((function(t){return console.log(t)}))},setAllIds:function(){this.permission_ids=this.just_ids?this.permissions.map((function(t){return t.id})):[]},searchIt:function(t){0==t.length?this.getPermissions():t.length>2&&this.getPermissions("permission/search/".concat(t)),this.permission_ids=[]},save:function(){var t=this;this.errors=[];var e={role_id:this.role_id,permission_ids:this.permission_ids,company_id:this.$auth.user.company_id};this.$axios.post("assign-permission",e).then((function(e){var data=e.data;data.status?(t.msg="Permissions has been assigned",t.snackbar=!0,setTimeout((function(){return t.$router.push("/assign_permission")}),2e3)):t.errors=data.errors}))}}}),k=w,O=(r(1472),r(60)),component=Object(O.a)(k,(function(){var t=this,e=t._self._c;return t.can("assign_permission_accesss")?e("div",[e("div",{staticClass:"text-center ma-2"},[e(x.a,{attrs:{top:"top",color:"secondary",elevation:"24"},model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v("\n      "+t._s(t.msg)+"\n    ")])],1),t._v(" "),e("Back",{attrs:{color:"primary"}}),t._v(" "),e(o.a,{staticClass:"mt-2",attrs:{elevation:"0"},scopedSlots:t._u([{key:"item.action",fn:function(r){var n=r.item;return[e(v.a,{staticClass:"mr-2",attrs:{small:""},on:{click:function(e){return t.editItem(n)}}},[t._v(" mdi-pencil ")]),t._v(" "),e(v.a,{attrs:{small:""},on:{click:function(e){return t.deleteItem(n)}}},[t._v(" mdi-delete ")])]}}],null,!1,3864138342)},[e(f.a,{ref:"form",attrs:{"lazy-validation":""}},[e(c.c,[e(h.a,[e(m.a,[e(d.a,[e("div",{staticClass:"display-1 pa-2"},[t._v("Assign Permissions")])]),t._v(" "),e(d.a,{attrs:{cols:"12"}},[e(m.a,[e(d.a,{attrs:{md:"4"}},[e(_.a,{attrs:{rules:t.Rules,items:t.roles,"item-value":"id","item-text":"name",placeholder:"Role*",outlined:"",dense:""},model:{value:t.role_id,callback:function(e){t.role_id=e},expression:"role_id"}}),t._v(" "),t.errors&&t.errors.role_id?e("span",{staticClass:"red--text"},[t._v("\n                    "+t._s(t.errors.role_id[0])+"\n                  ")]):t._e()],1)],1),t._v(" "),e("table",{staticClass:"mb-15"},[e("tr",{staticStyle:{"text-align":"center"}},[e("th",{staticStyle:{width:"600px","text-align":"center",padding:"5px 0 !important"}},[t._v("\n                    Module\n                  ")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("Access")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("View")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("Create")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("Edit")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("Delete")])]),t._v(" "),t._l(t.permissions,(function(r,n){return e("tr",{key:n},[e("th",{staticClass:"ps-3"},[t._v(t._s(t.capsTitle(n)))]),t._v(" "),t._l(r,(function(r,n){return e("th",{key:n,staticStyle:{"text-align":"center !important"}},[e(l.a,{staticClass:"pt-0 py-1 chk-align",attrs:{value:r.id,"hide-details":!0},model:{value:t.permission_ids,callback:function(e){t.permission_ids=e},expression:"permission_ids"}})],1)}))],2)}))],2)],1),t._v(" "),e(d.a,{attrs:{cols:"12"}},[t.errors&&t.errors.permission_ids?e("span",{staticClass:"red--text"},[t._v("\n                "+t._s(t.errors.permission_ids[0])+"\n              ")]):t._e()])],1)],1),t._v(" "),e(c.a,[e(y.a),t._v(" "),t.can("assign_permission_create")?e(n.a,{staticClass:"mr-4",attrs:{dark:"",small:"",color:"primary"},on:{click:t.save}},[t._v("\n            Submit\n          ")]):t._e()],1)],1)],1)],1)],1):e("NoAccess")}),[],!1,null,"1bcb3eac",null);e.default=component.exports;installComponents(component,{NoAccess:r(909).default})},909:function(t,e,r){"use strict";r.r(e);var n=r(60),component=Object(n.a)({},(function(){this._self._c;return this._m(0)}),[function(){var t=this._self._c;return t("div",{staticClass:"text-center",staticStyle:{"margin-top":"25%"}},[t("b",[this._v("No Access")])])}],!1,null,null,null);e.default=component.exports},964:function(t,e,r){"use strict";var n=r(2),o=(r(41),r(61),r(363),r(11),r(6),r(9),r(57),r(103),r(12),r(14),r(18),r(19),r(8)),c=r(121),l=r(155);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function h(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(o.a)(c.a,Object(l.b)("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(input){var t=this,e=function(input){return input.$watch("hasError",(function(e){t.$set(t.errorBag,input._uid,e)}),{immediate:!0})},r={_uid:input._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?r.shouldValidate=input.$watch("shouldValidate",(function(n){n&&(t.errorBag.hasOwnProperty(input._uid)||(r.valid=e(input)))})):r.valid=e(input),r},validate:function(){return 0===this.inputs.filter((function(input){return!input.validate(!0)})).length},reset:function(){this.inputs.forEach((function(input){return input.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(input){return input.resetValidation()})),this.resetErrorBag()},register:function(input){this.inputs.push(input),this.watchers.push(this.watchInput(input))},unregister:function(input){var t=this.inputs.find((function(i){return i._uid===input._uid}));if(t){var e=this.watchers.find((function(i){return i._uid===t._uid}));e&&(e.valid(),e.shouldValidate()),this.watchers=this.watchers.filter((function(i){return i._uid!==t._uid})),this.inputs=this.inputs.filter((function(i){return i._uid!==t._uid})),this.$delete(this.errorBag,t._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:h({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},996:function(t,e,r){"use strict";r.r(e);var n={props:["color"],methods:{goBack:function(){window.history.back()}}},o=r(60),component=Object(o.a)(n,(function(){return(0,this._self._c)("div")}),[],!1,null,null,null);e.default=component.exports}}]);