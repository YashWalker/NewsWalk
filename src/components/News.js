import React, { Component } from "react";
import NewsItem from "./NewsItem";
import PropTypes from "prop-types";
import Spinner from "./Spinner";

export default class News extends Component {
  static defaultProps = {
    country: "",
    pageSize: 9,
    category: "general",
  };
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }

  async updateNews() {
    let url = await fetch(
      `https://newsapi.org/v2/top-headlines?language=en&country=${this.props.country}&category=${this.props.category}&apiKey=32c0cb2bc5724f5cb4a1bf86ac5a2573&${this.state.page}&pageSize=${this.props.pageSize}`
    );
    this.setState({ loading: true });
    let news = await url.json();
    console.log(news.articles);
    this.setState({
      articles: news.articles,
      totalResults: news.totalResults,
      loading: false,
    });
  }

  async componentDidMount() {
    let url = await fetch(
      `https://newsapi.org/v2/top-headlines?language=en&country=${this.props.country}&category=${this.props.category}&apiKey=32c0cb2bc5724f5cb4a1bf86ac5a2573&page=1&pageSize=${this.props.pageSize}`
    );
    this.setState({ loading: true });
    let news = await url.json();
    console.log(news.articles);
    this.setState({
      articles: news.articles,
      totalResults: news.totalResults,
      loading: false,
    });
  }

  handlePrewClick = async () => {
    /*let url = await fetch(
      `https://newsapi.org/v2/top-headlines?country=${
        this.props.country
      }&apiKey=32c0cb2bc5724f5cb4a1bf86ac5a2573&page=${
        this.state.page - 1
      }&pageSize=${this.props.pageSize}"`
    );
    this.setState({ loading: true });
    let news = await url.json();
    console.log(news.articles);
    this.setState({
      page: this.state.page - 1,
      articles: news.articles,
      loading: false,
    });*/
    this.setState({ page: this.state.page - 1 });
    this.updateNews();
  };

  handleNextClick = async () => {
    /*if (
      !(
        this.state.page + 1 >
        Math.ceil(this.state.totalResults / this.props.pageSize)
      )
    ) {
      let url = await fetch(
        `https://newsapi.org/v2/top-headlines?country=${
          this.props.country
        }&apiKey=32c0cb2bc5724f5cb4a1bf86ac5a2573&page=${
          this.state.page + 1
        }&pageSize=${this.props.pageSize}`
      );
      console.log("next");
      this.setState({ loading: true });
      let news = await url.json();
      console.log(news.articles);
      this.setState({
        page: this.state.page + 1,
        articles: news.articles,
        loading: false,
      });
    }*/
    this.setState({ page: this.state.page + 1 });
    this.updateNews();
  };

  render() {
    return (
      <div className="container my-2">
        <h1 className="text-center my-3">Top Headlines Today!</h1>
        {this.state.loading && <Spinner />}
        <div className="row">
          {!this.state.loading &&
            this.state.articles.map((element) => {
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
                  >
                    {" "}
                  </NewsItem>
                </div>
              );
            })}
        </div>
        <div className=" container d-flex justify-content-between ">
          <button
            type="button"
            disabled={this.state.page <= 1}
            className="btn btn-dark"
            onClick={this.handlePrewClick}
          >
            &larr; Previous
          </button>
          <button
            type="button"
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pageSize)
            }
            className="btn btn-dark"
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}
