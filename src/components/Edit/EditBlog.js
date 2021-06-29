import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import useFetch from "../../useFetch";
import Loading from "../Loading/Loading";

import "./EditBlog.css";
function EditBlog() {
  const { id } = useParams();

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("mario");
  const [isPending, setIsPending] = useState(false);

  const history = useHistory();

  useEffect(() => {
   setTimeout(() => {
    fetch(`http://localhost:8000/blogs/${id}`, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setTitle(data.title);
          setBody(data.body);
          setAuthor(data.author);
        });
   }, 0);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };
    setIsPending(true);
    fetch(`http://localhost:8000/blogs/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      setIsPending(false);
      history.go(-1);
    });
  };
  return (
    <div className="update">
     
      <h2>Edit Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Blog author:</label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="mario">mario</option>
          <option value="yoshi">yoshi</option>
        </select>
        {!isPending && <button>Update Blog</button>}
        {isPending && <button disabled>Updating Blog...</button>}
      </form>
    </div>
  );
}

export default EditBlog;
