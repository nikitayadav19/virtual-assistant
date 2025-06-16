🤖 AI Virtual Assistant (JARVIS Clone) – MERN Stack Project
Build your own JARVIS-style AI Virtual Assistant using the MERN Stack (MongoDB, Express, React, Node.js) with real-time voice interaction, Gemini AI integration, authentication, and image customization — all deployed for FREE on Render.

🚀 What It Can Do
🎙️ Talk like a real assistant using the Web Speech API (voice input/output)

🧠 Think smart with Gemini AI responses

🔐 Authenticate users with JWT + bcryptjs

🖼️ Customize appearance with image upload (Multer + Cloudinary)

💬 Personalize everything — name, branding, assistant voice

📱 Fully responsive and mobile-ready

🌐 Deployed on Render for free!

🛠️ Tech Stack
Frontend	Backend	AI & APIs	Utilities
React	Node.js + Express	Gemini AI	Multer
CSS/JS	MongoDB	Web Speech API	Cloudinary
JWT + bcryptjs		Render (deployment)

✨ Key Features
✅ Voice Assistant: Uses browser’s Web Speech API to listen and speak like JARVIS

✅ AI Intelligence: Sends prompts to Gemini and speaks intelligent replies

✅ Authentication: Signup/login flow with hashed passwords and JWT tokens

✅ Custom Upload: Change assistant’s photo via image upload

✅ Personalization: Customize assistant name, branding, and more

✅ Free Deployment: Easily host backend on Render and frontend on Vercel or Netlify

📂 Folder Structure
.
├── client/              # React frontend
│   └── src/
│       └── components/
│       └── pages/
├── server/              # Express backend
│   └── controllers/
│   └── models/
│   └── routes/
│   └── middleware/
├── .env.example         # Template for environment variables
├── README.md




📦 Installation Guide
1. Clone the Repository
bash
git clone https://github.com/yourusername/ai-virtual-assistant.git
cd ai-virtual-assistant

2. Setup Environment Variables
Create a .env file in the server folder based on .env.example.

env

PORT=8000
MONGODB_URL=your_mongodb_url
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
GEMINI_API_URL=https://generativelanguage.googleapis.com/v1beta/models/...





3. Install Dependencies
# Backend
cd server
npm install

# Frontend
cd ../client
npm install
4. Run the Project Locally
# In /server
npm run dev

# In /client
npm start



🔐 Authentication Flow
Passwords are hashed using bcryptjs
JWT tokens manage session state securely
Protected routes via auth middleware

🧠 Gemini Integration
All user voice input is sent as a prompt to Gemini AI. The AI response is then spoken back using the browser's speech synthesis feature.

📸 Image Upload (Cloudinary)
Upload assistant images securely using Multer in the backend
Images are stored in Cloudinary and linked to user profiles

🧪 Live Demo
Coming soon (or replace with your Render/Netlify links)

🤝 Contributing
Pull requests are welcome! For major changes, please open an issue first to discuss what you'd like to change.

