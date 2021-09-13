import React from "react";
import img from "./imgs/news.jpg";

export default function NewsItem(props) {
  let { title, description, imageUrl, newsUrl, author, date, source } = props;
  return (
    <>
      <div className="card my-2 " style={{ borderRadius: "10px" }}>
        <div
          style={{
            display: "flex",
            position: "absolute",
            justifyContent: "flex-end",
            right: "0",
          }}
        >
          <span className="badge rounded-pill bg-danger">{source}</span>
        </div>

        <img
          src={!imageUrl ? img : imageUrl}
          className="card-img-top"
          alt="..."
          style={{ borderRadius: "10px" }}
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description.slice(0, 100)}...</p>
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
