import React from "react";

const Price = ({ price, discountedPrice }) => {
  const pricePoint = Number(price);
  const DiscountPricePoint = Number(discountedPrice);
  const isOnSale = DiscountPricePoint < pricePoint;
  const discountAmount = pricePoint - DiscountPricePoint;

  return (
    <div className="price">
      {isOnSale ? (
        <>
          <p>
            <span>${DiscountPricePoint.toFixed(2)}</span>
          </p>
          <p>You save: ${discountAmount.toFixed(2)}</p>
        </>
      ) : (
        <p> ${pricePoint.toFixed(2)}</p>
      )}
      <p> ${}</p>
    </div>
  );
};

export default Price;
