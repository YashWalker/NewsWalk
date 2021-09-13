import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem";
import PropTypes from "prop-types";
import Spinner from "./Spinner";

export default function News(props) {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const firstCap = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const updateNews = async () => {
    props.setProgress(10);
    setLoading(true);
    const url = await fetch(
      `https://newsapi.org/v2/top-headlines?language=en&country=${props.country}&category=${props.category}&apikey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`
    );
    props.setProgress(50);

    let news = await url.json();
    props.setProgress(80);
    setArticles(news.articles);
    setLoading(false);
    setTotalResults(news.totalResults);
    props.setProgress(100);
  };

  useEffect(() => {
    updateNews();
  }, []);

  const handlePrewClick = async () => {
    setPage(page - 1);
    updateNews();
  };

  const handleNextClick = async () => {
    setPage(page + 1);
    updateNews();
  };

  return (
    <div className="container my-2">
      <h1 className="text-center my-3">
        {firstCap(props.category)} - Top Headlines Today!
      </h1>
      {loading && <Spinner />}
      <div className="row">
        {!loading &&
          articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title ? element.title : ""}
                  description={element.description ? element.description : ""}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                  author={element.author ? element.author : "Anjaan"}
                  date={element.publishedAt}
                  source={element.source.name}
                />
              </div>
            );
          })}
      </div>
      <div className=" container d-flex justify-content-between ">
        <button
          type="button"
          disabled={page <= 1}
          className="btn btn-dark"
          onClick={handlePrewClick}
        >
          &larr; Previous
        </button>
        <button
          type="button"
          disabled={page + 1 > Math.ceil(totalResults / props.pageSize)}
          className="btn btn-dark"
          onClick={handleNextClick}
        >
          Next &rarr;
        </button>
      </div>
    </div>
  );
}

News.defaultProps = {
  country: "",
  pageSize: 9,
  category: "general",
};
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};
