const { Menu } = require("electron");
const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
//const {app, BrowserWindow} = require('electron')
const path = require("path");
const url = require("url");

const Store = require("electron-store");

let win;
const store = new Store({
  // We'll call our data file 'user-accounts'
  configName: "user-accounts",
  defaults: {
    // 800x600 is the default size of our window
    windowBounds: { width: 800, height: 600 },
  },
});
function createWindow() {
  win = new BrowserWindow({
    width: 800,
    height: 600,
    icon: path.join(__dirname, "../Logos/icon.ico"),
  });

  win.loadURL(
    url.format({
      pathname: path.join(__dirname, "../../login_page/login_page.html"),
      protocol: "file:",
      slashes: true,
    })
  );

  win.webContents.openDevTools();
  win.on("closed", () => {
    win = null;
  });
}

app.on("ready", function () {
  createWindow();
  const template = [];
  const menu = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(menu);
  store.set("test", "qa");
  setInterval(function () {
    console.log(store.store);
  }, 5000);
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (win === null) {
    createWindow();
  }
});
