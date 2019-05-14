const { BrowserWindow } = require('electron');

module.exports = [
  {
    label: "Files",
    submenu: [
      {label: "New"},
      {label: "Save"},
      {label: "Save As"},
    ]
  },
  {
    label: "Project",
    submenu: [
      {
        label: "Quit",
        accelerator: "Esc",
        click: (wind) => {
          BrowserWindow.getAllWindows()[0].close()  // closes the first window (the main window)
        }
      }
    ]
  }
]
