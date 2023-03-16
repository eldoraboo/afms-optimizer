---
sidebar_position: 6
---

# Implementing Few-Shot

## Overview

This Python script uses the `spacy`, `classy_classification`, `csv`, and `pandas` libraries to perform few-shot classification of parcel sorting feedback entries. The script defines a function `few_shot` that trains a text categorizer on a small dataset and classifies a given input text. The training data is provided as a CSV file.

## Required Libraries

```py
import spacy
import classy_classification
import csv
import pandas as pd
import os
```

## Function

### few_shot

```py
few_shot(doc, csv_file)
```

This function takes two arguments:

- `doc`: A string representing the **input text** to be classified.
- `csv_file`: A string representing the **path to the CSV file** containing the **training data.**

The function reads the CSV file, processes the **training data**, trains a **text categorizer model** using the `classy_classification` package, and **classifies the input text**. It returns a dictionary with the **candidate categories as keys** and their respective **classification scores as values**.

```py
def few_shot(doc, csv_file):
    df = pd.read_csv(csv_file.name)
    data = {}
    sample_size = 10

    candidate_labels = df['label'].unique().tolist()

    for label in candidate_labels:
        candidate_values = df.query(f"`label` == '{label}'").sample(
            n=sample_size)['text'].values.tolist()
        data[label] = candidate_values

    nlp = spacy.blank("en")
    nlp.add_pipe(
        "text_categorizer",
        config={
            "data": data,
            "model": "sentence-transformers/all-mpnet-base-v2",
            "device": "gpu"
        }
    )

    dictionary = nlp(doc)._.cats
    return dictionary
```

## Main Code

To use this script, you need to have a **text input** (e.g., `feedback`) and a CSV file containing the **training data**. You can then call the `few_shot` function to process the **text input** and get the **classification results**.

```py
few_shot("feedback", os.path.join(os.path.dirname(__file__),"files/train1.csv"))
```

## Format of Training Data

The **training data CSV file** should have the **following format**:

| label   | text       |
| ------- | ---------- |
| label_1 | feedback_1 |
| label_2 | feedback_2 |
| label_3 | feedback_3 |

- `label`: The label column contains the **category** corresponding to each training example.
- `text`: The text column contains the **training examples**.
