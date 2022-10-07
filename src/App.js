import React, { useState, useMemo } from "react";
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import "./styles/App.css";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/MyModal/MyModal";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "Javascript", body: "Desc" },
    { id: 2, title: "Python", body: "Desc py" },
    { id: 3, title: "C#", body: "Desc c#" },
    { id: 4, title: "C++", body: "Desc c++" },
  ]);

  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [modal, setModal] = useState(false);

  const sortedPosts = useMemo(() => {
    console.log("Call");
    if (filter.sort) {
      return [...posts].sort((a, b) =>
        a[filter.sort].localeCompare(b[filter.sort])
      );
    }
    return posts;
  }, [filter.sort, posts]);
  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  const resultPosts = useMemo(() => {
    return sortedPosts.filter((post) =>
      post.title.toLowerCase().includes(filter.query.toLowerCase())
    );
  }, [filter.query, sortedPosts]);

  const deletePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  return (
    <div className="App">
      <MyButton style={{ marginTop: 10 }} onClick={() => setModal(true)}>
        Create post
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        {" "}
        <PostForm create={createPost} />
      </MyModal>
      {/* <PostForm create={createPost} /> */}
      <hr style={{ margin: "15px 0" }} />
      <PostFilter filter={filter} setFilter={setFilter} />
      <PostList deletePost={deletePost} posts={resultPosts} title="Post list" />
    </div>
  );
}

export default App;
