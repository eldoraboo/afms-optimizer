"use strict";(self.webpackChunkafms_optimizer=self.webpackChunkafms_optimizer||[]).push([[1434],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(a),f=r,m=u["".concat(s,".").concat(f)]||u[f]||c[f]||i;return a?n.createElement(m,o(o({ref:t},d),{},{components:a})):n.createElement(m,o({ref:t},d))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}f.displayName="MDXCreateElement"},5082:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const i={slug:"using-flask-to-zip-and-download-files-part-1",title:"Using Flask to Zip and Download Files (Part 1)",authors:["eldoraboo"],tags:["tutorial"]},o=void 0,l={permalink:"/blog/using-flask-to-zip-and-download-files-part-1",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2023-03-01-using-flask-to-zip-and-download-files-part-1.md",source:"@site/blog/2023-03-01-using-flask-to-zip-and-download-files-part-1.md",title:"Using Flask to Zip and Download Files (Part 1)",description:"Downloading Packages",date:"2023-03-01T00:00:00.000Z",formattedDate:"March 1, 2023",tags:[{label:"tutorial",permalink:"/blog/tags/tutorial"}],readingTime:2.005,hasTruncateMarker:!1,authors:[{name:"Eldora Boo",title:"Data Engineer of AFMS Project",url:"https://github.com/eldoraboo",imageURL:"https://github.com/eldoraboo.png",key:"eldoraboo"}],frontMatter:{slug:"using-flask-to-zip-and-download-files-part-1",title:"Using Flask to Zip and Download Files (Part 1)",authors:["eldoraboo"],tags:["tutorial"]},nextItem:{title:"Using Flask to Zip and Download Files (Part 2)",permalink:"/blog/using-flask-to-zip-and-download-files-part-2"}},s={authorsImageUrls:[void 0]},p=[{value:"Downloading Packages",id:"downloading-packages",level:3},{value:"Enabling CORS",id:"enabling-cors",level:3},{value:"Creating a route for file download",id:"creating-a-route-for-file-download",level:3},{value:"Add rendering and caching",id:"add-rendering-and-caching",level:3},{value:"Running the application",id:"running-the-application",level:3},{value:"Accessing the GET request",id:"accessing-the-get-request",level:3}],d={toc:p},u="wrapper";function c(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"downloading-packages"},"Downloading Packages"),(0,r.kt)("p",null,"To begin, we will import the necessary modules. We will use the os module to navigate the file system, zipfile to create our zip file, BytesIO to store our zip file in memory, Flask to create our web application, and send_file to send our zip file to the user."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py",metastring:'title="app.py" withLineNumbers',title:'"app.py"',withLineNumbers:!0},"import os\nimport zipfile\nfrom io import BytesIO\nfrom flask import Flask, jsonify, send_file, request\nfrom flask_cors import CORS\n")),(0,r.kt)("h3",{id:"enabling-cors"},"Enabling CORS"),(0,r.kt)("p",null,"Next, we will create our Flask application and enable Cross-Origin Resource Sharing (CORS). CORS is a mechanism that allows many resources (e.g., fonts, JavaScript, etc.) on a web page to be requested from another domain outside the domain from which the resource originated."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py",metastring:'title="app.py" withLineNumbers',title:'"app.py"',withLineNumbers:!0},"app = Flask(__name__)\nCORS(app)\n")),(0,r.kt)("h3",{id:"creating-a-route-for-file-download"},"Creating a route for file download"),(0,r.kt)("p",null,"We will create a route for our file download service. The route will expect a parameter called 'fileName', which is the name of the file that we want to download. We will then use os.walk to iterate through all the files and directories in the file path and add them to our zip file using zipfile.ZipFile.write. Finally, we will use send_file to send our zip file to the user."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py",metastring:'title="app.py" withLineNumbers',title:'"app.py"',withLineNumbers:!0},"@app.route('/file')\ndef zipped_data():\n    fileName = request.args.get('fileName')\n    file_path = '{}/'.format(fileName)\n    fileName = \"{}.zip\".format(fileName)\n    memory_file = BytesIO()\n    with zipfile.ZipFile(memory_file, 'w', zipfile.ZIP_DEFLATED) as zipf:\n        for root, dirs, files in os.walk(file_path):\n            for file in files:\n                zipf.write(os.path.join(root, file))\n    memory_file.seek(0)\n    return send_file(memory_file,\n                     attachment_filename=fileName,\n                     as_attachment=True)\n")),(0,r.kt)("h3",{id:"add-rendering-and-caching"},"Add rendering and caching"),(0,r.kt)("p",null,"We will add a function using the Flask after_request decorator to add headers to our response. These headers will ensure that the user's browser renders the web page correctly and caches the page for 10 minutes."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py",metastring:'title="app.py" withLineNumbers',title:'"app.py"',withLineNumbers:!0},"@app.after_request\ndef add_header(response):\n    \"\"\"\n    Add headers to both force latest IE rendering engine or Chrome Frame,\n    and also to cache the rendered page for 10 minutes.\n    \"\"\"\n    response.headers['X-UA-Compatible'] = 'IE=Edge,chrome=1'\n    response.headers['Cache-Control'] = 'public, max-age=0'\n    return response\n")),(0,r.kt)("h3",{id:"running-the-application"},"Running the application"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py",metastring:'title="app.py" withLineNumbers',title:'"app.py"',withLineNumbers:!0},'app.run(debug=True,host="0.0.0.0",port=8000)\n')),(0,r.kt)("h3",{id:"accessing-the-get-request"},"Accessing the GET request"),(0,r.kt)("p",null,"Now that we have our Flask application set up, we can use it to zip and download files. To use the service, we will send a GET request to our endpoint."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:"Terminal",Terminal:!0},"http://localhost:8000/file\n")),(0,r.kt)("p",null,"The user's browser will prompt them to download the zip file. Read the next article to see how we link this to frontend interface."))}c.isMDXComponent=!0}}]);