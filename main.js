const {app, BrowserWindow} = require('electron')

let mainWindow

function creatWindow() {
    //criar uma nova janela de navegação
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences:{
            nodeIntegration: true
        }
    })

    //carregue o arquivo HTML do seu aplicativo
    mainWindow.loadFile('index.html')
    
}
//evento para quando o electron terminar de iniciar

app.whenReady().then(creatWindow)

//Encerre o aplicativo quando todas as janelas estiverem fechadas

app.on('window-all-closed', () =>{
    if (process.platform !== 'darwin'){
        app.quit()
    }
})