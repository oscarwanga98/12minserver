# **Keep-Alive Server for Render**

A **simple Node.js server** designed to keep your **Render.com free-tier** applications alive by sending periodic HTTP pings. Prevents automatic shutdown due to inactivity (15-minute timeout on Render's free tier).

---

## **📌 Features**

✅ **Pings your Render server** every 12 minutes (prevents shutdown).  
✅ **Self-pings** to keep itself alive (if also hosted on Render).  
✅ **Lightweight** (uses Express + Axios).  
✅ **Easy to deploy** (works on Render, Railway, or any Node.js host).

---

## **⚙️ Setup & Installation**

### **Prerequisites**

- Node.js (v14+)
- A **Render-hosted app** you want to keep alive.
- (Optional) A **GitHub account** (for deployment).

### **1. Clone the Repository**

```sh
git clone https://github.com/your-username/render-keep-alive.git
cd render-keep-alive
```

### **2. Install Dependencies**

```sh
npm install express axios
```

### **3. Configure the Server**

Edit `server.js` and replace:

```js
const YOUR_RENDER_SERVER_URL = "https://your-render-app.onrender.com"; // 👈 Replace with your Render URL
```

### **4. Run Locally (Testing)**

```sh
node server.js
```

- Verify it works: Open `http://localhost:3000` in your browser.
- Check logs to confirm pings are successful.

---

## **🚀 Deployment on Render**

### **Method 1: Manual Deployment**

1. Go to [Render Dashboard](https://dashboard.render.com/) → **New Web Service**.
2. Connect your **GitHub repository** (or upload manually).
3. Configure settings:
   - **Runtime**: Node.js
   - **Build Command**: `npm install`
   - **Start Command**: `node server.js`
4. Set **Environment Variables** (if needed).
5. Deploy!

### **Method 2: One-Click Deploy (Recommended)**

[![Deploy to Render](https://render.com/images/deploy-to-render-button.svg)](https://render.com/deploy) _(Replace with your Render button link if needed.)_

---

## **📝 How It Works**

- The server runs an **Express.js** app on port `3000`.
- A **`setInterval`** function triggers every **12 minutes** to:
  1. Ping your **main Render server** (`YOUR_RENDER_SERVER_URL`).
  2. Ping **itself** (`http://localhost:PORT`) to stay alive.
- Logs success/errors in the console.

---

## **🛠️ Customization**

- **Change Ping Interval**: Modify the `setInterval` delay (in milliseconds).
- **Add More URLs**: Extend the `pingServer()` function to ping multiple endpoints.
- **Add Authentication**: If your server requires API keys, modify the `axios.get()` call.

---

## **❓ FAQ**

### **Q: Why 12 minutes?**

A: Render’s free tier shuts down after **15 minutes of inactivity**. Pinging every 12 minutes ensures it never goes idle.

### **Q: Can I use this for other hosting services?**

A: **Yes!** Works with Railway, Heroku, or any service that shuts down due to inactivity.

### **Q: What if my server goes down?**

A: The logs will show errors. For better monitoring, use **UptimeRobot** or **StatusCake**.

---

## **📜 License**

MIT License - Free for personal and commercial use.

---

## **🙌 Credits**

- Built with **Node.js, Express, Axios**.
- Inspired by **Render’s free-tier limitations**.

---

**🎉 Happy Coding!**  
Deploy this and never worry about your Render app sleeping again! 🚀
