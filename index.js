const express = require("express");
const axios = require("axios");
const app = express();
const PORT = process.env.PORT || 3000;

// URL of your Render server (replace with your actual URL)
const YOUR_RENDER_SERVER_URL = "https://n8n-2-ndqu.onrender.com";

// Function to ping a URL
async function pingServer(url) {
  try {
    const response = await axios.get(url);
    console.log(`✅ Pinged ${url} - Status: ${response.status}`);
  } catch (error) {
    console.error(`❌ Failed to ping ${url}: ${error.message}`);
  }
}

// Ping your server AND itself every 12 minutes (720,000 ms)
setInterval(() => {
  pingServer(YOUR_RENDER_SERVER_URL); // Ping your main server
  pingServer(`http://localhost:${PORT}`); // Ping itself (keeps this server alive)
}, 4 * 60 * 1000); // 12 minutes

// Basic route to respond to pings
app.get("/", (req, res) => {
  res.send("🚀 Keep-Alive Server is Running!");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  // Initial ping on startup
  pingServer(YOUR_RENDER_SERVER_URL);
  pingServer(`http://localhost:${PORT}`);
});
