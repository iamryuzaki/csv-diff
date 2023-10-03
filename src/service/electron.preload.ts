import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld("app", {
    //getProgress: (): IProgressIpc => ipcRenderer.invoke("getProgress") as any,
});
