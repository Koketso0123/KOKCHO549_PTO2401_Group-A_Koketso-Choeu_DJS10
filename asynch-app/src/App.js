import React, { useState, useEffect } from "react";

const App = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  // fetch blog posts from API
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );

        // check if response is ok
        if (!response.ok) {
          throw new Error("Failed to fetch posts.");
        }

        const data = await response.json();
        setPosts(data);
      } catch (err) {
        // If an error occurs, set the error state
        setError("Data fetching failed");
      }
    };

    fetchPosts();
  }, []);

  // render based on success or error
  return (
    <div className="App">
      {error ? (
        <p style={{ color: "black", fontSize: "100px" }}>{error}</p>
      ) : (
        <>
          <h1>Blog Posts</h1>
          <ul>
            {posts.map((post) => (
              <li key={post.id}>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default App;
