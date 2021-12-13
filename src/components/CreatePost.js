import { useState } from "react";
import { useDispatch } from 'react-redux';
import { addPost } from '../redux/actions';
import Mandalorian from "../assets/img/mando.png"
import Rey from "../assets/img/reycontact.png"
import BB8 from "../assets/img/bb8contact.jpg"

const NEWPOSTS = [
  {
    name: "Rey",
    avatar: Rey,
    nickname: "@Jakku",
    image: "https://lumiere-a.akamaihd.net/v1/images/hb_disneyplus_skywalkersaga_mobile_19267_e964ed2c.jpeg?region=0,0,640,400",
  },

  {
    name: "Mandalorian",
    avatar: Mandalorian,
    nickname: "@Mando",
    image: "https://images-na.ssl-images-amazon.com/images/I/71bBDuXUvOL.jpg",
  },

  {
    name: "BB8",
    avatar: BB8,
    nickname: "@droid",
    image: "https://lumiere-a.akamaihd.net/v1/images/bb-8-main_72775463.jpeg?region=187%2C40%2C882%2C496",
  }
]
export default function CreatePost() {
  const [name, setName] = useState("Rey")
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");

  const dispatch = useDispatch();

  const onCreatePost = (event) => {
    event.preventDefault();
    const selectedName = NEWPOSTS.find((post) => post.name === name);
    let today = new Date().toISOString().slice(0, 10)
    const comment = 0, retweet = 0, likes = 0;
    const id = Date.now().toString();
    dispatch(addPost({
      name: selectedName.name,
      avatar: selectedName.avatar,
      nickname: selectedName.nickname,
      content,
      date: today,
      comment,
      retweet,
      likes,
      image: selectedName.image,
      id,
    }));
    setName("Rey");
    setContent("");
    setImage("");
  };

  return (
    <form className="post-new" onSubmit={onCreatePost}>
      <select onChange={(e) => setName(e.target.value)}>
        {NEWPOSTS.map((post, index) => (
          <option value={post.name} key={index}>{post.name}</option>
        ))}
      </select>

      <input
        type="text"
        placeholder="Post text"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      
      <select onChange={(e) => setImage(e.target.value)}>
        {NEWPOSTS.map((post, index) => (
          <option value={post.image} key={index}>{post.image}</option>
        ))}
      </select>

      <button type="submit" onClick={onCreatePost}>
        Create
      </button>
    </form>
  );
}