(window.webpackJsonp=window.webpackJsonp||[]).push([[237],{1760:function(e,t,n){"use strict";n.r(t);var l=n(214),f={props:["label","default_value"],data:function(){return{finalTime:null}},created:function(){this.finalTime=this.default_value,this.$emit("getTime",this.default_value)},methods:{setInput:function(){this.$emit("getTime",this.finalTime)}}},o=n(116),component=Object(o.a)(f,(function(){var e=this;return(0,e._self._c)(l.a,{attrs:{outlined:"",dense:"",label:e.label,type:"time","hide-details":""},on:{input:e.setInput},model:{value:e.finalTime,callback:function(t){e.finalTime=t},expression:"finalTime"}})}),[],!1,null,null,null);t.default=component.exports}}]);