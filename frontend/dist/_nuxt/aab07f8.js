(window.webpackJsonp=window.webpackJsonp||[]).push([[238],{1730:function(t,e,n){"use strict";n.r(e);var l=n(114),o=n(147),c=(n(37),{props:{defaultImage:{default:"no-profile-image.jpg"},label:{default:"Document"}},data:function(){return{imagePreview:"/no-profile-image.jpg",upload:{name:""}}},created:function(){},methods:{onpick_attachment:function(){this.$refs.attachment_input.click()},attachment:function(t){this.upload.name=t.target.files[0]||"";var e=this.$refs.attachment_input.files;if(e&&e[0]){var n=new FileReader;n.onload=function(t){},n.readAsDataURL(e[0]),this.$emit("uploaded",e[0])}}}}),r=n(116),component=Object(r.a)(c,(function(){var t=this,e=t._self._c;return e("div",[e(l.a,{attrs:{outlined:"",block:"",color:"primary"},on:{click:t.onpick_attachment}},[t._v(t._s(t.upload.name?"Change "+t.label:"Upload "+t.label)+"\n    "),e(o.a,{attrs:{right:"",dark:""}},[t._v("mdi-cloud-upload")])],1),t._v(" "),e("input",{ref:"attachment_input",staticStyle:{display:"none"},attrs:{required:"",type:"file",accept:"image/*, application/pdf"},on:{change:t.attachment}})],1)}),[],!1,null,null,null);e.default=component.exports}}]);