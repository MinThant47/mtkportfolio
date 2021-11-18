import "./Skeleton.css";

const Skeleton = () => {
  return (
    <div>
      <div className="skeleton-container">
        <div className="img-skeleton"></div>
        <div className="content-skeleton">
          <div className="title-skeleton"></div>
          <div className="category-skeleton mb-4"></div>

          <div className="text-skeleton-1"></div>
          <div className="text-skeleton-2"></div>
          <div className="text-skeleton-1"></div>
          <div className="text-skeleton-3"></div>

          <div className="btn-skeleton"></div>
        </div>
      </div>
    </div>
  );
};

export default Skeleton;
