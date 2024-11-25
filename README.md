# Age Calculator  

A **simple age calculator** built using **HTML**, **JavaScript**, and **CSS**. This app calculates a person's age based on the date of birth entered by the user.  

---

## **Features**  
- User-friendly interface to input a date of birth.  
- Calculates the exact age in years, months, and days.  
- Responsive design for all screen sizes.  

---

## **Demo**  
Preview the calculator by opening the `index.html` file in any web browser.  

---

## **Technologies Used**  
- **HTML**: For the structure of the application.  
- **CSS**: For styling and layout.  
- **JavaScript**: For calculating the age dynamically based on user input.  

---

## **How It Works**  
1. User enters their **Date of Birth (DOB)** into the input field.  
2. Clicks the "Calculate Age" button.  
3. The script calculates the difference between the current date and the DOB.  
4. Displays the result in years, months, and days.  

---

## **Installation**  
1. Clone the repository or download the files.  
   ```bash
   git clone https://github.com/cadealpha/simple-age-calculator.git
   ```
2. Open the `index.html` file in your web browser.  

---

## **Folder Structure**  
```
project/
│
├── index.html       // HTML file for structure
├── style.css        // CSS file for styling
└── script.js        // JavaScript file for logic
```

---

## **Usage**  
1. Open the application in your browser.  
2. Enter your **Date of Birth** in the input field.  
3. Click on **Calculate Age**.  
4. The result will display your age in years, months, and days.  

---

## **Code Snippets**  
### HTML Example  
```html
<div class="container">
  <h1>Age Calculator</h1>
  <input type="date" id="dob" />
  <button onclick="calculateAge()">Calculate Age</button>
  <p id="result"></p>
</div>
```

### JavaScript Example  
```javascript
function calculateAge() {
  const dob = new Date(document.getElementById("dob").value);
  const today = new Date();

  if (dob) {
    const years = today.getFullYear() - dob.getFullYear();
    const months = today.getMonth() - dob.getMonth();
    const days = today.getDate() - dob.getDate();

    document.getElementById("result").textContent = 
      `Your age is ${years} years, ${months} months, and ${days} days.`;
  } else {
    document.getElementById("result").textContent = "Please select a valid date!";
  }
}
```

---

## **Contributing**  
If you'd like to contribute, please fork the repository and submit a pull request with your improvements or new features.  

---

**Happy Coding!** 🚀
