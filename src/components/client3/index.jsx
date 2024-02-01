import React, { useState, useEffect } from "react";
import Jane from "./jane.json";

const Client3 = () => {
  //create ws connection
  const socket = new WebSocket("ws://localhost:5000");
  const [backendData, setBackendData] = useState([{}]);
    //open
  socket.addEventListener("open", function (event) {
    console.log("( Client 1 )Connection to ws server");
  });

    //message
  socket.addEventListener("message", function (event) {
    console.log("( Client 1 )Message from server", event.data);
  });
  
  
  useEffect(() => {
    //connection opened
    fetch("http://localhost:5000/api")
      .then((response) => response.json())
      .then((data) => {
        setBackendData(data);
      });
  }, []);

  function sendMessage() {
    socket.send("Hello~ From Client 1");
  }

  function sendJson() {
    socket.send(JSON.stringify(Jane));
  }

  return (
    <div>
      <button onClick={sendMessage}>send message from client 3</button>
      <br />
      <button onClick={sendJson}>send Json from client 3</button>
      <p>This is your backendData : {backendData}</p>
    </div>
  );
};

export default Client3;
