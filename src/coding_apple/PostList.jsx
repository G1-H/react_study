import { useState } from "react";
import Post from "./Post";

function PostList(props) {
  return (
    <>
      {props.data.map((content) => {
        return (
          <Post
            key={content.title}
            title={content.title}
            body={content.body}
            date={content.date}
          />
        );
      })}
    </>
  );
}

export default PostList;
