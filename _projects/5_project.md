---
layout: page
title: Unconfoundedness vs Synthetic Control in Panel Data Analysis
description: Exploring time-series and cross-sectional methods to enhance causal inference in panel data.
img: assets/img/1.jpeg
importance: 6
category: statistics
---

### **Table of Contents:**
- [Overview](#overview)
- [Key Concepts](#key-concepts)
- [Project Outcomes](#project-outcomes)
- [Full Report](#full-report)
- [References](#references)

---

### **Overview:**

This project explores two key papers in the field of panel data analysis:

1. **Shen et al. (2022)**, "Same Root, Different Leaves: Time Series and Cross-sectional Methods in Panel Data."
2. **Athey et al. (2017)**, "Matrix Completion Methods for Causal Panel Data Models."

The objective of the project is to analyze and summarize how both time-series and cross-sectional methodologies contribute to causal inference in panel data. This summary highlights their similarities, differences, and key insights into improving causal analysis using matrix completion techniques.

---

### **Key Concepts**

#### **1. Time-Series and Cross-Sectional Methods in Panel Data**
The paper by Shen et al. (2022) examines panel data models, which observe multiple units over time to evaluate causal effects. The authors analyze two commonly used methods:

- **Horizontal Regression (HZ)**: Relies on time-series data to predict future outcomes based on past behavior (unconfoundedness).
- **Vertical Regression (VT)**: Uses cross-sectional data, such as synthetic controls, to predict outcomes by comparing treated and control units.

**Main Contributions:**
- Challenges the belief that horizontal and vertical methods are fundamentally different by proving they yield identical point estimates under certain conditions.
- Demonstrates that while point estimates may match, their respective confidence intervals and estimands can diverge, affecting inference accuracy.
- Highlights the critical role of assumptions regarding the source of randomness in the data.

**Case Study Examples:**
The authors illustrate their findings through applications such as the economic impact of terrorism in the Basque Country, the effects of California’s Proposition 99 on tobacco consumption, and the economic repercussions of German reunification.



#### **2. Matrix Completion Methods for Causal Panel Data Models**
The paper by Athey et al. (2017) introduces a matrix completion method to impute missing control outcomes for causal inference. Their approach leverages matrix completion techniques to estimate the average treatment effect on treated units.

**Main Contributions:**
- Proposes a **matrix completion with nuclear norm minimization estimator (MC-NNM)**, which effectively approximates incomplete data with reduced complexity.
- Demonstrates that matrix completion, synthetic control, and unconfoundedness can be unified under a shared objective function, differing only by regularization or restrictions.
- Shows through simulations that MC-NNM outperforms traditional horizontal and vertical estimators in both predictive accuracy and robustness.

**Data Patterns and Use Cases:**
The paper emphasizes different patterns of missing data (e.g., block structures, staggered adoption) and explains how matrix shape (“thin” vs. “fat” matrices) affects analysis approaches. Simulations using California smoking data and daily stock returns illustrate the method’s adaptability.

---

### **Project Outcomes**
Through this project, I gained a deeper understanding of how different panel data methodologies intersect and how advanced techniques, such as matrix completion, can enhance causal inference. The findings have practical implications for fields such as economics, public policy, and program evaluation.

---

### **Full Report**
You can read the full report below.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        <object data="/assets/pdf/causal.pdf" type="application/pdf" width="100%" height="800px">
            <p>It appears you don't have a PDF plugin for this browser. You can <a href="/assets/pdf/causal.pdf">click here to download the PDF file.</a></p>
        </object>
    </div>
</div>

---

### **References**
- Shen, D., Ding, P., Sekhon, J., & Yu, B. (2022). ["Same Root, Different Leaves: Time Series and Cross-Sectional Methods in Panel Data"](https://arxiv.org/abs/2207.14481). arXiv.
- Athey, S., Bayati, M., Doudchenko, N., Imbens, G., & Khosravi, K. (2017). ["Matrix Completion Methods for Causal Panel Data Models"](https://arxiv.org/abs/1710.10251). arXiv.

