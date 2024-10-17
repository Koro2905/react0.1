import ava1 from "../images/ava1.png";
import ava2 from "../images/ava2.png";
import ava3 from "../images/ava3.png";
import ava4 from "../images/ava4.jpg";
import avatar_your from "../images/avatar_your.png";
import x_icon from "../images/X.png";

const Update_New_PostText = "UPDATE-NEW-POST-TEXT-FRIEND";
const Add_Post = "ADD-POST-FRIEND";

export const updateNewPostText = (newText) => {
  return {
    type: Update_New_PostText,
    newText: newText,
  };
};

export const addPost = (img, name, message) => {
  return {
    type: Add_Post,
    img: img,
    Nick: name,
    message: message,
  };
};
export const despatch = (action, store) => {
  if (store && store.profilePage.newPostText !== undefined) {
    if (action.type === Update_New_PostText) {
      store.profilePage.newPostText = action.newText;
      window.newPostText = store.profilePage.newPostText;
    }

    if (action.type === Add_Post) {
      const activeUser = store.profilePage.posts.find(
        (user) => user.Nick_Name === action.Nick
      );

      if (activeUser) {
        const newMessage = {
          nick: "you",
          message: action.message, 
        };

        activeUser.history_messages.push(newMessage);
      }

      store.profilePage.newPostText = ""; 
    }
  }
};

export const store = {
  avatar_your: avatar_your,
  x_icon: x_icon,

  profilePage: {
    posts: [
      {
        id: 1,
        img: ava1,
        Nick_Name: "alex",
        history_messages: [
          { nick: "alex", message: "hello1" },
          { nick: "you", message: "hi" },
          { nick: "alex", message: "how are you1" },
          { nick: "you", message: "I'm good" }
        ],
      },
      {
        id: 2,
        img: ava2,
        Nick_Name: "chris",
        history_messages: [
          { nick: "chris", message: "hello2" },
          { nick: "chris", message: "how are you2" },
          { nick: "you", message: "I'm good" }
        ],
      },
      {
        id: 3,
        img: ava3,
        Nick_Name: "bob",
        history_messages: [
          { nick: "bob", message: "hello3" },
          { nick: "you", message: "hi" }
        ],
      },
      {
        id: 4,
        img: ava4,
        Nick_Name: "bek",
        history_messages: [
          { nick: "bek", message: "how are you4" },
          { nick: "you", message: "I'm good4" }
        ],
      },
    ],
    newPostText: "",
  },
};


