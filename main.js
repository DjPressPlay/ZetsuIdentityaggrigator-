const { app, BrowserWindow } = require("electron");
const path = require("path");

function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    icon: path.join(__dirname, "Picsart_23-04-07_11-30-07-242.png"), // 👈 drop your custom icon file here
    webPreferences: {
      nodeIntegration: true,   // lets your index.html scripts run
      contextIsolation: false, // disable isolation (easy dev mode)
      webviewTag: true,        // enable <webview> tag
      sandbox: false           // allow scripts without extra lockdown
    }
  });

  win.loadFile("index.html");

  // Optional: open devtools automatically for debugging
  // win.webContents.openDevTools();
}

// Run when app is ready
app.whenReady().then(createWindow);

// On macOS, re-open window when clicking dock icon
app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// Quit app when all windows closed (except macOS)
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
