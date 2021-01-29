import React, { useContext } from 'react';
import { NewsContext } from '../NewsContext';
import NewsArticle from './NewsArticle';
import Moment from 'react-moment';
import moment from 'moment';

function News(props) {
  const { data } = useContext(NewsContext);
  console.log(data);

  const today = moment();
  console.log(today.format('dddd'));

  return (
    <div>
      <div className="header__part">
        <div className="paper__title">
          <h1 className="head__text">THE API NEWSPAPER</h1>
        </div>
        <div className="owner__info">
          <Moment format="Do MMMM YYYY" date={today} />

          <a
            href="https://www.alexzagame.com/"
            alt="Alex Zagame portfolio"
            target="_blank"
          >
            By Alex Zagame
          </a>
        </div>
      </div>

      <div className="news__part">
        <div className="all__news">
          {data
            ? data.articles.results.map((news) => (
                <NewsArticle data={news} key={news.url} />
              ))
            : 'Loading'}
        </div>
      </div>
    </div>
  );
}

export default News;
