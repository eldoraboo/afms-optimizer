---
sidebar_position: 4
---

# Model Setup

## Overview

This Python script leverages the `transformers` library to perform **zero-shot classification** of feedback entries. The script loads a pre-trained model (`bart-large-mnli`), defines a function to **classify the feedback** using **zero-shot classification**, and another function to **extract the top categories** for **each feedback entry**. Finally, the script iterates over the feedback list and updates the `categories_count` dictionary based on the **top predicted categories**.

```py
from transformers import pipeline
from heapq import nlargest

classifier = pipeline("zero-shot-classification",
                      model="facebook/bart-large-mnli")
```

## Functions

### zero_shot

```py
zero_shot(doc, candidates)
```

This function takes two arguments:

- `doc`: A string representing the **input text** to be classified.
- `candidates`: A list of strings representing the **candidate categories**for classification.

The function uses the **pre-trained zero-shot classification model** to classify the input text and returns a **dictionary** with the **candidate categories as keys** and their respective **classification scores as values**.

```py
def zero_shot(doc, candidates):
    dictionary = classifier(doc, candidates)
    labels = dictionary['labels']
    scores = dictionary['scores']
    return dict(zip(labels, scores))
```

### top

```py
top(text, cats)
```

This function takes two arguments:

- `text`: A string representing the input text to be classified.
- `cats`: A list of strings representing the candidate categories for classification.

The function calls the **zero_shot function** to get the **classification scores** for the input text. Then, it extracts the **top three categories** based on their scores, updates the `categories_count` dictionary, and **returns the top three categories**.

```py
def top(text, cats):
    results = zero_shot(text, cats)
    topthree = nlargest(3, results, key=results.get)
    for top in topthree:
        categories_count[top] += 1
    print(f"{count}: {categories_count}")
    return topthree
```

## Main Code
1. Loads the **pre-trained zero-shot classification model** from the `transformers` library.
2. Iterates over the **feedback list** and calls the `top` function for each feedback entry, passing the **feedback text** and the **categories list**.
3. Prints the updated `categories_count` dictionary after processing all **feedback entries**.

To use this script, you need to have a **list of feedback entries** (e.g., feedback) and a **list of candidate categories** (e.g., categories). You can then call the `top` function to process each feedback entry and update the `categories_count` dictionary accordingly.

```py
for feed in feedback:
    count += 1
    top(feed, categories)

print(categories_count)
```
