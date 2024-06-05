
# COA Take-home Challenge

Welcome to the COA Take-home Challenge project! This project represents the culmination of efforts to build an interactive photo gallery, implement coding challenges, and demonstrate proficiency in HTML, CSS, and JavaScript.

## Overview of the Challenge

The purpose of this coding challenge is to assess your skills in HTML, CSS, and JavaScript, as well as your problem-solving abilities. You will be tasked with building an interactive photo gallery based on provided Figma designs. Additionally, you will complete two coding challenges using JavaScript, which will test your logical thinking and coding aptitude.

## Table of Contents

- [COA Take-home Challenge](#coa-take-home-challenge)
  - [Overview of the Challenge](#overview-of-the-challenge)
  - [Table of Contents](#table-of-contents)
  - [Getting Started](#getting-started)
  - [Photo Gallery](#photo-gallery)
  - [Coding Challenges](#coding-challenges)
    - [Array Manipulation](#array-manipulation)
    - [String Transformation](#string-transformation)
  - [Design Mockup](#design-mockup)
  - [Thank You](#thank-you)

## Getting Started

To set up and run the project locally, follow these steps:

1. Clone the repository to your local machine:

    ```bash
    git clone https://github.com/AbdulKhaliq59/COA-TASKFORCE.git
    ```

2. Navigate to the project directory:

    ```bash
    cd COA-TASKFORCE
    ```

3. Open the `index.html` file in your web browser to view the photo gallery:

    ```bash
    open index.html
    ```

## Photo Gallery

The photo gallery displays images of different animals along with their names and locations. Here's a brief overview of its features:

- **Grid Layout**: The gallery items are displayed in a responsive grid layout, adapting to different screen sizes.
- **Hover Effects**: Hovering over an image reveals additional information about the animal, including its name and location.
- **Interactive Animations**: Smooth animations are applied to enhance the user experience when interacting with the gallery items.

## Coding Challenges

### Array Manipulation

**Problem Statement**: Given an array of integers and a target sum, determine if there exists a contiguous subarray within the array that sums up to the target.

**Solution Approach**: We use the sliding window technique to iterate through the array while keeping track of the current sum. If the current sum equals the target, we return true; otherwise, we adjust the window accordingly.

**Implementation**: The solution is provided in the `Challenges/arrayMap.js` file.

**Testing with Node.js**: To test the solution using Node.js, make sure you have Node.js installed on your machine. Then, you can run the following command in your terminal:

```bash
node Challenges/arrayMap.js
```

### String Transformation

**Problem Statement**: Given a string, transform it based on specific rules depending on its length.

**Solution Approach**: We determine if the length of the string is divisible by 3, 5, or both, and apply transformations accordingly: reversing the string, replacing characters with their ASCII codes, or both.

**Implementation**: The solution is provided in the `Challenges/stringTransform.js` file.

**Testing with Node.js**: To test the solution using Node.js, make sure you have Node.js installed on your machine. Then, you can run the following command in your terminal:

```bash
node Challenges/stringTransform.js
```

## Design Mockup

To view the design mockup used for this project, please visit [Figma - COA Take-home Challenge](https://www.figma.com/design/XF6xlvvHBv12WFveDjVoso/COA-Take-home-Challenge?node-id=1-524&t=Kn9GlBL9mCFWUTOx-0).

## Thank You

Thank you for considering my submission for the COA Take-home Challenge. I hope you enjoy browsing through the `Animal Gallery!` 🐾📸

