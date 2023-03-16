---
slug: using-flask-to-zip-and-download-files-part-2
title: Using Flask to Zip and Download Files (Part 2)
authors: [eldoraboo]
tags: [tutorial]
---

### Passing apiUrl as a prop

To begin, we will pass the apiUrl as a prop, it is defined as ```/file``` in the previous post. We also set a variable to keep track of the filename.

```js title="App.js" withLineNumbers
import * as React from "react";

function App({ apiUrl }) {
    const [fileName, setFileName] = React.useState("");
}
export default App;
````

### Download Action

With both ```apiUrl``` and ```fileName``` we are able to send a request to the Flask API.

```js title="App.js" withLineNumbers
function App({ apiUrl }) {
    const [fileName, setFileName] = React.useState("");
    React.useEffect(() => {
        const downloadButton = document.getElementById("downloadButton");
        if (downloadButton) {
        downloadButton.addEventListener("click", () => {
            fetch(`${apiUrl}/file?fileName=${fileName}`)
                .then((response) => response.blob())
                .then((blob) => {
                    const url = window.URL.createObjectURL(blob);
                    const a = document.createElement("a");
                    a.href = url;
                    a.download = `${fileName}.zip`;
                    a.click();
                })
                .catch((error) => {
                    console.error(error);
                });
            });
        }
    }, [apiUrl, fileName]);
}
export default App;
````

### Frontend UI for TextField and Button

To retrieve our file name and activate the download. We will make a text field and button for the frontend.

```js title="App.js" withLineNumbers
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Stack direction="row" spacing={2}>
          <TextField
          id="filled-basic"
          label="File Name"
          variant="filled"
          value={fileName}
          onChange={(e) => setFileName(e.target.value)}
        />
          <Button variant="outlined" id="downloadButton">
          Download Data
          </Button>
        </Stack>
        {userData && <UserData data={userData} />}
      </header>
    </div>
  );
````