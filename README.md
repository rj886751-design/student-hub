# Previous Year Question Papers Portal 📝

A fast, lightweight, and responsive web application designed specifically for **1st-year college students** to easily search and access Previous Year Question Papers (PYQs). 

This portal is built entirely as a **pure frontend application (No Heavy Backend)**, utilizing client-side JavaScript to seamlessly link and filter local PDF documents for instant access.

---

## 🚀 How the Website Works

Since this website is completely client-side and optimized for speed, it works seamlessly through the browser:

1. **Accessing the Portal:** The user opens the web application link.
2. **Dynamic Search Terminal:** A clean and interactive search bar is presented immediately on the landing page.
3. **Smart Client-Side Search:** The user types a subject name. The JavaScript engine listens to the input and instantly filters the available papers.
4. **Direct PDF Linkage:** Clicking on the result opens or downloads the exact PDF file mapped directly via JavaScript.

---

## ✨ Features

- **Zero Server Overhead:** Completely static frontend application—extremely fast loading speeds with no backend required.
- **Client-Side PDF Linkage:** JavaScript efficiently handles file references and directs users to the exact relative document path instantly.
- **Minimalist UI/UX:** A distraction-free structure created using clean HTML and modern CSS styles.
- **Fully Responsive:** Perfectly scaling layout across smartphones, tablets, laptops, and desktop screens.

---

## 🛠️ Tech Stack Used

- **HTML5:** Used to structure the semantic search layout and display components.
- **CSS3:** Powering the responsive, professional styling and clean visual aesthetic.
- **JavaScript (Vanilla JS):** The core engine of the app. It handles the user input, filters data dynamically, and links each subject directly to its corresponding local PDF paper.

---

## 📂 Project Structure

```text
├── index.html          # Clean UI landing page with the primary search window
├── style.css           # Modern, responsive design stylesheets
├── script.js           # Core JS file managing the data matrix and relative PDF linkage
├── papers/             # Hard repository containing all subject Question Paper PDFs
└── README.md           # Professional project documentation (This file)
```

---

## 💡 How JavaScript Links PDFs Professionally (Code Setup)

To keep this frontend app super professional, the PDFs are structured inside an Array of Objects in `script.js`. This allows your client-side code to scale seamlessly:

```javascript
// Example of how your script.js maps files directly
const questionPapers = [
  {
    subject: "Engineering Mathematics",
    year: "2025",
    link: "papers/maths_2025.pdf"
  },
  {
    subject: "Applied Physics",
    year: "2024",
    link: "papers/physics_2024.pdf"
  }
];
```

---

## 🧑‍💻 How to Run Locally

Because there is no heavy backend setup, running this project is incredibly easy:

1. **Clone or Download the Repository:**
   ```bash
 
   ```
2. **Navigate into the Directory:**
   ```bash
   cd your-repo-name
   ```
3. **Launch the Application:**
   Simply double-click the `index.html` file to open it directly in any modern browser (Chrome, Edge, Safari, Firefox). No local server installation needed!

---

Developed with absolute precision for high-speed academic utility. 🎓
