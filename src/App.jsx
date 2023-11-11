import { useState } from "react";
import data from "./data";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa6";

const App = () => {
  // const [reviews, setReviews] = useState(data);
  const [imgNum, setImgNum] = useState(0);
  const { id, name, job, image, text } = data[imgNum];
  return (
    <main>
      <article className="review" key={id}>
        <div className="img-container">
          <img className="person-img" src={image} alt="" />
          <div className="quote-icon"></div>
        </div>

        <h3 className="author">{name}</h3>
        <p className="job">{job}</p>
        <p className="info">{text}</p>
        <div className="btn-container">
          <button
            className="btn prev-btn"
            onClick={() => {
              if (imgNum !== 0) {
                setImgNum(imgNum - 1);
              } else {
                setImgNum(data.length - 1);
              }
            }}
          >
            <FaChevronLeft />
          </button>
          <button
            className="btn next-btn"
            onClick={() => {
              if (imgNum !== data.length - 1) {
                setImgNum(imgNum + 1);
              } else {
                setImgNum(0);
              }
            }}
          >
            <FaChevronRight />
          </button>
        </div>
        <button
          className="btn btn-hipster"
          onClick={() => {
            const rd = Math.floor(Math.random() * 4);
            setImgNum(rd);
          }}
        >
          Surprise Me
        </button>
      </article>
    </main>
  );
};
export default App;
