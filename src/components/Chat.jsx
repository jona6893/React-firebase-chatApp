import cam from "../images/cam.png"
import Add from "../images/add.png"
import more from "../images/more.png"
import Messages from "./chat/Messages"
import Input from "./chat/Input"
import { useContext } from "react"
import { ChatContext } from "../context/ChatContext"



function Chat() {

const {data} = useContext(ChatContext)

  return (
    <div className="chat">
      <div className="chatInfo">
        <span>{data.user?.displayName}</span>
        <div className="chatIcons">
          <img src={cam} alt="" />
          <img src={Add} alt="" />
          <img src={more} alt="" />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
}

export default Chat