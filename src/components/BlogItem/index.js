// Write your JS code here
import './index.css'

const BlogItem = props => {
  const {blogDetails} = props
  const {title, description, publishedDate} = blogDetails

  return (
    <li className="list-container">
      <div className="description-container">
        <h1 className="title">{title}</h1>
        <p className="description">{description} </p>
      </div>
      <p className="time">{publishedDate} </p>
    </li>
  )
}
export default BlogItem
