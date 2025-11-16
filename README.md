**📊 Real-Time Reputation Tracker**

A full-stack MERN-based application that tracks brand mentions across multiple platforms (Reddit, Twitter/X, News Sites, Blogs) in real time with live updates using Socket.io.
The system also includes an Admin Login (Admin / Admin@123) and a clean React Dashboard UI.<br>

**🚀 Features**
🔍 Brand Monitoring
Fetches mentions from multiple platforms<br>

✔️ Reddit<br>
✔️ News Articles<br>
✔️ Blogs<br>
✔️ (extendable for Twitter, YouTube, Instagram, etc.)<br>

**📡 Real-Time Updates**<br>
Socket.io pushes new mentions to dashboard instantly<br>
No need to refresh the page<br>

**🧠 Sentiment Analysis**<br>
Classifies each mention as:<br>
👍 Positive<br>
👎 Negative<br>
😐 Neutral<br>
🔐 Admin Login<br>

**Login Credentials:**
Username: Admin<br>
Password: Admin@123<br>

After login → Redirects to Home.js.<br>

**📈 Dashboard**

Display all mentions in organized cards<br>
Platform icon<br>
Sentiment color badge<br>
Timestamp<br>


⚙️ **Installation Guide**
🔧 1. Clone the Repository and follow the steps<br>

**🖥 Backend Setup**
cd backend<br>
npm install<br>
npm start<br>

**Backend runs at:**
👉 http://localhost:5000<br>

**💻 Frontend Setup**
cd frontend<br>
npm install<br>
npm start<br>

**Frontend runs at:**
👉 http://localhost:3000<br>

**🔌 Environment Variables**

Create a .env file in backend/<br>
PORT=5000<br>

(Add API keys for Twitter/Youtube later if needed)<br>

**🛠️ Technologies Used**
*Frontend*<br>

React.js<br>
React Router<br>
CSS3<br>
Socket.io-client<br>

*Backend*<br>

Node.js<br>
Express.js<br>
Cheerio (web scraping)<br>
Axios<br>
Socket.io<br>
Node-cron<br>

**📌 Future Enhancements**

1.Twitter/X API integration<br>
2.YouTube comment analysis<br>
3.Instagram scraping<br>
4.Email alerts for negative spikes<br>
5.NLP-based topic classification<br>
