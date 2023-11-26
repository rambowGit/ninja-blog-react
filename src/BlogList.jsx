import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

const BlogList = ({blogs, title}) => {
  
  // const blogs = props.blogs;
  // const title = props.title;
  // console.log(blogs);
  
  return ( 
    <div className="blog-list">
      <h2>{ title }</h2>
       {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <Link to={ `/blogs/${blog.id}` }>
            <h2>{blog.title}</h2>
          </Link>
          <p>Writen by {blog.author}</p>
        </div>
      ))}

    </div>
   );
}
 
BlogList.propTypes = {
  blogs: PropTypes.array.isRequired,
  title: PropTypes.string,
  handleDelete: PropTypes.func
}
export default BlogList;