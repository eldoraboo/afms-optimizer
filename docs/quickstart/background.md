---
sidebar_position: 1
---

# Background

There are **two main components** implemented.

- **UX** implemented with **JavaScript**
- **Optimization Engine** implemented with **Python**

## UX Component

The **main function** of the component resides in `\afms\src\AFMS\FSOptimizer\run.js`

### Description

**UX** will get the following inputs (`file` and `output_folder`) and post it to the **web URL** as listed below
-  `file == scenarioFile` (all the parameters setting for a particular scenario)
- `output_folder == fs_optimizer_results` (output folder name)

:::tip POST trigger
```bash
http://localhost:5000/run
```
:::

## Optimization Engine Component

The **main function** of the component resides in `\optimizer\server.py`

### Description

`server.py` is the **server file** for receiving `POST` commands from the **UX component**.

The **main API call** of the component resides in `\optimizer\engine_frame.py`

:::info function
```python
API_main_run_engine(input_folder, output_folder, need_pre_process=True)
```
:::

- **Main API** is called by `server.py`
- _input_folder_ : `scenarioFile` is extracted and placed in a folder for the optimization model
- _output_folder_ : for writing out all the result files