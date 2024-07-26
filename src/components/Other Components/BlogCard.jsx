import "./BlogCard.css";

const BlogCard = ({ prop }) => {
  return prop.map(({ id, image, category, date, blogTitle, blogPara }) => {
    return (
      <div className="blog-cards" id={id}>
        <div className="blog-image-wrapper">
          <img src={image} alt="" />
        </div>
        <div className="blog-row">
          <div className="blog-category">
            <p>{category}</p>
          </div>
          <div className="blog-dates">
            <p>{date}</p>
          </div>
        </div>
        <h2>{blogTitle}</h2>
        <p className="blog-content">{blogPara}</p>
      </div>
    );
  });
};

export default BlogCard;
