(window.webpackJsonp=window.webpackJsonp||[]).push([[169],{1258:function(e,t,r){"use strict";r.r(t);var o=r(114),n=r(936),c=r(873),l=r(214),d={layout:"login",auth:!1,data:function(){return{successView:!0,successMessage:"",loading:!1,snackbar:!1,response:"",show_password:!1,show_password_confirm:!1,emailView:!0,emailMsg:"",codeView:!1,newPasswordView:!1,go_login_msg:!1,email:"",code:"",password:"",password_confirmation:"",msg:"",errors:[],resetLoading:!1}},methods:{reset_password:function(){var e=this,t={email:this.email};this.resetLoading=!0,this.emailMsg="",this.$axios.post("/reset-password",t).then((function(t){var data=t.data;e.resetLoading=!1,data.status?(e.errors=[],e.snackbar=!0,e.response=data.message,e.emailView=!0,e.codeView=!0):(e.errors=data.errors,e.emailMsg=data.message)})).catch((function(e){return console.log(e)}))},check_code:function(){var e=this,t={code:this.code,email:this.email};this.loading=!0,this.emailMsg="",this.$axios.post("/check-code",t).then((function(t){var data=t.data;e.loading=!1,data.status?(e.errors=[],e.msg="",e.newPasswordView=!0):(e.errors=data.errors,e.msg=data.message)})).catch((function(e){return console.log(e)}))},change_new_password:function(){var e=this,t={email:this.email,password:this.password,password_confirmation:this.password_confirmation};this.loading=!0,this.emailMsg="",this.$axios.post("/new-password",t).then((function(t){var data=t.data;e.loading=!1,data.status?(e.errors=[],e.snackbar=!0,e.response=data.message,e.$router.push("/login"),e.newPasswordView=!1,e.emailView=!1,e.codeView=!1,e.success=!0,e.successMessage="New Password is successfully Updated"):(e.errors=data.errors,e.emailMsg=data.message)})).catch((function(e){return console.log(e)}))}}},m=r(116),component=Object(m.a)(d,(function(){var e=this,t=e._self._c;return t("div",[t(c.a,{attrs:{top:"top",color:"secondary",elevation:"24"},model:{value:e.snackbar,callback:function(t){e.snackbar=t},expression:"snackbar"}},[e._v("\n    "+e._s(e.response)+"\n  ")]),e._v(" "),t("section",{staticClass:""},[t("div",{staticClass:"container py-5"},[t("div",{staticClass:"row d-flex justify-content-center align-items-center"},[t("div",{staticClass:"col-xl-12"},[e.emailView?t(n.a,{ref:"form",attrs:{method:"post"}},[t("div",{staticClass:"form-outline"},[t(l.a,{attrs:{label:"Email",placeholder:"Email",autofill:"false",required:"",dense:"",outlined:"",type:"email","prepend-inner-icon":"mdi-email",autocomplete:"false","aria-autocomplete":"none"},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}})],1),e._v(" "),t("div",{staticClass:"text-center pt-1 mb-5 pb-1"},[e.errors&&e.errors.email?t("span",{staticClass:"error--text"},[e._v(e._s(e.errors.email[0])+"\n              ")]):e._e(),e._v(" "),e.emailMsg?t("div",{staticClass:"error--text"},[e._v(e._s(e.emailMsg))]):e._e(),e._v(" "),t(o.a,{staticClass:"primary mt-1 mb-3 p-4",attrs:{small:"",loading:e.resetLoading},on:{click:e.reset_password}},[e._v("\n                Reset the Password\n              ")])],1),e._v(" "),t("div",{staticClass:"d-flex align-items-center justify-content-center pb-4"})]):e._e(),e._v(" "),e.codeView?t(n.a,{ref:"form",attrs:{method:"post"}},[t("span",[t(l.a,{attrs:{label:"Verification Code",dense:"",outlined:"",type:"number",placeholder:""},model:{value:e.code,callback:function(t){e.code=t},expression:"code"}})],1),e._v(" "),t("span",{staticClass:"text-center"},[t(o.a,{staticClass:"primary",attrs:{small:"",dense:""},on:{click:e.reset_password}},[e._v("\n                Resend code\n              ")]),e._v(" "),t(o.a,{staticClass:"primary",staticStyle:{float:"right"},attrs:{dense:"",small:"",loading:e.loading},on:{click:e.check_code}},[e._v("\n                Verify Code\n              ")])],1),e._v(" "),t("div",{staticClass:"text-center pt-1 mb-5 pb-1"},[e.errors&&e.errors.code?t("span",{staticClass:"error--text"},[e._v(e._s(e.errors.code[0])+"\n              ")]):e._e(),e._v(" "),e.msg?t("span",{staticClass:"error--text"},[e._v(e._s(e.msg)+" ")]):e._e()])]):e._e(),e._v(" "),e.newPasswordView?t(n.a,{ref:"form",attrs:{method:"post"}},[t("span",[e._v("Enter new Password Details"),t("br"),e._v("\n              (Uppercase and minimim 6 letters)")]),e._v(" "),t("div",{staticClass:"form-outline mb-4 pt-5"},[t(l.a,{staticClass:"input-group--focused",attrs:{label:"New Password",dense:"",outlined:"","append-icon":e.show_password?"mdi-eye":"mdi-eye-off",type:e.show_password?"text":"password",error:e.errors.password,"error-messages":e.errors&&e.errors.password?e.errors.password[0]:""},on:{"click:append":function(t){e.show_password=!e.show_password}},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),e._v(" "),t(l.a,{staticClass:"input-group--focused",attrs:{label:"Confirm Password",dense:"",outlined:"","append-icon":e.show_password_confirm?"mdi-eye":"mdi-eye-off",type:e.show_password_confirm?"text":"password",error:e.errors.show_password_confirm,"error-messages":e.errors&&e.errors.show_password_confirm?e.errors.show_password_confirm[0]:""},on:{"click:append":function(t){e.show_password_confirm=!e.show_password_confirm}},model:{value:e.password_confirmation,callback:function(t){e.password_confirmation=t},expression:"password_confirmation"}})],1),e._v(" "),t("div",{staticClass:"text-center pt-1 mb-5 pb-1"},[e.errors&&e.errors.code?t("span",{staticClass:"error--text"},[e._v(e._s(e.errors.code[0])+"\n              ")]):e._e(),e._v(" "),e.msg?t("span",{staticClass:"error--text"},[e._v(e._s(e.msg)+" ")]):e._e(),e._v(" "),t(o.a,{staticClass:"btn btn-primary btn-block text-white fa-lg primary mt-1 mb-3",attrs:{dense:"",loading:e.loading},on:{click:e.change_new_password}},[e._v("\n                Update New Password\n              ")])],1),e._v(" "),t("div",{staticClass:"d-flex align-items-center justify-content-center pb-4"})]):e._e(),e._v(" "),t("div",{staticClass:"text--green",staticStyle:{color:"green","min-height":"200px"},model:{value:e.successView,callback:function(t){e.successView=t},expression:"successView"}},[e._v("\n            "+e._s(e.successMessage)+"\n          ")])],1)])])])],1)}),[],!1,null,null,null);t.default=component.exports},936:function(e,t,r){"use strict";var o=r(3),n=(r(41),r(61),r(351),r(13),r(6),r(11),r(55),r(99),r(12),r(14),r(17),r(18),r(8)),c=r(118),l=r(148);function d(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function m(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}t.a=Object(n.a)(c.a,Object(l.b)("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(e){var t=Object.values(e).includes(!0);this.$emit("input",!t)},deep:!0,immediate:!0}},methods:{watchInput:function(input){var e=this,t=function(input){return input.$watch("hasError",(function(t){e.$set(e.errorBag,input._uid,t)}),{immediate:!0})},r={_uid:input._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?r.shouldValidate=input.$watch("shouldValidate",(function(o){o&&(e.errorBag.hasOwnProperty(input._uid)||(r.valid=t(input)))})):r.valid=t(input),r},validate:function(){return 0===this.inputs.filter((function(input){return!input.validate(!0)})).length},reset:function(){this.inputs.forEach((function(input){return input.reset()})),this.resetErrorBag()},resetErrorBag:function(){var e=this;this.lazyValidation&&setTimeout((function(){e.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(input){return input.resetValidation()})),this.resetErrorBag()},register:function(input){this.inputs.push(input),this.watchers.push(this.watchInput(input))},unregister:function(input){var e=this.inputs.find((function(i){return i._uid===input._uid}));if(e){var t=this.watchers.find((function(i){return i._uid===e._uid}));t&&(t.valid(),t.shouldValidate()),this.watchers=this.watchers.filter((function(i){return i._uid!==e._uid})),this.inputs=this.inputs.filter((function(i){return i._uid!==e._uid})),this.$delete(this.errorBag,e._uid)}}},render:function(e){var t=this;return e("form",{staticClass:"v-form",attrs:m({novalidate:!0},this.attrs$),on:{submit:function(e){return t.$emit("submit",e)}}},this.$slots.default)}})}}]);