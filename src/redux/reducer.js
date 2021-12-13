import { ADD_POST } from "./actions";
import avatarAnakin from "../assets/img/a-anakin.jpg"
import avatarChwe from "../assets/img/a-chwe.jpg"
import avatarYoda from "../assets/img/a-yoda.jpg"
import ray from "../assets/img/ray.jpg"
import bb8 from "../assets/img/BB-8.jpg"
import ray2 from "../assets/img/ray2.jpg"

const POSTS = [
    {
        avatar: avatarAnakin,
        name: "Anakin skywalker",
        nickname: "@dart_vader",
        content: "WTF? Who is Ray? Why she is Skywalker? Luke...?",
        date: "26 feb",
        comment: 482,
        commented: true,
        retweet: 146,
        retweeted: false,
        likes: 887,
        liked: false,
        image: ray,
        id: 'dart',
    },
    {
        avatar: avatarChwe,
        name: "Chewbacca",
        nickname: "@chewbacca",
        content: "Where is the full map, BB-8?",
        date: "26 feb",
        comment: 234,
        commented: false,
        retweet: 354,
        retweeted: false,
        likes: 999,
        liked: true,
        image: bb8,
        id: 'chewbacca',
    },
    {
        avatar: avatarYoda,
        name: "Yoda",
        nickname: "@grand_master_yoda",
        content: "The balance of the universe is shaking again...",
        date: "27 feb.",
        comment: 123,
        commented: false,
        retweet: 11,
        retweeted: false,
        likes: 222,
        liked: false,
        image: ray2,
        id: 'yoda',
    }
]

const initialState = {
    posts: POSTS,
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                posts: [...state.posts, action.payload],
            }
        default:
            return state;
    }
};