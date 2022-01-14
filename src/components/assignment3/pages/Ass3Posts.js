import axios from "axios";
import { useEffect, useState } from "react";
import Post from "./Post";

function Ass3Posts() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const getData = async () => {
      let response = await axios.get("https://reqres.in/api/users?page=2");
      let res = response.data;
      setPosts(res.data);
    };
    getData();
  }, []);

  return (
    <div className="container text-center">
      <div className="container my-3">
        <h4>Post authors</h4>
      </div>
      <div>
        {posts.map((post) => {
          return (
            <Post
              key={post.id}
              first_name={post.first_name}
              last_name={post.last_name}
              email={post.email}
              avatar={post.avatar}
            />
          );
        })}
        {/* <Post></Post> */}
      </div>
    </div>
  );
}

export default Ass3Posts;
