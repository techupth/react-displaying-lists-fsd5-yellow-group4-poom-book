/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import "./App.css";
import movies from "./data/movies.jsx";

function App() {
  return (
    <div
      className="App"
      css={css`
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        height: 100%;
      `}
    >
      <h1>Movie List Section</h1>
      <section className="movie-list-section">
        {movies.map((item, index) => {
          return (
            <div
              key={index}
              className="all-card"
              css={css`
                margin: 30px 0 30px 0;
              `}
            >
              <div
                className="card"
                css={css`
                  border: 1px solid white;
                  display: flex;
                  flex-direction: row;
                  background-color: white;
                  border-radius: 10px;
                  gap: 20px;
                `}
              >
                <div className="image">
                  <img
                    src={item.image}
                    css={css`
                    width: 102px;
                    height: 100px;
                    object-fit: contain
                    flex-shrink: 0;
                    border-radius: 10px;
                    margin: 10px 0 0 10px;                  
                  `}
                  ></img>
                </div>
                <div
                  className="imformation"
                  css={css`
                    color: #181818;
                    font-size: 20px;
                    font-style: normal;
                    font-weight: 400;
                    line-height: 18px;
                    flex-direction: column;
                    justify-content: center;
                  `}
                >
                  <p>Title: {item.title}</p>
                  <p>Year: {item.year}</p>
                  <p>Runtime: {item.runtime}</p>
                  <p>
                    Genres:
                    {item.genres.map((style, index) => {
                      return (
                        <span
                          key={index}
                          css={css`
                            width: 68px;
                            height: 27px;
                            border-radius: 10px;
                            background: #eaac99;
                            padding: 2px;
                            margin: 0 5px 0 5px;
                          `}
                        >
                          {style}
                        </span>
                      );
                    })}
                  </p>
                  <p>IMDB Ratings: {item.imdbRating}</p>
                  <p>IMDB Votes: {item.imdbVotes}</p>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}

export default App;
