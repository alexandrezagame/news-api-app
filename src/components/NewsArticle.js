import React from 'react';

const NewsArticle = ({ data }) => {
  return (
    <div className="news">
      <h1 className="news__title">{data.title}</h1>
      <p className="news__description">{data.body}</p>
      <span className="news__author">{data?.authors[0]?.name}</span>
      <br></br>
      <span className="news__published news__info">{data.dateTimePub}</span>
      <br></br>
      <span className="news__source news__info">
        <a href={data.url} alt="news source website" target="_blank">
          {data.source.uri}
        </a>
      </span>
    </div>
  );
};

export default NewsArticle;
