import React from "react";
import "./article.css";

const Article = ({ image, date, title }) => {
  return (
    <div className="gpt3__article">
      <div className="gpt3__article-image">
        <img src={image} alt="article media" />
      </div>
      <div className="gpt3__article-content">
        <div className="gpt3__article-content-header">
          <p>{date}</p>
          <h2>{title}</h2>
        </div>
        <div className="gpt3__article-content-footer">
          <button type="button">Read Full Article</button>
        </div>
      </div>
    </div>
  );
};

export default Article;
