---
sidebar_position: 3
---

# Data Extraction

## Overview
This Python script imports the necessary `pandas` library and defines a function called `parse` to **extract specific columns** from an Excel file. The main objective of this script is to process a dataset containing **parcel sorting feedback** and count the **number of occurrences** of each unique reporting category.

```py
import pandas as pd
```

## Functions

```py
parse(file_path, sheet_name, column_name)
```

This function takes three arguments:
- `file_path`: A string representing the **path** to the input Excel file.
- `sheet_name`: A string representing the **name of the sheet** within the Excel file to process.
- `column_name`: A string representing the **name of the column** to extract from the specified sheet.

The function reads the **Excel file** using the provided `file_path` and `sheet_name`, then extracts the specified `column_name`. It converts the **extracted column into a list** and returns it.

```py
def parse(file_path, sheet_name, column_name):
    df = pd.read_excel(file_path, sheet_name=sheet_name)
    column = df[column_name].tolist()
    return column
```

## Main Code
1. Calls the `parse` function to extract the **unique reporting categories** from the Excel file and stores them in the `categories` variable as a list.
2. Calls the `parse` function again to **extract the subject descriptions** from the Excel file and stores them in the `feedback` variable as a list.
3. Calculates the **number of feedback entries** in the dataset and stores it in the `number` variable.
4. Creates a dictionary called `categories_count` to store the **count of occurrences for each category**, initializing each count to 0.
5. Defines a variable `count` and initializes it to 0. This variable can be used later to **count occurrences** of specific subjects or other elements.

```py
categories = list(set(parse("Copy of parcel_sorting_feedback_2020_2022_updated.xlsx", "parcel_sorting_feedback_2020_20", "Reporting_Category")))
feedback = parse("Copy of parcel_sorting_feedback_2020_2022_updated.xlsx", "parcel_sorting_feedback_2020_20", "Subject_Description")

number = len(feedback)
categories_count = {category: 0 for category in categories}
count = 0
```