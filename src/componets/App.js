import React from "react";
import "../css/App.css";
import { Header } from "./header/header.jsx";
import { Main } from "./main/main.jsx";
import { Footer } from "./footer/footer.jsx";
import { BrowserRouter } from "react-router-dom";

export default function App(props) {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="container">
          <Header />
          <Main
            store={props.store}
            
            despatch={props.despatch}
            addPost={props.addPost}
            updateNewPostText={props.updateNewPostText}
          />
          
          <Footer store={props.store} />
        </div>
      </div>
    </BrowserRouter>
  );
}
