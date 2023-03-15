---
sidebar_position: 4
---

# Model Setup

```py
from transformers import pipeline
from heapq import nlargest

classifier = pipeline("zero-shot-classification",
                      model="facebook/bart-large-mnli")

def zero_shot(doc, candidates):
    dictionary = classifier(doc, candidates)
    labels = dictionary['labels']
    scores = dictionary['scores']
    return dict(zip(labels, scores))

def top(text, cats):
    results = zero_shot(text, cats)
    topthree = nlargest(3, results, key=results.get)
    for top in topthree:
        categories_count[top] += 1
    print(f"{count}: {categories_count}")
    return topthree

for feed in feedback:
    count += 1
    top(feed, categories)

print(categories_count)
```