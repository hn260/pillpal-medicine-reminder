# 💊 PillPal — Medicine Reminder Web App

PillPal is a lightweight web application designed to **schedule, track, and manage medicine reminders** through a clean and simple interface.
The goal of the project is clarity, speed, and usability — no unnecessary complexity, just a system that works.

---

## 📌 Project Overview

Managing medicine schedules can be repetitive and error-prone. PillPal provides a **centralized, easy-to-use reminder system** where users can add, view, and remove medicines with minimal friction.

The application follows a **frontend–backend separation**, with a React-based UI and a cloud-hosted backend for persistence.

---

## 🛠 Technologies Used

### Frontend

* React (TypeScript)
* CSS (responsive layout)

### Backend

* NocoDB (REST API, cloud-hosted)

### Tooling & Deployment

* Vercel (frontend hosting)
* Bolt AI (AI-assisted development)
* Git & GitHub

---

## 🚀 Features

* Add medicines with name, dosage, and scheduled time
* View all medicine reminders in a clean, structured list
* Delete medicines once they are no longer required
* Cloud-backed persistence using a no-code backend
* Responsive UI for different screen sizes

---

## 🔄 Development Process

1. **Requirement breakdown** — identified core user actions (add, view, delete)
2. **UI-first design** — focused on simplicity and minimal interactions
3. **API integration** — connected frontend to NocoDB using REST APIs
4. **State management** — handled medicine data lifecycle cleanly in React
5. **Iteration & cleanup** — refined UI, removed unnecessary logic

Bolt AI was used as an **accelerator**, not a replacement — speeding up boilerplate generation while architectural decisions, logic flow, and integration were handled deliberately.

---

## 🧠 What I Learned

* Structuring a frontend application with clear data flow
* Integrating third-party APIs cleanly and safely
* Handling async operations and state updates in React
* Designing usable UIs without overengineering
* Using AI tools effectively to **increase output without losing control**

---

## 📈 Overall Growth

This project strengthened my ability to:

* Think in terms of **systems instead of pages**
* Translate a simple idea into a working product
* Balance speed and correctness
* Treat AI as a **productivity multiplier**, not a dependency

---

## 🔧 How This Project Can Be Improved

* Add authentication and user-specific reminders
* Implement notifications (email / push reminders)
* Improve data validation and error handling
* Introduce better scheduling logic (recurring reminders)
* Migrate to a custom backend for finer control

---

## ▶️ How to Run the Project Locally

### 1. Clone the repository

```bash
git clone https://github.com/your-username/pillpal.git
cd pillpal
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure Backend API

Update the following values in `App.tsx`:

```ts
const apiUrl = "https://app.nocodb.com/api/v2/tables/xxxx/records";
const apiKey = "your-nocodb-api-key";
```

### 4. Start the development server

```bash
npm run dev
```

---

## 🎥 Project Demo
<img width="1919" height="964" alt="image" src="https://github.com/user-attachments/assets/b1c9f780-0c00-4d14-89b8-5e74fb47abb3" />


