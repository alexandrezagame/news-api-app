import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';
import dotenv from 'dotenv';

// (function () {
//   var cors_api_host = 'cors-anywhere.herokuapp.com';
//   var cors_api_url = 'https://' + cors_api_host + '/';
//   var slice = [].slice;
//   var origin = window.location.protocol + '//' + window.location.host;
//   var open = XMLHttpRequest.prototype.open;
//   XMLHttpRequest.prototype.open = function () {
//     var args = slice.call(arguments);
//     var targetOrigin = /^https?:\/\/([^/]+)/i.exec(args[1]);
//     if (
//       targetOrigin &&
//       targetOrigin[0].toLowerCase() !== origin &&
//       targetOrigin[1] !== cors_api_host
//     ) {
//       args[1] = cors_api_url + args[1];
//     }
//     return open.apply(this, args);
//   };
// })();
dotenv.config();
export const NewsContext = createContext();

export const NewsContextProvider = (props) => {
  const [data, setData] = useState();
  const apiKey = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    axios
      .get(
        `https://www.newsapi.ai/api/v1/article/getArticles?query=%7B%22%24query%22%3A%7B%22lang%22%3A%22eng%22%7D%7D&dataType=news&resultType=articles&articlesSortBy=date&articlesCount=60&articleBodyLen=-1&includeConceptImage=true&includeSourceDescription=true&apiKey=${apiKey}`
      )
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  }, [apiKey]);

  return (
    <NewsContext.Provider value={{ data }}>
      {props.children}
    </NewsContext.Provider>
  );
};
