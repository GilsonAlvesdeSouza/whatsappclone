import "./style.css";

function ChatListItem() {
  return (
    <div className="chatlistitem">
      <img
        src="https://www.w3schools.com/howto/img_avatar2.png"
        alt="avatar"
      />
      <div className="chatlistitem-lines">
        <div className="chatlistitem-line">
          <div className="chatlistitem-name">Gilson Alves</div>
          <div className="chatlistitem-date">19:00</div>
        </div>
        <div className="chatlistitem-line">
          <div className="chatlistitem-lastmsg">
            <p>Opa, tudo bem?</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatListItem;
