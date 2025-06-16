# 🤖 AI Virtual Assistant (JARVIS Clone) – MERN Stack Project

Build your own **JARVIS-style AI Virtual Assistant** using the **MERN Stack** (MongoDB, Express, React, Node.js) with real-time voice interaction, **Gemini AI** integration, authentication, and image customization — all deployed **for FREE** on Render.

---

## 🚀 What It Can Do

- 🎙️ Talk like a real assistant using the **Web Speech API** (voice input/output)
- 🧠 Think smart with **Gemini AI** responses
- 🔐 Authenticate users with **JWT + bcryptjs**
- 🖼️ Customize appearance with image upload (**Multer + Cloudinary**)
- 💬 Personalize everything — name, branding, assistant voice
- 📱 Fully responsive and mobile-ready
- 🌐 Deployed on Render for free!

---

## 🛠️ Tech Stack

| Frontend     | Backend          | AI & APIs       | Utilities         |
|--------------|------------------|------------------|--------------------|
| React        | Node.js + Express| Gemini AI        | Multer             |
| CSS / JS     | MongoDB          | Web Speech API   | Cloudinary         |
|              | JWT + bcryptjs   |                  | Render (Deployment)|

---

## ✨ Key Features

- ✅ **Voice Assistant**: Uses browser’s Web Speech API to listen and speak like JARVIS  
- ✅ **AI Intelligence**: Sends prompts to Gemini and speaks intelligent replies  
- ✅ **Authentication**: Signup/login with hashed passwords and JWT tokens  
- ✅ **Custom Upload**: Change assistant’s photo via image upload  
- ✅ **Personalization**: Customize assistant name, branding, and more  
- ✅ **Free Deployment**: Easily host backend on Render, frontend on Vercel/Netlify  

---

## 📂 Folder Structure
    ```bash
          │ └── src/
          ├── client/ # React frontend
          │ └── components/
          │ └── pages/
          ├── server/ # Express backend
          │ └── controllers/
          │ └── models/
          │ └── routes/
          │ └── middleware/
          ├── .env.example # Template for environment variables
          ├── README.md

---

## 📦 Installation Guide

### 1. Clone the Repository
     git clone https://github.com/yourusername/ai-virtual-assistant.git
      cd ai-virtual-assistant


###  2. Setup Environment Variables
Create a .env file in the server folder based on .env.example.

        PORT=8000
        MONGODB_URL=your_mongodb_url
        JWT_SECRET=your_jwt_secret
        CLOUDINARY_CLOUD_NAME=your_cloud_name
        CLOUDINARY_API_KEY=your_api_key
        CLOUDINARY_API_SECRET=your_api_secret
        GEMINI_API_URL=https://generativelanguage.googleapis.com/v1beta/models/...

### 3. Install Dependencies
          # Backend
          cd server
          npm install

          # Frontend
          cd ../client
          npm install

###  4. Run the Project Locally
          # In /server
          npm run dev

         # In /client
         npm start


---
🔐 Authentication Flow
Passwords are hashed using bcryptjs
JWT tokens manage session securely
Auth-protected routes using middleware

---

🧠 Gemini Integration
All user voice input is sent to Gemini AI for a smart reply.
The response is then spoken back using the browser’s Speech Synthesis API.

---

📸 Image Upload (Cloudinary)
Users can upload a custom avatar for their assistant.
Images are processed using Multer and stored securely in Cloudinary.

---

🧪 Live Demo
Coming soon...

---





