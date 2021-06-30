
import useFetch from "../../useFetch";
import BlogList from "../Blog/BlogList";
import Loading from "../Loading/Loading"
const Home = () => {

    const {data: blogs, isLoading, error} = useFetch("http://localhost:8000/blogs")

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isLoading && <Loading/>}
      {blogs && (
        <BlogList
          blogs={blogs}
          title="All Blogs!"
        />
      )}
      {/* <BlogList blogs={blogs.filter((blog)=> blog.author === "mario")} title="Mario's blogs" /> */}
    </div>
  );
};

export default Home;
