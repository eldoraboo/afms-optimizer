---
sidebar_position: 2
---

# Building Docker Images

Once you have created the Dockerfiles, you can build the Docker images.

## Front-End Image

The `docker build` command builds the **Docker image** using the instructions in the Dockerfile. The `.` argument specifies the **location** of the Dockerfile, and the `-t` argument specifies the **name** of the image (in this case, `afms`).

```bash
docker build . -t afms
```

Once the Docker image has been built, you can use the following command to run the Docker container.

```bash
docker run -d -p 81:80 afms
```

## Back-End Image

The `docker build` command builds the **Docker image** using the instructions in the Dockerfile. The `.` argument specifies the **location** of the Dockerfile, and the `-t` argument specifies the **name** of the image (in this case, `optimizer`).

```bash
docker build . -t optimizer
```

Once the Docker image has been built, you can use the following command to run the Docker container.

```bash
docker run -d -p 5000:5000 optimizer
```