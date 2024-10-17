import React, { useState } from "react";
import "../../css/main_css/main.css";
import { NavLink, Routes, Route, useParams } from "react-router-dom";

const Users = (props) => {
  const users = props.store.profilePage.posts;

  return (
    <div className="users-container">
      {users.map((user, index) => (
        <NavLink
          key={index}
          to={`/profile/${user.Nick_Name}`}
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          {user_message(user)}
        </NavLink>
      ))}
    </div>
  );
};

const user_message = (user) => {
  return (
    <div className="users">
      <div className="user">
        <img className="avatar" src={user.img} alt="avatar" />
        <div className="user_message">
          <span className="nick">{user.Nick_Name}</span>
        </div>
      </div>
    </div>
  );
};

const Chats = (props) => {
  
  
  const { Nick_Name } = useParams();
  const currentUser = props.store.profilePage.posts.find(
    (user) => user.Nick_Name === Nick_Name
  );

  const [message, setMessage] = useState("");

  if (!currentUser) {
    return <div>User not found</div>;
  }

  const userMessages = currentUser.history_messages || [];

  const handleSendMessage = () => {
    if (message.trim() !== "") {
      props.despatch(
        props.addPost(currentUser.img, currentUser.Nick_Name, message), 
        props.store
      );
      setMessage(""); 
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSendMessage(); 
    }
  };

  return (
    <div>
    <div className="chats">
      {userMessages.map((msg, index) => (
        <div key={index} className="chat">
          <img
            src={msg.nick === "you" ? props.store.avatar_your : currentUser.img}
            alt="avatar"
            className="avatar"
          />
          <div className="chat_message">
            <span className="nick">{msg.nick}</span>
            <span className="message">{msg.message}</span>
          </div>
        </div>
      ))}

      

    </div>
    <div className="massage_sand">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Enter your message"
          onKeyDown={handleKeyDown}
        />
        <button type="submit" onClick={handleSendMessage}>
          Send
        </button>
      </div>
    </div>
  );
};


export const Main = (props) => {
  return (
    <div className="main">
      <Users store={props.store} />
      <div className="app-chats">
        <Routes>
          <Route
            path="/profile/:Nick_Name"
            element={
              <Chats
                store={props.store}
                despatch={props.despatch}
                addPost={props.addPost}
                updateNewPostText={props.updateNewPostText}
              />
            } 
          />
        </Routes>
      </div>
    </div>
  );
};
