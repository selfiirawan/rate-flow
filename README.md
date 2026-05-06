# Rate Flow 💱

**A real-time currency converter powered by live exchange rates.**
> Part of my **Capstone Project** for learning **Express.js, Axios, EJS templating, and Node.js** on Udemy.
> The goal: integrate a public API into a full-stack web app with a clean, modern UI.

[![Node.js](https://img.shields.io/badge/Node.js-18-green)](https://nodejs.org/) [![Express](https://img.shields.io/badge/Express.js-4-blue)](https://expressjs.com/) [![Bootstrap](https://img.shields.io/badge/Bootstrap-5-purple)](https://getbootstrap.com/)

---

## 🌟 Features

- Convert between 160+ world currencies
- Searchable dropdown with currency codes
- Swap/reverse currencies with one click
- Live exchange rate display (e.g. 1 USD = 4.47 MYR)
- Persistent currency selection after conversion
- Animated canvas background with floating currency symbols
- Last updated timestamp from API

---

## 📸 Screenshots

<!-- Add your screenshots here -->

---

## ✨ Live Demo

[https://rate-flow.up.railway.app/](https://rate-flow.up.railway.app/)

---

## 🚀 Tech Stack

- **Backend:** Node.js + Express.js
- **Frontend:** EJS + Bootstrap 5 + CSS
- **HTTP Client:** Axios
- **API:** [ExchangeRate API](https://www.exchangerate-api.com/)
- **Deployment:** Railway

---

## 💻 Local Setup

```bash
git clone https://github.com/selfiirawan/rate-flow.git
cd rate-flow
npm install
```

Create a `.env` file in the root folder:
```
API_KEY=your_api_key_here
```

Then run:
```bash
node index.js
```

---

## 🧠 What I Learned

- Integrate a **public REST API** using Axios
- Use **Promise.all()** to make parallel API calls
- Build a backend server using **Express.js**
- Use **EJS templating** to render dynamic pages
- Handle **form submissions with POST requests**
- Manage **environment variables** securely with dotenv
- Deploy a Node.js application using **Railway**

---

## 📜 License

This project is licensed under the **MIT License**.
