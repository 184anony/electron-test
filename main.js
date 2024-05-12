const { app, BrowserWindow } = require("electron");
const path = require("node:path");

const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, "preload.js"),
        },
    });

    win.loadFile("index.html");
};

// 全ウィンドウを閉じた時にアプリを終了する（Windows & Linux）
app.on("window-all-closed", () => {
    if (process.platform !== "darwin") app.quit();
});

//ウィンドウが開かれていない場合に新規ウィンドウを開く(macOS)
app.whenReady().then(() => {
    createWindow();

    app.on("activate", () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });
});
