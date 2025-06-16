import Detox from "../../assets/Blog-image.png";
import RebeccaLee from "../../assets/RebeccaLee.png";
import "./BlogsAndNews.css";

const BlogsAndNews = () => {
  return (
    <div className="Blog-Section">
      <p>Blog & News</p>
      <h3 className="main-heading dark-blue">Read Our Latest News</h3>
      <div className="card-flex">
        <div className="card">
          <img src={Detox} alt="Blog Thumbnail" />
          <div className="details">
            <span className="tag">Medical</span>
            <span className="partition"> | </span>
            <span className="date">March 31, 2022</span>
            <p className="heading dark-blue">
              6 tips to protect your mental health when you're sick
            </p>
            <div className="author">
              <img src={RebeccaLee} alt="Rebecca Lee" />
              <div className="author-name dark-blue">Rebecca Lee</div>
            </div>
          </div>
        </div>

        <div className="card">
          <img src={Detox} alt="Blog Thumbnail" />
          <div className="details">
            <span className="tag">Medical</span>
            <span className="partition"> | </span>
            <span className="date">March 31, 2022</span>
            <p className="heading dark-blue">
              6 tips to protect your mental health when you're sick
            </p>
            <div className="author">
              <img src={RebeccaLee} alt="Rebecca Lee" />
              <div className="author-name dark-blue">Rebecca Lee</div>
            </div>
          </div>
        </div>

        <div className="card">
          <img src={Detox} alt="Blog Thumbnail" />
          <div className="details">
            <span className="tag">Medical</span>
            <span className="partition"> | </span>
            <span className="date">March 31, 2022</span>
            <p className="heading dark-blue">
              6 tips to protect your mental health when you're sick
            </p>
            <div className="author">
              <img src={RebeccaLee} alt="Rebecca Lee" />
              <div className="author-name dark-blue">Rebecca Lee</div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default BlogsAndNews;
