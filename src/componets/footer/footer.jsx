import React from "react";
import "../../css/footer_css/footer.css";



export const Footer = (props) => {

    // console.log(props.store);
    if (!props || !props.store) {
      console.error("Свойство 'store' не передано или не определено");
      return null;
    }
  
    const x_icon = props.store.x_icon;
    const avatar_your = props.store.avatar_your;
  
    return (
      <div className="footer">
        <div className="profile">
          <img src={avatar_your} alt="avatar" />
          <div className="name_and_phone">
            <span className="name">Nick_Name</span>
            <span className="phone">+998-90-820-18-05</span>
          </div>
        </div>
        <div className="chat_your_and_user">
          <button className="chat_your">
            <img className="x_icon" src={x_icon} alt="x_icon" />
          </button>
        </div>
      </div>
    );




}