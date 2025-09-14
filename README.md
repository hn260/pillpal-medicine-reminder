💊 PillPal — Medicine Reminder Web App

PillPal is a lightweight web app that helps you schedule and track your medicines with ease. Built with React + TypeScript and powered by a free NocoDB backend, it lets you add, view, and delete medicine reminders anytime.

🚀 Features

Add medicines with name, dose, and time

View a clean schedule of all medicines

Delete medicines once no longer needed

Backend powered by NocoDB (free & no-code database)

Simple, responsive UI built with React + CSS

🛠️ Tech Stack

Frontend: React (TypeScript)

Backend: NocoDB API

Hosting: Vercel (Frontend) / NocoDB Cloud (Backend)

📂 Project Structure
PillPal/
 ├── src/
 │   ├── App.tsx      # Main React component
 │   ├── App.css      # Styles
 │   └── index.tsx    # Entry point
 ├── package.json
 └── README.md

⚡ Setup & Run Locally

Clone the repo:

git clone https://github.com/your-username/pillpal.git
cd pillpal


Install dependencies:

npm install


Add your NocoDB API URL and API Key in App.tsx:

const apiUrl = "https://app.nocodb.com/api/v2/tables/xxxx/records";
const apiKey = "your-nocodb-api-key";


Start the dev server:

npm run dev

🌍 Deployment

Frontend → Deploy on Vercel
 (Free)

Backend → Hosted automatically on NocoDB Cloud

📸 Preview

<img width="1919" height="964" alt="image" src="https://github.com/user-attachments/assets/bc75bf23-14be-48ca-b001-cd654b25b998" />


👩‍💻 Author

Made with ❤️ for medicine reminders.
