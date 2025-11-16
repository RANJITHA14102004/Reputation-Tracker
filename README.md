
📊 Real-Time Reputation Tracker

A full-stack MERN-based application that tracks brand mentions across multiple platforms (Reddit, Twitter/X, News Sites, Blogs) in real time with live updates using Socket.io.
The system also includes an Admin Login (Admin / Admin@123) and a clean React Dashboard UI.

🚀 Features
🔍 Brand Monitoring

Fetches mentions from multiple platforms

✔️ Reddit

✔️ News Articles

✔️ Blogs

✔️ (extendable for Twitter, YouTube, Instagram, etc.)

📡 Real-Time Updates

Socket.io pushes new mentions to dashboard instantly

No need to refresh the page

🧠 Sentiment Analysis

Classifies each mention as:

👍 Positive

👎 Negative

😐 Neutral

🔐 Admin Login

Login Credentials:

Username: Admin
Password: Admin@123


After login → Redirects to Home.js.

📈 Dashboard

Display all mentions in organized cards

Platform icon

Sentiment color badge

Timestamp

Source link

🗂️ Project Structure
reputation-tracker/
│
├── backend/
│   ├── index.js
│   ├── sentiment/
│   │   └── analyze.js
│   └── package.json
│
└── frontend/
    ├── package.json
    └── src/
        ├── index.js
        ├── App.js
        ├── Login.js
        ├── Home.js
        ├── Dashboard.js
        ├── components/
        │   └── MentionCard.js
        └── styles/
            └── login.css

⚙️ Installation Guide
🔧 1. Clone the Repository
git clone https://github.com/YOUR-USERNAME/Reputation-Tracker.git
cd Reputation-Tracker

🖥 Backend Setup
cd backend
npm install
npm start


Backend runs at:
👉 http://localhost:5000

💻 Frontend Setup
cd frontend
npm install
npm start


Frontend runs at:
👉 http://localhost:3000

🔌 Environment Variables

Create a .env file in backend/

PORT=5000


(Add API keys for Twitter/Youtube later if needed)

🛠️ Technologies Used
Frontend

React.js

React Router

CSS3

Socket.io-client

Backend

Node.js

Express.js

Cheerio (web scraping)

Axios

Socket.io

Node-cron

Sentiment Analysis

📷 Screenshots (Add your images here)
🔐 Login Page

🏠 Dashboard

📌 Future Enhancements

Twitter/X API integration

YouTube comment analysis

Instagram scraping

Email alerts for negative spikes

NLP-based topic classification
