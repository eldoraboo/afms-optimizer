---
sidebar_position: 3
---

# Pushing to DockerHub

## Retrieve Image ID

Retrieve the **image ID** using
```bash
docker images
```
and you should see something similar to this
```bash
REPOSITORY            TAG       IMAGE ID       CREATED        SIZE
eldoraboo/optimizer   latest    eddc6908c0fb   2 hours ago    4.39GB
eldoraboo/afms        latest    1d0bf74ef845   2 hours ago    44.9MB
```

## Tag and Push Your Image

Tag your images with a name. In general, a good choice for a tag is something that will help you understand what this container should be used in conjunction with, or what it represents. Then push your image into DockerHub.

```bash
# for front-end image
docker tag 1d0bf74ef845 eldoraboo/afms:latest
docker push eldoraboo/afms

# for back-end image
docker tag eddc6908c0fb eldoraboo/optimizer:latest
docker push eldoraboo/optimizer
```