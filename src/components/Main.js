import axios from "axios";
import React, { useEffect, useState } from "react";
import { NewsContext } from "../context";

export default function Main({ children }) {
  const [news, setNews] = useState([]);
  const [filteredNews, setFilteredNews] = useState([]);

  useEffect(() => {
    axios
      .get("https://medium-api-psi.vercel.app/api/news")
      .then((res) => {
        setNews(res.data.result);
        setFilteredNews(res.data.result);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <NewsContext.Provider value={{ news, filteredNews, setFilteredNews }}>
      <div>
        <h2>Main</h2>
        {children}
      </div>
    </NewsContext.Provider>
  );
}
