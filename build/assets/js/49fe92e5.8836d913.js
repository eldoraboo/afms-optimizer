"use strict";(self.webpackChunkafms_optimizer=self.webpackChunkafms_optimizer||[]).push([[3125],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(r),m=o,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7440:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const a={sidebar_position:2},i="Sandbox",s={unversionedId:"mso/sandbox",id:"mso/sandbox",title:"Sandbox",description:"Explore the power of zero-shot classification with this interactive demo using the Facebook BART-large MNLI model, hosted on a Gradio space. This user-friendly interface allows you to input your own text and candidate labels to see how the model classifies the text based on your provided categories. The model is highly versatile and can be used for a wide range of applications, including topic categorization, sentiment analysis, and more.",source:"@site/docs/mso/sandbox.md",sourceDirName:"mso",slug:"/mso/sandbox",permalink:"/docs/mso/sandbox",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/mso/sandbox.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/docs/mso/introduction"},next:{title:"Data Extraction",permalink:"/docs/mso/data-extraction"}},l={},c=[],p={toc:c},d="wrapper";function u(e){let{components:t,...r}=e;return(0,o.kt)(d,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"sandbox"},"Sandbox"),(0,o.kt)("p",null,"Explore the power of ",(0,o.kt)("strong",{parentName:"p"},"zero-shot classification")," with this interactive demo using the ",(0,o.kt)("strong",{parentName:"p"},"Facebook BART-large MNLI model"),", hosted on a Gradio space. This user-friendly interface allows you to input your own ",(0,o.kt)("strong",{parentName:"p"},"text and candidate labels")," to see how the model classifies the text based on your provided categories. The model is highly versatile and can be used for a wide range of applications, including ",(0,o.kt)("strong",{parentName:"p"},"topic categorization"),", ",(0,o.kt)("strong",{parentName:"p"},"sentiment analysis"),", and more."),(0,o.kt)("p",null,"To use the demo, simply follow these steps:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Enter a ",(0,o.kt)("strong",{parentName:"li"},"text snippet")," you'd like to classify in the ",(0,o.kt)("strong",{parentName:"li"},'"Text"')," input field."),(0,o.kt)("li",{parentName:"ol"},"Provide a list of ",(0,o.kt)("strong",{parentName:"li"},"candidate labels")," separated by commas in the ",(0,o.kt)("strong",{parentName:"li"},'"Class names"')," input field. These labels represent the ",(0,o.kt)("strong",{parentName:"li"},"possible categories")," for the input text."),(0,o.kt)("li",{parentName:"ol"},"Click the ",(0,o.kt)("strong",{parentName:"li"},'"Submit"')," button to see the ",(0,o.kt)("strong",{parentName:"li"},"classification results"),". The model will return a ",(0,o.kt)("strong",{parentName:"li"},"list of labels")," along with their ",(0,o.kt)("strong",{parentName:"li"},"respective confidence scores"),"."),(0,o.kt)("li",{parentName:"ol"},"(optional) Tick ",(0,o.kt)("strong",{parentName:"li"},'"Allow multiple true classes"')," to calculate each class independently.")),(0,o.kt)("iframe",{src:"https://eldoraboo-facebook-bart-large-mnli.hf.space",frameborder:"0",width:"850",height:"450"}))}u.isMDXComponent=!0}}]);