import React, { Component } from "react";
import img from "./imgs/news.jpg";

export default class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date, source } =
      this.props;
    return (
      <>
        <div className="card my-2 ">
          <span
            className="position-absolute top-0  translate-middle badge rounded-pill bg-danger"
            style={{ zIndex: 1, left: "85%" }}
          >
            {source}
          </span>
          <img
            src={!imageUrl ? img : imageUrl}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description.slice(0, 80)}...</p>
            <p className="card-text">
              <small className="text-muted">
                By {author} on {new Date(date).toUTCString()}
              </small>
            </p>
            <a
              rel="noreferrer"
              href={newsUrl}
              target="_blank"
              className="btn btn-dark"
            >
              Read More
            </a>
          </div>
        </div>
      </>
    );
  }
}
