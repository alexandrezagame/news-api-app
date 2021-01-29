import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';
import dotenv from 'dotenv';

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
