var __awaiter=this&&this.__awaiter||function(t,e,a,i){function r(t){return t instanceof a?t:new a((function(e){e(t)}))}return new(a||(a=Promise))((function(a,s){function n(t){try{o(i.next(t))}catch(e){s(e)}}function l(t){try{o(i["throw"](t))}catch(e){s(e)}}function o(t){t.done?a(t.value):r(t.value).then(n,l)}o((i=i.apply(t,e||[])).next())}))};var __generator=this&&this.__generator||function(t,e){var a={label:0,sent:function(){if(s[0]&1)throw s[1];return s[1]},trys:[],ops:[]},i,r,s,n;return n={next:l(0),throw:l(1),return:l(2)},typeof Symbol==="function"&&(n[Symbol.iterator]=function(){return this}),n;function l(t){return function(e){return o([t,e])}}function o(n){if(i)throw new TypeError("Generator is already executing.");while(a)try{if(i=1,r&&(s=n[0]&2?r["return"]:n[0]?r["throw"]||((s=r["return"])&&s.call(r),0):r.next)&&!(s=s.call(r,n[1])).done)return s;if(r=0,s)n=[n[0]&2,s.value];switch(n[0]){case 0:case 1:s=n;break;case 4:a.label++;return{value:n[1],done:false};case 5:a.label++;r=n[1];n=[0];continue;case 7:n=a.ops.pop();a.trys.pop();continue;default:if(!(s=a.trys,s=s.length>0&&s[s.length-1])&&(n[0]===6||n[0]===2)){a=0;continue}if(n[0]===3&&(!s||n[1]>s[0]&&n[1]<s[3])){a.label=n[1];break}if(n[0]===6&&a.label<s[1]){a.label=s[1];s=n;break}if(s&&a.label<s[2]){a.label=s[2];a.ops.push(n);break}if(s[2])a.ops.pop();a.trys.pop();continue}n=e.call(t,a)}catch(l){n=[6,l];r=0}finally{i=s=0}if(n[0]&5)throw n[1];return{value:n[0]?n[1]:void 0,done:true}}};System.register(["./p-6b02a628.system.js","./p-6a6c0535.system.js","./p-46dac740.system.js","./p-2c235db8.system.js"],(function(t){"use strict";var e,a,i,r,s,n,l,o;return{setters:[function(t){e=t.r;a=t.c;i=t.h;r=t.H;s=t.g},function(t){n=t.h},function(t){l=t.g},function(t){o=t.g}],execute:function(){var h='@charset "UTF-8";@-webkit-keyframes calcite-fade-in{0%{opacity:0}100%{opacity:1}}@keyframes calcite-fade-in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes calcite-fade-in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes calcite-fade-in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes calcite-fade-in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes calcite-fade-in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes calcite-fade-in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes calcite-fade-in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host-context([theme=dark]){--calcite-ui-blue-1:#00A0FF;--calcite-ui-blue-2:#0087D7;--calcite-ui-blue-3:#47BBFF;--calcite-ui-green-1:#36DA43;--calcite-ui-green-2:#11AD1D;--calcite-ui-green-3:#44ED51;--calcite-ui-yellow-1:#FFC900;--calcite-ui-yellow-2:#F4B000;--calcite-ui-yellow-3:#FFE24D;--calcite-ui-red-1:#FE583E;--calcite-ui-red-2:#F3381B;--calcite-ui-red-3:#FF7465;--calcite-ui-background:#202020;--calcite-ui-foreground-1:#2b2b2b;--calcite-ui-foreground-2:#353535;--calcite-ui-foreground-3:#404040;--calcite-ui-text-1:#ffffff;--calcite-ui-text-2:#bfbfbf;--calcite-ui-text-3:#9f9f9f;--calcite-ui-border-1:#4a4a4a;--calcite-ui-border-2:#404040;--calcite-ui-border-3:#353535;--calcite-ui-border-4:#757575;--calcite-ui-border-5:#9f9f9f}:host{display:block;padding:7px 0;margin:7px 0;position:relative}:host([disabled]){opacity:0.4;pointer-events:none}:host([disabled]) .track__range,:host([disabled]) .tick--active{background-color:var(--calcite-ui-text-3)}:host([disabled]) .graph .graph-path--highlight{fill:var(--calcite-ui-text-3)}:host([label-handles]),:host([precise]:not([precise=false])){margin-top:21px}:host([label-ticks]),:host([precise]:not([precise=false])[is-range]){margin-bottom:21px}:host([precise]:not([precise=false])[label-handles]){margin-top:35px}:host([precise]:not([precise=false])[label-handles][is-range]){margin-bottom:35px}.thumb{position:absolute;border:none;background:transparent;cursor:pointer;font-family:inherit;z-index:2;outline:none;padding:0;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;-webkit-transform:translate(7px, -8px);transform:translate(7px, -8px)}.thumb .handle__label{font-size:0.75rem;line-height:1.5;font-weight:500;line-height:1;color:var(--calcite-ui-text-2);margin-bottom:5px}.thumb .handle__label.static,.thumb .handle__label.transformed{opacity:0;position:absolute;top:0;bottom:0}.thumb .handle__label--minValue.hyphen::after{content:"—";display:inline-block;width:1em}.thumb .handle{outline-offset:0;outline-color:transparent;-webkit-transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;height:14px;width:14px;-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:100%;background-color:var(--calcite-ui-foreground-1);-webkit-box-shadow:0 0 0 2px var(--calcite-ui-text-3) inset;box-shadow:0 0 0 2px var(--calcite-ui-text-3) inset;-webkit-transition:border 0.25s ease, background-color 0.25s ease, -webkit-box-shadow 0.25s ease;transition:border 0.25s ease, background-color 0.25s ease, -webkit-box-shadow 0.25s ease;transition:border 0.25s ease, background-color 0.25s ease, box-shadow 0.25s ease;transition:border 0.25s ease, background-color 0.25s ease, box-shadow 0.25s ease, -webkit-box-shadow 0.25s ease}.thumb .handle-extension{width:2px;height:7px;background-color:var(--calcite-ui-text-3)}.thumb:hover .handle{-webkit-box-shadow:0 0 0 3px var(--calcite-ui-blue-1) inset;box-shadow:0 0 0 3px var(--calcite-ui-blue-1) inset}.thumb:hover .handle-extension{background-color:var(--calcite-ui-blue-1)}.thumb:focus .handle{outline:2px solid var(--calcite-ui-blue-1);outline-offset:2px;outline-offset:2px}.thumb:focus .handle-extension{background-color:var(--calcite-ui-blue-1)}.thumb--minValue{-webkit-transform:translate(-7px, -8px);transform:translate(-7px, -8px)}:host([label-handles]) .thumb{-webkit-transform:translate(50%, -25px);transform:translate(50%, -25px)}:host([label-handles]) .thumb--minValue{-webkit-transform:translate(-50%, -25px);transform:translate(-50%, -25px)}:host([has-histogram][label-handles]) .thumb{-webkit-transform:translate(50%, -8px);transform:translate(50%, -8px)}:host([has-histogram][label-handles]) .thumb .handle__label{margin-bottom:unset;margin-top:5px}:host([has-histogram][label-handles]) .thumb--minValue{-webkit-transform:translate(-50%, -8px);transform:translate(-50%, -8px)}:host([precise]:not([precise=false])) .thumb{-webkit-transform:translate(7px, -21px);transform:translate(7px, -21px)}:host([precise]:not([precise=false])) .thumb--minValue{-webkit-transform:translate(-7px, -2px);transform:translate(-7px, -2px)}:host([precise]:not([precise=false])) .thumb--minValue .handle__label{margin-bottom:unset;margin-top:5px}:host([has-histogram][precise]:not([precise=false])) .thumb{-webkit-transform:translate(7px, -2px);transform:translate(7px, -2px)}:host([has-histogram][precise]:not([precise=false])) .thumb--minValue{-webkit-transform:translate(-50%, -2px);transform:translate(-50%, -2px)}:host([ticks][precise]:not([precise=false])) .thumb{-webkit-transform:translate(7px, -20px);transform:translate(7px, -20px)}:host([ticks][precise]:not([precise=false])) .thumb--minValue{-webkit-transform:translate(-7px, -3px);transform:translate(-7px, -3px)}:host([has-histogram][ticks][precise]:not([precise=false])) .thumb{-webkit-transform:translate(7px, -3px);transform:translate(7px, -3px)}:host([has-histogram][ticks][precise]:not([precise=false])) .thumb--minValue{-webkit-transform:translate(-50%, -3px);transform:translate(-50%, -3px)}:host([label-handles][precise]:not([precise=false])) .thumb{-webkit-transform:translate(50%, -38px);transform:translate(50%, -38px)}:host([label-handles][precise]:not([precise=false])) .thumb--minValue{-webkit-transform:translate(-50%, -2px);transform:translate(-50%, -2px)}:host([has-histogram][label-handles][precise]:not([precise=false])) .thumb{-webkit-transform:translate(50%, -2px);transform:translate(50%, -2px)}:host([has-histogram][label-handles][precise]:not([precise=false])) .thumb--minValue{-webkit-transform:translate(-50%, -2px);transform:translate(-50%, -2px)}:host([ticks][label-handles][precise]:not([precise=false])) .thumb{-webkit-transform:translate(50%, -37px);transform:translate(50%, -37px)}:host([ticks][label-handles][precise]:not([precise=false])) .thumb--minValue{-webkit-transform:translate(-50%, -3px);transform:translate(-50%, -3px)}:host([has-histogram][ticks][label-handles][precise]:not([precise=false])) .thumb{-webkit-transform:translate(50%, -3px);transform:translate(50%, -3px)}:host([has-histogram][ticks][label-handles][precise]:not([precise=false])) .thumb--minValue{-webkit-transform:translate(-50%, -3px);transform:translate(-50%, -3px)}.thumb:focus,.thumb--active{z-index:3}.thumb:focus .handle,.thumb--active .handle{background-color:var(--calcite-ui-blue-1);-webkit-box-shadow:0 0 8px 0 rgba(0, 0, 0, 0.16);box-shadow:0 0 8px 0 rgba(0, 0, 0, 0.16)}.thumb:hover.thumb--precise:after,.thumb:focus.thumb--precise:after,.thumb--active.thumb--precise:after{background-color:var(--calcite-ui-blue-1)}.track{height:2px;border-radius:0;z-index:1;background-color:var(--calcite-ui-border-2);-webkit-transition:all 250ms ease-in;transition:all 250ms ease-in;position:relative}.track__range{position:absolute;top:0;height:2px;background-color:var(--calcite-ui-blue-1)}:host([is-range]) .track__range:hover{cursor:ew-resize}:host([is-range]) .track__range:after{content:"";position:absolute;top:-5px;width:100%;height:14px}.tick{position:absolute;top:-2px;width:2px;height:4px;left:var(--calcite-ui-border-1-offset);margin-left:-2px;border:1px solid var(--calcite-ui-foreground-1);background-color:var(--calcite-ui-border-1)}.tick--active{background-color:var(--calcite-ui-blue-1)}.tick__label{position:absolute;font-size:0.75rem;line-height:1.5;font-weight:500;color:var(--calcite-ui-text-2);width:4em;margin:14px -2em;text-align:center;display:block;pointer-events:none}.tick__label--min{left:0;margin:14px -3px;text-align:left;-webkit-transition:opacity 150ms;transition:opacity 150ms}.tick__label--max{left:unset;right:0;margin:14px -3px;text-align:right;-webkit-transition:opacity 50ms;transition:opacity 50ms}:host([has-histogram][label-handles]) .tick__label--min,:host([has-histogram][label-handles]) .tick__label--max{margin:6px -3px;font-weight:300;color:var(--calcite-ui-text-3)}:host([has-histogram][precise]:not([precise=false])) .tick__label--min,:host([has-histogram][precise]:not([precise=false])) .tick__label--max{margin:6px -3px;font-weight:300;color:var(--calcite-ui-text-3)}.graph{width:100%;height:48px;position:relative;color:var(--calcite-ui-foreground-2)}.graph svg{position:absolute;width:100%;height:48px}.graph .graph-path--highlight{fill:var(--calcite-ui-blue-1);opacity:0.25}';var u=t("calcite_slider",function(){function t(t){e(this,t);this.calciteSliderUpdate=a(this,"calciteSliderUpdate",7);this.disabled=false;this.min=0;this.max=100;this.value=null;this.snap=true;this.step=1;this.hasHistogram=false;this.guid="calcite-slider-"+o();this.isRange=false;this.tickValues=[];this.activeProp="value";this.minMaxValueRange=null;this.minValueDragRange=null;this.maxValueDragRange=null}t.prototype.histogramWatcher=function(t){this.hasHistogram=t?true:false};t.prototype.componentWillLoad=function(){this.isRange=!!(this.maxValue||this.maxValue===0);this.tickValues=this.generateTickValues();this.value=this.bound(this.value);if(this.snap){this.value=this.getClosestStep(this.value)}if(this.histogram){this.hasHistogram=true}this.calciteSliderUpdate.emit()};t.prototype.componentDidRender=function(){if(this.labelHandles){this.adjustHostObscuredHandleLabel("value");if(this.isRange){this.adjustHostObscuredHandleLabel("minValue");if(!(this.precise&&this.isRange&&!this.hasHistogram)){this.hyphenateCollidingRangeHandleLabels()}}}this.hideObscuredBoundingTickLabels()};t.prototype.render=function(){var t=this;var e=this.el.id||this.guid;var a=this.minValue||this.min;var s=this.maxValue||this.value;var n=this.isRange?"maxValue":"value";var l=this[n];var o=this.getUnitInterval(a)*100+"%";var h=100-this.getUnitInterval(s)*100+"%";var u=i("button",{"aria-label":this.isRange?this.maxLabel:this.minLabel,"aria-orientation":"horizontal","aria-valuemax":this.max,"aria-valuemin":this.min,"aria-valuenow":l,class:{thumb:true,"thumb--value":true,"thumb--active":this.lastDragProp!=="minMaxValue"&&this.dragProp===n},disabled:this.disabled,onBlur:function(){return t.activeProp=null},onFocus:function(){return t.activeProp=n},onMouseDown:function(){return t.dragStart(n)},onTouchStart:function(e){return t.dragStart(n,e)},ref:function(e){return t.maxHandle=e},role:"slider",style:{right:h}},i("div",{class:"handle"}));var c=i("button",{"aria-label":this.isRange?this.maxLabel:this.minLabel,"aria-orientation":"horizontal","aria-valuemax":this.max,"aria-valuemin":this.min,"aria-valuenow":l,class:{thumb:true,"thumb--value":true,"thumb--active":this.lastDragProp!=="minMaxValue"&&this.dragProp===n},disabled:this.disabled,onBlur:function(){return t.activeProp=null},onFocus:function(){return t.activeProp=n},onMouseDown:function(){return t.dragStart(n)},onTouchStart:function(e){return t.dragStart(n,e)},ref:function(e){return t.maxHandle=e},role:"slider",style:{right:h}},i("span",{"aria-hidden":"true",class:"handle__label handle__label--value"},l?l.toLocaleString():l),i("span",{"aria-hidden":"true",class:"handle__label handle__label--value static"},l?l.toLocaleString():l),i("span",{"aria-hidden":"true",class:"handle__label handle__label--value transformed"},l?l.toLocaleString():l),i("div",{class:"handle"}));var d=i("button",{"aria-label":this.isRange?this.maxLabel:this.minLabel,"aria-orientation":"horizontal","aria-valuemax":this.max,"aria-valuemin":this.min,"aria-valuenow":l,class:{thumb:true,"thumb--value":true,"thumb--active":this.lastDragProp!=="minMaxValue"&&this.dragProp===n},disabled:this.disabled,onBlur:function(){return t.activeProp=null},onFocus:function(){return t.activeProp=n},onMouseDown:function(){return t.dragStart(n)},onTouchStart:function(e){return t.dragStart(n,e)},ref:function(e){return t.maxHandle=e},role:"slider",style:{right:h}},i("div",{class:"handle"}),i("span",{"aria-hidden":"true",class:"handle__label handle__label--value"},l?l.toLocaleString():l),i("span",{"aria-hidden":"true",class:"handle__label handle__label--value static"},l?l.toLocaleString():l),i("span",{"aria-hidden":"true",class:"handle__label handle__label--value transformed"},l?l.toLocaleString():l));var m=i("button",{"aria-label":this.isRange?this.maxLabel:this.minLabel,"aria-orientation":"horizontal","aria-valuemax":this.max,"aria-valuemin":this.min,"aria-valuenow":l,class:{thumb:true,"thumb--value":true,"thumb--active":this.lastDragProp!=="minMaxValue"&&this.dragProp===n,"thumb--precise":true},disabled:this.disabled,onBlur:function(){return t.activeProp=null},onFocus:function(){return t.activeProp=n},onMouseDown:function(){return t.dragStart(n)},onTouchStart:function(e){return t.dragStart(n,e)},ref:function(e){return t.maxHandle=e},role:"slider",style:{right:h}},i("div",{class:"handle"}),i("div",{class:"handle-extension"}));var p=i("button",{"aria-label":this.isRange?this.maxLabel:this.minLabel,"aria-orientation":"horizontal","aria-valuemax":this.max,"aria-valuemin":this.min,"aria-valuenow":l,class:{thumb:true,"thumb--value":true,"thumb--active":this.lastDragProp!=="minMaxValue"&&this.dragProp===n,"thumb--precise":true},disabled:this.disabled,onBlur:function(){return t.activeProp=null},onFocus:function(){return t.activeProp=n},onMouseDown:function(){return t.dragStart(n)},onTouchStart:function(e){return t.dragStart(n,e)},ref:function(e){return t.maxHandle=e},role:"slider",style:{right:h}},i("div",{class:"handle-extension"}),i("div",{class:"handle"}));var b=i("button",{"aria-label":this.isRange?this.maxLabel:this.minLabel,"aria-orientation":"horizontal","aria-valuemax":this.max,"aria-valuemin":this.min,"aria-valuenow":l,class:{thumb:true,"thumb--value":true,"thumb--active":this.lastDragProp!=="minMaxValue"&&this.dragProp===n,"thumb--precise":true},disabled:this.disabled,onBlur:function(){return t.activeProp=null},onFocus:function(){return t.activeProp=n},onMouseDown:function(){return t.dragStart(n)},onTouchStart:function(e){return t.dragStart(n,e)},ref:function(e){return t.maxHandle=e},role:"slider",style:{right:h}},i("span",{"aria-hidden":"true",class:"handle__label handle__label--value"},l?l.toLocaleString():l),i("span",{"aria-hidden":"true",class:"handle__label handle__label--value static"},l?l.toLocaleString():l),i("span",{"aria-hidden":"true",class:"handle__label handle__label--value transformed"},l?l.toLocaleString():l),i("div",{class:"handle"}),i("div",{class:"handle-extension"}));var f=i("button",{"aria-label":this.isRange?this.maxLabel:this.minLabel,"aria-orientation":"horizontal","aria-valuemax":this.max,"aria-valuemin":this.min,"aria-valuenow":l,class:{thumb:true,"thumb--value":true,"thumb--active":this.lastDragProp!=="minMaxValue"&&this.dragProp===n,"thumb--precise":true},disabled:this.disabled,onBlur:function(){return t.activeProp=null},onFocus:function(){return t.activeProp=n},onMouseDown:function(){return t.dragStart(n)},onTouchStart:function(e){return t.dragStart(n,e)},ref:function(e){return t.maxHandle=e},role:"slider",style:{right:h}},i("div",{class:"handle-extension"}),i("div",{class:"handle"}),i("span",{"aria-hidden":"true",class:"handle__label handle__label--value"},l?l.toLocaleString():l),i("span",{"aria-hidden":"true",class:"handle__label handle__label--value static"},l?l.toLocaleString():l),i("span",{"aria-hidden":"true",class:"handle__label handle__label--value transformed"},l?l.toLocaleString():l));var g=i("button",{"aria-label":this.minLabel,"aria-orientation":"horizontal","aria-valuemax":this.max,"aria-valuemin":this.min,"aria-valuenow":this.minValue,class:{thumb:true,"thumb--minValue":true,"thumb--active":this.dragProp==="minValue"},disabled:this.disabled,onBlur:function(){return t.activeProp=null},onFocus:function(){return t.activeProp="minValue"},onMouseDown:function(){return t.dragStart("minValue")},onTouchStart:function(e){return t.dragStart("minValue",e)},ref:function(e){return t.minHandle=e},role:"slider",style:{left:o}},i("div",{class:"handle"}));var v=i("button",{"aria-label":this.minLabel,"aria-orientation":"horizontal","aria-valuemax":this.max,"aria-valuemin":this.min,"aria-valuenow":this.minValue,class:{thumb:true,"thumb--minValue":true,"thumb--active":this.dragProp==="minValue"},disabled:this.disabled,onBlur:function(){return t.activeProp=null},onFocus:function(){return t.activeProp="minValue"},onMouseDown:function(){return t.dragStart("minValue")},onTouchStart:function(e){return t.dragStart("minValue",e)},ref:function(e){return t.minHandle=e},role:"slider",style:{left:o}},i("span",{"aria-hidden":"true",class:"handle__label handle__label--minValue"},this.minValue&&this.minValue.toLocaleString()),i("span",{"aria-hidden":"true",class:"handle__label handle__label--minValue static"},this.minValue&&this.minValue.toLocaleString()),i("span",{"aria-hidden":"true",class:"handle__label handle__label--minValue transformed"},this.minValue&&this.minValue.toLocaleString()),i("div",{class:"handle"}));var x=i("button",{"aria-label":this.minLabel,"aria-orientation":"horizontal","aria-valuemax":this.max,"aria-valuemin":this.min,"aria-valuenow":this.minValue,class:{thumb:true,"thumb--minValue":true,"thumb--active":this.dragProp==="minValue"},disabled:this.disabled,onBlur:function(){return t.activeProp=null},onFocus:function(){return t.activeProp="minValue"},onMouseDown:function(){return t.dragStart("minValue")},onTouchStart:function(e){return t.dragStart("minValue",e)},ref:function(e){return t.minHandle=e},role:"slider",style:{left:o}},i("div",{class:"handle"}),i("span",{"aria-hidden":"true",class:"handle__label handle__label--minValue"},this.minValue&&this.minValue.toLocaleString()),i("span",{"aria-hidden":"true",class:"handle__label handle__label--minValue static"},this.minValue&&this.minValue.toLocaleString()),i("span",{"aria-hidden":"true",class:"handle__label handle__label--minValue transformed"},this.minValue&&this.minValue.toLocaleString()));var _=i("button",{"aria-label":this.minLabel,"aria-orientation":"horizontal","aria-valuemax":this.max,"aria-valuemin":this.min,"aria-valuenow":this.minValue,class:{thumb:true,"thumb--minValue":true,"thumb--active":this.dragProp==="minValue","thumb--precise":true},disabled:this.disabled,onBlur:function(){return t.activeProp=null},onFocus:function(){return t.activeProp="minValue"},onMouseDown:function(){return t.dragStart("minValue")},onTouchStart:function(e){return t.dragStart("minValue",e)},ref:function(e){return t.minHandle=e},role:"slider",style:{left:o}},i("div",{class:"handle-extension"}),i("div",{class:"handle"}));var k=i("button",{"aria-label":this.minLabel,"aria-orientation":"horizontal","aria-valuemax":this.max,"aria-valuemin":this.min,"aria-valuenow":this.minValue,class:{thumb:true,"thumb--minValue":true,"thumb--active":this.dragProp==="minValue","thumb--precise":true},disabled:this.disabled,onBlur:function(){return t.activeProp=null},onFocus:function(){return t.activeProp="minValue"},onMouseDown:function(){return t.dragStart("minValue")},onTouchStart:function(e){return t.dragStart("minValue",e)},ref:function(e){return t.minHandle=e},role:"slider",style:{left:o}},i("div",{class:"handle-extension"}),i("div",{class:"handle"}),i("span",{"aria-hidden":"true",class:"handle__label handle__label--minValue"},this.minValue&&this.minValue.toLocaleString()),i("span",{"aria-hidden":"true",class:"handle__label handle__label--minValue static"},this.minValue&&this.minValue.toLocaleString()),i("span",{"aria-hidden":"true",class:"handle__label handle__label--minValue transformed"},this.minValue&&this.minValue.toLocaleString()));return i(r,{id:e,"is-range":this.isRange},this.renderGraph(),i("div",{class:"track"},i("div",{class:"track__range",onMouseDown:function(){return t.dragStart("minMaxValue")},onTouchStart:function(e){return t.dragStart("minMaxValue",e)},style:{left:o,right:h}}),i("div",{class:"ticks"},this.tickValues.map((function(e){return i("span",{class:{tick:true,"tick--active":e>=a&&e<=s},style:{left:t.getUnitInterval(e)*100+"%"}},t.renderTickLabel(e))})))),!this.precise&&!this.labelHandles&&this.isRange&&g,!this.hasHistogram&&!this.precise&&this.labelHandles&&this.isRange&&v,this.precise&&!this.labelHandles&&this.isRange&&_,this.precise&&this.labelHandles&&this.isRange&&k,this.hasHistogram&&!this.precise&&this.labelHandles&&this.isRange&&x,!this.precise&&!this.labelHandles&&u,!this.hasHistogram&&!this.precise&&this.labelHandles&&c,!this.hasHistogram&&this.precise&&!this.labelHandles&&m,this.hasHistogram&&this.precise&&!this.labelHandles&&p,!this.hasHistogram&&this.precise&&this.labelHandles&&b,this.hasHistogram&&!this.precise&&this.labelHandles&&d,this.hasHistogram&&this.precise&&this.labelHandles&&f)};t.prototype.renderGraph=function(){return this.histogram?i("div",{class:"graph"},i("calcite-graph",{data:this.histogram,height:48,highlightMax:this.isRange?this.maxValue:this.value,highlightMin:this.isRange?this.minValue:this.min,width:300})):null};t.prototype.renderTickLabel=function(t){var e=t===this.min;var a=t===this.max;var r=i("span",{class:{tick__label:true,"tick__label--min":e,"tick__label--max":a}},t.toLocaleString());if(this.labelTicks&&!this.hasHistogram&&!this.isRange){return r}if(this.labelTicks&&!this.hasHistogram&&this.isRange&&!this.precise&&!this.labelHandles){return r}if(this.labelTicks&&!this.hasHistogram&&this.isRange&&!this.precise&&this.labelHandles){return r}if(this.labelTicks&&!this.hasHistogram&&this.isRange&&this.precise&&(e||a)){return r}if(this.labelTicks&&this.hasHistogram&&!this.precise&&!this.labelHandles){return r}if(this.labelTicks&&this.hasHistogram&&this.precise&&!this.labelHandles&&(e||a)){return r}if(this.labelTicks&&this.hasHistogram&&!this.precise&&this.labelHandles&&(e||a)){return r}if(this.labelTicks&&this.hasHistogram&&this.precise&&this.labelHandles&&(e||a)){return r}return null};t.prototype.handleLabelFocus=function(t){if(t.detail.interactedEl!==this.el&&n(t.detail.labelEl,this.el)){this.setFocus()}};t.prototype.keyDownHandler=function(t){var e=this[this.activeProp];switch(l(t.key)){case"ArrowUp":case"ArrowRight":t.preventDefault();this[this.activeProp]=this.bound(e+this.step,this.activeProp);this.calciteSliderUpdate.emit();break;case"ArrowDown":case"ArrowLeft":t.preventDefault();this[this.activeProp]=this.bound(e-this.step,this.activeProp);this.calciteSliderUpdate.emit();break;case"PageUp":if(this.pageStep){t.preventDefault();this[this.activeProp]=this.bound(e+this.pageStep,this.activeProp);this.calciteSliderUpdate.emit()}break;case"PageDown":if(this.pageStep){t.preventDefault();this[this.activeProp]=this.bound(e-this.pageStep,this.activeProp);this.calciteSliderUpdate.emit()}break;case"Home":t.preventDefault();this[this.activeProp]=this.bound(this.min,this.activeProp);this.calciteSliderUpdate.emit();break;case"End":t.preventDefault();this[this.activeProp]=this.bound(this.max,this.activeProp);this.calciteSliderUpdate.emit();break}};t.prototype.clickHandler=function(t){var e=t.clientX||t.pageX;var a=this.translate(e);var i="value";if(this.isRange){if(this.lastDragProp==="minMaxValue"){i="minMaxValue"}else{var r=Math.abs(this.maxValue-a)<Math.abs(this.minValue-a);i=r?"maxValue":"minValue"}}this[i]=this.bound(a,i);this.calciteSliderUpdate.emit();switch(i){default:case"maxValue":this.maxHandle.focus();break;case"minValue":this.minHandle.focus();break;case"minMaxValue":break}};t.prototype.setFocus=function(){return __awaiter(this,void 0,void 0,(function(){var t;return __generator(this,(function(e){t=this.minHandle?this.minHandle:this.maxHandle;t.focus();return[2]}))}))};t.prototype.generateTickValues=function(){var t=[];var e=this.min;while(this.ticks&&e<this.max+this.ticks){t.push(e);e=e+this.ticks}return t};t.prototype.dragStart=function(t,e){if(e){e.preventDefault()}if(this.dragListener){this.dragEnd()}this.dragProp=t;this.lastDragProp=this.dragProp;this.activeProp=t;this.dragListener=this.dragListener||this.dragUpdate.bind(this);document.addEventListener("mousemove",this.dragListener);document.addEventListener("touchmove",this.dragListener,{capture:false});document.addEventListener("mouseup",this.dragEnd.bind(this));document.addEventListener("touchend",this.dragEnd.bind(this),false);document.addEventListener("touchcancel",this.dragEnd.bind(this))};t.prototype.dragUpdate=function(t){t.preventDefault();t.stopPropagation();if(this.dragProp){var e=this.translate(t.clientX||t.pageX);if(this.isRange&&this.dragProp==="minMaxValue"){if(this.minValueDragRange&&this.maxValueDragRange&&this.minMaxValueRange){var a=e-this.minValueDragRange;var i=e+this.maxValueDragRange;if(i<=this.max&&a>=this.min&&i-a===this.minMaxValueRange){this.minValue=this.bound(a,"minValue");this.maxValue=this.bound(i,"maxValue")}}else{this.minValueDragRange=e-this.minValue;this.maxValueDragRange=this.maxValue-e;this.minMaxValueRange=this.maxValue-this.minValue}}else{this[this.dragProp]=this.bound(e,this.dragProp)}this.calciteSliderUpdate.emit()}};t.prototype.dragEnd=function(){this.dragProp=null;document.removeEventListener("mousemove",this.dragListener);document.removeEventListener("touchmove",this.dragListener);this.minValueDragRange=null;this.maxValueDragRange=null;this.minMaxValueRange=null};t.prototype.bound=function(t,e){t=Math.min(t,this.max);t=Math.max(t,this.min);if(e==="maxValue"){t=Math.max(t,this.minValue)}if(e==="minValue"){t=Math.min(t,this.maxValue)}return t};t.prototype.translate=function(t){var e=this.max-this.min;var a=this.el.getBoundingClientRect(),i=a.left,r=a.width;var s=(t-i)/r;var n=this.bound(this.min+e*s);if(this.snap&&this.step){n=this.getClosestStep(n)}return n};t.prototype.getClosestStep=function(t){t=this.bound(t);if(this.step){var e=Math.round(t/this.step)*this.step;t=this.bound(e)}return t};t.prototype.getFontSizeForElement=function(t){return Number(window.getComputedStyle(t).getPropertyValue("font-size").match(/\d+/)[0])};t.prototype.getUnitInterval=function(t){t=this.bound(t);var e=this.max-this.min;return(t-this.min)/e};t.prototype.adjustHostObscuredHandleLabel=function(t){var e=this.el.shadowRoot.querySelector(".handle__label--"+t);var a=this.el.shadowRoot.querySelector(".handle__label--"+t+".static");var i=this.el.shadowRoot.querySelector(".handle__label--"+t+".transformed");var r=this.getHostOffset(a.getBoundingClientRect().left,a.getBoundingClientRect().right);e.style.transform="translateX("+r+"px)";i.style.transform="translateX("+r+"px)"};t.prototype.hyphenateCollidingRangeHandleLabels=function(){var t=this.el.shadowRoot.querySelector(".handle__label--minValue");var e=this.el.shadowRoot.querySelector(".handle__label--minValue.static");var a=this.el.shadowRoot.querySelector(".handle__label--minValue.transformed");var i=this.getHostOffset(e.getBoundingClientRect().left,e.getBoundingClientRect().right);var r=this.el.shadowRoot.querySelector(".handle__label--value");var s=this.el.shadowRoot.querySelector(".handle__label--value.static");var n=this.el.shadowRoot.querySelector(".handle__label--value.transformed");var l=this.getHostOffset(s.getBoundingClientRect().left,s.getBoundingClientRect().right);var o=this.getFontSizeForElement(t);var h=this.getRangeLabelOverlap(a,n);if(h>0){t.classList.add("hyphen");if(l===0&&i===0){var u=h/2-o/2;if(Math.sign(u)===-1){u=Math.abs(u)}else{u=-u}var c=this.getHostOffset(a.getBoundingClientRect().left+u-o/2,a.getBoundingClientRect().right+u-o/2);var d=h/2;var m=this.getHostOffset(n.getBoundingClientRect().left+d,n.getBoundingClientRect().right+d);if(c!==0){u=u+c;d=d+c}if(m!==0){u=u+m;d=d+m}t.style.transform="translateX("+u+"px)";a.style.transform="translateX("+(u-o/2)+"px)";r.style.transform="translateX("+d+"px)";n.style.transform="translateX("+d+"px)"}else if(i!==0&&(Math.sign(l)===0||Math.sign(l)===1)){t.style.transform="translateX("+(i+o/2)+"px)";r.style.transform="translateX("+(h+l)+"px)";n.style.transform="translateX("+(h+l)+"px)"}else if(l!==0){var u=Math.abs(i)+h-o/2;if(Math.sign(u)===-1){u=Math.abs(u)}else{u=-u}t.style.transform="translateX("+u+"px)";a.style.transform="translateX("+(u-o/2)+"px)"}}else{t.classList.remove("hyphen");t.style.transform="translateX("+i+"px)";a.style.transform="translateX("+i+"px)";r.style.transform="translateX("+l+"px)";n.style.transform="translateX("+l+"px)"}};t.prototype.hideObscuredBoundingTickLabels=function(){if(!this.hasHistogram&&!this.isRange&&!this.labelHandles&&!this.precise){return}if(!this.hasHistogram&&!this.isRange&&this.labelHandles&&!this.precise){return}if(!this.hasHistogram&&!this.isRange&&!this.labelHandles&&this.precise){return}if(!this.hasHistogram&&!this.isRange&&this.labelHandles&&this.precise){return}if(!this.hasHistogram&&this.isRange&&!this.precise){return}if(this.hasHistogram&&!this.precise&&!this.labelHandles){return}var t=this.el.shadowRoot.querySelector(".thumb--minValue");var e=this.el.shadowRoot.querySelector(".thumb--value");var a=this.el.shadowRoot.querySelector(".tick__label--min");var i=this.el.shadowRoot.querySelector(".tick__label--max");if(!t&&e&&a&&i){if(this.isMinTickLabelObscured(a,e)){a.style.opacity="0"}else{a.style.opacity="1"}if(this.isMaxTickLabelObscured(i,e)){i.style.opacity="0"}else{i.style.opacity="1"}}if(t&&e&&a&&i){if(this.isMinTickLabelObscured(a,t)||this.isMinTickLabelObscured(a,e)){a.style.opacity="0"}else{a.style.opacity="1"}if(this.isMaxTickLabelObscured(i,t)||this.isMaxTickLabelObscured(i,e)&&this.hasHistogram){i.style.opacity="0"}else{i.style.opacity="1"}}};t.prototype.getHostOffset=function(t,e){var a=this.el.getBoundingClientRect();if(t+7<a.left){var i=a.left-t-7;return i}if(e-7>a.right){var i=-(e-a.right)+7;return i}return 0};t.prototype.getRangeLabelOverlap=function(t,e){var a=t.getBoundingClientRect();var i=e.getBoundingClientRect();var r=this.getFontSizeForElement(t);var s=a.right+r-i.left;return s>0?s:0};t.prototype.isMinTickLabelObscured=function(t,e){var a=t.getBoundingClientRect();var i=e.getBoundingClientRect();if(i.left<a.right){return true}return false};t.prototype.isMaxTickLabelObscured=function(t,e){var a=t.getBoundingClientRect();var i=e.getBoundingClientRect();if(i.right>a.left){return true}return false};Object.defineProperty(t.prototype,"el",{get:function(){return s(this)},enumerable:false,configurable:true});Object.defineProperty(t,"watchers",{get:function(){return{histogram:["histogramWatcher"]}},enumerable:false,configurable:true});return t}());u.style=h}}}));