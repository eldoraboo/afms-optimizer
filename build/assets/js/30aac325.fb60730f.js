"use strict";(self.webpackChunkafms_optimizer=self.webpackChunkafms_optimizer||[]).push([[8585],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>k});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=o.createContext({}),p=function(e){var t=o.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=p(e.components);return o.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(r),m=n,k=u["".concat(c,".").concat(m)]||u[m]||d[m]||a;return r?o.createElement(k,i(i({ref:t},l),{},{components:r})):o.createElement(k,i({ref:t},l))}));function k(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:n,i[1]=s;for(var p=2;p<a;p++)i[p]=r[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6351:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var o=r(7462),n=(r(7294),r(3905));const a={sidebar_position:3},i="Docker Setup",s={unversionedId:"quickstart/docker-setup",id:"quickstart/docker-setup",title:"Docker Setup",description:"If you wish to use the pre-built images, follow the steps below. You can either do it via Docker Compose or run two images separately.",source:"@site/docs/quickstart/docker-setup.md",sourceDirName:"quickstart",slug:"/quickstart/docker-setup",permalink:"/docs/quickstart/docker-setup",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/quickstart/docker-setup.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Local Machine Setup",permalink:"/docs/quickstart/local-machine-setup"},next:{title:"Setting Up Docker",permalink:"/docs/category/setting-up-docker"}},c={},p=[{value:"Docker Compose",id:"docker-compose",level:2},{value:"Front-End Setup",id:"front-end-setup",level:2},{value:"Back-End Setup",id:"back-end-setup",level:2}],l={toc:p},u="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,o.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"docker-setup"},"Docker Setup"),(0,n.kt)("p",null,"If you wish to use the pre-built images, follow the steps below. You can either do it via Docker Compose or run two images separately."),(0,n.kt)("h2",{id:"docker-compose"},"Docker Compose"),(0,n.kt)("admonition",{title:"Easy Setup",type:"info"},(0,n.kt)("p",{parentName:"admonition"},"Copy the file below, save it as ",(0,n.kt)("inlineCode",{parentName:"p"},"docker-compose.yml"),". Then run the following command in your ",(0,n.kt)("strong",{parentName:"p"},"Command Prompt")," or ",(0,n.kt)("strong",{parentName:"p"},"Terminal"),"."),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"docker compose up\n"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yml",metastring:'title="docker-compose.yml"',title:'"docker-compose.yml"'},'version: \'1\'\nservices:\n  front-end:\n    image: eldoraboo/afms:latest\n    ports:\n      - "81:80"\n    depends_on:\n      - back-end\n  back-end:\n    image: eldoraboo/optimizer:latest\n    ports:\n      - "5000:5000"\nname: afms-tool\n')),(0,n.kt)("p",null,"Alternatively, you may follow the instructions below to run two images separately."),(0,n.kt)("h2",{id:"front-end-setup"},"Front-End Setup"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"docker pull eldoraboo/afms:latest\ndocker run  --name front-end -d -p 81:80 eldoraboo/afms:latest\n")),(0,n.kt)("h2",{id:"back-end-setup"},"Back-End Setup"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"docker pull eldoraboo/optimizer:latest\ndocker run --name back-end -d -p 5000:5000 eldoraboo/optimizer:latest\n")))}d.isMDXComponent=!0}}]);