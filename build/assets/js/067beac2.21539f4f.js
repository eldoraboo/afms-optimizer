"use strict";(self.webpackChunkafms_optimizer=self.webpackChunkafms_optimizer||[]).push([[4575],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>k});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(n),d=a,k=u["".concat(p,".").concat(d)]||u[d]||m[d]||o;return n?r.createElement(k,i(i({ref:t},s),{},{components:n})):r.createElement(k,i({ref:t},s))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2893:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:2},i="Local Machine Setup",l={unversionedId:"quickstart/local-machine-setup",id:"quickstart/local-machine-setup",title:"Local Machine Setup",description:"Let's setup the tool for usage.",source:"@site/docs/quickstart/local-machine-setup.md",sourceDirName:"quickstart",slug:"/quickstart/local-machine-setup",permalink:"/docs/quickstart/local-machine-setup",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/quickstart/local-machine-setup.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Background",permalink:"/docs/quickstart/background"},next:{title:"Docker Setup",permalink:"/docs/quickstart/docker-setup"}},p={},c=[{value:"Getting Started",id:"getting-started",level:2},{value:"Operating System",id:"operating-system",level:3},{value:"Required Software",id:"required-software",level:3},{value:"Dependencies",id:"dependencies",level:3},{value:"Running the tool locally",id:"running-the-tool-locally",level:2},{value:"Front-End Setup",id:"front-end-setup",level:3},{value:"Client (UX Component)",id:"client-ux-component",level:4},{value:"Client (UX Component, no internet connectivity required)",id:"client-ux-component-no-internet-connectivity-required",level:4},{value:"Back-End Setup",id:"back-end-setup",level:3},{value:"Server (Optimization Engine Component)",id:"server-optimization-engine-component",level:4}],s={toc:c},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"local-machine-setup"},"Local Machine Setup"),(0,a.kt)("p",null,"Let's setup the tool for usage."),(0,a.kt)("h2",{id:"getting-started"},"Getting Started"),(0,a.kt)("h3",{id:"operating-system"},"Operating System"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Windows 10")),(0,a.kt)("h3",{id:"required-software"},"Required Software"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Python 3.7 or higher"),(0,a.kt)("li",{parentName:"ul"},"SCIPOptSuite-8.0.0-win64-VS15"),(0,a.kt)("li",{parentName:"ul"},"Node-v16.15.0-x64")),(0,a.kt)("h3",{id:"dependencies"},"Dependencies"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Refer to ",(0,a.kt)("inlineCode",{parentName:"li"},"readme_6sep2022"))),(0,a.kt)("h2",{id:"running-the-tool-locally"},"Running the tool locally"),(0,a.kt)("h3",{id:"front-end-setup"},"Front-End Setup"),(0,a.kt)("h4",{id:"client-ux-component"},"Client (UX Component)"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Start ",(0,a.kt)("strong",{parentName:"p"},"Command Prompt")," or ",(0,a.kt)("strong",{parentName:"p"},"Terminal"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Run the following commands"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cd afms\nyarn start\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Open browser ",(0,a.kt)("inlineCode",{parentName:"li"},"http://localhost:8080"))),(0,a.kt)("h4",{id:"client-ux-component-no-internet-connectivity-required"},"Client (UX Component, no internet connectivity required)"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Start ",(0,a.kt)("strong",{parentName:"p"},"Command Prompt")," or ",(0,a.kt)("strong",{parentName:"p"},"Terminal"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Run the following commands"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cd afms\nyarn build\ncd afms\\dist\npython -m http.server 8080\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Open browser ",(0,a.kt)("inlineCode",{parentName:"li"},"http://localhost:8080"))),(0,a.kt)("h3",{id:"back-end-setup"},"Back-End Setup"),(0,a.kt)("h4",{id:"server-optimization-engine-component"},"Server (Optimization Engine Component)"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Start ",(0,a.kt)("strong",{parentName:"p"},"Anaconda Prompt"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Run the following commands"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cd optimiser\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Environment setup ",(0,a.kt)("em",{parentName:"li"},"(you only need to do this step if you are initialising the environment for the first time)"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"conda create -n opt\nconda activate opt\nconda install geopandas\nconda install pyproj\npip install flask\npip install flask_cors\npip install pyscipopt\n")),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"Run the following commands")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"conda activate opt\npython server.py\n")))}m.isMDXComponent=!0}}]);