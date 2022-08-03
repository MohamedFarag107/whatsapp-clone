import clsx from "clsx";
import React, { useEffect, useRef } from 'react'

import Avatar from "./UI/Avatar";

const Chat = ({messages,params}) => {
  const messagesEndRef = useRef(null);
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }
  useEffect(() => {
    scrollToBottom()
  }, [messages]);
  const renderMessages = (id) => {
    let prevId = null;
    return messages.map((message, index, messages) => {
      if (index >= 1 && index < messages.length) {
        prevId = messages[index - 1].user.id;
      }
      return (
        <li
          key={index}
          className={clsx(
            "items-center gap-4",
            message.user.id === id ? "flex flex-row-reverse" : "flex",
            message.user.id === prevId ? "mt-none" : ""
          )}
        >
          <div
            data-title={message.user.name.split(" ")[0]}
            className={clsx(
              "text-center w-16 tooltip fade",
              message.user.id === prevId ? "opacity-0 h-16" : ""
            )}
          >
            <Avatar img={message.user.avatar} name={message.user.name} />
            <p className="bg-alt-dark dark:bg-white rounded-sm px-[2px] absolute -bottom-2 left-1/2 -translate-x-1/2 text-white dark:text-alt-dark">
              {message.message.time}
            </p>
          </div>
          <h1
            className={clsx(
              message.user.color.bg,
              message.user.id === id ? "rounded-tr-none" : "rounded-tl-none",
              "min-w-[40%] max-w-[70%] p-4 rounded-xl text-xl text-white"
            )}
          >
            {message.message.value}
          </h1>
        </li>
      );
    });
  };

  return (
    <div className="col-span-4 h-full rounded-3xl overflow-hidden bg-white dark:bg-alt-dark overflow-y-auto">
      <ul className="list-none p-4 space-y-4">{renderMessages(params)}</ul>
      <div ref={messagesEndRef} />
    </div>
  );
};

export default Chat;