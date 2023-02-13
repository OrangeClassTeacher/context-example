import React, { useContext, useState } from "react";
import { NewsContext } from "../context";

export default function Search() {
  const { news, setFilteredNews } = useContext(NewsContext);
  const [searchTxt, setSearchTxt] = useState("");
  const onSearch = (e) => {
    setSearchTxt(e.target.value);
    const filterNews = news.filter((newsItem) => {
      if (
        newsItem.body &&
        newsItem.title &&
        newsItem.body.toLowerCase().includes(e.target.value.toLowerCase())
      ) {
        console.log(newsItem.body.toLowerCase());

        return newsItem;
      }
    });
    console.log(filterNews);
    setFilteredNews(filterNews);
  };
  return (
    <div className="m-3 row p-2">
      <div className="col-md-2 col-lg-6 d-flex align-items-center gap-3">
        <h2>Search</h2>
        <input
          type="text"
          value={searchTxt}
          className="form-control"
          onChange={onSearch}
        />
      </div>
    </div>
  );
}
