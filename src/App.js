import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

import NavBtn from "./coding_apple/NavBtn";
import PostList from "./coding_apple/PostList";
import { useEffect } from "react";

function App() {
  const postExample = [
    {
      title: "남자 코트 추천",
      body: "남자 코트 맛집 알려드립니다.",
      date: "2월 17일",
    },
    {
      title: "강남 우동 맛집",
      body: "따뜻한 우동, 차가운 우동",
      date: "2월 17일",
    },
    {
      title: "파이썬 독학",
      body: "파이썬은 무슨 리액트 독학이나해봐라",
      date: "2월 17일",
    },
  ];
  let [posts, setPosts] = useState(postExample);
  useEffect(() => {
    console.log("Posts 상태가 변경되었습니다:", posts);
  }, [posts]);

  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={{ color: "tomato", fontWeight: "bolder", fontSize: "16px" }}>
          ReactBlog
        </h4>
        <NavBtn
          btnName="타이틀 변경하기"
          onClick={() => {
            let copy = [...posts];
            copy[0].title = "여자 코트 추천";
            setPosts(copy);
          }}
        />
        <NavBtn
          btnName="타이틀 순서 정렬"
          onClick={() => {
            let sortedPosts = [...posts];
            sortedPosts.sort((a, b) => {
              return a.title.localeCompare(b.title);
            });

            setPosts(sortedPosts);
          }}
        />
      </div>
      <PostList data={posts} />
    </div>
  );
}

export default App;
