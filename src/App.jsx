import { useState } from "react";

import "./App.css";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchIcon from "@material-ui/icons/Search";

import * as C from "./components";

function App() {
  const [chateList, setChateList] = useState([
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
  ]);

  const handleChatList = () => {
    return chateList.map((item, key) => (
      <C.ChatListItem key={`chateList${key}}`} />
    ));
  };

  return (
    <div className="app-window">
      <div className="sidebar">
        <header>
          <img
            src="https://www.w3schools.com/howto/img_avatar.png"
            alt="imagem"
            className="header-avatar"
          />
          <div className="header-buttons">
            <div className="header-btn">
              <DonutLargeIcon style={{ color: "#919191" }} />
            </div>
            <div className="header-btn">
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
      <div className="content-area">bbbbbbb</div>
    </div>
  );
}

export default App;
