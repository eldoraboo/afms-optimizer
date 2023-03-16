---
sidebar_position: 6
---

# Implementing Few-Shot

## Training Few-Shot Model with Classy-Classification

### Required Libraries

```py
import spacy
import classy_classification
import csv
import pandas as pd
import os
```

### Few-Shot Function

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

### Implementation

```py
few_shot("feedback", os.path.join(os.path.dirname(__file__),"files/train1.csv"))
```

## Format of Training Data
| label   | text       |
| ------- | ---------- |
| label_1 | feedback_1 |
| label_2 | feedback_2 |
| label_3 | feedback_3 |
