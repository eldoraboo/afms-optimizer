---
sidebar_position: 2
---

# Local Machine Setup

Let's setup the tool for usage.

## Getting Started

### Operating System

- Windows 10

### Required Software

- Python 3.7 or higher
- SCIPOptSuite-8.0.0-win64-VS15
- Node-v16.15.0-x64

### Dependencies

- Refer to `readme_6sep2022`

## Running the tool locally

### Front-End Setup

#### Client (UX Component)

1. Start **Command Prompt** or **Terminal**

2. Run the following commands
```bash
cd afms
yarn start
```

3. Open browser `http://localhost:8080`

#### Client (UX Component, no internet connectivity required)

1. Start **Command Prompt** or **Terminal**

2. Run the following commands
```bash
cd afms
yarn build
cd afms\dist
python -m http.server 8080
```

3. Open browser `http://localhost:8080`

### Back-End Setup

#### Server (Optimization Engine Component)

1. Start **Anaconda Prompt**

2. Run the following commands
```bash
cd optimiser
```

3. Environment setup _(you only need to do this step if you are initialising the environment for the first time)_

```bash 
conda create -n opt
conda activate opt
conda install geopandas
conda install pyproj
pip install flask
pip install flask_cors
pip install pyscipopt
```

4. Run the following commands

```bash
conda activate opt
python server.py
```