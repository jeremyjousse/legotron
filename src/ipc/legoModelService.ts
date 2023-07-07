import { IpcMainEvent } from "electron";

export async function handleListModels(event: IpcMainEvent) {
  console.log("handleListModels");
  event.returnValue = ["1", "2"];
}
