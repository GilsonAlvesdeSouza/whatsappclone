import "./style.css";

function ChatListItem({ onClick }) {
  return (
    <div className="chatlistitem" onClick={onClick}>
      <img src="https://www.w3schools.com/howto/img_avatar2.png" alt="avatar" />
      <div className="chatlistitem-lines">
        <div className="chatlistitem-line">
          <div className="chatlistitem-name">Gilson Alves</div>
          <div className="chatlistitem-date">19:00</div>
        </div>
        <div className="chatlistitem-line">
          <div className="chatlistitem-lastmsg">
            <p>
              O Gerador de Texto Lorem Ipsum pode ser utilizado para você que
              está desenvolvendo seu projeto e precisa de texto aleatório para
              preencher os{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatListItem;
