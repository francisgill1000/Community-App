(window.webpackJsonp=window.webpackJsonp||[]).push([[405],{1272:function(t,e,r){var content=r(1438);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(22).default)("0fd07e70",content,!0,{sourceMap:!1})},1437:function(t,e,r){"use strict";r(1272)},1438:function(t,e,r){var o=r(21)((function(i){return i[1]}));o.push([t.i,".v-text-field--outlined[data-v-65ebe3b6] fieldset{border-color:#fff}.v-list__group__header__prepend-icon .v-icon[data-v-65ebe3b6]{color:red}.hidden-sm-and-down .v-icon[data-v-65ebe3b6],.v-input__icon[data-v-65ebe3b6]{color:#fff!important}.v-text-field--rounded[data-v-65ebe3b6]{border-radius:10px}.text-white[data-v-65ebe3b6]{color:#fff}.v-label[data-v-65ebe3b6]{color:#fff!important}.bgimage[data-v-65ebe3b6]{background-size:cover;min-height:600px}.v-btn[data-v-65ebe3b6]{text-transform:inherit!important}.v-input__control .v-label[data-v-65ebe3b6]{color:red}.btntext[data-v-65ebe3b6]{color:#6946dd;font-size:22px;font-weight:700}@media (min-width:768px){.gradient-form[data-v-65ebe3b6]{height:100vh!important}}@media (min-width:769px){.primary[data-v-65ebe3b6]{border-bottom-right-radius:.3rem;border-top-right-radius:.3rem}}",""]),o.locals={},t.exports=o},1588:function(t,e,r){"use strict";r.r(e);var o=r(870),n=r(114),c=r(936),l=r(873),d=r(214),f={layout:"login",auth:!1,data:function(){return{logo:"/ideaHRMS-final-blue.svg",loading:!1,snackbar:!1,response:"",show_password:!1,show_password_confirm:!1,emailView:!0,codeView:!1,newPasswordView:!1,go_login_msg:!1,email:"",code:"",password:"",password_confirmation:"",msg:"",errors:[]}},methods:{reset_password:function(){var t=this,e={email:this.email};this.loading=!0,this.$axios.post("/reset-password",e).then((function(e){var data=e.data;t.loading=!1,data.status?(t.snackbar=!0,t.response=data.message,t.emailView=!1,t.codeView=!0):(t.errors=data.errors,t.msg=data.message)})).catch((function(t){return console.log(t)}))},check_code:function(){var t=this,e={code:this.code,email:this.email};this.loading=!0,this.$axios.post("/check-code",e).then((function(e){var data=e.data;t.loading=!1,data.status?(t.msg=null,t.newPasswordView=!0,t.emailView=!1,t.codeView=!1):(t.errors=data.errors,t.msg=data.message)})).catch((function(t){return console.log(t)}))},change_new_password:function(){var t=this,e={email:this.email,password:this.password,password_confirmation:this.password_confirmation};this.loading=!0,this.$axios.post("/new-password",e).then((function(e){var data=e.data;t.loading=!1,data.status?(t.snackbar=!0,t.response=data.message,t.$router.push("/login")):(t.errors=data.errors,t.msg=data.message)})).catch((function(t){return console.log(t)}))}}},m=(r(1437),r(116)),component=Object(m.a)(f,(function(){var t=this,e=t._self._c;return e(o.a,[e(l.a,{attrs:{top:"top",color:"secondary",elevation:"24"},model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v("\n    "+t._s(t.response)+"\n  ")]),t._v(" "),e("section",{staticClass:"h-100 gradient-form",staticStyle:{"background-color":"#eee"}},[e("div",{staticClass:"container py-5 h-100"},[e("div",{staticClass:"row d-flex justify-content-center align-items-center h-100"},[e("div",{staticClass:"col-xl-8"},[e("div",{staticClass:"card1 rounded-3 text-black"},[e("div",{staticClass:"row g-0"},[e("div",{staticClass:"col-lg-6",staticStyle:{"background-color":"#6946dd"}},[e("div",{staticClass:"text-center",staticStyle:{height:"100px",color:"#fff"}}),t._v(" "),e("div",{staticClass:"card-body p-md-5 mx-md-4",staticStyle:{color:"#fff"}},[e("h2",{staticClass:"pb-7"},[t._v("Welcome To MyHome2Cloud")]),t._v(" "),e("h4",{staticClass:"mt-2 mb-5 pb-1"},[t._v("Reset Password")]),t._v(" "),t.emailView?e(c.a,{ref:"form",attrs:{method:"post"}},[e("div",{staticClass:"form-outline"},[e(d.a,{attrs:{dark:"",color:"white--text",rounded:"","hide-details":!1,id:"form2Example11",placeholder:"Email",autofill:"false",required:"",dense:"",outlined:"",type:"email","prepend-inner-icon":"mdi-email",autocomplete:"false","aria-autocomplete":"none"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1),t._v(" "),e("div",{staticClass:"text-center pt-1 mb-5 pb-1"},[t.errors&&t.errors.email?e("span",{staticClass:"error--text"},[t._v(t._s(t.errors.email[0])+"\n                      ")]):t._e(),t._v(" "),t.msg?e("span",{staticClass:"error--text"},[t._v(t._s(t.msg)+" ")]):t._e(),t._v(" "),e(n.a,{staticClass:"btn btn-black btn-block white mt-1 mb-3 p-4 btntext",attrs:{loading:t.loading},on:{click:t.reset_password}},[t._v("\n                        Reset the Password\n                      ")])],1),t._v(" "),e("div",{staticClass:"text-right"},[e("nuxt-link",{staticClass:"text-muted text-right",attrs:{to:"/login"}},[t._v("login")])],1),t._v(" "),e("div",{staticClass:"d-flex align-items-center justify-content-center pb-4"})]):t._e(),t._v(" "),t.codeView?e(c.a,{ref:"form",attrs:{method:"post"}},[e("label",{attrs:{for:""}},[t._v("Code")]),t._v(" "),e("div",{staticClass:"form-outline mb-4"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.code,expression:"code"}],staticClass:"form-control",staticStyle:{border:"1px solid"},attrs:{type:"number",id:"form2Example11",placeholder:"master@erp.com"},domProps:{value:t.code},on:{input:function(e){e.target.composing||(t.code=e.target.value)}}})]),t._v(" "),e("div",{staticClass:"text-center pt-1 mb-5 pb-1"},[t.errors&&t.errors.code?e("span",{staticClass:"error--text"},[t._v(t._s(t.errors.code[0])+"\n                      ")]):t._e(),t._v(" "),t.msg?e("span",{staticClass:"error--text"},[t._v(t._s(t.msg)+" ")]):t._e(),t._v(" "),e(n.a,{staticClass:"btn btn-primary btn-block text-white fa-lg primary mt-1 mb-3",attrs:{loading:t.loading},on:{click:t.check_code}},[t._v("\n                        Submit\n                      ")])],1),t._v(" "),e("div",{staticClass:"d-flex align-items-center justify-content-center pb-4"},[e("p",{staticStyle:{cursor:"pointer"},on:{click:t.reset_password}},[t._v("\n                        Resend code\n                      ")])])]):t._e(),t._v(" "),t.newPasswordView?e(c.a,{ref:"form",attrs:{method:"post"}},[e("div",{staticClass:"form-outline mb-4"},[e("label",{staticClass:"col-form-label"},[t._v("New Password\n                        "),e("span",{staticClass:"text-danger"},[t._v("*")])]),t._v(" "),e(d.a,{staticClass:"input-group--focused",attrs:{dense:"",outlined:"","append-icon":t.show_password?"mdi-eye":"mdi-eye-off",type:t.show_password?"text":"password",error:t.errors.password,"error-messages":t.errors&&t.errors.password?t.errors.password[0]:""},on:{"click:append":function(e){t.show_password=!t.show_password}},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),t._v(" "),e("label",{staticClass:"col-form-label"},[t._v("Confirm Password\n                        "),e("span",{staticClass:"text-danger"},[t._v("*")])]),t._v(" "),e(d.a,{staticClass:"input-group--focused",attrs:{dense:"",outlined:"","append-icon":t.show_password_confirm?"mdi-eye":"mdi-eye-off",type:t.show_password_confirm?"text":"password",error:t.errors.show_password_confirm,"error-messages":t.errors&&t.errors.show_password_confirm?t.errors.show_password_confirm[0]:""},on:{"click:append":function(e){t.show_password_confirm=!t.show_password_confirm}},model:{value:t.password_confirmation,callback:function(e){t.password_confirmation=e},expression:"password_confirmation"}})],1),t._v(" "),e("div",{staticClass:"text-center pt-1 mb-5 pb-1"},[t.errors&&t.errors.code?e("span",{staticClass:"error--text"},[t._v(t._s(t.errors.code[0])+"\n                      ")]):t._e(),t._v(" "),t.msg?e("span",{staticClass:"error--text"},[t._v(t._s(t.msg)+" ")]):t._e(),t._v(" "),e(n.a,{staticClass:"btn btn-primary btn-block text-white fa-lg primary mt-1 mb-3",attrs:{loading:t.loading},on:{click:t.change_new_password}},[t._v("\n                        Submit\n                      ")])],1),t._v(" "),e("div",{staticClass:"d-flex align-items-center justify-content-center pb-4"})]):t._e()],1)]),t._v(" "),e("div",{staticClass:"col-lg-6 d-flex align-items-center bgimage"})])])])])])])],1)}),[],!1,null,"65ebe3b6",null);e.default=component.exports},936:function(t,e,r){"use strict";var o=r(3),n=(r(41),r(61),r(351),r(13),r(6),r(11),r(55),r(99),r(12),r(14),r(17),r(18),r(8)),c=r(118),l=r(148);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(n.a)(c.a,Object(l.b)("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(input){var t=this,e=function(input){return input.$watch("hasError",(function(e){t.$set(t.errorBag,input._uid,e)}),{immediate:!0})},r={_uid:input._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?r.shouldValidate=input.$watch("shouldValidate",(function(o){o&&(t.errorBag.hasOwnProperty(input._uid)||(r.valid=e(input)))})):r.valid=e(input),r},validate:function(){return 0===this.inputs.filter((function(input){return!input.validate(!0)})).length},reset:function(){this.inputs.forEach((function(input){return input.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(input){return input.resetValidation()})),this.resetErrorBag()},register:function(input){this.inputs.push(input),this.watchers.push(this.watchInput(input))},unregister:function(input){var t=this.inputs.find((function(i){return i._uid===input._uid}));if(t){var e=this.watchers.find((function(i){return i._uid===t._uid}));e&&(e.valid(),e.shouldValidate()),this.watchers=this.watchers.filter((function(i){return i._uid!==t._uid})),this.inputs=this.inputs.filter((function(i){return i._uid!==t._uid})),this.$delete(this.errorBag,t._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:f({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})}}]);