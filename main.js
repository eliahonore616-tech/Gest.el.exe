const { app, BrowserWindow, Menu } = require('electron');
const path = require('path');

// Évite les fenêtres blanches / plantages sur les anciens PC
app.disableHardwareAcceleration();

function create() {
  Menu.setApplicationMenu(null);
  const w = new BrowserWindow({
    width: 1200,
    height: 820,
    minWidth: 420,
    backgroundColor: '#e6f5ed',
    title: 'Gestion des Minervals',
    icon: path.join(__dirname, '..', 'build', 'icon.png'),
    webPreferences: { contextIsolation: true }
  });
  w.loadFile(path.join(__dirname, '..', 'www', 'index.html'));
}

app.whenReady().then(create);
app.on('window-all-closed', () => app.quit());
