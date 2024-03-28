(window.webpackJsonp=window.webpackJsonp||[]).push([[405,171],{1266:function(t,e,n){"use strict";n.r(e);var o=n(114),r=n(936),l=n(873),c=n(214),d={layout:"login",auth:!1,data:function(){return{successView:!0,successMessage:"",loading:!1,snackbar:!1,response:"",show_password:!1,show_password_confirm:!1,emailView:!0,emailMsg:"",codeView:!1,newPasswordView:!1,go_login_msg:!1,email:"",code:"",password:"",password_confirmation:"",msg:"",errors:[],resetLoading:!1}},methods:{reset_password:function(){var t=this,e={email:this.email};this.resetLoading=!0,this.emailMsg="",this.$axios.post("/reset-password",e).then((function(e){var data=e.data;t.resetLoading=!1,data.status?(t.errors=[],t.snackbar=!0,t.response=data.message,t.emailView=!0,t.codeView=!0):(t.errors=data.errors,t.emailMsg=data.message)})).catch((function(t){return console.log(t)}))},check_code:function(){var t=this,e={code:this.code,email:this.email};this.loading=!0,this.emailMsg="",this.$axios.post("/check-code",e).then((function(e){var data=e.data;t.loading=!1,data.status?(t.errors=[],t.msg="",t.newPasswordView=!0):(t.errors=data.errors,t.msg=data.message)})).catch((function(t){return console.log(t)}))},change_new_password:function(){var t=this,e={email:this.email,password:this.password,password_confirmation:this.password_confirmation};this.loading=!0,this.emailMsg="",this.$axios.post("/new-password",e).then((function(e){var data=e.data;t.loading=!1,data.status?(t.errors=[],t.snackbar=!0,t.response=data.message,t.$router.push("/login"),t.newPasswordView=!1,t.emailView=!1,t.codeView=!1,t.success=!0,t.successMessage="New Password is successfully Updated"):(t.errors=data.errors,t.emailMsg=data.message)})).catch((function(t){return console.log(t)}))}}},h=n(116),component=Object(h.a)(d,(function(){var t=this,e=t._self._c;return e("div",[e(l.a,{attrs:{top:"top",color:"secondary",elevation:"24"},model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v("\n    "+t._s(t.response)+"\n  ")]),t._v(" "),e("section",{staticClass:""},[e("div",{staticClass:"container py-5"},[e("div",{staticClass:"row d-flex justify-content-center align-items-center"},[e("div",{staticClass:"col-xl-12"},[t.emailView?e(r.a,{ref:"form",attrs:{method:"post"}},[e("div",{staticClass:"form-outline"},[e(c.a,{attrs:{label:"Email",placeholder:"Email",autofill:"false",required:"",dense:"",outlined:"",type:"email","prepend-inner-icon":"mdi-email",autocomplete:"false","aria-autocomplete":"none"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1),t._v(" "),e("div",{staticClass:"text-center pt-1 mb-5 pb-1"},[t.errors&&t.errors.email?e("span",{staticClass:"error--text"},[t._v(t._s(t.errors.email[0])+"\n              ")]):t._e(),t._v(" "),t.emailMsg?e("div",{staticClass:"error--text"},[t._v(t._s(t.emailMsg))]):t._e(),t._v(" "),e(o.a,{staticClass:"primary mt-1 mb-3 p-4",attrs:{small:"",loading:t.resetLoading},on:{click:t.reset_password}},[t._v("\n                Reset the Password\n              ")])],1),t._v(" "),e("div",{staticClass:"d-flex align-items-center justify-content-center pb-4"})]):t._e(),t._v(" "),t.codeView?e(r.a,{ref:"form",attrs:{method:"post"}},[e("span",[e(c.a,{attrs:{label:"Verification Code",dense:"",outlined:"",type:"number",placeholder:""},model:{value:t.code,callback:function(e){t.code=e},expression:"code"}})],1),t._v(" "),e("span",{staticClass:"text-center"},[e(o.a,{staticClass:"primary",attrs:{small:"",dense:""},on:{click:t.reset_password}},[t._v("\n                Resend code\n              ")]),t._v(" "),e(o.a,{staticClass:"primary",staticStyle:{float:"right"},attrs:{dense:"",small:"",loading:t.loading},on:{click:t.check_code}},[t._v("\n                Verify Code\n              ")])],1),t._v(" "),e("div",{staticClass:"text-center pt-1 mb-5 pb-1"},[t.errors&&t.errors.code?e("span",{staticClass:"error--text"},[t._v(t._s(t.errors.code[0])+"\n              ")]):t._e(),t._v(" "),t.msg?e("span",{staticClass:"error--text"},[t._v(t._s(t.msg)+" ")]):t._e()])]):t._e(),t._v(" "),t.newPasswordView?e(r.a,{ref:"form",attrs:{method:"post"}},[e("span",[t._v("Enter new Password Details"),e("br"),t._v("\n              (Uppercase and minimim 6 letters)")]),t._v(" "),e("div",{staticClass:"form-outline mb-4 pt-5"},[e(c.a,{staticClass:"input-group--focused",attrs:{label:"New Password",dense:"",outlined:"","append-icon":t.show_password?"mdi-eye":"mdi-eye-off",type:t.show_password?"text":"password",error:t.errors.password,"error-messages":t.errors&&t.errors.password?t.errors.password[0]:""},on:{"click:append":function(e){t.show_password=!t.show_password}},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),t._v(" "),e(c.a,{staticClass:"input-group--focused",attrs:{label:"Confirm Password",dense:"",outlined:"","append-icon":t.show_password_confirm?"mdi-eye":"mdi-eye-off",type:t.show_password_confirm?"text":"password",error:t.errors.show_password_confirm,"error-messages":t.errors&&t.errors.show_password_confirm?t.errors.show_password_confirm[0]:""},on:{"click:append":function(e){t.show_password_confirm=!t.show_password_confirm}},model:{value:t.password_confirmation,callback:function(e){t.password_confirmation=e},expression:"password_confirmation"}})],1),t._v(" "),e("div",{staticClass:"text-center pt-1 mb-5 pb-1"},[t.errors&&t.errors.code?e("span",{staticClass:"error--text"},[t._v(t._s(t.errors.code[0])+"\n              ")]):t._e(),t._v(" "),t.msg?e("span",{staticClass:"error--text"},[t._v(t._s(t.msg)+" ")]):t._e(),t._v(" "),e(o.a,{staticClass:"btn btn-primary btn-block text-white fa-lg primary mt-1 mb-3",attrs:{dense:"",loading:t.loading},on:{click:t.change_new_password}},[t._v("\n                Update New Password\n              ")])],1),t._v(" "),e("div",{staticClass:"d-flex align-items-center justify-content-center pb-4"})]):t._e(),t._v(" "),e("div",{staticClass:"text--green",staticStyle:{color:"green","min-height":"200px"},model:{value:t.successView,callback:function(e){t.successView=e},expression:"successView"}},[t._v("\n            "+t._s(t.successMessage)+"\n          ")])],1)])])])],1)}),[],!1,null,null,null);e.default=component.exports},1278:function(t,e,n){var content=n(1437);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(22).default)("768c7d4d",content,!0,{sourceMap:!1})},1279:function(t,e,n){var content=n(1439);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(22).default)("1195e641",content,!0,{sourceMap:!1})},1434:function(t,e,n){var content=n(1435);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(22).default)("517d2b81",content,!0,{sourceMap:!1})},1435:function(t,e,n){var o=n(21)((function(i){return i[1]}));o.push([t.i,".theme--light.v-otp-input .v-input .v-input__control .v-input__slot{background:#fff}.theme--dark.v-otp-input .v-input .v-input__control .v-input__slot{background:#303030}.v-otp-input{display:flex;flex:1 1 auto;flex-wrap:wrap;margin-left:-4px;margin-right:-4px}.v-otp-input input{text-align:center}.v-otp-input .v-input{flex:1 0 32px;margin:0;max-width:100%;padding:4px;width:100%}.v-otp-input .v-input.v-otp-input--plain fieldset{display:none}.v-otp-input .v-input input[type=number]::-webkit-inner-spin-button,.v-otp-input .v-input input[type=number]::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.v-otp-input .v-input input[type=number]{-moz-appearance:textfield}",""]),o.locals={},t.exports=o},1436:function(t,e,n){"use strict";n(1278)},1437:function(t,e,n){var o=n(21)((function(i){return i[1]}));o.push([t.i,".bg-body,body,html{height:100%}.bg-body{background-position:50%;background-repeat:no-repeat;background-size:cover;padding-top:5%}",""]),o.locals={},t.exports=o},1438:function(t,e,n){"use strict";n(1279)},1439:function(t,e,n){var o=n(21),r=n(1440),l=n(1441),c=n(1442),d=o((function(i){return i[1]})),h=r(l),f=r(c);d.push([t.i,".about-content[data-v-5b2b1af5]{color:#fff;padding-left:30%;padding-right:15%;padding-top:1%}.btntext[data-v-5b2b1af5]{color:#6946dd;font-size:22px;font-weight:700}@media (max-width:1200px){.hide-on-mobile[data-v-5b2b1af5]{display:none}}@media (min-width:1300px){.bg-body[data-v-5b2b1af5]{background-image:url("+h+")!important}.gradient-form[data-v-5b2b1af5]{height:100vh!important}.bgimage2[data-v-5b2b1af5]{background-color:#fff;background-image:url("+f+");background-size:cover}.loginForm[data-v-5b2b1af5]{left:5%;position:absolute;top:10%;width:100%}}@media (max-width:700px){.hide-on-mobile[data-v-5b2b1af5]{display:none}.loginForm[data-v-5b2b1af5]{left:0;position:absolute;top:10%;width:100%}body[data-v-5b2b1af5]{background-color:#6946dd;max-width:100%;width:100%}}",""]),d.locals={},t.exports=d},1440:function(t,e,n){"use strict";t.exports=function(t,e){return e||(e={}),"string"!=typeof(t=t&&t.__esModule?t.default:t)?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},1441:function(t,e,n){t.exports=n.p+"img/bgimage3.43198ff.png"},1442:function(t,e,n){t.exports=n.p+"img/bgimage.4e56824.png"},1573:function(t,e,n){"use strict";n.r(e);var o=n(114),r=n(133),l=n(87),c=n(516),d=n(350),h=n(936),f=n(147),m=n(212),v=(n(12),n(14),n(13),n(17),n(11),n(18),n(81)),_=n(3),w=(n(28),n(62),n(45),n(35),n(6),n(72),n(216),n(117),n(41),n(531),n(1434),n(73)),y=n(214),x=n(100),C=n(1),k=n(15),P=n(8);function O(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function $(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?O(Object(source),!0).forEach((function(e){Object(_.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):O(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var S=Object(P.a)(w.a).extend().extend({name:"v-otp-input",directives:{ripple:x.a},inheritAttrs:!1,props:{length:{type:[Number,String],default:6},type:{type:String,default:"text"},plain:Boolean},data:function(){return{initialValue:null,isBooted:!1,otp:[]}},computed:{outlined:function(){return!this.plain},classes:function(){return $($($({},w.a.options.computed.classes.call(this)),y.a.options.computed.classes.call(this)),{},{"v-otp-input--plain":this.plain})}},watch:{isFocused:"updateValue",value:function(t){this.lazyValue=t,this.otp=(null==t?void 0:t.split(""))||[]}},created:function(){var t;this.$attrs.hasOwnProperty("browser-autocomplete")&&Object(k.a)("browser-autocomplete","autocomplete",this),this.otp=(null===(t=this.internalValue)||void 0===t?void 0:t.split(""))||[]},mounted:function(){var t=this;requestAnimationFrame((function(){return t.isBooted=!0}))},methods:{focus:function(t,e){this.onFocus(t,e||0)},genInputSlot:function(t){var e=this;return this.$createElement("div",this.setBackgroundColor(this.backgroundColor,{staticClass:"v-input__slot",style:{height:Object(C.i)(this.height)},on:{click:function(){return e.onClick(t)},mousedown:function(n){return e.onMouseDown(n,t)},mouseup:function(n){return e.onMouseUp(n,t)}}}),[this.genDefaultSlot(t)])},genControl:function(t){return this.$createElement("div",{staticClass:"v-input__control"},[this.genInputSlot(t)])},genDefaultSlot:function(t){return[this.genFieldset(),this.genTextFieldSlot(t)]},genContent:function(){var t=this;return Array.from({length:+this.length},(function(e,i){return t.$createElement("div",t.setTextColor(t.validationState,{staticClass:"v-input",class:t.classes}),[t.genControl(i)])}))},genFieldset:function(){return this.$createElement("fieldset",{attrs:{"aria-hidden":!0}},[this.genLegend()])},genLegend:function(){var span=this.$createElement("span",{domProps:{innerHTML:"&#8203;"}});return this.$createElement("legend",{style:{width:"0px"}},[span])},genInput:function(t){var e=this,n=Object.assign({},this.listeners$);return delete n.change,this.$createElement("input",{style:{},domProps:{value:this.otp[t],min:"number"===this.type?0:null},attrs:$($({},this.attrs$),{},{autocomplete:"one-time-code",disabled:this.isDisabled,readonly:this.isReadonly,type:this.type,id:"".concat(this.computedId,"--").concat(t),class:"otp-field-box--".concat(t)}),on:Object.assign(n,{blur:this.onBlur,input:function(n){return e.onInput(n,t)},focus:function(n){return e.onFocus(n,t)},keydown:this.onKeyDown,keyup:function(n){return e.onKeyUp(n,t)}}),ref:"input",refInFor:!0})},genTextFieldSlot:function(t){return this.$createElement("div",{staticClass:"v-text-field__slot"},[this.genInput(t)])},onBlur:function(t){var e=this;this.isFocused=!1,t&&this.$nextTick((function(){return e.$emit("blur",t)}))},onClick:function(t){this.isFocused||this.isDisabled||!this.$refs.input[t]||this.onFocus(void 0,t)},onFocus:function(t,e){null==t||t.preventDefault(),null==t||t.stopPropagation();var n=this.$refs.input,o=this.$refs.input&&n[e||0];if(o)return document.activeElement!==o?(o.focus(),o.select()):void(this.isFocused||(this.isFocused=!0,o.select(),t&&this.$emit("focus",t)))},onInput:function(t,e){for(var n=+this.length-1,o=t.target.value,r=(null==o?void 0:o.split(""))||[],l=Object(v.a)(this.otp),i=0;i<r.length;i++){var c=e+i;if(c>n)break;l[c]=r[i].toString()}r.length||l.splice(e,1),this.otp=l,this.internalValue=this.otp.join(""),e+r.length>=+this.length?(this.onCompleted(),this.clearFocus(e)):r.length&&this.changeFocus(e+r.length)},clearFocus:function(t){this.$refs.input[t].blur()},onKeyDown:function(t){t.keyCode===C.z.enter&&this.$emit("change",this.internalValue),this.$emit("keydown",t)},onMouseDown:function(t,e){t.target!==this.$refs.input[e]&&(t.preventDefault(),t.stopPropagation()),w.a.options.methods.onMouseDown.call(this,t)},onMouseUp:function(t,e){this.hasMouseDown&&this.focus(t,e),w.a.options.methods.onMouseUp.call(this,t)},changeFocus:function(t){this.onFocus(void 0,t||0)},updateValue:function(t){this.hasColor=t,t?this.initialValue=this.lazyValue:this.initialValue!==this.lazyValue&&this.$emit("change",this.lazyValue)},onKeyUp:function(t,e){t.preventDefault();var n=t.key;if(!["Tab","Shift","Meta","Control","Alt"].includes(n)&&!["Delete"].includes(n))return"ArrowLeft"===n||"Backspace"===n&&!this.otp[e]?e>0&&this.changeFocus(e-1):"ArrowRight"===n?e+1<+this.length&&this.changeFocus(e+1):void 0},onCompleted:function(){var t=this.otp.join("");t.length===+this.length&&this.$emit("finish",t)}},render:function(t){return t("div",{staticClass:"v-otp-input",class:this.themeClasses},this.genContent())}}),M=n(515),V=n(873),j=n(349),F=(n(33),n(181),n(221),n(55),{layout:"login",components:{ForgotPassword:n(1266).default},data:function(){return{dialogForgotPassword:!1,maskMobileNumber:"",whatsappFormValid:!0,logo:"/ideaHRMS-final-blue.svg",valid:!0,loading:!1,snackbar:!1,snackbarMessage:"",show_password:!1,msg:"",requiredRules:[function(t){return!!t||"Required"}],emailRules:[function(t){return!!t||"E-mail is required"},function(t){return/.+@.+\..+/.test(t)||"E-mail must be valid"}],passwordRules:[function(t){return!!t||"Password is required"}],dialogWhatsapp:!1,otp:"",userId:"",credentials:{email:"",password:"",source:"admin"},disabled:!0,setupComponent:null}},created:function(){this.$store.dispatch("dashboard/resetState"),this.$store.dispatch("resetState"),this.verifyToken(),this.setupComponent="CommunityInitialConfig"},mounted:function(){this.$store.dispatch("dashboard/resetState"),this.$store.dispatch("resetState")},methods:{openForgotPassword:function(){this.dialogForgotPassword=!0},verifyToken:function(){this.$route.query.email&&this.$route.query.password&&(this.email=this.$route.query.email,this.password=this.$route.query.password,this.loginWithOTP())},hideMobileNumber:function(t){if("string"!=typeof t||t.length<4)return t;var e=t.match(/^(.*)(\d{5})$/);if(e){var n=e[1],o=e[2];return"*".repeat(n.length)+o}return t},handleInputChange:function(){},checkOTP:function(t){var e=this;if(""!=t){var n={userId:this.userId};this.$axios.post("check_otp/".concat(t),n).then((function(t){t.data.status?e.login():alert("Invalid OTP. Please try again")})).catch((function(t){return console.log(t)}))}else alert("Enter OTP")},loginWithOTP:function(){var t=this;this.$refs.form.validate()?(this.loading=!0,this.$store.commit("email",this.credentials.email),this.$store.commit("password",this.credentials.password),this.$axios.post("loginwith_otp",this.credentials).then((function(e){var data=e.data;data.status?data.user_id?1==data.enable_whatsapp_otp?(t.dialogWhatsapp=!0,t.userId=data.user_id,data.mobile_number&&(t.maskMobileNumber=t.hideMobileNumber(data.mobile_number)),t.loading=!1):t.login():(t.snackbar=!0,t.snackbarMessage="Invalid Login Details"):alert("Invalid Login Deails")})).catch((function(t){return console.log(t)}))):(this.snackbar=!0,this.snackbarMessage="Invalid Emaild and Password"),this.loading=!1},login:function(){var t=this;this.$refs.form.validate()?(this.$store.commit("email",this.credentials.email),this.$store.commit("password",this.credentials.password),this.msg="",this.loading=!0,this.$auth.loginWith("local",{data:this.credentials}).then((function(e){e.data;setTimeout((function(){return t.loading=!1}),2e3)})).catch((function(e){var n=e.response;if(!n)return!1;var o=n.status,data=n.data,r=n.statusText;t.msg=422==o?data.message:r,setTimeout((function(){return t.loading=!1}),2e3)}))):(this.snackbar=!0,this.snackbarMessage="Invalid Emaild and Password")}}}),E=(n(1436),n(1438),n(116)),component=Object(E.a)(F,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"mobileBGColor111 bg-body"},[e(d.a,{attrs:{persistent:"",width:"600px"},model:{value:t.dialogWhatsapp,callback:function(e){t.dialogWhatsapp=e},expression:"dialogWhatsapp"}},[e(r.a,[e(l.c,{staticClass:"white--text",staticStyle:{"background-color":"#6946dd",color:"#fff !important"},attrs:{dense:""}},[t._v("\n        Whatsapp Verification\n        "),e(j.a),t._v(" "),e(f.a,{attrs:{outlined:"",dark:"",color:"white"},on:{click:function(e){t.dialogWhatsapp=!1}}},[t._v("\n          mdi mdi-close-circle\n        ")])],1),t._v(" "),e(l.b,[e("div",{staticClass:"row g-0"},[e("div",{staticClass:"col-lg-12"},[e("div",{staticClass:"card-body p-md-5 mx-md-4"},[e(M.a,{staticClass:"pb-5"},[e(c.a,{staticClass:"text-center",attrs:{md:"12",cols:"12"}},[e("h2",[t._v("MyHome2Cloud")])])],1),t._v(" "),e("h5",[t._v("\n                Two Step Whatsapp OTP Verification\n                "),e(f.a,{attrs:{dark:"",color:"green",fill:""}},[t._v("mdi-whatsapp")])],1),t._v(" "),e("p",[t._v("\n                We sent a verification code to your mobile number. Enter the\n                Code from the mobile in the filed below\n              ")]),t._v(" "),e("h2",{staticStyle:{"font-size":"30px"}},[t._v("\n                "+t._s(t.maskMobileNumber)+"\n              ")]),t._v(" "),e("br"),t._v(" "),e("label",{staticClass:"pb-5",staticStyle:{"font-weight":"bold","font-size":"20px"},attrs:{for:""}},[t._v("Type your 6 Digit Security Code")]),t._v(" "),e("div",{staticClass:"form-outline mb-4"},[e(S,{attrs:{length:"6",rules:t.requiredRules},model:{value:t.otp,callback:function(e){t.otp=e},expression:"otp"}})],1),t._v(" "),e("div",{staticClass:"text-center pt-1 mb-5 pb-1"},[t.msg?e("span",{staticClass:"error--text"},[t._v("\n                  "+t._s(t.msg)+"\n                ")]):t._e(),t._v(" "),e(o.a,{staticClass:"btn btn-block fa-lg mt-1 mb-3",staticStyle:{"background-color":"#6946dd",color:"#fff"},attrs:{loading:t.loading},on:{click:function(e){return t.checkOTP(t.otp)}}},[t._v("\n                  Verify OTP\n                ")])],1),t._v(" "),e("div",{staticClass:"d-flex align-items-center justify-content-center pb-4"})],1)])])])],1)],1),t._v(" "),e(d.a,{attrs:{width:"400px",height:"500px"},model:{value:t.dialogForgotPassword,callback:function(e){t.dialogForgotPassword=e},expression:"dialogForgotPassword"}},[e(r.a,[e(l.c,{staticClass:"popup_background",attrs:{dense:""}},[t._v("\n        Forgot Password\n        "),e(j.a),t._v(" "),e(f.a,{attrs:{outlined:"",dark:""},on:{click:function(e){t.dialogForgotPassword=!1}}},[t._v("\n          mdi mdi-close-circle\n        ")])],1),t._v(" "),e(l.b,[e("ForgotPassword")],1)],1)],1),t._v(" "),e(V.a,{attrs:{top:"top",color:"error",elevation:"24"},model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v("\n    "+t._s(t.snackbarMessage)+"\n  ")]),t._v(" "),e(M.a,{staticStyle:{height:"100%"}},[e(c.a,{staticStyle:{padding:"0px"},attrs:{xs:"12",sm:"12",md:"12",lg:"5"}},[e("div",{staticClass:"card-body p-md-5 mx-md111111-4",staticStyle:{padding:"3rem !important","max-width":"500px",margin:"auto","text-align":"center"}},[e("div",{staticStyle:{"min-height":"100px"}},[e("div",{staticClass:"text-center",staticStyle:{width:"100%"}},[e(m.a,{staticClass:"text-center",staticStyle:{width:"200px",padding:"0px",margin:"auto","text-align":"center"},attrs:{src:"/logo22.png"}})],1),t._v(" "),e("h3",{staticClass:"pb-7 pt-15"},[t._v("\n            Welcome To\n            "),e("span",{staticStyle:{"font-size":"20px"}},[t._v(" MyHome2Cloud ")])])]),t._v(" "),e("div",[e(h.a,{ref:"form",attrs:{method:"post","lazy-validation":"",autocomplete:"off"},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[e("div",{staticClass:"form-outline"},[e(y.a,{attrs:{role:"presentation",label:"Email","hide-details":!1,id:"form2Example11",autofill:"false",required:"",dense:"",outlined:"",type:"email","prepend-inner-icon":"mdi-account","append-icon":"mdi-at",autocomplete:"off","aria-autocomplete":"none"},model:{value:t.credentials.email,callback:function(e){t.$set(t.credentials,"email",e)},expression:"credentials.email"}})],1),t._v(" "),e("div",{staticClass:"form-outline"},[e(y.a,{staticClass:"input-group--focused",attrs:{role:"presentation",label:"Password",dense:"",outlined:"",autocomplete:"off","prepend-inner-icon":"mdi-lock  ","append-icon":t.show_password?"mdi-eye":"mdi-eye-off",type:t.show_password?"text":"password"},on:{"click:append":function(e){t.show_password=!t.show_password}},model:{value:t.credentials.password,callback:function(e){t.$set(t.credentials,"password",e)},expression:"credentials.password"}})],1),t._v(" "),e(M.a,[e(c.a,{attrs:{md:"6"}}),t._v(" "),e(c.a,{staticClass:"text-right pt-6",attrs:{md:"6"}},[e(o.a,{staticStyle:{"font-weight":"normal"},attrs:{text:""},on:{click:t.openForgotPassword}},[t._v("Forgot password?")])],1)],1),t._v(" "),e("div",{staticClass:"text-center pt-1 mb-5 pb-1"},[t.msg?e("span",{staticClass:"error--text111",staticStyle:{color:"#ff9f87"}},[t._v("\n                "+t._s(t.msg)+"\n              ")]):t._e(),t._v(" "),e(o.a,{staticClass:"btn primary btn-black btn-block mt-1 mb-3 p-4 btntext",staticStyle:{width:"100%",height:"48px"},attrs:{loading:t.loading},on:{click:function(e){return t.login()}}},[t._v("\n                Login\n              ")])],1)],1)],1),t._v(" "),e("div",{staticClass:"text-center"},[t._v("Don't Have an Account? Contact Admin")]),t._v(" "),e(M.a,{staticClass:"text-center",staticStyle:{"font-size":"13px"}},[e(c.a,{staticClass:"pa-5"},[t._v("\n            For Technical Support :\n            "),e("a",{attrs:{target:"_blank",href:"https://wa.me/971529048025?text=Hello MyHome2Cloud. I need your support."}},[e(f.a,{attrs:{color:"black"}},[t._v("mdi-whatsapp")])],1),t._v(" "),e("a",{staticStyle:{"text-decoration":"none",color:"black"},attrs:{href:"tel:+971529048025"}},[t._v("+971 52 904 8025")])])],1),t._v(" "),e(M.a,{staticClass:"text-center",staticStyle:{"font-size":"13px"}},[e(c.a,{staticClass:"pa-5"},[e("a",{staticStyle:{"text-decoration":"none",color:"black"},attrs:{href:"mailto:support@myhome2cloud.com"}},[t._v("support@myhome2cloud.com")])])],1)],1)]),t._v(" "),e(c.a,{staticClass:"hide-on-mobile d-none d-lg-flex",attrs:{xs:"12",sm:"12",md:"12",lg:"7"}},[e("div",{staticClass:"about-content"},[e("h3",[t._v("About MyHome2Cloud")]),t._v(" "),e("div",{staticStyle:{"font-weight":"300"}},[t._v("\n          Tenant management refers to the administration and oversight of\n          tenants within a property or organizational context. In the case of\n          MyHome2Cloud, tenant management involves the systematic handling of\n          users, which could include employees, contractors, or any\n          individuals granted access to the platform's services."),e("br"),t._v("\n          Customization and Reporting: The platform offers customizable\n          settings to fit the specific needs of different organizations. It\n          generates comprehensive reports and analytics based on attendance\n          data, enabling informed decision-making and efficient resource\n          allocation.\n        ")]),t._v(" "),e("h3",{staticClass:"pt-10"},[t._v("Features")]),t._v(" "),e("ul",{staticStyle:{"font-weight":"300"}},[e("li",[t._v("Tanent and Members management")]),t._v(" "),e("li",[t._v("Visitor management")]),t._v(" "),e("li",[t._v("Contractor management")]),t._v(" "),e("li",[t._v("Parking management")]),t._v(" "),e("li",[t._v("Employees management")]),t._v(" "),e("li",[t._v("Access Controll")]),t._v(" "),e("li",[t._v("Time Attendance")]),t._v(" "),e("li",[t._v("Face Recognition Integration")]),t._v(" "),e("li",[t._v("Custom Reports")]),t._v(" "),e("li",[t._v("Custom Dashboards")])]),t._v(" "),e(M.a,{staticClass:"text-left pt-10"},[e(c.a,{staticClass:"pa-5"},[e("h3",[t._v("Technical Support")]),t._v(" "),e("a",{staticStyle:{"font-weight":"300"},attrs:{target:"_blank",href:"https://wa.me/971529048025?text=Hello MyHome2Cloud. I need your support."}},[e(f.a,{attrs:{color:"white"}},[t._v("mdi-whatsapp")])],1),t._v(" "),e("a",{staticStyle:{color:"#fff","text-decoration":"none","font-weight":"300"},attrs:{href:"tel:+971529048025"}},[t._v("+971 52 904 8025")]),t._v(" "),e("br"),t._v(" "),e("a",{staticStyle:{"text-decoration":"none",color:"#fff","font-weight":"300"},attrs:{href:"mailto:support@myhome2cloud.com"}},[t._v("support@myhome2cloud.com")])])],1)],1)])],1)],1)}),[],!1,null,"5b2b1af5",null);e.default=component.exports;installComponents(component,{ForgotPassword:n(1266).default})},936:function(t,e,n){"use strict";var o=n(3),r=(n(41),n(61),n(351),n(13),n(6),n(11),n(55),n(99),n(12),n(14),n(17),n(18),n(8)),l=n(118),c=n(148);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function h(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(r.a)(l.a,Object(c.b)("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(input){var t=this,e=function(input){return input.$watch("hasError",(function(e){t.$set(t.errorBag,input._uid,e)}),{immediate:!0})},n={_uid:input._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?n.shouldValidate=input.$watch("shouldValidate",(function(o){o&&(t.errorBag.hasOwnProperty(input._uid)||(n.valid=e(input)))})):n.valid=e(input),n},validate:function(){return 0===this.inputs.filter((function(input){return!input.validate(!0)})).length},reset:function(){this.inputs.forEach((function(input){return input.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(input){return input.resetValidation()})),this.resetErrorBag()},register:function(input){this.inputs.push(input),this.watchers.push(this.watchInput(input))},unregister:function(input){var t=this.inputs.find((function(i){return i._uid===input._uid}));if(t){var e=this.watchers.find((function(i){return i._uid===t._uid}));e&&(e.valid(),e.shouldValidate()),this.watchers=this.watchers.filter((function(i){return i._uid!==t._uid})),this.inputs=this.inputs.filter((function(i){return i._uid!==t._uid})),this.$delete(this.errorBag,t._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:h({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})}}]);