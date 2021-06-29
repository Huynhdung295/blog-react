import React from "react";
import { useParams, useHistory } from "react-router-dom";
import useFetch from "../../useFetch";
import Loading from "../Loading/Loading";

import "./BlogDetail.css";
function BlogDetails() {
  const { id } = useParams();
  const { data, isLoading, error } = useFetch(
    `http://localhost:8000/blogs/${id}`
  );
  const history = useHistory();
  const handleDelete = () => {
    fetch(`http://localhost:8000/blogs/${id}`, {
      method: "DELETE",
    }).then(() => {
      history.push("/");
    });
  };
  const linkToUpdate = () => {
    history.push(`/update/${id}`);
  };

  return (
    <div className="blog-details">
      {isLoading && <Loading />}
      {error && <div>{error}</div>}
      {data && (
        <article>
          <div className="title-delete">
            <h2>{data.title}</h2>
            <span className="edit-delete">
              <button onClick={linkToUpdate}>Edit</button>
              <button  onClick={handleDelete}>Delete Blog</button>
            </span>
          </div>
          <p>Written by {data.author}</p>
          <div> {data.body}</div>
        </article>
      )}
    </div>
  );
}

export default BlogDetails;
