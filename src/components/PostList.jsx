import React from "react";
import PostItem from "./PostItem";

function PostList({ posts, title, deletePost }) {
  if (!posts.length) {
    return (
      <div>
        <h1 style={{ textAlign: "center" }}>Empty</h1>
      </div>
    );
  }
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>{title}</h1>
      {posts.map((post, index) => (
        <PostItem
          deletePost={deletePost}
          number={index + 1}
          post={post}
          key={post.id}
        />
      ))}
    </div>
  );
}

export default PostList;
