import React from 'react';

const NewsArticle = ({ data }) => {
  return (
    <div className="news">
      <div className="news__data">
        <h1 className="news__title">{data.title}</h1>
        <span className="news__author">{data?.authors[0]?.name}</span>

        <br></br>
        <span className="news__source">
          <a
            href={data.url}
            alt="news source website"
            target="_blank"
            rel="noopener noreferrer"
          >
            Source: "{data.source.title}"
          </a>
        </span>
      </div>
      {data.image ? (
        <img src={data?.image} alt={data.title} />
      ) : (
        <img
          src="https://images.unsplash.com/photo-1565453006698-a17d83b9e2af?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8bmV3c3BhcGVyfGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
          alt="newspaper"
        />
      )}

      <div className="news__info">
        <p className="news__description">{data.body}</p>
      </div>
    </div>
  );
};

export default NewsArticle;
