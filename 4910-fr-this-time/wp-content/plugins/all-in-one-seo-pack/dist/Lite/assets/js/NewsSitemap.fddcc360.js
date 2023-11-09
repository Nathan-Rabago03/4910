import{o as m,c as h,r as s,b as d,w as r,a as c,D as p,z as a,d as i,f as b}from"./vue.runtime.esm-bundler.588d3a9f.js";import{_ as g}from"./_plugin-vue_export-helper.a6f24833.js";import{e as x}from"./links.37929787.js";import{_ as n,s as C}from"./default-i18n.3881921e.js";import{C as $}from"./Blur.f4710b2c.js";import{C as B}from"./SettingsRow.b0e0fbda.js";import{S as A}from"./External.7d8382ba.js";import{B as G}from"./Checkbox.100811db.js";import{R as D}from"./RequiredPlans.d738de29.js";import{C as M}from"./Card.4fe92d12.js";import{C as R}from"./ProBadge.1afd2831.js";import{C as H}from"./Index.6783501d.js";import{A as I}from"./AddonConditions.43bf031e.js";import"./constants.44daa6bb.js";import"./TruSeoHighlighter.ed998abe.js";/* empty css                                              */import"./isArrayLikeObject.10b615a9.js";import"./Row.256ac4c7.js";/* empty css                                            */import"./Checkmark.cb1bb390.js";import"./addons.dacbad81.js";import"./upperFirst.d65414ba.js";import"./_stringToArray.a4422725.js";import"./license.08c84d9a.js";import"./index.c39be324.js";import"./Caret.4d98c50a.js";import"./Tooltip.0e57efe0.js";import"./Slide.5fb4a175.js";/* empty css                                              */import"./postContent.a843d374.js";import"./cleanForSlug.a67f7e84.js";import"./Ellipse.60ee808e.js";import"./toFinite.c2274946.js";const o="all-in-one-seo-pack",L=()=>({strings:{news:n("News Sitemap",o),setPublicationName:n("Set Publication Name",o),publicationName:n("Publication Name",o),postTypes:n("Post Types",o),exclude:n("Exclude Pages/Posts",o),description:n("The Google News Sitemap lets you control which content you submit to Google News and only contains articles that were published in the last 48 hours.",o),extendedDescription:n("In order to submit a News Sitemap to Google, you must have added your site to Google’s Publisher Center and had it approved.",o),enableSitemap:n("Enable Sitemap",o),openSitemap:n("Open News Sitemap",o),noIndexDisplayed:n("Noindexed content will not be displayed in your sitemap.",o),doYou404:n("Do you get a blank sitemap or 404 error?",o),ctaButtonText:n("Unlock News Sitemaps",o),ctaHeader:C(n("News Sitemaps is a %1$s Feature",o),"PRO"),includeAllPostTypes:n("Include All Post Types",o),selectPostTypes:n("Select which Post Types appear in your sitemap.",o)}}),U={};function O(e,f){return m(),h("div")}const V=g(U,[["render",O]]),z={setup(){const{strings:e}=L();return{strings:e}},components:{CoreBlur:$,CoreSettingsRow:B,SvgExternal:A,BaseCheckbox:G}},E={class:"aioseo-settings-row aioseo-section-description"},q=["innerHTML"],Y={class:"aioseo-sitemap-preview"},F={class:"aioseo-description"},j=c("br",null,null,-1),J=["innerHTML"],K={class:"aioseo-description"},Q=["innerHTML"];function W(e,f,y,t,N,k){const _=s("base-toggle"),l=s("core-settings-row"),u=s("svg-external"),w=s("base-button"),S=s("base-input"),P=s("base-checkbox"),v=s("core-blur");return m(),d(v,null,{default:r(()=>[c("div",E,[p(a(t.strings.description)+" "+a(t.strings.extendedDescription)+" ",1),c("span",{innerHTML:e.$links.getDocLink(e.$constants.GLOBAL_STRINGS.learnMore,"newsSitemaps",!0)},null,8,q)]),i(l,{name:t.strings.enableSitemap},{content:r(()=>[i(_,{modelValue:!0})]),_:1},8,["name"]),i(l,{name:e.$constants.GLOBAL_STRINGS.preview},{content:r(()=>[c("div",Y,[i(w,{size:"medium",type:"blue"},{default:r(()=>[i(u),p(" "+a(t.strings.openSitemap),1)]),_:1})]),c("div",F,[p(a(t.strings.noIndexDisplayed)+" ",1),j,p(" "+a(t.strings.doYou404)+" ",1),c("span",{innerHTML:e.$links.getDocLink(e.$constants.GLOBAL_STRINGS.learnMore,"blankSitemap",!0)},null,8,J)])]),_:1},8,["name"]),i(l,{name:t.strings.publicationName,align:""},{content:r(()=>[i(S,{size:"medium"})]),_:1},8,["name"]),i(l,{name:t.strings.postTypes},{content:r(()=>[i(P,{size:"medium"},{default:r(()=>[p(a(t.strings.includeAllPostTypes),1)]),_:1}),c("div",K,[p(a(t.strings.selectPostTypes)+" ",1),c("span",{innerHTML:e.$links.getDocLink(e.$constants.GLOBAL_STRINGS.learnMore,"selectPostTypesNews",!0)},null,8,Q)])]),_:1},8,["name"])]),_:1})}const X=g(z,[["render",W]]);const Z={setup(){const{strings:e}=L();return{licenseStore:x(),strings:e}},components:{Blur:X,RequiredPlans:D,CoreCard:M,CoreProBadge:R,Cta:H}},ee={class:"aioseo-news-sitemap-lite"};function te(e,f,y,t,N,k){const _=s("core-pro-badge"),l=s("blur"),u=s("required-plans"),w=s("cta"),S=s("core-card");return m(),h("div",ee,[i(S,{slug:"newsSitemap",noSlide:!0},{header:r(()=>[c("span",null,a(t.strings.news),1),i(_)]),default:r(()=>[i(l),i(w,{"feature-list":[t.strings.setPublicationName,t.strings.exclude],"cta-link":e.$links.getPricingUrl("news-sitemap","news-sitemap-upsell"),"button-text":t.strings.ctaButtonText,"learn-more-link":e.$links.getUpsellUrl("news-sitemap",null,e.$isPro?"pricing":"liteUpgrade"),"hide-bonus":!t.licenseStore.isUnlicensed},{"header-text":r(()=>[p(a(t.strings.ctaHeader),1)]),description:r(()=>[i(u,{addon:"aioseo-news-sitemap"}),p(" "+a(t.strings.description),1)]),_:1},8,["feature-list","cta-link","button-text","learn-more-link","hide-bonus"])]),_:1})])}const T=g(Z,[["render",te]]);const ne={mixins:[I],components:{Cta:V,Lite:T,NewsSitemap:T},data(){return{addonSlug:"aioseo-news-sitemap"}}},oe={class:"aioseo-news-sitemap"};function se(e,f,y,t,N,k){const _=s("news-sitemap",!0),l=s("cta"),u=s("lite");return m(),h("div",oe,[e.shouldShowMain?(m(),d(_,{key:0})):b("",!0),e.shouldShowUpdate||e.shouldShowActivate?(m(),d(l,{key:1})):b("",!0),e.shouldShowLite?(m(),d(u,{key:2})):b("",!0)])}const Ie=g(ne,[["render",se]]);export{Ie as default};
