---
slug: setting-up-docker-to-connect-client-and-server
title: Setting Up Docker To Connect Client and Server
authors: [eldoraboo]
tags: [tutorial]
---

### Prerequisities

This article assumes we already have these two Dockerfiles in their respective folders.

```shell title="afms > Dockerfile" withLineNumbers
# Stage 1 - the build process
FROM node:12-alpine as build-deps
WORKDIR /usr/src/app
COPY package.json yarn.lock ./
RUN apk add --no-cache autoconf
RUN yarn
COPY . ./
RUN yarn build

# Stage 2 - the production environment
FROM nginx:1.21-alpine
COPY --from=build-deps /usr/src/app/dist /usr/share/nginx/html
EXPOSE 443
CMD ["nginx", "-g", "daemon off;"]
```

<br/>

```shell title="optimiser > Dockerfile" withLineNumbers
# Stage 1 - installing dependencies
FROM continuumio/miniconda3:latest
WORKDIR /app
COPY *.py .
COPY requirements.txt .
RUN pip install -r requirements.txt
RUN apt-get update && apt-get install -y \
    build-essential \
    libgl1-mesa-glx \
    libglib2.0-0 \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

# Stage 2 - conda & pip set up
RUN pip install flask flask_cors
COPY environment.yml .
RUN conda config --set channel_priority strict
RUN conda create -n opt python=3.9
RUN /bin/bash -c "source activate opt"
RUN conda install -c conda-forge scip
RUN conda install -c conda-forge pyscipopt
RUN conda install -c conda-forge geopandas
RUN conda install -c conda-forge pyproj

# Stage 3 - activate script
COPY server.py .
EXPOSE 5000
SHELL ["conda", "run", "-n", "opt" "/bin/bash", "-c"]
CMD ["python", "server.py"]
```

### Step 1: Open `afms > dist > app.js`

`Ctrl + F` to look for `127.0.0.1`, then replace it with `172.17.0.1`

### Step 2: Open `optimiser > server.py`

`Ctrl + F` to look for `app.run()`, then add `host="0.0.0.0"` and `port=5000` to the arguments

### Step 3: Build the Docker Images

Once you have created the Dockerfiles and setup the files accordingly, we will build the images.

```shell Terminal
cd afms
docker build . -t client-frontend
# Estimated runtime: 20 seconds
```

Ensure that you are in the correct folders when building the images

```shell Terminal
cd optimiser
docker build . -t server-backend
# Estimated runtime: 4000 seconds
```

### Step 4: Run the Docker Containers

Once the Docker images has been built, you can use the following commands to run the Docker containers:

```shell Terminal
docker run -d -p 443:80 client-frontend
```

We will expose port 443 on the host.

```shell Terminal
docker run -d -p 5000:5000 server-backend
```

### Step 5: Check the Running Containers

To check the running containers, you can use the following command:

```shell Terminal
docker ps -a
```

### Step 6: Access the client/server

To access the client, visit `localhost:443`.
To access the server, visit `localhost:5000`.

### Step 7: Check the Docker Logs

If you encounter any issues, you can check the Docker logs to see what might be causing the problem. Use the following command to view the logs:

```shell Terminal
docker logs <container_id>
```

Replace `<container_id>` with the actual ID of the container you want to view the logs for.

### Step 8: Stop the Docker Containers

When you’re done, you can stop the Docker containers using the following command:

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
