(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{1684:function(e,t,n){"use strict";n.r(t);var o=n(114),l=n(1560),r=n(147),d=n(893),c=n(86),v=n(349),m={data:function(){return{type:"month",types:["month","week","day","4day"],mode:"stack",modes:["stack","column"],weekday:[0,1,2,3,4,5,6],weekdays:[{text:"Sun - Sat",value:[0,1,2,3,4,5,6]},{text:"Mon - Sun",value:[1,2,3,4,5,6,0]},{text:"Mon - Fri",value:[1,2,3,4,5]},{text:"Mon, Wed, Fri",value:[1,3,5]}],value:"",events:[],colors:["blue","indigo","deep-purple","cyan","green","orange","grey darken-1"],names:["Meeting","Holiday","PTO","Travel","Event","Birthday","Conference","Party"]}},methods:{getEvents:function(e){for(var t=e.start,n=e.end,o=[],l=new Date("".concat(t.date,"T00:00:00")),r=new Date("".concat(n.date,"T23:59:59")),d=(r.getTime()-l.getTime())/864e5,c=this.rnd(d,d+20),i=0;i<c;i++){var v=0===this.rnd(0,3),m=this.rnd(l.getTime(),r.getTime()),h=new Date(m-m%9e5),y=9e5*this.rnd(2,v?288:8),f=new Date(h.getTime()+y);o.push({name:this.names[this.rnd(0,this.names.length-1)],start:h,end:f,color:this.colors[this.rnd(0,this.colors.length-1)],timed:!v})}this.events=o},getEventColor:function(e){return e.color},rnd:function(a,b){return Math.floor((b-a+1)*Math.random())+a}}},h=n(116),component=Object(h.a)(m,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"p-3"},[t(c.a,{staticClass:"d-flex",attrs:{tile:"",height:"54"}},[t(o.a,{staticClass:"ma-2",attrs:{icon:""},on:{click:function(t){return e.$refs.calendar.prev()}}},[t(r.a,[e._v("mdi-chevron-left")])],1),e._v(" "),t(d.a,{staticClass:"ma-2",attrs:{items:e.types,dense:"",outlined:"","hide-details":"",label:"type"},model:{value:e.type,callback:function(t){e.type=t},expression:"type"}}),e._v(" "),t(d.a,{staticClass:"ma-2",attrs:{items:e.modes,dense:"",outlined:"","hide-details":"",label:"event-overlap-mode"},model:{value:e.mode,callback:function(t){e.mode=t},expression:"mode"}}),e._v(" "),t(d.a,{staticClass:"ma-2",attrs:{items:e.weekdays,dense:"",outlined:"","hide-details":"",label:"weekdays"},model:{value:e.weekday,callback:function(t){e.weekday=t},expression:"weekday"}}),e._v(" "),t(v.a),e._v(" "),t(o.a,{staticClass:"ma-2",attrs:{icon:""},on:{click:function(t){return e.$refs.calendar.next()}}},[t(r.a,[e._v("mdi-chevron-right")])],1)],1),e._v(" "),t(c.a,{attrs:{height:"600"}},[t(l.a,{ref:"calendar",attrs:{weekdays:e.weekday,type:e.type,events:e.events,"event-overlap-mode":e.mode,"event-overlap-threshold":30,"event-color":e.getEventColor},on:{change:e.getEvents},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}})],1)],1)}),[],!1,null,null,null);t.default=component.exports}}]);