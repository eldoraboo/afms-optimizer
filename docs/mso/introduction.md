---
sidebar_position: 1
---

# Introduction

## NLI-based Zero Shot Text Classification

This is a method to use **pre-trained language models** to classify text **without prior training on specific labels**. They do this by treating the text to be **classified as a premise** and **creating a statement** for each possible label.

This method works really well, especially when using **big pre-trained models** like **BART** and **Roberta**.

## Zero-shot Classification Pipeline

The model can be loaded with the zero-shot-classification pipeline.
```py
from transformers import pipeline

classifier = pipeline("zero-shot-classification",
                      model="facebook/bart-large-mnli")
```

## Classify Sequences into Class Names

You can then use this pipeline to classify sequences into any of the class names you specify. If more than one candidate label can be correct, pass multi_class=True to calculate each class independently.

```py
candidate_labels = ['travel', 'cooking', 'dancing', 'exploration']
classifier(sequence_to_classify, candidate_labels, multi_class=True)

# {'labels': ['travel', 'exploration', 'dancing', 'cooking'],
#  'scores': [0.9945111274719238,
#   0.9383890628814697,
#   0.0057061901316046715,
#   0.0018193122232332826],
#  'sequence': 'one day I will see the world'}
```