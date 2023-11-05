this.wc=this.wc||{},this.wc.blocks=this.wc.blocks||{},this.wc.blocks["product-categories"]=function(e){function t(t){for(var r,a,l=t[0],s=t[1],i=t[2],p=0,b=[];p<l.length;p++)a=l[p],Object.prototype.hasOwnProperty.call(c,a)&&c[a]&&b.push(c[a][0]),c[a]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);for(u&&u(t);b.length;)b.shift()();return n.push.apply(n,i||[]),o()}function o(){for(var e,t=0;t<n.length;t++){for(var o=n[t],r=!0,l=1;l<o.length;l++){var s=o[l];0!==c[s]&&(r=!1)}r&&(n.splice(t--,1),e=a(a.s=o[0]))}return e}var r={},c={26:0},n=[];function a(t){if(r[t])return r[t].exports;var o=r[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,a),o.l=!0,o.exports}a.m=e,a.c=r,a.d=function(e,t,o){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(a.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(o,r,function(t){return e[t]}.bind(null,r));return o},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var l=window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var i=0;i<l.length;i++)t(l[i]);var u=s;return n.push([537,0]),o()}({0:function(e,t){e.exports=window.wp.element},1:function(e,t){e.exports=window.wp.i18n},2:function(e,t){e.exports=window.wp.components},21:function(e,t,o){"use strict";o.d(t,"b",(function(){return c})),o.d(t,"c",(function(){return n})),o.d(t,"a",(function(){return a}));var r=o(42);const c=e=>!Object(r.a)(e)&&e instanceof Object&&e.constructor===Object;function n(e,t){return c(e)&&t in e}const a=e=>0===Object.keys(e).length},239:function(e,t,o){"use strict";o.d(t,"a",(function(){return c}));var r=o(21);const c=e=>{if(Object(r.b)(e)){const t=e.getEditedPostType();return"wp_template"===t||"wp_template_part"===t}return!1}},388:function(e,t){},4:function(e,t){e.exports=window.wp.blockEditor},405:function(e){e.exports=JSON.parse('{"name":"woocommerce/product-categories","title":"Product Categories List","category":"woocommerce","description":"Show all product categories as a list or dropdown.","keywords":["WooCommerce"],"supports":{"align":["wide","full"],"html":false,"color":{"background":false,"link":true},"typography":{"fontSize":true,"lineHeight":true}},"attributes":{"align":{"type":"string"},"hasCount":{"type":"boolean","default":true},"hasImage":{"type":"boolean","default":false},"hasEmpty":{"type":"boolean","default":false},"isDropdown":{"type":"boolean","default":false},"isHierarchical":{"type":"boolean","default":true},"showChildrenOnly":{"type":"boolean","default":false}},"example":{"attributes":{"hasCount":true,"hasImage":false}},"textdomain":"woocommerce","apiVersion":2,"$schema":"https://schemas.wp.org/trunk/block.json"}')},42:function(e,t,o){"use strict";o.d(t,"a",(function(){return r}));const r=e=>null===e},537:function(e,t,o){e.exports=o(600)},538:function(e,t){},6:function(e,t){e.exports=window.wp.data},600:function(e,t,o){"use strict";o.r(t);var r=o(0),c=o(7),n=o(68),a=o(665),l=(o(388),o(405)),s=(o(538),o(4)),i=o(1),u=o(63),p=o.n(u),b=o(239),d=o(21),g=o(6),h=o(2);const w=()=>Object(r.createElement)(h.Placeholder,{icon:Object(r.createElement)(n.a,{icon:a.a}),label:Object(i.__)("Product Categories List","woocommerce"),className:"wc-block-product-categories"},Object(i.__)("This block displays the product categories for your store. To use it you first need to create a product and assign it to a category.","woocommerce"));var m=({attributes:e,setAttributes:t,name:o})=>{const c=Object(g.useSelect)((e=>e("core/edit-site"))),n=Object(g.useSelect)((e=>e("core/edit-widgets"))),a=Object(b.a)(c),l=(e=>{if(Object(d.b)(e)){const t=e.getWidgetAreas();return Array.isArray(t)&&t.length>0}return!1})(n),u=Object(s.useBlockProps)({className:"wc-block-product-categories"});return Object(r.createElement)("div",{...u},(()=>{const{hasCount:o,hasImage:c,hasEmpty:n,isDropdown:u,isHierarchical:p,showChildrenOnly:b}=e;return Object(r.createElement)(s.InspectorControls,{key:"inspector"},Object(r.createElement)(h.PanelBody,{title:Object(i.__)("List Settings","woocommerce"),initialOpen:!0},Object(r.createElement)(h.__experimentalToggleGroupControl,{label:Object(i.__)("Display style","woocommerce"),value:u?"dropdown":"list",onChange:e=>t({isDropdown:"dropdown"===e})},Object(r.createElement)(h.__experimentalToggleGroupControlOption,{value:"list",label:Object(i.__)("List","woocommerce")}),Object(r.createElement)(h.__experimentalToggleGroupControlOption,{value:"dropdown",label:Object(i.__)("Dropdown","woocommerce")}))),Object(r.createElement)(h.PanelBody,{title:Object(i.__)("Content","woocommerce"),initialOpen:!0},Object(r.createElement)(h.ToggleControl,{label:Object(i.__)("Show product count","woocommerce"),checked:o,onChange:()=>t({hasCount:!o})}),!u&&Object(r.createElement)(h.ToggleControl,{label:Object(i.__)("Show category images","woocommerce"),help:c?Object(i.__)("Category images are visible.","woocommerce"):Object(i.__)("Category images are hidden.","woocommerce"),checked:c,onChange:()=>t({hasImage:!c})}),Object(r.createElement)(h.ToggleControl,{label:Object(i.__)("Show hierarchy","woocommerce"),checked:p,onChange:()=>t({isHierarchical:!p})}),Object(r.createElement)(h.ToggleControl,{label:Object(i.__)("Show empty categories","woocommerce"),checked:n,onChange:()=>t({hasEmpty:!n})}),(a||l)&&Object(r.createElement)(h.ToggleControl,{label:Object(i.__)("Only show children of current category","woocommerce"),help:Object(i.__)("This will affect product category pages","woocommerce"),checked:b,onChange:()=>t({showChildrenOnly:!b})})))})(),Object(r.createElement)(h.Disabled,null,Object(r.createElement)(p.a,{block:o,attributes:e,EmptyResponsePlaceholder:w})))};Object(c.registerBlockType)(l,{icon:{src:Object(r.createElement)(n.a,{icon:a.a,className:"wc-block-editor-components-block-icon"})},transforms:{from:[{type:"block",blocks:["core/legacy-widget"],isMatch:({idBase:e,instance:t})=>"woocommerce_product_categories"===e&&!(null==t||!t.raw),transform:({instance:e})=>Object(c.createBlock)("woocommerce/product-categories",{hasCount:!!e.raw.count,hasEmpty:!e.raw.hide_empty,isDropdown:!!e.raw.dropdown,isHierarchical:!!e.raw.hierarchical})}]},deprecated:[{attributes:{hasCount:{type:"boolean",default:!0,source:"attribute",selector:"div",attribute:"data-has-count"},hasEmpty:{type:"boolean",default:!1,source:"attribute",selector:"div",attribute:"data-has-empty"},isDropdown:{type:"boolean",default:!1,source:"attribute",selector:"div",attribute:"data-is-dropdown"},isHierarchical:{type:"boolean",default:!0,source:"attribute",selector:"div",attribute:"data-is-hierarchical"}},migrate:e=>e,save(e){const{hasCount:t,hasEmpty:o,isDropdown:c,isHierarchical:n}=e,a={};return t&&(a["data-has-count"]=!0),o&&(a["data-has-empty"]=!0),c&&(a["data-is-dropdown"]=!0),n&&(a["data-is-hierarchical"]=!0),Object(r.createElement)("div",{className:"is-loading",...a},c?Object(r.createElement)("span",{"aria-hidden":!0,className:"wc-block-product-categories__placeholder"}):Object(r.createElement)("ul",{"aria-hidden":!0},Object(r.createElement)("li",null,Object(r.createElement)("span",{className:"wc-block-product-categories__placeholder"})),Object(r.createElement)("li",null,Object(r.createElement)("span",{className:"wc-block-product-categories__placeholder"})),Object(r.createElement)("li",null,Object(r.createElement)("span",{className:"wc-block-product-categories__placeholder"}))))}}],edit:e=>{const t=Object(s.useBlockProps)();return Object(r.createElement)("div",{...t},Object(r.createElement)(m,{...e}))},save:()=>null})},63:function(e,t){e.exports=window.wp.serverSideRender},7:function(e,t){e.exports=window.wp.blocks},9:function(e,t){e.exports=window.wp.primitives}});