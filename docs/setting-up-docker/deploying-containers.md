---
sidebar_position: 6
---

# Deploying Containers

## Docker Run
```bash
# for front-end image
docker run  --name front-end -d -p 81:80 eldoraboo/afms:latest

# for back-end image
docker run --name back-end -d -p 5000:5000 eldoraboo/optimizer:latest
```

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