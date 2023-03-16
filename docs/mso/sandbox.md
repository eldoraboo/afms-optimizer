---
sidebar_position: 2
---

# Sandbox

Explore the power of **zero-shot classification** with this interactive demo using the **Facebook BART-large MNLI model**, hosted on a Gradio space. This user-friendly interface allows you to input your own **text and candidate labels** to see how the model classifies the text based on your provided categories. The model is highly versatile and can be used for a wide range of applications, including **topic categorization**, **sentiment analysis**, and more.

To use the demo, simply follow these steps:

1. Enter a **text snippet** you'd like to classify in the **"Text"** input field.
2. Provide a list of **candidate labels** separated by commas in the **"Class names"** input field. These labels represent the **possible categories** for the input text.
3. Click the **"Submit"** button to see the **classification results**. The model will return a **list of labels** along with their **respective confidence scores**.
4. (optional) Tick **"Allow multiple true classes"** to calculate each class independently.

<iframe
	src="https://eldoraboo-facebook-bart-large-mnli.hf.space"
	frameborder="0"
	width="850"
	height="450"
></iframe>