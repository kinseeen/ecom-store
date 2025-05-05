import React, { useState, useEffect } from "react";

const Reviews = ({ productId }) => {
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchReviews() {
      try {
        const response = await fetch(
          `https://v2.api.noroff.dev/online-shop/${productId}/`
        );

        const data = await response.json();
        console.log("API Response: ", data);
        console.log(data.reviews.id);
        setReviews(data.reviews || []);

        if (data && data.reviews && Array.isArray(data.reviews)) {
          setReviews(data.data[0].reviews);
        } else {
          console.warn("No reviews");
          setReviews([]);
        }
      } catch (err) {
        setError("Could not load reviews");
      }
    }
    fetchReviews();
  }, [productId]);

  return (
    <div className="reviewBox">
      <h2> Reviews </h2>
      {error && <p> {error}</p>}
      <div>
        {reviews.length === 0 ? (
          <p> There are no reviews for this item </p>
        ) : (
          reviews.map((review, index) => (
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
