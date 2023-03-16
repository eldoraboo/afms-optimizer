---
slug: using-flask-to-zip-and-download-files-part-1
title: Using Flask to Zip and Download Files (Part 1)
authors: [eldoraboo]
tags: [tutorial]
---

### Downloading Packages

To begin, we will import the necessary modules. We will use the os module to navigate the file system, zipfile to create our zip file, BytesIO to store our zip file in memory, Flask to create our web application, and send_file to send our zip file to the user.

```py title="app.py" withLineNumbers
import os
import zipfile
from io import BytesIO
from flask import Flask, jsonify, send_file, request
from flask_cors import CORS
```

### Enabling CORS

Next, we will create our Flask application and enable Cross-Origin Resource Sharing (CORS). CORS is a mechanism that allows many resources (e.g., fonts, JavaScript, etc.) on a web page to be requested from another domain outside the domain from which the resource originated.

```py title="app.py" withLineNumbers
app = Flask(__name__)
CORS(app)
```

### Creating a route for file download

We will create a route for our file download service. The route will expect a parameter called 'fileName', which is the name of the file that we want to download. We will then use os.walk to iterate through all the files and directories in the file path and add them to our zip file using zipfile.ZipFile.write. Finally, we will use send_file to send our zip file to the user.

```py title="app.py" withLineNumbers
@app.route('/file')
def zipped_data():
    fileName = request.args.get('fileName')
    file_path = '{}/'.format(fileName)
    fileName = "{}.zip".format(fileName)
    memory_file = BytesIO()
    with zipfile.ZipFile(memory_file, 'w', zipfile.ZIP_DEFLATED) as zipf:
        for root, dirs, files in os.walk(file_path):
            for file in files:
                zipf.write(os.path.join(root, file))
    memory_file.seek(0)
    return send_file(memory_file,
                     attachment_filename=fileName,
                     as_attachment=True)
```

### Add rendering and caching

We will add a function using the Flask after_request decorator to add headers to our response. These headers will ensure that the user's browser renders the web page correctly and caches the page for 10 minutes.

```py title="app.py" withLineNumbers
@app.after_request
def add_header(response):
    """
    Add headers to both force latest IE rendering engine or Chrome Frame,
    and also to cache the rendered page for 10 minutes.
    """
    response.headers['X-UA-Compatible'] = 'IE=Edge,chrome=1'
    response.headers['Cache-Control'] = 'public, max-age=0'
    return response
```

### Running the application

```py title="app.py" withLineNumbers
app.run(debug=True,host="0.0.0.0",port=8000)
```

### Accessing the GET request

Now that we have our Flask application set up, we can use it to zip and download files. To use the service, we will send a GET request to our endpoint.

```shell Terminal
http://localhost:8000/file
```

The user's browser will prompt them to download the zip file. Read the next article to see how we link this to frontend interface.
