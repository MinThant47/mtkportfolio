import React from "react";

export default function SkeletonPortfolio() {
  return (
    <div className="skeleton-portfolio-container">
      <div className="skeleton-porfolio-content">
        <div className="img-skeleton-portfolio"></div>
        <div className="skeleton-portfolio-data">
          <div className="title-skeleton"></div>
          <div className="category-skeleton mb-3"></div>

          <div className="text-skeleton-1"></div>
          <div className="text-skeleton-2"></div>
        </div>
      </div>
    </div>
  );
}
