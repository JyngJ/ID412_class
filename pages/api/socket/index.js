import { Server } from "socket.io";

//id430
import mobileRotation1Setup from "./id430/mobile-rotation-1";

export default function handler(req, res) {
  if (res.socket.server.io) {
    console.log("socket already enabled");
    res.end();
    return;
  } else {
    console.log("socket enabled");
    const io = new Server(res.socket.server);
    res.socket.server.io = io;

    io.on("connection", (socket) => {
      //mobile rotation 1
      mobileRotation1Setup({ socket, io });
    });
  }

  res.end();
}