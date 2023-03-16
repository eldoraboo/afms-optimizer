---
sidebar_position: 6
---

# Complete Source Codes

## Zero-Shot

```py title="Zero_Shot.py"
import pandas as pd
from transformers import pipeline
from heapq import nlargest

def parse(file_path, sheet_name, column_name):
    df = pd.read_excel(file_path, sheet_name=sheet_name)
    column = df[column_name].tolist()
    return column

categories = list(set(parse("Copy of parcel_sorting_feedback_2020_2022_updated.xlsx", "parcel_sorting_feedback_2020_20", "Reporting_Category")))
feedback = parse("Copy of parcel_sorting_feedback_2020_2022_updated.xlsx", "parcel_sorting_feedback_2020_20", "Subject_Description")

number = len(feedback)
categories_count = {category: 0 for category in categories}

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
for feed in feedback:
    count += 1
    top(feed, categories)
    print(f"{count}: {categories_count}")       

print(categories_count)
```

## Zero-Shot (Optimized with Multi-Threading)
```py title="Zero_Shot_Optimized.py"
import pandas as pd
import concurrent.futures
from transformers import pipeline
from heapq import nlargest

def parse(file_path, sheet_name, column_name):
    df = pd.read_excel(file_path, sheet_name=sheet_name)
    column = df[column_name].tolist()
    return column

categories = list(set(parse("Copy of parcel_sorting_feedback_2020_2022_updated.xlsx", "parcel_sorting_feedback_2020_20", "Reporting_Category")))
feedback = parse("Copy of parcel_sorting_feedback_2020_2022_updated.xlsx", "parcel_sorting_feedback_2020_20", "Subject_Description")

number = len(feedback)
categories_count = {category: 0 for category in categories}

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

## Few-Shot
```py title="Few_Shot.py"
import spacy
import classy_classification
import csv
import pandas as pd
import os

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

print(few_shot("feedback", os.path.join(os.path.dirname(__file__),"files/train.csv")))
```