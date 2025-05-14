import React, { useState, useEffect } from "react";
import "../itemReview/itemReview.css";

const Reviews = ({ reviewsArray }) => {
  const [error] = useState(null);

  return (
    <div className="reviewBox">
      <h2> Reviews </h2>
      {error && <p> {error}</p>}
      <div>
        {reviewsArray.length === 0 ? (
          <p className="noReview"> There are no reviews for this item </p>
        ) : (
          reviewsArray.map((review, index) => (
            <div key={index} className="review">
              <p>
                <strong> {review.username} </strong>
              </p>
              <p> Rating: {review.rating}</p>
              <p> Description: {review.description}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Reviews;
