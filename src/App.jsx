import "./App.css";

import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';

function App() {
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
              <DonutLargeIcon style={{color: '#919191'}}/>
            </div>
            <div className="header-btn">
              <ChatIcon style={{color: '#919191'}}/>
            </div>
            <div className="header-btn">
              <MoreVertIcon style={{color: '#919191'}}/>
            </div>
          </div>
        </header>
        <div className="search">busca</div>
        <div className="chatlist">chate</div>
      </div>
      <div className="content-area">bbbbbbb</div>
    </div>
  );
}

export default App;
