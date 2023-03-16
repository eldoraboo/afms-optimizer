---
sidebar_position: 1
---

# Creating Dockerfiles

## Front-End Dockerfile

### Stage 1 - The Build Process
```bash title="afms\Dockerfile"
FROM node:12-alpine as build-deps
WORKDIR /usr/src/app
COPY package.json yarn.lock ./
RUN apk add --no-cache autoconf
RUN yarn
COPY . ./
RUN yarn build
```

### Stage 2 - The Production Environment
```bash title="afms\Dockerfile"
FROM nginx:1.21-alpine
COPY --from=build-deps /usr/src/app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

### Completed Dockerfile
```bash title="afms\Dockerfile"
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
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

## Back-End Dockerfile

### Stage 1 - Installing Dependencies
```bash title="optimiser\Dockerfile"
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
```

### Stage 2 - conda & pip Setup
```bash title="optimiser\Dockerfile"
RUN pip install flask flask_cors
COPY environment.yml .
RUN conda config --set channel_priority strict
RUN conda create -n opt python=3.9
RUN /bin/bash -c "source activate opt"
RUN conda install -c conda-forge scip
RUN conda install -c conda-forge pyscipopt
RUN conda install -c conda-forge geopandas
RUN conda install -c conda-forge pyproj
```

### Stage 3 - Activate Script
```bash title="optimiser\Dockerfile"
COPY server.py .
EXPOSE 5000
SHELL ["conda", "run", "-n", "opt" "/bin/bash", "-c"]
CMD ["python", "server.py"]
```

### Completed Dockerfile
```bash title="optimiser\Dockerfile"
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