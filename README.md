## 🌟 Quotes Generator

A simple multilingual quote generator built with HTML and JavaScript. Click a button to display random quotes in **Japanese**, **English**, or **Russian**.

---

### 🎯 Features

* ✨ Random quote displayed on button click
* 🌐 Multilingual support (English, Japanese, Russian)
* 🧠 Includes quotes from iconic figures like Elon Musk, Taylor Swift, and Bill Gates
* 📱 Mobile-friendly and clean layout

---

### 💡 Technologies

* HTML5 for structure
* JavaScript for logic and DOM manipulation
* *(Optional)* CSS for styling

---

### 📦 Structure Overview

```
/quotes-generator
│
├── index.html       # Contains HTML elements, buttons, and script tags
└── style.css        # (optional) Custom styling
```

---

### 📋 How It Works

1. Arrays hold quotes in English, Japanese, and Russian.
2. Three `<h1>` elements are used to display the quotes.
3. Each button triggers a function using `onclick` and `addEventListener`, which:

   * Picks a random quote from the selected language array.
   * Replaces the inner text of the corresponding `<h1>` element.

---

### 📌 Key JavaScript Concepts Used

* `document.getElementById()`
* `innerHTML` for text updates
* `addEventListener()` for event handling
* Random number generation with `Math.random()`
* Function parameter reuse with `changeQuoteGeneric(array, elementId)`

---

### 🧠 Learning Outcome

This project strengthens your understanding of:

* DOM manipulation
* Dynamic content rendering
* Event handling with JavaScript
* Writing modular and reusable functions

how to use this:

download the file, extract it on your system, run the index.html. this project is ready to use!
