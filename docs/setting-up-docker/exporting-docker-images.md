---
sidebar_position: 4
---

# Exporting Docker Images

## Retrieve Image Name

Retrieve the **image name** using
```bash
docker images
```
and you should see something similar to this
```bash
REPOSITORY            TAG       IMAGE ID       CREATED        SIZE
eldoraboo/optimizer   latest    eddc6908c0fb   2 hours ago    4.39GB
eldoraboo/afms        latest    1d0bf74ef845   2 hours ago    44.9MB
```

## Exporting as .tar files
```bash
# for front-end image
docker save eldoraboo/afms > afms.tar

# for back-end image
docker save eldoraboo/optimizer > optimizer.tar
```