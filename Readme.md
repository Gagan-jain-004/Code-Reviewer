Perfect 🔥 — here’s a clean, professional **README.md** for your **AI Code Reviewer** project built with React (Vite) + Node.js + OpenAI/Gemini (or similar).
It includes setup steps, usage guide, folder structure, and example output — all in RTU / college submission–ready style 👇

---

```markdown
# 🤖 AI Code Reviewer

An intelligent web app that analyzes and reviews your code using AI.  
Paste or edit code in the live editor and get an instant review with explanations, improvement suggestions, and highlighted markdown output.

---

## 🧠 Features

- 📝 **Live Code Editor** using `react-simple-code-editor`  
- 💡 **Syntax Highlighting** powered by `Prism.js`  
- 🤖 **AI-based Code Review** via backend API (OpenAI / Gemini / Custom Model)  
- 🧾 **Beautiful Markdown Output** with syntax highlighting (`react-markdown` + `rehype-highlight`)  
- ⚡ Built with **React + Vite + Tailwind (optional)** for blazing-fast development  

---

## 🏗️ Tech Stack

| Frontend | Backend | AI Model |
|-----------|----------|-----------|
| React (Vite) | Express.js / Node.js | Gemini API |
| Prism.js | Axios |
| React Markdown | CORS | — |

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/Gagan-jain-004/Code-Reviewer
cd Code-Reviewer
````

### 2️⃣ Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file in `/backend` with:

```bash
PORT=3000
GOOGLE_GEMINI_KEY=your_api_key_here
```

Run backend:

```bash
npm start
```

> Your server should start on `http://localhost:3000`

---

### 3️⃣ Frontend Setup

```bash
cd ../frontend
npm install
```

Install syntax highlighting dependencies:

```bash
npm install rehype-highlight highlight.js prismjs react-simple-code-editor react-markdown axios
```

Run frontend:

```bash
npm run dev
```

> Open browser → `http://localhost:5173`

---

## 🧩 How It Works

1. You type or paste code in the left editor.
2. Click **“Review”**.
3. The frontend sends your code to the backend (`/ai/get-review`).
4. The backend requests AI analysis from Gemini/OpenAI.
5. The AI returns a detailed markdown review.
6. The markdown is rendered beautifully on the right panel.

---

## 🪪 License

This project is licensed under the **MIT License**.  
Feel free to use, modify, and distribute with attribution.


