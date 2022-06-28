import React, { useState } from "react";
import "./style.css";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

function NewChat({ show, setShow, chatList, user }) {
  const [list, setList] = useState([
    {
      id: 123,
      avatar: "https://www.w3schools.com/howto/img_avatar.png",
      name: "Gilson Alves",
    },
    {
      id: 1234,
      avatar: "https://www.w3schools.com/howto/img_avatar.png",
      name: "Franciele Araújo",
    },
    {
      id: 12345,
      avatar: "https://www.w3schools.com/howto/img_avatar.png",
      name: "Yago Alves",
    },
    {
      id: 123456,
      avatar: "https://www.w3schools.com/howto/img_avatar.png",
      name: "Wilson Alves",
    },
  ]);

  const handleList = () => {
    return list.map((item, key) => (
      <div className="newChat--item" key={`chatItem-${key}`}>
        <img
          className="newChat--itemAvatar"
          src={item.avatar}
          alt={item.name}
        />
        <div className="newChat--itemName">{item.name}</div>
      </div>
    ));
  };

  const handleChatClose = () => {
    setShow(false);
  };

  return (
    <div className="newChat" style={{ left: show ? 0 : -415 }}>
      <div className="newChat--head">
        <div className="newChat--backbutton" onClick={handleChatClose}>
          <ArrowBackIcon style={{ color: "#fff" }} />
        </div>
        <div className="newChat--headTitle">Nova Conversa</div>
      </div>
      <div className="newChat--list">{handleList()}</div>
    </div>
  );
}

export default NewChat;
