import React from "react";
import "./style.css";

function MessageItem({ data, user }) {
  console.log(data.author, user);
  return (
    <div
      className="messageLine"
      style={{
        justifyContent: user === data.author ? "flex-end" : "flex-start",
      }}
    >
      <div
        className="messageItem"
        style={{
          backgroundColor: user === data.author ? "#d9fdd3" : "",
        }}
      >
        <div className="messageText">{data.body}</div>
        <div className="messageDate">19:00</div>
      </div>
    </div>
  );
}

export default MessageItem;
