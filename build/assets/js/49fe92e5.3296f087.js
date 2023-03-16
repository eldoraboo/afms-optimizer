"use strict";(self.webpackChunkafms_optimizer=self.webpackChunkafms_optimizer||[]).push([[3125],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=o.createContext({}),c=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(r),u=n,f=d["".concat(l,".").concat(u)]||d[u]||m[u]||a;return r?o.createElement(f,i(i({ref:t},p),{},{components:r})):o.createElement(f,i({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:n,i[1]=s;for(var c=2;c<a;c++)i[c]=r[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}u.displayName="MDXCreateElement"},7440:(e,t,r)=>{r.r(t),r.d(t,{Highlight:()=>p,assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var o=r(7462),n=(r(7294),r(3905));const a={sidebar_position:2},i="Sandbox",s={unversionedId:"mso/sandbox",id:"mso/sandbox",title:"Sandbox",description:"Explore the power of zero-shot classification with this interactive demo using the Facebook BART-large MNLI model, hosted on a Gradio space. This user-friendly interface allows you to input your own text and candidate labels to see how the model classifies the text based on your provided categories. The model is highly versatile and can be used for a wide range of applications, including topic categorization, sentiment analysis, and more.",source:"@site/docs/mso/sandbox.md",sourceDirName:"mso",slug:"/mso/sandbox",permalink:"/docs/mso/sandbox",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/mso/sandbox.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/docs/mso/introduction"},next:{title:"Data Extraction",permalink:"/docs/mso/data-extraction"}},l={},c=[],p=e=>{let{children:t,color:r,linkUrl:o}=e;return(0,n.kt)("a",{href:"https://eldoraboo-facebook-bart-large-mnli.hf.space",style:{backgroundColor:r,borderRadius:"20px",color:"#fff",padding:"10px",textDecoration:"none",cursor:"pointer"}},t)},d={toc:c,Highlight:p},m="wrapper";function u(e){let{components:t,...r}=e;return(0,n.kt)(m,(0,o.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"sandbox"},"Sandbox"),(0,n.kt)("p",null,"Explore the power of ",(0,n.kt)("strong",{parentName:"p"},"zero-shot classification")," with this interactive demo using the ",(0,n.kt)("strong",{parentName:"p"},"Facebook BART-large MNLI model"),", hosted on a Gradio space. This user-friendly interface allows you to input your own ",(0,n.kt)("strong",{parentName:"p"},"text and candidate labels")," to see how the model classifies the text based on your provided categories. The model is highly versatile and can be used for a wide range of applications, including ",(0,n.kt)("strong",{parentName:"p"},"topic categorization"),", ",(0,n.kt)("strong",{parentName:"p"},"sentiment analysis"),", and more."),(0,n.kt)("p",null,"To use the demo, simply follow these steps:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Enter a ",(0,n.kt)("strong",{parentName:"li"},"text snippet")," you'd like to classify in the ",(0,n.kt)("strong",{parentName:"li"},'"Text"')," input field."),(0,n.kt)("li",{parentName:"ol"},"Provide a list of ",(0,n.kt)("strong",{parentName:"li"},"candidate labels")," separated by commas in the ",(0,n.kt)("strong",{parentName:"li"},'"Class names"')," input field. These labels represent the ",(0,n.kt)("strong",{parentName:"li"},"possible categories")," for the input text."),(0,n.kt)("li",{parentName:"ol"},"Click the ",(0,n.kt)("strong",{parentName:"li"},'"Submit"')," button to see the ",(0,n.kt)("strong",{parentName:"li"},"classification results"),". The model will return a ",(0,n.kt)("strong",{parentName:"li"},"list of labels")," along with their ",(0,n.kt)("strong",{parentName:"li"},"respective confidence scores"),"."),(0,n.kt)("li",{parentName:"ol"},"(optional) Tick ",(0,n.kt)("strong",{parentName:"li"},'"Allow multiple true classes"')," to calculate each class independently.")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Link to Demo"),": ",(0,n.kt)("a",{parentName:"p",href:"https://eldoraboo-facebook-bart-large-mnli.hf.space"},"https://eldoraboo-facebook-bart-large-mnli.hf.space")),(0,n.kt)("iframe",{src:"https://eldoraboo-facebook-bart-large-mnli.hf.space",frameborder:"0",width:"850",height:"450"}))}u.isMDXComponent=!0}}]);