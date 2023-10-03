import {app, BrowserWindow, ipcMain} from "electron";
import path from "path";
import {WindowConfig} from "../config/window.config";
import {AppConfig} from "../config/app.config";

export class ElectronService {
    public static mainWindow: BrowserWindow;

    public static async init() {
        await app.whenReady();
        this.initHandlers();
        this.createWindow();
    }

    private static initHandlers(): void {
        // ipcMain.handle("getProgress", (): IProgressIpc => {
        //     return getProgress();
        // });
    }

    private static createWindow() {
        this.mainWindow = new BrowserWindow({
            width: WindowConfig.WindowWidth,
            height: WindowConfig.WindowHeight,
            maxWidth: WindowConfig.WindowWidth,
            maxHeight: WindowConfig.WindowHeight,
            minWidth: WindowConfig.WindowWidth,
            minHeight: WindowConfig.WindowHeight,

            //frame: false,
            center: true,
            hasShadow: true,
            webPreferences: {
                preload: path.join(__dirname, "electron.preload.js"),
                devTools: AppConfig.HasDev,
            },
            // titleBarOverlay: true,
            // titleBarStyle: "hidden",
            maximizable: false,
            autoHideMenuBar: true
        });

        this.mainWindow.loadFile("www/index.html");

        if (AppConfig.HasDev == true) {
            this.mainWindow.webContents.openDevTools({
                mode: "detach",
            });
        }
    }
}
