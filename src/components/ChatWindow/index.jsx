import { useState } from "react";
import "./style.css";
import EmojiPicker from "emoji-picker-react";
import SearchIcon from "@material-ui/icons/Search";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import SendIcon from "@material-ui/icons/Send";
import MicIcon from "@material-ui/icons/Mic";
import { MessageItem } from "../index";

function ChatWindow() {
  let recognition = null;
  let SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

  if (SpeechRecognition !== undefined) {
    recognition = new SpeechRecognition();
  }

  const [emojiOpen, setEmojiOpen] = useState(false);
  const [msg, setMsg] = useState("");
  const [listening, setListening] = useState(false);
  const [list, setList] = useState([{}, {}, {}]);

  const handleEmojiClick = (e, emojiObject) => {
    setMsg(msg + emojiObject.emoji);
  };

  const handleClickEmoji = () => {
    setEmojiOpen(!emojiOpen);
  };

  const handleMsg = (e) => {
    setMsg(e.target.value);
  };

  const handleSendClick = () => {
    setEmojiOpen(false);
    setMsg("");
  };

  const handleMicClick = () => {
    if (recognition !== null) {
      recognition.onstart = () => {
        setListening(true);
      };
      recognition.onend = () => {
        setListening(false);
      };
      recognition.onresult = (e) => {
        setMsg(e.results[0][0].transcript);
      };

      recognition.start();
    }
  };

  const handleListMsg = () => {
    return list.map((item, key) => (
      <MessageItem key={`list${key}`} data={item} />
    ));
  };

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
      <div className="chatWindow--body">{handleListMsg()}</div>
      <div
        className="chatWindow--emojiArea"
        style={{ height: emojiOpen ? "200px" : "0px" }}
      >
        <EmojiPicker
          onEmojiClick={handleEmojiClick}
          disableSearchBar
          disableSkinTonePicker
          activeSkinTone
        />
      </div>
      <div className="chatWindow--footer">
        <div className="chatWindow--pre">
          <div className="chatWindow--btn" onClick={handleClickEmoji}>
            <InsertEmoticonIcon
              style={{ color: emojiOpen ? "009688" : "#919191" }}
            />
          </div>
        </div>
        <div className="chatWindow--inputArea">
          <input
            className="chatWindow--input"
            type="text"
            placeholder="Digite uma mensagem"
            onChange={handleMsg}
            value={msg}
          />
        </div>
        <div className="chatWindow--pos">
          {msg === "" && (
            <div className="chatWindow--btn" onClick={handleMicClick}>
              <MicIcon style={{ color: listening ? "#123ece" : "#919191" }} />
            </div>
          )}

          {msg !== "" && (
            <div className="chatWindow--btn" onClick={handleSendClick}>
              <SendIcon style={{ color: listening ? "#126ece" : "#919191" }} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ChatWindow;
