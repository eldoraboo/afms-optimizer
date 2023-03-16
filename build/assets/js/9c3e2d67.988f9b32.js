"use strict";(self.webpackChunkafms_optimizer=self.webpackChunkafms_optimizer||[]).push([[6148],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(n),k=a,h=u["".concat(p,".").concat(k)]||u[k]||d[k]||o;return n?r.createElement(h,i(i({ref:t},c),{},{components:n})):r.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=k;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},5598:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const o={slug:"set-up-backend-server-python-on-docker",title:"Set Up Backend Server (Python) on Docker",authors:["eldoraboo"],tags:["tutorial"]},i=void 0,l={permalink:"/blog/set-up-backend-server-python-on-docker",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2023-02-08-set-up-backend-server-python-on-docker.md",source:"@site/blog/2023-02-08-set-up-backend-server-python-on-docker.md",title:"Set Up Backend Server (Python) on Docker",description:"Prerequisities",date:"2023-02-08T00:00:00.000Z",formattedDate:"February 8, 2023",tags:[{label:"tutorial",permalink:"/blog/tags/tutorial"}],readingTime:2.98,hasTruncateMarker:!1,authors:[{name:"Eldora Boo",title:"Data Engineer of AFMS Project",url:"https://github.com/eldoraboo",imageURL:"https://github.com/eldoraboo.png",key:"eldoraboo"}],frontMatter:{slug:"set-up-backend-server-python-on-docker",title:"Set Up Backend Server (Python) on Docker",authors:["eldoraboo"],tags:["tutorial"]},prevItem:{title:"Setting Up Docker To Connect Client and Server",permalink:"/blog/setting-up-docker-to-connect-client-and-server"},nextItem:{title:"Set Up Frontend Client (JavaScript) on Docker",permalink:"/blog/set-up-frontend-client-java-script-on-docker"}},p={authorsImageUrls:[void 0]},s=[{value:"Prerequisities",id:"prerequisities",level:3},{value:"Step 1: Open Docker Desktop",id:"step-1-open-docker-desktop",level:3},{value:"Step 2: Create a Dockerfile",id:"step-2-create-a-dockerfile",level:3},{value:"Step 3: Build the Docker Image",id:"step-3-build-the-docker-image",level:3},{value:"Step 4: Run the Docker Container",id:"step-4-run-the-docker-container",level:3},{value:"Step 5: Check the Running Containers",id:"step-5-check-the-running-containers",level:3},{value:"Step 6: Access the Flask REST API",id:"step-6-access-the-flask-rest-api",level:3},{value:"Step 7: Check the Docker Logs",id:"step-7-check-the-docker-logs",level:3},{value:"Step 8: Stop the Docker Container",id:"step-8-stop-the-docker-container",level:3},{value:"Final Words",id:"final-words",level:3}],c={toc:s},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"prerequisities"},"Prerequisities"),(0,a.kt)("p",null,"This article assumes we already have these two files in the directory."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:"title=app.py withLineNumbers",title:"app.py",withLineNumbers:!0},"import json\nfrom flask import Flask\napp = Flask(__name__)\n\n@app.route('/')\ndef index():\n    return json.dumps({'message': 'Welcome to Flask!'})\napp.run(debug=True,host=\"0.0.0.0\",port=3000)\n")),(0,a.kt)("br",null),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text",metastring:"title=requirements.txt withLineNumbers",title:"requirements.txt",withLineNumbers:!0},"flask\n")),(0,a.kt)("h3",{id:"step-1-open-docker-desktop"},"Step 1: Open Docker Desktop"),(0,a.kt)("p",null,"To get started with Docker, you need to have Docker Desktop installed on your machine. If you haven\u2019t already, download and install it from the official website. Once installed, open Docker Desktop and make sure that it is running."),(0,a.kt)("h3",{id:"step-2-create-a-dockerfile"},"Step 2: Create a Dockerfile"),(0,a.kt)("p",null,"A ",(0,a.kt)("inlineCode",{parentName:"p"},"Dockerfile")," is a script that contains all the instructions required to build a Docker image. In our case, we want to build an image for a Flask REST API. To do this, we\u2019ll need to include the following components in our Dockerfile:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"The base image (e.g. ",(0,a.kt)("inlineCode",{parentName:"li"},"alpine"),")"),(0,a.kt)("li",{parentName:"ol"},"The required dependencies (e.g., Flask and its dependencies)"),(0,a.kt)("li",{parentName:"ol"},"The code for the Flask REST API")),(0,a.kt)("p",null,"Here\u2019s an example of a simple ",(0,a.kt)("inlineCode",{parentName:"p"},"Dockerfile")," for a Flask REST API:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell",metastring:"title=Dockerfile withLineNumbers",title:"Dockerfile",withLineNumbers:!0},'FROM alpine:latest\nRUN apk update\nRUN apk add py-pip\nRUN apk add --no-cache python3-dev \nRUN pip install --upgrade pip\nWORKDIR /app\nCOPY . /app\nRUN pip --no-cache-dir install -r requirements.txt\nCMD ["python3", "app.py"]\n')),(0,a.kt)("p",null,"In this example, we\u2019re using the ",(0,a.kt)("inlineCode",{parentName:"p"},"alpine")," image as the base image and installing the required dependencies using ",(0,a.kt)("inlineCode",{parentName:"p"},"pip install"),". We\u2019re also copying the code for the Flask REST API to the working directory and setting the environment variable for Flask."),(0,a.kt)("h3",{id:"step-3-build-the-docker-image"},"Step 3: Build the Docker Image"),(0,a.kt)("p",null,"Once you have created the ",(0,a.kt)("inlineCode",{parentName:"p"},"Dockerfile"),", you can use the following command to build the Docker image:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell",metastring:"Terminal",Terminal:!0},"docker build . -t server-backend\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"docker build")," command builds the Docker image using the instructions in the Dockerfile. The ",(0,a.kt)("inlineCode",{parentName:"p"},".")," argument specifies the location of the Dockerfile, and the ",(0,a.kt)("inlineCode",{parentName:"p"},"-t")," argument specifies the name and tag of the image (in this case, ",(0,a.kt)("inlineCode",{parentName:"p"},"server-backend"),")."),(0,a.kt)("h3",{id:"step-4-run-the-docker-container"},"Step 4: Run the Docker Container"),(0,a.kt)("p",null,"Once the Docker image has been built, you can use the following command to run the Docker container:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell",metastring:"Terminal",Terminal:!0},"docker run -d -p 3000:3000 server-backend\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"docker run")," command runs the Docker container from the image. The ",(0,a.kt)("inlineCode",{parentName:"p"},"-d")," argument specifies that the container should run in the background, and the ",(0,a.kt)("inlineCode",{parentName:"p"},"-p")," argument maps port ",(0,a.kt)("inlineCode",{parentName:"p"},"3000")," in the container to port ",(0,a.kt)("inlineCode",{parentName:"p"},"3000")," on the host."),(0,a.kt)("h3",{id:"step-5-check-the-running-containers"},"Step 5: Check the Running Containers"),(0,a.kt)("p",null,"To check the running containers, you can use the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell",metastring:"Terminal",Terminal:!0},"docker ps -a\n")),(0,a.kt)("h3",{id:"step-6-access-the-flask-rest-api"},"Step 6: Access the Flask REST API"),(0,a.kt)("p",null,"To access the Flask REST API, visit ",(0,a.kt)("inlineCode",{parentName:"p"},"localhost:3000")),(0,a.kt)("h3",{id:"step-7-check-the-docker-logs"},"Step 7: Check the Docker Logs"),(0,a.kt)("p",null,"If you encounter any issues, you can check the Docker logs to see what might be causing the problem. Use the following command to view the logs:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell",metastring:"Terminal",Terminal:!0},"docker logs <container_id>\n")),(0,a.kt)("p",null,"Replace ",(0,a.kt)("inlineCode",{parentName:"p"},"<container_id>")," with the actual ID of the container you want to view the logs for."),(0,a.kt)("h3",{id:"step-8-stop-the-docker-container"},"Step 8: Stop the Docker Container"),(0,a.kt)("p",null,"When you\u2019re done, you can stop the Docker container using the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell",metastring:"Terminal",Terminal:!0},"docker stop <container_id>\n")),(0,a.kt)("p",null,"Replace ",(0,a.kt)("inlineCode",{parentName:"p"},"<container_id>")," with the actual ID of the container you want to view the logs for."),(0,a.kt)("h3",{id:"final-words"},"Final Words"),(0,a.kt)("p",null,"In case the port 3000 is already in use, you can use the following command to check which processes are involved:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell",metastring:"Terminal",Terminal:!0},"sudo lsof -i -P -n | grep 3000\n")),(0,a.kt)("p",null,"Lastly, to kill the process involved, use the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell",metastring:"Terminal",Terminal:!0},"kill -9 <pid>\n")),(0,a.kt)("p",null,"Replace ",(0,a.kt)("inlineCode",{parentName:"p"},"<pid>")," with the actual process ID of the process you want to kill."))}d.isMDXComponent=!0}}]);