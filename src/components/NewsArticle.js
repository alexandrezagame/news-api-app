import React from 'react';

const NewsArticle = ({ data }) => {
  return (
    <div className="news">
      <div className="news__data">
        <h1 className="news__title">{data.title}</h1>
        <span className="news__author">{data?.authors[0]?.name}</span>
        <br></br>
        <span className="news__published">{data.dateTimePub}</span>
        <br></br>
        <span className="news__source">
          <a href={data.url} alt="news source website" target="_blank">
            Source: "{data.source.title}"
          </a>
        </span>
      </div>
      <div className="news__info">
        <p className="news__description">{data.body}</p>
      </div>
    </div>
  );
};

export default NewsArticle;
