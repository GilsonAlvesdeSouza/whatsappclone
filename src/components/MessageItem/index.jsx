import React from "react";
import "./style.css";

function MessageItem({ data }) {
  return (
    <div className="messageLine">
      <div className="messageItem">
        <div className="messageText">Gosto muito de estudar progamação principalmente react, conheço algumas técnicas muito legais para efeitos vísuais</div>
        <div className="messageDate">19:00</div>
      </div>
    </div>
  );
}

export default MessageItem;
