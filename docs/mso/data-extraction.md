---
sidebar_position: 3
---

# Data Extraction
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
```