(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{1710:function(e,t,r){"use strict";r.r(t);var n=r(114),o=r(133),l=r(87),c=r(518),d=r(350),f=r(517),v=r(214),m=r(23),h=(r(88),{data:function(){return{dialog:!1,loading:!1,payload:{}}},created:function(){var e=this;return Object(m.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$axios.get("setup");case 2:r=t.sent,r.data||(e.dialog=!0);case 5:case"end":return t.stop()}}),t)})))()},methods:{saveConfig:function(){var e=this;return Object(m.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.generateSchema();case 2:case"end":return t.stop()}}),t)})))()},generateSchema:function(){var e=this;return Object(m.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e.loading=!0,t.next=4,e.$axios.post("generate-schema");case 4:200===t.sent.status?(alert("Database configuration updated successfully"),e.closeDialog()):alert("Failed to submit record. Please try again."),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(0),console.error("Error occurred while saving configuration:",t.t0),alert("An error occurred while saving configuration. Please try again later.");case 12:return t.prev=12,e.loading=!1,t.finish(12);case 15:case"end":return t.stop()}}),t,null,[[0,8,12,15]])})))()},closeDialog:function(){this.dialog=!1,this.loading=!1,this.payload={}}}}),x=r(116),component=Object(x.a)(h,(function(){var e=this,t=e._self._c;return t(d.a,{attrs:{persistent:"","max-width":"500px"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[t(o.a,[t(l.d,[t("span",{staticClass:"headline"},[e._v("Setup Configuration")])]),e._v(" "),t(l.c,[t(f.a,[t(c.a,{attrs:{cols:"12"}},[t(v.a,{attrs:{outlined:"",dense:"","hide-details":"",label:"Email"},model:{value:e.payload.email,callback:function(t){e.$set(e.payload,"email",t)},expression:"payload.email"}})],1)],1)],1),e._v(" "),t("div",{staticClass:"text-right mx-6 pb-2"},[t(n.a,{attrs:{color:"grey",dark:"",small:""},on:{click:e.closeDialog}},[e._v("Close")]),e._v(" "),t(n.a,{attrs:{loading:e.loading,color:"primary",small:""},on:{click:e.saveConfig}},[e._v("Save")])],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports}}]);