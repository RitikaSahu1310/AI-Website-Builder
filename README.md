# AI-Website-Builder
🚀 AI Website Builder — MERN Stack AI Website Generator
A full-stack AI-powered website builder built using the MERN stack. This project allows users to generate modern, responsive, and professional websites by simply entering a text prompt. The application uses AI to convert user requirements into complete website code, including HTML, CSS, and JavaScript. Users can create an account, generate websites, preview them, edit the generated code, manage projects from the dashboard, and deploy websites with unique live URLs.

✨ Features
🤖 AI-based website generation from user prompts
🔐 User authentication with protected routes
📊 Dashboard to manage generated websites
📝 Prompt-based website creation system
👀 Live preview of generated websites
🛠 Website editing functionality
🚀 Deploy generated websites with unique URLs
💳 Credit-based pricing and payment system
📱 Fully responsive user interface
🎨 Modern and clean UI design
⚡ Fast frontend experience using React
🧠 AI integration using OpenRouter API
🗃 Website data stored in MongoDB
🌍 Full-stack deployment support
🛠 Tech Stack
Frontend
⚛️ React.js
🧭 React Router DOM
🗂 Redux Toolkit
🎨 Tailwind CSS
📡 Axios
✨ Framer Motion / Motion
🎯 Lucide React Icons
Backend
🟢 Node.js
🚀 Express.js
🍃 MongoDB
🧩 Mongoose
🔐 JWT Authentication
🤖 OpenRouter API
💳 Stripe Payment Gateway
Deployment
🌍 Render
📁 GitHub
🧠 How It Works
The user first signs up or logs in to the application. After authentication, the user enters a prompt describing the type of website they want to create, such as a portfolio website, business landing page, shopping website, or restaurant website. The prompt is sent from the frontend to the backend, where the server communicates with the OpenRouter AI API. The AI generates complete website code based on the user’s requirement. The generated website is then saved in MongoDB and displayed to the user for preview, editing, and deployment.

⚙️ Main Functionalities
🤖 AI Website Generation
Users can enter a simple prompt, and the system generates a complete responsive website automatically. The AI creates structured HTML, CSS, and JavaScript code according to the user’s requirement.

🔐 Authentication System
The project includes login and signup functionality. Protected routes ensure that only authenticated users can access the dashboard, website generator, editor, and deployment features.

📊 Dashboard
The dashboard displays all websites created by the logged-in user. Users can manage, preview, edit, and deploy their generated websites from one place.

🛠 Website Editor
The editor allows users to view and modify the generated website code. This helps users customize the AI-generated result according to their needs.

🚀 Website Deployment
Each generated website can be deployed with a unique live URL, making it easy to share and access the created website online.

💳 Credits and Payment System
The application includes a credit-based system where users need credits to generate websites. Stripe payment integration is used for handling pricing plans and payments.

📁 Project Structure
AI-Website-Builder/
│
├── client/
│   ├── src/
│   │   ├── pages/
│   │   ├── components/
│   │   ├── redux/
│   │   ├── hooks/
│   │   └── App.jsx
│   └── package.json
│
├── server/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middlewares/
│   ├── config/
│   └── index.js
│
└── README.md
🎯 Project Goal
The main goal of this project is to make website creation faster, easier, and more accessible using Artificial Intelligence. Instead of writing code manually from scratch, users can describe their idea in simple words and instantly get a ready-to-use website. This project also demonstrates practical full-stack development skills, AI API integration, authentication, database management, payment gateway integration, and deployment.

🚀 Future Improvements
🧲 Add drag-and-drop website editing
📦 Add download website as ZIP feature
🌐 Add custom domain support
🎨 Add more website templates
📄 Add multi-page website generation
🧠 Improve AI prompt customization
📊 Add analytics for deployed websites
