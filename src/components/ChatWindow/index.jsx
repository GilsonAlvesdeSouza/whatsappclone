import "./style.css";
import SearchIcon from "@material-ui/icons/Search";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import MoreVertIcon from "@material-ui/icons/MoreVert";

function ChatWindow() {
  return (
    <div className="ChatWindow">
      <div className="chatWindow--header">
        <div className="chatWindow--headerInfo">
          <img
            src="https://www.w3schools.com/howto/img_avatar.png"
            alt=""
            className="chatWindow--avatar"
          />
          <div className="chatWindow--name">Gilson Alves</div>
        </div>
        <div className="chatWindow--headerButtons">
          <div className="chatWindow--btn">
            <SearchIcon style={{ color: "#919191" }} />
          </div>
          <div className="chatWindow--btn">
            <AttachFileIcon style={{ color: "#919191" }} />
          </div>
          <div className="chatWindow--btn">
            <MoreVertIcon style={{ color: "#919191" }} />
          </div>
        </div>
      </div>
      <div className="chatWindow--body"></div>
      <div className="chatWindow--footer"></div>
    </div>
  );
}

export default ChatWindow;
