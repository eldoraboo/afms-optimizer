---
slug: set-up-frontend-client-java-script-on-docker
title: Set Up Frontend Client (JavaScript) on Docker
authors: [eldoraboo]
tags: [tutorial]
---

### Prerequisities

This article assumes we already have started a `create-react-app` project.


```shell Terminal 
npx create-react-app client-frontend
cd client-frontend
npm start
```


### Step 1: Open Docker Desktop

To get started with Docker, you need to have Docker Desktop installed on your machine. If you haven’t already, download and install it from the official website. Once installed, open Docker Desktop and make sure that it is running.

### Step 2: Create a Dockerfile

A `Dockerfile` is a script that contains all the instructions required to build a Docker image. In our case, we want to build an image for a Create React App. To do this, we’ll need to include the following components in our Dockerfile:

1. The base image (e.g.`node:18-alpine`)
2. The required dependencies (e.g., the Create React App dependencies)
3. The code for the Create React App

Here’s an example of a simple `Dockerfile` for a Create React App:


```shell title=Dockerfile withLineNumbers
# Stage 1
FROM node:18-alpine as builder
WORKDIR /app
COPY package.json .
COPY yarn.lock .
RUN yarn install
COPY . .
RUN yarn build

# Stage 2

FROM nginx:1.19.0
WORKDIR /usr/share/nginx/html
RUN rm -rf ./\*
COPY --from=builder /app/build .
ENTRYPOINT ["nginx", "-g", "daemon off;"]

````

In this example, we’re using the official Node image as the base image and installing the required dependencies using `npm install`. We’re also copying the code for the Create React App to the working directory and setting the environment variable for React.js. Make a `.dockerignore` file as well.

```shell title=.dockerignore withLineNumbers
/node_modules
````



### Step 3: Build the Docker Image

Once you have created the `Dockerfile`, you can use the following command to build the Docker image:


```shell Terminal
docker build . -t client-frontend 
```

The `docker build` command builds the Docker image using the instructions in the
Dockerfile. The `.` argument specifies the location of the Dockerfile, and the `-t`
argument specifies the name and tag of the image (in this case, `client-frontend`).

### Step 4: Run the Docker Container

Once the Docker image has been built, you can use the following command to run the Docker container:


```shell Terminal
docker run -d -p 8080:80 client-frontend
```

The `docker run` command runs the Docker container from the image. The `-d` argument
specifies that the container should run in the background, and the `-p` argument
maps port `80` in the container to port `8080` on the host.

### Step 5: Check the Running Containers

To check the running containers, you can use the following command:


```shell Terminal
docker ps -a
```


### Step 6: Access the Create React App

To access the Create React App, visit `localhost:8080`

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

In case the port 8080 is already in use, you can use the following command to check which processes are involved:


```shell Terminal
sudo lsof -i -P -n | grep 8080
```

Lastly, to kill the process involved, use the following command:

```shell Terminal
kill -9 <pid>
```

Replace `<pid>` with the actual process ID of the process you want to kill.
