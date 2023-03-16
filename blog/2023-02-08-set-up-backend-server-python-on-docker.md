---
slug: set-up-backend-server-python-on-docker
title: Set Up Backend Server (Python) on Docker
authors: [eldoraboo]
tags: [tutorial]
---

### Prerequisities
This article assumes we already have these two files in the directory.

```python title=app.py withLineNumbers
import json
from flask import Flask
app = Flask(__name__)

@app.route('/')
def index():
    return json.dumps({'message': 'Welcome to Flask!'})
app.run(debug=True,host="0.0.0.0",port=3000)
```

<br/>

```text title=requirements.txt withLineNumbers
flask
```


### Step 1: Open Docker Desktop
To get started with Docker, you need to have Docker Desktop installed on your machine. If you haven’t already, download and install it from the official website. Once installed, open Docker Desktop and make sure that it is running.

### Step 2: Create a Dockerfile
A `Dockerfile` is a script that contains all the instructions required to build a Docker image. In our case, we want to build an image for a Flask REST API. To do this, we’ll need to include the following components in our Dockerfile:
1. The base image (e.g. `alpine`)
2. The required dependencies (e.g., Flask and its dependencies)
3. The code for the Flask REST API

Here’s an example of a simple `Dockerfile` for a Flask REST API:

```shell title=Dockerfile withLineNumbers
FROM alpine:latest
RUN apk update
RUN apk add py-pip
RUN apk add --no-cache python3-dev 
RUN pip install --upgrade pip
WORKDIR /app
COPY . /app
RUN pip --no-cache-dir install -r requirements.txt
CMD ["python3", "app.py"]
```

In this example, we’re using the `alpine` image as the base image and installing the required dependencies using `pip install`. We’re also copying the code for the Flask REST API to the working directory and setting the environment variable for Flask.

### Step 3: Build the Docker Image
Once you have created the `Dockerfile`, you can use the following command to build the Docker image:

```shell Terminal
docker build . -t server-backend
```

The `docker build` command builds the Docker image using the instructions in the Dockerfile. The `.` argument specifies the location of the Dockerfile, and the `-t` argument specifies the name and tag of the image (in this case, `server-backend`).

### Step 4: Run the Docker Container
Once the Docker image has been built, you can use the following command to run the Docker container:

```shell Terminal
docker run -d -p 3000:3000 server-backend
```

The `docker run` command runs the Docker container from the image. The `-d` argument specifies that the container should run in the background, and the `-p` argument maps port `3000` in the container to port `3000` on the host.

### Step 5: Check the Running Containers
To check the running containers, you can use the following command:

```shell Terminal
docker ps -a
```


### Step 6: Access the Flask REST API
To access the Flask REST API, visit `localhost:3000`

### Step 7: Check the Docker Logs
If you encounter any issues, you can check the Docker logs to see what might be causing the problem. Use the following command to view the logs:

```shell Terminal
docker logs <container_id>
```

Replace `<container_id>` with the actual ID of the container you want to view the logs for.

### Step 8: Stop the Docker Container
When you’re done, you can stop the Docker container using the following command:

```shell Terminal
docker stop <container_id>
```

Replace `<container_id>` with the actual ID of the container you want to view the logs for.

### Final Words
In case the port 3000 is already in use, you can use the following command to check which processes are involved:

```shell Terminal
sudo lsof -i -P -n | grep 3000
```

Lastly, to kill the process involved, use the following command:

```shell Terminal
kill -9 <pid>
```

Replace `<pid>` with the actual process ID of the process you want to kill.