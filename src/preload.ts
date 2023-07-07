import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld("electronAPI", {
  listModels: (): string[] => ipcRenderer.sendSync("list-models"),
});
