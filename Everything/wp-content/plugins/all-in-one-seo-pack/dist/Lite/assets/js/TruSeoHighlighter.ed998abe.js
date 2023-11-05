import{M as L,N as ae,r as le,v as he,O as de,P as ge}from"./links.37929787.js";import{r as N,o as ue,c as ce,a as p,d as M,n as fe,z as V,g as B,K as pe,L as be,E as ve,q as me}from"./vue.runtime.esm-bundler.588d3a9f.js";import{r as Se,i as ye,n as ke,j as I}from"./postContent.a843d374.js";import{S as He}from"./Ellipse.60ee808e.js";import{a as we,S as Ee}from"./Caret.4d98c50a.js";import{_ as xe}from"./_plugin-vue_export-helper.a6f24833.js";import{u as Me,j as Ce,z as _e}from"./isArrayLikeObject.10b615a9.js";import{t as J,a as K}from"./toFinite.c2274946.js";var Ne=function(){return Me.Date.now()};const P=Ne;var Be="Expected a function",Ie=Math.max,Pe=Math.min;function T(e,t,i){var r,o,s,a,n,l,h=0,m=!1,b=!1,S=!0;if(typeof e!="function")throw new TypeError(Be);t=J(t)||0,Ce(i)&&(m=!!i.leading,b="maxWait"in i,s=b?Ie(J(i.maxWait)||0,t):s,S="trailing"in i?!!i.trailing:S);function y(d){var v=r,k=o;return r=o=void 0,h=d,a=e.apply(k,v),a}function w(d){return h=d,n=setTimeout(x,t),m?y(d):a}function E(d){var v=d-l,k=d-h,D=t-v;return b?Pe(D,s-k):D}function F(d){var v=d-l,k=d-h;return l===void 0||v>=t||v<0||b&&k>=s}function x(){var d=P();if(F(d))return z(d);n=setTimeout(x,E(d))}function z(d){return n=void 0,S&&r?y(d):(r=o=void 0,a)}function ne(){n!==void 0&&clearTimeout(n),h=0,r=l=o=n=void 0}function se(){return n===void 0?a:z(P())}function _(){var d=P(),v=F(d);if(r=arguments,o=this,l=d,v){if(n===void 0)return w(l);if(b)return clearTimeout(n),n=setTimeout(x,t),y(l)}return n===void 0&&(n=setTimeout(x,t)),a}return _.cancel=ne,_.flush=se,_}var Te=Math.floor,Oe=Math.random;function Ae(e,t){return e+Te(Oe()*(t-e+1))}var Re=parseFloat,We=Math.min,$e=Math.random;function Le(e,t,i){if(i&&typeof i!="boolean"&&_e(e,t,i)&&(t=i=void 0),i===void 0&&(typeof t=="boolean"?(i=t,t=void 0):typeof e=="boolean"&&(i=e,e=void 0)),e===void 0&&t===void 0?(e=0,t=1):(e=K(e),t===void 0?(t=e,e=0):t=K(t)),e>t){var r=e;e=t,t=r}if(i||e%1||t%1){var o=$e();return We(e+o*(t-e+Re("1e-"+((o+"").length-1))),t)}return Ae(e,t)}const je=e=>e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");var qe={grad:.9,turn:360,rad:360/(2*Math.PI)},f=function(e){return typeof e=="string"?e.length>0:typeof e=="number"},g=function(e,t,i){return t===void 0&&(t=0),i===void 0&&(i=Math.pow(10,t)),Math.round(i*e)/i+0},u=function(e,t,i){return t===void 0&&(t=0),i===void 0&&(i=1),e>i?i:e>t?e:t},ie=function(e){return(e=isFinite(e)?e%360:0)>0?e:e+360},U=function(e){return{r:u(e.r,0,255),g:u(e.g,0,255),b:u(e.b,0,255),a:u(e.a)}},O=function(e){return{r:g(e.r),g:g(e.g),b:g(e.b),a:g(e.a,3)}},Fe=/^#([0-9a-f]{3,8})$/i,C=function(e){var t=e.toString(16);return t.length<2?"0"+t:t},re=function(e){var t=e.r,i=e.g,r=e.b,o=e.a,s=Math.max(t,i,r),a=s-Math.min(t,i,r),n=a?s===t?(i-r)/a:s===i?2+(r-t)/a:4+(t-i)/a:0;return{h:60*(n<0?n+6:n),s:s?a/s*100:0,v:s/255*100,a:o}},oe=function(e){var t=e.h,i=e.s,r=e.v,o=e.a;t=t/360*6,i/=100,r/=100;var s=Math.floor(t),a=r*(1-i),n=r*(1-(t-s)*i),l=r*(1-(1-t+s)*i),h=s%6;return{r:255*[r,n,a,a,l,r][h],g:255*[l,r,r,n,a,a][h],b:255*[a,a,l,r,r,n][h],a:o}},X=function(e){return{h:ie(e.h),s:u(e.s,0,100),l:u(e.l,0,100),a:u(e.a)}},G=function(e){return{h:g(e.h),s:g(e.s),l:g(e.l),a:g(e.a,3)}},Q=function(e){return oe((i=(t=e).s,{h:t.h,s:(i*=((r=t.l)<50?r:100-r)/100)>0?2*i/(r+i)*100:0,v:r+i,a:t.a}));var t,i,r},H=function(e){return{h:(t=re(e)).h,s:(o=(200-(i=t.s))*(r=t.v)/100)>0&&o<200?i*r/100/(o<=100?o:200-o)*100:0,l:o/2,a:t.a};var t,i,r,o},ze=/^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s*,\s*([+-]?\d*\.?\d+)%\s*,\s*([+-]?\d*\.?\d+)%\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,De=/^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s+([+-]?\d*\.?\d+)%\s+([+-]?\d*\.?\d+)%\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,Ve=/^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,Je=/^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,j={string:[[function(e){var t=Fe.exec(e);return t?(e=t[1]).length<=4?{r:parseInt(e[0]+e[0],16),g:parseInt(e[1]+e[1],16),b:parseInt(e[2]+e[2],16),a:e.length===4?g(parseInt(e[3]+e[3],16)/255,2):1}:e.length===6||e.length===8?{r:parseInt(e.substr(0,2),16),g:parseInt(e.substr(2,2),16),b:parseInt(e.substr(4,2),16),a:e.length===8?g(parseInt(e.substr(6,2),16)/255,2):1}:null:null},"hex"],[function(e){var t=Ve.exec(e)||Je.exec(e);return t?t[2]!==t[4]||t[4]!==t[6]?null:U({r:Number(t[1])/(t[2]?100/255:1),g:Number(t[3])/(t[4]?100/255:1),b:Number(t[5])/(t[6]?100/255:1),a:t[7]===void 0?1:Number(t[7])/(t[8]?100:1)}):null},"rgb"],[function(e){var t=ze.exec(e)||De.exec(e);if(!t)return null;var i,r,o=X({h:(i=t[1],r=t[2],r===void 0&&(r="deg"),Number(i)*(qe[r]||1)),s:Number(t[3]),l:Number(t[4]),a:t[5]===void 0?1:Number(t[5])/(t[6]?100:1)});return Q(o)},"hsl"]],object:[[function(e){var t=e.r,i=e.g,r=e.b,o=e.a,s=o===void 0?1:o;return f(t)&&f(i)&&f(r)?U({r:Number(t),g:Number(i),b:Number(r),a:Number(s)}):null},"rgb"],[function(e){var t=e.h,i=e.s,r=e.l,o=e.a,s=o===void 0?1:o;if(!f(t)||!f(i)||!f(r))return null;var a=X({h:Number(t),s:Number(i),l:Number(r),a:Number(s)});return Q(a)},"hsl"],[function(e){var t=e.h,i=e.s,r=e.v,o=e.a,s=o===void 0?1:o;if(!f(t)||!f(i)||!f(r))return null;var a=function(n){return{h:ie(n.h),s:u(n.s,0,100),v:u(n.v,0,100),a:u(n.a)}}({h:Number(t),s:Number(i),v:Number(r),a:Number(s)});return oe(a)},"hsv"]]},Y=function(e,t){for(var i=0;i<t.length;i++){var r=t[i][0](e);if(r)return[r,t[i][1]]}return[null,void 0]},Ke=function(e){return typeof e=="string"?Y(e.trim(),j.string):typeof e=="object"&&e!==null?Y(e,j.object):[null,void 0]},A=function(e,t){var i=H(e);return{h:i.h,s:u(i.s+100*t,0,100),l:i.l,a:i.a}},R=function(e){return(299*e.r+587*e.g+114*e.b)/1e3/255},Z=function(e,t){var i=H(e);return{h:i.h,s:i.s,l:u(i.l+100*t,0,100),a:i.a}},q=function(){function e(t){this.parsed=Ke(t)[0],this.rgba=this.parsed||{r:0,g:0,b:0,a:1}}return e.prototype.isValid=function(){return this.parsed!==null},e.prototype.brightness=function(){return g(R(this.rgba),2)},e.prototype.isDark=function(){return R(this.rgba)<.5},e.prototype.isLight=function(){return R(this.rgba)>=.5},e.prototype.toHex=function(){return t=O(this.rgba),i=t.r,r=t.g,o=t.b,a=(s=t.a)<1?C(g(255*s)):"","#"+C(i)+C(r)+C(o)+a;var t,i,r,o,s,a},e.prototype.toRgb=function(){return O(this.rgba)},e.prototype.toRgbString=function(){return t=O(this.rgba),i=t.r,r=t.g,o=t.b,(s=t.a)<1?"rgba("+i+", "+r+", "+o+", "+s+")":"rgb("+i+", "+r+", "+o+")";var t,i,r,o,s},e.prototype.toHsl=function(){return G(H(this.rgba))},e.prototype.toHslString=function(){return t=G(H(this.rgba)),i=t.h,r=t.s,o=t.l,(s=t.a)<1?"hsla("+i+", "+r+"%, "+o+"%, "+s+")":"hsl("+i+", "+r+"%, "+o+"%)";var t,i,r,o,s},e.prototype.toHsv=function(){return t=re(this.rgba),{h:g(t.h),s:g(t.s),v:g(t.v),a:g(t.a,3)};var t},e.prototype.invert=function(){return c({r:255-(t=this.rgba).r,g:255-t.g,b:255-t.b,a:t.a});var t},e.prototype.saturate=function(t){return t===void 0&&(t=.1),c(A(this.rgba,t))},e.prototype.desaturate=function(t){return t===void 0&&(t=.1),c(A(this.rgba,-t))},e.prototype.grayscale=function(){return c(A(this.rgba,-1))},e.prototype.lighten=function(t){return t===void 0&&(t=.1),c(Z(this.rgba,t))},e.prototype.darken=function(t){return t===void 0&&(t=.1),c(Z(this.rgba,-t))},e.prototype.rotate=function(t){return t===void 0&&(t=15),this.hue(this.hue()+t)},e.prototype.alpha=function(t){return typeof t=="number"?c({r:(i=this.rgba).r,g:i.g,b:i.b,a:t}):g(this.rgba.a,3);var i},e.prototype.hue=function(t){var i=H(this.rgba);return typeof t=="number"?c({h:t,s:i.s,l:i.l,a:i.a}):g(i.h)},e.prototype.isEqual=function(t){return this.toHex()===c(t).toHex()},e}(),c=function(e){return e instanceof q?e:new q(e)},ee=[],Ue=function(e){e.forEach(function(t){ee.indexOf(t)<0&&(t(q,j),ee.push(t))})};function Xe(e,t){var i={white:"#ffffff",bisque:"#ffe4c4",blue:"#0000ff",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",antiquewhite:"#faebd7",aqua:"#00ffff",azure:"#f0ffff",whitesmoke:"#f5f5f5",papayawhip:"#ffefd5",plum:"#dda0dd",blanchedalmond:"#ffebcd",black:"#000000",gold:"#ffd700",goldenrod:"#daa520",gainsboro:"#dcdcdc",cornsilk:"#fff8dc",cornflowerblue:"#6495ed",burlywood:"#deb887",aquamarine:"#7fffd4",beige:"#f5f5dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkkhaki:"#bdb76b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",peachpuff:"#ffdab9",darkmagenta:"#8b008b",darkred:"#8b0000",darkorchid:"#9932cc",darkorange:"#ff8c00",darkslateblue:"#483d8b",gray:"#808080",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",deeppink:"#ff1493",deepskyblue:"#00bfff",wheat:"#f5deb3",firebrick:"#b22222",floralwhite:"#fffaf0",ghostwhite:"#f8f8ff",darkviolet:"#9400d3",magenta:"#ff00ff",green:"#008000",dodgerblue:"#1e90ff",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",blueviolet:"#8a2be2",forestgreen:"#228b22",lawngreen:"#7cfc00",indianred:"#cd5c5c",indigo:"#4b0082",fuchsia:"#ff00ff",brown:"#a52a2a",maroon:"#800000",mediumblue:"#0000cd",lightcoral:"#f08080",darkturquoise:"#00ced1",lightcyan:"#e0ffff",ivory:"#fffff0",lightyellow:"#ffffe0",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",linen:"#faf0e6",mediumaquamarine:"#66cdaa",lemonchiffon:"#fffacd",lime:"#00ff00",khaki:"#f0e68c",mediumseagreen:"#3cb371",limegreen:"#32cd32",mediumspringgreen:"#00fa9a",lightskyblue:"#87cefa",lightblue:"#add8e6",midnightblue:"#191970",lightpink:"#ffb6c1",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",mintcream:"#f5fffa",lightslategray:"#778899",lightslategrey:"#778899",navajowhite:"#ffdead",navy:"#000080",mediumvioletred:"#c71585",powderblue:"#b0e0e6",palegoldenrod:"#eee8aa",oldlace:"#fdf5e6",paleturquoise:"#afeeee",mediumturquoise:"#48d1cc",mediumorchid:"#ba55d3",rebeccapurple:"#663399",lightsteelblue:"#b0c4de",mediumslateblue:"#7b68ee",thistle:"#d8bfd8",tan:"#d2b48c",orchid:"#da70d6",mediumpurple:"#9370db",purple:"#800080",pink:"#ffc0cb",skyblue:"#87ceeb",springgreen:"#00ff7f",palegreen:"#98fb98",red:"#ff0000",yellow:"#ffff00",slateblue:"#6a5acd",lavenderblush:"#fff0f5",peru:"#cd853f",palevioletred:"#db7093",violet:"#ee82ee",teal:"#008080",slategray:"#708090",slategrey:"#708090",aliceblue:"#f0f8ff",darkseagreen:"#8fbc8f",darkolivegreen:"#556b2f",greenyellow:"#adff2f",seagreen:"#2e8b57",seashell:"#fff5ee",tomato:"#ff6347",silver:"#c0c0c0",sienna:"#a0522d",lavender:"#e6e6fa",lightgreen:"#90ee90",orange:"#ffa500",orangered:"#ff4500",steelblue:"#4682b4",royalblue:"#4169e1",turquoise:"#40e0d0",yellowgreen:"#9acd32",salmon:"#fa8072",saddlebrown:"#8b4513",sandybrown:"#f4a460",rosybrown:"#bc8f8f",darksalmon:"#e9967a",lightgoldenrodyellow:"#fafad2",snow:"#fffafa",lightgrey:"#d3d3d3",lightgray:"#d3d3d3",dimgray:"#696969",dimgrey:"#696969",olivedrab:"#6b8e23",olive:"#808000"},r={};for(var o in i)r[i[o]]=o;var s={};e.prototype.toName=function(a){if(!(this.rgba.a||this.rgba.r||this.rgba.g||this.rgba.b))return"transparent";var n,l,h=r[this.toHex()];if(h)return h;if(a!=null&&a.closest){var m=this.toRgb(),b=1/0,S="black";if(!s.length)for(var y in i)s[y]=new e(i[y]).toRgb();for(var w in i){var E=(n=m,l=s[w],Math.pow(n.r-l.r,2)+Math.pow(n.g-l.g,2)+Math.pow(n.b-l.b,2));E<b&&(b=E,S=w)}return S}},t.string.push([function(a){var n=a.toLowerCase(),l=n==="transparent"?"#0000":i[n];return l?new e(l).toRgb():null},"name"])}var W=function(e){var t=e/255;return t<.04045?t/12.92:Math.pow((t+.055)/1.055,2.4)},$=function(e){return .2126*W(e.r)+.7152*W(e.g)+.0722*W(e.b)};function Ge(e){e.prototype.luminance=function(){return t=$(this.rgba),(i=2)===void 0&&(i=0),r===void 0&&(r=Math.pow(10,i)),Math.round(r*t)/r+0;var t,i,r},e.prototype.contrast=function(t){t===void 0&&(t="#FFF");var i,r,o,s,a,n,l,h=t instanceof e?t:new e(t);return s=this.rgba,a=h.toRgb(),n=$(s),l=$(a),i=n>l?(n+.05)/(l+.05):(l+.05)/(n+.05),(r=2)===void 0&&(r=0),o===void 0&&(o=Math.pow(10,r)),Math.floor(o*i)/o+0},e.prototype.isReadable=function(t,i){return t===void 0&&(t="#FFF"),i===void 0&&(i={}),this.contrast(t)>=(n=(a=(r=i).size)===void 0?"normal":a,(s=(o=r.level)===void 0?"AA":o)==="AAA"&&n==="normal"?7:s==="AA"&&n==="large"?3:4.5);var r,o,s,a,n}}Ue([Xe,Ge]);function te(e,t){const i=c(t),r=({color:s})=>i.contrast(s),o=Math.max(...e.map(r));return e.find(s=>r(s)===o).color}const Qe={setup(){return{truSeoHighlighterStore:L()}},emits:["next","previous"],components:{SvgEllipse:He,SvgCaret:we,SvgClose:Ee},data(){return{error:this.truSeoHighlighterStore.highlightAnalyzerHasError,order:this.truSeoHighlighterStore.highlightMarks.findIndex(e=>e.active)+1,total:this.truSeoHighlighterStore.highlightMarks.length}},methods:{close(){this.truSeoHighlighterStore.toggleHighlightAnalyzer(null)}}},Ye=e=>(pe("data-v-966cf3f9"),e=e(),be(),e),Ze={class:"tru-seo-highlight-popover","data-arrow-placement":"right"},et={class:"tru-seo-highlight-popover__count"},tt=Ye(()=>p("div",{class:"tru-seo-highlight-popover__pipe"},null,-1)),it={class:"tru-seo-highlight-popover__nav"},rt=["disabled"],ot=["disabled"],nt={class:"tru-seo-highlight-popover__close"};function st(e,t,i,r,o,s){const a=N("svg-ellipse"),n=N("svg-caret"),l=N("svg-close");return ue(),ce("div",Ze,[p("div",{class:fe(["tru-seo-highlight-popover__bullet",{"tru-seo-highlight-popover__bullet--error":o.error}])},[M(a,{width:"8"})],2),p("div",et,[p("span",null,V(o.order)+"/"+V(o.total),1)]),tt,p("div",it,[p("button",{type:"button",class:"caret-wrapper caret-wrapper--previous",tabindex:"0",disabled:o.order===1,onClick:t[0]||(t[0]=B(h=>e.$emit("previous"),["stop","exact"]))},[M(n,{width:"20"})],8,rt),p("button",{type:"button",class:"caret-wrapper",tabindex:"0",disabled:o.order===o.total,onClick:t[1]||(t[1]=B(h=>e.$emit("next"),["stop","exact"]))},[M(n,{width:"20"})],8,ot)]),p("div",nt,[p("button",{type:"button",class:"close-wrapper",tabindex:"0",onClickOnce:t[2]||(t[2]=B((...h)=>s.close&&s.close(...h),["stop","exact"]))},[M(l,{width:"10"})],32)])])}const at=xe(Qe,[["render",st],["__scopeId","data-v-966cf3f9"]]),bt={setup(){return{truSeoHighlighterStore:L()}},computed:{...ae(L),markBgColor(){var r,o;const e="#cce0ff";if(typeof te!="function")return e;const t=((r=this.getEditorNode("first-block"))==null?void 0:r.parentElement)||{},i=Object.values(t).length?(o=document.defaultView.getComputedStyle(t))==null?void 0:o.backgroundColor:"";return i&&!i.match(/(fffff|255,\s?255,\s?255|rgba)/gi)?te([{color:"#e6f0ff"},{color:e},{color:"#b3d1ff"}],i):e}},data(){var e,t,i,r;return{editorObserver:null,editorWrapperRect:{},isBlockEditor:le(),isClassicEditor:he(),tinymceEditor:null,selectBlockEditor:(t=(e=window==null?void 0:window.wp)==null?void 0:e.data)==null?void 0:t.select("core/block-editor"),selectEditPost:(r=(i=window==null?void 0:window.wp)==null?void 0:i.data)==null?void 0:r.select("core/edit-post"),strings:{highlightSections:this.$t.__("Highlight sections in the Editor",this.$td)}}},methods:{annotateBlock(e){var i,r,o,s,a,n;let t="content";(r=(i=e.block)==null?void 0:i.attributes)!=null&&r.caption?t="caption":(s=(o=e.block)==null?void 0:o.attributes)!=null&&s.value?t="value":(n=(a=e.block)==null?void 0:a.attributes)!=null&&n.citation&&(t="citation"),this.truSeoHighlighterStore.dispatchAnnotations.__experimentalAddAnnotation({id:e.id,range:e.range,source:this.truSeoHighlighterStore.source,blockClientId:e.block.clientId,richTextIdentifier:t})},annotateTinyMce(e,t){if(!t)return!1;!t.hasFocus()&&this.isBlockEditor&&t.focus();let i=t.selection.win.getSelection();i.selectAllChildren(e.parent);const r=i.toString().length;if(e.range.end<r)for(let o=e.range.end;o<r;o++)i.modify("extend","backward","character");if(0<e.range.start){i=Se(i);for(let o=e.range.start;0<o;o--)i.modify("extend","forward","character")}t.undoManager.ignore(()=>{t.annotator.annotate(this.truSeoHighlighterStore.source,{uid:e.id})}),i.empty()},appendHighlightPopover(){if(this.truSeoHighlighterStore.clearHighlightPopover(),this.truSeoHighlighterStore.sanitizeHighlightMarks(),!this.truSeoHighlighterStore.activeMark)return!1;const e=this,t=ve({name:"TruSeoHighlightPopover",render(){return me(at,{onNext(){e.incrementActiveMark(1)},onPrevious(){e.incrementActiveMark(-1)}})}}),i=ye(),r=new ResizeObserver(T(this.repositionHighlightPopover,750)),o=this.getEditorNode("wrapper");if(!o)return!1;o.parentElement.appendChild(i),t.mount(i),r.observe(this.getEditorNode("wrapper"),{box:"border-box"}),this.truSeoHighlighterStore.highlightPopover.app=t,this.truSeoHighlighterStore.highlightPopover.node=i,this.truSeoHighlighterStore.highlightPopover.observer=r,this.repositionHighlightPopover()},disallowHighlighting(){this.truSeoHighlighterStore.toggleHighlightAnalyzer(null),this.truSeoHighlighterStore.allowHighlighting=!1},formatBlockContent({block:e,node:t}){var r,o,s,a;let i="";return t?i=t.outerText.replace(/\n\n/g,`
`):e&&(i=((r=e==null?void 0:e.attributes)==null?void 0:r.content)||((o=e==null?void 0:e.attributes)==null?void 0:o.caption)||((s=e==null?void 0:e.attributes)==null?void 0:s.value)||((a=e==null?void 0:e.attributes)==null?void 0:a.citation)||"",i=i.replace(/<br[^>]*>/gi,`
`),i=de(i)),ke(i)},getEditorNode(e){var t;if(e==="closest-relative")return I({element:this.getEditorNode("wrapper").parentElement,property:"position",value:"relative"});if(e==="navigable")return I({element:this.getEditorNode("wrapper").parentElement,property:"overflow-y",value:"auto"});if(this.isClassicEditor){if(e==="wrapper")return document.getElementById("content_ifr");if(e==="first-block")return((t=this.tinymceEditor.getBody())==null?void 0:t.firstChild)||{}}if(this.isBlockEditor){if(e==="wrapper")return document.querySelector(".editor-styles-wrapper");if(e==="first-block"){const i=this.selectBlockEditor.getBlocks()[0];return document.getElementById(`block-${i==null?void 0:i.clientId}`)||{}}}},highlightBlockEditor(){var e;for(const t of this.selectBlockEditor.getBlocks()||[]){if(t.name==="core/freeform"){const i=window.tinymce.get(`editor-${t.clientId}`),r=((e=i.getBody())==null?void 0:e.children)||[];if(!r.length)continue;this.registerTinyMceAnnotator(i);for(const o of r)this.setHighlightMarks({block:t,node:o});continue}this.setHighlightMarks({block:t,node:null})}for(const[t,i]of Object.entries(this.truSeoHighlighterStore.highlightMarks))this.observeMarkParent(i.parent,parseInt(t)===this.truSeoHighlighterStore.highlightMarks.length-1),i.block.name==="core/freeform"?this.annotateTinyMce(i,window.tinymce.get(`editor-${i.block.clientId}`)):this.annotateBlock(i)},highlightClassicEditor(){var t;const e=((t=this.tinymceEditor.getBody())==null?void 0:t.children)||[];if(!e.length)return!1;this.registerTinyMceAnnotator(this.tinymceEditor);for(const i of e)this.setHighlightMarks({block:null,node:i});for(const[i,r]of Object.entries(this.truSeoHighlighterStore.highlightMarks))this.observeMarkParent(r.parent,parseInt(i)===this.truSeoHighlighterStore.highlightMarks.length-1),this.annotateTinyMce(r,this.tinymceEditor)},incrementActiveMark(e){const t=this.truSeoHighlighterStore.highlightMarks.findIndex(i=>i.active);if(!this.truSeoHighlighterStore.highlightMarks[t+e])return!1;this.truSeoHighlighterStore.allowScrolling=!0,this.truSeoHighlighterStore.highlightMarks[t].active=!1,this.truSeoHighlighterStore.highlightMarks[t+e].active=!0,this.appendHighlightPopover()},listenWindowCopy(e){var s,a;const t=()=>{e.preventDefault(),e.clipboardData.setData("text/html",window.getSelection().toString())},i=window.getSelection()||{};if(!(i!=null&&i.rangeCount))return!1;const r=((s=e.clipboardData)==null?void 0:s.getData("text/html"))||"";if(r&&r.indexOf(this.truSeoHighlighterStore.source)!==-1)return t(),!1;const o=i.getRangeAt(0)||{};for(const n of Object.values(((a=o==null?void 0:o.cloneContents())==null?void 0:a.children)||[]))if(Object.values((n==null?void 0:n.classList)||[]).some(l=>l.endsWith(this.truSeoHighlighterStore.source)))return t(),!1},listenWindowKeyup(e){var s,a;const t=(n,l)=>{n.collapse(l.firstChild,l.firstChild.length),n.deleteFromDocument()};if(["Delete","Backspace"].indexOf(e.key)===-1)return!1;const i=window.getSelection()||null;if(!(i!=null&&i.toString()))return!1;const r=((s=i==null?void 0:i.anchorNode)==null?void 0:s.parentElement)||null,o=((a=i==null?void 0:i.anchorNode)==null?void 0:a.nextElementSibling)||null;Object.values((r==null?void 0:r.classList)||[]).some(n=>n.endsWith(this.truSeoHighlighterStore.source))?t(i,r):Object.values((o==null?void 0:o.classList)||[]).some(n=>n.endsWith(this.truSeoHighlighterStore.source))&&t(i,o)},observeEditor(){var t;this.editorObserver=new MutationObserver(i=>{let r=!1;for(const o of i)for(const s of(o==null?void 0:o.removedNodes)||[])(this.truSeoHighlighterStore.highlightMarks.some(a=>s.isEqualNode(a.parent))||Object.values((s==null?void 0:s.classList)||[]).some(a=>a.endsWith(this.truSeoHighlighterStore.source)))&&(r=!0);r&&this.reset()});const e=(t=this.getEditorNode("first-block"))==null?void 0:t.parentElement;if(typeof e!="object")return!1;this.editorObserver.observe(e,{attributes:!1,childList:!0,subtree:!0})},observeMarkParent(e,t=!1){const i=(o,s)=>{var a;s.disconnect();for(const n of o){if(Object.values(((a=n==null?void 0:n.target)==null?void 0:a.classList)||[]).some(l=>l.endsWith(this.truSeoHighlighterStore.source))){this.setHighlightMarkNode(n.target);continue}for(const l of(n==null?void 0:n.addedNodes)||[])if(Object.values((l==null?void 0:l.classList)||[]).some(h=>h.endsWith(this.truSeoHighlighterStore.source))){this.setHighlightMarkNode(l);break}}t&&this.$nextTick().then(()=>T(this.appendHighlightPopover,250)())};if(typeof(e==null?void 0:e.parentElement)!="object")return!1;new MutationObserver(i).observe(e,{attributes:!0,childList:!0,subtree:!0})},observeWpBodyContent(){const e=t=>{var i,r,o;for(const s of t){if((s==null?void 0:s.type)!=="attributes")continue;if(!I({element:(i=this.getEditorNode("wrapper"))==null?void 0:i.parentElement,property:"display",value:"none"}).isEqualNode(document.documentElement))return this.disallowHighlighting(),!1;if(this.isBlockEditor&&(this.selectEditPost.getEditorMode()!=="visual"||this.selectBlockEditor.getBlockMode((r=this.selectBlockEditor.getSelectedBlock())==null?void 0:r.clientId)==="html"))return this.disallowHighlighting(),!1;if(this.isClassicEditor&&(this.setTinymceEditor(),((o=document.getElementById("content"))==null?void 0:o.nodeName)==="TEXTAREA"&&document.getElementById("content").style.display!=="none"))return this.disallowHighlighting(),!1;this.truSeoHighlighterStore.allowHighlighting=!0}};this.wpBodyContentObserver=new MutationObserver(T(e,250)),this.wpBodyContentObserver.observe(document.getElementById("wpbody-content"),{attributes:!0,childList:!1,subtree:!0})},registerTinyMceAnnotator(e){e.annotator.register(this.truSeoHighlighterStore.source,{persistent:!1,decorate:()=>({classes:["annotation-text",`annotation-text-${this.truSeoHighlighterStore.source}`]})})},repositionHighlightPopover(e=[]){var h;if(!this.truSeoHighlighterStore.activeMark||!this.truSeoHighlighterStore.highlightPopover.node)return!1;for(const m of e)if(JSON.stringify(m.contentRect)===JSON.stringify(this.editorWrapperRect))return!1;e.length&&(this.editorWrapperRect=((h=e[0])==null?void 0:h.contentRect)||this.editorWrapperRect,this.truSeoHighlighterStore.allowScrolling=!1);const t=this.truSeoHighlighterStore.activeMark.node.getBoundingClientRect(),i=this.getEditorNode("wrapper").getBoundingClientRect(),r=this.getEditorNode("closest-relative").getBoundingClientRect(),o=this.getEditorNode("first-block").getBoundingClientRect(),[s,a]=[140,32];let n=t.top,l=o.left-r.left;s<l?(this.truSeoHighlighterStore.highlightPopover.node.style.top=n-r.top+"px",this.truSeoHighlighterStore.highlightPopover.node.style.transform="translate(-105%, 0)",this.truSeoHighlighterStore.highlightPopover.node.childNodes[0].dataset.arrowPlacement="right"):(n=n-a-r.top,n=this.isClassicEditor?n+i.top:n,l=this.isClassicEditor?l+i.left:l,this.truSeoHighlighterStore.highlightPopover.node.style.top=n+"px",this.truSeoHighlighterStore.highlightPopover.node.style.transform="translate(0, 0)",this.truSeoHighlighterStore.highlightPopover.node.childNodes[0].dataset.arrowPlacement="bottomleft"),this.truSeoHighlighterStore.highlightPopover.node.style.left=l+"px",this.scrollToHighlightMark()},reset(){var e;window.removeEventListener("copy",this.listenWindowCopy),window.removeEventListener("keyup",this.listenWindowKeyup),(e=this.editorObserver)==null||e.disconnect(),this.truSeoHighlighterStore.clearAll(),this.$nextTick().then(()=>{if(!this.truSeoHighlighterStore.highlightSentences)return this.truSeoHighlighterStore.toggleHighlightAnalyzer(null),!1;this.isBlockEditor&&this.highlightBlockEditor(),this.isClassicEditor&&this.highlightClassicEditor(),this.observeEditor(),window.addEventListener("copy",this.listenWindowCopy),window.addEventListener("keyup",this.listenWindowKeyup)})},scrollToHighlightMark(){this.$nextTick().then(()=>{var i,r,o,s;if(!this.truSeoHighlighterStore.allowScrolling)return!1;this.truSeoHighlighterStore.activeMark.node.scrollIntoView();let e=this.getEditorNode("navigable"),t=e.scrollTop-60;this.isClassicEditor&&(t-=((r=(i=document.querySelector("#wp-content-editor-tools"))==null?void 0:i.getBoundingClientRect())==null?void 0:r.height)||0,t-=((s=(o=document.querySelector("#wp-content-editor-container .mce-toolbar-grp"))==null?void 0:o.getBoundingClientRect())==null?void 0:s.height)||0),e.isEqualNode(document.documentElement)&&(e=window),e.scrollTo({top:t}),this.truSeoHighlighterStore.allowScrolling=!1})},setHighlightMarkNode(e){const t=this.truSeoHighlighterStore.highlightMarks.findIndex(i=>e.hasAttribute("data-mce-annotation-uid")?e.dataset.mceAnnotationUid.indexOf(i.id)!==-1:e.id.indexOf(i.id)!==-1);t!==-1&&(this.truSeoHighlighterStore.highlightMarks[t].node=e,e.style.backgroundColor=this.markBgColor)},setHighlightMarks({block:e,node:t}){const i=this.formatBlockContent({block:e,node:t});if(i)for(const[r,o]of Object.entries(this.truSeoHighlighterStore.highlightSentences||{})){const s=new RegExp(je(o),"g");let a;for(;(a=s.exec(i))!==null&&!this.truSeoHighlighterStore.highlightMarks.find(h=>h.sentenceIndex===r);){const n={start:a.index,end:a.index+a[0].length||1};this.truSeoHighlighterStore.highlightMarks.find(h=>t?(h.range.start===n.start||h.range.end===n.end)&&h.parent.isEqualNode(t):(h.range.start===n.start||h.range.end===n.end)&&h.block.clientId===e.clientId)||this.truSeoHighlighterStore.highlightMarks.push({id:Le(1,999999999),range:n,block:e,parent:t||document.getElementById(`block-${e.clientId}`),node:null,active:this.truSeoHighlighterStore.highlightMarks.length===0,sentenceIndex:r})}}if(e)for(const r of(e==null?void 0:e.innerBlocks)||[])this.setHighlightMarks({block:r,node:null})},setTinymceEditor(){if(this.tinymceEditor)return!1;const e=window.setInterval(()=>{var t;if(this.tinymceEditor=((t=window==null?void 0:window.tinymce)==null?void 0:t.get("content"))||null,!this.tinymceEditor)return!1;window.clearInterval(e),this.tinymceEditor.dom.addStyle(`
					span.annotation-text.annotation-text-${this.truSeoHighlighterStore.source} {
						background-color: #CCE0FF;
						border-radius: 4px;
						color: inherit;
						display: inline;
						font-size: inherit;
						font-weight: inherit;
						letter-spacing: inherit;
						line-height: inherit;
						position: static;
					}
					`.trim())},500)},watchHighlightSentences(e,t){const i=JSON.stringify(e),r=JSON.stringify(t);i!==r&&this.reset()}},beforeMount(){if((ge()||!this.isBlockEditor&&!this.isClassicEditor)&&(this.truSeoHighlighterStore.enabled=!1),this.isBlockEditor&&(!this.truSeoHighlighterStore.dispatchAnnotations||!this.selectBlockEditor||!this.selectEditPost)&&(this.truSeoHighlighterStore.enabled=!1),!this.truSeoHighlighterStore.enabled)return!1},mounted(){var t;this.wpBodyContentObserver&&((t=this.wpBodyContentObserver)==null||t.disconnect());const e=window.setInterval(()=>{typeof this.getEditorNode("wrapper")=="object"&&(window.clearInterval(e),this.observeWpBodyContent())},1e3)}};export{bt as T,T as d,je as e};
