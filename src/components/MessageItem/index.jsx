import React from "react";
import "./style.css";

function MessageItem({ data }) {
  return (
    <div className="messageLine">
      <div className="messageItem">
        <div className="messageText">Mensagem</div>
        <div className="messageDate">19:00</div>
      </div>
    </div>
  );
}

export default MessageItem;
