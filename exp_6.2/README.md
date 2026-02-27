**Client-Side Form Validation** 👇

# 📝 Experiment–6.2: Client-Side Form Validation (React)

---

## 🎯 Aim

To validate form inputs on the client side before submission using React.

---

## 🛠️ Software Requirements

* Node.js
* React
* VS Code
* Web Browser

---

## 📖 Theory

Client-side validation ensures that user inputs meet specific conditions **before the form is submitted**.

It provides:

* Immediate feedback to users
* Improved user experience
* Reduced invalid submissions
* No server interaction required for basic validation

Validation is implemented using React state and conditional logic to check whether the input satisfies defined rules.

---

## 🧪 Fields Used

This experiment includes only two input fields:

1. **Email ID**
2. **Password**

---

## ✅ Validation Rules

### 📧 Email Validation Conditions

* Must contain **@**
* Must contain a valid domain such as:

  * `.com`
  * `.in`
  * Any valid country code (e.g., `.org`, `.net`, etc.)

---

### 🔐 Password Validation Conditions

The password must:

1. Start with a **Capital Letter**
2. Contain **at least one number**
3. Contain **at least one special character**
4. Have a minimum of **5 characters**

---

## 🚀 Features Implemented

* Real-time validation
* Error messages displayed below input fields
* Prevent form submission if validation fails
* Clean and responsive UI
* Interactive feedback for users

---

## 🎨 UI Highlights

* Modern design
* Smooth transitions
* Highlighted error messages
* Clean layout
* Responsive form structure

---

## 📌 Key Concepts Used

* React Functional Components
* useState Hook
* Event Handling
* Conditional Rendering
* Client-Side Validation Logic
* Regular Expressions (Regex)
* Form Submission Handling

---

## 📊 Result

The form successfully validates user inputs on the client side before submission.

* Invalid email formats are rejected.
* Passwords that do not meet the required conditions are not accepted.
* The form only submits when both fields satisfy all validation rules.

---

## 📸 Output Screenshot

<img width="825" height="686" alt="Screenshot 2026-02-20 110751" src="https://github.com/user-attachments/assets/1c01423d-1e15-4e79-bfd9-4e7e5f62817c" />

<img width="798" height="736" alt="Screenshot 2026-02-20 110851" src="https://github.com/user-attachments/assets/010199f8-436c-42f4-815f-74c907f765bd" />

⭐ *This experiment demonstrates effective client-side validation using React, ensuring secure and user-friendly form handling.*


