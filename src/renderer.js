// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
if (process.platform === 'win32') {
        document.getElementsByClassName('inside')[0].setAttribute("class", "inside win32color"); 
        console.log('process is running on win32');
        require('electron-titlebar');
} else if (process.platform === 'darwin') {
        console.log('process is running on darwin')
} else {
        console.log('process is running on unsupported os!')
}

if (process.platform === 'darwin') {
        const osxPrefs = require('electron-osx-appearance');
        if (osxPrefs.isDarkMode() === true) {
        document.getElementsByTagName('*')[0].setAttribute("class", "whitetext"); 
        } 
      } else {
        document.getElementsByTagName('*')[0].setAttribute("class", "blacktext"); 
      }