"use strict";(self.webpackChunkafms_optimizer=self.webpackChunkafms_optimizer||[]).push([[1526],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9297:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:4},i="Model Setup",s={unversionedId:"mso/model-setup",id:"mso/model-setup",title:"Model Setup",description:"Overview",source:"@site/docs/mso/model-setup.md",sourceDirName:"mso",slug:"/mso/model-setup",permalink:"/docs/mso/model-setup",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/mso/model-setup.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Data Extraction",permalink:"/docs/mso/data-extraction"},next:{title:"Complete Source Code",permalink:"/docs/mso/source-code"}},l={},c=[{value:"Overview",id:"overview",level:2},{value:"Functions",id:"functions",level:2},{value:"zero_shot",id:"zero_shot",level:3},{value:"top",id:"top",level:3},{value:"Main Code",id:"main-code",level:2}],p={toc:c},d="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"model-setup"},"Model Setup"),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"This Python script leverages the ",(0,a.kt)("inlineCode",{parentName:"p"},"transformers")," library to perform ",(0,a.kt)("strong",{parentName:"p"},"zero-shot classification")," of feedback entries. The script loads a pre-trained model (",(0,a.kt)("inlineCode",{parentName:"p"},"bart-large-mnli"),"), defines a function to ",(0,a.kt)("strong",{parentName:"p"},"classify the feedback")," using ",(0,a.kt)("strong",{parentName:"p"},"zero-shot classification"),", and another function to ",(0,a.kt)("strong",{parentName:"p"},"extract the top categories")," for ",(0,a.kt)("strong",{parentName:"p"},"each feedback entry"),". Finally, the script iterates over the feedback list and updates the ",(0,a.kt)("inlineCode",{parentName:"p"},"categories_count")," dictionary based on the ",(0,a.kt)("strong",{parentName:"p"},"top predicted categories"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py"},'from transformers import pipeline\nfrom heapq import nlargest\n\nclassifier = pipeline("zero-shot-classification",\n                      model="facebook/bart-large-mnli")\n')),(0,a.kt)("h2",{id:"functions"},"Functions"),(0,a.kt)("h3",{id:"zero_shot"},"zero_shot"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py"},"zero_shot(doc, candidates)\n")),(0,a.kt)("p",null,"This function takes two arguments:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"doc"),": A string representing the ",(0,a.kt)("strong",{parentName:"li"},"input text")," to be classified."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"candidates"),": A list of strings representing the ",(0,a.kt)("strong",{parentName:"li"},"candidate categories"),"for classification.")),(0,a.kt)("p",null,"The function uses the ",(0,a.kt)("strong",{parentName:"p"},"pre-trained zero-shot classification model")," to classify the input text and returns a ",(0,a.kt)("strong",{parentName:"p"},"dictionary")," with the ",(0,a.kt)("strong",{parentName:"p"},"candidate categories as keys")," and their respective ",(0,a.kt)("strong",{parentName:"p"},"classification scores as values"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py"},"def zero_shot(doc, candidates):\n    dictionary = classifier(doc, candidates)\n    labels = dictionary['labels']\n    scores = dictionary['scores']\n    return dict(zip(labels, scores))\n")),(0,a.kt)("h3",{id:"top"},"top"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py"},"top(text, cats)\n")),(0,a.kt)("p",null,"This function takes two arguments:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"text"),": A string representing the input text to be classified."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"cats"),": A list of strings representing the candidate categories for classification.")),(0,a.kt)("p",null,"The function calls the ",(0,a.kt)("strong",{parentName:"p"},"zero_shot function")," to get the ",(0,a.kt)("strong",{parentName:"p"},"classification scores")," for the input text. Then, it extracts the ",(0,a.kt)("strong",{parentName:"p"},"top three categories")," based on their scores, updates the ",(0,a.kt)("inlineCode",{parentName:"p"},"categories_count")," dictionary, and ",(0,a.kt)("strong",{parentName:"p"},"returns the top three categories"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py"},'def top(text, cats):\n    results = zero_shot(text, cats)\n    topthree = nlargest(3, results, key=results.get)\n    for top in topthree:\n        categories_count[top] += 1\n    print(f"{count}: {categories_count}")\n    return topthree\n')),(0,a.kt)("h2",{id:"main-code"},"Main Code"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Loads the ",(0,a.kt)("strong",{parentName:"li"},"pre-trained zero-shot classification model")," from the ",(0,a.kt)("inlineCode",{parentName:"li"},"transformers")," library."),(0,a.kt)("li",{parentName:"ol"},"Iterates over the ",(0,a.kt)("strong",{parentName:"li"},"feedback list")," and calls the ",(0,a.kt)("inlineCode",{parentName:"li"},"top")," function for each feedback entry, passing the ",(0,a.kt)("strong",{parentName:"li"},"feedback text")," and the ",(0,a.kt)("strong",{parentName:"li"},"categories list"),"."),(0,a.kt)("li",{parentName:"ol"},"Prints the updated ",(0,a.kt)("inlineCode",{parentName:"li"},"categories_count")," dictionary after processing all ",(0,a.kt)("strong",{parentName:"li"},"feedback entries"),".")),(0,a.kt)("p",null,"To use this script, you need to have a ",(0,a.kt)("strong",{parentName:"p"},"list of feedback entries")," (e.g., feedback) and a ",(0,a.kt)("strong",{parentName:"p"},"list of candidate categories")," (e.g., categories). You can then call the ",(0,a.kt)("inlineCode",{parentName:"p"},"top")," function to process each feedback entry and update the ",(0,a.kt)("inlineCode",{parentName:"p"},"categories_count")," dictionary accordingly."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py"},"for feed in feedback:\n    count += 1\n    top(feed, categories)\n\nprint(categories_count)\n")))}u.isMDXComponent=!0}}]);