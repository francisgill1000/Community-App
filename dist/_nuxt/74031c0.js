(window.webpackJsonp=window.webpackJsonp||[]).push([[195],{1018:function(t,e,n){"use strict";n.r(e);var r=n(212),o=(n(37),{props:["defaultImage"],data:function(){return{imagePreview:"/no-profile-image.jpg",upload:{name:""}}},created:function(){this.imagePreview=this.defaultImage||"/no-profile-image.jpg"},methods:{onpick_attachment:function(){this.$refs.attachment_input.click()},attachment:function(t){var e=this;this.upload.name=t.target.files[0]||"";var n=this.$refs.attachment_input.files;if(n&&n[0]){var r=new FileReader;r.onload=function(t){e.imagePreview=t.target.result},r.readAsDataURL(n[0]),this.$emit("uploaded",n[0])}}}}),c=n(116),component=Object(c.a)(o,(function(){var t=this._self._c;return t("div",[t(r.a,{staticStyle:{width:"150px",height:"150px","border-radius":"50%",margin:"0 auto"},attrs:{src:this.imagePreview}})],1)}),[],!1,null,null,null);e.default=component.exports}}]);