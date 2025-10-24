import React, { useState } from "react";
import "./CusRev.css";

const reviews = [
  {
    id: 1,
    name: "Ananya Verma",
    image: "ananya.png",
    text: "This tool helped me confidently decide between staying in Delhi or exploring opportunities in Dubai. Loved the clarity!",
    rating: 4.5,
  },
  {
    id: 2,
    name: "Rohan Mehta",
    image: "rohan.png",
    text: "Incredible visualization. Great experience I had! But I just wish it had even more cities in India to compare.",
    rating: 4,
  },
];

const StarRating = ({ rating }) => {
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;

  for (let i = 0; i < fullStars; i++) {
    stars.push(<span key={i} className="star">★</span>);
  }

  if (hasHalfStar) {
    stars.push(<span key="half" className="star half">★</span>);
  }

  while (stars.length < 5) {
    stars.push(<span key={`empty-${stars.length}`} className="star empty">★</span>);
  }

  return <div className="star-rating">{stars}</div>;
};

const CusRev = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const cardWidth = 565; // card width + margin

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, reviews.length - 1));
  };

  return (
    <div className="cusrev-container">
      <h1>Customer Reviews</h1>
      <div className="carousel-wrapper">
        <button className="arrow left" onClick={handlePrev}>‹</button>

        <div className="carousel-window">
          <div
            className="carousel-track"
            style={{ transform: `translateX(-${currentIndex * cardWidth}px)` }}
          >
            {reviews.map((review) => (
              <div className="review-card" key={review.id}>
                <div className="review-img-wrapper">
                  <img src={`/${review.image}`} alt={review.name} className="review-img" />
                </div>
                <div className="review-content">
                  <p>"{review.text}"</p>
                  <StarRating rating={review.rating} />
                  <p className="reviewer-name">~ <b>{review.name}</b></p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button className="arrow right" onClick={handleNext}>›</button>
      </div>
    </div>
  );
};

export default CusRev;
