import { useState } from "react";

import "./App.css";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchIcon from "@material-ui/icons/Search";

import * as C from "./components";

function App() {
  const [chatList, setChatList] = useState([
    {
      chatId: 1,
      title: "Gilson Alves",
      image: "https://www.w3schools.com/howto/img_avatar.png",
    },
    {
      chatId: 2,
      title: "Franciele",
      image: "https://www.w3schools.com/howto/img_avatar.png",
    },
    {
      chatId: 3,
      title: "Yago",
      image: "https://www.w3schools.com/howto/img_avatar.png",
    },
  ]);
  const [activeChat, setActiveChat] = useState({});
  const [user, setUser] = useState({
    id: 1234,
    avatar: "https://www.w3schools.com/howto/img_avatar.png",
    name: "Gilson Alves",
  });

  const handleChatList = () => {
    return chatList.map((item, key) => (
      <C.ChatListItem
        key={`chateList${key}}`}
        data={item}
        active={activeChat.chatId === chatList[key].chatId}
        onClick={() => setActiveChat(chatList[key])}
      />
    ));
  };

  const [showNewChat, setShowNewChat] = useState(false);

  const handleChatOpen = () => {
    setShowNewChat(true);
  };
  
  return (
    <div className="app-window">
      <div className="sidebar">
        <C.NewChat
          show={showNewChat}
          setShow={setShowNewChat}
          user={user}
          chatList={chatList}
        />
        <header>
          <img src={user.avatar} alt="imagem" className="header-avatar" />
          <div className="header-buttons">
            <div className="header-btn">
              <DonutLargeIcon style={{ color: "#919191" }} />
            </div>
            <div className="header-btn" onClick={handleChatOpen}>
              <ChatIcon style={{ color: "#919191" }} />
            </div>
            <div className="header-btn">
              <MoreVertIcon style={{ color: "#919191" }} />
            </div>
          </div>
        </header>
        <div className="search">
          <div className="search-input">
            <SearchIcon fontSize="small" style={{ color: "#919191" }} />
            <input
              type="search"
              placeholder="Procurar ou começar uma nova conversa"
            />
          </div>
        </div>
        <div className="chatlist">{handleChatList()}</div>
      </div>
      <div className="content-area">
        {activeChat.chatId !== undefined && <C.ChatWindow user={user} />}
        {activeChat.chatId === undefined && <C.ChatIntro />}
      </div>
    </div>
  );
}

export default App;
