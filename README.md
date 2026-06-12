# AI Website Builder

AI Website Builder is a full-stack web application that enables users to generate website content and layouts using Artificial Intelligence. The platform simplifies website creation by allowing users to provide requirements in natural language and receive AI-generated website structures, content, and design suggestions.

## 🚀 Features

* AI-powered website generation
* User-friendly and responsive interface
* Dynamic content generation
* Modern UI/UX design
* Real-time interaction with AI
* Secure backend integration
* Fast and scalable architecture

## 🛠️ Tech Stack

### Frontend

* React.js
* JavaScript (ES6+)
* HTML5
* CSS3
* Tailwind CSS (if used)

### Backend

* Node.js
* Express.js

### Database

* MongoDB

### AI Integration

* Gemini API / OpenAI API (update according to your project)

### Other Tools

* Git & GitHub
* VS Code
* Axios

## 📂 Project Structure

```bash
AI-Website-Builder/
│
├── client/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── server/
│   ├── controllers/
│   ├── routes/
│   ├── models/
│   └── package.json
│
└── README.md
```

## ⚙️ Installation

### Clone the Repository

```bash
git clone https://github.com/RitikaSahu1310/AI-Website-Builder.git
```

### Navigate to Project

```bash
cd AI-Website-Builder
```

### Install Frontend Dependencies

```bash
cd client
npm install
```

### Install Backend Dependencies

```bash
cd ../server
npm install
```

### Configure Environment Variables

Create a `.env` file inside the server folder and add:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
API_KEY=your_ai_api_key
```

### Run Backend

```bash
npm start
```

### Run Frontend

```bash
npm run dev
```

## 🎯 How It Works

1. User enters website requirements.
2. Request is sent to the backend API.
3. AI model processes the prompt.
4. Generated content and website structure are returned.
5. User can review and customize the generated result.

## 🔮 Future Enhancements

* Drag-and-drop website editor
* Multiple design templates
* Website deployment support
* Authentication and user profiles
* Export generated websites as code
* SEO optimization suggestions

## 👩‍💻 Author

**Ritika Sahu**

GitHub: https://github.com/RitikaSahu1310

## 📜 License

This project is developed for learning and portfolio purposes.

