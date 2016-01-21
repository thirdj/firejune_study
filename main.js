'use strict'

const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

app.on('ready', () => {
  const mainWindow = new BrowserWindow({width: 800, height: 600});

  mainWindow.loadUrl('file://'+__dirname+'/index.html');

  mainWindow.on('closed', function(){
    mainWindow = null;
  });
});

/**
 * es6 에서는 var 를 사용하지 않음.
 * let/ scope block limit
 * const/ 기본.
 *
 *
 */
