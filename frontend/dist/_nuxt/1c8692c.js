(window.webpackJsonp=window.webpackJsonp||[]).push([[238],{1099:function(t,e,n){"use strict";n.r(e);var r=n(114),o=n(147),l=n(212),c=(n(37),{props:["defaultImage"],data:function(){return{imagePreview:"/no-profile-image.jpg",upload:{name:""}}},created:function(){this.imagePreview=this.defaultImage||"/no-profile-image.jpg"},methods:{onpick_attachment:function(){this.$refs.attachment_input.click()},attachment:function(t){var e=this;this.upload.name=t.target.files[0]||"";var n=this.$refs.attachment_input.files;if(n&&n[0]){var r=new FileReader;r.onload=function(t){e.imagePreview=t.target.result},r.readAsDataURL(n[0]),this.$emit("uploaded",n[0])}}}}),d=n(116),component=Object(d.a)(c,(function(){var t=this,e=t._self._c;return e("div",[e(l.a,{staticStyle:{width:"150px",height:"150px","border-radius":"50%",margin:"0 auto",border:"1px solid #6946dd"},attrs:{src:t.imagePreview}}),t._v(" "),e(r.a,{staticClass:"mt-2",attrs:{outlined:"",block:"",color:"primary",small:""},on:{click:t.onpick_attachment}},[t._v(t._s(t.upload.name?"Change":"Upload")+"\n    "),e(o.a,{attrs:{right:"",dark:""}},[t._v("mdi-cloud-upload")])],1),t._v(" "),e("input",{ref:"attachment_input",staticStyle:{display:"none"},attrs:{required:"",type:"file",accept:"image/*"},on:{change:t.attachment}})],1)}),[],!1,null,null,null);e.default=component.exports}}]);