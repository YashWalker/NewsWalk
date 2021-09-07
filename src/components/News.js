import React, { Component } from "react";
import NewsItem from "./NewsItem";

export default class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
    };
  }

  async componentDidMount() {
    let url = await fetch(
      "https://newsapi.org/v2/top-headlines?country=in&apiKey=32c0cb2bc5724f5cb4a1bf86ac5a2573"
    );
    let news = await url.json();
    console.log(news.articles);
    this.setState({ articles: news.articles });
  }

  render() {
    return (
      <div className="container my-3">
        <h2>Top Headlines Today!</h2>
        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <>
                <div className="col-md-4">
                  <NewsItem
                    title={element.title ? element.title : ""}
                    description={element.description ? element.description : ""}
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                  ></NewsItem>
                </div>
                <div className="d-flex justify-content-between">
                  <button type="button" class="btn btn-dark">
                    Previous
                  </button>
                  <button type="button" class="btn btn-dark">
                    Next
                  </button>
                </div>
              </>
            );
          })}
        </div>
      </div>
    );
  }
}
