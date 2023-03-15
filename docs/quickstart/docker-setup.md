---
sidebar_position: 3
---

# Docker Setup

If you wish to use the pre-built images, follow the steps below. You can either do it via Docker Compose or run two images separately.

## Docker Compose

:::info Easy Setup
Copy the file below, save it as `docker-compose.yml`. Then run the following command in your **Command Prompt** or **Terminal**.
```bash
docker compose up
```
:::

```yml title="docker-compose.yml"
version: '1'
services:
  front-end:
    image: eldoraboo/afms:latest
    ports:
      - "81:80"
    depends_on:
      - back-end
  back-end:
    image: eldoraboo/optimizer:latest
    ports:
      - "5000:5000"
name: afms-tool
```

Alternatively, you may follow the instructions below to run two images separately.

## Front-End Setup

```bash
docker pull eldoraboo/afms:latest
docker run  --name front-end -d -p 81:80 eldoraboo/afms:latest
```

## Back-End Setup

```bash
docker pull eldoraboo/optimizer:latest
docker run --name back-end -d -p 5000:5000 eldoraboo/optimizer:latest
```