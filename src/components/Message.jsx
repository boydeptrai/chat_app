import React, { useContext, useEffect } from "react";
import { useRef } from "react";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";

const Message = ({ message }) => {
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  const ref = useRef()

  useEffect(() => {
    ref.current?.scrollIntoview({behavior: "smooth"})
  },[message])
  return (
    <div
    ref={ref}
      className={`message ${message.senderId === currentUser.uid && "owner"}`}
    >
      <div className="message-info">
        <img
          src={
            message.senderId === currentUser.uid
              ? currentUser.photoURL
              : data.user.photoURL
          }
          alt=""
        />
        <span>Just now</span>
      </div>
      <div className="message-content">
        <p>{message.text}</p>
        <img
          src={message.img}
          alt=""
        />
        {message.img && 
        <img
          src={message.img}
          alt=""
        />
        }
      </div>
    </div>
  );
};

export default Message;
