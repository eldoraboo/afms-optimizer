---
sidebar_position: 5
---

# Complete Source Code

```py
import pandas as pd

def parse(file_path, sheet_name, column_name):
    df = pd.read_excel(file_path, sheet_name=sheet_name)
    column = df[column_name].tolist()
    return column

categories = list(set(parse("Copy of parcel_sorting_feedback_2020_2022_updated.xlsx", "parcel_sorting_feedback_2020_20", "Reporting_Category")))
feedback = parse("Copy of parcel_sorting_feedback_2020_2022_updated.xlsx", "parcel_sorting_feedback_2020_20", "Subject_Description")

number = len(feedback)
categories_count = {category: 0 for category in categories}
count = 0

import concurrent.futures
from transformers import pipeline
from heapq import nlargest

classifier = pipeline("zero-shot-classification",
                      model="facebook/bart-large-mnli")

def zero_shot(doc, candidates):
    dictionary = classifier(doc, candidates)
    labels = dictionary['labels']
    scores = dictionary['scores']
    return dict(zip(labels, scores))

def top(feed, cats):
    results = zero_shot(feed, cats)
    topthree = nlargest(3, results, key=results.get)
    for top in topthree:
        categories_count[top] += 1
    return topthree

count = 0
with concurrent.futures.ThreadPoolExecutor(max_workers=8) as executor:
    futures = [executor.submit(top, feed, categories) for feed in feedback]
    for future in concurrent.futures.as_completed(futures):
        count += 1
        topthree = future.result()
        print(f"{count}: {categories_count}")

print(categories_count)
```