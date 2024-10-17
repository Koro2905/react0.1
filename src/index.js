import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./componets/App";
import reportWebVitals from "./reportWebVitals";
import {store , despatch, addPost, updateNewPostText} from "./redux/store";


if (store === undefined || store === null) {
  console.error("Свойство 'store' не передано или не определено index.js");
  
  
}
// console.log(store);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
     
    <App
      store={store}
      despatch={despatch}
      addPost={addPost}
      updateNewPostText={updateNewPostText} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();



