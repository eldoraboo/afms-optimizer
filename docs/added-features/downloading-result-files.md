---
sidebar_position: 1
---

# Downloading Result Files

To access the files processed in the **optimizer** backend, we improved the **API** to include a `download_file` method that allows users to **download the results** stored in the _output folder_. Then we add a **function** in the frontend to **auto-download** the file once the **optimization process** is completed.

As only **port 80** is exposed, this method enables users to retrieve the files via the frontend.

## Improving the API Function

### Original `run()` function
```py title="optimiser/server.py"
@app.route('/run', methods=["POST"])
def run():
    ...
    return jsonify({"status": "success"})
```

### Improved `run()` function
```py title="optimiser/server.py"
@app.route('/run', methods=["POST"])
def run():
    ...
    return send_file(f"{output_folder}/results.zip",
        mimetype = 'zip',
        attachment_filename= 'results.zip',
        as_attachment = True)
```

## Adding a Function to Clear Cache

We want to make sure we **do not cache the outputs** of the previous optimization runs, so we **clear the cache** after every call to the function.

```py title="optimiser/server.py"
@app.after_request
def add_header(response):
  response.headers['X-UA-Compatible'] = 'IE=Edge, chrome=1'
  response.headers['Cache-Control'] = 'public, max-age=0'
  return response
```

## Auto-Download Function
